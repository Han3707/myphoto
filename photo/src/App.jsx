import React, { useState, useEffect, useMemo, useCallback } from 'react';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import { colors } from './constants/colors';
import { typography } from './constants/typography';
import { spacing } from './constants/spacing';
import { breakpoints } from './constants/breakpoints';
import { useOverflow } from './contexts/OverflowContext';

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const { setActiveSection, isModalOpen, closeModal } = useOverflow();

  // 네비게이션 버튼과 섹션 간의 매핑을 명시적으로 정의
  const navButtons = [
    { name: '홈', sectionIndex: 0, label: '홈 섹션으로 이동' },
    { name: '기술', sectionIndex: 1, label: '기술 섹션으로 이동' },
    { name: '경력', sectionIndex: 2, label: '경력 섹션으로 이동' },
    { name: '프로젝트', sectionIndex: 3, label: '프로젝트 섹션으로 이동' },
    { name: '연락처', sectionIndex: 4, label: '연락처 섹션으로 이동' }
  ];

  // 페이지 로드 시 현재 섹션 로그
  useEffect(() => {
    console.log(`초기 섹션: ${currentSection}`);
  }, []);

  // currentSection이 변경될 때마다 OverflowContext의 activeSection 업데이트
  useEffect(() => {
    console.log(`activeSection 업데이트: ${currentSection}`);
    setActiveSection(currentSection);
  }, [currentSection, setActiveSection]);

  // 모달이 열릴 때 body 스크롤 제어
  useEffect(() => {
    if (isModalOpen) {
      // 모달이 열릴 때 body 스크롤 비활성화
      document.body.style.overflowY = 'hidden';
    } else {
      // 모달이 닫힐 때 body 스크롤 복원
      document.body.style.overflowY = '';
    }

    return () => {
      document.body.style.overflowY = '';
    };
  }, [isModalOpen]);

  const scrollToSection = useCallback((sectionIndex) => {
    console.log(`scrollToSection 호출됨: ${sectionIndex}`);

    // 프로젝트 섹션에서 모달이 열려있는 경우 이동하지 않음
    if (isScrolling || (currentSection === 3 && isModalOpen)) {
      console.log('스크롤 불가: 이미 스크롤 중이거나 모달이 열려있음');
      return;
    }

    setIsScrolling(true);
    console.log(`현재 섹션: ${currentSection} -> 새 섹션: ${sectionIndex}`);
    setCurrentSection(sectionIndex);
    setTimeout(() => {
      setIsScrolling(false);
      console.log(`스크롤 완료: 현재 섹션 = ${sectionIndex}`);
    }, 1000);
  }, [isScrolling, currentSection, isModalOpen]);

  const sections = useMemo(() => [
    { id: 'hero', name: 'Hero', component: <HeroSection scrollToSection={scrollToSection} /> },
    { id: 'skills', name: 'Skills', component: <SkillsSection /> },
    { id: 'experience', name: 'Experience', component: <ExperienceSection /> },
    { id: 'projects', name: 'Projects', component: <ProjectsSection /> },
    { id: 'contact', name: 'Contact', component: <ContactSection /> }
  ], [scrollToSection]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling) {
        console.log('스크롤 이벤트 무시: 이미 스크롤 중');
        return;
      }

      // 프로젝트 섹션에서 모달이 열려있는 경우 스크롤 비활성화
      if (currentSection === 3 && isModalOpen) {
        // 모달이 열려 있을 때는 휠 이벤트를 모달 내부로 전파되도록 수정
        // 모달 배경에서 발생한 이벤트만 막기
        if (!e.target.closest('.modal-content') && !e.target.closest('.modal-body')) {
          e.preventDefault();
        }
        console.log('스크롤 이벤트 무시: 모달이 열려있음');
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 50) {
        console.log('스크롤 이벤트 무시: 스크롤 값이 너무 작음');
        return;
      }

      setIsScrolling(true);
      let newSection = currentSection;

      if (delta > 0 && currentSection < 4) {
        // 아래로 스크롤
        newSection = currentSection + 1;
        console.log(`아래로 스크롤: ${currentSection} -> ${newSection}`);
        setCurrentSection(newSection);
      } else if (delta < 0 && currentSection > 0) {
        // 위로 스크롤
        newSection = currentSection - 1;
        console.log(`위로 스크롤: ${currentSection} -> ${newSection}`);
        setCurrentSection(newSection);
      } else {
        console.log(`스크롤 무시: 이미 경계에 도달 (현재 섹션: ${currentSection})`);
      }

      setTimeout(() => {
        setIsScrolling(false);
        console.log(`스크롤 완료: 현재 섹션 = ${newSection}`);
      }, 1000);
    };
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [currentSection, isScrolling, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling) return;

      // 프로젝트 섹션에서 모달이 열려있는 경우 네비게이션 키 비활성화
      if (currentSection === 3 && isModalOpen) {
        // ESC 키는 모달 닫기 기능 유지
        if (e.key === 'Escape') {
          closeModal();
        }
        return;
      }

      let newSection = currentSection;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          if (currentSection < 4) {
            e.preventDefault();
            setIsScrolling(true);
            newSection = currentSection + 1;
            setCurrentSection(newSection);
            setTimeout(() => setIsScrolling(false), 1000);
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          if (currentSection > 0) {
            e.preventDefault();
            setIsScrolling(true);
            newSection = currentSection - 1;
            setCurrentSection(newSection);
            setTimeout(() => setIsScrolling(false), 1000);
          }
          break;
        case 'Home':
          if (currentSection !== 0) {
            e.preventDefault();
            setIsScrolling(true);
            newSection = 0;
            setCurrentSection(newSection);
            setTimeout(() => setIsScrolling(false), 1000);
          }
          break;
        case 'End':
          if (currentSection !== 4) {
            e.preventDefault();
            setIsScrolling(true);
            newSection = 4;
            setCurrentSection(newSection);
            setTimeout(() => setIsScrolling(false), 1000);
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, isModalOpen, closeModal]);

  const appStyle = {
    height: '100vh',
    width: '100%',
    fontFamily: typography.fontFamily.body,
    background: colors.gradients.heroDepth,
    position: 'relative',
    overflow: 'hidden',
  };

  const sectionsContainerStyle = {
    height: '100vh',
    width: '100%',
    transform: `translateY(-${currentSection * 100}vh)`,
    transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    overflow: 'visible',
  };

  const sectionStyle = (index) => ({
    height: '100vh',
    width: '100%',
    background: getSectionBackground(index),
    overflowY: 'visible',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: currentSection === index ? 50 : 1,
  });

  const getSectionBackground = (index) => {
    switch (index) {
      case 0: // Hero
        return colors.gradients.heroDepth;
      case 1: // Skills
        return colors.surface.light;
      case 2: // Experience
        return colors.gradients.subtle;
      case 3: // Projects
        return colors.surface.light;
      case 4: // Contact
        return colors.gradients.heroDepth;
      default:
        return colors.primary.dark;
    }
  };

  // 고정 네비게이션 바 스타일 업데이트
  const fixedNavigationStyle = {
    position: 'fixed',
    top: '50%',
    right: spacing.md,
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.sm,
    background: 'rgba(33, 33, 33, 0.85)',  // 어두운 배경으로 변경
    backdropFilter: 'blur(8px)',
    borderRadius: '15px',
    padding: `${spacing.lg} ${spacing.md}`,
    border: 'none',
    zIndex: 1000,
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
  };

  // 배경색 제거
  const dynamicNavStyle = {
    ...fixedNavigationStyle,
    opacity: isModalOpen ? 0 : 1,
    visibility: isModalOpen ? 'hidden' : 'visible',
  };

  const navItemStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    padding: `${spacing.md}`,
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    fontFamily: typography.fontFamily.body,
    textAlign: 'center',
    width: '100%',
    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
  };

  // 프로젝트 섹션에서 모달이 열려있을 때 네비게이션 버튼에 경고 스타일 추가
  const getNavItemStyle = (targetSection) => {
    // 기본 스타일
    const baseStyle = { ...navItemStyle };

    // 모달이 열려 있는 경우
    if (currentSection === 3 && isModalOpen) {
      // 현재 프로젝트 섹션이면 경고 스타일
      if (targetSection === 3) {
        return {
          ...baseStyle,
          color: colors.accent.warning || '#f56565',
          background: 'rgba(255, 0, 0, 0.1)',
        };
      }

      // 다른 모든 버튼은 비활성화 스타일
      return {
        ...baseStyle,
        cursor: 'not-allowed',
        opacity: 0.5,
        color: colors.accent.warning || '#f56565',
      };
    }

    // 현재 선택된 섹션일 경우 (모달이 없을 때)
    if (currentSection === targetSection) {
      return {
        ...baseStyle,
        fontWeight: typography.fontWeight.bold,
      };
    }

    // 기본 스타일 반환
    return baseStyle;
  };

  const handleNavClick = (sectionIndex) => {
    console.log(`네비게이션 클릭: ${sectionIndex} 섹션으로 이동 시도`);

    // 프로젝트 섹션에서 모달이 열려있는 경우 네비게이션 비활성화
    if (currentSection === 3 && isModalOpen) {
      // 모달을 닫으라는 알림 표시 (선택적)
      alert('먼저 프로젝트 상세 보기를 닫아주세요.');
      return;
    }

    // 포커스 관련 로직 제거 - 스타일링으로 처리
    scrollToSection(sectionIndex);
  };

  return (
    <div style={appStyle}>
      <a
        href={sections[currentSection] ? `#${sections[currentSection].id}` : '#'}
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          if (sections[currentSection]) {
            const section = document.getElementById(sections[currentSection].id);
            if (section) {
              section.focus();
            }
          }
        }}
      >
        메인 콘텐츠로 건너뛰기
      </a>

      <main style={{ ...sectionsContainerStyle }} role="main" aria-label="포트폴리오 메인 콘텐츠" className="sections-container">
        {sections.map((section, index) => (
          <div 
            style={sectionStyle(index)} 
            id={section.id} 
            key={section.id} 
            tabIndex="-1"
            className="section-content"
          >
            {index === 2 ? React.cloneElement(section.component, { currentSection }) : section.component}
          </div>
        ))}
      </main>

      {/* 고정 측면 네비게이션 바 */}
      <nav style={dynamicNavStyle} aria-label="메인 네비게이션">
        {navButtons.map((button) => (
          <button
            key={button.sectionIndex}
            style={getNavItemStyle(button.sectionIndex)}
            onClick={() => handleNavClick(button.sectionIndex)}
            className={`nav-item ${currentSection === button.sectionIndex ? 'active' : ''}`}
            aria-label={button.label}
            aria-current={currentSection === button.sectionIndex ? 'page' : undefined}
          >
            {button.name}
          </button>
        ))}
      </nav>

      <style>{`
        body {
          font-family: ${typography.fontFamily.body};
          background: ${colors.primary.dark};
          color: ${colors.text.onDark};
          margin: 0;
          padding: 0;
          /* overflow: hidden; */
        }
        
        /* 추가된 스타일 */
        html, body {
          height: 100%;
          overflow: hidden;
        }
        
        /* 노트북 화면에 맞춘 섹션 패딩 */
        @media (max-height: 800px) {
          .section-content {
            padding-top: ${spacing.md};
            padding-bottom: ${spacing.md};
          }
          
          .section-title {
            margin-bottom: ${spacing.sm};
          }
          
          .section-subtitle {
            margin-bottom: ${spacing.md};
          }
        }
        
        /* 모바일 화면 조정을 위한 미디어 쿼리 */
        @media (max-height: 700px) {
          .sections-container > div {
            padding-top: 10px;
            padding-bottom: 10px;
          }
        }

        .surface-light {
          background: ${colors.surface.light} !important;
          color: ${colors.text.body} !important;
        }

        .surface-dark {
          background: ${colors.primary.darkGray} !important;
          color: ${colors.text.onDark} !important;
        }

        /* 기본 포커스 스타일 오버라이드 */
        *:focus {
          outline: none !important;
        }

        /* 접근성을 위한 skip-link 포커스 스타일 유지 */
        .skip-link:focus {
          outline: 3px solid ${colors.accent.cyan} !important;
          outline-offset: 2px !important;
          top: 6px;
        }

        /* 네비게이션 포커스 스타일 - 삭제하고 클래스로 처리 */
        nav[aria-label="메인 네비게이션"] .nav-item:focus {
          outline: none;
        }

        /* 현재 선택된 네비게이션 아이템 스타일 강화 */
        nav[aria-label="메인 네비게이션"] .nav-item.active {
          background: rgba(255, 255, 255, 0.3);
          color: white;
          font-weight: bold;
          box-shadow: 0 0 0 3px rgba(79, 209, 197, 0.3);
        }

        /* 고정 네비게이션 바 호버 효과 */
        nav[aria-label="메인 네비게이션"] .nav-item:hover {
          background: rgba(255, 255, 255, 0.2);
          color: ${colors.accent.cyan || '#4fd1c5'};
          transform: translateY(-2px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        nav[aria-label="메인 네비게이션"] .nav-item:active {
          transform: translateY(0);
        }

        @media (prefers-contrast: high) {
          * {
            border-color: currentColor !important;
          }
          
          button, a {
            border: 2px solid currentColor !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .sections-container {
            transition: none !important;
          }
        }

        @media (prefers-color-scheme: dark) {
          body {
            background: ${colors.primary.dark} !important;
            color: ${colors.text.onDark} !important;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        /* 모달 스크롤바 관련 스타일 - 모달 내부 스크롤바는 보이도록 수정 */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* 모달 내부 스크롤바는 표시되도록 예외 처리 */
        .modal-content::-webkit-scrollbar,
        .modal-body::-webkit-scrollbar {
          display: block;
          width: 8px;
        }
        
        .modal-content::-webkit-scrollbar-track,
        .modal-body::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .modal-content::-webkit-scrollbar-thumb,
        .modal-body::-webkit-scrollbar-thumb {
          background: #888;
          border-radius: 10px;
        }
        
        .modal-content::-webkit-scrollbar-thumb:hover,
        .modal-body::-webkit-scrollbar-thumb:hover {
          background: #555;
        }

        ::selection {
          background: ${colors.accent.cyan}40;
          color: ${colors.text.onDark};
        }

        button {
          border: none;
          background: none;
          cursor: pointer;
          font-family: inherit;
        }

        .skip-link {
          position: absolute;
          top: -40px;
          left: 6px;
          background: ${colors.accent.cyan};
          color: ${colors.text.onDark};
          padding: 8px;
          text-decoration: none;
          border-radius: 4px;
          z-index: 10000;
          font-weight: bold;
        }

        .skip-link:focus {
          top: 6px;
        }

        ${breakpoints.media.maxTablet} {
          .navigation {
            right: ${spacing.md} !important;
          }
          
          .scroll-indicator {
            bottom: ${spacing.md} !important;
            font-size: ${typography.fontSize.xs} !important;
          }

          nav[aria-label="섹션 네비게이션"] button {
            width: 10px !important;
            height: 10px !important;
          }
        }

        /* 반응형 네비게이션 */
        ${breakpoints.media.maxMobile} {
          nav[aria-label="메인 네비게이션"] {
            right: ${spacing.sm} !important;
            padding: ${spacing.xs} !important;
            top: auto !important;
            bottom: ${spacing.lg} !important;
            transform: none !important;
            flex-direction: row !important;
            width: auto !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            border-radius: 30px !important;
            background: rgba(33, 33, 33, 0.9) !important;
            overflow-x: auto !important;
            max-width: 95% !important;
          }

          nav[aria-label="메인 네비게이션"] .nav-item {
            padding: ${spacing.xs} ${spacing.sm} !important;
            font-size: ${typography.fontSize.xs} !important;
            width: auto !important;
            white-space: nowrap !important;
          }
          
          nav[aria-label="메인 네비게이션"] .nav-item.active {
            background: rgba(255, 255, 255, 0.2) !important;
            box-shadow: none !important;
            border-radius: 20px !important;
          }
        }

        .header-nav-link:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }

        /* 프로젝트 섹션에서 모달이 열려있을 때 네비게이션 버튼 스타일 */
        ${currentSection === 3 && isModalOpen ? `
          nav[aria-label="메인 네비게이션"] .nav-item:hover {
            background: rgba(255, 0, 0, 0.2);
            color: ${colors.accent.warning || '#f56565'};
            transform: none;
          }
        ` : ''}
      `}</style>
    </div>
  );
}

export default App;
