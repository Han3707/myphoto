import { useEffect, useRef, useState } from 'react';
import { useOverflow } from '../contexts/OverflowContext';

const SkillsSection = () => {
  const { activeSection } = useOverflow();
  const observerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const scrollDirectionRef = useRef(1); // 1: 오른쪽, -1: 왼쪽

  useEffect(() => {
    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    observerRef.current = observer;

    // 카드 애니메이션 초기화
    document.querySelectorAll('.skill-category').forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px)';
      card.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
      observer.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // 자동 스크롤 애니메이션
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastTimestamp = 0;
    const scrollSpeed = 1.2; // 스크롤 속도 (높을수록 빠름)

    const autoScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (isHovering) {
        animationRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      const maxScroll = container.scrollWidth - container.clientWidth;

      // 방향 전환 체크 (부드럽게 전환)
      if (scrollPositionRef.current >= maxScroll - 2) {
        scrollDirectionRef.current = -1; // 왼쪽으로 스크롤
      } else if (scrollPositionRef.current <= 2) {
        scrollDirectionRef.current = 1; // 오른쪽으로 스크롤
      }

      // 스크롤 위치 업데이트 (시간 기반 애니메이션)
      scrollPositionRef.current += scrollDirectionRef.current * (elapsed * 0.05 * scrollSpeed);
      container.scrollLeft = scrollPositionRef.current;

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    // 애니메이션 시작
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering]);

  // 마우스 호버 시 자동 스크롤 일시정지
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  // 섹션이 스킬 섹션이면 z-index 값을 높게 설정
  const isActive = activeSection === 1;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">☆</span>);
      }
    }
    return stars;
  };

  return (
    <section className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">한 눈에 보는 Skills</h2>
        <p className="section-subtitle">새로운 기술에 대한 자신감 100%</p>

        <div
          className="skills-scroll-container"
          ref={scrollContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="category-title">Flutter / Dart</h3>
              <div className="skill-rating">{renderStars(4)}</div>
              <div className="skill-description">
                <ul>
                  <li>Riverpod·GoRouter로 모듈화</li>
                  <li>WebSocket(STOMP)·OAuth 연동</li>
                  <li>cached_network_image로 이미지 캐싱 최적화</li>
                  <li>BLE Mesh 실험까지 모바일 2종 프로젝트 전체 화면 구현</li>
                </ul>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">React (+ Vite) / TypeScript</h3>
              <div className="skill-rating">{renderStars(4)}</div>
              <div className="skill-description">
                <ul>
                  <li>상태 관리(Zustand)·폼(react-hook-form)·차트(Recharts) 활용</li>
                  <li>판매자 관리 SPA 전 페이지 디자인 & 개발</li>
                </ul>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">JavaScript(ES 6+)</h3>
              <div className="skill-rating">{renderStars(4)}</div>
              <div className="skill-description">
                <ul>
                  <li>비동기 처리(fetch/Promise)·모듈 시스템·클린 코드 패턴을 적용해 공통 유틸 제작</li>
                </ul>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">HTML 5</h3>
              <div className="skill-rating">{renderStars(4)}</div>
              <div className="skill-description">
                <ul>
                  <li>시맨틱 마크업·WAI-ARIA 적용</li>
                  <li>Flutter Web 뷰·React SEO 태그로 접근성/검색성 고려</li>
                </ul>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">CSS 3 / SCSS</h3>
              <div className="skill-rating">{renderStars(3)}</div>
              <div className="skill-description">
                <ul>
                  <li>Flex·Grid·Animation으로 반응형 구성</li>
                  <li>디자인 시스템 토큰(Figma) 매칭</li>
                </ul>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Kotlin (Android)</h3>
              <div className="skill-rating">{renderStars(3)}</div>
              <div className="skill-description">
                <ul>
                  <li>BLE Mesh 채팅 – 큐 시스템으로 패킷 손실 30%→5% ↓</li>
                  <li>Activity-Service 구조 이해</li>
                  <li>Jetpack Compose 활용용</li>
                </ul>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">WebSocket / STOMP</h3>
              <div className="skill-rating">{renderStars(3)}</div>
              <div className="skill-description">
                <ul>
                  <li>실시간 펀딩 금액·채팅 구현</li>
                  <li>재연결 로직(최대 5회)로 신뢰성 확보</li>
                </ul>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">OAuth 2.0 / JWT</h3>
              <div className="skill-rating">{renderStars(3)}</div>
              <div className="skill-description">
                <ul>
                  <li>Google OAuth 토큰 → 백엔드 JWT 교환 패턴 설계</li>
                  <li>flutter_secure_storage 암호화</li>
                </ul>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Git / GitLab & Jira</h3>
              <div className="skill-rating">{renderStars(4)}</div>
              <div className="skill-description">
                <ul>
                  <li>Git Flow·CI 파이프라인 구성</li>
                  <li>1주 스프린트+데일리 스크럼 운영</li>
                </ul>
              </div>
            </div>

            <div className="skill-category">
              <h3 className="category-title">Figma</h3>
              <div className="skill-rating">{renderStars(4)}</div>
              <div className="skill-description">
                <ul>
                  <li>3번의 프로젝트 전체 UX 및 UI 키트 단독 제작</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 통계 섹션 */}
        <div className="stats-container">
          <div className="stats-section">
            <div className="stat-item">
              <span className="stat-number">1년+</span>
              <span className="stat-label">개발 경력</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">프로젝트</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">기술 스택</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">새로운 기술 자신감</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .skills-section {
          background: #FAFAFA;
          min-height: 100vh;
          padding: 100px 20px 120px;
          position: relative;
          z-index: ${isActive ? 50 : 4};
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .skills-container {
          max-width: 1600px;
          width: 95%;
          margin: 0 auto;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 900;
          color: #000;
          text-align: center;
          margin-bottom: 20px;
          position: relative;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #666;
          text-align: center;
          margin-bottom: 40px;
          font-weight: 400;
        }

        .skills-scroll-container {
          width: 100%;
          overflow-x: auto;
          padding: 20px 0;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
          margin-bottom: 80px;
        }

        .skills-scroll-container::-webkit-scrollbar {
          display: none;
        }

        .skills-grid {
          display: flex;
          gap: 25px;
          padding: 10px 0;
          min-width: max-content;
        }

        .skill-category {
          background: white;
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          width: 330px;
          flex-shrink: 0;
        }

        .skill-category::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #FF6B6B, #4ECDC4, #45B7D1);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.6s ease;
        }

        .skill-category:hover::before {
          transform: scaleX(1);
        }

        .skill-category:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .category-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: #000;
          margin-bottom: 15px;
        }

        .skill-rating {
          margin-bottom: 20px;
          font-size: 1.4rem;
        }

        .star {
          color: #ddd;
          margin-right: 2px;
        }

        .star.filled {
          color: #FF6B6B;
        }

        .skill-description {
          color: #666;
        }

        .skill-description ul {
          padding-left: 20px;
          margin: 0;
        }

        .skill-description li {
          margin-bottom: 8px;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        /* 통계 섹션 컨테이너 */
        .stats-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* 통계 섹션 */
        .stats-section {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 50px;
          padding: 35px 50px;
          border-radius: 16px;
          background: white;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .stat-item {
          text-align: center;
          position: relative;
        }

        .stat-number {
          font-size: 3.5rem;
          font-weight: 900;
          color: #FF6B6B;
          display: block;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 1rem;
          color: #666;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* 반응형 */
        @media (max-width: 1200px) {
          .stats-section {
            grid-template-columns: repeat(4, 1fr);
            padding: 30px;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2.8rem;
          }

          .skills-section {
            padding: 80px 20px 100px;
          }

          .stats-section {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            padding: 25px 20px;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .skill-category {
            width: 300px;
            padding: 25px;
          }
          
          .skills-container {
            width: 95%;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.2rem;
          }
          
          .skills-section {
            padding: 60px 15px 80px;
          }
          
          .skill-category {
            width: 280px;
            padding: 20px;
          }
          
          .category-title {
            font-size: 1.2rem;
          }
          
          .stats-section {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
            padding: 20px 15px;
          }
          
          .stat-number {
            font-size: 2rem;
          }
          
          .skills-container {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection; 