import { View, StyleSheet, LayoutChangeEvent } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
// import { Feather } from '@expo/vector-icons'
import TabBarButton from "./TabBarButton";
import { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const [dimensions, setDimensions] = useState({ height: 20, width: 100 });

  const buttonWidth = dimensions.width / state.routes.length;

  const onTabbarLayout = (e: LayoutChangeEvent) => {
    setDimensions({
      height: e.nativeEvent.layout.height,
      width: e.nativeEvent.layout.width,
    });
  };

  const tabPositionX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: tabPositionX.value }],
    };
  });

  const insets = useSafeAreaInsets();

  return (
    <View
      onLayout={onTabbarLayout}
      style={[
        styles.tabbar,
        {
          left: insets.left + 15,
          right: insets.right + 15,
          paddingHorizontal: 0,
        },
      ]}
    >
      <Animated.View
        style={[
          animatedStyle,
          {
            position: "absolute",
            backgroundColor: "#EEF2FF",
            borderRadius: 30,
            height: dimensions.height - 15,
            width: buttonWidth - 15,
            left: 7,
          },
        ]}
      />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          typeof options.tabBarLabel === "string"
            ? options.tabBarLabel
            : typeof options.title === "string"
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          tabPositionX.value = withSpring(buttonWidth * index, {
            duration: 750,
            dampingRatio: 0.55,
          });
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TabBarButton
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            isFocused={isFocused}
            routeName={route.name}
            color={isFocused ? "#673ab7" : "#222"}
            label={label}
          />
        );
      })}
    </View>
  );
}

// snippet : rnstyle
const styles = StyleSheet.create({
  tabbar: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderRadius: 35,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 5,
    shadowOpacity: 0.1,
  },
});
