export default function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-[#8b5a2b] to-[#6b4423]">
      <div className="container-narrow text-center">
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white mb-4">
          Sẵn sàng hợp tác?
        </h2>
        <p className="text-white/90 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Liên hệ ngay để nhận báo giá và tư vấn chi tiết về sản phẩm cà phê sấy lạnh.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#lien-he"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#8b5a2b] font-semibold rounded-full hover:bg-amber-50 transition-colors"
          >
            Nhận báo giá
          </a>
          <a
            href="tel:02873001234"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            Gọi ngay: (028) 7300 1234
          </a>
        </div>
      </div>
    </section>
  );
}
