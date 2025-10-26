export default function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode; }){
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-8">
        <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
        {subtitle && <p className="text-ice/70 mt-2">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
}