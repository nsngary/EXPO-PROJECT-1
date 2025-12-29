import { StyleSheet, Pressable, type PressableProps } from 'react-native'
import { useEffect } from 'react'
import { icon } from '@/constants/icon'
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

type TabBarButtonProps = {
    onPress?: PressableProps['onPress'],
    onLongPress?: PressableProps['onLongPress'],
    isFocused: boolean,
    routeName: string,
    color: string,
    label: string
};

const TabBarButton = ({
    onPress, 
    onLongPress, 
    isFocused, 
    routeName, 
    color, 
    label
}: TabBarButtonProps) => {
    const scale = useSharedValue(0);
    const Icon = icon[routeName as keyof typeof icon];

    

    useEffect(() => {
        scale.value = withSpring(
            typeof isFocused === 'boolean' ? (isFocused ? 1 : 0) : isFocused, 
            {duration: 350});
    }, [scale, isFocused]);

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.5]);

        const top = interpolate(scale.value, [0, 1], [0, 9]);

        return {
            transform: [{
                scale: scaleValue,
            }],
            top
        }
    });

    const animatedTextStyle = useAnimatedStyle (() => {
        const opacity = interpolate(scale.value, [0, 1], [1, 0]); 
        
        return {
            opacity, 
        }

    });

    if (!Icon) {
        return null;
    }

  return (
    <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={ styles.tabbarItem}
    >
        <Animated.View style={animatedIconStyle}>
            <Icon color={isFocused ? '#2F4474' : '#6B85C2'} />
        </Animated.View>

        <Animated.Text style={[{ color: '#6B85C2', fontSize: 12 }, animatedTextStyle]}>
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
