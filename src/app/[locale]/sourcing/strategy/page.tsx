import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

const STEPS = ["analyze", "find", "evaluate", "contract", "manage"] as const;
const STEP_ICONS = ["🔍", "🌐", "📋", "🤝", "📡"];

export default function StrategyPage() {
  const t = useTranslations("sourcing.strategy");

  return (
    <PageTransition>
      <PageHeader tag="Sourcing" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {STEPS.map((key, i) => (
              <FadeInSection key={key} delay={i * 0.1}>
                <div className="flex gap-6 items-start p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl">{STEP_ICONS[i]}</span>
                      <h3 className="font-bold text-gray-900">{t(`steps.${key}.title`)}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{t(`steps.${key}.desc`)}</p>
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
