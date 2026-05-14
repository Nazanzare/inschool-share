export default function StatCard({ label, value, change }) {
  return (
    <div className="rounded-3xl border border-base bg-card p-5 shadow-card">
      <p className="text-sm text-muted">{label}</p>
      <strong className="mt-2 block text-2xl text-base">{value}</strong>
      {change ? <span className="mt-3 inline-block rounded-full bg-primary-light-soft px-3 py-1 text-xs font-black text-primary">{change}</span> : null}
    </div>
  );
}
