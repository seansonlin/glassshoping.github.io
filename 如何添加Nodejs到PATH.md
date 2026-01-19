# 如何將 Node.js 永久加入系統 PATH

## 方法 1：使用 PowerShell 腳本（推薦）

### 步驟：

1. **以管理員身份開啟 PowerShell**
   - 按 `Win + X`
   - 選擇「Windows PowerShell (系統管理員)」或「終端機 (系統管理員)」
   - 如果出現 UAC 提示，點擊「是」

2. **切換到專案目錄**
   ```powershell
   cd c:\Users\tsung\Downloads\glasses-shop
   ```

3. **執行腳本**
   ```powershell
   .\添加Nodejs到PATH.ps1
   ```

4. **重新開啟 PowerShell**
   - 關閉所有 PowerShell 視窗
   - 重新開啟一個新的 PowerShell（不需要管理員權限）

5. **驗證**
   ```powershell
   node --version
   npm --version
   ```

---

## 方法 2：手動通過圖形界面（如果腳本無法執行）

### 步驟：

1. **打開系統環境變數設定**
   - 按 `Win + R`
   - 輸入：`sysdm.cpl`
   - 按 Enter

2. **進入環境變數設定**
   - 點擊「進階」標籤
   - 點擊「環境變數」按鈕

3. **編輯系統 PATH**
   - 在「系統變數」區域找到 `Path`
   - 選取 `Path`，點擊「編輯」

4. **添加 Node.js 路徑**
   - 點擊「新增」
   - 輸入：`C:\Program Files\nodejs`
   - 點擊「確定」

5. **儲存變更**
   - 點擊「確定」關閉所有對話框

6. **重新開啟 PowerShell**
   - 關閉所有 PowerShell 視窗
   - 重新開啟一個新的 PowerShell

7. **驗證**
   ```powershell
   node --version
   npm --version
   ```

---

## 驗證是否成功

執行以下命令，如果都能顯示版本號，表示成功：

```powershell
node --version
npm --version
```

應該會顯示：
```
v25.3.0
11.6.2
```

---

## 如果還是找不到命令

1. 確認 Node.js 安裝位置：
   - 檢查 `C:\Program Files\nodejs\` 是否存在
   - 檢查是否有 `node.exe` 檔案

2. 確認 PATH 已更新：
   ```powershell
   $env:PATH -split ';' | Select-String -Pattern "nodejs"
   ```
   應該會顯示包含 nodejs 的路徑

3. 如果還是不行，可能需要重新啟動電腦讓系統環境變數完全生效
