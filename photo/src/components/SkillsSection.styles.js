import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

export const SkillsSectionContainer = styled.section`
  min-height: 100vh;
  background: #FAFAFA;
  width: 100%;
  padding: 100px 0 120px;
  position: relative;
  z-index: ${props => props.$isActive ? 50 : 4};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  max-width: 1800px;
  width: 100%;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  max-width: 1280px;
  margin: 0 auto ${spacing['2xl']};
  width: 100%;
`;

export const HeaderContent = styled.div`
  text-align: center;
  margin-bottom: ${spacing['2xl']};
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 4rem;
  font-weight: 900;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
  position: relative;

  @media ${breakpoints.media.maxTablet} {
    font-size: 2.8rem;
  }

  @media ${breakpoints.media.maxMobile} {
    font-size: 2.2rem;
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
  font-size: 1.2rem;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 400;
`;

export const SkillsGrid = styled.div`
  display: flex;
  gap: 40px;
  padding: 10px 20px;
  min-width: max-content;
  justify-content: center;
`;

export const SkillCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: ${spacing.xl};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  overflow: hidden;
  position: relative;
  min-height: 300px;
  
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
  margin-bottom: ${spacing.lg};
  align-items: center;
`;

export const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${spacing.md};
  font-size: ${typography.fontSize['2xl']};
  color: white;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
`;

export const SkillTitle = styled.h3`
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text.heading};
  margin: 0;
  flex: 1;
`;

export const SkillDescription = styled.div`
  color: #666;
  
  ul {
    padding-left: 20px;
    margin: 0;
  }
  
  li {
    margin-bottom: 8px;
    font-size: 0.9rem;
    line-height: 1.5;
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

export const CategoryNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

export const CategoryNavButton = styled.button`
  background: ${props => props.$isActive ? props.$borderColor || '#ddd' : 'white'};
  color: ${props => props.$isActive ? 'white' : '#333'};
  border: 2px solid ${props => props.$borderColor || '#ddd'};
  border-radius: 30px;
  padding: 10px 22px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    background: ${props => props.$isActive ? props.$borderColor : 'rgba(255,255,255,0.9)'};
  }
  
  @media ${breakpoints.media.maxMobile} {
    font-size: 0.85rem;
    padding: 8px 16px;
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
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f5f5f5;
    transform: scale(1.1);
  }
  
  &.scroll-left {
    margin-right: 10px;
  }
  
  &.scroll-right {
    margin-left: 10px;
  }
`;

export const ScrollHint = styled.p`
  text-align: center;
  color: #888;
  font-size: 0.9rem;
  margin: 10px 0 30px;
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
  padding: 20px 10px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin-bottom: 30px;
  cursor: grab;
  flex: 1;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SkillCategoryGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const CategoryGroupTitle = styled.h3`
  font-size: 1.8rem;
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
    width: 80px;
    height: 4px;
    background-color: currentColor;
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
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
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  width: 330px;
  flex-shrink: 0;
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
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 300px;
    padding: 25px;
  }
  
  @media (max-width: 480px) {
    width: 280px;
    padding: 20px;
  }
`;

export const CategoryTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 800;
  color: #000;
  margin-bottom: 15px;
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const SkillRating = styled.div`
  margin-bottom: 20px;
  font-size: 1.4rem;
  color: ${props => props.$color || '#000'};
  
  .star {
    color: #ddd;
    margin-right: 2px;
  }
  
  .star.filled {
    color: currentColor;
  }
`;

export const StatsContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 40px auto 0;
  padding: 0 20px;
`;

export const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  padding: 35px 50px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 25px 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px 15px;
  }
`;

export const StatItem = styled.div`
  text-align: center;
  position: relative;
`;

export const StatNumber = styled.span`
  font-size: 3.5rem;
  font-weight: 900;
  color: #FF6B6B;
  display: block;
  margin-bottom: 10px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const StatLabel = styled.span`
  font-size: 1rem;
  color: #666;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
`; 