import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

const TYPES = ["standard", "premium", "enterprise"] as const;
const COLORS: Record<string, string> = {
  standard: "border-gray-200",
  premium: "border-accent ring-2 ring-accent/20",
  enterprise: "border-primary",
};
const BADGES: Record<string, string> = { premium: "인기", enterprise: "추천" };

export default function ServicePage() {
  const t = useTranslations("sourcing.service");

  return (
    <PageTransition>
      <PageHeader tag="Sourcing" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TYPES.map((key, i) => (
              <FadeInSection key={key} delay={i * 0.1}>
                <div className={`relative bg-white rounded-2xl p-8 border-2 shadow-sm h-full flex flex-col ${COLORS[key]}`}>
                  {BADGES[key] && (
                    <span className="absolute top-4 right-4 text-xs bg-accent text-white font-bold px-2.5 py-1 rounded-full">
                      {BADGES[key]}
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-primary mb-3">{t(`types.${key}.title`)}</h3>
                  <p className="text-gray-600 text-sm flex-1">{t(`types.${key}.desc`)}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
