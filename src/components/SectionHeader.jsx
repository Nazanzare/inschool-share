export default function SectionHeader({ eyebrow, title, description, action }) {
  return (
    <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
      <div>
        {eyebrow ? <span className="text-sm font-black text-primary">{eyebrow}</span> : null}
        <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
        {description ? <p className="mt-3 max-w-3xl leading-8 text-secondary">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
