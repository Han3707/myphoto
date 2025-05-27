export const colors = {
  // 주요 색상 - 2025 트렌드
  primary: {
    dark: '#0F172A',      // 슬레이트 다크 (배경)
    darkGray: '#1E293B',  // 슬레이트 그레이 (대체 배경)
    navy: '#1E40AF',      // 모던 네이비
  },
  
  // Surface 색상 - 깔끔한 흰색 기반
  surface: {
    light: '#FFFFFF',     // 순백 배경
    elevated: '#FFFFFF',  // 카드 배경
    subtle: '#F8FAFC',    // 미묘한 회색 배경
    border: '#E2E8F0',    // 경계선
  },
  
  // 텍스트 색상 - 높은 대비
  text: {
    primary: '#0F172A',   // 메인 텍스트 (진한 슬레이트)
    secondary: '#475569', // 보조 텍스트 (중간 슬레이트)
    muted: '#64748B',     // 약한 텍스트
    onDark: '#F8FAFC',    // 어두운 배경용 텍스트
    body: '#334155',      // 본문 텍스트
  },
  
  // 2025 트렌드 액센트 색상
  accent: {
    primary: '#3B82F6',   // 모던 블루 (주요 CTA)
    secondary: '#8B5CF6', // 바이올렛 (보조 강조)
    tertiary: '#F59E0B',  // 앰버 (세 번째 강조)
    success: '#10B981',   // 에메랄드 그린
    warning: '#F59E0B',   // 앰버
    danger: '#EF4444',    // 레드
    cyan: '#06B6D4',      // 사이안 (기존 호환)
    purple: '#8B5CF6',    // 퍼플
    emerald: '#059669',   // 에메랄드
  },
  
  // 중성 색상
  neutral: {
    white: '#FFFFFF',
    gray50: '#F8FAFC',
    gray100: '#F1F5F9',
    gray200: '#E2E8F0',
    gray300: '#CBD5E1',
    gray400: '#94A3B8',
    gray500: '#64748B',
    gray600: '#475569',
    gray700: '#334155',
    gray800: '#1E293B',
    gray900: '#0F172A',
    black: '#000000',
    lightGray: '#F1F5F9',
    mediumGray: '#94A3B8',
  },
  
  // 프로젝트별 색상
  project: {
    funding: '#EF4444',    // 레드 (펀딩 플랫폼)
    fitness: '#10B981',    // 그린 (피트니스)
    gallery: '#3B82F6',    // 블루 (갤러리)
  },
  
  // 스킬 카테고리별 색상
  skill: {
    // 언어
    javascript: '#F7DF1E',    // JavaScript 노란색
    dart: '#0175C2',          // Dart 블루
    typescript: '#3178C6',    // TypeScript 블루
    python: '#3776AB',        // Python 블루
    
    // 프레임워크
    flutter: '#02569B',       // Flutter 블루
    react: '#61DAFB',         // React 시안
    reactNative: '#61DAFB',   // React Native 시안
    
    // 도구
    websocket: '#FF6B6B',     // WebSocket 레드
    auth: '#4CAF50',          // OAuth/JWT 그린
    vite: '#646CFF',          // Vite 퍼플
    firebase: '#FFCA28',      // Firebase 옐로우
    git: '#F05032',           // Git 오렌지
    
    // 카테고리별 색상 (유지)
    frontend: '#3B82F6',      // 블루
    mobile: '#10B981',        // 그린
    backend: '#8B5CF6',       // 퍼플
    tools: '#F59E0B',         // 앰버
    database: '#EF4444',      // 레드
  },
  
  // 블랙홀 애니메이션 색상 (유지)
  blackHole: {
    center: '#000000',
    glow1: '#FF1493',
    glow2: '#8A2BE2',
    glow3: '#0000FF',
    accretion: '#FF4500',
  },
  
  // 그라데이션 - 업데이트
  gradients: {
    heroOverlay: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.7) 100%)',
    blackHoleRadial: 'radial-gradient(circle at center, #000000 35%, #FF4500 45%, #000000 75%)',
    heroDepth: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0D1B2A 100%)',
    heroMoern: 'linear-gradient(135deg, #1E293B 0%, #334155 25%, #475569 75%, #64748B 100%)',
    subtle: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
    darkElegant: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
  }
}; 