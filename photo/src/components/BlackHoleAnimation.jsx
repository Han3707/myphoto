import { useState, useEffect } from 'react';
import { colors } from '../constants/colors';

const BlackHoleAnimation = ({ 
  size = 60, 
  isActive = false, 
  onAnimationComplete = () => {} 
}) => {
  const [animationPhase, setAnimationPhase] = useState('idle');

  useEffect(() => {
    if (isActive && animationPhase === 'idle') {
      setAnimationPhase('expanding');
      
      // 확장 단계 (0.5초)
      setTimeout(() => {
        setAnimationPhase('spinning');
        
        // 회전 단계 (1초)
        setTimeout(() => {
          setAnimationPhase('contracting');
          
          // 수축 단계 (0.5초)
          setTimeout(() => {
            setAnimationPhase('idle');
            onAnimationComplete();
          }, 500);
        }, 1000);
      }, 500);
    }
  }, [isActive, animationPhase, onAnimationComplete]);

  const getTransform = () => {
    switch (animationPhase) {
      case 'expanding':
        return 'scale(1.5) rotate(0deg)';
      case 'spinning':
        return 'scale(1.5) rotate(720deg)';
      case 'contracting':
        return 'scale(0.1) rotate(1080deg)';
      default:
        return 'scale(1) rotate(0deg)';
    }
  };

  const getOpacity = () => {
    switch (animationPhase) {
      case 'contracting':
        return 0.3;
      default:
        return 1;
    }
  };

  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
    position: 'relative',
    cursor: animationPhase === 'idle' ? 'pointer' : 'default',
  };

  const blackHoleStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: `radial-gradient(circle at 30% 30%, 
      transparent 20%, 
      ${colors.primary.dark}40 30%, 
      ${colors.primary.dark}80 50%, 
      ${colors.primary.dark} 70%, 
      #000000 100%)`,
    transform: getTransform(),
    opacity: getOpacity(),
    transition: animationPhase === 'idle' ? 'transform 0.3s ease' : 
               animationPhase === 'expanding' ? 'transform 0.5s ease-out' :
               animationPhase === 'spinning' ? 'transform 1s linear' :
               'transform 0.5s ease-in, opacity 0.5s ease-in',
    boxShadow: `
      inset 0 0 20px rgba(0, 0, 0, 0.8),
      0 0 30px rgba(0, 0, 0, 0.5),
      0 0 60px rgba(0, 0, 0, 0.3)
    `,
  };

  const accretionDiskStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '150%',
    height: '150%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
    background: `conic-gradient(
      transparent 0deg,
      ${colors.accent.cyan}20 60deg,
      transparent 120deg,
      ${colors.accent.purple}20 180deg,
      transparent 240deg,
      ${colors.accent.cyan}20 300deg,
      transparent 360deg
    )`,
    animation: animationPhase === 'spinning' ? 'diskRotate 1s linear' : 
               animationPhase === 'expanding' ? 'diskExpand 0.5s ease-out' :
               animationPhase === 'contracting' ? 'diskContract 0.5s ease-in' :
               'none',
    opacity: animationPhase === 'idle' ? 0.6 : 0.8,
    transition: 'opacity 0.3s ease',
  };

  const particleStyle = (delay, size, distance) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: `${size}px`,
    height: `${size}px`,
    background: colors.accent.cyan,
    borderRadius: '50%',
    transform: `translate(-50%, -50%) rotate(${delay * 60}deg) translateX(${distance}px)`,
    animation: animationPhase === 'spinning' ? `particleOrbit 1s linear infinite` :
               animationPhase === 'contracting' ? `particleSuck 0.5s ease-in` :
               'none',
    opacity: animationPhase === 'idle' ? 0 : 0.8,
    transition: 'opacity 0.3s ease',
    animationDelay: `${delay * 0.1}s`,
  });

  return (
    <div style={containerStyle}>
      {/* 강착원반 */}
      <div style={accretionDiskStyle} />
      
      {/* 블랙홀 본체 */}
      <div style={blackHoleStyle} />
      
      {/* 궤도 입자들 */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={particleStyle(i, 3, 40)}
        />
      ))}

      <style jsx>{`
        @keyframes diskRotate {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes diskExpand {
          from { 
            transform: translate(-50%, -50%) scale(1); 
            opacity: 0.6;
          }
          to { 
            transform: translate(-50%, -50%) scale(1.2); 
            opacity: 0.8;
          }
        }

        @keyframes diskContract {
          from { 
            transform: translate(-50%, -50%) scale(1.2); 
            opacity: 0.8;
          }
          to { 
            transform: translate(-50%, -50%) scale(0.1); 
            opacity: 0.2;
          }
        }

        @keyframes particleOrbit {
          from { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(40px);
            opacity: 0.8;
          }
          to { 
            transform: translate(-50%, -50%) rotate(360deg) translateX(40px);
            opacity: 0.8;
          }
        }

        @keyframes particleSuck {
          from { 
            transform: translate(-50%, -50%) rotate(0deg) translateX(40px);
            opacity: 0.8;
          }
          to { 
            transform: translate(-50%, -50%) rotate(720deg) translateX(0px);
            opacity: 0;
          }
        }

        /* 호버 효과 */
        ${containerStyle.cursor === 'pointer' ? `
          div:hover .black-hole {
            transform: scale(1.1) !important;
            box-shadow: 
              inset 0 0 25px rgba(0, 0, 0, 0.9),
              0 0 40px rgba(0, 0, 0, 0.6),
              0 0 80px rgba(0, 0, 0, 0.4) !important;
          }
        ` : ''}
      `}</style>
    </div>
  );
};

export default BlackHoleAnimation; 