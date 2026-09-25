export default function Sprocket({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`sprocket hidden w-px sm:block ${className}`}
    />
  );
}
