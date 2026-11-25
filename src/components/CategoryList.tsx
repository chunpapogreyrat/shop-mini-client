import type { Product } from "../data/products";

type Props = {
  items: Product[];
};

// Bài tập về nhà 2: danh mục lấy từ mảng products, bỏ trùng bằng Set
export default function CategoryList({ items }: Props) {
  const categories = [...new Set(items.map((p) => p.category))];

  return (
    <section className="container">
      <h2 className="section-title">Danh mục</h2>
      <ul className="category-list">
        {categories.map((c) => (
          <li key={c}>
            <a href={`/products?category=${encodeURIComponent(c)}`} className="category-chip">
              {c}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
