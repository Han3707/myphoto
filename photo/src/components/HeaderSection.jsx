import React, { useRef } from 'react';
import * as S from './HeaderSection.styles';
import { useOverflow } from '../contexts/OverflowContext';

const HeaderSection = () => {
    const headerRef = useRef(null);
    const { activeSection } = useOverflow();

    const isActive = activeSection === 1;

    return (
        <S.HeaderSectionContainer id="home" ref={headerRef} $isActive={isActive}>
            <S.HeaderBackground />
            <S.BackgroundAnimation />

            <S.HeaderContent>
                <S.HeaderTagline
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <S.TaglineText>
                        프론트엔드 개발자 <S.TaglineHighlight>김한민</S.TaglineHighlight>입니다
                    </S.TaglineText>
                </S.HeaderTagline>

                <S.HeaderTitle
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    사용자 중심의 <S.HeaderTitleHighlight>웹 경험</S.HeaderTitleHighlight>을<br />
                    만들어내는 개발자
                </S.HeaderTitle>

                <S.HeaderSubtitle
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    프론트엔드 개발과 UX/UI 디자인에 대한 열정으로
                    사용자 친화적이고 혁신적인 웹 애플리케이션을 만듭니다.
                </S.HeaderSubtitle>

                <S.HeaderActions
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <S.PrimaryButton href="#projects">
                        프로젝트 보기
                        <S.ButtonArrow>→</S.ButtonArrow>
                    </S.PrimaryButton>

                    <S.SecondaryButton href="#contact">
                        연락하기
                        <S.ButtonArrow>→</S.ButtonArrow>
                    </S.SecondaryButton>
                </S.HeaderActions>

                <S.HeaderStats
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <S.StatItem>
                        <S.StatValue>3+</S.StatValue>
                        <S.StatLabel>경력 연수</S.StatLabel>
                    </S.StatItem>

                    <S.StatItem>
                        <S.StatValue>20+</S.StatValue>
                        <S.StatLabel>프로젝트</S.StatLabel>
                    </S.StatItem>

                    <S.StatItem>
                        <S.StatValue>15+</S.StatValue>
                        <S.StatLabel>기술 스택</S.StatLabel>
                    </S.StatItem>
                </S.HeaderStats>

                <S.SocialLinks
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <S.SocialIcon href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                        G
                    </S.SocialIcon>
                    <S.SocialIcon href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer">
                        L
                    </S.SocialIcon>
                    <S.SocialIcon href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">
                        T
                    </S.SocialIcon>
                </S.SocialLinks>
            </S.HeaderContent>

            <S.ScrollIndicator
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
            >
                <S.ScrollText>스크롤 하기</S.ScrollText>
                <S.ScrollIcon
                    animate={{ y: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                />
            </S.ScrollIndicator>
        </S.HeaderSectionContainer>
    );
};

export default HeaderSection; 