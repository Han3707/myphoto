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

  // currentSection이 변경될 때마다 OverflowContext의 activeSection 업데이트
  useEffect(() => {
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
    // 프로젝트 섹션에서 모달이 열려있는 경우 이동하지 않음
    if (isScrolling || (currentSection === 3 && isModalOpen)) return;

    setIsScrolling(true);
    setCurrentSection(sectionIndex);
    setTimeout(() => setIsScrolling(false), 1000);
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
      if (isScrolling) return;

      // 프로젝트 섹션에서 모달이 열려있는 경우 스크롤 비활성화
      if (currentSection === 3 && isModalOpen) {
        // 모달이 열려 있을 때는 휠 이벤트를 모달 내부로 전파되도록 수정
        // 모달 배경에서 발생한 이벤트만 막기
        if (!e.target.closest('.modal-content') && !e.target.closest('.modal-body')) {
          e.preventDefault();
        }
        return;
      }

      const delta = e.deltaY;
      if (Math.abs(delta) < 50) return;

      setIsScrolling(true);
      if (delta > 0 && currentSection < 4) {
        setCurrentSection(prev => prev + 1);
      } else if (delta < 0 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }
      setTimeout(() => {
        setIsScrolling(false);
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

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          if (currentSection < 4) {
            e.preventDefault();
            setIsScrolling(true);
            setCurrentSection(prev => prev + 1);
            setTimeout(() => setIsScrolling(false), 1000);
          }
          break;
        case 'ArrowUp':
        case 'PageUp':
          if (currentSection > 0) {
            e.preventDefault();
            setIsScrolling(true);
            setCurrentSection(prev => prev - 1);
            setTimeout(() => setIsScrolling(false), 1000);
          }
          break;
        case 'Home':
          if (currentSection !== 0) {
            e.preventDefault();
            setIsScrolling(true);
            setCurrentSection(0);
            setTimeout(() => setIsScrolling(false), 1000);
          }
          break;
        case 'End':
          if (currentSection !== 4) {
            e.preventDefault();
            setIsScrolling(true);
            setCurrentSection(4);
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
    paddingTop: index === 2 ? fixedNavigationStyle.paddingTop || spacing.xl : '0',
    paddingBottom: index === 2 ? `calc(${spacing['2xl']} + ${spacing.xl} + ${spacing.md} + ${spacing.md})` : '0',
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
    bottom: spacing['2xl'],
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: spacing.sm,
    background: 'rgba(0, 0, 0, 0.8)',  // 더 진한 배경색
    backdropFilter: 'blur(10px)',
    borderRadius: '50px',
    padding: `${spacing.md} ${spacing.xl}`,
    border: 'none',  // 테두리 제거
    zIndex: 1000,
    transition: 'opacity 0.3s ease, visibility 0.3s ease', // visibility 트랜지션 추가
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',  // 그림자 추가
  };

  // 변경 - 항상 어두운 배경으로 통일
  const dynamicNavStyle = {
    ...fixedNavigationStyle,
    background: 'rgba(0, 0, 0, 0.8)',  // 항상 어두운 배경으로 통일
    opacity: isModalOpen ? 0 : 1, // 모달이 열려있을 때 숨김
    visibility: isModalOpen ? 'hidden' : 'visible', // 모달이 열려있을 때 숨김
  };

  const navItemStyle = {
    color: colors.text.onDark,  // 항상 밝은 색 텍스트
    textDecoration: 'none',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    padding: `${spacing.sm} ${spacing.lg}`,
    borderRadius: '25px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    fontFamily: typography.fontFamily.body,
  };

  // 프로젝트 섹션에서 모달이 열려있을 때 네비게이션 버튼에 경고 스타일 추가
  const getNavItemStyle = (targetSection) => {
    const baseStyle = { ...navItemStyle };

    if (currentSection === 3 && isModalOpen) {
      // 현재 선택된 섹션에 다른 스타일 적용
      if (targetSection === 3) {
        return {
          ...baseStyle,
          color: colors.accent.warning,
          background: 'rgba(255, 0, 0, 0.1)',
        };
      }

      return {
        ...baseStyle,
        cursor: 'not-allowed',
        opacity: 0.5,
        color: colors.accent.warning,
      };
    }

    // 현재 선택된 섹션 강조 표시
    if (currentSection === targetSection) {
      return {
        ...baseStyle,
        fontWeight: typography.fontWeight.bold,
        background: 'rgba(255, 255, 255, 0.1)',
      };
    }

    return baseStyle;
  };

  const handleNavClick = (sectionIndex) => {
    // 프로젝트 섹션에서 모달이 열려있는 경우 네비게이션 비활성화
    if (currentSection === 3 && isModalOpen) {
      // 모달을 닫으라는 알림 표시 (선택적)
      alert('먼저 프로젝트 상세 보기를 닫아주세요.');
      return;
    }

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

      <main style={{ ...sectionsContainerStyle }} role="main" aria-label="포트폴리오 메인 콘텐츠">
        {sections.map((section, index) => (
          <div style={sectionStyle(index)} id={section.id} key={section.id} tabIndex="-1">
            {index === 2 ? React.cloneElement(section.component, { currentSection }) : section.component}
          </div>
        ))}
      </main>

      {/* 고정 하단 네비게이션 바 */}
      <nav style={dynamicNavStyle} aria-label="메인 네비게이션">
        <button
          style={getNavItemStyle(1)}
          onClick={() => handleNavClick(1)}
          className="nav-item"
        >
          기술
        </button>
        <button
          style={getNavItemStyle(2)}
          onClick={() => handleNavClick(2)}
          className="nav-item"
        >
          경력
        </button>
        <button
          style={getNavItemStyle(3)}
          onClick={() => handleNavClick(3)}
          className="nav-item"
        >
          프로젝트
        </button>
        <button
          style={getNavItemStyle(4)}
          onClick={() => handleNavClick(4)}
          className="nav-item"
        >
          연락처
        </button>
      </nav>

      <style>{`
        body {
          font-family: ${typography.fontFamily.body};
          background: ${colors.primary.dark};
          color: ${colors.text.onDark};
          /* overflow: hidden; */
        }

        .surface-light {
          background: ${colors.surface.light} !important;
          color: ${colors.text.body} !important;
        }

        .surface-dark {
          background: ${colors.primary.darkGray} !important;
          color: ${colors.text.onDark} !important;
        }

        *:focus {
          outline: 3px solid ${colors.accent.cyan} !important;
          outline-offset: 2px !important;
          border-radius: 4px !important;
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

        ${breakpoints.media.maxMobile} {
          .navigation {
            right: ${spacing.sm} !important;
            bottom: 50% !important;
            top: auto !important;
            transform: translateY(50%) !important;
          }

          .scroll-indicator {
            display: none !important;
          }
        }

        .header-nav-link:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
        }

        /* 고정 네비게이션 바 호버 효과 */
        nav[aria-label="메인 네비게이션"] .nav-item:hover {
          background: rgba(255, 255, 255, 0.2);
          color: ${colors.accent.cyan};
          transform: translateY(-2px);
        }

        nav[aria-label="메인 네비게이션"] .nav-item:active {
          transform: translateY(0);
        }

        /* Adjust hover/active colors for light background sections */
        ${currentSection === 1 || currentSection === 2 ? `
          nav[aria-label="메인 네비게이션"] .nav-item:hover {
            background: rgba(0, 0, 0, 0.15);
            color: ${colors.primary.dark};
          }
        ` : ''}

        /* 프로젝트 섹션에서 모달이 열려있을 때 네비게이션 버튼 스타일 */
        ${currentSection === 3 && isModalOpen ? `
          nav[aria-label="메인 네비게이션"] .nav-item:hover {
            background: rgba(255, 0, 0, 0.1);
            color: ${colors.accent.warning};
            transform: none;
          }
        ` : ''}

        /* 반응형 네비게이션 */
        ${breakpoints.media.maxMobile} {
          nav[aria-label="메인 네비게이션"] {
            bottom: ${spacing.lg} !important;
            gap: ${spacing.sm} !important;
            padding: ${spacing.sm} ${spacing.lg} !important;
          }

          nav[aria-label="메인 네비게이션"] .nav-item {
            padding: ${spacing.xs} ${spacing.md} !important;
            font-size: ${typography.fontSize.xs} !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
