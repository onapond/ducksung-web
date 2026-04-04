import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import ProductCatalog from "@/components/ProductCatalog";

interface Props {
  params: { locale: string };
}

export default function ProductsPage({ params: { locale } }: Props) {
  return (
    <PageTransition>
      <PageHeader
        tag="Products"
        title="취급품목"
        subtitle="산업 전반에 걸친 MRO·포장 자재를 취급합니다."
      />
      <ProductCatalog locale={locale} />
    </PageTransition>
  );
}
