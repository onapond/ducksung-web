import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import PageTransition from "@/components/PageTransition";
import FadeInSection from "@/components/FadeInSection";
import { PRODUCT_CATEGORIES } from "@/data/products";

interface Props {
  params: { locale: string; category: string };
}

export function generateStaticParams() {
  return PRODUCT_CATEGORIES.map((cat) => ({ category: cat.id }));
}

export default function CategoryPage({ params: { locale, category } }: Props) {
  const cat = PRODUCT_CATEGORIES.find((c) => c.id === category);
  if (!cat) notFound();

  return (
    <PageTransition>
      <PageHeader tag="Products" title={cat.label} />

      {/* 카테고리 탭 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="flex gap-1 py-2">
            {PRODUCT_CATEGORIES.map((c) => (
              <Link
                key={c.id}
                href={`/${locale}/products/${c.id}`}
                className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  c.id === category
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <span>{c.icon}</span>
                <span>{c.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* 제품 그리드 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {cat.products.map(({ id, name, code, description }, i) => (
              <FadeInSection key={id} delay={i * 0.06}>
                <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-200">
                  <div className="w-full aspect-square bg-gray-50 flex items-center justify-center text-5xl">
                    {cat.icon}
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-800 text-sm leading-snug">{name}</p>
                    <p className="text-xs text-accent font-medium mt-0.5">{code}</p>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">{description}</p>
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
