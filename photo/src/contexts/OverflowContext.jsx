import React, { createContext, useContext, useState } from 'react';

// Context 생성
const OverflowContext = createContext(null);

// Context Provider 컴포넌트
export function OverflowProvider({ children }) {
    // 현재 활성화된 섹션 번호
    const [activeSection, setActiveSection] = useState(0);

    // Context 값
    const value = {
        activeSection,
        setActiveSection
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