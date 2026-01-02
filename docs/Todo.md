# ToDoList

## 20251231

1. 修正app 根目錄的關係路由
    `[官方文件](https://docs.expo.dev/router/advanced/authentication/)`

2. 製作 theme
    `[官方文件](https://docs.expo.dev/develop/user-interface/color-themes/)`

3. 將 git branch 重新命名與正規化

## 20251229

1. 任務 1：做出 RootStack（Auth / AppTabs 分流）

    未登入 → 只能進 AuthStack（登入/註冊）

    登入成功 → reset 到 AppTabs

    登出 → reset 回 AuthStack

2. 任務 2：每個 Tab 內包一個 Stack（列表 → 詳情）

    例如：

    訂購 Tab：OrderHome → ProductList → ProductDetail

    活動 Tab：EventList → EventDetail → CheckIn

3. 任務 3：權限分級的呈現策略（你最在意的部分）

    以「消費紀錄」做示範：

    一個入口：PurchaseHistory

    依 role 顯示：

    一般會員：只看到一般紀錄

    VIC：看到 VIC + 一般（或 VIC 專屬）

    VIP：看到 VIP + VIC + 一般（依公司規則）

    UI 呈現方式可選：

    同頁上方 SegmentedControl / Tabs（VIP/VIC/一般）

    或直接根據 role 決定預設篩選、可切換範圍
