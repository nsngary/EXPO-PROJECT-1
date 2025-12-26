import { Pressable, StyleSheet } from 'react-native'
import { useEffect } from 'react'
import { icon } from '@/constants/icon'
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated'

type TabBarButtonProps = {
    onPress: () => void
    onLongPress: () => void
    isFocused: boolean
    routeName: string
    color: string
    label: string
}

const TabBarButton = ({
    onPress, 
    onLongPress, 
    isFocused, 
    routeName, 
    color, 
    label
}: TabBarButtonProps) => {
    const scale = useSharedValue(isFocused ? 1 : 0)

    useEffect(() => {
        scale.value = withSpring(isFocused ? 1 : 0)
    }, [isFocused, scale])

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(
            scale.value,
            [0, 1],
            [1, 0],
            Extrapolation.CLAMP
        )
        
        return {
            opacity, 
        }

    })

    const Icon = icon[routeName as keyof typeof icon]

  return (
    <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        style={ styles.tabbarItem}
    >
        
        {Icon ? Icon({ color }) : null}
        <Animated.Text style={[{ color }, animatedTextStyle]}>
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
