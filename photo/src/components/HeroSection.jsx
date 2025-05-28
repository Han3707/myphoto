const HeroSection = ({ scrollToSection }) => {
  return (
    <section className="container">
      <div className="geometric-bg">
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
        <div className="geo-shape"></div>
      </div>

      <div className="content-wrapper">
        <div className="tech-badge">프론트엔드 && 모바일 앱 개발자</div>

        <h1 className="main-title">
          <span className="title-line">
            <span className="title-text">첫발을 내딛는 것을</span>
          </span>
          <span className="title-line">
            <span className="title-text">두려워하지 않는</span>
          </span>
          <span className="title-line">
            <span className="title-text highlight">김한민</span>입니다.
          </span>
        </h1>

        <p className="sub-title">
          새로운 기술 앞에서도 당황하지 않고,<br />
          시도하고 도전하는 개발자
        </p>

        <div className="action-section">
          <button className="cta-button" onClick={() => scrollToSection(1)}>제 이야기를 들어보세요</button>
          <div className="scroll-indicator" onClick={() => scrollToSection(1)}>
            <span>아래로 스크롤</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 20px;
          width: 100%;
          background: #FAFAFA;
        }

        .geometric-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .geo-shape {
          position: absolute;
          border-radius: 50%;
        }

        .geo-shape:nth-child(1) {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%);
          top: -200px;
          right: -200px;
          animation: rotate 20s linear infinite;
        }

        .geo-shape:nth-child(2) {
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, transparent 70%);
          bottom: -150px;
          left: -150px;
          animation: rotate 25s linear infinite reverse;
        }

        .geo-shape:nth-child(3) {
          width: 200px;
          height: 200px;
          background: linear-gradient(45deg, rgba(0, 0, 0, 0.02), transparent);
          top: 20%;
          left: 10%;
          border-radius: 20px;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .content-wrapper {
          max-width: 900px;
          width: 100%;
          text-align: left;
          animation: slideInUp 1s ease-out;
          position: relative;
          z-index: 10;
        }

        @keyframes slideInUp {
          from { 
            transform: translateY(100px); 
            opacity: 0; 
          }
          to { 
            transform: translateY(0); 
            opacity: 1; 
          }
        }

        .tech-badge {
          display: inline-block;
          background: #000;
          color: white;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 50px;
          transition: all 0.3s ease;
          cursor: default;
        }

        .tech-badge:hover {
          transform: translateX(5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .main-title {
          font-size: 5.5rem;
          font-weight: 900;
          color: #000;
          line-height: 1.2;
          margin-bottom: 40px;
          position: relative;
        }

        .title-line {
          display: block;
          position: relative;
          overflow: hidden;
          height: 7rem;
          margin-bottom: 0.5rem;
        }

        .title-text {
          display: inline-block;
          animation: slideInRight 0.8s ease-out;
          padding-bottom: 0.5rem;
          line-height: 1.3;
        }

        .title-line:nth-child(2) .title-text {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }

        .title-line:nth-child(3) .title-text {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }

        @keyframes slideInRight {
          from { 
            transform: translateX(-100%); 
          }
          to { 
            transform: translateX(0); 
          }
        }

        .highlight {
          color: #FF6B6B;
          position: relative;
        }

        .highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(255, 107, 107, 0.2);
          z-index: -1;
          animation: expandHighlight 1s ease-out 0.8s both;
        }

        @keyframes expandHighlight {
          from { width: 0; }
          to { width: 100%; }
        }

        .sub-title {
          font-size: 1.8rem;
          color: #666;
          margin-bottom: 60px;
          line-height: 1.4;
          font-weight: 400;
          max-width: 600px;
        }

        .action-section {
          display: flex;
          align-items: center;
          gap: 40px;
          margin-bottom: 80px;
        }

        .cta-button {
          background: #000;
          color: white;
          padding: 24px 48px;
          border: none;
          border-radius: 8px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .scroll-indicator {
          display: flex;
          align-items: center;
          gap: 15px;
          color: #999;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .scroll-indicator:hover {
          color: #000;
        }

        .scroll-arrow {
          width: 2px;
          height: 30px;
          background: #000;
          position: relative;
          animation: scrollBounce 2s ease-in-out infinite;
        }

        .scroll-arrow::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: -3px;
          width: 8px;
          height: 8px;
          border-right: 2px solid #000;
          border-bottom: 2px solid #000;
          transform: rotate(45deg);
        }

        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        /* 반응형 */
        @media (max-width: 768px) {
          .content-wrapper {
            text-align: center;
            padding: 20px;
          }
          
          .main-title {
            font-size: 3.5rem;
          }
          
          .title-line {
            height: 4rem;
          }
          
          .action-section {
            flex-direction: column;
            gap: 30px;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .main-title {
            font-size: 2.8rem;
          }
          
          .title-line {
            height: 3.2rem;
          }
          
          .sub-title {
            font-size: 1.4rem;
          }
          
          .cta-button {
            padding: 18px 36px;
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 