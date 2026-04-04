"use client";

import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

interface SubItem {
  labelKey: string;
  href: string;
}

interface NavItem {
  key: string;
  href: string;
  children?: SubItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    key: "about",
    href: "/about/ceo",
    children: [
      { labelKey: "about_ceo", href: "/about/ceo" },
      { labelKey: "about_org", href: "/about/organization" },
      { labelKey: "about_history", href: "/about/history" },
      { labelKey: "about_business", href: "/about/business" },
      { labelKey: "about_people", href: "/about/people" },
      { labelKey: "about_location", href: "/about/location" },
    ],
  },
  {
    key: "mro",
    href: "/mro",
    children: [
      { labelKey: "mro_intro", href: "/mro" },
      { labelKey: "mro_agent", href: "/mro/agent" },
    ],
  },
  { key: "products", href: "/products" },
  {
    key: "sourcing",
    href: "/sourcing/strategy",
    children: [
      { labelKey: "sourcing_strategy", href: "/sourcing/strategy" },
      { labelKey: "sourcing_network", href: "/sourcing/network" },
      { labelKey: "sourcing_delivery", href: "/sourcing/delivery" },
      { labelKey: "sourcing_service", href: "/sourcing/service" },
    ],
  },
  { key: "nso", href: "/nso" },
  { key: "community", href: "/contact/notice" },
  { key: "catalog", href: "/catalog" },
];

function DropdownItem({
  item,
  locale,
  t,
}: {
  item: NavItem;
  locale: string;
  t: ReturnType<typeof useTranslations>;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  if (!item.children) {
    return (
      <Link
        href={`/${locale}${item.href}`}
        className="text-sm font-medium text-gray-700 hover:text-primary transition-colors py-5"
      >
        {t(item.key as Parameters<typeof t>[0])}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-primary transition-colors py-5"
        onClick={() => setOpen((v) => !v)}
      >
        {t(item.key as Parameters<typeof t>[0])}
        <svg
          className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full w-44 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden z-50">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={`/${locale}${child.href}`}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              {t(child.labelKey as Parameters<typeof t>[0])}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);

  const switchLocale = (next: string) => {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href={`/${locale}`} className="flex items-center shrink-0">
            <span className="text-xl font-bold text-primary">덕성테크팩</span>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <DropdownItem key={item.key} item={item} locale={locale} t={t} />
            ))}
          </nav>

          {/* 언어 전환 + 햄버거 */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden text-xs font-medium">
              <button
                onClick={() => switchLocale("ko")}
                className={`px-3 py-1.5 transition-colors ${
                  locale === "ko" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                KO
              </button>
              <button
                onClick={() => switchLocale("en")}
                className={`px-3 py-1.5 transition-colors ${
                  locale === "en" ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                EN
              </button>
            </div>

            <button
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="메뉴 열기"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col px-4 py-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.key} className="border-b border-gray-100 last:border-0">
                {item.children ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between py-3 text-sm font-medium text-gray-700"
                      onClick={() => setMobileOpen(mobileOpen === item.key ? null : item.key)}
                    >
                      <span>{t(item.key as Parameters<typeof t>[0])}</span>
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileOpen === item.key ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileOpen === item.key && (
                      <div className="pb-2 pl-3 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={`/${locale}${child.href}`}
                            className="block py-2 text-sm text-gray-600 hover:text-primary"
                            onClick={() => { setMenuOpen(false); setMobileOpen(null); }}
                          >
                            {t(child.labelKey as Parameters<typeof t>[0])}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={`/${locale}${item.href}`}
                    className="block py-3 text-sm font-medium text-gray-700 hover:text-primary"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(item.key as Parameters<typeof t>[0])}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
