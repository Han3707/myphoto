import React, { createContext, useContext, useState, useCallback } from 'react';

// Context 생성
const OverflowContext = createContext(null);

// Context Provider 컴포넌트
export function OverflowProvider({ children }) {
    // 현재 활성화된 섹션 번호
    const [activeSection, setActiveSection] = useState(0);
    // 모달 상태 관리
    const [isModalOpen, setIsModalOpen] = useState(false);

    // 모달 열기
    const openModal = useCallback(() => {
        setIsModalOpen(true);

        // 모달이 열릴 때 body 스크롤 막기 (배경 스크롤 방지)
        // HTML과 body 모두에 적용
        document.documentElement.style.overflow = 'hidden';
        document.documentElement.style.position = 'fixed';
        document.documentElement.style.width = '100%';
        document.documentElement.style.top = `-${window.scrollY}px`;
        document.body.style.overflow = 'hidden';
    }, []);

    // 모달 닫기
    const closeModal = useCallback(() => {
        // 스크롤 위치 복원 준비
        const scrollY = document.documentElement.style.top;

        setIsModalOpen(false);

        // 모달이 닫힐 때 스크롤 복원
        document.documentElement.style.overflow = '';
        document.documentElement.style.position = '';
        document.documentElement.style.width = '';
        document.documentElement.style.top = '';
        document.body.style.overflow = '';

        // 스크롤 위치 복원
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }, []);

    // Context 값
    const value = {
        activeSection,
        setActiveSection,
        isModalOpen,
        openModal,
        closeModal
    };

    return (
        <OverflowContext.Provider value={value}>
            {children}
        </OverflowContext.Provider>
    );
}

// Custom Hook
export function useOverflow() {
    const context = useContext(OverflowContext);
    if (context === null) {
        throw new Error('useOverflow는 OverflowProvider 내부에서만 사용할 수 있습니다');
    }
    return context;
} 