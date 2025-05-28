import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';
import { useOverflow } from '../contexts/OverflowContext';

// Styled Components with central alignment focus
const ProjectsSectionContainer = styled.section`
  min-height: 100vh;
  background: ${colors.surface.light};
  width: 100%;
  padding: ${spacing['3xl']} ${spacing.md};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: ${props => props.$isActive ? 50 : 2};
  overflow: hidden;
`;

const SectionHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto ${spacing['2xl']};
  width: 100%;
`;

const HeaderContent = styled.div`
  text-align: center;
  margin-bottom: ${spacing['2xl']};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${typography.fontSize['5xl']};
  font-weight: ${typography.fontWeight.black};
  margin-bottom: ${spacing.md};
  line-height: ${typography.lineHeight.tight};
  font-family: ${typography.fontFamily.heading};
  letter-spacing: -0.5px;

  @media ${breakpoints.media.maxTablet} {
    font-size: ${typography.fontSize['4xl']};
  }

  @media ${breakpoints.media.maxMobile} {
    font-size: ${typography.fontSize['3xl']};
  }
`;

const TitleText = styled.span`
  color: #1a1a1a;
`;

const TitleHighlight = styled.span`
  background: linear-gradient(to right, ${colors.accent.primary || '#f43f5e'}, ${colors.accent.secondary || '#ec4899'});
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: ${typography.fontWeight.black};
`;

const SectionSubtitle = styled.p`
  font-size: ${typography.fontSize.xl};
  color: #4b5563;
  max-width: 36rem;
  margin: 0 auto;
  line-height: ${typography.lineHeight.relaxed};
  font-family: ${typography.fontFamily.body};
`;

const ProjectsRow = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const ProjectsScrollContainer = styled.div`
  display: flex;
  gap: ${spacing.xl};
  overflow-x: auto;
  padding-bottom: ${spacing.xl};
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${breakpoints.media.maxTablet} {
    gap: ${spacing.lg};
  }

  @media (min-width: 1600px) {
    justify-content: center;
    padding-left: ${spacing['2xl']};
    padding-right: ${spacing['2xl']};
  }
`;

const ProjectsGrid = styled.div`
  display: flex;
  gap: ${spacing.xl};
  min-width: max-content;

  @media ${breakpoints.media.maxTablet} {
    gap: ${spacing.lg};
  }
`;

const ProjectCard = styled(motion.div)`
  position: relative;
  background: white;
  border-radius: 24px;
  padding: ${spacing.xl};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.neutral.lightest};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 384px;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${props => props.$isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)'};

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }

  @media ${breakpoints.media.maxTablet} {
    width: 360px;
    padding: ${spacing.lg};
  }

  @media ${breakpoints.media.maxMobile} {
    width: 320px;
    padding: ${spacing.md};
  }
`;

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  border-radius: 24px;
  background: ${props => props.$gradient};
  opacity: 0;
  transition: opacity 0.5s ease;
  z-index: 0;
  
  ${ProjectCard}:hover & {
    opacity: 0.1;
  }
`;

const ProjectHeader = styled.div`
  position: relative;
  margin-bottom: ${spacing.lg};
`;

const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacing.md};
`;

const ProjectIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: ${props => props.$gradient};
  transition: transform 0.3s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectTypeTag = styled.span`
  background-color: ${props => props.$projectColor ? `${props.$projectColor}99` : '#f59e0b'};
  color: white;
  font-size: ${typography.fontSize.xs};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: 20px;
  font-weight: ${typography.fontWeight.medium};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
    filter: brightness(1.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.extrabold};
  color: #111827;
  margin-bottom: ${spacing.xs};
  line-height: ${typography.lineHeight.snug};
  font-family: ${typography.fontFamily.heading};
  transition: color 0.3s ease;
  
  ${ProjectCard}:hover & {
    color: #000000;
  }
`;

const ProjectPeriod = styled.p`
  font-size: ${typography.fontSize.sm};
  color: #4b5563;
  margin-bottom: ${spacing.md};
  font-weight: ${typography.fontWeight.medium};
`;

const ProjectSummary = styled.p`
  font-size: ${typography.fontSize.sm};
  color: #374151;
  margin-bottom: ${spacing.lg};
  line-height: ${typography.lineHeight.relaxed};
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  margin-bottom: ${spacing.lg};
`;

const DetailSection = styled.div`
  margin-bottom: ${spacing.xs};
`;

const DetailTitle = styled.h4`
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.bold};
  color: #111827;
  margin-bottom: ${spacing.xs};
  display: flex;
  align-items: center;
  gap: ${spacing.xs};
`;

const DetailContent = styled.p`
  font-size: ${typography.fontSize.xs};
  color: #4b5563;
  line-height: ${typography.lineHeight.relaxed};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.xs};
  margin-bottom: ${spacing.lg};
`;

const TechTag = styled.span`
  background-color: ${props => getTechColor(props.$tech).bg};
  color: ${props => getTechColor(props.$tech).text};
  font-size: ${typography.fontSize.xs};
  padding: ${spacing.xxs} ${spacing.sm};
  border-radius: 20px;
  font-weight: ${typography.fontWeight.medium};
  transition: all 0.3s ease;
  border: 1px solid ${props => getTechColor(props.$tech).border || 'transparent'};
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectActions = styled.div`
  display: flex;
  gap: ${spacing.sm};
  margin-top: auto;
`;

const PrimaryButton = styled.button`
  flex: 1;
  background: ${props => {
    return props.$color || '#4f46e5';
  }};
  color: white;
  padding: ${spacing.md} ${spacing.md};
  border-radius: 16px;
  font-weight: ${typography.fontWeight.semibold};
  font-size: ${typography.fontSize.sm};
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    filter: brightness(1.1);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled.a`
  flex: 1;
  background: #1f2937;
  color: white;
  padding: ${spacing.md} ${spacing.md};
  border-radius: 16px;
  font-weight: ${typography.fontWeight.semibold};
  font-size: ${typography.fontSize.sm};
  border: none;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    background: #111827;
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const HoverDot = styled.div`
  position: absolute;
  top: ${spacing.lg};
  right: ${spacing.lg};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$color};
  transition: all 0.3s ease;
  opacity: ${props => props.$isVisible ? 1 : 0};
  transform: ${props => props.$isVisible ? 'scale(1)' : 'scale(0)'};
`;

const fadeInUpAnimation = `
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
`;

const FadeInUpCard = styled(ProjectCard)`
  animation: ${props => props.$isVisible ? 'fadeInUp 0.8s ease-out forwards' : 'none'};
  animation-delay: ${props => props.$delay}ms;
  opacity: ${props => props.$isVisible ? 1 : 0};
  
  ${fadeInUpAnimation}
`;

// 기술 스택 태그 색상 함수 추가
const getTechColor = (tech) => {
  const techColors = {
    'React': { bg: '#61dafb20', text: '#087ea4', border: '#61dafb' },
    'Flutter': { bg: '#0468d720', text: '#0468d7', border: '#45d1fd' },
    'Dart': { bg: '#0175c220', text: '#0175c2', border: '#0175c2' },
    'JavaScript': { bg: '#f7df1e20', text: '#746e04', border: '#f7df1e' },
    'TypeScript': { bg: '#3178c620', text: '#3178c6', border: '#3178c6' },
    'CSS': { bg: '#264de420', text: '#264de4', border: '#264de4' },
    'BLE': { bg: '#4a9ced20', text: '#0062cc', border: '#4a9ced' },
    'Riverpod': { bg: '#65c9da20', text: '#0e6b77', border: '#65c9da' },
    'Firebase': { bg: '#ffca2820', text: '#f57c00', border: '#ffca28' },
    'ML Kit': { bg: '#4285f420', text: '#0f52c2', border: '#4285f4' },
    'WebSocket': { bg: '#83cd2920', text: '#2c5e1a', border: '#83cd29' },
    'STOMP': { bg: '#5c665920', text: '#2c3436', border: '#5c6659' },
    'GoRouter': { bg: '#00add820', text: '#00718e', border: '#00add8' },
    'OAuth': { bg: '#ea4aaa20', text: '#a4226e', border: '#ea4aaa' },
    'Framer Motion': { bg: '#6c02a720', text: '#6c02a7', border: '#6c02a7' },
    'Vite': { bg: '#646cff20', text: '#4c51c7', border: '#646cff' },
  };

  return techColors[tech] || { bg: '#f3f4f6', text: '#374151', border: '#e5e7eb' };
};

const ProjectsSection = ({ openProjectModal }) => {
  const { activeSection } = useOverflow();
  const timelineRef = useRef(null);
  const [drawLine, setDrawLine] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawLine(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = timelineRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  // Project data
  const projects = [
    {
      id: 1,
      title: "BLE 메쉬 통신 랜턴",
      period: "2024.07 - 현재",
      type: "Team Project",
      summary: "블루투스 메쉬 네트워크를 활용한 오프라인 통신 랜턴 앱입니다. 와이파이나 셀룰러 네트워크 없이도 BLE MESH망을 이용해 메시지를 주고받을 수 있습니다.",
      role: "프론트엔드 개발 & UI/UX 디자인",
      problem: "재난 상황에서 인터넷 연결 없이 통신할 수 있는 솔루션의 필요성.",
      solution: "BLE Mesh 네트워크를 활용하여 분산형 메시징 시스템을 구축했습니다. Flutter로 직관적인 UI를 설계하고, 메시지 전달 신뢰성을 높이기 위한 큐 시스템을 구현했습니다.",
      achievements: "BLE 패킷 손실률 30%에서 5%로 감소, 최대 8개 노드에서 안정적인 메시지 전달 구현",
      color: "#ff6b7a",
      gradient: "linear-gradient(135deg, #ff6b7a 0%, #ff8a9b 100%)",
      links: {
        github: "https://github.com/username/ble-lantern",
        demo: "https://ble-lantern-demo.vercel.app"
      },
      image: "🏮",
      techDetails: [
        { name: "Flutter", level: 5 },
        { name: "Dart", level: 5 },
        { name: "BLE", level: 4 },
        { name: "Riverpod", level: 4 },
        { name: "Firebase", level: 3 },
        { name: "ML Kit", level: 3 }
      ],
      challenge: "인터넷 연결 없이도 사용자들이 서로 통신할 수 있는 견고한 메시징 시스템을 구축하는 것이 가장 큰 도전이었습니다."
    },
    {
      id: 2,
      title: "실시간 크라우드 펀딩 플랫폼",
      period: "2024.01 - 2024.03",
      type: "Team Project",
      summary: "WebSocket을 활용한 실시간 크라우드 펀딩 플랫폼입니다. 사용자들은 프로젝트를 생성하고 실시간으로 펀딩 상태를 확인할 수 있습니다.",
      role: "프론트엔드 개발 (Flutter)",
      problem: "기존 펀딩 플랫폼의 실시간성 부재와 모바일 환경 최적화 미흡.",
      solution: "Flutter와 WebSocket을 사용하여 실시간 업데이트를 구현했으며, 네트워크 불안정 상황에서도 안정적인 연결을 유지하기 위한 재연결 메커니즘을 구현했습니다.",
      achievements: "앱 충돌률 90% 감소, 페이지 로딩 속도 60% 향상, 실시간 채팅 및 펀딩 업데이트 구현",
      color: "#4ecdc4",
      gradient: "linear-gradient(135deg, #4ecdc4 0%, #6ee5dc 100%)",
      links: {
        github: "https://github.com/username/realtime-funding",
        demo: "https://realtime-funding-demo.vercel.app"
      },
      image: "💰",
      techDetails: [
        { name: "Flutter", level: 5 },
        { name: "WebSocket", level: 4 },
        { name: "STOMP", level: 4 },
        { name: "GoRouter", level: 3 },
        { name: "OAuth", level: 3 }
      ],
      challenge: "실시간 데이터 동기화와 네트워크 불안정 상황에서의 견고한 연결 유지가 주요 과제였습니다."
    },
    {
      id: 3,
      title: "포트폴리오 웹사이트",
      period: "2023.12 - 2024.01",
      type: "Personal Project",
      summary: "React와 다양한 애니메이션 효과를 활용한 개인 포트폴리오 웹사이트입니다.",
      role: "디자인 & 개발",
      problem: "기존 템플릿 기반 포트폴리오의 차별성 부재와 사용자 경험 개선 필요.",
      solution: "React와 Framer Motion을 활용하여 인터랙티브한 애니메이션을 구현했으며, 모바일 환경에서도 최적화된 사용자 경험을 제공합니다.",
      achievements: "성능 최적화 (Lighthouse 점수 95+), 사용자 정의 애니메이션 구현, 반응형 디자인",
      color: "#8b5cf6",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
      links: {
        github: "https://github.com/username/portfolio",
        demo: "https://portfolio-demo.vercel.app"
      },
      image: "💼",
      techDetails: [
        { name: "React", level: 5 },
        { name: "Framer Motion", level: 4 },
        { name: "CSS/SCSS", level: 4 },
        { name: "Vite", level: 3 }
      ],
      challenge: "방문자들의 관심을 끌 수 있는 독특하면서도 성능이 최적화된 포트폴리오 사이트를 만드는 것이 목표였습니다."
    }
  ];

  const isActive = activeSection === 3;

  return (
    <ProjectsSectionContainer id="projects" ref={timelineRef} $isActive={isActive}>
      <SectionHeader>
        <HeaderContent>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: drawLine ? 1 : 0, y: drawLine ? 0 : 20 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <TitleText>"처음 걷는 길이라도 한 발 내디디면 </TitleText>
            <TitleHighlight>트랙이 된다"</TitleHighlight>
          </SectionTitle>
          <SectionSubtitle>
            저의 주요 프로젝트입니다.
          </SectionSubtitle>
        </HeaderContent>
      </SectionHeader>

      <ProjectsRow>
        <ProjectsScrollContainer>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <FadeInUpCard
                key={project.id}
                $isVisible={drawLine}
                $delay={index * 200}
                $isHovered={hoveredProject === project.id}
                onClick={() => openProjectModal(project)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                role="button"
                tabIndex={0}
                aria-label={`${project.title} 프로젝트 상세 보기`}
              >
                <GradientBackground $gradient={project.gradient} />

                <ProjectHeader>
                  <HeaderRow>
                    <ProjectIcon $gradient={project.gradient}>
                      {project.image}
                    </ProjectIcon>
                    <ProjectTypeTag $type={project.type} $projectColor={project.color}>
                      {project.type}
                    </ProjectTypeTag>
                  </HeaderRow>

                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectPeriod>{project.period}</ProjectPeriod>
                  <ProjectSummary>{project.summary}</ProjectSummary>
                </ProjectHeader>

                <ProjectDetailsContainer>
                  <DetailSection>
                    <DetailTitle>🎯 문제 정의</DetailTitle>
                    <DetailContent>{project.problem}</DetailContent>
                  </DetailSection>

                  <DetailSection>
                    <DetailTitle>💡 해결 방법</DetailTitle>
                    <DetailContent>{project.solution}</DetailContent>
                  </DetailSection>

                  <DetailSection>
                    <DetailTitle>🚀 성과</DetailTitle>
                    <DetailContent>{project.achievements}</DetailContent>
                  </DetailSection>
                </ProjectDetailsContainer>

                <TechStackContainer>
                  {project.techDetails.slice(0, 3).map((tech, i) => (
                    <TechTag key={i} $tech={tech.name}>
                      {tech.name}
                    </TechTag>
                  ))}
                  {project.techDetails.length > 3 && (
                    <TechTag>+{project.techDetails.length - 3}</TechTag>
                  )}
                </TechStackContainer>

                <ProjectActions>
                  <PrimaryButton
                    onClick={(e) => {
                      e.stopPropagation();
                      openProjectModal(project);
                    }}
                    $color={project.color}
                  >
                    자세히 보기
                  </PrimaryButton>

                  {project.links?.github && (
                    <SecondaryButton
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </SecondaryButton>
                  )}
                </ProjectActions>

                <HoverDot
                  $color={project.color}
                  $isVisible={hoveredProject === project.id}
                />
              </FadeInUpCard>
            ))}
          </ProjectsGrid>
        </ProjectsScrollContainer>
      </ProjectsRow>
    </ProjectsSectionContainer>
  );
};

export default ProjectsSection;