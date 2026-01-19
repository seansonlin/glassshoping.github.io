import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-2xl font-bold mb-4">購物車是空的</h1>
        <p className="text-gray-600 mb-8">快去選購您喜歡的眼鏡吧！</p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
        >
          前往選購
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">購物車</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={`${item.glasses.id}-${item.selectedColor}`}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row gap-4"
            >
              <div className="w-full sm:w-32 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={item.glasses.image}
                  alt={item.glasses.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E%u773C%u93C1%3C/text%3E%3C/svg%3E';
                  }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-1">{item.glasses.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{item.glasses.brand}</p>
                {item.selectedColor && (
                  <p className="text-gray-600 text-sm mb-2">顏色：{item.selectedColor}</p>
                )}
                <p className="text-lg font-bold text-blue-600 mb-4">
                  NT$ {item.glasses.price.toLocaleString()}
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.glasses.id, item.quantity - 1)}
                      className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="w-12 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.glasses.id, item.quantity + 1)}
                      className="w-8 h-8 rounded border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.glasses.id)}
                    className="text-red-500 hover:text-red-700 text-sm"
                  >
                    移除
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">
                  NT$ {(item.glasses.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            清空購物車
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-xl font-bold mb-4">訂單摘要</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>小計</span>
                <span>NT$ {getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>運費</span>
                <span className="text-green-600">免費</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between text-xl font-bold">
                  <span>總計</span>
                  <span className="text-blue-600">NT$ {getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              前往結帳
            </button>
            <Link
              to="/products"
              className="block text-center text-blue-600 hover:underline mt-4"
            >
              繼續購物
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
