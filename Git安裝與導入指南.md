# Git 安裝與 GitHub 導入指南

## 第一步：安裝 Git

### Windows 安裝步驟

1. **下載 Git**
   - 前往：https://git-scm.com/download/win
   - 下載最新版本的 Git for Windows

2. **執行安裝程式**
   - 雙擊下載的安裝檔
   - 按照安裝精靈的指示進行
   - **重要**：安裝時選擇 "Git from the command line and also from 3rd-party software"
   - 其他選項保持預設即可

3. **驗證安裝**
   - 重新開啟 PowerShell 或命令提示字元
   - 執行：`git --version`
   - 應該會顯示版本號，例如：`git version 2.42.0`

## 第二步：設定 Git（首次使用）

```bash
# 設定您的名稱（替換為您的名字）
git config --global user.name "您的名字"

# 設定您的電子郵件（替換為您的 GitHub 郵件）
git config --global user.email "your.email@example.com"
```

## 第三步：建立 GitHub Repository

1. **登入 GitHub**
   - 前往：https://github.com
   - 如果沒有帳號，請先註冊

2. **建立新 Repository**
   - 點擊右上角的 **+** 號
   - 選擇 **New repository**
   - Repository name: `glasses-shop`（或您喜歡的名稱）
   - Description: `眼鏡電商平台`
   - 選擇 **Public**（公開）或 **Private**（私有）
   - **不要**勾選 "Initialize this repository with a README"
   - **不要**勾選 "Add .gitignore" 和 "Choose a license"
   - 點擊 **Create repository**

3. **複製 Repository URL**
   - 建立後會看到一個頁面
   - 複製 HTTPS URL，例如：`https://github.com/YOUR_USERNAME/glasses-shop.git`

## 第四步：導入專案到 GitHub

在專案目錄中執行以下命令：

```bash
# 1. 初始化 Git（如果還沒有）
git init

# 2. 添加所有檔案
git add .

# 3. 提交
git commit -m "Initial commit: 眼鏡電商平台"

# 4. 添加遠端倉庫（將 URL 替換為您剛才複製的）
git remote add origin https://github.com/YOUR_USERNAME/glasses-shop.git

# 5. 設定主分支名稱
git branch -M main

# 6. 推送到 GitHub
git push -u origin main
```

## 第五步：啟用 GitHub Pages

1. 前往您的 GitHub Repository
2. 點擊 **Settings** 標籤
3. 在左側選單找到 **Pages**
4. 在 **Source** 選擇 **GitHub Actions**
5. 點擊 **Save**

## 第六步：觸發部署

### 方式 A：自動部署（推薦）
- 推送任何更改到 main 分支
- GitHub Actions 會自動執行部署

### 方式 B：手動觸發
1. 前往 **Actions** 標籤
2. 選擇 **Deploy to GitHub Pages** 工作流程
3. 點擊 **Run workflow**

## 完成！

部署完成後（約 1-2 分鐘），您的網站將在：
```
https://YOUR_USERNAME.github.io/glasses-shop/
```

---

## 常見問題

### Q: 推送時要求輸入帳號密碼？
**A**: GitHub 已不再支援密碼驗證。請使用：
- **Personal Access Token**（推薦）
  - Settings > Developer settings > Personal access tokens > Tokens (classic)
  - 生成新 token，權限選擇 `repo`
  - 推送時使用 token 作為密碼

- 或使用 **Git Credential Manager**

### Q: 如何更新網站？
**A**: 
```bash
git add .
git commit -m "更新說明"
git push
```
GitHub Actions 會自動重新部署。

### Q: 如何查看部署狀態？
**A**: 前往 Repository 的 **Actions** 標籤查看部署日誌。

---

## 快速檢查清單

- [ ] 已安裝 Git
- [ ] 已設定 Git 用戶名稱和郵件
- [ ] 已建立 GitHub Repository
- [ ] 已執行 `git init`
- [ ] 已執行 `git add .`
- [ ] 已執行 `git commit`
- [ ] 已添加 remote origin
- [ ] 已推送到 GitHub
- [ ] 已啟用 GitHub Pages
- [ ] 已觸發部署

祝您部署順利！🎉
