import { useState } from 'react';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

const ProjectsSection = ({ openProjectModal }) => {
  const projects = [
    {
      id: 1,
      title: "실시간 펀딩 플랫폼",
      summary: "STOMP 프로토콜로 실시간 업데이트 지연율 30% 개선",
      image: "🚀",
      color: colors.project.funding,
      period: "2024.01 - 2024.03",
      role: "Frontend Lead Developer",
      whatIDid: [
        "Flutter App 리드 개발 및 아키텍처 설계",
        "OAuth → JWT 보안 시스템 구축",
        "STOMP/WebSocket 실시간 통신 구현",
        "상태 관리 및 성능 최적화"
      ],
      problem: "기존 펀딩 플랫폼의 업데이트 지연으로 인한 사용자 경험 저하 및 실시간성 부족. 사용자들이 펀딩 현황을 실시간으로 확인하지 못해 참여도가 낮았음.",
      newTechFocus: "첫 STOMP 프로토콜 도입 및 WebSocket 실시간 통신 구현",
      solution: "STOMP/WebSocket 프로토콜 도입 및 5단계 재연결 로직 구현으로 실시간 업데이트 지연율 30% 개선. 사용자 이탈률 25% 감소 및 펀딩 참여율 40% 향상",
      techStack: [
        { name: "Flutter", level: 4 },
        { name: "WebSocket", level: 4 },
        { name: "STOMP", level: 3 },
        { name: "JWT", level: 4 },
        { name: "Provider", level: 3 },
        { name: "Dio", level: 2 }
      ],
      links: {
        github: "https://github.com/hanmin-kim/funding-platform",
        demo: "https://funding-platform-demo.vercel.app"
      }
    },
    {
      id: 2,
      title: "모션 인식 피트니스 앱",
      summary: "ML Kit 활용으로 운동 자세 인식 정확도 95% 달성",
      image: "💪",
      color: colors.project.fitness,
      period: "2023.09 - 2023.12",
      role: "Full-Stack Developer",
      whatIDid: [
        "React Native 크로스플랫폼 개발",
        "ML Kit 모션 인식 API 연동",
        "실시간 운동 데이터 분석 시스템 구축",
        "사용자 맞춤형 운동 추천 알고리즘 개발"
      ],
      problem: "기존 피트니스 앱의 부정확한 운동 자세 측정과 실시간 피드백 부족. 사용자들이 올바른 운동 자세를 익히기 어려워 운동 효과가 제한적이었음.",
      newTechFocus: "첫 ML Kit 도입 및 실시간 모션 인식 기술 학습",
      solution: "ML Kit 활용한 정확도 95% 이상의 모션 인식 시스템 구축 및 실시간 자세 교정 피드백 제공. 사용자 만족도 40% 향상 및 운동 지속률 60% 증가",
      techStack: [
        { name: "React Native", level: 4 },
        { name: "ML Kit", level: 3 },
        { name: "TensorFlow", level: 2 },
        { name: "Firebase", level: 4 },
        { name: "Redux", level: 3 },
        { name: "Expo", level: 3 }
      ],
      links: {
        github: "https://github.com/hanmin-kim/fitness-motion-app"
      }
    },
    {
      id: 3,
      title: "이미지 최적화 갤러리",
      summary: "메모리 사용량 60% 감소 및 로딩 속도 3배 향상",
      image: "🖼️",
      color: colors.project.gallery,
      period: "2023.06 - 2023.08",
      role: "Mobile Developer",
      whatIDid: [
        "cached_network_image 라이브러리 활용",
        "지연 로딩 및 메모리 최적화 구현",
        "Progressive JPEG 지원 추가",
        "이미지 압축 및 캐싱 전략 수립"
      ],
      problem: "대용량 이미지 로딩으로 인한 앱 성능 저하 및 메모리 부족 현상. 특히 고해상도 이미지가 많은 갤러리에서 앱 크래시가 빈번하게 발생.",
      newTechFocus: "첫 이미지 최적화 기술 도입 및 메모리 관리 전략 학습",
      solution: "cached_network_image와 지연 로딩 기법 적용으로 메모리 사용량 60% 감소 및 이미지 로딩 속도 3배 향상. 앱 크래시율 90% 감소",
      techStack: [
        { name: "Flutter", level: 4 },
        { name: "cached_network_image", level: 4 },
        { name: "Dart", level: 4 },
        { name: "HTTP", level: 3 },
        { name: "Provider", level: 3 }
      ],
      links: {
        github: "https://github.com/hanmin-kim/optimized-gallery"
      }
    }
  ];

  const sectionStyle = {
    padding: `${spacing['4xl']} ${spacing.lg}`,
    background: colors.surface.light,
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const containerStyle = {
    maxWidth: spacing.container.xl,
    width: '100%',
  };

  const titleStyle = {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    textAlign: 'center',
    marginBottom: spacing['3xl'],
  };

  const projectsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: spacing['2xl'],
    marginTop: spacing['2xl'],
  };

  const projectSummaryCardStyle = (project) => ({
    background: colors.surface.elevated,
    borderRadius: spacing.card.borderRadius,
    padding: spacing.card.padding,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease-out',
    cursor: 'pointer',
    border: `1px solid ${colors.surface.border}`,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  });

  const cardContentStyle = {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const cardImageStyle = (project) => ({
    fontSize: '4rem',
    textAlign: 'center',
    padding: spacing.lg,
    background: `${project.color}10`,
    marginBottom: spacing.lg,
    borderRadius: spacing.xs,
  });

  const cardTitleStyle = {
    fontFamily: typography.fontFamily.heading,
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.md,
  };

  const cardSummaryStyle = {
    fontFamily: typography.fontFamily.body,
    fontSize: typography.fontSize.base,
    color: colors.text.secondary,
    lineHeight: typography.lineHeight.relaxed,
    marginBottom: spacing.lg,
    flexGrow: 1,
  };

  const newTechBadgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.xs,
    background: `${colors.accent.primary}15`,
    color: colors.accent.primary,
    padding: `${spacing.xs} ${spacing.sm}`,
    borderRadius: '20px',
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    marginBottom: spacing.md,
    alignSelf: 'flex-start',
  };

  const techStackPreviewStyle = {
    marginTop: 'auto',
  };

  const techStackGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
    gap: spacing.sm,
    marginTop: spacing.sm,
  };

  const techItemStyle = (tech, project) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.xs,
    padding: spacing.sm,
    background: colors.neutral.gray50,
    borderRadius: spacing.xs,
    border: `1px solid ${colors.surface.border}`,
  });

  const techNameStyle = {
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.secondary,
    textAlign: 'center',
  };

  const skillBoxesStyle = {
    display: 'flex',
    gap: '2px',
    justifyContent: 'center',
  };

  const skillBoxStyle = (isActive, project) => ({
    width: '8px',
    height: '8px',
    borderRadius: '1px',
    background: isActive ? project.color : colors.neutral.gray200,
    transition: 'all 0.2s ease',
  });

  return (
    <section id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>
          첫발을 내디뎌 완성한 프로젝트들입니다.
        </h2>

        <div style={projectsGridStyle}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={projectSummaryCardStyle(project)}
              onClick={() => openProjectModal(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openProjectModal(project);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`${project.title} 프로젝트 상세 보기`}
            >
              <div style={cardImageStyle(project)}>
                {project.image}
              </div>
              <div style={cardContentStyle}>
                <div>
                  <h3 style={cardTitleStyle}>
                    {project.title}
                  </h3>
                  <p style={cardSummaryStyle}>
                    {project.summary}
                  </p>
                  <div style={newTechBadgeStyle}>
                    <span>✨</span>
                    <span>{project.newTechFocus}</span>
                  </div>
                </div>
                <div style={techStackPreviewStyle}>
                  <div style={techStackGridStyle}>
                    {project.techStack.slice(0, 6).map((tech) => (
                      <div key={tech.name} style={techItemStyle(tech, project)}>
                        <div style={techNameStyle}>
                          {tech.name}
                        </div>
                        <div style={skillBoxesStyle}>
                          {[1, 2, 3, 4, 5].map((level) => (
                            <div
                              key={level}
                              style={skillBoxStyle(level <= tech.level, project)}
                            />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* 반응형 디자인 */
        ${breakpoints.media.maxTablet} {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: ${spacing.xl};
          }
          
          h2 {
            font-size: ${typography.fontSize['2xl']} !important;
          }
        }

        ${breakpoints.media.maxMobile} {
          .projects-grid {
            grid-template-columns: 1fr;
            gap: ${spacing.lg};
          }

          h2 {
            font-size: ${typography.fontSize.xl} !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection; 