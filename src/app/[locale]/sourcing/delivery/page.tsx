import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

const FEATURE_KEYS = ["tracking", "quality", "delivery", "return"] as const;
const ICONS: Record<string, string> = { tracking: "📡", quality: "✅", delivery: "🚚", return: "↩️" };

export default function DeliveryPage() {
  const t = useTranslations("sourcing.delivery");

  return (
    <PageTransition>
      <PageHeader tag="Sourcing" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURE_KEYS.map((key, i) => (
              <FadeInSection key={key} delay={i * 0.1}>
                <div className="flex gap-5 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <span className="text-4xl shrink-0">{ICONS[key]}</span>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{t(`features.${key}.title`)}</h3>
                    <p className="text-sm text-gray-600">{t(`features.${key}.desc`)}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
