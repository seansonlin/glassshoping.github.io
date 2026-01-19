import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { glassesData } from '../data/glasses';
import { useCart } from '../context/CartContext';
import ARTryOn from '../components/ARTryOn';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [showARTryOn, setShowARTryOn] = useState(false);

  const product = glassesData.find((p) => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">商品不存在</h1>
        <button
          onClick={() => navigate('/products')}
          className="text-blue-600 hover:underline"
        >
          返回商品列表
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addToCart(product, selectedColor || product.colors[0]);
    alert('已加入購物車！');
  };

  const categoryLabels: Record<string, string> = {
    optical: '光學眼鏡',
    sunglasses: '太陽眼鏡',
    reading: '閱讀眼鏡',
  };

  const frameTypeLabels: Record<string, string> = {
    'full-rim': '全框',
    'semi-rimless': '半框',
    rimless: '無框',
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={() => navigate(-1)}
        className="text-blue-600 hover:underline mb-4"
      >
        ← 返回
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E%u773C%u93C1%3C/text%3E%3C/svg%3E';
              }}
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-3xl font-bold text-blue-600">
                NT$ {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  NT$ {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <span className="text-red-500 font-semibold">
                省 NT$ {(product.originalPrice - product.price).toLocaleString()}
              </span>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Product Details */}
          <div className="space-y-3 mb-6">
            <div>
              <span className="font-semibold">分類：</span>
              <span className="ml-2">{categoryLabels[product.category]}</span>
            </div>
            <div>
              <span className="font-semibold">框型：</span>
              <span className="ml-2">{frameTypeLabels[product.frameType]}</span>
            </div>
            <div>
              <span className="font-semibold">材質：</span>
              <span className="ml-2">{product.material}</span>
            </div>
          </div>

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="mb-6">
              <span className="font-semibold block mb-2">顏色：</span>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                      selectedColor === color || (!selectedColor && color === product.colors[0])
                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stock Status */}
          <div className="mb-6">
            {product.inStock ? (
              <span className="text-green-600 font-semibold">✓ 有現貨</span>
            ) : (
              <span className="text-red-500 font-semibold">✗ 缺貨中</span>
            )}
          </div>

          {/* AR Try On Button */}
          <button
            onClick={() => setShowARTryOn(true)}
            className="w-full py-3 rounded-lg font-semibold transition-colors bg-purple-600 text-white hover:bg-purple-700 mb-3 flex items-center justify-center gap-2"
          >
            <span>🎥</span>
            AR 虛擬試戴
          </button>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              product.inStock
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {product.inStock ? '加入購物車' : '缺貨中'}
          </button>
        </div>
      </div>

      {/* AR Try On Modal */}
      {showARTryOn && (
        <ARTryOn
          glasses={product}
          onClose={() => setShowARTryOn(false)}
        />
      )}
    </div>
  );
};

export default ProductDetail;
