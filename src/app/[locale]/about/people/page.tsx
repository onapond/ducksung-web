import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

const VALUES = ["creative", "professional", "cooperative", "honest"] as const;
const ICONS: Record<string, string> = {
  creative: "💡",
  professional: "🎯",
  cooperative: "🤝",
  honest: "⚖️",
};

export default function PeoplePage() {
  const t = useTranslations("about.people");

  return (
    <PageTransition>
      <PageHeader tag="About" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((key, i) => (
              <FadeInSection key={key} delay={i * 0.1}>
                <div className="text-center p-8 rounded-2xl border border-gray-100 bg-gray-50 h-full">
                  <span className="text-5xl mb-5 block">{ICONS[key]}</span>
                  <h3 className="text-lg font-bold text-primary mb-3">{t(`values.${key}.title`)}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t(`values.${key}.desc`)}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
