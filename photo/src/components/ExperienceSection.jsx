import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { colors } from '../constants/colors';
import { useOverflow } from '../contexts/OverflowContext';

// Styled Components
const ExperienceContainer = styled.section`
  padding: 60px 20px;
  background: ${colors.surface.light || '#f5f5f5'};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: ${props => props.$isActive ? 50 : 2};
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

const ExperienceHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const ExperienceTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${colors.text.onLight || '#333'};
  margin-bottom: 16px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const ExperienceSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${colors.text.body || '#666'};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const CareerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const CareerCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #eee;
  position: relative;
  overflow: hidden;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$current ? '#ff4444' : '#000'};
  }
  
  @media (max-width: 768px) {
    padding: 30px 20px;
    min-height: auto;
  }
`;

const Period = styled.div`
  display: inline-block;
  background: ${props => props.$current ? '#ff4444' : '#f8f8f8'};
  color: ${props => props.$current ? 'white' : '#333'};
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
  border: ${props => props.$current ? 'none' : '1px solid #e0e0e0'};
  width: fit-content;
`;

const Company = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 8px;
  line-height: 1.3;
`;

const CompanySubtext = styled.small`
  font-size: 14px;
  color: #666;
  font-weight: 400;
  display: block;
  margin-top: 4px;
`;

const Position = styled.div`
  font-size: 16px;
  color: #666;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Description = styled.div`
  color: #555;
  line-height: 1.7;
  font-size: 15px;
  margin-bottom: 25px;
  flex-grow: 1;
`;

const Achievement = styled.div`
  background: #f8f9fa;
  border-left: 3px solid ${props => props.$current ? '#ff4444' : '#000'};
  padding: 12px 16px;
  margin: 15px 0;
  border-radius: 0 8px 8px 0;
  font-size: 14px;
  color: #555;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const SkillTag = styled.span`
  background: #000;
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
  
  &:hover {
    background: #333;
    transform: scale(1.05);
  }
`;

const ShowMoreButton = styled.span`
  background: #ff4444;
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #e03131;
    transform: scale(1.05);
  }
`;

// 스킬 태그들을 한 줄에 표시하기 위한 스타일 컴포넌트
const FirstLineContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: hidden;
  margin-bottom: 8px;
  width: 100%;
`;

// 나머지 스킬 태그들을 표시하기 위한 스타일 컴포넌트
const RestOfSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
`;

const CurrentBadge = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ff4444;
  color: white;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  animation: pulse 2s infinite;
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const Duration = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  background: #f0f0f0;
  color: #666;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
`;

const ExperienceSection = () => {
  const { activeSection } = useOverflow();
  const experiencesRef = useRef(null);
  const [drawLine, setDrawLine] = useState(false);
  const [expandedSkills, setExpandedSkills] = useState({});

  // Toggle expanded skills for a specific experience
  const toggleSkills = (experienceId) => {
    setExpandedSkills(prev => ({
      ...prev,
      [experienceId]: !prev[experienceId]
    }));
  };

  // 교차 관찰자로 애니메이션 트리거
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

    const currentRef = experiencesRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  // 스킬 태그 클릭 효과
  const handleSkillTagClick = (e) => {
    e.target.style.background = '#ff4444';
    setTimeout(() => {
      e.target.style.background = '#000';
    }, 200);
  };

  const experiences = [
    {
      id: 1,
      company: "개인 학습 & 프로젝트",
      companySubtext: "",
      position: "프론트엔드 개발자",
      period: "2025.06 ~ 현재",
      duration: "현재",
      isCurrent: true,
      description: "SSAFY 교육과정 수료 후 실무 역량 강화를 위한 지속적인 학습과 개인 프로젝트를 진행하고 있습니다. 최신 프론트엔드 기술 스택을 활용한 포트폴리오 구축과 실무 경험 축적에 집중하고 있습니다.",
      achievements: [
        "💡 React, TypeScript 기반 개인 프로젝트 진행 중"
      ],
      // 중요한 기술 스택을 앞에 배치
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Redux", "Tailwind CSS", "Styled-Components", "GraphQL", "Jest", "Webpack", "개인 프로젝트"]
    },
    {
      id: 2,
      company: "SSAFY",
      companySubtext: "Samsung Software Academy For Youth",
      position: "교육생 / 프론트엔드 전공",
      period: "2024.07 ~ 2025.06",
      duration: "11개월",
      isCurrent: false,
      description: "삼성 청년 SW 아카데미에서 체계적인 소프트웨어 개발 교육을 받았습니다. 알고리즘, 자료구조부터 웹 개발 전반에 걸친 실무 중심의 커리큘럼을 통해 견고한 개발 기초를 다지고 팀 프로젝트를 통한 협업 경험을 쌓았습니다.",
      achievements: [
        "🏆 프론트엔드 리더로 3회 프로젝트 경험",
        "💻 사용자 친화적인 UI/UX 설계와 구현"
      ],
      // 중요한 기술 스택을 앞에 배치
      skills: ["JavaScript", "Vue.js", "Spring Boot", "MySQL", "Git", "React", "Node.js", "Express", "Bootstrap", "Figma", "Docker", "팀 프로젝트"]
    }
  ];

  // 섹션이 활성화되면 z-index 값을 높게 설정
  const isActive = activeSection === 2;

  // 초기에 보여줄 스킬 갯수
  const initialSkillCount = 4; // 첫 줄에 나타낼 기술 스택 수 (+ 버튼 포함하여 5개)

  return (
    <ExperienceContainer ref={experiencesRef} $isActive={isActive}>
      <ContentContainer>
        <ExperienceHeader>
          <ExperienceTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: drawLine ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            Career
          </ExperienceTitle>
          <ExperienceSubtitle>
            새로운 도전을 통해 성장해온 여정
          </ExperienceSubtitle>
        </ExperienceHeader>

        <CareerGrid>
          {experiences.map((experience, index) => (
            <CareerCard
              key={experience.id}
              $current={experience.isCurrent}
              initial={{ opacity: 0, y: 30 }}
              animate={drawLine ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {experience.isCurrent ? (
                <CurrentBadge>현재</CurrentBadge>
              ) : (
                <Duration>{experience.duration}</Duration>
              )}

              <Period $current={experience.isCurrent}>{experience.period}</Period>

              <Company>
                {experience.company}
                {experience.companySubtext && (
                  <CompanySubtext>{experience.companySubtext}</CompanySubtext>
                )}
              </Company>

              <Position>{experience.position}</Position>

              <Description>{experience.description}</Description>

              {experience.achievements.map((achievement, i) => (
                <Achievement key={i} $current={experience.isCurrent}>
                  {achievement}
                </Achievement>
              ))}

              <SkillsContainer>
                {/* 첫 번째 줄 - 고정된 수의 스킬 + 더보기 버튼 */}
                <FirstLineContainer>
                  {experience.skills.slice(0, initialSkillCount).map((skill, i) => (
                    <SkillTag key={i} onClick={handleSkillTagClick}>
                      {skill}
                    </SkillTag>
                  ))}

                  {/* 스킬이 초기 표시 개수보다 많을 경우 더보기 버튼 표시 */}
                  {experience.skills.length > initialSkillCount && (
                    <ShowMoreButton onClick={() => toggleSkills(experience.id)}>
                      {expandedSkills[experience.id] ? '접기' : `+${experience.skills.length - initialSkillCount}`}
                    </ShowMoreButton>
                  )}
                </FirstLineContainer>

                {/* 확장된 경우에만 나머지 스킬 표시 */}
                {expandedSkills[experience.id] && (
                  <RestOfSkillsContainer>
                    {experience.skills.slice(initialSkillCount).map((skill, i) => (
                      <SkillTag key={i} onClick={handleSkillTagClick}>
                        {skill}
                      </SkillTag>
                    ))}
                  </RestOfSkillsContainer>
                )}
              </SkillsContainer>
            </CareerCard>
          ))}
        </CareerGrid>
      </ContentContainer>
    </ExperienceContainer>
  );
};

export default ExperienceSection; 