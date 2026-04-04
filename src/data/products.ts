export interface Product {
  id: string;
  name: string;
  code: string;
  description: string;
}

export interface ProductCategory {
  id: string;
  label: string;
  icon: string;
  products: Product[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "tape",
    label: "테이프류",
    icon: "🎀",
    products: [
      { id: "tape-001", name: "OPP 박스테이프", code: "TP-001", description: "박스 포장용 투명 OPP 테이프, 50mm×100m" },
      { id: "tape-002", name: "마스킹 테이프", code: "TP-002", description: "도장·마감 작업용 종이 마스킹 테이프" },
      { id: "tape-003", name: "PVC 절연 테이프", code: "TP-003", description: "전기 배선 절연용 PVC 테이프, 19mm×10m" },
      { id: "tape-004", name: "양면 테이프", code: "TP-004", description: "강력 접착 양면 테이프, 다양한 폭 규격" },
    ],
  },
  {
    id: "stretch",
    label: "스트레치필름",
    icon: "🌀",
    products: [
      { id: "sf-001", name: "핸드 스트레치필름", code: "SF-001", description: "수작업 팔레트 포장용 스트레치필름, 15μm" },
      { id: "sf-002", name: "기계용 스트레치필름", code: "SF-002", description: "자동 래핑기용 스트레치필름, 23μm" },
      { id: "sf-003", name: "미니 스트레치필름", code: "SF-003", description: "소형 상품 포장용 미니 스트레치필름" },
    ],
  },
  {
    id: "protect",
    label: "보호테이프류",
    icon: "🛡️",
    products: [
      { id: "pt-001", name: "표면보호필름", code: "PT-001", description: "금속·유리·플라스틱 표면 스크래치 방지 필름" },
      { id: "pt-002", name: "PE 보호필름", code: "PT-002", description: "가전·자동차 부품 표면 보호용 PE 필름" },
      { id: "pt-003", name: "알루미늄 테이프", code: "PT-003", description: "단열·방수 처리용 알루미늄 포일 테이프" },
    ],
  },
  {
    id: "container",
    label: "용기류",
    icon: "📦",
    products: [
      { id: "ct-001", name: "골판지 박스 (소)", code: "CT-001", description: "일반 소형 택배·제품 포장용 골판지 박스" },
      { id: "ct-002", name: "골판지 박스 (중)", code: "CT-002", description: "중형 제품 포장 및 이송용 골판지 박스" },
      { id: "ct-003", name: "아이스박스", code: "CT-003", description: "보냉·식품 배송용 EPS 스티로폼 박스" },
      { id: "ct-004", name: "플라스틱 통", code: "CT-004", description: "액체·분말 보관용 HDPE 플라스틱 용기" },
    ],
  },
  {
    id: "material",
    label: "부자재류",
    icon: "🔩",
    products: [
      { id: "mt-001", name: "에어캡 (뽁뽁이)", code: "MT-001", description: "완충 포장용 폴리에틸렌 에어캡 롤" },
      { id: "mt-002", name: "발포 폼 시트", code: "MT-002", description: "전자·유리 제품 보호용 PE 발포 시트" },
      { id: "mt-003", name: "PP 밴딩끈", code: "MT-003", description: "팔레트·박스 결속용 PP 스트래핑 밴드" },
      { id: "mt-004", name: "실링 스트립", code: "MT-004", description: "식품·의약품 포장 씰링용 알루미늄 스트립" },
    ],
  },
  {
    id: "machine",
    label: "포장기기",
    icon: "⚙️",
    products: [
      { id: "mc-001", name: "테이프 디스펜서", code: "MC-001", description: "OPP·마스킹 테이프 자동 절단 디스펜서" },
      { id: "mc-002", name: "밴딩기", code: "MC-002", description: "PP 밴드 결속용 반자동 스트래핑 머신" },
      { id: "mc-003", name: "열수축 포장기", code: "MC-003", description: "열수축 필름 포장용 L-바 실러 세트" },
    ],
  },
  {
    id: "facility",
    label: "설비류",
    icon: "🏭",
    products: [
      { id: "fac-001", name: "핸드 파렛트잭", code: "FAC-001", description: "팔레트 이동용 수동 핸드 리프트 (2톤)" },
      { id: "fac-002", name: "운반카트", code: "FAC-002", description: "물류 창고용 4륜 스틸 운반카트" },
      { id: "fac-003", name: "적재 선반", code: "FAC-003", description: "중량물 적재용 앵글 조립식 철제 선반" },
    ],
  },
  {
    id: "pdlc",
    label: "PDLC",
    icon: "🔬",
    products: [
      { id: "pdlc-001", name: "PDLC 스마트 필름", code: "PDLC-001", description: "전원 인가 시 투명·불투명 전환 스마트 글라스 필름" },
      { id: "pdlc-002", name: "PDLC 컨트롤러", code: "PDLC-002", description: "PDLC 필름 제어용 전용 스위칭 컨트롤러" },
      { id: "pdlc-003", name: "전동 블라인드 필름", code: "PDLC-003", description: "사무·의료 공간용 PDLC 파티션 솔루션" },
    ],
  },
  {
    id: "gift",
    label: "기업선물세트",
    icon: "🎁",
    products: [
      { id: "gf-001", name: "프리미엄 생필품 세트", code: "GF-001", description: "명절·기념일용 프리미엄 생활용품 선물 세트" },
      { id: "gf-002", name: "건강식품 선물세트", code: "GF-002", description: "홍삼·비타민 등 건강식품 기업 선물 세트" },
      { id: "gf-003", name: "주방용품 세트", code: "GF-003", description: "기업·단체 증정용 주방용품 패키지 세트" },
    ],
  },
  {
    id: "apparel",
    label: "의류",
    icon: "👕",
    products: [
      { id: "ap-001", name: "작업복 상하의", code: "AP-001", description: "산업 현장용 내구성 강화 작업복 세트" },
      { id: "ap-002", name: "방한 작업복", code: "AP-002", description: "동절기 방풍·방한 기능성 작업복" },
      { id: "ap-003", name: "반팔 근무복", code: "AP-003", description: "하절기 통기성 우수 반팔 유니폼 근무복" },
      { id: "ap-004", name: "안전조끼", code: "AP-004", description: "야간·교통 작업 안전을 위한 반사 안전조끼" },
    ],
  },
];
