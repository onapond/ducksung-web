import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

const ITEMS = ["mro", "sourcing", "catalog", "nso"] as const;
const ICONS: Record<string, string> = { mro: "🔧", sourcing: "🌐", catalog: "📦", nso: "🏭" };

export default function BusinessPage() {
  const t = useTranslations("about.business");

  return (
    <PageTransition>
      <PageHeader tag="About" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ITEMS.map((key, i) => (
              <FadeInSection key={key} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
                  <span className="text-4xl mb-4 block">{ICONS[key]}</span>
                  <h3 className="text-xl font-bold text-primary mb-3">{t(`items.${key}.title`)}</h3>
                  <p className="text-gray-600 leading-relaxed">{t(`items.${key}.desc`)}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
