import { useState, useEffect, useMemo } from 'react';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

const TYPING_TEXTS = [
  '첫발을 내딛는 것을\n두려워하지 않는',
];

const HeroSection = ({ scrollToSection }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const texts = useMemo(() => TYPING_TEXTS, []);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentFullText = texts[currentIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const sectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: colors.gradients.heroDepth,
    position: 'relative',
    overflow: 'hidden',
  };

  const mainContainerStyle = {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  };

  const containerStyle = {
    maxWidth: spacing.container.xl,
    margin: '0 auto',
    padding: spacing.section.padding,
    textAlign: 'center',
    zIndex: 2,
  };

  const titleLineStyle = {
    fontFamily: typography.fontFamily.heading,
    lineHeight: typography.lineHeight.tight,
    textShadow: typography.textShadow.hero,
    marginBottom: spacing.lg,
  };

  const mainTitleLineStyle = {
    ...titleLineStyle,
    fontSize: typography.fontSize['5xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.onDark,
    marginBottom: spacing.sm,
  };

  const nameLineStyle = {
    ...titleLineStyle,
    fontSize: typography.fontSize['6xl'],
    fontWeight: typography.fontWeight.extrabold,
    background: `linear-gradient(135deg, ${colors.accent.cyan}, ${colors.accent.primary})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: colors.accent.cyan,
    marginBottom: spacing.xl,
    textShadow: `0 0 30px ${colors.accent.cyan}30`,
  };

  const typingTextStyle = {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.accent.cyanLight,
    marginBottom: spacing['2xl'],
    minHeight: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: typography.lineHeight.tight,
    whiteSpace: 'pre-line',
    textShadow: `0 0 30px ${colors.accent.cyan}40`,
  };

  const descriptionStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.xl,
    color: colors.text.onDark,
    lineHeight: typography.lineHeight.relaxed,
    maxWidth: '700px',
    margin: `0 auto ${spacing['2xl']} auto`,
    opacity: 0.9,
  };

  const ctaButtonStyle = {
    display: 'inline-block',
    padding: `${spacing.lg} ${spacing['3xl']}`,
    background: `linear-gradient(135deg, ${colors.accent.cyan}, ${colors.accent.cyanLight})`,
    color: colors.text.onDark,
    textDecoration: 'none',
    borderRadius: '50px',
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    transition: 'all 0.3s ease',
    boxShadow: `0 10px 30px ${colors.accent.cyan}40`,
    cursor: 'pointer',
    border: 'none',
    position: 'relative',
    overflow: 'hidden',
  };

  const backgroundElementsStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
    opacity: 0.1,
  };

  const floatingElementStyle = (delay, size, left, top) => ({
    position: 'absolute',
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    height: `${size}px`,
    background: `linear-gradient(135deg, ${colors.accent.cyan}60, ${colors.accent.cyanLight}40)`,
    borderRadius: '50%',
    animation: `float 8s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    filter: 'blur(1px)',
  });

  const handleCTAClick = () => {
    if (scrollToSection) {
      scrollToSection(1); 
    }
  };

  return (
    <section style={sectionStyle}>
      <div style={backgroundElementsStyle} className="floating-elements">
        <div style={floatingElementStyle(0, 60, 10, 20)} />
        <div style={floatingElementStyle(2, 40, 85, 15)} />
        <div style={floatingElementStyle(4, 80, 15, 80)} />
        <div style={floatingElementStyle(6, 50, 80, 75)} />
        <div style={floatingElementStyle(1, 35, 50, 10)} />
        <div style={floatingElementStyle(3, 45, 90, 50)} />
      </div>

      <div style={mainContainerStyle}>
        <div style={containerStyle}>
          <div style={typingTextStyle} className="typing-text">
            <span>
              {currentText}
              <span style={{ 
                opacity: showCursor ? 1 : 0,
                color: colors.accent.cyan,
                fontWeight: typography.fontWeight.bold 
              }}>
                |
              </span>
            </span>
          </div>
          
          <div style={{
            ...titleLineStyle, 
            fontSize: typography.fontSize.xl,
            fontWeight: typography.fontWeight.medium,
            color: colors.text.onDark,
            opacity: 0.9,
            marginBottom: spacing.md,
          }} className="subtitle-line">
          </div>
          
          <div style={mainTitleLineStyle} className="main-title-line">
            프론트엔드 개발자
          </div>
          
          <div style={nameLineStyle} className="name-line">
            김한민입니다.
          </div>

          <p style={descriptionStyle} className="description">
           새로운 기술 앞에서도 망설이지 않고, 시도하고 도전하는 개발자
          </p>

          <button 
            style={ctaButtonStyle}
            onClick={handleCTAClick}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px) scale(1.05)';
              e.target.style.boxShadow = `0 15px 40px ${colors.accent.cyan}50`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = `0 10px 30px ${colors.accent.cyan}40`;
            }}
            className="cta-button"
            aria-label="스킬 섹션으로 이동"
          >
            <span style={{ position: 'relative', zIndex: 1 }}>
              제 이야기를 들어보세요 →
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 40px ${colors.accent.cyan}60;
        }

        .cta-button:active {
          transform: translateY(-1px);
        }

        /* 반응형 디자인 */
        ${breakpoints.media.maxTablet} {
          .typing-text {
            font-size: ${typography.fontSize['3xl']} !important;
          }
          
          h1 {
            font-size: ${typography.fontSize['4xl']} !important;
          }
          
          h2 {
            font-size: ${typography.fontSize['5xl']} !important;
          }
          
          .cta-button {
            font-size: ${typography.fontSize.lg} !important;
            padding: ${spacing.md} ${spacing['2xl']} !important;
          }
        }

        ${breakpoints.media.maxMobile} {
          .typing-text {
            font-size: ${typography.fontSize['2xl']} !important;
            min-height: 3rem !important;
          }
          
          h1 {
            font-size: ${typography.fontSize['3xl']} !important;
          }
          
          h2 {
            font-size: ${typography.fontSize['4xl']} !important;
          }
          
          p {
            font-size: ${typography.fontSize.lg} !important;
          }
          
          .cta-button {
            font-size: ${typography.fontSize.base} !important;
            padding: ${spacing.sm} ${spacing.xl} !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 