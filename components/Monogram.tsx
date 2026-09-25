export default function Monogram({ letters }: { letters: string }) {
  return (
    <div className="relative flex aspect-[4/5] w-full max-w-xs items-center justify-center border border-line bg-surface">
      <span className="font-display text-8xl text-gold" style={{ WebkitTextStroke: "1px #e0bd6c" }}>
        {letters}
      </span>
      <div className="pointer-events-none absolute inset-6 border border-line/60" />
    </div>
  );
}
