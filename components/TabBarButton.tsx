import { StyleSheet, Text, View, TouchableOpacity, Pressable, Animated } from 'react-native'
import React , { useEffect }from 'react'
import { icon } from '@/constants/icon'
import { useSharedValue, withSpring } from 'react-native-reanimated';

const TabBarButton = ({
    onPress, 
    onLongPress, 
    isFocused, 
    routeName, 
    color, 
    label
}: {
    onPress:Function, 
    onLongPress:Function, 
    isFocused:boolean, 
    routeName:string, 
    color:string, 
    label:string
}) => {
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(
            typeof isFocused === 'boolean' ? 
            (isFocused ? 1 : 0) : isFocused, {duration: 350});
    }, [scale, isFocused]);

    const animatedTextStyle =  ( () => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]); 
        
        return {
            opacity, 
        }

    });

  return (
    <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={ styles.tabbarItem}
    >
        {icon[routeName]({
            color: isFocused ? "#673ab7" : "#222"
        })}
        <Animated.Text style={{ color: isFocused ? '#673ab7' : '#222' }, animatedTextStyle}>
            {label}
        </Animated.Text>
    </Pressable>
  );
};

export default TabBarButton

const styles = StyleSheet.create({
    tabbarItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    }
})