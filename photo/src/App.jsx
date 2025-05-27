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

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sectionScrollEnabled, setSectionScrollEnabled] = useState(true);

  const openProjectModal = useCallback((project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setSectionScrollEnabled(false);
  }, []);

  const closeProjectModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setSectionScrollEnabled(true);
  }, []);

  const scrollToSection = useCallback((sectionIndex) => {
    if (isScrolling || isModalOpen) return;
    setIsScrolling(true);
    setCurrentSection(sectionIndex);
    setTimeout(() => setIsScrolling(false), 1000);
  }, [isScrolling, isModalOpen]);

  const sections = useMemo(() => [
    { id: 'hero', name: 'Hero', component: <HeroSection scrollToSection={scrollToSection} /> },
    { id: 'skills', name: 'Skills', component: <SkillsSection /> },
    { id: 'experience', name: 'Experience', component: <ExperienceSection /> },
    { id: 'projects', name: 'Projects', component: <ProjectsSection openProjectModal={openProjectModal} /> },
    { id: 'contact', name: 'Contact', component: <ContactSection /> }
  ], [scrollToSection, openProjectModal]);

  useEffect(() => {
    const handleScroll = (e) => {
      if (isScrolling || !sectionScrollEnabled || isModalOpen) return;
      const delta = e.deltaY;
      if (Math.abs(delta) < 50) return;
      
      if (isModalOpen) {
        return;
      }
      
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
  }, [currentSection, isScrolling, sectionScrollEnabled, isModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isScrolling || isModalOpen) return;
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
        case 'Escape':
          if (isModalOpen) {
            closeProjectModal();
          }
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling, isModalOpen, closeProjectModal]);

  const appStyle = {
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    fontFamily: typography.fontFamily.body,
    background: colors.gradients.heroDepth,
    position: 'relative',
  };

  const sectionsContainerStyle = {
    height: '100vh',
    width: '100%',
    transform: `translateY(-${currentSection * 100}vh)`,
    transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  };

  const sectionStyle = (index) => ({
    height: '100vh',
    width: '100%',
    background: getSectionBackground(index),
    overflowY: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: index === 2 ? fixedNavigationStyle.paddingTop || spacing.xl : '0',
    paddingBottom: index === 2 ? `calc(${spacing['2xl']} + ${spacing.xl} + ${spacing.md} + ${spacing.md})` : '0',
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
        return colors.gradients.darkElegant;
      case 4: // Contact
        return colors.gradients.heroDepth;
      default:
        return colors.primary.dark;
    }
  };

  // 고정 네비게이션 바 스타일
  const fixedNavigationStyle = {
    position: 'fixed',
    bottom: spacing['2xl'],
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: spacing.lg,
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '50px',
    padding: `${spacing.md} ${spacing.xl}`,
    border: '1px solid rgba(255, 255, 255, 0.2)',
    zIndex: 1000,
    opacity: isModalOpen ? 0 : 1, // 모달이 열려있을 때 숨김
    transition: 'opacity 0.3s ease',
  };

  // Conditional styling for fixedNavigationStyle
  const dynamicNavStyle = {
    ...fixedNavigationStyle,
    background: currentSection === 1 || currentSection === 2 ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
    border: currentSection === 1 || currentSection === 2 ? '1px solid rgba(0, 0, 0, 0.2)' : '1px solid rgba(255, 255, 255, 0.2)',
  };

  const navItemStyle = {
    color: currentSection === 1 || currentSection === 2 ? colors.text.body : colors.text.onDark,
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

  return (
    <div style={appStyle}>
      <a 
        href={`#${sections[currentSection].id}`}
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          const section = document.getElementById(sections[currentSection].id);
          if (section) {
            section.focus();
          }
        }}
      >
        메인 콘텐츠로 건너뛰기
      </a>

      <main style={{...sectionsContainerStyle}} role="main" aria-label="포트폴리오 메인 콘텐츠">
        {sections.map((section, index) => (
          <div style={sectionStyle(index)} id={section.id} key={section.id} tabIndex="-1">
            {index === 2 ? React.cloneElement(section.component, { currentSection }) : section.component}
          </div>
        ))}
      </main>

      {/* 모달 - 프로젝트 섹션에서만 표시 */}
      {isModalOpen && selectedProject && currentSection === 3 && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1001,
            padding: spacing.md,
          }} 
          onClick={closeProjectModal}
          className="modal-overlay"
        >
          <div 
            style={{
              background: colors.surface.elevated,
              borderRadius: spacing.card.borderRadius,
              padding: spacing['xl'],
              maxWidth: '700px',
              width: '95%',
              maxHeight: '85vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
            }} 
            onClick={(e) => e.stopPropagation()}
            className="modal-content"
          >
            <button 
              style={{
                position: 'absolute',
                top: spacing.lg,
                right: spacing.lg,
                background: 'none',
                border: 'none',
                fontSize: typography.fontSize['2xl'],
                cursor: 'pointer',
                color: colors.text.secondary,
                padding: spacing.xs,
              }} 
              onClick={closeProjectModal}
            >
              ×
            </button>
            
            <div style={{ textAlign: 'center', marginBottom: spacing['2xl'] }}>
              <div style={{ fontSize: '3rem', marginBottom: spacing.md }}>
                {selectedProject.image}
              </div>
              <h2 style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: typography.fontSize['3xl'],
                fontWeight: typography.fontWeight.bold,
                color: colors.text.body,
                marginBottom: spacing.sm,
              }}>
                {selectedProject.title}
              </h2>
              <p style={{
                color: colors.text.secondary,
                fontSize: typography.fontSize.lg,
              }}>
                {selectedProject.period} | {selectedProject.role}
              </p>
            </div>

            <div style={{ marginBottom: spacing.xl }}>
              <h3 style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: typography.fontSize.xl,
                fontWeight: typography.fontWeight.bold,
                color: selectedProject.color,
                marginBottom: spacing.md,
              }}>
                Problem
              </h3>
              <p style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.base,
                color: colors.text.body,
                lineHeight: typography.lineHeight.relaxed,
              }}>
                {selectedProject.problem}
              </p>
            </div>

            <div style={{ marginBottom: spacing.xl }}>
              <h3 style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: typography.fontSize.xl,
                fontWeight: typography.fontWeight.bold,
                color: colors.accent.cyan,
                marginBottom: spacing.md,
                display: 'flex',
                alignItems: 'center',
                gap: spacing.sm,
              }}>
                <span>💡</span>
                Challenge & Learning
              </h3>
              <p style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.base,
                color: colors.text.body,
                lineHeight: typography.lineHeight.relaxed,
                background: `${colors.accent.cyan}10`,
                padding: spacing.md,
                borderRadius: spacing.xs,
                borderLeft: `4px solid ${colors.accent.cyan}`,
              }}>
                {selectedProject.newTechFocus}
              </p>
            </div>

            <div style={{ marginBottom: spacing.xl }}>
              <h3 style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: typography.fontSize.xl,
                fontWeight: typography.fontWeight.bold,
                color: selectedProject.color,
                marginBottom: spacing.md,
              }}>
                Solution & Result
              </h3>
              <p style={{
                fontFamily: typography.fontFamily.body,
                fontSize: typography.fontSize.base,
                color: colors.text.body,
                lineHeight: typography.lineHeight.relaxed,
                fontWeight: typography.fontWeight.medium,
              }}>
                {selectedProject.solution}
              </p>
            </div>

            <div style={{ marginBottom: spacing.xl }}>
              <h3 style={{
                fontFamily: typography.fontFamily.heading,
                fontSize: typography.fontSize.xl,
                fontWeight: typography.fontWeight.bold,
                color: selectedProject.color,
                marginBottom: spacing.md,
              }}>
                Tech Stack
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: spacing.md,
              }}>
                {selectedProject.techStack.map((tech) => (
                  <div key={tech.name} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: spacing.xs,
                    padding: spacing.md,
                    background: colors.surface.light,
                    borderRadius: spacing.xs,
                    border: `1px solid ${colors.surface.border}`,
                  }}>
                    <span style={{
                      fontSize: typography.fontSize.sm,
                      fontWeight: typography.fontWeight.medium,
                      color: colors.text.primary,
                      textAlign: 'center',
                    }}>
                      {tech.name}
                    </span>
                    <div style={{
                      display: 'flex',
                      gap: '3px',
                      justifyContent: 'center',
                    }}>
                      {[1, 2, 3, 4, 5].map((level) => (
                        <div
                          key={level}
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '2px',
                            background: level <= tech.level ? selectedProject.color : colors.neutral.gray200,
                            transition: 'all 0.2s ease',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: spacing.md,
              justifyContent: 'center',
              marginTop: spacing['2xl'],
            }}>
              <a
                href={selectedProject.links.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: `${spacing.sm} ${spacing.lg}`,
                  background: colors.neutral.black,
                  color: colors.text.onDark,
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.medium,
                  transition: 'all 0.2s ease-out',
                }}
              >
                GitHub
              </a>
              {selectedProject.links.demo && (
                <a
                  href={selectedProject.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: `${spacing.sm} ${spacing.lg}`,
                    background: selectedProject.color,
                    color: colors.text.onDark,
                    textDecoration: 'none',
                    borderRadius: '25px',
                    fontSize: typography.fontSize.sm,
                    fontWeight: typography.fontWeight.medium,
                    transition: 'all 0.2s ease-out',
                  }}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 고정 하단 네비게이션 바 */}
      <nav style={dynamicNavStyle} aria-label="메인 네비게이션">
        <button 
          style={navItemStyle}
          onClick={() => scrollToSection(1)}
          className="nav-item"
        >
          기술
        </button>
        <button 
          style={navItemStyle}
          onClick={() => scrollToSection(2)}
          className="nav-item"
        >
          경력
        </button>
        <button 
          style={navItemStyle}
          onClick={() => scrollToSection(3)}
          className="nav-item"
        >
          프로젝트
        </button>
        <button 
          style={navItemStyle}
          onClick={() => scrollToSection(4)}
          className="nav-item"
        >
          연락처
        </button>
      </nav>

      <style jsx global>{`
        body {
          font-family: ${typography.fontFamily.body};
          background: ${colors.primary.dark};
          color: ${colors.text.onDark};
          overflow: hidden;
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

        ::-webkit-scrollbar {
          display: none;
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
