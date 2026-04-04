import { useTranslations } from "next-intl";
import Link from "next/link";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";
import NsoQuickForm from "@/components/NsoQuickForm";

interface Category {
  icon: string;
  title: string;
  desc: string;
}

interface Step {
  label: string;
  desc: string;
}

export default function NsoPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("nso");
  const categories = t.raw("items.categories") as Category[];
  const steps = t.raw("process.steps") as Step[];
  const mroPoints = t.raw("about.compare.mro_points") as string[];
  const nsoPoints = t.raw("about.compare.nso_points") as string[];

  return (
    <PageTransition>
      {/* 1. 히어로 */}
      <section className="bg-primary text-white py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInSection>
            <span className="inline-block text-accent text-sm font-semibold border border-accent/40 bg-white/10 px-4 py-1.5 rounded-full mb-6">
              {t("hero.tag")}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t("hero.title")}</h1>
            <p className="text-white/75 text-lg mb-10 max-w-2xl mx-auto">{t("hero.subtitle")}</p>
            <Link
              href={`/${locale}/contact/inquiry?type=nso`}
              className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg"
            >
              {t("hero.cta")}
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* 2. NSO란? */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("about.title")}</h2>
            <p className="mt-3 text-gray-500">{t("about.subtitle")}</p>
          </FadeInSection>
          <FadeInSection delay={0.1} className="mb-12">
            <p className="text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">{t("about.desc")}</p>
          </FadeInSection>

          {/* MRO vs NSO 비교 */}
          <FadeInSection delay={0.15}>
            <h3 className="text-xl font-bold text-gray-800 text-center mb-6">{t("about.compare.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* MRO */}
              <div className="bg-gray-50 rounded-2xl p-7 border border-gray-200">
                <p className="font-bold text-gray-700 text-lg mb-4 flex items-center gap-2">
                  <span>🔧</span> {t("about.compare.mro_title")}
                </p>
                <ul className="space-y-2">
                  {mroPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gray-400 mt-0.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* NSO */}
              <div className="bg-primary/5 rounded-2xl p-7 border-2 border-primary/30">
                <p className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
                  <span>🏥</span> {t("about.compare.nso_title")}
                </p>
                <ul className="space-y-2">
                  {nsoPoints.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-accent mt-0.5">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 3. 공급 가능 품목 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("items.title")}</h2>
            <p className="mt-3 text-gray-500">{t("items.subtitle")}</p>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <FadeInSection key={cat.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex gap-4 items-start h-full">
                  <span className="text-3xl shrink-0">{cat.icon}</span>
                  <div>
                    <p className="font-bold text-primary mb-1">{cat.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 4. 납품 프로세스 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("process.title")}</h2>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <div className="flex flex-col md:flex-row items-stretch gap-0">
              {steps.map((step, i) => (
                <div key={step.label} className="flex md:flex-1 flex-row md:flex-col items-center gap-0">
                  <div className="flex flex-col md:flex-col items-center flex-1 text-center px-3 py-4 md:py-0">
                    {/* 번호 */}
                    <div className="w-12 h-12 rounded-full bg-primary text-white font-bold text-lg flex items-center justify-center mb-3 shrink-0">
                      {i + 1}
                    </div>
                    <p className="font-bold text-gray-800 text-sm mb-1">{step.label}</p>
                    <p className="text-xs text-gray-500">{step.desc}</p>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="text-gray-300 text-2xl shrink-0 rotate-90 md:rotate-0 my-1 md:my-4">›</div>
                  )}
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* 5. 빠른 문의 폼 */}
      <section className="py-20 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center text-white mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("quick_form.title")}</h2>
            <p className="text-white/70">{t("quick_form.subtitle")}</p>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <NsoQuickForm />
          </FadeInSection>
        </div>
      </section>
    </PageTransition>
  );
}
