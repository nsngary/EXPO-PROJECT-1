# 自訂 BottomTab（Expo Router）

這份筆記以 `expo-project-1` 的做法為基礎，整理「從 0 建立自訂 BottomTab」的步驟與重點檔案。

## 1) 建立乾淨專案

- 建立專案（建議使用 Router 範本）：
  - `npx create-expo-app expo-project-1 -t expo-router`
- 確認 `package.json` 入口：
  - `"main": "expo-router/entry"`
- 依需求安裝：
  - `expo-router`, `react-native-reanimated`, `@react-navigation/bottom-tabs`, `@expo/vector-icons`

## 2) 建立 Router 結構

- `app/_layout.tsx`：
  - 放 `Stack`，並在最上方加入 `import 'react-native-reanimated';`
- `app/(tabs)/_layout.tsx`：
  - 使用 `Tabs`，並把自訂 `TabBar` 掛上去

範例：

<Tabs tabBar={props => <TabBar {...props} />}>
  <Tabs.Screen name="index" options={{ title: 'Home' }} />
  <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
  <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
</Tabs>

## 3) 建立 Tab Screens

- `app/(tabs)/index.tsx`
- `app/(tabs)/explore.tsx`
- `app/(tabs)/profile.tsx`

## 4) 建立 Icon 對應表

- `constants/icon.tsx`：
  - 讓路由名稱對應到 icon component

## 5) 建立 TabBarButton（單一按鈕）

- `components/TabBarButton.tsx`
- 功能：
  - `Pressable` 包 icon + label
  - 用 `react-native-reanimated` 做縮放／位移動畫
- 注意：所有 hooks 必須放在任何 `return` 之前

## 6) 建立 TabBar（整體容器）

- `components/TabBar.tsx`
- 使用 `BottomTabBarProps` 取得 `state / descriptors / navigation`
- 用 `onLayout` 取得寬度後計算 `buttonWidth`
- 使用 `useSharedValue + useAnimatedStyle` 讓底部指示器移動
- 點擊時 `navigation.navigate(...)`

## 7) 常見型別注意

- `tabBarLabel` 型別是 `string | function`：
  - 若 `TabBarButton` 只接受字串，請在 `TabBar.tsx` 先判斷，只取字串：
    - `typeof options.tabBarLabel === 'string' ? options.tabBarLabel : options.title ?? route.name`
- `Pressable` 的 `onPress` 型別建議用 `PressableProps['onPress']`

## 8) 小結（目前專案對應檔案）

- `app/(tabs)/_layout.tsx`：掛上自訂 `TabBar`
- `components/TabBar.tsx`：整體底條與動畫指示器
- `components/TabBarButton.tsx`：單一按鈕動畫
- `constants/icon.tsx`：icon 對應

## 9) 需要時再調整

- 指示器動畫：調整 `withSpring` 參數
- icon 與文字動畫：調整 `interpolate` 範圍
- 若要支援 function label，將 `label` 型別改為 `React.ReactNode`
