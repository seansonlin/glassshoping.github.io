# AR 虛擬試戴功能說明

## 功能概述

已成功整合 AR（擴增實境）虛擬試戴功能到眼鏡電商平台。用戶可以在商品詳情頁面使用相機進行即時試戴體驗。

## 目前實現的功能

### ✅ 已完成

1. **基礎 AR 試戴組件**
   - 相機權限請求與管理
   - 即時視訊串流顯示
   - 眼鏡圖片疊加顯示
   - 鏡像效果（更自然的體驗）
   - 響應式 UI 設計

2. **整合到商品詳情頁**
   - 在商品詳情頁添加「AR 虛擬試戴」按鈕
   - 點擊後開啟全螢幕試戴介面
   - 支援所有商品類型（光學眼鏡、太陽眼鏡、閱讀眼鏡）

3. **使用者體驗**
   - 清晰的載入狀態提示
   - 錯誤處理與提示訊息
   - 簡單直觀的控制介面
   - 一鍵啟動/停止功能

## 使用方法

1. 進入商品詳情頁面
2. 點擊「🎥 AR 虛擬試戴」按鈕
3. 允許瀏覽器存取相機權限
4. 將臉部對準鏡頭
5. 眼鏡會自動疊加顯示在臉上
6. 點擊「停止試戴」或關閉按鈕結束

## 技術架構

### 當前實現
- **相機存取**: `navigator.mediaDevices.getUserMedia`
- **渲染**: HTML5 Canvas 2D API
- **框架**: React + TypeScript

### 組件結構
```
src/
├── components/
│   └── ARTryOn.tsx      # AR 試戴主組件
└── pages/
    └── ProductDetail.tsx # 商品詳情頁（已整合）
```

## 未來升級建議

### 進階功能（可選）

1. **精準臉部追蹤**
   - 整合 MediaPipe Face Mesh 或 TensorFlow.js
   - 自動偵測眼睛、鼻樑位置
   - 根據臉部角度調整眼鏡位置和大小

2. **3D 眼鏡模型**
   - 使用 Three.js 渲染 3D 眼鏡模型
   - 支援旋轉、縮放、光影效果
   - 更真實的試戴體驗

3. **多顏色切換**
   - 在試戴過程中即時切換顏色
   - 無需重新啟動相機

4. **拍照功能**
   - 截圖試戴效果
   - 分享到社交媒體
   - 儲存試戴記錄

5. **臉部測量**
   - 自動測量臉寬、眼距等數據
   - 推薦適合的鏡框尺寸

### 推薦的升級方案

#### 方案 1: MediaPipe Face Mesh（推薦）
```bash
npm install @mediapipe/face_mesh @mediapipe/camera_utils
```
- 開源且免費
- Google 開發，準確度高
- 支援 Web 平台

#### 方案 2: TensorFlow.js
```bash
npm install @tensorflow/tfjs @tensorflow-models/face-landmarks-detection
```
- 強大的機器學習框架
- 可自訂訓練模型
- 需要更多開發時間

#### 方案 3: 第三方 SDK
- **Jeeliz**: 簡單整合，付費方案
- **Banuba SDK**: 專業級效果，付費方案
- **Augmia**: 瀏覽器內試戴，付費方案

## 瀏覽器相容性

### 支援的瀏覽器
- ✅ Chrome/Edge (推薦)
- ✅ Firefox
- ✅ Safari (iOS 11+)
- ⚠️ 需要 HTTPS 或 localhost 才能使用相機

### 注意事項
- 行動裝置需要 HTTPS 連線
- 某些瀏覽器可能需要手動允許相機權限
- 建議在光線充足的環境使用

## 效能優化建議

1. **圖片優化**
   - 使用 WebP 格式
   - 適當的圖片尺寸（建議 800x600）
   - 啟用 CDN 加速

2. **渲染優化**
   - 使用 requestAnimationFrame
   - 適當的畫布解析度
   - 避免過度重繪

3. **記憶體管理**
   - 及時清理相機串流
   - 釋放 Canvas 資源
   - 避免記憶體洩漏

## 隱私與安全

- ✅ 相機串流僅在用戶主動啟動時使用
- ✅ 不會儲存或上傳任何影像資料
- ✅ 關閉試戴後立即停止相機存取
- ✅ 符合 GDPR 隱私規範

## 故障排除

### 無法啟動相機
1. 確認瀏覽器已授予相機權限
2. 檢查是否有其他應用程式佔用相機
3. 確認使用 HTTPS 或 localhost

### 眼鏡位置不準確
- 當前為基礎實現，使用固定位置
- 升級到 MediaPipe 可獲得精準追蹤

### 效能問題
- 降低視訊解析度
- 優化眼鏡圖片大小
- 使用硬體加速

## 聯絡與支援

如有問題或需要升級功能，請參考：
- [MediaPipe Face Mesh 文件](https://google.github.io/mediapipe/solutions/face_mesh)
- [TensorFlow.js 文件](https://www.tensorflow.org/js)
- [WebRTC API 文件](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
