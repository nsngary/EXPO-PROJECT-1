# 12/31 開發日誌

## NavItem 型別

- 在各 (tabs) 的`index.tsx` 中補上 `type NavItem = { label: string; href: Href}

```typescript
import { Href } from 'expo-router'

type NavItem = { label: string; href: Href }

const Home = () => {
  const navItems: NavItem[] = [
    { label: '禮物箱', href: '/home/gift-box' },
    { label: '每日簽到', href: '/home/daily-check-in' },
  ]

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>最新消息</Text> */}
      <Text style={styles.subtitle}>快速前往</Text>
      <View>
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} asChild>
            <Pressable style={styles.item}>
              <Text style={styles.itemText}>{item.label}</Text>
            </Pressable>
          </Link>
        ))}
      </View>
    </View>
  )
}
```

---

## 載入字體 NotoSerifTC

- 在 `./app/_layouts.tsx` 中匯入字體，後續檔案方可使用

```typescript

import { NotoSerifTC_400Regular, NotoSerifTC_600Semibold } from "@expo-google-fonts/noto-serif-tc"

```

---

## 建立共用文字元件 /component/StyledText.tsx (統一fontFamily)

- 目的:

避免每個畫面都重複寫 fontFamily，應預設套用字體

- 作法:

在需要文字的地方改成 import 包好的 Text
`import { Text } from "./../../../components/StyledText";`

- 可延伸:

讓 StyledText 支援字重切換（regular / semibold），這樣標題、headerTitle、按鈕文字可以共用同一套 API

## 新增 (auth) 層

- 目的：

讓登入相關頁面（sign-in / register / forgot password）不混在 tabs 裡
避免 (tabs) 底下多出不該成為 tab 的 route，導致「路由數量 ≠ tab button 數量」而 tabbar 跑版或不可點

- 方向：

1. (auth)：放登入頁 UI

2. (tabs)：放 5 個 tab

- 入口（/）負責導向到 sign-in 或 tabs（未來接 session 判斷）

### 重要經驗

曾把 index.tsx 放到 (tabs) 底下導致路由變 6 個 → 自訂 tabbar 只有 5 個 Pressable → 對不上造成跑版/點擊問題

登入後 tabbar 無法點擊，通常是「導航堆疊上仍殘留 auth/overlay」攔截觸控事件

短期用 router.dismissAll() 能止血

長期更正規作法是：登入成功用 router.replace('/(tabs)/home')，
並確保 auth 不以會覆蓋在 tabs 上的方式保留在 stack 之上（避免靠 dismissAll 續命）

## tab 資料夾命名: index -> home

- 把原本 (tabs) 中的index 改成 home，為了和所有(tabs)中的 index.tsx 作區別
