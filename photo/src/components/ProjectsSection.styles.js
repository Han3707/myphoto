import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

// 아래에 ProjectsSection.jsx의 모든 styled-components 정의를 복사/이동

export const ProjectsSectionContainer = styled.section`
  min-height: 100vh;
  background: ${colors.surface.light};
  width: 100%;
  padding: ${spacing['5xl']} ${spacing.md} ${spacing['5xl']} ${spacing.md};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: ${props => props.$isActive ? 50 : 2};
  justify-content: center;
  align-items: center;
  padding-right: calc(${spacing.md} + 80px);
  
  @media ${breakpoints.media.maxMobile} {
    padding: ${spacing['4xl']} ${spacing.md} ${spacing['5xl']} ${spacing.md};
    padding-right: calc(${spacing.md} + 60px);
  }
`;

export const SectionHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto ${spacing.lg};
  width: 100%;
`;

export const HeaderContent = styled.div`
  text-align: center;
  margin-bottom: ${spacing.lg};
`;

export const SectionTitle = styled(motion.h2)`
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
  margin: ${spacing.md} auto 0;
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
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

export const ProjectsScrollContainer = styled.div`
  display: flex;
  gap: ${spacing.xl};
  overflow-x: auto;
  padding-bottom: ${spacing['2xl']};
  -ms-overflow-style: none;
  scrollbar-width: none;
  align-items: stretch;
  
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${breakpoints.media.maxTablet} {
    gap: ${spacing.lg};
    padding-bottom: ${spacing.xl};
  }

  @media (min-width: 1600px) {
    justify-content: center;
    padding-left: ${spacing['2xl']};
    padding-right: ${spacing['2xl']};
  }
`;

export const ProjectsGrid = styled.div`
  display: flex;
  gap: ${spacing.xl};
  min-width: max-content;
  align-items: stretch;
  height: 100%;

  @media ${breakpoints.media.maxTablet} {
    gap: ${spacing.lg};
  }
`;

export const AnimatedProjectCard = styled(motion.div)`
  display: flex;
  height: 780px;
  width: 380px;
  
  @media ${breakpoints.media.maxTablet} {
    width: 340px;
    height: 640px;
  }

  @media ${breakpoints.media.maxMobile} {
    width: 300px;
    height: 620px;
  }
`;

// Updated Project Card based on new design
export const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  padding: 24px 24px 12px;
  gap: 12px;
`;

export const ProjectIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  border-radius: 12px;
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
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  display: inline-block;
`;

export const ProjectContent = styled.div`
  padding: 0 24px 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  overflow: hidden;
`;

export const ProjectContentTop = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
  height: 180px;
  flex: 0 0 auto;
  width: 100%;
`;

export const ProjectContentMiddle = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 10px 0;
`;

export const ProjectContentBottom = styled.div`
  flex-shrink: 0;
  margin-top: auto;
`;

export const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  flex-shrink: 0;
  word-wrap: break-word;
  min-height: 52px;
`;

export const ProjectPeriod = styled.p`
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const ProjectDescription = styled.p`
  color: #444;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 100%;
  flex-shrink: 1;
  word-wrap: break-word;
`;

export const ProjectSections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  justify-content: center;
  height: 100%;
`;

export const Section = styled.div`
  padding: 16px;
  border-radius: 12px;
  border-left: 4px solid;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 120px;
  min-height: auto;
  width: 100%;
  overflow: hidden;
  
  &.contribution {
    background: #fef7f0;
    border-left-color: #ff8a65;
  }
  
  &.skills {
    background: #fff3e0;
    border-left-color: #ffb74d;
  }
  
  &.achievement {
    background: #f3e5f5;
    border-left-color: #ba68c8;
  }

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
`;

export const SectionHeading = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
`;

export const SectionContent = styled.div`
  font-size: 13px;
  color: #555;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  width: 100%;
`;

export const TechStackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

export const TechTag = styled.span`
  background: #e3f2fd;
  color: #1565c0;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
`;

export const ProjectActions = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

export const PrimaryButton = styled.button.attrs({ type: 'button' })`
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
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
  padding: 12px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
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
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-bottom: 32px;
  
  @media ${breakpoints.media.maxTablet} {
    grid-template-columns: 1fr;
  }
`;

export const DetailCard = styled.div`
  background: #f8f9fa;
  padding: 24px;
  border-radius: 16px;
  border-left: 4px solid;
  
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
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  p {
    color: #555;
    line-height: 1.6;
    font-size: 14px;
  }
`;

export const MetricsSection = styled.div`
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
  color: white;
  padding: 24px;
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
  margin-bottom: 40px;
  
  h3 {
    font-size: 22px;
    font-weight: 600;
    color: #333;
    margin-bottom: 24px;
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
  font-size: 13px;
  color: #666;
  font-weight: 500;
  display: block;
  margin-top: 6px;
`;

// 4. 만약 위 방법들이 안 되면, 컨테이너에 고정 높이 설정
export const ModalBodyFixed = styled.div`
  padding: 32px;
  height: calc(85vh - 120px);
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  will-change: scroll-position;
  
  @media ${breakpoints.media.maxTablet} {
    padding: 24px;
    height: calc(90vh - 100px);
  }

  &::-webkit-scrollbar {
    width: 10px;
    display: block;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
    margin: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    border: 2px solid #f1f1f1;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
`;

// 여기서 중복 선언된 컴포넌트들을 제거하고 파일 끝을 명시합니다
// ... 이하 모든 styled-components 정의를 동일하게 export로 이동 ... 