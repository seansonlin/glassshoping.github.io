export interface Glasses {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  arImage?: string; // AR 試戴專用：透明背景的眼鏡框架圖片
  description: string;
  category: 'optical' | 'sunglasses' | 'reading';
  frameType: 'full-rim' | 'semi-rimless' | 'rimless';
  material: string;
  colors: string[];
  inStock: boolean;
}

export interface CartItem {
  glasses: Glasses;
  quantity: number;
  selectedColor?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  customerInfo: CustomerInfo;
  orderDate: string;
}

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}
