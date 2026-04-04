import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-white font-semibold text-lg mb-3">(주)덕성테크팩</p>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-gray-500 shrink-0">주소</span>
                <span>전북 익산시 석암로3길 59</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 shrink-0">전화</span>
                <span>063-834-6384~5</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500 shrink-0">이메일</span>
                <a
                  href="mailto:ducksung99@naver.com"
                  className="hover:text-white transition-colors"
                >
                  ducksung99@naver.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700 text-xs text-gray-500 text-center">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
