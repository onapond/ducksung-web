import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

const BENEFIT_KEYS = ["cost", "time", "quality", "system"] as const;
const BENEFIT_ICONS: Record<string, string> = { cost: "💰", time: "⏱️", quality: "✅", system: "🖥️" };

export default function MroPage() {
  const t = useTranslations("mro");
  const categories: string[] = t.raw("categories.items") as string[];

  return (
    <PageTransition>
      <PageHeader tag="MRO" title={t("title")} subtitle={t("subtitle")} />

      {/* 정의 */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-gray-700 leading-relaxed text-[15px]">{t("definition")}</p>
          </FadeInSection>
        </div>
      </section>

      {/* 장점 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("benefits.title")}</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFIT_KEYS.map((key, i) => (
              <FadeInSection key={key} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                  <span className="text-4xl mb-3 block">{BENEFIT_ICONS[key]}</span>
                  <h3 className="font-bold text-primary mb-2">{t(`benefits.${key}.title`)}</h3>
                  <p className="text-sm text-gray-500">{t(`benefits.${key}.desc`)}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 자재 분류 */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="mb-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("categories.title")}</h2>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((cat) => (
                <span
                  key={cat}
                  className="bg-primary/5 border border-primary/20 text-primary font-medium text-sm px-5 py-2.5 rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>
    </PageTransition>
  );
}
