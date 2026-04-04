# 덕성테크팩 웹사이트

(주)덕성테크팩 MRO 기업 홈페이지 — Next.js 14 App Router 기반 리뉴얼 프로젝트

## 기술 스택

| 항목 | 버전 |
|------|------|
| Next.js | 14 (App Router) |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| next-intl | 다국어 (ko/en) |
| Resend | 문의 폼 이메일 발송 |
| framer-motion | 애니메이션 |

## 로컬 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경변수 설정
```bash
cp .env.local.example .env.local
```

`.env.local` 파일을 열어 아래 값을 입력합니다:

| 키 | 설명 | 발급처 |
|----|------|--------|
| `RESEND_API_KEY` | 문의 폼 이메일 발송 | resend.com |
| `NEXT_PUBLIC_KAKAO_MAP_KEY` | 오시는 길 지도 | developers.kakao.com |
| `NEXT_PUBLIC_SITE_URL` | 배포 URL | Vercel 배포 후 입력 |

> **도메인 미등록 테스트:** `.env.local`에서 `RESEND_FROM_EMAIL=onboarding@resend.dev` 주석 해제

### 3. 개발 서버 실행
```bash
npm run dev
```

브라우저에서 http://localhost:3000 접속
- 한국어: http://localhost:3000/ko
- 영어: http://localhost:3000/en

### 4. 프로덕션 빌드
```bash
npm run build
npm start
```

## 페이지 구조

```
/ko (또는 /en)
├── /                         메인
├── /about/ceo                CEO 인사말
├── /about/organization       조직도 + 경영방침
├── /about/history            연혁
├── /about/business           사업영역
├── /about/people             인재상
├── /about/location           오시는 길 (카카오맵)
├── /mro                      MRO 소개
├── /mro/agent                MRO 구매대행
├── /products                 취급품목 카탈로그
├── /products/[category]      카테고리별 제품
├── /sourcing/strategy        소싱 전략
├── /sourcing/network         소싱 네트워크
├── /sourcing/delivery        납품 관리
├── /sourcing/service         소싱 서비스
├── /contact/inquiry          문의하기 (탭 3개)
├── /contact/notice           공지사항
└── /nso                      NSO 의료기관 납품
```

## Vercel 배포

1. vercel.com 에서 GitHub 저장소 연결
2. Environment Variables에 `.env.local` 내용 입력
3. Deploy 클릭

## 미완료 태스크

- [ ] Resend 도메인 인증 (`ducksungtp.com` DNS 등록)
- [ ] 카카오맵 API 키 발급 및 적용
- [ ] OG 이미지 (`/public/og-image.png`) 제작
- [ ] PDF 카탈로그 파일 (`/public/catalog.pdf`) 업로드
- [ ] 실제 로고 이미지 적용
