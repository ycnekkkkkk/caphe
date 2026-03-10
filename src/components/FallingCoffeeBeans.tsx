"use client";

const coffeeBeans = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${2 + (i * 5) % 95}%`,
  size: 10 + (i % 5) * 4,
  delay: `${(i * 0.4) % 7}s`,
  duration: 10 + (i % 5) * 3,
}));

export default function FallingCoffeeBeans() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {coffeeBeans.map((bean) => (
        <div
          key={bean.id}
          className="absolute animate-coffee-fall"
          style={{
            left: bean.left,
            top: "-40px",
            width: bean.size,
            height: bean.size * 1.4,
            animationDelay: bean.delay,
            animationDuration: `${bean.duration}s`,
          }}
        >
          <svg viewBox="0 0 20 28" className="w-full h-full text-[#8b5a2b]/50">
            <ellipse cx="10" cy="14" rx="8" ry="12" fill="currentColor" transform="rotate(-15 10 14)" />
          </svg>
        </div>
      ))}
    </div>
  );
}
