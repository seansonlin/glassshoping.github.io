import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Order } from '../types';

const OrderConfirmation = () => {
  const location = useLocation();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    // 從 localStorage 讀取訂單資訊
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      setOrder(JSON.parse(lastOrder));
    }
  }, []);

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">找不到訂單資訊</h1>
        <Link to="/products" className="text-blue-600 hover:underline">
          返回商品頁面
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold mb-4">訂單確認成功！</h1>
        <p className="text-gray-600 mb-8">
          感謝您的購買，訂單編號：<span className="font-semibold">{order.id}</span>
        </p>

        <div className="text-left bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">訂單詳情</h2>
          
          <div className="mb-4">
            <h3 className="font-semibold mb-2">訂購商品：</h3>
            <ul className="space-y-2">
              {order.items.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span>
                    {item.glasses.name} x {item.quantity}
                    {item.selectedColor && ` (${item.selectedColor})`}
                  </span>
                  <span>NT$ {(item.glasses.price * item.quantity).toLocaleString()}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">配送資訊：</h3>
            <p>{order.customerInfo.name}</p>
            <p>{order.customerInfo.phone}</p>
            <p>{order.customerInfo.email}</p>
            <p>
              {order.customerInfo.postalCode} {order.customerInfo.city}
            </p>
            <p>{order.customerInfo.address}</p>
          </div>

          <div className="border-t pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>總計</span>
              <span className="text-blue-600">NT$ {order.total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            我們已收到您的訂單，將盡快為您處理。訂單確認信已發送至您的電子郵件。
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/products"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              繼續購物
            </Link>
            <Link
              to="/"
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              返回首頁
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
