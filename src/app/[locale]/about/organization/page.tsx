import { useTranslations } from "next-intl";
import FadeInSection from "@/components/FadeInSection";
import PageTransition from "@/components/PageTransition";

const DIVISIONS = ["management", "sales", "sourcing", "logistics", "it"] as const;

const DIVISION_TEAMS: Record<string, string[]> = {
  management: ["인사", "총무", "재무"],
  sales: ["국내영업1팀", "국내영업2팀", "해외영업팀"],
  sourcing: ["구매팀", "품질관리"],
  logistics: ["입출고팀", "배송팀"],
  it: ["시스템개발", "운영지원"],
};

export default function OrganizationPage() {
  const t = useTranslations("about.org");

  return (
    <PageTransition>
      {/* 페이지 헤더 */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">About</p>
            <h1 className="text-3xl md:text-4xl font-bold">{t("title")}</h1>
            <p className="mt-3 text-white/70">{t("subtitle")}</p>
          </FadeInSection>
        </div>
      </section>

      {/* 조직도 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 대표이사 */}
          <FadeInSection className="flex justify-center mb-10">
            <div className="bg-primary text-white rounded-2xl px-10 py-5 text-center shadow-lg">
              <p className="text-xs text-white/60 mb-1 tracking-wider uppercase">CEO</p>
              <p className="text-xl font-bold">{t("ceo")}</p>
            </div>
          </FadeInSection>

          {/* 연결선 */}
          <FadeInSection delay={0.1} className="flex justify-center mb-10">
            <div className="w-px h-10 bg-gray-300" />
          </FadeInSection>

          {/* 부서 라인 */}
          <FadeInSection delay={0.2} className="relative flex justify-center mb-0">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gray-300" />
          </FadeInSection>

          {/* 부서들 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-0">
            {DIVISIONS.map((div, i) => (
              <FadeInSection key={div} delay={0.2 + i * 0.08}>
                <div className="flex flex-col items-center">
                  {/* 수직선 */}
                  <div className="w-px h-8 bg-gray-300" />

                  {/* 부서 박스 */}
                  <div className="w-full bg-white border-2 border-accent rounded-xl p-4 text-center shadow-sm">
                    <p className="text-sm font-bold text-primary">{t(`divisions.${div}`)}</p>
                  </div>

                  {/* 팀 목록 */}
                  <div className="w-px h-6 bg-gray-200" />
                  <div className="w-full space-y-1.5">
                    {DIVISION_TEAMS[div].map((team) => (
                      <div
                        key={team}
                        className="bg-gray-100 rounded-lg py-2 text-center text-xs text-gray-600 font-medium"
                      >
                        {team}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      {/* 경영방침 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{t("policy_title")}</h2>
            <p className="mt-3 text-gray-500">{t("policy_subtitle")}</p>
          </FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["customer", "ethics", "growth"] as const).map((key, i) => {
              const icons = ["🤝", "⚖️", "🚀"];
              return (
                <FadeInSection key={key} delay={i * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 text-center h-full">
                    <span className="text-5xl mb-5 block">{icons[i]}</span>
                    <h3 className="text-lg font-bold text-primary mb-3">{t(`policies.${key}.title`)}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{t(`policies.${key}.desc`)}</p>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
