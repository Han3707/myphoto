import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

export const SkillsSectionContainer = styled.section`
  height: 100vh;
  background: #FAFAFA;
  width: 100%;
  padding: 50px 0 70px;
  position: relative;
  z-index: ${props => props.$isActive ? 50 : 4};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
`;

export const ContentContainer = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
`;

export const SectionHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto ${spacing.xl};
  width: 100%;
  padding-bottom: 10px;
`;

export const HeaderContent = styled.div`
  text-align: center;
  margin-bottom: ${spacing.lg};
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 900;
  color: #000;
  text-align: center;
  margin-bottom: 16px;
  position: relative;

  @media ${breakpoints.media.maxTablet} {
    font-size: 2.5rem;
  }

  @media ${breakpoints.media.maxMobile} {
    font-size: 2rem;
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
  font-size: 1.1rem;
  color: #666;
  text-align: center;
  margin-bottom: 16px;
  font-weight: 400;
`;

export const CategoryButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const CategoryButton = styled.button`
  padding: 8px 16px;
  border-radius: 30px;
  background: ${props => props.$active ? props.$color : 'transparent'};
  color: ${props => props.$active ? 'white' : '#333'};
  border: 2px solid ${props => props.$color || '#ddd'};
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
  
  &:hover {
    background: ${props => props.$active ? props.$color : `${props.$color}20`};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const SkillsGrid = styled.div`
  display: flex;
  gap: 40px;
  padding: 15px 20px;
  min-width: max-content;
  justify-content: center;
`;

export const SkillCard = styled(motion.div)`
  background: white;
  border-radius: 14px;
  padding: ${spacing.lg};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  overflow: hidden;
  position: relative;
  min-height: 270px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.$gradient || colors.accent.primary};
  }
`;

export const SkillCardHeader = styled.div`
  display: flex;
  margin-bottom: ${spacing.md};
  align-items: center;
`;

export const SkillIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${spacing.sm};
  font-size: ${typography.fontSize.xl};
  color: white;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
`;

export const SkillTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text.heading};
  margin: 0;
  flex: 1;
`;

export const SkillDescription = styled.div`
  color: #666;
  flex: 1;
  overflow-y: auto;
  
  ul {
    padding-left: 18px;
    margin: 0;
  }
  
  li {
    margin-bottom: 8px;
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    li {
      margin-bottom: 6px;
      font-size: 0.85rem;
      line-height: 1.4;
    }
  }
`;

export const SkillsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`;

export const SkillItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.sm};
`;

export const SkillName = styled.span`
  flex: 1;
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.text.heading};
  font-size: ${typography.fontSize.sm};
`;

export const SkillLevel = styled.div`
  width: 110px;
  height: 8px;
  background: #f1f5f9;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$level * 20}%;
    background: ${props => props.$color || colors.accent.primary};
    border-radius: 10px;
  }
`;

export const SkillLevelText = styled.span`
  font-size: ${typography.fontSize.xs};
  color: ${colors.text.muted};
  margin-left: ${spacing.sm};
  width: 28px;
  text-align: right;
`;

export const MoreSkillsContainer = styled.div`
  margin-top: ${spacing.xl};
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.md};
  justify-content: center;
  max-width: 1280px;
  width: 100%;
`;

export const MoreSkillTag = styled.span`
  display: inline-flex;
  align-items: center;
  padding: ${spacing.sm} ${spacing.md};
  background: white;
  border-radius: 30px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.body};
  margin: 0 ${spacing.xs} ${spacing.xs} 0;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${props => props.$color || colors.accent.primary};
    margin-right: ${spacing.sm};
  }
`;

export const InterestsContainer = styled.div`
  margin-top: ${spacing['2xl']};
  max-width: 1280px;
  width: 100%;
`;

export const InterestsTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  color: ${colors.text.heading};
  text-align: center;
  margin-bottom: ${spacing.lg};
  font-weight: ${typography.fontWeight.bold};
`;

export const InterestsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${spacing.md};
  
  @media ${breakpoints.media.maxTablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media ${breakpoints.media.maxMobile} {
    grid-template-columns: 1fr;
  }
`;

export const InterestCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: ${spacing.lg};
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
  }
`;

export const InterestIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${spacing.md};
  font-size: ${typography.fontSize.xl};
  color: white;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
`;

export const InterestName = styled.h4`
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.text.heading};
  margin-bottom: ${spacing.sm};
`;

export const InterestDescription = styled.p`
  color: ${colors.text.body};
  font-size: ${typography.fontSize.sm};
  line-height: ${typography.lineHeight.relaxed};
`;

export const SkillCardFooter = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: flex-end;
`;

export const LearnMoreButton = styled.a`
  padding: ${spacing.sm} ${spacing.md};
  border-radius: 8px;
  color: ${colors.text.body};
  text-decoration: none;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.03);
    color: ${colors.text.heading};
  }
  
  & svg {
    margin-left: ${spacing.sm};
    height: 18px;
    width: 18px;
  }
`;

export const CategoryNav = styled(CategoryButtonsContainer)`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

export const CategoryNavButton = styled(CategoryButton)`
  padding: 10px 18px;
  background: ${props => props.$isActive ? props.$borderColor : 'transparent'};
  color: ${props => props.$isActive ? 'white' : '#333'};
  border: 2px solid ${props => props.$borderColor || '#ddd'};
  font-weight: ${props => props.$isActive ? 'bold' : 'normal'};
  font-size: 0.95rem;
  
  &:hover {
    background: ${props => props.$isActive ? props.$borderColor : `${props.$borderColor}20`};
  }
`;

export const ScrollControls = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ScrollButton = styled.button`
  background: white;
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f5f5f5;
    transform: scale(1.1);
  }
  
  &.scroll-left {
    margin-right: 15px;
  }
  
  &.scroll-right {
    margin-left: 15px;
  }
`;

export const ScrollHint = styled.p`
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  margin: 5px 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const HintIcon = styled.span`
  font-size: 1.2rem;
  animation: bounce 1.5s infinite;
  
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
`;

export const SkillsScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  padding: 15px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 20px;
  cursor: grab;
  flex: 1;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SkillCategoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CategoryGroupTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 800;
  margin: 0;
  text-align: center;
  position: relative;
  color: ${props => props.$color || '#000'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 4px;
    background-color: currentColor;
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const CategorySkills = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 1200px) {
    flex-wrap: nowrap;
  }
`;

export const SkillCategory = styled.div`
  background: white;
  border-radius: 14px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  width: 320px;
  height: 320px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-top: 5px solid ${props => props.$categoryColor || '#ddd'};
  background: linear-gradient(to bottom, rgba(${props => {
    // 색상에 따른 배경 그라데이션 효과
    const color = props.$categoryColor || '#dddddd';
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `${r}, ${g}, ${b}, 0.05`
  }}) 0%, white 15%);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 300px;
    padding: 22px;
    height: 300px;
  }
  
  @media (max-width: 480px) {
    width: 280px;
    padding: 20px;
    height: 280px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 14px;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`;

export const SkillRating = styled.div`
  margin-bottom: 16px;
  font-size: 1.1rem;
  color: ${props => props.$color || '#000'};
  
  .star {
    color: #ddd;
    margin-right: 2px;
  }
  
  .star.filled {
    color: currentColor;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 14px;
  }
`;

export const StatsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto 0;
  padding: 0 20px;
`;

export const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 30px 40px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 25px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    padding: 20px 15px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 15px 10px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  position: relative;
`;

export const StatNumber = styled.span`
  font-size: 3rem;
  font-weight: 900;
  color: #FF6B6B;
  display: block;
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const StatLabel = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`; 