export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#faf8f5]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[#8b5a2b]/30 border-t-[#8b5a2b] rounded-full animate-spin" />
        <p className="text-[#5d4e37]/70 text-sm">Đang tải...</p>
      </div>
    </div>
  );
}
