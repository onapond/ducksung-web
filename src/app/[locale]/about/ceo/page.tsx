import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";

export default function CeoPage() {
  const t = useTranslations("about.ceo");

  return (
    <PageTransition>
      <PageHeader tag="About" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="flex flex-col md:flex-row gap-10 items-start">
              {/* 사진 자리 */}
              <div className="shrink-0 w-40 h-48 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 text-sm">
                CEO Photo
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-[15px]">
                  {t("greeting")}
                </p>
                <p className="mt-8 font-bold text-primary text-lg">{t("signature")}</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </PageTransition>
  );
}
