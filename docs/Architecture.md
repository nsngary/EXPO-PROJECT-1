# 專案結構

## 概述

- 任職公司的舊款APP(有三款)，現在需要將這三款APP的功能整合成一個APP。
- 於此分析原先的專案結構(如呈現層View Layer、邏輯層Logic Layer、資料層Data Layer等)
- 由 React Native (RN) 搭配 EXPO 工具開發盡可能貼近移動端原生生態的APP
- 使用正規 RN 專案架構進行開發，以利後續進階開發與維護

---

## Goals / Non-Goals

## App 模組切分 (Feature Map)

## 導航架構 (Navigation)

- RootStack: AuthStack / AppTabs
- AppTabs: index(首頁) / performance(業績) / order(訂單) / event(活動) / profile(我的)
- 每個 Tab 內 stack
  - index
    - 最新消息
    - 禮物箱
    - 每日簽到
  - performance
    - 業績查詢 / 樹狀業績查詢
    - 獎金明細
  - order
    - 線上訂購
    - 消費紀錄
  - event
    - 行事曆
    - 活動報名 / 簽到
  - profile
    - 會員基本資料 / VIP / VIC 資料 (依身分顯示)
    - 表單中心
    - 產品檢驗文件 / 見證體驗
    - 登出 / 設定

## 資料流與分層 (Data/Domain/UI)

## Auth & Session

- token 儲存:　Expo 建議 expo-secure-store
- 啟動流程: 讀 token -> 驗證/刷新 -> 決定進入的stack

## Permission Model (RBAC)

- role 列表(一般/VIP/VIC)
- feature-level: 哪些 tab/頁面可見
- data-level: 同頁不同資料範圍(例如訂單可看哪些)

## API Layer

- baseURL (環境變數)
- HTTP client (fetch/axios 擇一)
- error handling、retry、timeout、logging

## Data & State

- server state (React Query / SWR) 或自管
- client state (Zestand / Context) 擇一 (可寫到 /decisions)

## 權限/角色 (Role-based access)
