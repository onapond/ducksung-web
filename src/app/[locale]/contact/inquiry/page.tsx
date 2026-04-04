import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";
import InquiryForm from "@/components/InquiryForm";

export default function InquiryPage() {
  const t = useTranslations("contact.inquiry");

  return (
    <PageTransition>
      <PageHeader tag="Contact" title={t("title")} subtitle={t("subtitle")} />
      <section className="py-20 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInSection>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <InquiryForm />
            </div>
          </FadeInSection>
        </div>
      </section>
    </PageTransition>
  );
}
