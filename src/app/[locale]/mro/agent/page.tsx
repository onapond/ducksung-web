import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

const FEATURE_KEYS = ["single", "saving", "delivery", "report"] as const;
const FEATURE_ICONS: Record<string, string> = { single: "🗂️", saving: "💰", delivery: "🚚", report: "📊" };

export default function AgentPage() {
  const t = useTranslations("mro.agent");
  const steps: string[] = t.raw("process.steps") as string[];

  return (
    <PageTransition>
      <PageHeader tag="MRO" title={t("title")} subtitle={t("subtitle")} />

      {/* 프로세스 */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("process.title")}</h2>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div className="flex flex-col sm:flex-row items-center gap-0">
              {steps.map((step, i) => (
                <div key={step} className="flex sm:flex-1 flex-col sm:flex-row items-center w-full">
                  <div className="flex flex-col items-center text-center flex-1">
                    <div className="w-12 h-12 rounded-full bg-primary text-white font-bold flex items-center justify-center text-lg mb-2">
                      {i + 1}
                    </div>
                    <p className="text-sm font-medium text-gray-700">{step}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="text-gray-300 text-2xl rotate-90 sm:rotate-0 my-2 sm:my-0">›</div>
                  )}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 서비스 특징 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("features.title")}</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURE_KEYS.map((key, i) => (
              <FadeInSection key={key} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 text-center shadow-sm">
                  <span className="text-4xl mb-3 block">{FEATURE_ICONS[key]}</span>
                  <h3 className="font-bold text-primary mb-2">{t(`features.${key}.title`)}</h3>
                  <p className="text-sm text-gray-500">{t(`features.${key}.desc`)}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
