// Bài tập về nhà 1: khối khuyến mãi đặt phía trên ProductList
export default function Banner() {
  return (
    <section className="container">
      <div className="banner">
        <div>
          <h2 className="banner-title">Siêu sale cuối tuần – giảm đến 50%</h2>
          <p className="banner-desc">
            Miễn phí giao hàng cho đơn từ 300.000 đ. Số lượng có hạn, nhanh tay kẻo lỡ!
          </p>
        </div>
        <a href="/products" className="btn btn-light">
          Mua ngay
        </a>
      </div>
    </section>
  );
}
