"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    kakao: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => object;
        Map: new (container: HTMLElement, options: object) => object;
        Marker: new (options: object) => { setMap: (map: object) => void };
        InfoWindow: new (options: object) => { open: (map: object, marker: object) => void };
      };
    };
  }
}

// 덕성테크팩 좌표 (전북 익산시 석암로3길 59)
const LAT = 35.9602;
const LNG = 126.9542;

export default function KakaoMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
    if (!apiKey) return;

    const scriptId = "kakao-map-sdk";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false`;
      script.async = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    function initMap() {
      window.kakao.maps.load(() => {
        if (!containerRef.current) return;
        const center = new window.kakao.maps.LatLng(LAT, LNG);
        const map = new window.kakao.maps.Map(containerRef.current, {
          center,
          level: 4,
        });
        const marker = new window.kakao.maps.Marker({ position: center, map });
        const infoWindow = new window.kakao.maps.InfoWindow({
          content: `<div style="padding:8px 12px;font-size:13px;font-weight:600;color:#1B4F72">(주)덕성테크팩</div>`,
        });
        infoWindow.open(map, marker);
      });
    }
  }, []);

  const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

  if (!apiKey) {
    return (
      <div className="w-full h-80 bg-gray-100 rounded-2xl flex flex-col items-center justify-center gap-2 text-gray-400">
        <span className="text-3xl">🗺️</span>
        <span className="text-sm">NEXT_PUBLIC_KAKAO_MAP_KEY 환경변수를 설정하면 지도가 표시됩니다.</span>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-full h-80 rounded-2xl overflow-hidden border border-gray-200"
    />
  );
}
