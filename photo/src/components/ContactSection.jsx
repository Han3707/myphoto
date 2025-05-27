import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

const ContactSection = () => {
  const contactInfo = {
    email: "gksals9563@gmail.com",
    phone: "+82 10-6314-9563",
    location: "부산, 대한민국",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/hanmin-kim",
        icon: "🐙",
        color: colors.neutral.black,
        bgColor: colors.neutral.white,
        borderColor: colors.neutral.black,
      },
      {
        name: "Email",
        url: "mailto:gksals9563@gmail.com",
        icon: "📧",
        color: colors.accent.danger,
        bgColor: `${colors.accent.danger}10`,
      },
      {
        name: "Blog",
        url: "https://hanmin-dev.tistory.com",
        icon: "📝",
        color: colors.accent.secondary,
        bgColor: `${colors.accent.secondary}10`,
      }
    ]
  };

  const sectionStyle = {
    padding: `${spacing['4xl']} ${spacing.lg}`,
    background: colors.primary.dark,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const containerStyle = {
    maxWidth: spacing.container.lg,
    margin: '0 auto',
    width: '100%',
    textAlign: 'center',
  };

  const titleStyle = {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.onDark,
    marginBottom: spacing.xl,
    textShadow: typography.textShadow.hero,
  };

  const subtitleStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.xl,
    color: colors.text.secondary,
    marginBottom: spacing['3xl'],
    lineHeight: typography.lineHeight.relaxed,
    maxWidth: '600px',
    margin: `0 auto ${spacing['3xl']} auto`,
  };

  const contactCardStyle = {
    background: colors.surface.elevated,
    borderRadius: spacing.card.borderRadius,
    padding: spacing['2xl'],
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    marginBottom: spacing['2xl'],
    border: `1px solid ${colors.neutral.lightGray}`,
  };

  const contactInfoStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: spacing['2xl'],
    marginBottom: spacing['2xl'],
    flexWrap: 'wrap',
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: spacing.xs,
    transition: 'all 0.2s ease-out',
    minWidth: '180px',
  };

  const contactIconStyle = {
    fontSize: typography.fontSize['2xl'],
  };

  const contactTextStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.text.body,
    fontWeight: typography.fontWeight.medium,
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: spacing.lg,
    marginBottom: spacing['2xl'],
    flexWrap: 'wrap',
  };

  const socialLinkStyle = (link) => ({
    display: 'flex',
    alignItems: 'center',
    gap: spacing.sm,
    padding: `${spacing.md} ${spacing.lg}`,
    background: link.bgColor || `${link.color}10`,
    color: link.color,
    textDecoration: 'none',
    borderRadius: '25px',
    fontSize: typography.fontSize.base,
    fontWeight: typography.fontWeight.medium,
    transition: 'all 0.3s ease-out',
    border: `2px solid ${link.borderColor || link.color}`,
  });

  const thankYouMessageStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    color: colors.text.secondary,
    lineHeight: typography.lineHeight.relaxed,
    fontStyle: 'italic',
    marginTop: spacing.xl,
    padding: spacing.lg,
    background: `${colors.accent.cyan}05`,
    borderRadius: spacing.xs,
    borderLeft: `4px solid ${colors.accent.cyan}`,
  };

  const footerStyle = {
    position: 'absolute',
    bottom: spacing.lg,
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    opacity: 0.7,
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          함께 성장하고 싶습니다
        </h2>
        
        <p style={subtitleStyle}>
          새로운 도전과 학습 기회를 찾고 있습니다.<br />
          언제든 연락주세요!
        </p>

        <div style={contactCardStyle}>
          {/* 연락처 정보 */}
          <div style={contactInfoStyle}>
            <div style={contactItemStyle}>
              <span style={contactIconStyle}>📧</span>
              <span style={contactTextStyle}>{contactInfo.email}</span>
            </div>
            
            <div style={contactItemStyle}>
              <span style={contactIconStyle}>📱</span>
              <span style={contactTextStyle}>{contactInfo.phone}</span>
            </div>
            
            <div style={contactItemStyle}>
              <span style={contactIconStyle}>📍</span>
              <span style={contactTextStyle}>{contactInfo.location}</span>
            </div>
          </div>

          {/* 소셜 링크 */}
          <div style={socialLinksStyle}>
            {contactInfo.socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={socialLinkStyle(link)}
                onMouseEnter={(e) => {
                  if (link.name === 'GitHub') {
                    e.target.style.background = colors.neutral.black;
                    e.target.style.color = colors.text.onDark;
                  } else {
                    e.target.style.background = link.color;
                    e.target.style.color = colors.text.onDark;
                  }
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 8px 20px ${link.color}30`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = link.bgColor || `${link.color}10`;
                  e.target.style.color = link.color;
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <span>{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>

          {/* 감사 메시지 */}
          <div style={thankYouMessageStyle}>
            "포트폴리오를 끝까지 봐주셔서 감사합니다.<br />
            첫 발을 내딛는 개발자로서, 함께 성장할 수 있는 기회를 기대합니다."
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <div style={footerStyle}>
        © 2024 Portfolio. Made with ❤️ and lots of ☕
      </div>

      <style jsx>{`
        /* 반응형 디자인 */
        ${breakpoints.media.maxTablet} {
          h2 {
            font-size: ${typography.fontSize['3xl']} !important;
          }
          
          .contact-info {
            flex-direction: column !important;
            align-items: center !important;
            gap: ${spacing.lg} !important;
          }
          
          .social-links {
            gap: ${spacing.md} !important;
          }
        }

        ${breakpoints.media.maxMobile} {
          h2 {
            font-size: ${typography.fontSize['2xl']} !important;
          }
          
          .subtitle {
            font-size: ${typography.fontSize.lg} !important;
          }
          
          .contact-card {
            padding: ${spacing.lg} !important;
            margin: 0 ${spacing.sm} ${spacing.lg} ${spacing.sm} !important;
          }

          .contact-info {
            flex-direction: column !important;
            align-items: center !important;
            gap: ${spacing.md} !important;
          }
          
          .social-links {
            flex-direction: column !important;
            align-items: center !important;
          }
          
          .social-link {
            width: 200px !important;
            justify-content: center !important;
          }
          
          .thank-you-message {
            font-size: ${typography.fontSize.base} !important;
            padding: ${spacing.md} !important;
          }
        }

        /* 접근성 개선 */
        a:focus {
          outline: 2px solid ${colors.accent.cyan} !important;
          outline-offset: 2px !important;
        }

        /* 애니메이션 */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-card {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ContactSection; 