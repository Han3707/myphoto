import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

// 아래에 ProjectsSection.jsx의 모든 styled-components 정의를 복사/이동

export const ProjectsSectionContainer = styled.section`
  height: 100vh;
  background: ${colors.surface.light};
  width: 100%;
  padding: ${spacing['2xl']} ${spacing.md} ${spacing['3xl']} ${spacing.md};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: ${props => props.$isActive ? 50 : 2};
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  
  @media ${breakpoints.media.maxMobile} {
    padding: ${spacing.xl} ${spacing.md} ${spacing['2xl']} ${spacing.md};
  }
`;

export const SectionHeader = styled.div`
  max-width: 1600px;
  margin: 0 auto ${spacing.xl};
  width: 100%;
  padding-top: ${spacing.md};
`;

export const HeaderContent = styled.div`
  text-align: center;
  margin-bottom: ${spacing.md};
`;

export const SectionTitle = styled(motion.h2)`
  font-size: ${typography.fontSize['5xl']};
  font-weight: ${typography.fontWeight.black};
  margin-bottom: ${spacing.sm};
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

export const TitleText = styled.span`
  color: #1a1a1a;
`;

export const TitleHighlight = styled.span`
  background: linear-gradient(to right, ${colors.accent.primary || '#f43f5e'}, ${colors.accent.secondary || '#ec4899'});
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: ${typography.fontWeight.black};
`;

export const SectionSubtitle = styled.p`
  font-size: ${typography.fontSize['2xl']};
  color: ${colors.accent.primary || '#f43f5e'};
  max-width: 36rem;
  margin: ${spacing.sm} auto 0;
  line-height: ${typography.lineHeight.relaxed};
  font-family: ${typography.fontFamily.body};
  font-weight: ${typography.fontWeight.semibold};
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  
  strong {
    color: #1a1a1a;
    font-weight: ${typography.fontWeight.bold};
    border-bottom: 2px solid ${colors.accent.primary || '#f43f5e'};
    padding-bottom: 2px;
  }
`;

export const ProjectsRow = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const ProjectsScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding: ${spacing.md} 0 ${spacing.xl};
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${breakpoints.media.maxTablet} {
    padding-bottom: ${spacing.lg};
    justify-content: flex-start;
  }

  @media (min-width: 1600px) {
    justify-content: center;
    padding-left: ${spacing.lg};
    padding-right: ${spacing.lg};
  }
`;

export const ProjectsGrid = styled.div`
  display: flex;
  gap: ${spacing.md};
  align-items: stretch;
  height: auto;
  width: auto;
  max-width: 1600px;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: nowrap;
  
  @media (min-width: 1200px) {
    width: auto;
  }
  
  @media (max-width: 1199px) {
    width: max-content;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }

  @media ${breakpoints.media.maxTablet} {
    gap: ${spacing.sm};
  }
`;

export const AnimatedProjectCard = styled(motion.div)`
  display: flex;
  height: auto;
  min-height: 600px;
  max-height: 670px;
  width: 450px;
  margin: 0 ${spacing.sm} ${spacing.md} ${spacing.sm};
  flex-shrink: 0;
  
  @media ${breakpoints.media.maxTablet} {
    width: 400px;
    min-height: 580px;
  }

  @media ${breakpoints.media.maxMobile} {
    width: 340px;
    min-height: 560px;
  }
`;

// Updated Project Card based on new design
export const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  width: 100%;
  height: auto;
  min-height: 100%;
  overflow: visible;
  cursor: pointer;
  transition: transform 0.2s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 22px 22px 12px;
  gap: 10px;
`;

export const ProjectIcon = styled.div`
  width: 46px;
  height: 46px;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
  flex-shrink: 0;
`;

export const ProjectTypeTag = styled.span`
  background: #e8f4fd;
  color: #1976d2;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  display: inline-block;
`;

export const ProjectContent = styled.div`
  padding: 0 22px 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  overflow: visible;
`;

export const ProjectContentTop = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  height: auto;
  min-height: 110px;
  flex: 0 0 auto;
  width: 100%;
`;

export const ProjectContentMiddle = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 8px 0;
  min-height: 330px;
`;

export const ProjectContentBottom = styled.div`
  flex-shrink: 0;
  margin-top: auto;
`;

export const ProjectTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 6px;
  overflow: visible;
  text-overflow: initial;
  display: block;
  -webkit-line-clamp: initial;
  -webkit-box-orient: initial;
  width: 100%;
  flex-shrink: 0;
  word-wrap: break-word;
  min-height: 38px;
  word-break: normal;
  white-space: normal;
  line-height: 1.3;
`;

export const ProjectPeriod = styled.p`
  color: #666;
  font-size: 13px;
  margin-bottom: 6px;
`;

export const ProjectDescription = styled.p`
  color: #444;
  font-size: 13px;
  line-height: 1.4;
  margin-bottom: 10px;
  overflow: visible;
  text-overflow: initial;
  display: block;
  -webkit-line-clamp: initial;
  -webkit-box-orient: initial;
  width: 100%;
  flex-shrink: 1;
  word-wrap: break-word;
  word-break: normal;
  white-space: normal;
`;

export const ProjectSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  justify-content: flex-start;
  height: auto;
`;

export const Section = styled.div`
  padding: 14px;
  border-radius: 10px;
  border-left: 3px solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 105px; /* 3줄 텍스트를 위한 고정 높이 설정 */
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-bottom: 6px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  
  &.contribution {
    background: #fef7f0;
    border-left-color: #ff8a65;
    
    &::after {
      background: linear-gradient(to bottom, rgba(254, 247, 240, 0) 0%, rgba(254, 247, 240, 1) 90%);
    }
  }
  
  &.skills {
    background: #fff3e0;
    border-left-color: #ffb74d;
    
    &::after {
      background: linear-gradient(to bottom, rgba(255, 243, 224, 0) 0%, rgba(255, 243, 224, 1) 90%);
    }
  }
  
  &.achievement {
    background: #f3e5f5;
    border-left-color: #ba68c8;
    
    &::after {
      background: linear-gradient(to bottom, rgba(243, 229, 245, 0) 0%, rgba(243, 229, 245, 1) 90%);
    }
  }
  
  /* 스크롤 필요 시 그라데이션 표시 */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 24px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
  }
  
  &.has-overflow::after {
    opacity: 1;
  }
`;

export const SectionHeading = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  flex-shrink: 0;
`;

export const SectionContent = styled.div`
  font-size: 12px;
  color: #555;
  line-height: 1.5;
  overflow-y: auto;
  height: 62px; /* 3줄 기준 고정 높이 */
  text-overflow: ellipsis;
  display: block;
  width: 100%;
  word-break: normal;
  white-space: normal;
  padding-right: 6px;
  padding-bottom: 14px; /* 그라데이션을 위한 여백 */
  
  /* 스크롤바 스타일링 */
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

export const TechTag = styled.span`
  background: #e3f2fd;
  color: #1565c0;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

export const ProjectActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
`;

export const PrimaryButton = styled.button.attrs({ type: 'button' })`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.$color || '#764ba2'};
  color: white;
  
  &:hover {
    background: ${props => props.$hoverColor || '#6a4190'};
  }
`;

export const SecondaryButton = styled.a`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: all 0.2s ease;
  background: #2c3e50;
  color: white;
  
  &:hover {
    background: #34495e;
  }
`;

// Modal Styles
export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${spacing.lg} 0;
  overflow-y: auto;

  @media ${breakpoints.media.maxTablet} {
    align-items: flex-start;
    padding-top: 50px;
  }
`;

export const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 20px;
  max-width: 900px;
  width: 90%;
  margin: ${spacing.md} auto;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  animation: modalSlideIn 0.3s ease-out;
  max-height: 85vh;
  min-height: 60vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  @keyframes modalSlideIn {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  @media ${breakpoints.media.maxTablet} {
    width: 95%;
    max-height: 90vh;
    min-height: 70vh;
  }
`;

export const ModalHeader = styled.div`
  padding: 32px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
  
  @media ${breakpoints.media.maxTablet} {
    padding: 24px;
  }
`;

export const ModalProjectInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media ${breakpoints.media.maxTablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const ModalIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 32px;
  font-weight: bold;
`;

export const ModalTitleSection = styled.div`
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: #1a1a1a;
    margin-bottom: 8px;
    word-wrap: break-word;
    word-break: keep-all;
    overflow-wrap: break-word;
  }
`;

export const ModalSubtitle = styled.p`
  color: #666;
  font-size: 16px;
  margin-bottom: 12px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f5f5f5;
    color: #333;
  }
`;

export const ModalBody = styled.div`
  padding: 32px;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  height: 0;
  
  @media ${breakpoints.media.maxTablet} {
    padding: 24px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 32px;
  
  @media (min-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 1199px) and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media ${breakpoints.media.maxTablet} {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const DetailCard = styled.div`
  background: #f8f9fa;
  padding: 24px;
  border-radius: 16px;
  border-left: 4px solid;
  height: 200px; /* 3줄 텍스트를 기준으로 한 고정 높이 */
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  
  &.problem {
    border-left-color: #e74c3c;
  }
  
  &.solution {
    border-left-color: #27ae60;
  }
  
  &.result {
    border-left-color: #3498db;
  }
  
  &.learning {
    border-left-color: #f39c12;
  }
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }
  
  p {
    color: #555;
    line-height: 1.6;
    font-size: 15px;
    flex: 1;
    overflow-y: auto;
    padding-right: 8px;
    margin: 0;
    padding-bottom: 5px; /* 그라데이션을 위한 공간 확보 */
    
    /* 스크롤바 스타일링 */
    &::-webkit-scrollbar {
      width: 6px;
    }
    
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
      background: #aaa;
    }
  }
  
  /* 스크롤 필요 시 그라데이션 표시 */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 4px; /* 왼쪽 테두리 고려 */
    right: 0;
    height: 35px;
    background: linear-gradient(to bottom, rgba(248, 249, 250, 0) 0%, rgba(248, 249, 250, 1) 100%);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
  }
  
  /* 모던 브라우저용 선택자 */
  &:has(p.overflow)::after {
    opacity: 1;
  }
  
  /* 대체 선택자 (JS로 추가되는 클래스) */
  &.has-overflow::after {
    opacity: 1;
  }
  
  @media ${breakpoints.media.maxTablet} {
    height: 180px;
    
    h3 {
      font-size: 16px;
      margin-bottom: 12px;
    }
    
    p {
      font-size: 14px;
      line-height: 1.5;
    }
  }
  
  @media ${breakpoints.media.maxMobile} {
    height: 160px;
    padding: 20px;
    
    h3 {
      font-size: 15px;
      margin-bottom: 10px;
    }
    
    p {
      font-size: 13px;
      line-height: 1.5;
    }
  }
`;

export const MetricsSection = styled.div`
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
  padding: 28px;
  border-radius: 16px;
  margin-bottom: 32px;
`;

export const MetricsTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
`;

export const MetricItem = styled.div`
  text-align: center;
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
`;

export const MetricValue = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const MetricLabel = styled.div`
  font-size: 12px;
  opacity: 0.9;
`;

export const TechSection = styled.div`
  margin-bottom: 32px;
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
  }
`;

export const TechCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
`;

export const TechCategory = styled.div`
  background: #f8f9fa;
  padding: 16px;
  border-radius: 12px;
  
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TechItem = styled.span`
  background: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  color: #555;
  border: 1px solid #eee;
`;

export const ChallengesSection = styled.div`
  background: #fff5f5;
  padding: 24px;
  border-radius: 16px;
  border-left: 4px solid #e53e3e;
  margin-bottom: 32px;
  
  h3 {
    color: #e53e3e;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;

export const ChallengeItem = styled.div`
  margin-bottom: 16px;
  padding: 16px;
  background: white;
  border-radius: 12px;
  border-left: 3px solid #e53e3e;
`;

export const ChallengeTitle = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const ChallengeDescription = styled.div`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const ChallengeSolution = styled.div`
  color: #27ae60;
  font-size: 14px;
  font-weight: 500;
`;

// Image Gallery Components
export const ImageGallerySection = styled.div`
  margin-bottom: 32px;
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const ImageGallery = styled.div`
  display: flex;
  gap: 24px;
  
  @media ${breakpoints.media.maxTablet} {
    flex-direction: column;
  }
`;

export const MainImageContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const MainImage = styled.div`
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  transition: opacity 0.3s ease;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    border-radius: 8px;
  }
  
  @media ${breakpoints.media.maxTablet} {
    height: 400px;
    padding: 16px;
  }
  
  @media ${breakpoints.media.maxMobile} {
    height: 300px;
    padding: 12px;
  }
`;

export const ImageInfo = styled.div`
  text-align: center;
  
  h4 {
    font-size: 20px;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }
  
  p {
    color: #666;
    font-size: 16px;
    line-height: 1.6;
  }
`;

export const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 120px;
  
  @media ${breakpoints.media.maxTablet} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  padding: 8px;
  border-radius: 12px;
  border: 2px solid ${props => props.$active ? '#667eea' : '#eee'};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  background: ${props => props.$active ? '#f8f9ff' : 'transparent'};
  
  img {
    width: 100%;
    height: 80px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  &:hover {
    border-color: #667eea;
    transform: translateY(-2px);
  }
  
  @media ${breakpoints.media.maxTablet} {
    width: 100px;
  }
`;

export const ThumbnailLabel = styled.span`
  display: block;
  font-size: 0.7rem;
  text-align: center;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 4. 만약 위 방법들이 안 되면, 컨테이너에 고정 높이 설정
export const ModalBodyFixed = styled(ModalBody)`
  overflow-y: auto;
  overflow-x: hidden;
  height: auto;
  padding: 32px;
  max-height: calc(85vh - 150px); /* 모달 헤더 높이를 제외한 높이 */
  
  @media ${breakpoints.media.maxTablet} {
    padding: 24px;
    max-height: calc(90vh - 140px);
  }
`;

// 추가 이미지 섹션 스타일 컴포넌트
export const AdditionalImagesSection = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

export const ShowMoreButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.75rem;
  background-color: transparent;
  border: 1px dashed #ccc;
  border-radius: 8px;
  color: #555;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #f5f5f5;
    color: #333;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const CategoryFilter = styled.div`
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: ${props => props.$active ? '#4ecdc4' : 'transparent'};
  color: ${props => props.$active ? 'white' : '#555'};
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.85rem;
  
  &:hover {
    background-color: ${props => props.$active ? '#4ecdc4' : '#f0f0f0'};
    transform: translateY(-1px);
  }
`;

export const AdditionalImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const AdditionalImageItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const AdditionalImage = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  position: relative;
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }
`;

export const AdditionalImageInfo = styled.div`
  padding: 1rem;
  
  h4 {
    font-size: 1rem;
    margin: 0 0 0.5rem 0;
    color: #333;
  }
  
  p {
    font-size: 0.85rem;
    color: #666;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
  }
`;

export const CategoryTag = styled.span`
  display: inline-block;
  padding: 0.25rem 0.5rem;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 0.75rem;
  color: #666;
  margin-top: 0.5rem;
`;

// 여기서 중복 선언된 컴포넌트들을 제거하고 파일 끝을 명시합니다
// ... 이하 모든 styled-components 정의를 동일하게 export로 이동 ... 