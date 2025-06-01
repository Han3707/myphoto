// 프로젝트 데이터
export const projects = [
    {
        id: 1,
        title: "BLE 메쉬 통신 랜턴",
        period: "2024.07 - 현재",
        type: "Team Project",
        summary: "블루투스 메쉬 네트워크를 활용한 오프라인 통신 랜턴 앱입니다. 와이파이나 셀룰러 네트워크 없이도 BLE MESH망을 이용해 메시지를 주고받을 수 있습니다.",
        role: "프론트엔드 개발 & UI/UX 디자인",
        problem: "재난 상황에서 인터넷 연결 없이 통신할 수 있는 솔루션의 필요성.",
        solution: "BLE Mesh 네트워크를 활용하여 분산형 메시징 시스템을 구축했습니다. Flutter로 직관적인 UI를 설계하고, 메시지 전달 신뢰성을 높이기 위한 큐 시스템을 구현했습니다.",
        achievements: "BLE 패킷 손실률 30%에서 5%로 감소, 최대 8개 노드에서 안정적인 메시지 전달 구현",
        color: "#ff6b7a",
        gradient: "linear-gradient(135deg, #ff6b7a 0%, #ff8a9b 100%)",
        links: {
            github: "https://github.com/username/ble-lantern",
            demo: "https://ble-lantern-demo.vercel.app"
        },
        image: "🏮",
        techDetails: [
            { name: "Flutter", level: 5 },
            { name: "Dart", level: 5 },
            { name: "BLE", level: 4 },
            { name: "Riverpod", level: 4 },
            { name: "Firebase", level: 3 },
            { name: "ML Kit", level: 3 }
        ],
        challenge: "인터넷 연결 없이도 사용자들이 서로 통신할 수 있는 견고한 메시징 시스템을 구축하는 것이 가장 큰 도전이었습니다.",
        images: [
            {
                title: "메인 화면",
                description: "사용자 친화적인 메인 인터페이스로 직관적인 네비게이션과 핵심 기능들을 한눈에 볼 수 있도록 설계했습니다.",
                src: "/assets/pj1/영상1.gif"
            },
            {
                title: "목록 화면",
                description: "사용자 데이터를 효율적으로 표시하는 목록 뷰로, 무한 스크롤과 검색 기능을 통해 대용량 데이터 처리를 최적화했습니다.",
                src: "/assets/pj1/캘린더.gif"
            },
            {
                title: "상세 화면",
                description: "상세 정보를 체계적으로 구성하여 사용자가 필요한 정보를 빠르게 찾을 수 있도록 설계한 상세 뷰입니다.",
                src: "/assets/pj1/윙스팬.gif"
            },
            {
                title: "기능 소개",
                description: "주요 기능에 대한 안내 화면으로, 사용자가 앱의 핵심 기능을 쉽게 이해할 수 있도록 설계했습니다.",
                src: "/assets/pj1/챌린지.gif"
            }
        ],
        metrics: [
            { value: "30%", label: "패킷 손실 감소" },
            { value: "8+", label: "안정적 노드 연결" },
            { value: "95%", label: "사용자 만족도" },
            { value: "45%", label: "전송 속도 향상" }
        ],
        techCategories: [
            {
                name: "Frontend",
                techs: ["Flutter", "Dart", "Provider"]
            },
            {
                name: "Backend",
                techs: ["Firebase", "Cloud Functions"]
            },
            {
                name: "Networking",
                techs: ["BLE Mesh", "P2P Protocol"]
            },
            {
                name: "Tools",
                techs: ["Git", "Figma", "Firebase Analytics"]
            }
        ],
        challenges: [
            {
                title: "BLE 연결 안정성 개선",
                description: "문제: 네트워크 환경에 따른 불안정한 BLE 연결로 메시지 손실 발생",
                solution: "재전송 메커니즘과 로컬 메시지 큐 시스템을 구현하여 패킷 손실률 30%에서 5%로 감소"
            },
            {
                title: "다중 기기 메시지 라우팅",
                description: "문제: 여러 기기를 통한 메시지 중복 및 전달 지연 이슈",
                solution: "효율적인 라우팅 알고리즘과 메시지 우선순위 시스템을 개발하여 전달 속도 45% 향상"
            }
        ]
    },
    {
        id: 2,
        title: "실시간 크라우드 펀딩 플랫폼",
        period: "2024.01 - 2024.03",
        type: "Team Project",
        summary: "WebSocket을 활용한 실시간 크라우드 펀딩 플랫폼입니다. 사용자들은 프로젝트를 생성하고 실시간으로 펀딩 상태를 확인할 수 있습니다.",
        role: "프론트엔드 개발 (Flutter)",
        problem: "기존 펀딩 플랫폼의 실시간성 부재와 모바일 환경 최적화 미흡.",
        solution: "Flutter와 WebSocket을 사용하여 실시간 업데이트를 구현했으며, 네트워크 불안정 상황에서도 안정적인 연결을 유지하기 위한 재연결 메커니즘을 구현했습니다.",
        achievements: "앱 충돌률 90% 감소, 페이지 로딩 속도 60% 향상, 실시간 채팅 및 펀딩 업데이트 구현",
        color: "#4ecdc4",
        gradient: "linear-gradient(135deg, #4ecdc4 0%, #6ee5dc 100%)",
        links: {
            github: "https://github.com/username/realtime-funding",
            demo: "https://realtime-funding-demo.vercel.app"
        },
        image: "💰",
        techDetails: [
            { name: "Flutter", level: 5 },
            { name: "Firebase", level: 4 },
            { name: "WebSocket", level: 4 },
            { name: "Node.js", level: 3 },
            { name: "Express", level: 3 }
        ],
        challenge: "실시간 데이터 동기화와 네트워크 불안정성 극복이 가장 큰 도전이었습니다.",
        images: [
            {
                title: "메인 화면",
                description: "사용자 친화적인 메인 인터페이스로 직관적인 네비게이션과 핵심 기능들을 한눈에 볼 수 있도록 설계했습니다.",
                src: "/assets/pj1/영상1.gif"
            },
            {
                title: "프로젝트 목록",
                description: "다양한 펀딩 프로젝트를 효과적으로 탐색할 수 있는 인터페이스로, 필터링 및 정렬 기능을 제공합니다.",
                src: "/assets/pj1/캘린더.gif"
            },
            {
                title: "펀딩 상세",
                description: "프로젝트 상세 정보와 실시간 펀딩 현황을 확인할 수 있는 화면으로, 직관적인 시각화를 통해 정보 전달력을 높였습니다.",
                src: "/assets/pj1/윙스팬.gif"
            },
            {
                title: "실시간 채팅",
                description: "프로젝트 창작자와 후원자 간의 실시간 소통을 위한 채팅 기능으로, 커뮤니티 형성에 기여합니다.",
                src: "/assets/pj1/챌린지.gif"
            }
        ],
        metrics: [
            { value: "90%", label: "충돌률 감소" },
            { value: "60%", label: "로딩속도 향상" },
            { value: "85%", label: "사용자 만족도" },
            { value: "3X", label: "사용자 체류시간" }
        ],
        techCategories: [
            {
                name: "Frontend",
                techs: ["Flutter", "Provider", "WebSocket Client"]
            },
            {
                name: "Backend",
                techs: ["Node.js", "Express", "Socket.io"]
            },
            {
                name: "Database",
                techs: ["Firebase", "Cloud Firestore"]
            },
            {
                name: "DevOps",
                techs: ["GitHub Actions", "Firebase Hosting"]
            }
        ],
        challenges: [
            {
                title: "실시간 데이터 동기화",
                description: "문제: 다수 사용자의 동시 접속 시 데이터 불일치 및 업데이트 지연",
                solution: "최적화된 WebSocket 프로토콜과 상태 관리 패턴 적용으로 동기화 지연 시간 75% 단축"
            },
            {
                title: "앱 크래시 해결",
                description: "문제: 상태 관리 미흡으로 인한 앱 충돌 및 메모리 누수",
                solution: "Provider 패턴 리팩토링과 메모리 관리 최적화로 충돌률 90% 감소, 앱 안정성 대폭 향상"
            }
        ]
    },
    {
        id: 3,
        title: "포트폴리오 웹사이트",
        period: "2023.12 - 2024.01",
        type: "Personal Project",
        summary: "React와 다양한 애니메이션 효과를 활용한 개인 포트폴리오 웹사이트입니다.",
        role: "디자인 & 개발",
        problem: "기존 템플릿 기반 포트폴리오의 차별성 부재와 사용자 경험 개선 필요.",
        solution: "React와 Framer Motion을 활용하여 인터랙티브한 애니메이션을 구현했으며, 모바일 환경에서도 최적화된 사용자 경험을 제공합니다.",
        achievements: "성능 최적화 (Lighthouse 점수 95+), 사용자 정의 애니메이션 구현, 반응형 디자인",
        color: "#8b5cf6",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
        links: {
            github: "https://github.com/username/portfolio",
            demo: "https://portfolio-demo.vercel.app"
        },
        image: "💼",
        techDetails: [
            { name: "React", level: 5 },
            { name: "Framer Motion", level: 4 },
            { name: "CSS/SCSS", level: 4 },
            { name: "Vite", level: 3 }
        ],
        challenge: "방문자들의 관심을 끌 수 있는 독특하면서도 성능이 최적화된 포트폴리오 사이트를 만드는 것이 목표였습니다.",
        images: [
            {
                title: "메인 화면",
                description: "사용자 친화적인 메인 인터페이스로 직관적인 네비게이션과 핵심 기능들을 한눈에 볼 수 있도록 설계했습니다.",
                src: "/assets/pj1/영상1.gif"
            },
            {
                title: "프로젝트 섹션",
                description: "프로젝트를 효과적으로 전시하는 섹션으로, 인터랙티브한 애니메이션을 통해 사용자의 관심을 유도합니다.",
                src: "/assets/pj1/윙스팬.gif"
            },
            {
                title: "스킬 섹션",
                description: "다양한 기술 스택을 시각적으로 보여주는 섹션으로, 직관적인 이해를 돕습니다.",
                src: "/assets/pj1/캘린더.gif"
            },
            {
                title: "다크모드",
                description: "사용자의 환경과 선호도에 맞춰 다크모드를 지원하여 최적화된 사용자 경험을 제공합니다.",
                src: "/assets/pj1/챌린지.gif"
            }
        ],
        metrics: [
            { value: "95+", label: "Lighthouse 점수" },
            { value: "40%", label: "로딩속도 개선" },
            { value: "65%", label: "체류시간 증가" },
            { value: "100%", label: "접근성 점수" }
        ],
        techCategories: [
            {
                name: "Frontend",
                techs: ["React 18", "TypeScript", "CSS Modules"]
            },
            {
                name: "Animation",
                techs: ["Framer Motion", "React Spring", "GSAP"]
            },
            {
                name: "Build Tools",
                techs: ["Webpack", "Babel", "ESLint"]
            },
            {
                name: "Deployment",
                techs: ["Vercel", "GitHub Actions", "Lighthouse CI"]
            }
        ],
        challenges: [
            {
                title: "애니메이션 성능 최적화",
                description: "문제: 복잡한 애니메이션으로 인한 60fps 미달, 특히 모바일에서의 성능 저하",
                solution: "GPU 가속 활용, will-change 속성 최적화, 애니메이션 레이어 분리로 성능 40% 개선"
            },
            {
                title: "크로스 브라우저 호환성",
                description: "문제: Safari와 Chrome 간의 CSS Grid, Flexbox 렌더링 차이",
                solution: "PostCSS Autoprefixer 도입, 브라우저별 테스트 자동화 구축으로 호환성 100% 달성"
            }
        ]
    }
]; 