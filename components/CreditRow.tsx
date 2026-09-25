export default function CreditRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[7rem,1fr] gap-4 border-t border-line py-4 first:border-t-0 sm:grid-cols-[9rem,1fr]">
      <span className="font-sans text-xs uppercase tracking-wide2 text-muted">
        {label}
      </span>
      <span className="font-display text-lg text-paper">{value}</span>
    </div>
  );
}
