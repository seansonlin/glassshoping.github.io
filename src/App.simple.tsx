// 最簡單的測試版本
import React from 'react';

function SimpleApp() {
  return (
    <div style={{ padding: '50px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2563eb', fontSize: '32px' }}>眼鏡電商平台</h1>
      <p style={{ fontSize: '18px', marginTop: '20px' }}>
        如果您看到這個，表示 React 基本功能正常。
      </p>
      <p style={{ color: '#666', marginTop: '10px' }}>
        如果還是白屏，請按 F12 打開瀏覽器開發者工具，查看 Console 標籤的錯誤訊息。
      </p>
    </div>
  );
}

export default SimpleApp;
