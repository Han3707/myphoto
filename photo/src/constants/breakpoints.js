export const breakpoints = {
  // 브레이크포인트 값
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px',
  ultrawide: '1536px',
  
  // 미디어 쿼리 헬퍼
  media: {
    mobile: `@media (max-width: 479px)`,
    tablet: `@media (min-width: 480px) and (max-width: 767px)`,
    desktop: `@media (min-width: 768px)`,
    wide: `@media (min-width: 1024px)`,
    ultrawide: `@media (min-width: 1280px)`,
    
    // 최대 너비 기준
    maxMobile: `@media (max-width: 767px)`,
    maxTablet: `@media (max-width: 1023px)`,
    maxDesktop: `@media (max-width: 1279px)`,
  }
}; 