import { useState } from 'react';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

const SkillsSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    languages: [
      {
        name: 'JavaScript',
        icon: '🟨',
        color: colors.skill.javascript,
        level: 5
      },
      {
        name: 'Dart',
        icon: '🎯',
        color: colors.skill.dart,
        level: 4
      },
      {
        name: 'TypeScript',
        icon: '🔷',
        color: colors.skill.typescript,
        level: 4
      },
      {
        name: 'Python',
        icon: '🐍',
        color: colors.skill.python,
        level: 3
      },
      {
        name: 'Java',
        icon: '☕',
        color: '#ED8B00',
        level: 3
      },
      {
        name: 'Kotlin',
        icon: '🔶',
        color: '#7F52FF',
        level: 3
      }
    ],
    frameworks: [
      {
        name: 'React',
        icon: '⚛️',
        color: colors.skill.react,
        level: 5
      },
      {
        name: 'Flutter',
        icon: '📱',
        color: colors.skill.flutter,
        level: 4
      },
      {
        name: 'React Native',
        icon: '📲',
        color: colors.skill.reactNative,
        level: 4
      },
      {
        name: 'Vue.js',
        icon: '💚',
        color: '#4FC08D',
        level: 3
      },
      {
        name: 'Next.js',
        icon: '▲',
        color: '#000000',
        level: 4
      }
    ],
    tools: [
      {
        name: 'Git',
        icon: '📝',
        color: colors.skill.git,
        level: 4
      },
      {
        name: 'Firebase',
        icon: '🔥',
        color: colors.skill.firebase,
        level: 4
      },
      {
        name: 'Vite',
        icon: '⚡',
        color: colors.skill.vite,
        level: 4
      },
      {
        name: 'WebSocket',
        icon: '🔄',
        color: colors.skill.websocket,
        level: 4
      },
      {
        name: 'Docker',
        icon: '🐳',
        color: '#2496ED',
        level: 3
      }
    ]
  };

  const sectionStyle = {
    padding: `${spacing['2xl']} ${spacing.lg}`,
    background: colors.surface.light,
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  };

  const containerStyle = {
    maxWidth: spacing.container.xl,
    margin: '0 auto',
    width: '100%',
  };

  const titleStyle = {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing['2xl'],
  };

  const categoriesContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: spacing['2xl'],
    marginTop: spacing.xl,
  };

  const categoryContainerStyle = {
    background: colors.surface.elevated,
    borderRadius: spacing.card.borderRadius,
    padding: spacing.xl,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    border: `1px solid ${colors.surface.border}`,
  };

  const categoryTitleStyle = {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.lg,
    textAlign: 'center',
    position: 'relative',
  };

  const categoryUnderlineStyle = (color) => ({
    position: 'absolute',
    bottom: '-8px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40px',
    height: '3px',
    background: color,
    borderRadius: '2px',
  });

  const skillsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: spacing.md,
    marginTop: spacing.lg,
  };

  const skillCardStyle = (skill, isHovered) => ({
    background: colors.neutral.gray50,
    borderRadius: spacing.xs,
    padding: spacing.md,
    transition: 'all 0.25s ease-out',
    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
    cursor: 'pointer',
    border: `2px solid ${isHovered ? skill.color : colors.surface.border}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.sm,
    boxShadow: isHovered ? '0 8px 20px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
  });

  const skillIconStyle = (skill, isHovered) => ({
    fontSize: typography.fontSize['2xl'],
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: `${skill.color}15`,
    transition: 'all 0.25s ease-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  });

  const skillNameStyle = {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center',
    margin: 0,
  };

  const skillBoxesStyle = {
    display: 'flex',
    gap: '2px',
    justifyContent: 'center',
  };

  const skillBoxStyle = (isActive, skill, isHovered) => ({
    width: '8px',
    height: '8px',
    borderRadius: '1px',
    background: isActive ? skill.color : colors.neutral.gray200,
    transition: 'all 0.3s ease',
    transform: isHovered && isActive ? 'scale(1.2)' : 'scale(1)',
    boxShadow: isHovered && isActive ? `0 2px 6px ${skill.color}40` : 'none',
  });

  const renderSkillCategory = (categoryKey, categoryTitle, categoryColor) => {
    const skills = skillCategories[categoryKey];
    
    return (
      <div key={categoryKey} style={categoryContainerStyle}>
        <h3 style={categoryTitleStyle}>
          {categoryTitle}
          <div style={categoryUnderlineStyle(categoryColor)} />
        </h3>
        <div style={skillsGridStyle}>
          {skills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            
            return (
              <div
                key={skill.name}
                style={skillCardStyle(skill, isHovered)}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div style={skillIconStyle(skill, isHovered)}>
                  {skill.icon}
                </div>
                <h4 style={skillNameStyle}>
                  {skill.name}
                </h4>
                <div style={skillBoxesStyle}>
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      style={skillBoxStyle(level <= skill.level, skill, isHovered)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section id="skills" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          저의 주요 기술 스택입니다.
        </h2>

        <div style={categoriesContainerStyle}>
          {renderSkillCategory('languages', '언어', colors.accent.primary)}
          {renderSkillCategory('frameworks', '프레임워크', colors.accent.secondary)}
          {renderSkillCategory('tools', '도구', colors.accent.tertiary)}
        </div>
      </div>

      <style jsx>{`
        /* 반응형 디자인 */
        ${breakpoints.media.maxTablet} {
          .categories-container {
            grid-template-columns: 1fr;
            gap: ${spacing.xl};
          }
          
          h2 {
            font-size: ${typography.fontSize['2xl']} !important;
          }
        }

        ${breakpoints.media.maxMobile} {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: ${spacing.sm};
          }

          h2 {
            font-size: ${typography.fontSize.xl} !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection; 