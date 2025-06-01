import React, { useState, useEffect, useRef } from 'react';
import * as S from './ExperienceSection.styles';
import { useOverflow } from '../contexts/OverflowContext';

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
    <S.ExperienceSectionContainer ref={experiencesRef} $isActive={isActive}>
      <S.ContentContainer>
        <S.SectionHeader>
          <S.SectionTitle
            initial={{ opacity: 0 }}
            animate={{ opacity: drawLine ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            학습과정
          </S.SectionTitle>
        </S.SectionHeader>

        <S.CareerGrid>
          {experiences.map((experience, index) => (
            <S.CareerCard
              key={experience.id}
              $current={experience.isCurrent}
              initial={{ opacity: 0, y: 30 }}
              animate={drawLine ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {experience.isCurrent ? (
                <S.CurrentBadge>현재</S.CurrentBadge>
              ) : (
                <S.Duration>{experience.duration}</S.Duration>
              )}

              <S.Period $current={experience.isCurrent}>{experience.period}</S.Period>

              <S.Company>
                {experience.company}
                {experience.companySubtext && (
                  <S.CompanySubtext>{experience.companySubtext}</S.CompanySubtext>
                )}
              </S.Company>

              <S.Position>{experience.position}</S.Position>

              <S.Description>{experience.description}</S.Description>

              {experience.achievements.map((achievement, i) => (
                <S.Achievement key={i} $current={experience.isCurrent}>
                  {achievement}
                </S.Achievement>
              ))}

              <S.SkillsContainer>
                {/* 첫 번째 줄 - 고정된 수의 스킬 + 더보기 버튼 */}
                <S.FirstLineContainer>
                  {experience.skills.slice(0, initialSkillCount).map((skill, i) => (
                    <S.SkillTag key={i} onClick={handleSkillTagClick}>
                      {skill}
                    </S.SkillTag>
                  ))}

                  {/* 스킬이 초기 표시 개수보다 많을 경우 더보기 버튼 표시 */}
                  {experience.skills.length > initialSkillCount && (
                    <S.ShowMoreButton onClick={() => toggleSkills(experience.id)}>
                      {expandedSkills[experience.id] ? '접기' : `+${experience.skills.length - initialSkillCount}`}
                    </S.ShowMoreButton>
                  )}
                </S.FirstLineContainer>

                {/* 확장된 경우에만 나머지 스킬 표시 */}
                {expandedSkills[experience.id] && (
                  <S.RestOfSkillsContainer>
                    {experience.skills.slice(initialSkillCount).map((skill, i) => (
                      <S.SkillTag key={i} onClick={handleSkillTagClick}>
                        {skill}
                      </S.SkillTag>
                    ))}
                  </S.RestOfSkillsContainer>
                )}
              </S.SkillsContainer>
            </S.CareerCard>
          ))}
        </S.CareerGrid>
      </S.ContentContainer>
    </S.ExperienceSectionContainer>
  );
};

export default ExperienceSection; 