# 眼鏡電商平台 👓

一個現代化的眼鏡電商平台，使用 React + TypeScript + Vite 構建，支援 AR 虛擬試戴功能。

## 🌟 功能特色

- 🛍️ **商品展示** - 精美的商品列表和詳情頁面
- 🛒 **購物車** - 完整的購物車功能，支援數量調整
- 💳 **結帳流程** - 完整的訂單處理流程
- 🎥 **AR 虛擬試戴** - 使用相機進行即時試戴體驗
- 📱 **響應式設計** - 適配各種設備尺寸
- 🎨 **現代化 UI** - 使用 Tailwind CSS 打造美觀介面

## 🚀 快速開始

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

應用將在 `http://localhost:5173` 運行

### 建置生產版本

```bash
npm run build
```

### 預覽生產版本

```bash
npm run preview
```

## 📦 技術棧

- **React 18** - 前端框架
- **TypeScript** - 類型安全
- **Vite** - 快速開發工具
- **React Router** - 路由管理
- **Tailwind CSS** - 樣式框架
- **Context API** - 狀態管理

## 📁 專案結構

```
glasses-shop/
├── src/
│   ├── components/      # React 組件
│   │   ├── ARTryOn.tsx # AR 試戴組件
│   │   └── Navbar.tsx  # 導航欄
│   ├── pages/          # 頁面組件
│   ├── context/        # Context API
│   ├── data/           # 模擬數據
│   ├── types.ts        # TypeScript 類型定義
│   ├── App.tsx         # 主應用組件
│   └── main.tsx        # 應用入口
├── public/             # 靜態資源
└── index.html          # HTML 模板
```

## 📄 頁面說明

- **首頁** (`/`) - 展示平台特色和商品分類
- **商品列表** (`/products`) - 所有商品，支援分類篩選
- **商品詳情** (`/products/:id`) - 單一商品詳細資訊，包含 AR 試戴功能
- **購物車** (`/cart`) - 查看和管理購物車商品
- **結帳** (`/checkout`) - 填寫訂購資訊
- **訂單確認** (`/order-confirmation`) - 訂單完成確認頁面

## 🎥 AR 虛擬試戴

### 使用方法

1. 進入商品詳情頁面
2. 點擊「🎥 AR 虛擬試戴」按鈕
3. 允許瀏覽器存取相機權限
4. 點擊「開始試戴」
5. 將臉部對準鏡頭，眼鏡會自動疊加顯示

### 注意事項

- 需要 HTTPS 或 localhost 才能使用相機功能
- 建議在光線充足的環境使用
- 需要透明背景的眼鏡框架圖片（PNG 格式）以獲得最佳效果

詳細說明請參考 [AR試戴功能說明.md](./AR試戴功能說明.md)

## 🌐 部署

### GitHub Pages

專案已配置 GitHub Actions 自動部署。詳細步驟請參考：
- [GitHub Pages部署指南.md](./GitHub Pages部署指南.md)
- [Git安裝與導入指南.md](./Git安裝與導入指南.md)

## 📝 未來擴展

- [ ] 用戶登入/註冊功能
- [ ] 後端 API 整合
- [ ] 資料庫整合
- [ ] 支付系統整合
- [ ] 訂單歷史查詢
- [ ] 商品搜尋功能
- [ ] 商品評價系統
- [ ] 精準臉部追蹤（MediaPipe Face Mesh）

## 📄 授權

MIT License

## 👨‍💻 開發者

眼鏡電商平台開發團隊

---

**Live Demo**: [查看線上版本](https://YOUR_USERNAME.github.io/glasses-shop/)
