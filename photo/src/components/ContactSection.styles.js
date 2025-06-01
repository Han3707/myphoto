import styled, { keyframes } from 'styled-components';
import { colors } from '../constants/colors';
import { typography } from '../constants/typography';
import { spacing } from '../constants/spacing';
import { breakpoints } from '../constants/breakpoints';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }
  
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
`;

export const ContactSectionContainer = styled.section`
  padding: 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: visible;
  z-index: ${props => props.$isActive ? 50 : 1};
  align-items: center;
  justify-content: center;
`;

export const ContactContent = styled.div`
  max-width: 800px;
  width: 90%;
  padding: ${spacing['4xl']} ${spacing.xl};
  text-align: center;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  margin: ${spacing.lg};
  animation: ${fadeInUp} 0.8s ease-out;
  
  @media ${breakpoints.media.maxMobile} {
    padding: 40px 20px;
    margin: 20px;
  }
`;

export const SectionTag = styled.div`
  display: inline-block;
  background: #000;
  color: #fff;
  padding: 8px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 30px;
  letter-spacing: 0.5px;
  animation: ${pulse} 2s infinite;
`;

export const ContactTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
  margin-bottom: 20px;
  letter-spacing: -1px;
  font-family: ${typography.fontFamily.heading};
  
  @media ${breakpoints.media.maxMobile} {
    font-size: 36px;
  }
`;

export const ContactSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 50px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${typography.fontFamily.body};
`;

export const ContactButtons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  
  @media ${breakpoints.media.maxMobile} {
    flex-direction: column;
    align-items: center;
  }
  
  a {
    transition: all 0.3s ease;
  }
  
  a:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  a:hover:nth-child(1) {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
  }
  
  a:hover:nth-child(2) {
    border-color: #667eea;
    color: #667eea;
  }
  
  a:hover:nth-child(3) {
    background: #333;
  }
  
  a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.7s;
  }
  
  a:hover::before {
    left: 100%;
  }
`;

export const ContactButton = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 28px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  
  @media ${breakpoints.media.maxMobile} {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
  
  & .icon {
    transition: transform 0.3s ease;
  }
  
  &:hover .icon {
    transform: scale(1.2);
  }
`;

export const PrimaryButton = styled(ContactButton)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
`;

export const SecondaryButton = styled(ContactButton)`
  background: #fff;
  color: #333;
  border: 2px solid #e0e0e0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`;

export const DarkButton = styled(ContactButton)`
  background: #1a1a1a;
  color: white;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
`;

export const ContactInfo = styled.div`
  padding-top: 40px;
  border-top: 1px solid #e0e0e0;
`;

export const ContactInfoText = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const ContactEmail = styled.a`
  color: #667eea;
  font-weight: 600;
  text-decoration: none;
  font-size: 16px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const GlobalStyle = styled.div`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  #__next, main {
    height: 100%;
  }
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing['2xl']};
  max-width: 1280px;
  width: 100%;
  
  @media ${breakpoints.media.maxTablet} {
    grid-template-columns: 1fr;
    gap: ${spacing.xl};
  }
`;

export const ContactForm = styled.form`
  background: white;
  border-radius: 16px;
  padding: ${spacing['2xl']};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media ${breakpoints.media.maxMobile} {
    padding: ${spacing.xl};
  }
`;

export const FormTitle = styled.h3`
  font-size: ${typography.fontSize['2xl']};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing.lg};
  color: ${colors.text.heading};
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.md};
  margin-bottom: ${spacing.md};
  
  @media ${breakpoints.media.maxMobile} {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.div`
  margin-bottom: ${spacing.md};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${spacing.sm};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  color: ${colors.text.heading};
`;

export const Input = styled.input`
  width: 100%;
  padding: ${spacing.md};
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: ${typography.fontSize.base};
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.accent.primary};
    box-shadow: 0 0 0 2px ${colors.accent.primary}20;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: ${spacing.md};
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: ${typography.fontSize.base};
  min-height: 150px;
  resize: vertical;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${colors.accent.primary};
    box-shadow: 0 0 0 2px ${colors.accent.primary}20;
  }
`;

export const SubmitButton = styled.button`
  background: ${colors.accent.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: ${spacing.md} ${spacing.xl};
  font-size: ${typography.fontSize.base};
  font-weight: ${typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${colors.accent.secondary};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: #cbd5e0;
    cursor: not-allowed;
    transform: none;
  }
  
  & svg {
    margin-right: ${spacing.sm};
  }
`;

export const InfoCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: ${spacing.xl};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

export const InfoCardTitle = styled.h3`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing.md};
  color: ${colors.text.heading};
  display: flex;
  align-items: center;
  
  & svg {
    margin-right: ${spacing.md};
    color: ${colors.accent.primary};
  }
`;

export const InfoCardContent = styled.div`
  color: ${colors.text.body};
  font-size: ${typography.fontSize.base};
  line-height: ${typography.lineHeight.relaxed};
`;

export const ContactLink = styled.a`
  color: ${colors.accent.primary};
  text-decoration: none;
  font-weight: ${typography.fontWeight.medium};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${colors.accent.secondary};
    text-decoration: underline;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${spacing.md};
  margin-top: ${spacing.lg};
`;

export const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.$bg || colors.accent.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
    background: ${props => props.$hoverBg || colors.accent.secondary};
  }
`;

export const MapContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  height: 200px;
  margin-top: ${spacing.lg};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const ContactFormSuccess = styled.div`
  text-align: center;
  padding: ${spacing.xl} 0;
`;

export const SuccessIcon = styled.div`
  font-size: 48px;
  color: ${colors.accent.primary};
  margin-bottom: ${spacing.lg};
`;

export const SuccessMessage = styled.h4`
  font-size: ${typography.fontSize.xl};
  color: ${colors.text.heading};
  margin-bottom: ${spacing.md};
`;

export const SuccessDescription = styled.p`
  font-size: ${typography.fontSize.base};
  color: ${colors.text.body};
  margin-bottom: ${spacing.xl};
`;

export const FormError = styled.p`
  color: #e53e3e;
  font-size: ${typography.fontSize.sm};
  margin-top: ${spacing.xs};
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: ${spacing.sm};
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`; 