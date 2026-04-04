import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

const HISTORY = [
  { year: "2024", items: ["디지털 MRO 플랫폼 고도화", "공급 파트너 300개사 돌파"] },
  { year: "2022", items: ["글로벌 소싱 네트워크 구축 (중국·일본·독일)", "ISO 9001 인증 갱신"] },
  { year: "2020", items: ["NSO 서비스 론칭", "거래처 500개사 달성"] },
  { year: "2018", items: ["본사 이전 (전북 익산시 석암로3길 59)", "온라인 발주 시스템 도입"] },
  { year: "2015", items: ["MRO 통합 구매대행 서비스 개시", "취급품목 10만 종 돌파"] },
  { year: "2010", items: ["영업 조직 확대 및 물류센터 설립"] },
  { year: "2005", items: ["산업용 공구·소모품 전문 공급 사업 강화"] },
  { year: "1996", items: ["(주)덕성테크팩 창립"] },
];

export default function HistoryPage() {
  const t = useTranslations("about.history");

  return (
    <PageTransition>
      <PageHeader tag="About" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* 세로선 */}
            <div className="absolute left-16 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />

            <div className="space-y-10">
              {HISTORY.map(({ year, items }, i) => (
                <FadeInSection key={year} delay={i * 0.07}>
                  <div className="flex gap-8 items-start">
                    <div className="shrink-0 w-14 text-right">
                      <span className="text-primary font-bold text-lg">{year}</span>
                    </div>
                    {/* 점 */}
                    <div className="shrink-0 w-4 flex justify-center pt-1.5 hidden sm:flex">
                      <div className="w-3 h-3 rounded-full bg-accent border-2 border-white ring-2 ring-accent/30" />
                    </div>
                    <ul className="space-y-1.5">
                      {items.map((item) => (
                        <li key={item} className="text-gray-700 text-sm before:content-['·'] before:mr-2 before:text-accent">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
