const items = [
  "HATHA YOGA",
  "VINYASA FLOW",
  "PRANAYAMA",
  "MEDITATION",
  "THESUTRADHARA",
  "WISDOM",
  "WELLNESS",
  "WHOLENESS",
];

export default function MarqueeBanner() {
  return (
    <div className="bg-gym-red py-4 overflow-hidden">
      <div className="flex whitespace-nowrap marquee-track">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="font-display text-xl tracking-[0.4em] text-white/90 px-8"
          >
            {item}
            <span className="mx-8 text-white/40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
