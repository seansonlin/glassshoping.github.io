import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { glassesData } from '../data/glasses';
import { Glasses } from '../types';

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(category);

  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return glassesData;
    return glassesData.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  const categories = [
    { value: null, label: '全部' },
    { value: 'optical', label: '光學眼鏡' },
    { value: 'sunglasses', label: '太陽眼鏡' },
    { value: 'reading', label: '閱讀眼鏡' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">商品列表</h1>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value || 'all'}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === cat.value
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: Glasses;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Crect fill="%23ddd" width="200" height="200"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" dy="10.5" font-weight="bold" x="50%25" y="50%25" text-anchor="middle"%3E%u773C%u93C1%3C/text%3E%3C/svg%3E';
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="aspect-square bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">
            NT$ {product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              NT$ {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        {!product.inStock && (
          <span className="text-red-500 text-sm mt-2 block">缺貨中</span>
        )}
      </div>
    </Link>
  );
};

export default ProductList;
