// 프로젝트 데이터
export const projects = [
    {
        id: 1,
        title: "끌락끌락 - 클라이밍 모션 인식 앱",
        period: "2025.01 - 2025.02(6주)",
        type: "Team Project (FE 3 · BE 3)",
        summary: "실내 볼더링 환경에서 손이 분필로 더럽혀져 스마트폰 터치가 불편하여 터치 없이 자동으로 등반 모션과 녹화를 해 주는 솔루션입니다.",
        role: "Flutter camera pipeline, ML 기반 모션 튜닝, 동영상 Codec 최적화, 리더십/스크럼 운영",
        problem: "실내 볼더링 환경에서 손이 분필(송진가루)로 더럽혀져 스마트폰 터치가 불편 → 터치 없이 자동으로 등반(모션) + 녹화를 해 주는 솔루션 필요",
        solution: "Pose Detection 라이브러리 파라미터(각도·거리·FPS) 실험 → 오인식 최소화, 자동 녹화 파이프라인 (Flutter Camera → 실시간 인코딩 H-265 → 로컬 저장) 구축, 녹화 종료 후 스토리지 최적 화질 압축 & 썸네일 생성",
        achievements: "자동 녹화 성공률 ≈ 100% (40+ 실험 세션), 영상 당 평균 저장 용량 35% 감소, 사용자 피드백: '터치가 필요 없어 체감 편의성 ↑'",
        color: "#ff6b7a",
        gradient: "linear-gradient(135deg, #ff6b7a 0%, #ff8a9b 100%)",
        links: {
            github: "https://github.com/Han3707/team_orai_mirror",
            demo: "https://climbing-app-demo.vercel.app"
        },
        image: "🧗‍♂️",
        techDetails: [
            { name: "Flutter", level: 5 },
            { name: "Dart", level: 5 },
            { name: "Pose Detection", level: 4 },
            { name: "H-265", level: 4 },
            { name: "FFmpeg", level: 3 },
            { name: "cached_network_image", level: 4 }
        ],
        challenge: "모션 인식과 동영상 녹화를 동시에 처리하면서 오인식을 최소화하는 것이 가장 큰 도전이었습니다.",
        images: [
            {
                title: "메인 화면",
                description: "직관적인 인터페이스로 클라이밍 모션 인식과 녹화 기능을 쉽게 사용할 수 있습니다.",
                src: "/assets/pj1/영상1.gif"
            },
            {
                title: "모션 인식",
                description: "Pose Detection 기술을 활용하여 클라이밍 동작을 정확히 인식합니다.",
                src: "/assets/pj1/캘린더.gif"
            },
            {
                title: "녹화 결과",
                description: "고품질 영상을 효율적으로 압축하여 저장 공간을 절약합니다.",
                src: "/assets/pj1/윙스팬.gif"
            },
            {
                title: "분석 화면",
                description: "녹화된 영상을 분석하여 클라이밍 퍼포먼스를 평가합니다.",
                src: "/assets/pj1/챌린지.gif"
            }
        ],
        metrics: [
            { value: "< 3%", label: "오인식 Rate" },
            { value: "≈ 100%", label: "녹화 성공률" },
            { value: "–35%", label: "평균 파일 크기" },
            { value: "98%", label: "Crash-free Session" }
        ],
        techCategories: [
            {
                name: "Frontend",
                techs: ["Flutter", "Dart", "cached_network_image"]
            },
            {
                name: "ML / Media",
                techs: ["Google Pose Detection", "FFmpeg (H-265)"]
            },
            {
                name: "DevOps/Tools",
                techs: ["Git", "Jira", "Figma", "GitLab CI"]
            }
        ],
        challenges: [
            {
                title: "모션 오인식 다발",
                description: "문제: 클라이밍 모션 인식 시 오인식이 자주 발생하여 정확도가 낮았습니다.",
                solution: "해결: ① 각도·거리 매트릭스 20종 AB Test ② Confidence Score 0.85 기준선 설정으로 오인식 15% → < 3%로 개선했습니다."
            },
            {
                title: "모바일 인코딩 메모리 폭주",
                description: "문제: 고화질 영상 인코딩 시 메모리 사용량이 급증하여 앱 성능이 저하되었습니다.",
                solution: "해결: Isolate Encode thread + 분할 버퍼링 기법을 적용하여 녹화 중 메모리 사용량 40%↓ 감소시켰습니다."
            }
        ]
    },
    {
        id: 2,
        title: "친환경 클라우드 펀딩 플랫폼",
        period: "2025.02 - 2025.03(6주)",
        type: "Team Project (FE 2 · BE 4)",
        summary: "친환경 제품 펀딩 플랫폼으로, 실시간 펀딩 금액 표시와 판매자용 통계/정산 사이트를 제공합니다.",
        role: "WebSocket 실시간 통신, 이미지 캐싱 전략, Flutter·React 멀티 프로젝트 관리, OAuth/JWT 보안",
        problem: "펀딩 총액이 실시간으로 변하지만 모바일에서 지연이 길어 사용자가 불신, 판매자용 통계/정산 사이트 부재",
        solution: "STOMP WebSocket + 최대 5-회 재연결 로직 → 네트워크 불안정 대비, cached_network_image + 리스트 가상화 → 이미지 스크롤 지연 해소, React + Vite + Zustand로 판매자·관리자 SPA 설계/구현",
        achievements: "홈/상세 초기 로딩 2s → 0.5-1s (체감 60%↑), WebSocket 재연결 성공 100% → 실시간 금액 표시 불일치 80% 감소, 관리자 상품 등록-통계 업무 시간 -40%",
        color: "#4ecdc4",
        gradient: "linear-gradient(135deg, #4ecdc4 0%, #6ee5dc 100%)",
        links: {
            github: "https://github.com/Han3707/ssafy-funding",
            demo: "https://eco-funding-demo.vercel.app"
        },
        image: "🌱",
        techDetails: [
            { name: "Flutter", level: 5 },
            { name: "React/Vite", level: 4 },
            { name: "WebSocket", level: 4 },
            { name: "JWT", level: 3 },
            { name: "Zustand", level: 4 },
            { name: "cached_network_image", level: 4 }
        ],
        challenge: "실시간 데이터 동기화와 네트워크 불안정성 극복, 두 개의 서로 다른 프론트엔드 플랫폼 관리가 도전 과제였습니다.",
        images: [
            {
                title: "모바일 앱 메인",
                description: "사용자 친화적인 메인 인터페이스로 펀딩 프로젝트를 탐색할 수 있습니다.",
                src: "/assets/pj2/시작_메인_홈.gif"
            },
            {
                title: "실시간 펀딩 정보",
                description: "WebSocket을 통해 실시간으로 업데이트되는 펀딩 현황과 상세 정보를 확인할 수 있습니다.",
                src: "/assets/pj2/펀딩_상세.gif"
            },
            {
                title: "판매자 대시보드",
                description: "판매자를 위한 React 기반 관리 페이지로 통계와 정산 정보를 제공합니다.",
                src: "/assets/pj2/관리자_대시보드.png"
            },
            {
                title: "상품 관리 화면",
                description: "판매자가 상품을 효율적으로 관리하고 통계를 확인할 수 있는 인터페이스입니다.",
                src: "/assets/pj2/관리자_상품_관리.png"
            }
        ],
        additionalImages: [
            {
                title: "펀딩 리스트 필터링",
                description: "다양한 조건으로 펀딩 프로젝트를 필터링할 수 있습니다.",
                category: "mobile",
                src: "/assets/pj2/펀딩_리스트_필터링.gif"
            },
            {
                title: "펀딩 검색",
                description: "원하는 프로젝트를 빠르게 찾을 수 있는 검색 기능입니다.",
                category: "mobile",
                src: "/assets/pj2/펀딩_검색.gif"
            },
            {
                title: "펀딩 결제",
                description: "간편하고 안전한 결제 시스템을 제공합니다.",
                category: "mobile",
                src: "/assets/pj2/펀딩_결제.gif"
            },
            {
                title: "판매자 정보",
                description: "펀딩 프로젝트 판매자에 대한 정보를 확인할 수 있습니다.",
                category: "mobile",
                src: "/assets/pj2/펀딩_판매자정보.gif"
            },
            {
                title: "관리자 로그인",
                description: "보안이 강화된 관리자 로그인 화면입니다.",
                category: "admin",
                src: "/assets/pj2/관리자_시작_화면(로그인).png"
            },
            {
                title: "상품 등록",
                description: "새로운 펀딩 상품을 등록하는 화면입니다.",
                category: "admin",
                src: "/assets/pj2/관리자_상품_등록.png"
            },
            {
                title: "상품 상세 및 통계",
                description: "개별 상품의 상세 정보와 성과 통계를 확인할 수 있습니다.",
                category: "admin",
                src: "/assets/pj2/관리자_상품_상세_통계.png"
            }
        ],
        metrics: [
            { value: "2.0s", label: "첫 화면 FCP" },
            { value: "55 fps", label: "이미지 렌더 FPS" },
            { value: "100%", label: "WebSocket 재연결 성공" },
            { value: "-40%", label: "관리자 업무 시간" }
        ],
        techCategories: [
            {
                name: "Frontend",
                techs: ["Flutter", "Dart", "cached_network_image", "React 18", "Vite", "Zustand"]
            },
            {
                name: "Backend 연동",
                techs: ["REST", "JWT", "Spring Boot APIs"]
            },
            {
                name: "Real-time",
                techs: ["STOMP WebSocket"]
            },
            {
                name: "DevOps/Tools",
                techs: ["Git", "GitLab", "Jira", "Figma"]
            }
        ],
        challenges: [
            {
                title: "모바일 WebSocket 끊김",
                description: "문제: 모바일 환경에서 네트워크 변경이나 불안정 시 WebSocket 연결이 끊어져 실시간 데이터 업데이트가 중단되었습니다.",
                solution: "해결: Exponential Backoff + Heartbeat 모니터링 시스템을 구현하여 실시간 지연 80%↓ 감소시켰습니다."
            },
            {
                title: "이미지 리스트 지연",
                description: "문제: 다수의 고해상도 이미지를 포함한 리스트 스크롤 시 UI 지연이 발생했습니다.",
                solution: "해결: 캐싱 + 프리페칭 + List Virtualization 기법을 적용하여 스크롤 jank를 제거하고 부드러운 UI 경험을 제공했습니다."
            }
        ]
    },
    {
        id: 3,
        title: "BLE Mesh 오프라인 채팅 랜턴",
        period: "2025.04 - 2025.06(7주)",
        type: "Team Project (FE 2 · BE 4)",
        summary: "재난·오지 환경에서 인터넷 없이 다중 노드 채팅이 가능한 BLE Mesh 기반 랜턴 앱입니다.",
        role: "BLE Mesh 프로토콜, Kotlin Coroutines, Jetpack Compose 디자인 시스템, 오프라인 QoS",
        problem: "재난·오지 환경에서 인터넷 없이 다중 노드 채팅 시 패킷 손실 30%+, UX·UI가 없어 사용성 ↓",
        solution: "BLE Mesh 라우팅 프로토콜 + 로컬 큐로 재전송 알고리즘 설계, 메시지 우선순위 라우팅 → 동시 전송 충돌 완화, Jetpack Compose로 통화/채팅 8 화면 + UI 디자인 전부 1인이 구현",
        achievements: "패킷 손실 30% → 5%, 8+ 노드 환경 45% 전송 속도 향상, UI 전환 평균 120fps 유지 → 사용자 피드백 '딜레이 체감 없음'",
        color: "#8b5cf6",
        gradient: "linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)",
        links: {
            github: "https://github.com/username/ble-mesh-lantern",
            demo: "https://ble-mesh-lantern-demo.vercel.app"
        },
        image: "🔦",
        techDetails: [
            { name: "Kotlin", level: 5 },
            { name: "Compose", level: 4 },
            { name: "BLE Mesh", level: 4 },
            { name: "Coroutines", level: 4 },
            { name: "P2P Protocol", level: 3 }
        ],
        challenge: "인터넷 연결 없이 다중 노드 간 안정적인 메시지 전송과 패킷 손실 최소화가 주요 도전 과제였습니다.",
        images: [
            {
                title: "메인 화면",
                description: "Jetpack Compose로 구현한 직관적인 메인 인터페이스입니다.",
                src: "/assets/pj1/영상1.gif"
            },
            {
                title: "채팅 화면",
                description: "오프라인 환경에서도 안정적으로 작동하는 채팅 인터페이스입니다.",
                src: "/assets/pj1/캘린더.gif"
            },
            {
                title: "네트워크 상태",
                description: "BLE Mesh 네트워크 상태와 연결된 노드를 시각화합니다.",
                src: "/assets/pj1/윙스팬.gif"
            },
            {
                title: "설정 화면",
                description: "사용자가 앱 설정을 쉽게 조정할 수 있는 인터페이스입니다.",
                src: "/assets/pj1/챌린지.gif"
            }
        ],
        metrics: [
            { value: "5%", label: "패킷 손실률" },
            { value: "45%", label: "평균 전송 지연 개선" },
            { value: "8+", label: "최대 노드 연결" },
            { value: "120 fps", label: "UI 전환 FPS" }
        ],
        techCategories: [
            {
                name: "Frontend (App)",
                techs: ["Kotlin", "Jetpack Compose"]
            },
            {
                name: "Networking",
                techs: ["BLE Mesh", "P2P Protocol"]
            },
            {
                name: "Backend(Light)",
                techs: ["Firebase Cloud Functions (메타 로그)"]
            },
            {
                name: "Tools",
                techs: ["Git", "Figma", "Firebase Analytics"]
            }
        ],
        challenges: [
            {
                title: "패킷 손실 30%",
                description: "문제: 다중 노드 환경에서 BLE Mesh 통신 시 패킷 손실률이 30%에 달해 메시지 전달 신뢰성이 낮았습니다.",
                solution: "해결: 로컬 큐 + ACK 기반 재전송 메커니즘을 구현하여 패킷 손실률을 5%까지 감소시켰습니다."
            },
            {
                title: "다중 노드 라우팅 충돌",
                description: "문제: 여러 노드가 동시에 메시지를 전송할 때 라우팅 충돌이 발생하여 전송 속도가 저하되었습니다.",
                solution: "해결: 우선순위-기반 라우팅 테이블을 구현하여 전송 속도를 45% 향상시켰습니다."
            }
        ]
    }
]; 