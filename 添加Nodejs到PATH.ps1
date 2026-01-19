# 將 Node.js 永久加入系統 PATH
# 需要以管理員身份執行 PowerShell

$nodejsPath = "C:\Program Files\nodejs"
$currentPath = [Environment]::GetEnvironmentVariable("Path", "Machine")

# 檢查是否已經在 PATH 中
if ($currentPath -notlike "*$nodejsPath*") {
    # 添加到系統 PATH
    [Environment]::SetEnvironmentVariable("Path", "$currentPath;$nodejsPath", "Machine")
    Write-Host "✅ Node.js 已成功加入系統 PATH！" -ForegroundColor Green
    Write-Host "請重新開啟 PowerShell 讓變更生效。" -ForegroundColor Yellow
} else {
    Write-Host "ℹ️  Node.js 已經在系統 PATH 中了。" -ForegroundColor Cyan
}

# 同時添加到當前用戶的 PATH（如果需要的話）
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notlike "*$nodejsPath*") {
    [Environment]::SetEnvironmentVariable("Path", "$userPath;$nodejsPath", "User")
    Write-Host "✅ Node.js 已加入用戶 PATH！" -ForegroundColor Green
}

Write-Host "`n請重新開啟 PowerShell 後，執行以下命令驗證：" -ForegroundColor Yellow
Write-Host "  node --version" -ForegroundColor Cyan
Write-Host "  npm --version" -ForegroundColor Cyan
