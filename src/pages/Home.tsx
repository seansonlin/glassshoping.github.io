import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">找到您的完美眼鏡</h1>
          <p className="text-xl mb-8">時尚、舒適、高品質的眼鏡選擇</p>
          <Link
            to="/products"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            立即選購
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-semibold mb-2">快速配送</h3>
              <p className="text-gray-600">全台免運，24小時內出貨</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">品質保證</h3>
              <p className="text-gray-600">正品保證，一年保固</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2">安全付款</h3>
              <p className="text-gray-600">多種付款方式，安全可靠</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">商品分類</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              to="/products?category=optical"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-64 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-6xl">👓</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">光學眼鏡</h3>
                <p className="text-gray-600">適合日常配戴的光學眼鏡</p>
              </div>
            </Link>
            <Link
              to="/products?category=sunglasses"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-64 bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center">
                <span className="text-6xl">🕶️</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">太陽眼鏡</h3>
                <p className="text-gray-600">時尚防護的太陽眼鏡</p>
              </div>
            </Link>
            <Link
              to="/products?category=reading"
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-64 bg-gradient-to-br from-purple-100 to-pink-200 flex items-center justify-center">
                <span className="text-6xl">📖</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">閱讀眼鏡</h3>
                <p className="text-gray-600">專為閱讀設計的眼鏡</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
