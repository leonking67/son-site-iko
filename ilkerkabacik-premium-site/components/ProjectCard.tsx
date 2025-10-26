type Props = {
  title: string;
  summary: string;
  tag?: string;
};

export default function ProjectCard({ title, summary, tag }: Props){
  return (
    <div className="card hover:border-secondary/40 transition">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-lg">{title}</h3>
        {tag && <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10">{tag}</span>}
      </div>
      <p className="mt-2 text-sm text-ice/80">{summary}</p>
    </div>
  );
}