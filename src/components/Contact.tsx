"use client";

import SectionHeader from "./SectionHeader";

export default function Contact() {
  return (
    <section id="lien-he" className="section-padding bg-[#faf8f5]">
      <div className="container-narrow">
        <SectionHeader
          label="Liên hệ"
          title="Kết nối với chúng tôi"
          description="Có câu hỏi hoặc cần tư vấn? Hãy liên hệ với chúng tôi"
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">
          <div className="space-y-6 rounded-xl bg-white border border-amber-900/5 p-6 flex flex-col justify-center">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#8b5a2b]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#8b5a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#2c2419] text-sm mb-1">Địa chỉ</h3>
                <p className="text-sm text-[#5d4e37]/90">
                  Lô B2-15, Khu Công nghiệp Tân Bình, Phường Tây Thạnh, Quận Tân Phú, TP. Hồ Chí Minh
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#8b5a2b]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#8b5a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#2c2419] text-sm mb-1">Điện thoại</h3>
                <a href="tel:02873001234" className="text-sm text-[#5d4e37]/90 hover:text-[#8b5a2b]">
                  (028) 7300 1234
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#8b5a2b]/10 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-[#8b5a2b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-[#2c2419] text-sm mb-1">Email</h3>
                <a href="mailto:info@cafesaylanh.vn" className="text-sm text-[#5d4e37]/90 hover:text-[#8b5a2b]">
                  info@cafesaylanh.vn
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-white border border-amber-900/5 p-6 flex flex-col">
            <h3 className="font-serif text-base font-semibold text-[#2c2419] mb-4">
              Gửi tin nhắn
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-medium text-[#2c2419] mb-2">Họ và tên</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-amber-900/10 bg-[#faf8f5] text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5a2b]/30 focus:border-[#8b5a2b]"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#2c2419] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-amber-900/10 bg-[#faf8f5] text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5a2b]/30 focus:border-[#8b5a2b]"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#2c2419] mb-2">Nội dung</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-amber-900/10 bg-[#faf8f5] text-sm focus:outline-none focus:ring-2 focus:ring-[#8b5a2b]/30 focus:border-[#8b5a2b] resize-none"
                  placeholder="Nhập câu hỏi hoặc phản hồi của bạn..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#8b5a2b] text-white text-sm font-medium rounded-lg hover:bg-[#6b4423] transition-colors"
              >
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
