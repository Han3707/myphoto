import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

export const ExperienceSectionContainer = styled.section`
  min-height: 100%;
  background: ${colors.surface.light || '#f5f5f5'};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${spacing['3xl']} ${spacing.md};
  box-sizing: border-box;
  position: relative;
  z-index: ${props => props.$isActive ? 50 : 2};
  
  @media (max-height: 800px) {
    padding: ${spacing['2xl']} ${spacing.md};
  }
  
  @media (max-height: 700px) {
    padding: ${spacing.xl} ${spacing.md};
  }
`;

export const ContentContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, ${colors.accent.primary || '#f43f5e'}, ${colors.accent.secondary || '#ec4899'});
    border-radius: 2px;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-size: ${typography.fontSize['5xl']};
  font-weight: ${typography.fontWeight.black};
  margin-top: ${spacing.md};
  background: linear-gradient(to right, #222 30%, ${colors.accent.primary || '#f43f5e'} 50%, ${colors.accent.secondary || '#ec4899'} 70%, #222 90%);
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradientFlow 5s ease infinite;
  font-family: ${typography.fontFamily.heading};
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: relative;
  display: inline-block;

  @keyframes gradientFlow {
    0% { background-position: 0% center; }
    50% { background-position: 100% center; }
    100% { background-position: 0% center; }
  }

  &::after {
    content: "학습과정";
    position: absolute;
    top: 2px;
    left: 2px;
    color: rgba(255,255,255,0.1);
    z-index: -1;
  }

  @media ${breakpoints.media.maxTablet} {
    font-size: ${typography.fontSize['4xl']};
  }

  @media ${breakpoints.media.maxMobile} {
    font-size: ${typography.fontSize['3xl']};
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${typography.fontSize.xl};
  color: ${colors.text.body};
  max-width: 36rem;
  margin: 0 auto;
  line-height: ${typography.lineHeight.relaxed};
  font-weight: ${typography.fontWeight.medium};
  background: rgba(255,255,255,0.8);
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  display: inline-block;
`;

export const CareerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const CareerCard = styled(motion.div)`
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

export const Period = styled.div`
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

export const Company = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-bottom: 8px;
  line-height: 1.3;
`;

export const CompanySubtext = styled.small`
  font-size: 14px;
  color: #666;
  font-weight: 400;
  display: block;
  margin-top: 4px;
`;

export const Position = styled.div`
  font-size: 16px;
  color: #666;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Description = styled.div`
  color: #555;
  line-height: 1.7;
  font-size: 15px;
  margin-bottom: 25px;
  flex-grow: 1;
`;

export const Achievement = styled.div`
  background: #f8f9fa;
  border-left: 3px solid ${props => props.$current ? '#ff4444' : '#000'};
  padding: 12px 16px;
  margin: 15px 0;
  border-radius: 0 8px 8px 0;
  font-size: 14px;
  color: #555;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

export const SkillTag = styled.span`
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

export const ShowMoreButton = styled.span`
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

export const FirstLineContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  overflow-x: hidden;
  margin-bottom: 8px;
  width: 100%;
`;

export const RestOfSkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
`;

export const CurrentBadge = styled.div`
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

export const Duration = styled.div`
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

export const TimelineContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding: ${spacing.xl} 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: ${colors.accent.secondary || '#9333ea'};
    transform: translateX(-50%);
  }
  
  @media ${breakpoints.media.maxTablet} {
    &::before {
      left: 30px;
    }
  }
  
  @media (max-height: 800px) {
    padding: ${spacing.lg} 0;
  }
  
  @media (max-height: 700px) {
    padding: ${spacing.md} 0;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  justify-content: ${props => props.$isEven ? 'flex-start' : 'flex-end'};
  padding: ${spacing.xl} 0;
  position: relative;
  
  @media ${breakpoints.media.maxTablet} {
    justify-content: flex-start;
    padding-left: 60px;
  }
  
  @media (max-height: 800px) {
    padding: ${spacing.lg} 0;
    
    @media ${breakpoints.media.maxTablet} {
      padding-left: 50px;
    }
  }
  
  @media (max-height: 700px) {
    padding: ${spacing.md} 0;
    
    @media ${breakpoints.media.maxTablet} {
      padding-left: 45px;
    }
  }
`;

export const TimelineMarker = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${props => props.$color || colors.accent.primary};
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid white;
  box-shadow: 0 0 0 2px ${colors.accent.primary}60;
  z-index: 1;
  
  @media ${breakpoints.media.maxTablet} {
    left: 80px;
  }
  
  @media ${breakpoints.media.maxMobile} {
    left: 20px;
    width: 16px;
    height: 16px;
  }
`;

export const TimelineContent = styled.div`
  background: white;
  padding: ${spacing.lg} ${spacing.xl};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  width: 45%;
  position: relative;
  z-index: 10;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  }
  
  @media ${breakpoints.media.maxTablet} {
    width: 100%;
  }
  
  @media (max-height: 800px) {
    padding: ${spacing.md} ${spacing.lg};
  }
  
  @media (max-height: 700px) {
    padding: ${spacing.sm} ${spacing.md};
  }
`;

export const TimelineTitle = styled.h3`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text.heading};
  margin: 0 0 ${spacing.sm};
  
  @media (max-height: 800px) {
    font-size: ${typography.fontSize.lg};
    margin: 0 0 ${spacing.xs};
  }
  
  @media (max-height: 700px) {
    font-size: ${typography.fontSize.base};
    margin: 0 0 4px;
  }
`;

export const TimelineSubtitle = styled.h4`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.semibold};
  color: ${colors.accent.primary || '#f43f5e'};
  margin: 0 0 ${spacing.sm};
  
  @media (max-height: 800px) {
    font-size: ${typography.fontSize.base};
    margin: 0 0 ${spacing.xs};
  }
  
  @media (max-height: 700px) {
    font-size: ${typography.fontSize.sm};
    margin: 0 0 4px;
  }
`;

export const TimelineDescription = styled.p`
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.text.body};
  margin-bottom: ${spacing.sm};
  
  @media (max-height: 800px) {
    font-size: ${typography.fontSize.sm};
    line-height: ${typography.lineHeight.normal};
    margin-bottom: ${spacing.xs};
  }
  
  @media (max-height: 700px) {
    font-size: ${typography.fontSize.xs};
    line-height: 1.4;
    margin-bottom: 4px;
  }
`;

export const TimelinePeriod = styled.div`
  position: absolute;
  top: 20px;
  ${props => props.$isLeft
    ? `left: calc(55% + 20px);`
    : `right: calc(55% + 20px);`}
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.text.muted};
  font-size: ${typography.fontSize.sm};
  
  @media ${breakpoints.media.maxTablet} {
    top: -25px;
    left: 0;
    right: auto;
  }
`;

export const TimelineHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${spacing.md};
`;

export const CompanyLogo = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${typography.fontWeight.bold};
  font-size: ${typography.fontSize.lg};
  margin-right: ${spacing.md};
  color: white;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
`;

export const TimelineHeading = styled.div`
  flex: 1;
`;

export const CompanyName = styled.h3`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  color: ${colors.text.heading};
  margin: 0 0 ${spacing.xs};
`;

export const JobTitle = styled.p`
  font-size: ${typography.fontSize.sm};
  color: ${colors.text.body};
  margin: 0;
  font-weight: ${typography.fontWeight.medium};
`;

export const Responsibilities = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: ${spacing.md} 0 0;
`;

export const ResponsibilityItem = styled.li`
  margin-bottom: ${spacing.sm};
  padding-left: 24px;
  position: relative;
  font-size: ${typography.fontSize.sm};
  line-height: ${typography.lineHeight.relaxed};
  color: ${colors.text.body};
  
  &::before {
    content: "•";
    position: absolute;
    left: 8px;
    color: ${props => props.$color || colors.accent.primary};
  }
`;

export const TimelineFooter = styled.div`
  display: flex;
  margin-top: ${spacing.md};
  padding-top: ${spacing.md};
  border-top: 1px solid #f1f5f9;
  justify-content: space-between;
  align-items: center;
`;

export const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.xs};
`;

export const TechTag = styled.span`
  font-size: ${typography.fontSize.xs};
  padding: 3px 8px;
  border-radius: 4px;
  background: #f1f5f9;
  color: ${colors.text.body};
`;

export const ProjectLink = styled.a`
  color: ${colors.accent.primary};
  font-size: ${typography.fontSize.sm};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  & svg {
    margin-left: ${spacing.xs};
    height: 14px;
  }
`; 