import { useTranslations } from "next-intl";
import Link from "next/link";
import FadeInSection from "@/components/FadeInSection";
import CountUp from "@/components/CountUp";
import PageTransition from "@/components/PageTransition";
import ServiceCard from "@/components/ServiceCard";

const STATS = [
  { key: "experience", target: 28, unitKey: "experience_unit" },
  { key: "clients", target: 500, unitKey: "clients_unit" },
  { key: "products", target: 10, unitKey: "products_unit" },
  { key: "partners", target: 300, unitKey: "partners_unit" },
];

const SERVICE_KEYS = ["mro", "sourcing", "catalog", "nso"] as const;

const SERVICE_ICONS: Record<string, string> = {
  mro: "🔧",
  sourcing: "🌐",
  catalog: "📦",
  nso: "🏭",
};

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations("home");

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <FadeInSection>
            <span className="inline-block text-accent bg-white/10 border border-accent/40 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              {t("hero.tag")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl">
              {t("hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/mro`}
                className="bg-accent hover:bg-accent/90 text-white font-semibold px-7 py-3 rounded-full transition-colors"
              >
                {t("hero.cta_primary")}
              </Link>
              <Link
                href={`/${locale}/contact/inquiry`}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-7 py-3 rounded-full transition-colors"
              >
                {t("hero.cta_secondary")}
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(({ key, target, unitKey }, i) => (
              <FadeInSection key={key} delay={i * 0.1} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">
                  <CountUp target={target} />
                  <span className="text-2xl ml-1 text-accent">{t(`stats.${unitKey}`)}</span>
                </p>
                <p className="mt-2 text-sm text-gray-500 font-medium">{t(`stats.${key}`)}</p>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t("services.title")}</h2>
          </FadeInSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_KEYS.map((key, i) => (
              <FadeInSection key={key} delay={i * 0.1}>
                <ServiceCard
                  icon={SERVICE_ICONS[key]}
                  title={t(`services.${key}.title`)}
                  desc={t(`services.${key}.desc`)}
                />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* NSO 배너 */}
      <section className="bg-teal-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-white">
              <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider">
                {t("nso_banner.tag")}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">{t("nso_banner.title")}</h2>
              <p className="text-white/75 text-base max-w-xl">{t("nso_banner.desc")}</p>
            </div>
            <Link
              href={`/${locale}/nso`}
              className="shrink-0 bg-white text-teal-700 font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              {t("nso_banner.button")}
            </Link>
          </FadeInSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20">
        <FadeInSection className="max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
          <p className="text-white/75 text-lg mb-8">{t("cta.subtitle")}</p>
          <Link
            href={`/${locale}/contact/inquiry`}
            className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg"
          >
            {t("cta.button")}
          </Link>
        </FadeInSection>
      </section>
    </PageTransition>
  );
}
