export default function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Certitude Professionals logo"
      className={className}
      width={120}
      height={120}
    />
  );
}

