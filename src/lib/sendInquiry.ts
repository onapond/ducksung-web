"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const from = process.env.RESEND_FROM_EMAIL ?? "문의 <noreply@ducksungtp.com>";
const to = "ducksung99@naver.com";

export type InquiryType = "mro" | "nso" | "partner";

export interface MroInquiry {
  type: "mro";
  company: string;
  name: string;
  phone: string;
  email: string;
  items: string;
  budget: string;
  message: string;
}

export interface NsoInquiry {
  type: "nso";
  institution: string;
  name: string;
  position: string;
  phone: string;
  email: string;
  items: string;
  desiredDate: string;
  message: string;
}

export interface PartnerInquiry {
  type: "partner";
  company: string;
  name: string;
  phone: string;
  email: string;
  categories: string;
  message: string;
}

export type InquiryData = MroInquiry | NsoInquiry | PartnerInquiry;

function buildHtml(rows: { label: string; value: string }[]) {
  const rowsHtml = rows
    .map(
      ({ label, value }) =>
        `<tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;width:140px">${label}</td><td style="padding:8px;border:1px solid #ddd;white-space:pre-line">${value}</td></tr>`
    )
    .join("");
  return `<h2>홈페이지 문의가 접수되었습니다.</h2><table style="border-collapse:collapse;width:100%">${rowsHtml}</table>`;
}

const SUBJECT: Record<InquiryType, string> = {
  mro: "MRO 구매대행 문의",
  nso: "NSO 납품 문의",
  partner: "공급업체 제휴 문의",
};

export async function sendInquiry(data: InquiryData) {
  let rows: { label: string; value: string }[];

  if (data.type === "mro") {
    rows = [
      { label: "문의유형", value: "MRO 구매대행" },
      { label: "회사명", value: data.company },
      { label: "담당자명", value: data.name },
      { label: "연락처", value: data.phone },
      { label: "이메일", value: data.email },
      { label: "구매대행 품목", value: data.items },
      { label: "월 예상 구매금액", value: data.budget },
      { label: "문의내용", value: data.message },
    ];
  } else if (data.type === "nso") {
    rows = [
      { label: "문의유형", value: "NSO 납품 문의" },
      { label: "기관명", value: data.institution },
      { label: "담당자명", value: data.name },
      { label: "직책", value: data.position },
      { label: "연락처", value: data.phone },
      { label: "이메일", value: data.email },
      { label: "납품 희망 품목", value: data.items },
      { label: "납품 시작 희망 시기", value: data.desiredDate },
      { label: "문의내용", value: data.message },
    ];
  } else {
    rows = [
      { label: "문의유형", value: "공급업체 제휴" },
      { label: "회사명", value: data.company },
      { label: "담당자명", value: data.name },
      { label: "연락처", value: data.phone },
      { label: "이메일", value: data.email },
      { label: "취급 품목 및 카테고리", value: data.categories },
      { label: "문의내용", value: data.message },
    ];
  }

  await resend.emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `[홈페이지 문의] ${SUBJECT[data.type]} - ${data.name}`,
    html: buildHtml(rows),
  });
}
