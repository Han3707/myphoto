import { useState } from 'react';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

const ExperienceSection = () => {
  const [hoveredExperience, setHoveredExperience] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "SSAFY (삼성 청년 SW 아카데미)",
      position: "교육생",
      period: "2024.01 - 2024.12",
      type: "교육",
      description: "1년간 집중적인 소프트웨어 개발 교육 과정을 통해 실무 역량을 기르고 있습니다.",
      achievements: [
        "알고리즘 문제 해결 능력 향상 (백준 골드 등급 달성)",
        "팀 프로젝트 리더 경험 (3회)",
        "Flutter, React 기반 풀스택 개발 경험",
        "Git 협업 및 코드 리뷰 문화 체득"
      ],
      skills: ["Java", "JavaScript", "Flutter", "React", "Git"],
      color: colors.accent.primary,
      icon: "🎓"
    },
    {
      id: 2,
      company: "개인 프로젝트",
      position: "개발자",
      period: "2023.06 - 현재",
      type: "개인",
      description: "새로운 기술 스택을 학습하며 다양한 개인 프로젝트를 진행하고 있습니다.",
      achievements: [
        "실시간 펀딩 플랫폼 개발 (STOMP/WebSocket)",
        "ML Kit 활용 모션 인식 피트니스 앱 개발",
        "이미지 최적화 갤러리 앱 개발",
        "성능 최적화 및 사용자 경험 개선에 집중"
      ],
      skills: ["Flutter", "React Native", "WebSocket", "ML Kit", "Firebase"],
      color: colors.accent.secondary,
      icon: "💻"
    }
  ];

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

  const timelineStyle = {
    position: 'relative',
    paddingLeft: spacing['2xl'],
  };

  const timelineLineStyle = {
    position: 'absolute',
    left: spacing.lg,
    top: 0,
    bottom: 0,
    width: '2px',
    background: colors.surface.border,
  };

  const experienceCardStyle = (experience, isHovered) => ({
    position: 'relative',
    background: colors.surface.elevated,
    borderRadius: spacing.card.borderRadius,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    boxShadow: isHovered 
      ? '0 12px 35px rgba(0, 0, 0, 0.12)'
      : '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease-out',
    transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
    border: `2px solid ${isHovered ? experience.color : colors.surface.border}`,
    cursor: 'pointer',
  });

  const timelineDotStyle = (experience, isHovered) => ({
    position: 'absolute',
    left: `-${spacing.lg}`,
    top: spacing.lg,
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: experience.color,
    border: `3px solid ${colors.surface.light}`,
    boxShadow: isHovered ? `0 0 15px ${experience.color}40` : '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
  });

  const experienceHeaderStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: spacing.md,
    marginBottom: spacing.lg,
  };

  const experienceIconStyle = (experience, isHovered) => ({
    fontSize: typography.fontSize['2xl'],
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: `${experience.color}15`,
    transition: 'all 0.3s ease',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  });

  const experienceInfoStyle = {
    flex: 1,
  };

  const companyNameStyle = {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.xs,
  };

  const positionStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.secondary,
    marginBottom: spacing.xs,
  };

  const periodStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: colors.text.muted,
    marginBottom: spacing.sm,
  };

  const typeBadgeStyle = (experience) => ({
    display: 'inline-block',
    background: `${experience.color}15`,
    color: experience.color,
    padding: `${spacing.xs} ${spacing.sm}`,
    borderRadius: '20px',
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    marginBottom: spacing.md,
  });

  const descriptionStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.text.body,
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing.lg,
  };

  const achievementsStyle = {
    marginBottom: spacing.lg,
  };

  const achievementsTitleStyle = {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  };

  const achievementItemStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.sm,
    color: colors.text.body,
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing.sm,
    paddingLeft: spacing.md,
    position: 'relative',
  };

  const achievementBulletStyle = (experience) => ({
    position: 'absolute',
    left: 0,
    top: '0.5em',
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    background: experience.color,
  });

  const skillsContainerStyle = {
    display: 'flex',
    gap: spacing.sm,
    flexWrap: 'wrap',
  };

  const skillTagStyle = (experience) => ({
    background: colors.neutral.gray50,
    color: colors.text.secondary,
    padding: `${spacing.xs} ${spacing.sm}`,
    borderRadius: spacing.xs,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    border: `1px solid ${colors.surface.border}`,
  });

  return (
    <section id="experience" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          저의 경력과 경험입니다.
        </h2>

        <div style={timelineStyle}>
          <div style={timelineLineStyle} />
          
          {experiences.map((experience) => {
            const isHovered = hoveredExperience === experience.id;
            
            return (
              <div
                key={experience.id}
                style={experienceCardStyle(experience, isHovered)}
                onMouseEnter={() => setHoveredExperience(experience.id)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                <div style={timelineDotStyle(experience, isHovered)} />
                
                <div style={experienceHeaderStyle}>
                  <div style={experienceIconStyle(experience, isHovered)}>
                    {experience.icon}
                  </div>
                  
                  <div style={experienceInfoStyle}>
                    <h3 style={companyNameStyle}>
                      {experience.company}
                    </h3>
                    <p style={positionStyle}>
                      {experience.position}
                    </p>
                    <p style={periodStyle}>
                      {experience.period}
                    </p>
                    <span style={typeBadgeStyle(experience)}>
                      {experience.type}
                    </span>
                  </div>
                </div>
                
                <p style={descriptionStyle}>
                  {experience.description}
                </p>
                
                <div style={achievementsStyle}>
                  <h4 style={achievementsTitleStyle}>
                    주요 성과
                  </h4>
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} style={achievementItemStyle}>
                      <div style={achievementBulletStyle(experience)} />
                      {achievement}
                    </div>
                  ))}
                </div>
                
                <div style={skillsContainerStyle}>
                  {experience.skills.map((skill) => (
                    <span key={skill} style={skillTagStyle(experience)}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* 반응형 디자인 */
        ${breakpoints.media.maxTablet} {
          .timeline {
            padding-left: ${spacing.xl} !important;
          }
          
          h2 {
            font-size: ${typography.fontSize['2xl']} !important;
          }
        }

        ${breakpoints.media.maxMobile} {
          .timeline {
            padding-left: ${spacing.lg} !important;
          }

          h2 {
            font-size: ${typography.fontSize.xl} !important;
          }
          
          .experience-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection; 