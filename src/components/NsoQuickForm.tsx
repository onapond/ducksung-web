"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { sendInquiry } from "@/lib/sendInquiry";

type Status = "idle" | "loading" | "success" | "error";

export default function NsoQuickForm() {
  const t = useTranslations("nso.quick_form");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const f = e.currentTarget;
    try {
      await sendInquiry({
        type: "nso",
        institution: (f.elements.namedItem("institution") as HTMLInputElement).value,
        name: (f.elements.namedItem("name") as HTMLInputElement).value,
        phone: (f.elements.namedItem("phone") as HTMLInputElement).value,
        email: "",
        position: "",
        items: "",
        desiredDate: "",
        message: "NSO 페이지 빠른 문의",
      });
      setStatus("success");
      f.reset();
    } catch {
      setStatus("error");
    }
  }

  const INPUT = "w-full bg-white/10 border border-white/30 rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/40";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1.5">{t("institution")}</label>
          <input name="institution" required placeholder="○○병원" className={INPUT} />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1.5">{t("name")}</label>
          <input name="name" required placeholder="홍길동" className={INPUT} />
        </div>
        <div>
          <label className="block text-sm font-medium text-white/80 mb-1.5">{t("phone")}</label>
          <input name="phone" required placeholder="010-0000-0000" className={INPUT} />
        </div>
      </div>

      {status === "success" && (
        <p className="text-sm bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white">{t("success")}</p>
      )}
      {status === "error" && (
        <p className="text-sm bg-red-500/20 border border-red-300/30 rounded-xl px-4 py-3 text-white">{t("error")}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto bg-white text-primary font-semibold px-10 py-3 rounded-full hover:bg-white/90 disabled:opacity-60 transition-colors"
      >
        {status === "loading" ? "전송 중..." : t("submit")}
      </button>
    </form>
  );
}
