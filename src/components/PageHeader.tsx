import FadeInSection from "./FadeInSection";

interface Props {
  tag?: string;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ tag, title, subtitle }: Props) {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInSection>
          {tag && (
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">{tag}</p>
          )}
          <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
          {subtitle && <p className="mt-3 text-white/70">{subtitle}</p>}
        </FadeInSection>
      </div>
    </section>
  );
}
