// 簡單的測試組件，用於診斷問題
import React from 'react';

const TestApp = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>測試頁面</h1>
      <p>如果您看到這個，表示 React 基本功能正常。</p>
      <p>如果還是白屏，請檢查瀏覽器控制台（F12）的錯誤訊息。</p>
    </div>
  );
};

export default TestApp;
