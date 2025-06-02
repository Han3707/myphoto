import React, { useState, useEffect, useRef } from 'react';
import * as S from './SkillsSection.styles';
import { useOverflow } from '../contexts/OverflowContext';

const SkillsSection = () => {
  const { activeSection } = useOverflow();
  const observerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const animationRef = useRef(null);
  const scrollPositionRef = useRef(0);
  const scrollDirectionRef = useRef(1); // 1: 오른쪽, -1: 왼쪽
  const [activeCategory, setActiveCategory] = useState('languages'); // 기본값: 프로그래밍 언어
  const [isManualCategoryChange, setIsManualCategoryChange] = useState(false);
  const autoChangeTimerRef = useRef(null);

  // 스킬 카테고리 데이터
  const skillCategories = [
    {
      id: 'languages',
      title: '프로그래밍 언어',
      color: '#FF6B6B',
      skills: [
        {
          name: 'JavaScript(ES 6+)',
          rating: 4,
          description: [
            '비동기 처리(fetch/Promise)·모듈 시스템·클린 코드 패턴을 적용해 공통 유틸 제작'
          ]
        },
        {
          name: 'Dart',
          rating: 4,
          description: [
            'Flutter 앱 개발을 위한 Dart 언어 능숙한 활용',
            '비동기 프로그래밍 및 스트림 처리 구현'
          ]
        },
        {
          name: 'HTML 5',
          rating: 4,
          description: [
            '시맨틱 마크업·WAI-ARIA 적용',
            'Flutter Web 뷰·React SEO 태그로 접근성/검색성 고려'
          ]
        },
        {
          name: 'CSS 3 / SCSS',
          rating: 3,
          description: [
            'Flex·Grid·Animation으로 반응형 구성',
            '디자인 시스템 토큰(Figma) 매칭'
          ]
        },
        {
          name: 'TypeScript',
          rating: 4,
          description: [
            '타입 안정성을 갖춘 개발 환경 구축',
            '인터페이스와 타입 정의로 코드 품질 향상'
          ]
        }
      ]
    },
    {
      id: 'frameworks',
      title: '프레임워크',
      color: '#4C6EF5', // 색상 변경 (더 선명한 블루)
      skills: [
        {
          name: 'Flutter',
          rating: 4,
          description: [
            'Riverpod·GoRouter로 모듈화',
            'WebSocket(STOMP)·OAuth 연동',
            'cached_network_image로 이미지 캐싱 최적화',
            'BLE Mesh 실험까지 모바일 2종 프로젝트 전체 화면 구현'
          ]
        },
        {
          name: 'React (+ Vite)',
          rating: 4,
          description: [
            '상태 관리(Zustand)·폼(react-hook-form)·차트(Recharts) 활용',
            '판매자 관리 SPA 전 페이지 디자인 & 개발'
          ]
        },
        {
          name: 'Kotlin (Android)',
          rating: 3,
          description: [
            'BLE Mesh 채팅 – 큐 시스템으로 패킷 손실 30%→5% ↓',
            'Activity-Service 구조 이해',
            'Jetpack Compose 활용'
          ]
        }
      ]
    },
    {
      id: 'tools',
      title: '도구 & 기술',
      color: '#38B2AC', // 색상 변경 (더 선명한 틸)
      skills: [
        {
          name: 'WebSocket / STOMP',
          rating: 3,
          description: [
            '실시간 펀딩 금액·채팅 구현',
            '재연결 로직(최대 5회)로 신뢰성 확보'
          ]
        },
        {
          name: 'OAuth 2.0 / JWT',
          rating: 3,
          description: [
            'Google OAuth 토큰 → 백엔드 JWT 교환 패턴 설계',
            'flutter_secure_storage 암호화'
          ]
        },
        {
          name: 'Git / GitLab & Jira',
          rating: 4,
          description: [
            'Git Flow·CI 파이프라인 구성',
            '1주 스프린트+데일리 스크럼 운영'
          ]
        },
        {
          name: 'Figma',
          rating: 4,
          description: [
            '3번의 프로젝트 전체 UX 및 UI 키트 단독 제작'
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    // 스크롤 애니메이션
    const observerOptions = {
      threshold: 0.05,
      rootMargin: '0px 0px -30px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    observerRef.current = observer;

    // 카드 애니메이션 초기화
    document.querySelectorAll('.skill-category').forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(40px)';
      card.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
      observer.observe(card);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // 자동 스크롤 애니메이션
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let lastTimestamp = 0;
    const scrollSpeed = 1.2; // 스크롤 속도 조정 (낮출수록 느림)

    const autoScroll = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (isHovering || isDragging) {
        animationRef.current = requestAnimationFrame(autoScroll);
        return;
      }

      const maxScroll = container.scrollWidth - container.clientWidth;

      // 방향 전환 체크 (부드럽게 전환)
      if (scrollPositionRef.current >= maxScroll - 2) {
        scrollDirectionRef.current = -1; // 왼쪽으로 스크롤
      } else if (scrollPositionRef.current <= 2) {
        scrollDirectionRef.current = 1; // 오른쪽으로 스크롤
      }

      // 스크롤 위치 업데이트 (시간 기반 애니메이션)
      scrollPositionRef.current += scrollDirectionRef.current * (elapsed * 0.05 * scrollSpeed);
      container.scrollLeft = scrollPositionRef.current;

      animationRef.current = requestAnimationFrame(autoScroll);
    };

    // 애니메이션 시작
    animationRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, isDragging]);

  // 드래그 스크롤 기능 구현
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    scrollContainerRef.current.style.cursor = 'grab';
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // 스크롤 속도 조절
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
  };

  // 터치 이벤트 처리 (모바일)
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    scrollPositionRef.current = scrollContainerRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // 마우스 호버 시 자동 스크롤 일시정지
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isDragging) {
      handleMouseUp();
    }
  };

  // 스크롤 버튼 기능
  const scrollTo = (direction) => {
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8; // 80% 너비만큼 스크롤
    const newPosition = direction === 'right'
      ? container.scrollLeft + scrollAmount
      : container.scrollLeft - scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });

    scrollPositionRef.current = newPosition;
  };

  // 특정 카테고리로 스크롤
  const scrollToCategory = (categoryId) => {
    setActiveCategory(categoryId); // active 상태 업데이트
    
    // requestAnimationFrame을 사용하여 렌더링 후 DOM 접근을 보장
    requestAnimationFrame(() => {
      const element = document.getElementById(categoryId);
      if (element) {
        const container = scrollContainerRef.current;
        // 컨테이너의 시작점에서 요소의 위치 계산
        const containerRect = container.getBoundingClientRect();
        const elementRect = element.getBoundingClientRect();
        const relativeOffset = elementRect.left - containerRect.left + container.scrollLeft;
        
        // 컨테이너 가운데로 요소 위치 조정 (가운데 정렬)
        const centerPosition = relativeOffset - (containerRect.width / 2) + (elementRect.width / 2);
        
        container.scrollTo({
          left: Math.max(0, centerPosition),
          behavior: 'smooth'
        });
        
        scrollPositionRef.current = Math.max(0, centerPosition);
        
        // 자동 스크롤 일시 중지
        setIsHovering(true);
        
        // 2초 후 자동 스크롤 재개
        setTimeout(() => {
          setIsHovering(false);
        }, 2000);
      }
    });
  };

  // 섹션이 스킬 섹션이면 z-index 값을 높게 설정
  const isActive = activeSection === 1;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else {
        stars.push(<span key={i} className="star">☆</span>);
      }
    }
    return stars;
  };

  // 자동 카테고리 변경을 위한 useEffect
  useEffect(() => {
    // 현재 섹션이 활성화되어 있고, 수동 변경이 없을 때만 자동 변경
    if (isActive && !isManualCategoryChange) {
      const categoryIds = skillCategories.map(category => category.id);
      const currentIndex = categoryIds.indexOf(activeCategory);
      
      // 자동 카테고리 변경 함수
      const autoChangeCategory = () => {
        const nextIndex = (currentIndex + 1) % categoryIds.length;
        setActiveCategory(categoryIds[nextIndex]);
        scrollToCategory(categoryIds[nextIndex]);
      };
      
      // 5초마다 카테고리 변경
      autoChangeTimerRef.current = setTimeout(autoChangeCategory, 5000);
      
      return () => {
        if (autoChangeTimerRef.current) {
          clearTimeout(autoChangeTimerRef.current);
        }
      };
    }
  }, [activeCategory, isActive, isManualCategoryChange, skillCategories]);

  // 사용자가 수동으로 카테고리를 변경할 때 자동 변경 일시 중지
  const handleCategoryClick = (categoryId) => {
    // 자동 변경 타이머 취소
    if (autoChangeTimerRef.current) {
      clearTimeout(autoChangeTimerRef.current);
    }
    
    setActiveCategory(categoryId);
    setIsManualCategoryChange(true);
    scrollToCategory(categoryId);
    
    // 10초 후에 자동 변경 다시 활성화
    setTimeout(() => {
      setIsManualCategoryChange(false);
    }, 10000);
  };

  return (
    <S.SkillsSectionContainer id="skills" $isActive={isActive}>
      <S.ContentContainer>
        <S.SectionHeader>
          <S.HeaderContent>
            <S.SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
              <S.TitleText>끊임없이 </S.TitleText>
              <S.TitleHighlight>성장하는 개발 역량</S.TitleHighlight>
            </S.SectionTitle>
            <S.SectionSubtitle>
              다양한 기술 스택으로 문제를 해결합니다
            </S.SectionSubtitle>
          </S.HeaderContent>
        </S.SectionHeader>

        <S.CategoryNav>
          {skillCategories.map(category => (
            <S.CategoryNavButton
              key={category.id}
              $isActive={activeCategory === category.id}
              $borderColor={category.color}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.title}
            </S.CategoryNavButton>
          ))}
        </S.CategoryNav>

        <S.ScrollControls>
          <S.ScrollButton className="scroll-left" onClick={() => scrollTo('left')}>
            ◀
          </S.ScrollButton>
          <S.SkillsScrollContainer
            ref={scrollContainerRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <S.SkillsGrid>
              {skillCategories.map((category) => (
                <S.SkillCategoryGroup key={category.id} id={category.id}>
                  <S.CategoryGroupTitle $color={category.color}>
                    {category.title}
                  </S.CategoryGroupTitle>
                  <S.CategorySkills>
                    {category.skills.map((skill, index) => (
                      <S.SkillCategory
                        key={`${category.id}-${index}`}
                        className="skill-category"
                        $categoryColor={category.color}
                      >
                        <S.CategoryTitle>{skill.name}</S.CategoryTitle>
                        <S.SkillRating $color={category.color}>
                          {renderStars(skill.rating)}
                        </S.SkillRating>
                        <S.SkillDescription>
                          <ul>
                            {skill.description.map((desc, i) => (
                              <li key={i}>{desc}</li>
                            ))}
                          </ul>
                        </S.SkillDescription>
                      </S.SkillCategory>
                    ))}
                  </S.CategorySkills>
                </S.SkillCategoryGroup>
              ))}
            </S.SkillsGrid>
          </S.SkillsScrollContainer>
          <S.ScrollButton className="scroll-right" onClick={() => scrollTo('right')}>
            ▶
          </S.ScrollButton>
        </S.ScrollControls>
        
        <S.ScrollHint>
          <S.HintIcon>↔️</S.HintIcon>
          가로로 스크롤하여 더 많은 기술을 확인하세요
        </S.ScrollHint>
      </S.ContentContainer>
    </S.SkillsSectionContainer>
  );
};

export default SkillsSection; 