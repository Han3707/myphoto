import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import * as S from './ProjectsSection.styles';
import { useOverflow } from '../contexts/OverflowContext';
import { projects } from '../constants/projectData';

// 모달 컴포넌트를 별도로 분리하거나, ProjectsSection 내부에 정의할 수 있습니다.
// 여기서는 설명을 위해 주요 로직만 표시합니다.
const ProjectModalContent = ({ project, activeImageIndex, changeImage, closeModal, color, gradient, type, period, techDetails, images, problem, solution, achievements, role, metrics, techCategories, challenges, links }) => {
  // 이 컴포넌트는 기존 ModalOverlay 내부의 모든 UI와 로직을 포함합니다.
  // props로 필요한 모든 데이터와 함수를 전달받습니다.
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // 추가 이미지가 있는지 확인
  const hasAdditionalImages = project.additionalImages && project.additionalImages.length > 0;
  
  // 표시할 추가 이미지 필터링
  const filteredAdditionalImages = project.additionalImages?.filter(img => 
    activeCategory === 'all' || img.category === activeCategory
  ) || [];

  // 모달 내부에서 마우스 휠 이벤트 처리
  const handleWheel = (e) => {
    // 이벤트가 모달 내부에서 처리되도록 버블링 중지
    e.stopPropagation();
  };

  return (
    <S.ModalOverlay
      onClick={(e) => closeModal(e)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onWheel={handleWheel}
    >
      <S.ModalContent
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
        className="modal-content"
        onWheel={handleWheel}
      >
        <S.ModalHeader>
          <S.ModalProjectInfo>
            <S.ModalIcon $gradient={gradient}>
              {project.image}
            </S.ModalIcon>
            <S.ModalTitleSection>
              <h2>{project.title}</h2>
              <S.ModalSubtitle>{type} • {period}</S.ModalSubtitle>
              <S.TechStackContainer>
                {techDetails.slice(0, 4).map((tech, i) => (
                  <S.TechTag key={i}>
                    {tech.name}
                  </S.TechTag>
                ))}
              </S.TechStackContainer>
            </S.ModalTitleSection>
          </S.ModalProjectInfo>
          <S.CloseButton onClick={(e) => closeModal(e, true)}>&times;</S.CloseButton>
        </S.ModalHeader>

        <S.ModalBodyFixed className="modal-body" onWheel={handleWheel}>
          <S.ImageGallerySection>
            <h3>📱 프로젝트 미리보기</h3>
            <S.ImageGallery>
              <S.MainImageContainer>
                <S.MainImage>
                  <img
                    src={images[activeImageIndex].src}
                    alt={images[activeImageIndex].title}
                  />
                </S.MainImage>
                <S.ImageInfo>
                  <h4>{images[activeImageIndex].title}</h4>
                  <p>{images[activeImageIndex].description}</p>
                </S.ImageInfo>
              </S.MainImageContainer>
              <S.ThumbnailContainer>
                {images.map((image, idx) => (
                  <S.Thumbnail
                    key={idx}
                    onClick={() => changeImage(idx)}
                    $active={activeImageIndex === idx}
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                    />
                    <S.ThumbnailLabel>{image.title}</S.ThumbnailLabel>
                  </S.Thumbnail>
                ))}
              </S.ThumbnailContainer>
            </S.ImageGallery>
            
            {/* 추가 이미지 영역 */}
            {hasAdditionalImages && (
              <S.AdditionalImagesSection>
                <S.ShowMoreButton 
                  onClick={() => setShowAdditionalImages(!showAdditionalImages)}
                >
                  {showAdditionalImages ? '접기' : '+ 더 많은 이미지 보기'}
                </S.ShowMoreButton>
                
                {showAdditionalImages && (
                  <>
                    <S.CategoryFilter>
                      <S.CategoryButton 
                        $active={activeCategory === 'all'}
                        onClick={() => setActiveCategory('all')}
                      >
                        전체
                      </S.CategoryButton>
                      <S.CategoryButton 
                        $active={activeCategory === 'mobile'}
                        onClick={() => setActiveCategory('mobile')}
                      >
                        모바일 앱
                      </S.CategoryButton>
                      <S.CategoryButton 
                        $active={activeCategory === 'admin'}
                        onClick={() => setActiveCategory('admin')}
                      >
                        관리자 페이지
                      </S.CategoryButton>
                    </S.CategoryFilter>
                    
                    <S.AdditionalImagesGrid>
                      {filteredAdditionalImages.map((image, idx) => (
                        <S.AdditionalImageItem key={idx}>
                          <S.AdditionalImage>
                            <img src={image.src} alt={image.title} />
                          </S.AdditionalImage>
                          <S.AdditionalImageInfo>
                            <h4>{image.title}</h4>
                            <p>{image.description}</p>
                            <S.CategoryTag>
                              {image.category === 'mobile' ? '모바일' : '관리자'}
                            </S.CategoryTag>
                          </S.AdditionalImageInfo>
                        </S.AdditionalImageItem>
                      ))}
                    </S.AdditionalImagesGrid>
                  </>
                )}
              </S.AdditionalImagesSection>
            )}
          </S.ImageGallerySection>

          <S.DetailGrid>
            <S.DetailCard className="problem" ref={el => {
              // :has() 선택자를 지원하지 않는 브라우저를 위한 대체 코드
              if (el) setTimeout(() => {
                const pEl = el.querySelector('p');
                if (pEl && pEl.scrollHeight > pEl.clientHeight) {
                  el.classList.add('has-overflow');
                } else {
                  el.classList.remove('has-overflow');
                }
              }, 10);
            }}>
              <h3>🎯 해결하고자 한 문제</h3>
              <p ref={el => {
                if (el) {
                  // 콘텐츠가 넘치는지 확인
                  el.classList.toggle('overflow', el.scrollHeight > el.clientHeight);
                }
              }}>{problem}</p>
            </S.DetailCard>
            <S.DetailCard className="solution" ref={el => {
              // :has() 선택자를 지원하지 않는 브라우저를 위한 대체 코드
              if (el) setTimeout(() => {
                const pEl = el.querySelector('p');
                if (pEl && pEl.scrollHeight > pEl.clientHeight) {
                  el.classList.add('has-overflow');
                } else {
                  el.classList.remove('has-overflow');
                }
              }, 10);
            }}>
              <h3>💡 해결 방안</h3>
              <p ref={el => {
                if (el) {
                  // 콘텐츠가 넘치는지 확인
                  el.classList.toggle('overflow', el.scrollHeight > el.clientHeight);
                }
              }}>{solution}</p>
            </S.DetailCard>
            <S.DetailCard className="result" ref={el => {
              // :has() 선택자를 지원하지 않는 브라우저를 위한 대체 코드
              if (el) setTimeout(() => {
                const pEl = el.querySelector('p');
                if (pEl && pEl.scrollHeight > pEl.clientHeight) {
                  el.classList.add('has-overflow');
                } else {
                  el.classList.remove('has-overflow');
                }
              }, 10);
            }}>
              <h3>📊 달성 결과</h3>
              <p ref={el => {
                if (el) {
                  // 콘텐츠가 넘치는지 확인
                  el.classList.toggle('overflow', el.scrollHeight > el.clientHeight);
                }
              }}>{achievements}</p>
            </S.DetailCard>
            <S.DetailCard className="learning" ref={el => {
              // :has() 선택자를 지원하지 않는 브라우저를 위한 대체 코드
              if (el) setTimeout(() => {
                const pEl = el.querySelector('p');
                if (pEl && pEl.scrollHeight > pEl.clientHeight) {
                  el.classList.add('has-overflow');
                } else {
                  el.classList.remove('has-overflow');
                }
              }, 10);
            }}>
              <h3>🚀 습득한 역량</h3>
              <p ref={el => {
                if (el) {
                  // 콘텐츠가 넘치는지 확인
                  el.classList.toggle('overflow', el.scrollHeight > el.clientHeight);
                }
              }}>{role}</p>
            </S.DetailCard>
          </S.DetailGrid>

          <S.MetricsSection $gradient={gradient}>
            <S.MetricsTitle>📈 주요 성과 지표</S.MetricsTitle>
            <S.MetricsGrid>
              {metrics.map((metric, idx) => (
                <S.MetricItem key={idx}>
                  <S.MetricValue>{metric.value}</S.MetricValue>
                  <S.MetricLabel>{metric.label}</S.MetricLabel>
                </S.MetricItem>
              ))}
            </S.MetricsGrid>
          </S.MetricsSection>

          <S.TechSection>
            <h3>🛠 사용 기술 스택</h3>
            <S.TechCategories>
              {techCategories.map((category, idx) => (
                <S.TechCategory key={idx}>
                  <h4>{category.name}</h4>
                  <S.TechList>
                    {category.techs.map((tech, i) => (
                      <S.TechItem key={i}>{tech}</S.TechItem>
                    ))}
                  </S.TechList>
                </S.TechCategory>
              ))}
            </S.TechCategories>
          </S.TechSection>

          <S.ChallengesSection>
            <h3>⚡ 주요 도전과제와 해결과정</h3>
            {challenges.map((challenge, idx) => (
              <S.ChallengeItem key={idx}>
                <S.ChallengeTitle>{challenge.title}</S.ChallengeTitle>
                <S.ChallengeDescription>
                  <strong>문제:</strong> {challenge.description.split('문제:')[1].split('solution')[0]}
                </S.ChallengeDescription>
                <S.ChallengeSolution>
                  <strong>해결:</strong> {challenge.solution.split('해결:')[1] || challenge.solution}
                </S.ChallengeSolution>
              </S.ChallengeItem>
            ))}
          </S.ChallengesSection>

          <S.ProjectActions>
            {links?.demo && (
              <S.PrimaryButton
                onClick={(e) => {
                  e.preventDefault();
                  window.open(links.demo, '_blank');
                }}
                $color={color}
                $hoverColor={color && color.replace('#', '#') + 'dd'}
              >
                라이브 데모 보기
              </S.PrimaryButton>
            )}
            {links?.github && (
              <S.SecondaryButton
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub 소스코드
              </S.SecondaryButton>
            )}
          </S.ProjectActions>
        </S.ModalBodyFixed>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

const ProjectsSection = () => {
  const { activeSection, openModal: contextOpenModal, closeModal: contextCloseModal } = useOverflow();
  const timelineRef = useRef(null);
  const [drawLine, setDrawLine] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [modalRoot, setModalRoot] = useState(null);

  useEffect(() => {
    setModalRoot(document.getElementById('modal-root'));
  }, []);

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

  const isActive = activeSection === 3;

  const changeImage = (index) => {
    setActiveImageIndex(index);
  };

  const openModalHandler = (project, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedProject(project);
    setActiveImageIndex(0);
    contextOpenModal();
  };

  const closeModalHandler = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedProject(null);
    contextCloseModal();
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeModalHandler(event);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleEscKey);
    }
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject, closeModalHandler]);

  return (
    <S.ProjectsSectionContainer id="projects" ref={timelineRef} $isActive={isActive}>
      <S.SectionHeader>
        <S.HeaderContent>
          <S.SectionTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: drawLine ? 1 : 0, y: drawLine ? 0 : 20 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            <S.TitleText>"처음 걷는 길이라도 한 발 내디디면 </S.TitleText>
            <S.TitleHighlight>트랙이 된다"</S.TitleHighlight>
          </S.SectionTitle>
          <S.SectionSubtitle>
            저의 <strong>주요 프로젝트</strong>입니다.
          </S.SectionSubtitle>
        </S.HeaderContent>
      </S.SectionHeader>

      <S.ProjectsRow>
        <S.ProjectsScrollContainer>
          <S.ProjectsGrid>
            {projects.map((project) => (
              <S.AnimatedProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={drawLine ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <S.ProjectCard
                  onClick={(e) => openModalHandler(project, e)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openModalHandler(project, e);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${project.title} 프로젝트 상세 보기`}
                >
                  <S.ProjectHeader>
                    <S.ProjectIcon $gradient={project.gradient}>
                      {project.image}
                    </S.ProjectIcon>
                    <S.ProjectTypeTag>{project.type}</S.ProjectTypeTag>
                  </S.ProjectHeader>

                  <S.ProjectContent>
                    <S.ProjectContentTop>
                      <S.ProjectTitle>{project.title}</S.ProjectTitle>
                      <S.ProjectPeriod>{project.period}</S.ProjectPeriod>
                      <S.ProjectDescription>{project.summary}</S.ProjectDescription>
                    </S.ProjectContentTop>

                    <S.ProjectContentMiddle>
                      <S.ProjectSections>
                        <S.Section className="contribution" ref={el => {
                          if (el) {
                            setTimeout(() => {
                              const contentEl = el.querySelector('div');
                              if (contentEl && contentEl.scrollHeight > contentEl.clientHeight) {
                                el.classList.add('has-overflow');
                              } else {
                                el.classList.remove('has-overflow');
                              }
                            }, 10);
                          }
                        }}>
                          <S.SectionHeading>
                            <span>🎯</span>
                            <span>문제 정의</span>
                          </S.SectionHeading>
                          <S.SectionContent>{project.problem}</S.SectionContent>
                        </S.Section>

                        <S.Section className="skills" ref={el => {
                          if (el) {
                            setTimeout(() => {
                              const contentEl = el.querySelector('div');
                              if (contentEl && contentEl.scrollHeight > contentEl.clientHeight) {
                                el.classList.add('has-overflow');
                              } else {
                                el.classList.remove('has-overflow');
                              }
                            }, 10);
                          }
                        }}>
                          <S.SectionHeading>
                            <span>💡</span>
                            <span>해결 방법</span>
                          </S.SectionHeading>
                          <S.SectionContent>{project.solution}</S.SectionContent>
                        </S.Section>

                        <S.Section className="achievement" ref={el => {
                          if (el) {
                            setTimeout(() => {
                              const contentEl = el.querySelector('div');
                              if (contentEl && contentEl.scrollHeight > contentEl.clientHeight) {
                                el.classList.add('has-overflow');
                              } else {
                                el.classList.remove('has-overflow');
                              }
                            }, 10);
                          }
                        }}>
                          <S.SectionHeading>
                            <span>🚀</span>
                            <span>성과</span>
                          </S.SectionHeading>
                          <S.SectionContent>{project.achievements}</S.SectionContent>
                        </S.Section>
                      </S.ProjectSections>
                    </S.ProjectContentMiddle>

                    <S.ProjectContentBottom>
                      <S.TechStackContainer>
                        {project.techDetails.slice(0, 3).map((tech, i) => (
                          <S.TechTag key={i}>
                            {tech.name}
                          </S.TechTag>
                        ))}
                        {project.techDetails.length > 3 && (
                          <S.TechTag>+{project.techDetails.length - 3}</S.TechTag>
                        )}
                      </S.TechStackContainer>

                      <S.ProjectActions>
                        <S.PrimaryButton
                          onClick={(e) => openModalHandler(project, e)}
                          $color={project.color}
                          $hoverColor={project.color && project.color.replace('#', '#') + 'dd'}
                        >
                          자세히 보기
                        </S.PrimaryButton>

                        {project.links?.github && (
                          <S.SecondaryButton
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            GitHub
                          </S.SecondaryButton>
                        )}
                      </S.ProjectActions>
                    </S.ProjectContentBottom>
                  </S.ProjectContent>
                </S.ProjectCard>
              </S.AnimatedProjectCard>
            ))}
          </S.ProjectsGrid>
        </S.ProjectsScrollContainer>
      </S.ProjectsRow>

      {/* Modal with Portal */}
      {selectedProject && modalRoot && ReactDOM.createPortal(
        <AnimatePresence>
          <ProjectModalContent
            project={selectedProject}
            activeImageIndex={activeImageIndex}
            changeImage={changeImage}
            closeModal={closeModalHandler}
            {...selectedProject}
          />
        </AnimatePresence>,
        modalRoot
      )}
    </S.ProjectsSectionContainer>
  );
};

export default ProjectsSection;