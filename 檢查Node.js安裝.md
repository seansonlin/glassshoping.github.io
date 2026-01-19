# 檢查 Node.js 安裝狀態

## 如果命令還是找不到，請嘗試以下方法：

### 方法 1：檢查 Node.js 是否已安裝

1. 打開檔案總管
2. 前往：`C:\Program Files\nodejs\`
3. 查看是否有 `node.exe` 檔案
   - 如果有 → Node.js 已安裝，但 PATH 設定有問題
   - 如果沒有 → 需要執行安裝程式

### 方法 2：手動加入 PATH（如果已安裝但找不到）

1. 按 `Win + R`，輸入 `sysdm.cpl`，按 Enter
2. 點擊「進階」標籤
3. 點擊「環境變數」
4. 在「系統變數」中找到 `Path`
5. 點擊「編輯」
6. 點擊「新增」
7. 輸入：`C:\Program Files\nodejs\`
8. 點擊「確定」儲存
9. **重新開啟** PowerShell

### 方法 3：使用完整路徑執行（臨時解決方案）

如果 Node.js 安裝在 `C:\Program Files\nodejs\`，可以暫時使用完整路徑：

```powershell
"C:\Program Files\nodejs\node.exe" --version
"C:\Program Files\nodejs\npm.cmd" --version
```

### 方法 4：重新安裝 Node.js

如果以上方法都不行，建議：
1. 解除安裝現有的 Node.js（如果有的話）
2. 重新下載並安裝
3. **安裝時務必勾選 "Add to PATH"**
4. 安裝完成後重新開啟 PowerShell
