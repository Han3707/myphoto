import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  width: 100%;
  background: #FAFAFA;
`;

const GeometricBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

const GeoShape = styled.div`
  position: absolute;
  border-radius: 50%;
  
  &:nth-child(1) {
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%);
    top: -200px;
    right: -200px;
    animation: rotate 20s linear infinite;
  }
  
  &:nth-child(2) {
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0, 0, 0, 0.02) 0%, transparent 70%);
    bottom: -150px;
    left: -150px;
    animation: rotate 25s linear infinite reverse;
  }
  
  &:nth-child(3) {
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.02), transparent);
    top: 20%;
    left: 10%;
    border-radius: 20px;
    animation: float 6s ease-in-out infinite;
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
  }
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  text-align: left;
  animation: slideInUp 1s ease-out;
  position: relative;
  z-index: 10;
  
  @keyframes slideInUp {
    from { 
      transform: translateY(100px); 
      opacity: 0; 
    }
    to { 
      transform: translateY(0); 
      opacity: 1; 
    }
  }
`;

const TechBadge = styled.div`
  display: inline-block;
  background: #000;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 50px;
  transition: all 0.3s ease;
  cursor: default;
  
  &:hover {
    transform: translateX(5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const MainTitle = styled.h1`
  font-size: 5.5rem;
  font-weight: 900;
  color: #000;
  line-height: 1.2;
  margin-bottom: 40px;
  position: relative;
`;

const TitleLine = styled.div`
  display: block;
  position: relative;
  overflow: hidden;
  height: 7rem;
  margin-bottom: 0.5rem;
`;

const TitleText = styled.span`
  display: inline-block;
  animation: slideInRight 0.8s ease-out;
  padding-bottom: 0.5rem;
  line-height: 1.3;
  
  ${TitleLine}:nth-child(2) & {
    animation-delay: 0.2s;
    animation-fill-mode: both;
  }
  
  ${TitleLine}:nth-child(3) & {
    animation-delay: 0.4s;
    animation-fill-mode: both;
  }
  
  @keyframes slideInRight {
    from { 
      transform: translateX(-100%); 
    }
    to { 
      transform: translateX(0); 
    }
  }
`;

const Highlight = styled.span`
  color: #FF6B6B;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 8px;
    background: rgba(255, 107, 107, 0.2);
    z-index: -1;
    animation: expandHighlight 1s ease-out 0.8s both;
  }
  
  @keyframes expandHighlight {
    from { width: 0; }
    to { width: 100%; }
  }
`;

const SubTitle = styled.p`
  font-size: 1.8rem;
  color: #666;
  margin-bottom: 60px;
  line-height: 1.4;
  font-weight: 400;
  max-width: 600px;
`;

const ActionSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 80px;
`;

const CtaButton = styled.button`
  background: #000;
  color: white;
  padding: 24px 48px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(2px);
  }
`;

const ScrollIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(5px);
  }
  
  span {
    font-size: 14px;
    color: #999;
  }
`;

const ScrollArrow = styled.div`
  width: 24px;
  height: 24px;
  border-right: 2px solid #999;
  border-bottom: 2px solid #999;
  transform: rotate(45deg);
  animation: scrollBounce 2s infinite;
  
  @keyframes scrollBounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
`;

const HeroSection = ({ scrollToSection }) => {
  return (
    <Container>
      <GeometricBg>
        <GeoShape />
        <GeoShape />
        <GeoShape />
      </GeometricBg>

      <ContentWrapper>
        <TechBadge>프론트엔드 개발자</TechBadge>

        <MainTitle>
          <TitleLine>
            <TitleText>안녕하세요,</TitleText>
          </TitleLine>
          <TitleLine>
            <TitleText>저는 <Highlight>김한민</Highlight>입니다.</TitleText>
          </TitleLine>
          <TitleLine>
            <TitleText>프론트엔드 개발자</TitleText>
          </TitleLine>
        </MainTitle>

        <SubTitle>
          사용자 경험을 향상시키고 문제를 해결하는 개발에 열정을 가진 프론트엔드 개발자입니다.
        </SubTitle>

        <ActionSection>
          <CtaButton onClick={() => scrollToSection(1)}>제 이야기를 들어보세요</CtaButton>
          <ScrollIndicator onClick={() => scrollToSection(1)}>
            <span>아래로 스크롤</span>
            <ScrollArrow />
          </ScrollIndicator>
        </ActionSection>
      </ContentWrapper>
    </Container>
  );
};

export default HeroSection; 