# GitHub Pages 部署指南

## 方法一：使用 GitHub Actions（推薦）

這是最簡單且自動化的方式，每次推送到 main 分支時會自動部署。

### 步驟 1: 建立 GitHub Repository

1. 前往 https://github.com/new
2. Repository name: `glasses-shop`（或您喜歡的名稱）
3. 選擇 Public 或 Private
4. **不要**勾選 "Initialize this repository with a README"
5. 點擊 "Create repository"

### 步驟 2: 初始化 Git 並推送代碼

在專案目錄中執行以下命令：

```bash
# 初始化 Git（如果還沒有）
git init

# 添加所有檔案
git add .

# 提交
git commit -m "Initial commit: 眼鏡電商平台"

# 添加遠端倉庫（將 YOUR_USERNAME 替換為您的 GitHub 用戶名）
git remote add origin https://github.com/YOUR_USERNAME/glasses-shop.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步驟 3: 啟用 GitHub Pages

1. 前往您的 GitHub Repository
2. 點擊 **Settings** 標籤
3. 在左側選單找到 **Pages**
4. 在 **Source** 選擇 **GitHub Actions**
5. 保存設定

### 步驟 4: 觸發部署

有兩種方式：

**方式 A: 自動觸發**
- 推送任何更改到 main 分支
- GitHub Actions 會自動執行部署

**方式 B: 手動觸發**
- 前往 **Actions** 標籤
- 選擇 **Deploy to GitHub Pages** 工作流程
- 點擊 **Run workflow**

### 步驟 5: 查看網站

部署完成後（約 1-2 分鐘），您的網站將在：
```
https://YOUR_USERNAME.github.io/glasses-shop/
```

---

## 方法二：使用 gh-pages 套件（手動部署）

如果您想要手動控制部署時機，可以使用這個方法。

### 步驟 1: 安裝 gh-pages

```bash
npm install --save-dev gh-pages
```

### 步驟 2: 更新 package.json

已經在 `package.json` 中添加了 `deploy` 腳本：
```json
"deploy": "npm run build && gh-pages -d dist"
```

### 步驟 3: 初始化 Git（如果還沒有）

```bash
git init
git add .
git commit -m "Initial commit"
```

### 步驟 4: 添加 GitHub Remote

```bash
git remote add origin https://github.com/YOUR_USERNAME/glasses-shop.git
git branch -M main
git push -u origin main
```

### 步驟 5: 部署

```bash
npm run deploy
```

這會：
1. 建置專案
2. 將 `dist` 資料夾推送到 `gh-pages` 分支

### 步驟 6: 啟用 GitHub Pages

1. 前往 Repository Settings > Pages
2. Source 選擇 **Deploy from a branch**
3. Branch 選擇 **gh-pages**，資料夾選擇 **/ (root)**
4. 保存

---

## 重要配置說明

### 1. Base Path 設定

在 `vite.config.ts` 中已經設定：
```typescript
base: process.env.NODE_ENV === 'production' ? '/glasses-shop/' : '/'
```

**重要**: 如果您的 Repository 名稱不是 `glasses-shop`，請修改這個路徑！

例如，如果 Repository 名稱是 `my-glasses-shop`，則改為：
```typescript
base: process.env.NODE_ENV === 'production' ? '/my-glasses-shop/' : '/'
```

### 2. React Router 設定

如果使用 Hash Router（`#`），則不需要修改 base path。但我們使用的是 Browser Router，所以需要正確設定 base path。

---

## 常見問題

### Q: 網站顯示空白頁面
**A**: 檢查 `vite.config.ts` 中的 `base` 路徑是否正確對應您的 Repository 名稱。

### Q: 圖片無法顯示
**A**: 確保圖片路徑使用相對路徑或完整的 URL。如果使用外部圖片，確認 CORS 設定。

### Q: 路由無法正常工作
**A**: GitHub Pages 不支援服務器端路由。如果使用 Browser Router，需要：
1. 確保 base path 正確
2. 或考慮使用 Hash Router（`#`）

### Q: 部署後還是看到舊版本
**A**: 
- 清除瀏覽器快取（Ctrl + F5）
- 確認 GitHub Actions 部署成功
- 等待幾分鐘讓 CDN 更新

### Q: 如何更新網站
**A**: 
- 方法一：推送更改到 main 分支（自動部署）
- 方法二：執行 `npm run deploy`（手動部署）

---

## 自訂網域（可選）

如果您有自己的網域，可以在 GitHub Pages 設定中：
1. Settings > Pages > Custom domain
2. 輸入您的網域
3. 按照指示設定 DNS

---

## 檢查清單

- [ ] 建立 GitHub Repository
- [ ] 初始化 Git 並推送代碼
- [ ] 確認 `vite.config.ts` 中的 base path 正確
- [ ] 啟用 GitHub Pages（選擇 GitHub Actions）
- [ ] 等待部署完成
- [ ] 測試網站功能
- [ ] 確認所有路由正常運作

---

## 部署後的網址格式

- **GitHub Pages**: `https://YOUR_USERNAME.github.io/glasses-shop/`
- **自訂網域**: `https://yourdomain.com`

---

## 需要幫助？

如果遇到問題，請檢查：
1. GitHub Actions 的執行日誌（Actions 標籤）
2. 瀏覽器控制台的錯誤訊息
3. Network 標籤中的失敗請求

祝部署順利！🎉
