# 眼鏡電商平台 - GitHub 導入腳本
# PowerShell 版本

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "眼鏡電商平台 - GitHub 導入腳本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 檢查 Git 是否安裝
try {
    $gitVersion = git --version 2>&1
    Write-Host "[✓] Git 已安裝: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "[錯誤] 未檢測到 Git！" -ForegroundColor Red
    Write-Host ""
    Write-Host "請先安裝 Git：" -ForegroundColor Yellow
    Write-Host "1. 前往 https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "2. 下載並安裝 Git for Windows" -ForegroundColor Yellow
    Write-Host "3. 重新開啟 PowerShell" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "按 Enter 鍵退出"
    exit 1
}

Write-Host ""

# 檢查是否已初始化 Git
if (Test-Path .git) {
    Write-Host "[資訊] Git 已初始化" -ForegroundColor Yellow
} else {
    Write-Host "[步驟 1/6] 初始化 Git..." -ForegroundColor Cyan
    git init
    if ($LASTEXITCODE -ne 0) {
        Write-Host "[錯誤] Git 初始化失敗" -ForegroundColor Red
        Read-Host "按 Enter 鍵退出"
        exit 1
    }
    Write-Host "[✓] Git 初始化完成" -ForegroundColor Green
}

Write-Host ""
Write-Host "[步驟 2/6] 添加檔案..." -ForegroundColor Cyan
git add .
if ($LASTEXITCODE -ne 0) {
    Write-Host "[錯誤] 添加檔案失敗" -ForegroundColor Red
    Read-Host "按 Enter 鍵退出"
    exit 1
}
Write-Host "[✓] 檔案已添加" -ForegroundColor Green

Write-Host ""
Write-Host "[步驟 3/6] 提交變更..." -ForegroundColor Cyan
git commit -m "Initial commit: 眼鏡電商平台"
if ($LASTEXITCODE -ne 0) {
    Write-Host "[警告] 提交失敗，可能是沒有變更或已提交過" -ForegroundColor Yellow
} else {
    Write-Host "[✓] 變更已提交" -ForegroundColor Green
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "下一步操作：" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. 前往 https://github.com/new 建立新 Repository" -ForegroundColor Yellow
Write-Host "2. Repository 名稱：glasses-shop（或您喜歡的名稱）" -ForegroundColor Yellow
Write-Host "3. 選擇 Public，不要勾選任何初始化選項" -ForegroundColor Yellow
Write-Host "4. 點擊 Create repository" -ForegroundColor Yellow
Write-Host "5. 複製 Repository 的 HTTPS URL" -ForegroundColor Yellow
Write-Host ""
Write-Host "然後執行以下命令（將 YOUR_USERNAME 和 URL 替換為實際值）：" -ForegroundColor Cyan
Write-Host ""
Write-Host "  git remote add origin https://github.com/YOUR_USERNAME/glasses-shop.git" -ForegroundColor White
Write-Host "  git branch -M main" -ForegroundColor White
Write-Host "  git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Read-Host "按 Enter 鍵退出"
