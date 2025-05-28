import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { useOverflow } from '../contexts/OverflowContext';

// Velog SVG Icon Component
const VelogIcon = () => (
  <svg
    className="icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 192 192"
    width="24"
    height="24"
    fill="currentColor"
  >
    <path d="M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z" />
  </svg>
);

// Email SVG Icon Component
const EmailIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

// GitHub SVG Icon Component
const GithubIcon = () => (
  <svg className="icon" viewBox="0 0 24 24" width="24" height="24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ContactSection = () => {
  const { activeSection } = useOverflow();

  // 섹션이 연락처 섹션이면 z-index 값을 높게 설정
  const isActive = activeSection === 4;

  const sectionStyle = {
    padding: 0,
    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
    minHeight: '100vh',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'visible',
    zIndex: isActive ? 50 : 1,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const contactSectionStyle = {
    maxWidth: '800px',
    width: '90%',
    padding: `${spacing['4xl']} ${spacing.xl}`,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '20px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    margin: spacing.lg,
  };

  const sectionTagStyle = {
    display: 'inline-block',
    background: '#000',
    color: '#fff',
    padding: '8px 20px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: 500,
    marginBottom: '30px',
    letterSpacing: '0.5px',
    animation: 'pulse 2s infinite',
  };

  const titleStyle = {
    fontSize: '48px',
    fontWeight: 800,
    color: '#1a1a1a',
    lineHeight: 1.2,
    marginBottom: '20px',
    letterSpacing: '-1px',
    fontFamily: typography.fontFamily.heading,
  };

  const subtitleStyle = {
    fontSize: '18px',
    color: '#666',
    lineHeight: 1.6,
    marginBottom: '50px',
    maxWidth: '500px',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontFamily: typography.fontFamily.body,
  };

  const contactButtonsStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '40px',
  };

  const contactBtnBaseStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px 28px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '16px',
    fontWeight: 600,
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
  };

  const btnPrimaryStyle = {
    ...contactBtnBaseStyle,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)',
  };

  const btnSecondaryStyle = {
    ...contactBtnBaseStyle,
    background: '#fff',
    color: '#333',
    border: '2px solid #e0e0e0',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
  };

  const btnDarkStyle = {
    ...contactBtnBaseStyle,
    background: '#1a1a1a',
    color: 'white',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  };

  const contactInfoStyle = {
    paddingTop: '40px',
    borderTop: '1px solid #e0e0e0',
  };

  const contactInfoTextStyle = {
    color: '#888',
    fontSize: '14px',
    marginBottom: '10px',
  };

  const contactEmailStyle = {
    color: '#667eea',
    fontWeight: 600,
    textDecoration: 'none',
    fontSize: '16px',
  };

  // Media query styles for responsiveness
  const responsiveStyles = window.innerWidth <= 768 ? {
    contactSectionStyle: {
      padding: '40px 20px',
      margin: '20px',
    },
    titleStyle: {
      fontSize: '36px',
    },
    contactButtonsStyle: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    contactBtnBaseStyle: {
      width: '100%',
      maxWidth: '280px',
      justifyContent: 'center',
    }
  } : {};

  // Apply responsive styles if needed
  const finalContactSectionStyle = {
    ...contactSectionStyle,
    ...(responsiveStyles.contactSectionStyle || {})
  };

  const finalTitleStyle = {
    ...titleStyle,
    ...(responsiveStyles.titleStyle || {})
  };

  const finalContactButtonsStyle = {
    ...contactButtonsStyle,
    ...(responsiveStyles.contactButtonsStyle || {})
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div style={finalContactSectionStyle} className="fade-in">
        <div style={sectionTagStyle}>Contact Me</div>

        <h2 style={finalTitleStyle}>
          함께 협업하고 싶다면<br />
          언제든 연락주세요!
        </h2>

        <p style={subtitleStyle}>
          새로운 프로젝트나 흥미로운 아이디어가 있으시다면 <br></br>주저하지 마시고 연락해 주세요.<br />
        </p>

        <div style={finalContactButtonsStyle} className="btn-animation">
          <a href="mailto:contact@hanmin.dev" style={btnPrimaryStyle}>
            <EmailIcon />
            이메일 보내기
          </a>

          <a href="https://github.com/hanmin-kim" target="_blank" rel="noopener noreferrer" style={btnSecondaryStyle}>
            <GithubIcon />
            GitHub
          </a>

          <a href="https://velog.io/@yourusername" target="_blank" rel="noopener noreferrer" style={btnDarkStyle}>
            <VelogIcon />
            벨로그
          </a>
        </div>

        <div style={contactInfoStyle} className="info-animation">
          <p style={contactInfoTextStyle}>빠른 응답을 원하신다면</p>
          <a href="mailto:contact@hanmin.dev" style={contactEmailStyle}>contact@hanmin.dev</a>
        </div>
      </div>

      {/* Add global style to ensure full height rendering */}
      <style jsx global>{`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
        }
        #__next, main {
          height: 100%;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
          }
          
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
          }
          
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
          }
        }

        .btn-animation a {
          transition: all 0.3s ease;
        }
        
        .btn-animation a:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }
        
        .btn-animation a:hover:nth-child(1) {
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
        }
        
        .btn-animation a:hover:nth-child(2) {
          border-color: #667eea;
          color: #667eea;
        }
        
        .btn-animation a:hover:nth-child(3) {
          background: #333;
        }
        
        .btn-animation a::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.7s;
        }
        
        .btn-animation a:hover::before {
          left: 100%;
        }
        
        .icon {
          transition: transform 0.3s ease;
        }
        
        .btn-animation a:hover .icon {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
};

export default ContactSection; 