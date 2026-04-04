"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { PRODUCT_CATEGORIES, type ProductCategory } from "@/data/products";
import FadeInSection from "./FadeInSection";

function ProductCard({ product }: { product: ProductCategory["products"][number] }) {
  return (
    <motion.div
      whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-default"
    >
      {/* 이미지 플레이스홀더 */}
      <div className="w-full aspect-square bg-gray-50 flex items-center justify-center text-4xl">
        📦
      </div>
      <div className="p-4">
        <p className="font-semibold text-gray-800 text-sm leading-snug">{product.name}</p>
        <p className="text-xs text-accent font-medium mt-0.5">{product.code}</p>
        <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">{product.description}</p>
      </div>
    </motion.div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProductCatalog({ locale }: { locale: string }) {
  const [active, setActive] = useState(PRODUCT_CATEGORIES[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  const activeCategory = PRODUCT_CATEGORIES.find((c) => c.id === active)!;

  const scrollTo = (id: string) => {
    setActive(id);
    setMobileOpen(false);
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* PDF 다운로드 버튼 */}
      <FadeInSection className="flex justify-end mb-6">
        <a
          href="/catalog.pdf"
          download
          className="flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          전체 PDF 카탈로그 다운로드
        </a>
      </FadeInSection>

      {/* 모바일: 카테고리 드롭다운 */}
      <div className="lg:hidden mb-6 relative">
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="w-full flex items-center justify-between bg-white border border-gray-300 rounded-xl px-4 py-3 text-sm font-medium"
        >
          <span className="flex items-center gap-2">
            <span>{activeCategory.icon}</span>
            <span>{activeCategory.label}</span>
          </span>
          <svg className={`w-4 h-4 transition-transform ${mobileOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {mobileOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-xl shadow-lg z-10 mt-1 overflow-hidden">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`w-full flex items-center gap-2 px-4 py-3 text-sm text-left transition-colors ${
                  active === cat.id ? "bg-primary/5 text-primary font-semibold" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-8">
        {/* 데스크탑: 사이드바 */}
        <aside className="hidden lg:block w-52 shrink-0">
          <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl overflow-hidden">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => scrollTo(cat.id)}
                className={`w-full flex items-center gap-3 px-4 py-3.5 text-sm text-left border-b border-gray-100 last:border-0 transition-colors ${
                  active === cat.id
                    ? "bg-primary text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* 제품 그리드 */}
        <div className="flex-1 space-y-14">
          {PRODUCT_CATEGORIES.map((cat) => (
            <section
              key={cat.id}
              ref={(el) => { sectionRefs.current[cat.id] = el; }}
            >
              <FadeInSection>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{cat.icon}</span>
                  <h2 className="text-xl font-bold text-gray-900">{cat.label}</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
                  {cat.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </FadeInSection>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
