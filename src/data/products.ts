export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  stock: number;
};

// Ảnh miễn phí từ Unsplash (https://unsplash.com/license), cắt sẵn 600x450
const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=600&h=450&fit=crop&auto=format&q=80`;

export const products: Product[] = [
  { id: 1, name: "Áo thun basic", price: 150000, image: img("photo-1581655353564-df123a1eb820"), category: "Thời trang", stock: 12 },
  { id: 2, name: "Quần jean slim", price: 420000, image: img("photo-1542272604-787c3835535d"), category: "Thời trang", stock: 5 },
  { id: 3, name: "Tai nghe Bluetooth", price: 690000, image: img("photo-1505740420928-5e560c06d30e"), category: "Điện tử", stock: 0 },
  { id: 4, name: "Bình giữ nhiệt 500ml", price: 185000, image: img("photo-1602143407151-7111542de6e8"), category: "Gia dụng", stock: 20 },
  { id: 5, name: "Balo laptop 15 inch", price: 550000, image: img("photo-1553062407-98eeb64c6a62"), category: "Phụ kiện", stock: 8 },
  { id: 6, name: "Chuột không dây", price: 245000, image: img("photo-1527864550417-7fd91fc51a46"), category: "Điện tử", stock: 15 },
];
