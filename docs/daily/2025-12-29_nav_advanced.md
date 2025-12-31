# 我已將原先的分支 tutorial ，完全複製成一個新的分支 nav-advanced。並修改原先的tabs與新增tabs，現在是首頁, 業績, 訂單, 活動, 我的，共五個tabs(原先三個)

但是多了兩個tab後，tabbar並沒有因此變寬，所以所有的tabs都擠在一起。

我將專案中的components/TabBar.tsx與component/TabBarButton.tsx上傳，請幫我分析tabs擠在一起原因，並提出修正建議，讓tabbar能在所有裝置都盡可能地貼近裝置螢幕邊界

## 新增了 2 tabs

### 修訂項目  (使用 safeArea 解決)

- 在 TabBar.tsx 中 `import { useSafeAreaInsets } from "react-native-safe-area-context";`

- 宣告 `const insets = useSafeAreaInsets();`

- 在 TabBar 中更改介面layout

``` typescript
export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  
  ...

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
```
