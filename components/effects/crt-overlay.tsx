export function CrtOverlay(): React.JSX.Element {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-2 crt-overlay opacity-40"
    />
  );
}
