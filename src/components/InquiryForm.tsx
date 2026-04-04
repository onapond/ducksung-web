"use client";

import { useState } from "react";
import { sendInquiry, type InquiryData } from "@/lib/sendInquiry";

const TABS = [
  { id: "mro", label: "MRO 구매대행 문의" },
  { id: "nso", label: "NSO 납품 문의" },
  { id: "partner", label: "공급업체 제휴 문의" },
] as const;

type TabId = (typeof TABS)[number]["id"];
type Status = "idle" | "loading" | "success" | "error";

const INPUT =
  "w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent";
const LABEL = "block text-sm font-medium text-gray-700 mb-1.5";
const TEXTAREA = `${INPUT} resize-none`;

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className={LABEL}>{label}{required && <span className="text-red-500 ml-0.5">*</span>}</label>
      {children}
    </div>
  );
}

function MroForm({ onSubmit, status }: { onSubmit: (d: InquiryData) => void; status: Status }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const f = e.currentTarget;
      onSubmit({
        type: "mro",
        company: (f.elements.namedItem("company") as HTMLInputElement).value,
        name: (f.elements.namedItem("name") as HTMLInputElement).value,
        phone: (f.elements.namedItem("phone") as HTMLInputElement).value,
        email: (f.elements.namedItem("email") as HTMLInputElement).value,
        items: (f.elements.namedItem("items") as HTMLInputElement).value,
        budget: (f.elements.namedItem("budget") as HTMLSelectElement).value,
        message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
      });
    }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="회사명" required><input name="company" required placeholder="(주)회사명" className={INPUT} /></Field>
        <Field label="담당자명" required><input name="name" required placeholder="홍길동" className={INPUT} /></Field>
        <Field label="연락처" required><input name="phone" required placeholder="010-0000-0000" className={INPUT} /></Field>
        <Field label="이메일" required><input name="email" type="email" required placeholder="example@company.com" className={INPUT} /></Field>
      </div>
      <Field label="구매대행 품목"><input name="items" placeholder="예) 산업용 공구, 안전용품 등" className={INPUT} /></Field>
      <Field label="월 예상 구매금액">
        <select name="budget" className={INPUT + " bg-white"}>
          <option value="">선택 안 함</option>
          <option>500만원 미만</option>
          <option>500만원 ~ 1,000만원</option>
          <option>1,000만원 ~ 3,000만원</option>
          <option>3,000만원 이상</option>
        </select>
      </Field>
      <Field label="문의내용" required><textarea name="message" required rows={4} placeholder="문의 내용을 자세히 입력해 주세요." className={TEXTAREA} /></Field>
      <SubmitBtn status={status} />
    </form>
  );
}

function NsoForm({ onSubmit, status }: { onSubmit: (d: InquiryData) => void; status: Status }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const f = e.currentTarget;
      onSubmit({
        type: "nso",
        institution: (f.elements.namedItem("institution") as HTMLInputElement).value,
        name: (f.elements.namedItem("name") as HTMLInputElement).value,
        position: (f.elements.namedItem("position") as HTMLInputElement).value,
        phone: (f.elements.namedItem("phone") as HTMLInputElement).value,
        email: (f.elements.namedItem("email") as HTMLInputElement).value,
        items: (f.elements.namedItem("items") as HTMLInputElement).value,
        desiredDate: (f.elements.namedItem("desiredDate") as HTMLInputElement).value,
        message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
      });
    }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="기관명" required><input name="institution" required placeholder="○○병원" className={INPUT} /></Field>
        <Field label="담당자명" required><input name="name" required placeholder="홍길동" className={INPUT} /></Field>
        <Field label="직책"><input name="position" placeholder="구매팀장" className={INPUT} /></Field>
        <Field label="연락처" required><input name="phone" required placeholder="010-0000-0000" className={INPUT} /></Field>
        <Field label="이메일" required><input name="email" type="email" required placeholder="example@hospital.com" className={INPUT} /></Field>
        <Field label="납품 시작 희망 시기"><input name="desiredDate" placeholder="예) 2024년 9월" className={INPUT} /></Field>
      </div>
      <Field label="납품 희망 품목"><input name="items" placeholder="예) 의료소모품, 위생용품 등" className={INPUT} /></Field>
      <Field label="문의내용" required><textarea name="message" required rows={4} placeholder="문의 내용을 자세히 입력해 주세요." className={TEXTAREA} /></Field>
      <SubmitBtn status={status} />
    </form>
  );
}

function PartnerForm({ onSubmit, status }: { onSubmit: (d: InquiryData) => void; status: Status }) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const f = e.currentTarget;
      onSubmit({
        type: "partner",
        company: (f.elements.namedItem("company") as HTMLInputElement).value,
        name: (f.elements.namedItem("name") as HTMLInputElement).value,
        phone: (f.elements.namedItem("phone") as HTMLInputElement).value,
        email: (f.elements.namedItem("email") as HTMLInputElement).value,
        categories: (f.elements.namedItem("categories") as HTMLInputElement).value,
        message: (f.elements.namedItem("message") as HTMLTextAreaElement).value,
      });
    }} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="회사명" required><input name="company" required placeholder="(주)공급업체명" className={INPUT} /></Field>
        <Field label="담당자명" required><input name="name" required placeholder="홍길동" className={INPUT} /></Field>
        <Field label="연락처" required><input name="phone" required placeholder="010-0000-0000" className={INPUT} /></Field>
        <Field label="이메일" required><input name="email" type="email" required placeholder="example@company.com" className={INPUT} /></Field>
      </div>
      <Field label="취급 품목 및 카테고리"><input name="categories" placeholder="예) 산업용 공구, 베어링류 등" className={INPUT} /></Field>
      <Field label="문의내용" required><textarea name="message" required rows={4} placeholder="제휴 관련 내용을 자세히 입력해 주세요." className={TEXTAREA} /></Field>
      <SubmitBtn status={status} />
    </form>
  );
}

function SubmitBtn({ status }: { status: Status }) {
  return (
    <button
      type="submit"
      disabled={status === "loading"}
      className="w-full bg-primary hover:bg-primary/90 disabled:opacity-60 text-white font-semibold py-3.5 rounded-xl transition-colors"
    >
      {status === "loading" ? "전송 중..." : "문의 보내기"}
    </button>
  );
}

export default function InquiryForm() {
  const [tab, setTab] = useState<TabId>("mro");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(data: InquiryData) {
    setStatus("loading");
    try {
      await sendInquiry(data);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* 탭 */}
      <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => { setTab(id); setStatus("idle"); }}
            className={`shrink-0 px-5 py-3 text-sm font-semibold border-b-2 transition-colors ${
              tab === id
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 상태 메시지 */}
      {status === "success" && (
        <p className="mb-6 text-green-600 text-sm bg-green-50 border border-green-200 rounded-xl px-4 py-3">
          문의가 접수되었습니다. 담당자가 빠르게 연락드리겠습니다.
        </p>
      )}
      {status === "error" && (
        <p className="mb-6 text-red-600 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3">
          전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
        </p>
      )}

      {/* 폼 */}
      {tab === "mro" && <MroForm onSubmit={handleSubmit} status={status} />}
      {tab === "nso" && <NsoForm onSubmit={handleSubmit} status={status} />}
      {tab === "partner" && <PartnerForm onSubmit={handleSubmit} status={status} />}
    </div>
  );
}
