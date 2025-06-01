import styled from 'styled-components';
import { motion } from 'framer-motion';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

export const HeaderSectionContainer = styled.section`
  min-height: 100vh;
  background: ${props => props.$gradient || colors.gradients.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${spacing['3xl']} ${spacing.md};
  box-sizing: border-box;
  position: relative;
  z-index: ${props => props.$isActive ? 50 : 2};
  overflow: hidden;
`;

export const HeaderBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${colors.gradients.primary};
  z-index: -1;
`;

export const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.8;
  z-index: -1;
  overflow: hidden;
`;

export const HeaderContent = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const HeaderTagline = styled(motion.div)`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: ${spacing.sm} ${spacing.lg};
  border-radius: 50px;
  margin-bottom: ${spacing.xl};
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

export const TaglineText = styled.span`
  color: white;
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  letter-spacing: 0.5px;
`;

export const TaglineHighlight = styled.span`
  color: ${colors.accent.light};
  font-weight: ${typography.fontWeight.bold};
`;

export const HeaderTitle = styled(motion.h1)`
  font-size: ${typography.fontSize['6xl']};
  font-weight: ${typography.fontWeight.black};
  color: white;
  line-height: ${typography.lineHeight.tight};
  margin-bottom: ${spacing.lg};
  max-width: 960px;
  letter-spacing: -1px;
  
  @media ${breakpoints.media.maxTablet} {
    font-size: ${typography.fontSize['5xl']};
  }
  
  @media ${breakpoints.media.maxMobile} {
    font-size: ${typography.fontSize['4xl']};
  }
`;

export const HeaderTitleHighlight = styled.span`
  display: inline-block;
  color: ${colors.accent.light};
  position: relative;
  z-index: 1;
  
  &::after {
    content: "";
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    height: 12px;
    background: rgba(255, 255, 255, 0.15);
    z-index: -1;
    transform: skew(-12deg) rotate(-2deg);
  }
  
  @media ${breakpoints.media.maxMobile} {
    &::after {
      height: 8px;
      bottom: 4px;
    }
  }
`;

export const HeaderSubtitle = styled(motion.p)`
  font-size: ${typography.fontSize.xl};
  color: rgba(255, 255, 255, 0.8);
  max-width: 640px;
  margin-bottom: ${spacing['2xl']};
  line-height: ${typography.lineHeight.relaxed};
  
  @media ${breakpoints.media.maxTablet} {
    font-size: ${typography.fontSize.lg};
  }
`;

export const HeaderActions = styled(motion.div)`
  display: flex;
  gap: ${spacing.md};
  margin-bottom: ${spacing['2xl']};
  
  @media ${breakpoints.media.maxMobile} {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
  }
`;

export const PrimaryButton = styled.a`
  background: white;
  color: ${colors.text.heading};
  padding: ${spacing.md} ${spacing.xl};
  border-radius: 8px;
  text-decoration: none;
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.base};
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

export const SecondaryButton = styled.a`
  background: rgba(255, 255, 255, 0.1);
  color: white;
  padding: ${spacing.md} ${spacing.xl};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  text-decoration: none;
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.base};
  display: inline-flex;
  align-items: center;
  gap: ${spacing.sm};
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

export const ButtonArrow = styled.span`
  transition: transform 0.2s ease;
  
  ${PrimaryButton}:hover &, ${SecondaryButton}:hover & {
    transform: translateX(3px);
  }
`;

export const HeaderStats = styled(motion.div)`
  display: flex;
  gap: ${spacing['3xl']};
  margin-bottom: ${spacing['2xl']};
  
  @media ${breakpoints.media.maxTablet} {
    gap: ${spacing.xl};
  }
  
  @media ${breakpoints.media.maxMobile} {
    flex-direction: column;
    align-items: center;
    gap: ${spacing.lg};
  }
`;

export const StatItem = styled.div`
  text-align: center;
`;

export const StatValue = styled.div`
  font-size: ${typography.fontSize['3xl']};
  font-weight: ${typography.fontWeight.black};
  color: white;
  margin-bottom: ${spacing.xs};
  
  @media ${breakpoints.media.maxTablet} {
    font-size: ${typography.fontSize['2xl']};
  }
`;

export const StatLabel = styled.div`
  font-size: ${typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.6);
  font-weight: ${typography.fontWeight.medium};
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: ${typography.fontSize.sm};
  gap: ${spacing.xs};
  
  @media ${breakpoints.media.maxMobile} {
    bottom: ${spacing.lg};
  }
`;

export const ScrollText = styled.span`
  font-weight: ${typography.fontWeight.medium};
`;

export const ScrollIcon = styled(motion.div)`
  width: 24px;
  height: 40px;
  border: 2px solid rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  position: relative;
  display: flex;
  justify-content: center;
  
  &::before {
    content: "";
    position: absolute;
    top: 8px;
    width: 4px;
    height: 8px;
    background: rgba(255, 255, 255, 0.6);
    border-radius: 2px;
  }
`;

export const SocialLinks = styled(motion.div)`
  display: flex;
  gap: ${spacing.md};
  margin-top: ${spacing.lg};
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s ease;
  backdrop-filter: blur(5px);
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.2);
  }
`; 