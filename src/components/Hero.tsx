export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f5] to-[#f3ece6]" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 30m-3 0a3 3 0 1 1 6 0a3 3 0 1 1 -6 0' fill='%238b5a2b' fill-opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Tagline */}
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#f1e8df] border border-[#c8a26a]/30 text-[#8b5a2b] font-medium tracking-[0.15em] uppercase text-xs mb-5">
            Cà phê hòa tan cao cấp từ Tây Nguyên
          </span>

          {/* H1 */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#2c2419] leading-[1.1] mb-4">
            Cà Phê Hòa Tan
            <br />
            <span className="text-[#8b5a2b]">Sấy Lạnh</span>
          </h1>
          <p className="text-[#5d4e37]/90 text-sm sm:text-base font-normal mb-8 max-w-xl mx-auto">
            Công ty TNHH Cà Phê Sấy Lạnh Việt Nam chuyên sản xuất cà phê hòa tan sấy lạnh nguyên chất từ Tây Nguyên, giữ trọn hương vị tự nhiên và đảm bảo an toàn thực phẩm.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#lien-he"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#8b5a2b] text-white text-sm font-semibold rounded-full hover:bg-[#6f4421] transition-all duration-300 shadow-xl shadow-amber-900/20 hover:shadow-amber-900/30 hover:-translate-y-0.5"
            >
              Nhận báo giá
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#san-pham"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#8b5a2b]/25 text-[#2c2419] text-sm font-semibold rounded-full hover:border-[#8b5a2b] hover:bg-[#8b5a2b]/5 transition-all duration-300"
            >
              Xem sản phẩm
              <svg className="w-4 h-4 text-[#8b5a2b] group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
