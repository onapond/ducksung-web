import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";
import KakaoMap from "@/components/KakaoMap";

export default function LocationPage() {
  const t = useTranslations("about.location");

  const INFO = [
    { label: t("address_label"), value: t("address") },
    { label: t("tel_label"), value: t("tel") },
    { label: t("fax_label"), value: t("fax") },
    { label: t("email_label"), value: t("email") },
    { label: t("hours_label"), value: t("hours") },
  ];

  return (
    <PageTransition>
      <PageHeader tag="About" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 카카오맵 */}
            <FadeInSection>
              <KakaoMap />
            </FadeInSection>

            {/* 주소 정보 */}
            <FadeInSection delay={0.15}>
              <div className="space-y-6">
                <table className="w-full text-sm">
                  <tbody className="divide-y divide-gray-100">
                    {INFO.map(({ label, value }) => (
                      <tr key={label}>
                        <td className="py-3 pr-4 text-gray-500 font-medium w-24 shrink-0">{label}</td>
                        <td className="py-3 text-gray-800">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* 교통편 */}
                <div className="mt-8 space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-bold text-primary text-sm mb-1">🚗 {t("directions.car")}</p>
                    <p className="text-sm text-gray-600">{t("directions.car_desc")}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="font-bold text-primary text-sm mb-1">🚌 {t("directions.bus")}</p>
                    <p className="text-sm text-gray-600">{t("directions.bus_desc")}</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
