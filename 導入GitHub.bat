@echo off
chcp 65001 >nul
echo ========================================
echo 眼鏡電商平台 - GitHub 導入腳本
echo ========================================
echo.

REM 檢查 Git 是否安裝
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [錯誤] 未檢測到 Git！
    echo.
    echo 請先安裝 Git：
    echo 1. 前往 https://git-scm.com/download/win
    echo 2. 下載並安裝 Git for Windows
    echo 3. 重新開啟命令提示字元
    echo.
    pause
    exit /b 1
)

echo [✓] Git 已安裝
echo.

REM 檢查是否已初始化 Git
if exist .git (
    echo [資訊] Git 已初始化
) else (
    echo [步驟 1/6] 初始化 Git...
    git init
    if %ERRORLEVEL% NEQ 0 (
        echo [錯誤] Git 初始化失敗
        pause
        exit /b 1
    )
    echo [✓] Git 初始化完成
)

echo.
echo [步驟 2/6] 添加檔案...
git add .
if %ERRORLEVEL% NEQ 0 (
    echo [錯誤] 添加檔案失敗
    pause
    exit /b 1
)
echo [✓] 檔案已添加

echo.
echo [步驟 3/6] 提交變更...
git commit -m "Initial commit: 眼鏡電商平台"
if %ERRORLEVEL% NEQ 0 (
    echo [警告] 提交失敗，可能是沒有變更或已提交過
)

echo.
echo ========================================
echo 下一步操作：
echo ========================================
echo.
echo 1. 前往 https://github.com/new 建立新 Repository
echo 2. Repository 名稱：glasses-shop（或您喜歡的名稱）
echo 3. 選擇 Public，不要勾選任何初始化選項
echo 4. 點擊 Create repository
echo 5. 複製 Repository 的 HTTPS URL
echo.
echo 然後執行以下命令（將 YOUR_USERNAME 和 URL 替換為實際值）：
echo.
echo   git remote add origin https://github.com/YOUR_USERNAME/glasses-shop.git
echo   git branch -M main
echo   git push -u origin main
echo.
echo ========================================
pause
