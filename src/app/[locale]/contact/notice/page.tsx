import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

const NOTICES = [
  { id: 1, title: "2024년 하계 휴무 안내", date: "2024-07-19", important: true },
  { id: 2, title: "홈페이지 리뉴얼 오픈 안내", date: "2024-06-01", important: true },
  { id: 3, title: "신규 카탈로그 업데이트 안내", date: "2024-05-15", important: false },
  { id: 4, title: "배송 지연 안내 (설 연휴)", date: "2024-02-08", important: false },
];

export default function NoticePage() {
  const t = useTranslations("contact.notice");

  return (
    <PageTransition>
      <PageHeader tag="Contact" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {NOTICES.length === 0 ? (
            <p className="text-center text-gray-400 py-20">{t("empty")}</p>
          ) : (
            <div className="divide-y divide-gray-100">
              {NOTICES.map(({ id, title, date, important }, i) => (
                <FadeInSection key={id} delay={i * 0.07}>
                  <div className="flex items-center justify-between py-5 hover:bg-gray-50 px-2 rounded-xl transition-colors cursor-pointer">
                    <div className="flex items-center gap-3">
                      {important && (
                        <span className="shrink-0 text-xs bg-accent text-white font-bold px-2.5 py-0.5 rounded-full">
                          공지
                        </span>
                      )}
                      <span className="text-gray-800 font-medium text-sm">{title}</span>
                    </div>
                    <span className="text-gray-400 text-xs shrink-0 ml-4">{date}</span>
                  </div>
                </FadeInSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageTransition>
  );
}
