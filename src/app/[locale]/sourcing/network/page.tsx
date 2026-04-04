import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";
import CountUp from "@/components/CountUp";

export default function NetworkPage() {
  const t = useTranslations("sourcing.network");

  return (
    <PageTransition>
      <PageHeader tag="Sourcing" title={t("title")} subtitle={t("subtitle")} />

      {/* 통계 */}
      <section className="py-12 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 grid grid-cols-2 gap-8 text-center">
          <FadeInSection>
            <p className="text-5xl font-bold text-white">
              <CountUp target={300} />+
            </p>
            <p className="mt-2 text-white/70 text-sm">{t("partners_label")}</p>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <p className="text-5xl font-bold text-white">
              <CountUp target={12} />
            </p>
            <p className="mt-2 text-white/70 text-sm">{t("countries_label")}</p>
          </FadeInSection>
        </div>
      </section>

      {/* 국내/글로벌 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <FadeInSection>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
              <span className="text-4xl mb-4 block">🇰🇷</span>
              <h3 className="text-xl font-bold text-primary mb-3">{t("domestic.title")}</h3>
              <p className="text-gray-600">{t("domestic.desc")}</p>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full">
              <span className="text-4xl mb-4 block">🌏</span>
              <h3 className="text-xl font-bold text-primary mb-3">{t("global.title")}</h3>
              <p className="text-gray-600">{t("global.desc")}</p>
            </div>
          </FadeInSection>
        </div>
      </section>
    </PageTransition>
  );
}
