// 最簡單的測試版本 - 用於診斷白屏問題
// 如果這個可以顯示，問題在 App.tsx
// 如果這個還是白屏，問題在更基礎的地方

import React from 'react'
import ReactDOM from 'react-dom/client'

const TestComponent = () => {
  return (
    <div style={{ 
      padding: '50px', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#2563eb', fontSize: '36px', marginBottom: '20px' }}>
        ✅ React 測試頁面
      </h1>
      <p style={{ fontSize: '18px', marginBottom: '10px' }}>
        如果您看到這個頁面，表示：
      </p>
      <ul style={{ fontSize: '16px', lineHeight: '1.8' }}>
        <li>✅ React 已正確載入</li>
        <li>✅ Vite 開發伺服器正常運行</li>
        <li>✅ 基本渲染功能正常</li>
      </ul>
      <p style={{ fontSize: '16px', marginTop: '30px', color: '#666' }}>
        如果原本的應用還是白屏，問題可能在：
      </p>
      <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#666' }}>
        <li>路由配置（React Router）</li>
        <li>Context 提供者（CartProvider）</li>
        <li>某個組件有錯誤</li>
        <li>Tailwind CSS 編譯問題</li>
      </ul>
      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
        <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>下一步：</p>
        <ol style={{ lineHeight: '1.8' }}>
          <li>按 F12 打開瀏覽器開發者工具</li>
          <li>查看 Console 標籤是否有錯誤</li>
          <li>查看 Network 標籤是否有失敗的請求</li>
          <li>將錯誤訊息告訴我</li>
        </ol>
      </div>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TestComponent />
  </React.StrictMode>,
)
