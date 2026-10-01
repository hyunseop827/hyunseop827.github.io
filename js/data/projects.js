// 프로젝트 데이터 (Project data)
// - *_ko 는 한국어, *_en 은 영어 필드입니다. type: "team" | "personal".
// - include: false 인 항목은 표시하지 않습니다. 숨긴 프로젝트는 projects-archive.js에 보관합니다(다시 쓰려면 여기로 옮기고 include: true). featured: true 는 홈 화면의 대표 프로젝트입니다.
// - order 가 작을수록 먼저 표시됩니다. 이미지 경로는 사이트 폴더 기준 상대 경로입니다.
// - 이미지 섹션 제목은 기본 "화면"(Screenshots)입니다. 앱 화면이 아닌 구성도·그래프라면 galleryTitle_ko / galleryTitle_en 으로 바꿉니다.
window.SITE_PROJECTS = [
  {
    "id": "ersync",
    "type": "team",
    "include": true,
    "featured": true,
    "repo": "Hansung-ERsync/ersync-backend",
    "title_ko": "ERSync",
    "title_en": "ERSync",
    "tagline_ko": "구급 현장과 응급실을 잇는 응급환자 이송 협업 시스템",
    "tagline_en": "Emergency patient transport coordination between paramedics and emergency rooms",
    "summary_ko": "ERSync는 구급대원이 입력한 환자 요약을 주변 응급실에 전달하고, 병원의 수락·거절 응답을 모아 이송 목적지 선택을 돕는 시스템입니다. 목적지를 정한 뒤에는 환자 상태와 위치, 예상 도착 시간을 목적지 병원과 공유해 인계까지 이어지도록 합니다. 모바일앱개발협동조합 일경험사업에서 4명이 진행했으며, 서비스 아이디어는 제가 제안했습니다. 저는 기획과 명세, AI 에이전트 작업 규칙, CI/CD와 AWS 배포를 맡았고, 백엔드 기능 구현은 다른 백엔드 팀원이 주로 맡았습니다.",
    "summary_en": "ERSync sends a paramedic's patient summary to nearby emergency rooms and collects their accept or decline responses so the paramedic can choose a destination. Once a destination is chosen, it shares patient status, location, and ETA with that hospital until handoff. It was a four-person project in the Work Experience Program run by the Mobile App Development Cooperative. I proposed the service idea and handled planning and specs, the AI agents' working rules, and CI/CD and AWS deployment, while a fellow backend developer implemented most of the backend features.",
    "period_ko": "2026.07 – 2026.08",
    "period_en": "Jul – Aug 2026",
    "context_ko": "모바일앱개발협동조합 일경험사업 · 팀 프로젝트",
    "context_en": "Mobile App Development Cooperative · Work Experience Program · Team project",
    "role_ko": "기획 · 명세 · DevOps",
    "role_en": "Planning, Specs & DevOps",
    "team_ko": "4명 · 백엔드 2명 · 웹 프론트엔드 1명 · 모바일 앱 1명",
    "team_en": "4 people · 2 backend · 1 web frontend · 1 mobile app",
    "platform": "Mobile app (Flutter) · Web (React) · Spring Boot API",
    "orgName": "Hansung-ERsync",
    "cardMeta_ko": "일경험사업",
    "cardMeta_en": "Work Experience Program",
    "orgUrl": "https://github.com/Hansung-ERsync",
    "orgProfileUrl": "https://github.com/Hansung-ERsync/.github/blob/main/profile/README.md",
    "contributions_ko": [
      "서비스 아이디어 제안, 백엔드 기술 스택 선정, 서비스 기획과 MVP 요구사항 명세·초기 DB·API 설계안 작성",
      "AI 에이전트 개발 체계 제안·도입: AGENTS.md 작업 규칙·정책 확인 기준, 공통 컨텍스트, 기능별 명세·구현·리뷰 문서와 Flutter·React 연동 문서 템플릿",
      "Spring Boot 프로젝트 초기 설정, 로컬 개발 작업 흐름과 PR·커밋 규칙 정리",
      "PR마다 테스트와 이미지 빌드를 실행하는 GitHub Actions CI, main 반영 시 ECR에 이미지를 올리고 SSM으로 EC2에 배포하는 자동 배포 구성",
      "AWS EC2·Nginx·ECR·비공개 RDS·Secrets Manager 구성, SSH 대신 SSM 접속, GitHub OIDC·IAM 최소 권한 설정, DevOps 가이드 작성",
      "Dockerfile과 readiness 확인·이전 컨테이너 복구를 포함한 EC2 배포 스크립트 작성, 배포된 Git 커밋 SHA를 확인하는 배포 버전 조회 API 추가",
      "병원·관리자 웹의 Cloudflare Workers 자동 배포 구성",
      "통합 리스크 리뷰 문서 작성, 후속 작업을 명세로 정리해 AI 에이전트로 반영: 비목적지 병원 제안 유지, 병원 탐색 지속, 목적지 철회 시 재알림, 거절 병원 환자정보 차단, 병원 상세주소 제공"
    ],
    "contributions_en": [
      "Proposed the service idea, chose the backend stack, planned the service, and wrote the MVP requirements and the initial DB/API design",
      "Proposed and set up an AI-agent workflow: AGENTS.md working rules and policy checks, shared context, and templates for per-feature spec, implementation, and review docs and for Flutter and React handoff docs",
      "Set up the initial Spring Boot project and wrote the local development workflow and the PR and commit rules",
      "Set up GitHub Actions CI that runs tests and a Docker build on each PR, and a deploy workflow that pushes the image to ECR and rolls it out to EC2 through AWS Systems Manager on every push to main",
      "Set up AWS EC2 (Nginx), ECR, a private RDS instance, and Secrets Manager, with SSM access instead of SSH and least-privilege GitHub OIDC and IAM roles; wrote a DevOps guide",
      "Wrote the Dockerfile and an EC2 deploy script with readiness checks and rollback to the previous container; added an API that reports the deployed Git commit SHA",
      "Set up automated deploys of the hospital and admin web apps to Cloudflare Workers",
      "Wrote a consolidated risk review and turned its findings into specs that AI agents applied: keeping non-destination hospital offers active, continuing hospital search, re-notifying hospitals when the destination withdraws, blocking patient data for hospitals that declined, and providing detailed hospital addresses"
    ],
    "features_ko": [
      "구급대원의 환자 평가 입력과 주변 응급실 이송 요청",
      "수락 병원이 없으면 검색 반경을 단계적으로 넓히는 병원 탐색",
      "병원의 수락·거절·철회 응답과 구급대원의 목적지 선택",
      "이송 중 환자 상태·위치·예상 도착 시간 공유와 SSE 실시간 알림",
      "구급대원과 병원 양측 확인 기반 인계 완료와 이송 이력",
      "슈퍼 관리자의 병원·구급대 조직 등록과 일회용 가입 코드 발급"
    ],
    "features_en": [
      "Patient assessment entry and transport requests to nearby emergency rooms",
      "Hospital search that widens its radius step by step until a hospital accepts",
      "Hospital accept, decline, and withdraw responses, with the paramedic choosing the destination",
      "Patient status, location, and ETA sharing during transport, with real-time SSE notifications",
      "Handoff completed only after both paramedic and hospital confirm, plus transport history",
      "Super-admin registration of hospitals and EMS units with one-time signup codes"
    ],
    "stackGroups": [
      {
        "label_ko": "백엔드",
        "label_en": "Backend",
        "items": [
          "Java 25",
          "Spring Boot 4.1",
          "Spring Security",
          "JWT",
          "Spring Data JPA",
          "SSE"
        ]
      },
      {
        "label_ko": "데이터",
        "label_en": "Data",
        "items": [
          "MySQL 8.4",
          "Flyway",
          "Testcontainers"
        ]
      },
      {
        "label_ko": "CI/CD·인프라",
        "label_en": "CI/CD & Infra",
        "items": [
          "GitHub Actions",
          "Docker",
          "AWS ECR",
          "AWS EC2",
          "AWS RDS",
          "AWS Systems Manager",
          "AWS Secrets Manager",
          "Cloudflare Workers",
          "Nginx"
        ]
      },
      {
        "label_ko": "외부 연동",
        "label_en": "Integrations",
        "items": [
          "NAVER Maps Directions API"
        ]
      }
    ],
    "stackShort": [
      "Spring Boot",
      "GitHub Actions",
      "Docker",
      "AWS ECR · EC2"
    ],
    "links": [
      {
        "kind": "repo",
        "url": "https://github.com/Hansung-ERsync/ersync-backend",
        "label_ko": "백엔드 저장소",
        "label_en": "Backend repository"
      },
      {
        "kind": "org",
        "url": "https://github.com/Hansung-ERsync",
        "label_ko": "팀 GitHub",
        "label_en": "Team GitHub"
      },
      {
        "kind": "video",
        "url": "https://www.youtube.com/watch?v=9WLYV62Xhmg",
        "label_ko": "데모 영상",
        "label_en": "Demo video"
      },
      {
        "kind": "docs",
        "url": "https://github.com/Hansung-ERsync/ersync-backend/blob/main/docs/devops.md",
        "label_ko": "DevOps 가이드",
        "label_en": "DevOps guide"
      },
      {
        "kind": "docs",
        "url": "https://github.com/Hansung-ERsync/ersync-backend/tree/main/docs/features",
        "label_ko": "기능별 명세·구현·리뷰 기록",
        "label_en": "Feature specs and reviews"
      }
    ],
    "youtubeId": "9WLYV62Xhmg",
    "logo": "assets/projects/ersync/icon.webp",
    "galleryTitle_ko": "시스템 구성도",
    "galleryTitle_en": "System architecture",
    "images": [
      {
        "src": "assets/projects/ersync/architecture.webp",
        "kind": "architecture",
        "caption_ko": "ERSync 전체 시스템 구성도: 구급대원 앱, 병원·슈퍼 관리자 웹, 백엔드 API, 네이버 Directions, MySQL",
        "caption_en": "ERSync system architecture: paramedic app, hospital and super-admin web, backend API, NAVER Directions, and MySQL (labels in Korean)",
        "width": 1600,
        "height": 1000
      }
    ],
    "notes_ko": "",
    "notes_en": "",
    "order": 1,
    "logoTile": true
  },
  {
    "id": "todaybread",
    "type": "team",
    "include": true,
    "featured": true,
    "repo": "hsu-today-bread/todaybread-backend",
    "title_ko": "오늘의 빵",
    "title_en": "TodayBread",
    "tagline_ko": "마감 시 남는 빵을 할인가로 주문하고 픽업하는 동네 빵집 앱",
    "tagline_en": "A mobile app for buying discounted end-of-day bread from nearby bakeries and picking it up",
    "summary_ko": "오늘의 빵은 동네 빵집에서 마감 시 버려지는 빵을 할인된 가격에 살 수 있게 해 주는 모바일 서비스입니다. 당일 상품 탐색부터 주문, 결제, 픽업까지 한 흐름으로 이어집니다. 한성대학교 모바일캡스톤디자인 수업에서 4명이 함께 진행했으며, 저는 JWT 인증과 Toss Payments 결제를 포함한 Spring Boot 백엔드 개발을 주도하고 AWS EC2에 배포했습니다.",
    "summary_en": "TodayBread is a mobile service for buying discounted bread that neighborhood bakeries would otherwise throw away at closing. It covers the whole flow from browsing the day's bread to ordering, payment, and pickup. It was a four-person capstone project at Hansung University; I led development of the Spring Boot backend, including JWT auth and Toss Payments, and deployed it on AWS EC2.",
    "period_ko": "2026.03 – 2026.06",
    "period_en": "Mar – Jun 2026",
    "context_ko": "모바일캡스톤디자인 · 팀 프로젝트",
    "context_en": "Mobile Capstone Design course · Team project",
    "role_ko": "백엔드 · DevOps",
    "role_en": "Backend & DevOps",
    "team_ko": "4명 · 프론트엔드 2명 · 백엔드 2명",
    "team_en": "4 people · 2 frontend · 2 backend",
    "platform": "Mobile app (Flutter) · Spring Boot API",
    "orgName": "hsu-today-bread",
    "cardMeta_ko": "모바일캡스톤디자인",
    "cardMeta_en": "Mobile Capstone Design",
    "orgUrl": "https://github.com/hsu-today-bread",
    "orgProfileUrl": "https://github.com/hsu-today-bread/.github/blob/main/profile/README.md",
    "contributions_ko": [
      "Spring Boot 백엔드 구조 설계와 회원·매장·빵·장바구니·주문·리뷰 REST API 구현",
      "Spring Security·JWT 인증과 Argon2 비밀번호 해시, 리프레시 토큰 해시 저장 구현",
      "Toss Payments 결제 승인·취소 연동, Idempotency-Key 기반 주문·결제 중복 처리 방지, 결제 대기 주문 만료 스케줄러 구현",
      "국세청 API 기반 사장님 사업자 인증, 사장님 주문·매출 조회, FCM 푸시 알림 구현",
      "MySQL 스키마와 Flyway 마이그레이션, Docker Compose 로컬 DB와 환경별 Spring 프로파일, AWS EC2·RDS·S3 배포 환경 구성",
      "API, DB 설정, 결제 흐름, JWT 인증 엔드포인트 작성 가이드, 개발 컨벤션 문서와 시드 데이터 스크립트 작성"
    ],
    "contributions_en": [
      "Designed the Spring Boot backend structure and built REST APIs for users, stores, bread, the cart, orders, and reviews",
      "Implemented Spring Security JWT auth with Argon2 password hashing and hashed refresh tokens",
      "Integrated Toss Payments confirmation and cancellation, used Idempotency-Key headers so retried order and payment requests are not processed twice, and added a scheduler that expires unpaid pending orders",
      "Built owner business verification with the National Tax Service API, owner order and sales views, and FCM push notifications",
      "Set up MySQL schemas with Flyway migrations, a Docker Compose local database, per-environment Spring profiles, and deployment on AWS EC2 with RDS and S3",
      "Wrote docs on the APIs, database setup, payment flow, JWT endpoint patterns, and development conventions, plus seed-data scripts"
    ],
    "features_ko": [
      "주변 빵집과 당일 판매 빵 탐색, 지도 보기",
      "장바구니·바로 주문과 Toss Payments 결제, 픽업 상태 관리",
      "사장님 매장·빵 등록, 주문 관리와 매출 조회",
      "국세청 사업자등록정보 진위확인 기반 사장님 인증",
      "관심 키워드·단골 가게 기준 빵 등록·재입고 알림(FCM)",
      "픽업 완료 주문 리뷰와 찜 목록(관심 키워드·단골 가게)"
    ],
    "features_en": [
      "Discovery of nearby bakeries and today's bread, with a map view",
      "Cart and direct orders with Toss Payments checkout and pickup status",
      "Owner tools for registering stores and bread, managing orders, and viewing sales",
      "Owner verification using the National Tax Service business registration check",
      "FCM alerts when bread matching a saved keyword or from a favorite store is added or restocked",
      "Reviews on picked-up orders and a wishlist of saved keywords and favorite stores"
    ],
    "stackGroups": [
      {
        "label_ko": "백엔드",
        "label_en": "Backend",
        "items": [
          "Java 21",
          "Spring Boot 3.5",
          "Spring Security",
          "JWT",
          "Spring Data JPA",
          "Argon2",
          "SpringDoc OpenAPI"
        ]
      },
      {
        "label_ko": "데이터",
        "label_en": "Data",
        "items": [
          "MySQL 8",
          "Flyway",
          "H2 (tests)"
        ]
      },
      {
        "label_ko": "인프라·배포",
        "label_en": "Infra & Deploy",
        "items": [
          "AWS EC2",
          "AWS RDS",
          "AWS S3",
          "Docker Compose"
        ]
      },
      {
        "label_ko": "외부 연동",
        "label_en": "Integrations",
        "items": [
          "Toss Payments",
          "Firebase Cloud Messaging",
          "NTS Business Registration API"
        ]
      },
      {
        "label_ko": "테스트",
        "label_en": "Testing",
        "items": [
          "JUnit 5",
          "jqwik",
          "MockWebServer"
        ]
      }
    ],
    "stackShort": [
      "Spring Boot",
      "JWT",
      "Toss Payments",
      "AWS EC2"
    ],
    "links": [
      {
        "kind": "repo",
        "url": "https://github.com/hsu-today-bread/todaybread-backend",
        "label_ko": "백엔드 저장소",
        "label_en": "Backend repository"
      },
      {
        "kind": "org",
        "url": "https://github.com/hsu-today-bread",
        "label_ko": "팀 GitHub",
        "label_en": "Team GitHub"
      },
      {
        "kind": "video",
        "url": "https://www.youtube.com/watch?v=KsKTnp1AZuo",
        "label_ko": "데모 영상",
        "label_en": "Demo video"
      },
      {
        "kind": "docs",
        "url": "https://github.com/hsu-today-bread/todaybread-backend/blob/main/docs/API.md",
        "label_ko": "API 문서",
        "label_en": "API docs"
      },
      {
        "kind": "docs",
        "url": "https://github.com/hsu-today-bread/todaybread-backend/blob/main/docs/TOSS.md",
        "label_ko": "결제 연동 문서",
        "label_en": "Payment integration docs"
      }
    ],
    "youtubeId": "KsKTnp1AZuo",
    "logo": "assets/projects/todaybread/icon.webp",
    "galleryTitle_ko": "시스템 구성도",
    "galleryTitle_en": "System architecture",
    "images": [
      {
        "src": "assets/projects/todaybread/architecture.webp",
        "src_ko": "assets/projects/todaybread/architecture-ko.webp",
        "kind": "architecture",
        "caption_ko": "오늘의 빵 전체 시스템 구성도: Flutter 앱(고객·사장님), EC2의 Spring Boot API, RDS MySQL과 S3, Toss Payments·국세청 API·FCM 연동",
        "caption_en": "TodayBread system architecture: the Flutter app for customers and owners, the Spring Boot API on EC2, RDS MySQL and S3, and the Toss Payments, National Tax Service, and FCM integrations",
        "width": 1600,
        "height": 1000
      }
    ],
    "notes_ko": "",
    "notes_en": "",
    "order": 2,
    "logoTile": true
  },
  {
    "id": "review-refining",
    "type": "team",
    "include": true,
    "featured": false,
    "repo": "HSU-bigdata-project/review-refining",
    "orgName": "HSU-bigdata-project",
    "cardMeta_ko": "빅데이터프로그래밍",
    "cardMeta_en": "Big Data Programming",
    "orgUrl": "https://github.com/HSU-bigdata-project",
    "orgProfileUrl": "https://github.com/HSU-bigdata-project/.github/blob/main/profile/README.md",
    "title_ko": "Review Refining",
    "title_en": "Review Refining",
    "tagline_ko": "이벤트성 배달 리뷰를 판별하고 가게 별점을 보정하는 ML 파이프라인",
    "tagline_en": "ML pipeline that detects incentivized delivery reviews and adjusts store ratings",
    "summary_ko": "배달의민족 리뷰마다 리뷰 이벤트 보상을 받고 작성됐을 확률을 예측해, 그 확률로 가게 별점을 보정하는 빅데이터프로그래밍 수업 프로젝트입니다. KcBERT 문장 임베딩에 리뷰 길이·이모지 수·사진 수를 더해 MLP로 이벤트 리뷰 확률을 예측하고, 확률이 높은 리뷰일수록 별점 반영 비중을 낮춰 가게 평균 별점을 다시 계산합니다. 4명이 진행했으며, 저는 파이프라인을 함께 설계하고 처리 과정 대부분을 구현했습니다.",
    "summary_en": "A Big Data Programming course project that estimates how likely each Baemin delivery review was written for a review-event reward and uses that probability to adjust store ratings. An MLP predicts the event probability from KcBERT sentence embeddings plus review length, emoji count, and photo count, and store averages are recomputed so that likely event reviews count for less. It was a four-person project; I co-designed the pipeline and built most of the workflow.",
    "period_ko": "2026.03 – 2026.06",
    "period_en": "Mar – Jun 2026",
    "context_ko": "빅데이터프로그래밍 · 팀 프로젝트",
    "context_en": "Big Data Programming course · Team project",
    "role_ko": "데이터 · 머신러닝",
    "role_en": "Data & Machine Learning",
    "team_ko": "4명",
    "team_en": "4 people",
    "platform": "Jupyter Notebook",
    "contributions_ko": [
      "파이프라인 공동 설계, 01–08 노트북 대부분 구현",
      "배달의민족 리뷰 엑셀 통합·중복 제거, 메뉴명 기반 이벤트 리뷰 라벨링과 텍스트 정제",
      "KcBERT CLS 임베딩 추출, PCA 차원 축소와 메타데이터 결합",
      "fold마다 PCA·스케일링·SMOTE를 적용하는 5-fold CV 기반 MLP 학습·설정 탐색",
      "TF-IDF·metadata-only·KcBERT-only·hybrid 모델 비교, 메타데이터 제거 실험(ablation)과 오답 분석",
      "단일 리뷰·CSV 입력을 지원하는 end-to-end 데모 구현"
    ],
    "contributions_en": [
      "Co-designed the pipeline and implemented most of the 01–08 notebook workflow",
      "Merged and deduplicated Baemin review spreadsheets, labeled event reviews from menu names, and cleaned review text",
      "Extracted KcBERT CLS embeddings and combined PCA-reduced features with review metadata",
      "Trained and tuned MLPs with 5-fold CV, applying PCA, scaling, and SMOTE inside each fold",
      "Compared TF-IDF, metadata-only, KcBERT-only, and hybrid models with metadata ablation and error analysis",
      "Built an end-to-end demo that accepts a single review or a CSV of reviews"
    ],
    "features_ko": [
      "수집한 배달의민족 리뷰 11,310건을 정제한 8,841건 규모의 데이터셋",
      "메뉴명의 리뷰 이벤트 문구를 기준으로 한 이벤트 리뷰 라벨 생성",
      "KcBERT 768차원 임베딩과 리뷰 길이·이모지 수·사진 수 메타데이터 결합",
      "MLP 설정 192개를 5-fold CV 평균 F1으로 비교해 최적 설정 선택",
      "이벤트 확률 기반 가중 평균(가중치 1 − 이벤트 확률)으로 가게 별점 정제",
      "단일 리뷰는 이벤트 확률과 별점 반영 가중치, CSV 여러 리뷰는 정제 별점까지 계산하는 데모"
    ],
    "features_en": [
      "Dataset of 8,841 reviews cleaned from 11,310 collected Baemin reviews",
      "Event-review labels derived from review-event phrases in menu names",
      "KcBERT 768-dimensional embeddings combined with review length, emoji count, and photo count",
      "Best of 192 MLP configurations chosen by mean F1 across 5-fold CV",
      "Store ratings refined with a probability-weighted average (weight = 1 − event probability)",
      "Demo that returns event probability and rating weight for a single review, and a refined rating for a CSV of reviews"
    ],
    "stackGroups": [
      {
        "label_ko": "언어·환경",
        "label_en": "Language & Environment",
        "items": [
          "Python",
          "Jupyter Notebook",
          "uv"
        ]
      },
      {
        "label_ko": "데이터·머신러닝",
        "label_en": "Data & ML",
        "items": [
          "pandas",
          "NumPy",
          "scikit-learn",
          "imbalanced-learn (SMOTE)",
          "matplotlib"
        ]
      },
      {
        "label_ko": "자연어 처리",
        "label_en": "NLP",
        "items": [
          "PyTorch",
          "Hugging Face Transformers",
          "KcBERT",
          "soynlp",
          "emoji"
        ]
      }
    ],
    "stackShort": [
      "Python",
      "KcBERT",
      "scikit-learn",
      "PyTorch"
    ],
    "links": [
      {
        "kind": "repo",
        "url": "https://github.com/HSU-bigdata-project/review-refining",
        "label_ko": "GitHub 저장소",
        "label_en": "GitHub repository"
      },
      {
        "kind": "org",
        "url": "https://github.com/HSU-bigdata-project",
        "label_ko": "GitHub 조직",
        "label_en": "GitHub organization"
      },
      {
        "kind": "docs",
        "url": "https://github.com/HSU-bigdata-project/review-refining/blob/main/08end_to_end_demo.ipynb",
        "label_ko": "End-to-end 데모 노트북",
        "label_en": "End-to-end demo notebook"
      }
    ],
    "logo": "assets/projects/review-refining/icon.webp",
    "galleryTitle_ko": "분석 그래프",
    "galleryTitle_en": "Analysis charts",
    "images": [
      {
        "src": "assets/projects/review-refining/label-distribution.webp",
        "kind": "chart",
        "width": 995,
        "height": 388,
        "caption_ko": "전처리 후 라벨 분포(0: 일반 리뷰, 1: 이벤트 리뷰)와 리뷰 길이 분포",
        "caption_en": "Label distribution after preprocessing (0: regular, 1: event review) and review length distribution"
      },
      {
        "src": "assets/projects/review-refining/pca-variance.webp",
        "kind": "chart",
        "width": 700,
        "height": 393,
        "caption_ko": "학습 데이터 KcBERT 임베딩의 PCA 누적 설명 분산(90% 기준 143차원 선택)",
        "caption_en": "Cumulative explained variance of KcBERT embeddings on the training split; 143 components kept at 90%"
      }
    ],
    "notes_ko": "데이터 수와 MLP 설정 수는 저장소 노트북 출력 기준이며, 모델 성능 지표는 싣지 않았습니다.",
    "notes_en": "Dataset and configuration counts come from the notebook outputs in the repository. Model scores are intentionally left out.",
    "order": 3
  },
  {
    "id": "menu-pulse",
    "type": "personal",
    "include": true,
    "featured": true,
    "repo": "hyunseop827/menu-pulse",
    "title_ko": "Menu Pulse",
    "title_en": "Menu Pulse",
    "tagline_ko": "Apple Silicon Mac 메뉴바에 CPU·RAM 사용량을 표시하는 가벼운 Objective-C 앱",
    "tagline_en": "Lightweight Objective-C menu bar app that shows CPU and RAM usage on Apple Silicon Macs",
    "summary_ko": "Mac 메뉴바에서 CPU와 RAM 사용량을 확인하는 Objective-C/AppKit 앱입니다. 시스템 자원을 적게 쓰면서 필요한 정보만 보여 주는 모니터링 앱을 찾다가 AI 코딩 에이전트로 만들었고, 지금도 쓰고 있습니다. 온도와 디스크 사용량은 설정에서 켤 수 있습니다. 저는 요구사항과 명세, AGENTS.md 릴리스 규칙을 정하고 결과물을 직접 써 보며 검증·개선했습니다.",
    "summary_en": "An Objective-C/AppKit app that shows CPU and RAM usage in the Mac menu bar. While looking for a monitor that used few resources and showed only what I needed, I decided to build my own with AI coding agents, and I still use it. Temperature and disk usage can be turned on in Settings. I defined the requirements, specs, and AGENTS.md release rules, then used each build myself to verify and refine it.",
    "period_ko": "2026.06 – 현재",
    "period_en": "Jun 2026 – present",
    "context_ko": "개인 프로젝트",
    "context_en": "Personal project",
    "role_ko": "1인 프로젝트 · AI 코딩 에이전트로 개발",
    "role_en": "Solo project · built with AI coding agents",
    "team_ko": "",
    "team_en": "",
    "platform": "macOS",
    "features_ko": [
      "CPU·RAM, 온도, 디스크 갱신 주기와 온도 단위(섭씨·화씨) 설정",
      "CPU·RAM 사용량, 하드웨어 센서 기준 부품 최고 온도, Finder와 같은 기준으로 계산한 디스크 사용량 표시",
      "켜 둔 지표만 타이머 하나로 조회, 화면이 꺼지거나 다른 사용자로 전환되면 조회 일시 중지",
      "로그인 시 실행 설정, 백그라운드 네트워크 요청·텔레메트리·Dock 아이콘 없음",
      "Xcode 프로젝트 없이 clang·Makefile로 빌드·ad-hoc 서명·DMG 패키징",
      "GitHub Actions로 정적 분석·테스트 후 버전 태그·DMG 릴리스 자동 발행",
      "격리된 임시 빌드의 CPU·메모리 사용량을 측정 조건과 함께 기록하는 벤치마크 스크립트"
    ],
    "features_en": [
      "Refresh intervals for CPU and RAM, temperature, and disk, plus a Celsius or Fahrenheit setting",
      "CPU and RAM usage, the hottest component temperature from hardware sensors, and disk usage counted the way Finder counts it",
      "One timer that reads only enabled metrics and pauses while displays sleep or another user's session is active",
      "Open at Login setting, with no background network requests, telemetry, or Dock icon",
      "Build, ad-hoc signing, and DMG packaging with clang and a Makefile, without an Xcode project",
      "GitHub Actions pipeline that runs static analysis and tests, then tags the version and publishes the DMG release",
      "Benchmark script that measures CPU and memory use of an isolated build and records the test conditions"
    ],
    "stackGroups": [
      {
        "label_ko": "언어",
        "label_en": "Language",
        "items": [
          "Objective-C"
        ]
      },
      {
        "label_ko": "프레임워크",
        "label_en": "Frameworks",
        "items": [
          "AppKit",
          "IOKit",
          "ServiceManagement"
        ]
      },
      {
        "label_ko": "빌드·배포",
        "label_en": "Build & Release",
        "items": [
          "clang",
          "Make",
          "GitHub Actions"
        ]
      },
      {
        "label_ko": "플랫폼",
        "label_en": "Platform",
        "items": [
          "macOS 13+",
          "Apple Silicon"
        ]
      }
    ],
    "stackShort": [
      "Objective-C",
      "AppKit",
      "IOKit",
      "GitHub Actions"
    ],
    "links": [
      {
        "kind": "repo",
        "url": "https://github.com/hyunseop827/menu-pulse",
        "label_ko": "GitHub 저장소",
        "label_en": "GitHub repository"
      },
      {
        "kind": "download",
        "url": "https://github.com/hyunseop827/menu-pulse/releases/latest/download/MenuPulse.dmg",
        "label_ko": "최신 DMG 다운로드",
        "label_en": "Download latest DMG"
      },
      {
        "kind": "release",
        "url": "https://github.com/hyunseop827/menu-pulse/releases",
        "label_ko": "릴리스 노트",
        "label_en": "Release notes"
      }
    ],
    "logo": "assets/projects/menu-pulse/icon.webp",
    "images": [
      {
        "src": "assets/projects/menu-pulse/menubar-all.webp",
        "kind": "screenshot",
        "width": 322,
        "height": 60,
        "caption_ko": "CPU·RAM·TEMP·DISK를 모두 켠 메뉴바 표시",
        "caption_en": "Menu bar readout with CPU, RAM, TEMP, and DISK enabled"
      },
      {
        "src": "assets/projects/menu-pulse/menubar.webp",
        "kind": "screenshot",
        "width": 160,
        "height": 60,
        "caption_ko": "기본 CPU·RAM 표시",
        "caption_en": "Default CPU and RAM readout"
      },
      {
        "src": "assets/projects/menu-pulse/settings.webp",
        "kind": "screenshot",
        "width": 780,
        "height": 974,
        "caption_ko": "표시 지표·갱신 주기·로그인 시 실행을 고르는 설정창",
        "caption_en": "Settings for metrics, refresh intervals, and Open at Login"
      }
    ],
    "notes_ko": "ad-hoc 서명만 되어 있고 Apple 공증을 받지 않아, 처음 실행할 때 macOS 경고가 표시될 수 있습니다. Apple Silicon, macOS 13 이상에서 동작합니다.",
    "notes_en": "Ad-hoc signed and not notarized, so macOS may warn on first launch. Runs on Apple Silicon with macOS 13 or later.",
    "order": 11
  },
  {
    "id": "finder-presets",
    "type": "personal",
    "include": true,
    "featured": true,
    "repo": "hyunseop827/finder-presets",
    "title_ko": "Finder Presets",
    "title_en": "Finder Presets",
    "tagline_ko": "Finder 보기를 프리셋으로 저장해 여러 폴더에 한 번에 적용하고 되돌릴 수 있는 macOS 앱",
    "tagline_en": "macOS app that saves Finder views as presets and applies them to many folders at once, with undo",
    "summary_ko": "Finder 폴더 보기(아이콘·목록·컬럼·갤러리 보기, 정렬, 그룹 기준 등)를 프리셋으로 저장하고, 원하는 폴더와 하위 폴더 또는 Finder 기본 보기에 적용하는 Swift/SwiftUI 앱입니다. 적용하기 전에 항상 백업하므로 기록에서 작업을 골라 되돌릴 수 있습니다. 네트워크 요청 없이 로컬에서 동작하며 한국어와 영어를 지원합니다. AI 코딩 에이전트로 개발했으며, 저는 요구사항과 명세를 정하고 결과물을 직접 써 보며 검증·개선했습니다.",
    "summary_en": "A Swift/SwiftUI app that saves Finder folder views (icon, list, column, or gallery view, sorting, grouping and more) as presets and applies them to chosen folders, their subfolders, or Finder's default view. Every change is backed up first, so any operation can be undone from History. It works offline and supports English and Korean. I built it with AI coding agents: I defined the requirements and specs, then used the results myself to verify and refine them.",
    "period_ko": "2026.09",
    "period_en": "Sep 2026",
    "context_ko": "개인 프로젝트",
    "context_en": "Personal project",
    "role_ko": "1인 프로젝트 · AI 코딩 에이전트로 개발",
    "role_en": "Solo project · built with AI coding agents",
    "team_ko": "",
    "team_en": "",
    "platform": "macOS",
    "features_ko": [
      "보기를 맞춰 둔 폴더나 편집기에서 프리셋 생성, 편집 중 실시간 미리보기",
      "폴더마다 프리셋을 지정해 선택한 폴더나 전체에 한 번에 적용, 하위 폴더 포함 여부 선택",
      "별표한 프리셋을 단축키로 맨 앞 Finder 창에 적용, Finder 서비스 메뉴 지원",
      "Finder 스크립트 없이 .DS_Store 직접 수정, 필요할 때 Finder 재시작 후 열려 있던 창 다시 열기",
      "핵심 로직을 앱과 분리한 Core 라이브러리, 단위 테스트와 통합 테스트용 CLI",
      "테스트·빌드 통과 시 Info.plist 버전으로 DMG 릴리스를 자동 발행하는 CI"
    ],
    "features_en": [
      "Presets from an arranged folder or the editor, with a live preview while editing",
      "Per-folder presets applied to selected or all folders at once, with or without subfolders",
      "Keyboard shortcut that applies the starred preset to the front Finder window, plus Finder Services menu actions",
      "Direct .DS_Store edits instead of Finder scripting, with Finder restarted when needed and its open windows reopened",
      "Core logic in a library separate from the app, with unit tests and a CLI for integration testing",
      "CI that publishes the DMG release from the version in Info.plist once tests and the build pass"
    ],
    "stackGroups": [
      {
        "label_ko": "언어",
        "label_en": "Language",
        "items": [
          "Swift 6.2"
        ]
      },
      {
        "label_ko": "프레임워크",
        "label_en": "Frameworks",
        "items": [
          "SwiftUI",
          "AppKit"
        ]
      },
      {
        "label_ko": "라이브러리",
        "label_en": "Libraries",
        "items": [
          "sindresorhus/DSStore"
        ]
      },
      {
        "label_ko": "빌드·배포",
        "label_en": "Build & Release",
        "items": [
          "Swift Package Manager",
          "GitHub Actions"
        ]
      },
      {
        "label_ko": "플랫폼",
        "label_en": "Platform",
        "items": [
          "macOS 14+",
          "Apple Silicon"
        ]
      }
    ],
    "stackShort": [
      "Swift",
      "SwiftUI",
      "DSStore",
      "GitHub Actions"
    ],
    "links": [
      {
        "kind": "repo",
        "url": "https://github.com/hyunseop827/finder-presets",
        "label_ko": "GitHub 저장소",
        "label_en": "GitHub repository"
      },
      {
        "kind": "download",
        "url": "https://github.com/hyunseop827/finder-presets/releases/latest/download/FinderPresets.dmg",
        "label_ko": "최신 DMG 다운로드",
        "label_en": "Download latest DMG"
      },
      {
        "kind": "release",
        "url": "https://github.com/hyunseop827/finder-presets/releases",
        "label_ko": "릴리스 노트",
        "label_en": "Release notes"
      }
    ],
    "logo": "assets/projects/finder-presets/icon.webp",
    "images": [
      {
        "src": "assets/projects/finder-presets/main.webp",
        "kind": "screenshot",
        "width": 1440,
        "height": 956,
        "caption_ko": "프리셋, 적용할 폴더, 시스템 전체 적용이 있는 메인 창",
        "caption_en": "Main window with presets, target folders, and the System-Wide section",
        "src_ko": "assets/projects/finder-presets/main-ko.webp"
      },
      {
        "src": "assets/projects/finder-presets/editor.webp",
        "kind": "screenshot",
        "width": 1440,
        "height": 956,
        "caption_ko": "보기 옵션을 정하는 프리셋 편집기",
        "caption_en": "Preset editor with view options"
      },
      {
        "src": "assets/projects/finder-presets/preview.webp",
        "kind": "screenshot",
        "width": 1040,
        "height": 938,
        "caption_ko": "예시 폴더에 프리셋을 적용해 보여 주는 실시간 미리보기",
        "caption_en": "Live preview of a sample folder with the preset"
      },
      {
        "src": "assets/projects/finder-presets/history.webp",
        "kind": "screenshot",
        "width": 1600,
        "height": 1051,
        "caption_ko": "적용 기록과 되돌리기",
        "caption_en": "History with undo"
      }
    ],
    "notes_ko": "ad-hoc 서명만 되어 있고 Apple 공증을 받지 않아, 처음 실행할 때 macOS 경고가 표시될 수 있습니다. 처음 Finder를 다시 시작할 때 Finder 제어 권한을 묻습니다. Apple Silicon, macOS 14 이상에서 동작합니다.",
    "notes_en": "Ad-hoc signed and not notarized, so macOS may warn on first launch. macOS asks for permission to control Finder the first time the app restarts it. Runs on Apple Silicon with macOS 14 or later.",
    "order": 12
  },
  {
    "id": "zalpha-decoder",
    "type": "personal",
    "include": true,
    "featured": false,
    "repo": "hyunseop827/zalpha-decoder",
    "title_ko": "Zalpha Decoder",
    "title_en": "Zalpha Decoder",
    "tagline_ko": "Gemini를 활용해 문장을 격식·기본·잘파 스타일로 번역하고 슬랭을 설명하는 iOS 앱",
    "tagline_en": "iOS app that uses Gemini to translate text into a formal, plain, or Gen Z/Alpha style and explain its slang",
    "summary_ko": "입력한 문장을 선택한 언어와 스타일(격식·기본·잘파)로 번역하고, 슬랭·관용 표현·밈 같은 주요 표현을 디코드 노트로 설명하는 UIKit iOS 앱입니다. Firebase AI Logic으로 Gemini를 호출하며, 디코드 기록과 저장한 표현은 기기에 보관해 다시 볼 수 있습니다. 이름은 Z세대와 알파 세대를 뜻하는 Zalpha에 Decoder를 붙인 것입니다. AI 코딩 에이전트로 개발했으며, 저는 요구사항과 명세를 정하고 결과물을 직접 써 보며 검증·개선했습니다.",
    "summary_en": "A UIKit iOS app that translates text into a chosen language and style (Formal, Plain, or Zalpha) and explains key expressions such as slang, idioms, and memes in decode notes. It calls Gemini through Firebase AI Logic and keeps decode history and saved expressions on the device. The name combines Zalpha (Gen Z + Alpha) and Decoder. I built it with AI coding agents: I defined the requirements and specs, then used the results myself to verify and refine them.",
    "period_ko": "2026.05 – 2026.06",
    "period_en": "May – Jun 2026",
    "context_ko": "개인 프로젝트",
    "context_en": "Personal project",
    "role_ko": "1인 프로젝트 · AI 코딩 에이전트로 개발",
    "role_en": "Solo project · built with AI coding agents",
    "team_ko": "",
    "team_en": "",
    "platform": "iOS",
    "features_ko": [
      "영어·한국어·일본어·스페인어·러시아어 간 번역과 격식·기본·잘파 스타일 선택",
      "문자 체계 판별과 NaturalLanguage로 기기에서 입력 언어 자동 감지",
      "슬랭·관용 표현·밈·축약어·문화적 표현에 대한 디코드 노트",
      "Gemini 응답을 JSON 스키마 형식으로 받아 번역 결과와 디코드 노트로 표시",
      "최근 디코드 기록 최대 50개 로컬 저장과 검색",
      "표현 단어장의 검색·복사·삭제와 표현별 예문 최대 3개 생성",
      "라이트·다크 모드 UI와 앱 아이콘, 한국어·영어 UI"
    ],
    "features_en": [
      "Translation between English, Korean, Japanese, Spanish, and Russian, with a choice of Formal, Plain, or Zalpha style",
      "Automatic, on-device input-language detection with script checks and Apple's NaturalLanguage framework",
      "Decode notes for slang, idioms, memes, abbreviations, and culturally loaded phrases",
      "Gemini responses requested in a JSON schema and shown as the translation and decode notes",
      "Local history of up to 50 recent decodes, with search",
      "Saved expressions with search, copy, delete, and up to 3 generated examples each",
      "Light and dark mode UI and app icons, with English and Korean UI"
    ],
    "stackGroups": [
      {
        "label_ko": "언어",
        "label_en": "Language",
        "items": [
          "Swift"
        ]
      },
      {
        "label_ko": "UI",
        "label_en": "UI",
        "items": [
          "UIKit",
          "Storyboard"
        ]
      },
      {
        "label_ko": "AI",
        "label_en": "AI",
        "items": [
          "Firebase AI Logic",
          "Gemini 3.1 Flash-Lite"
        ]
      },
      {
        "label_ko": "Apple 프레임워크",
        "label_en": "Apple frameworks",
        "items": [
          "NaturalLanguage"
        ]
      },
      {
        "label_ko": "로컬 저장",
        "label_en": "Local storage",
        "items": [
          "UserDefaults",
          "Codable JSON"
        ]
      },
      {
        "label_ko": "플랫폼",
        "label_en": "Platform",
        "items": [
          "iOS"
        ]
      }
    ],
    "stackShort": [
      "Swift",
      "UIKit",
      "Firebase AI Logic",
      "Gemini"
    ],
    "links": [
      {
        "kind": "repo",
        "url": "https://github.com/hyunseop827/zalpha-decoder",
        "label_ko": "GitHub 저장소",
        "label_en": "GitHub repository"
      },
      {
        "kind": "video",
        "url": "https://www.youtube.com/watch?v=FZlDrd5T-ns",
        "label_ko": "데모 영상(영어)",
        "label_en": "Demo video (English)"
      }
    ],
    "youtubeId": "FZlDrd5T-ns",
    "logo": "assets/projects/zalpha-decoder/icon.webp",
    "logoDark": "assets/projects/zalpha-decoder/icon-dark.webp",
    "images": [
      {
        "src": "assets/projects/zalpha-decoder/decode-result.webp",
        "kind": "screenshot",
        "width": 739,
        "height": 1600,
        "caption_ko": "영어 슬랭 문장을 잘파 스타일 한국어로 번역한 결과와 디코드 노트",
        "caption_en": "English slang decoded into Korean in the Zalpha style, with decode notes"
      },
      {
        "src": "assets/projects/zalpha-decoder/history.webp",
        "kind": "screenshot",
        "width": 739,
        "height": 1600,
        "caption_ko": "같은 문장을 격식·기본·잘파 스타일로 바꾼 디코드 기록",
        "caption_en": "History with the same sentence in Formal, Plain, and Zalpha styles"
      },
      {
        "src": "assets/projects/zalpha-decoder/saved-slang.webp",
        "kind": "screenshot",
        "width": 739,
        "height": 1600,
        "caption_ko": "저장한 표현의 뜻과 생성된 예문",
        "caption_en": "Saved expression with its meaning and generated examples"
      },
      {
        "src": "assets/projects/zalpha-decoder/main-dark.webp",
        "kind": "screenshot",
        "width": 739,
        "height": 1600,
        "caption_ko": "다크 모드 메인 화면",
        "caption_en": "Main screen in dark mode"
      }
    ],
    "notes_ko": "직접 빌드하려면 Firebase 프로젝트의 GoogleService-Info.plist와 Gemini를 쓰도록 설정한 Firebase AI Logic이 필요합니다.",
    "notes_en": "Building it requires a GoogleService-Info.plist from a Firebase project with Firebase AI Logic enabled for Gemini.",
    "order": 13
  },
  {
    "id": "hangeul-filename-fixer",
    "type": "personal",
    "include": true,
    "featured": false,
    "repo": "hyunseop827/hangeul-filename-fixer",
    "title_ko": "한글 파일명 정리기",
    "title_en": "Hangeul Filename Fixer",
    "tagline_ko": "한글 파일명이 Windows에서 분리되어 보이는 문제를 줄이는 macOS 앱",
    "tagline_en": "macOS app that makes NFC-normalized, Windows-safe copies of files with Korean names",
    "summary_ko": "macOS에서 정상으로 보이는 한글 파일명도 Windows나 일부 업로드 환경에서는 자모가 분리되어 보일 수 있습니다. 이 앱은 파일명을 NFC로 정규화하고 Windows에서 쓸 수 없는 문자를 정리한 새 사본을 만들며, 원본 파일은 변경하지 않습니다. AI 코딩 에이전트로 개발했으며, 저는 요구사항과 명세를 정하고 결과물을 직접 써 보며 검증·개선했습니다.",
    "summary_en": "Korean filenames that look fine on macOS can show up as separated letters (jamo) on Windows or in some upload flows. This app creates a new copy with an NFC-normalized, Windows-safe filename and leaves the original file untouched. I built it with AI coding agents: I defined the requirements and specs, then used the results myself to verify and refine them.",
    "period_ko": "2026.06",
    "period_en": "Jun 2026",
    "context_ko": "개인 프로젝트",
    "context_en": "Personal project",
    "role_ko": "1인 프로젝트 · AI 코딩 에이전트로 개발",
    "role_en": "Solo project · built with AI coding agents",
    "team_ko": "",
    "team_en": "",
    "platform": "macOS",
    "features_ko": [
      "드래그앤드롭·클릭으로 파일 선택, Windows에서 보일 수 있는 이름과 변환 후 이름 미리보기",
      "기존 한글 이름을 NFC로 정리하거나 새 이름 입력 (확장자는 원본 유지)",
      "Windows에서 쓸 수 없는 문자·제어 문자 치환, 끝 공백·마침표 정리, CON·PRN 등 예약 이름 회피",
      "원본 폴더 또는 선택한 위치에 사본 저장, 같은 이름이 있으면 (1), (2) 번호 추가",
      "복사 후 실제 저장된 파일명을 inode로 찾아 NFC 재검증, 실패 시 사본 삭제",
      "화면에서 파일 시스템에 직접 접근하지 않는 Electron 보안 설정 (contextIsolation 적용)"
    ],
    "features_en": [
      "File selection by drag and drop or click, with a preview of how the name may look on Windows and the converted name",
      "Option to keep the Korean name (normalized to NFC) or enter a new one, with the original extension kept",
      "Windows-safe cleanup: disallowed and control characters replaced, trailing spaces and periods trimmed, reserved names such as CON and PRN avoided",
      "Copy saved to the original folder or a chosen one, with (1), (2) suffixes when the name already exists",
      "Post-copy re-check that finds the saved filename by inode and confirms it is NFC, deleting the copy if not",
      "Electron security settings that keep the UI from accessing the file system directly (context isolation on)"
    ],
    "stackGroups": [
      {
        "label_ko": "언어",
        "label_en": "Language",
        "items": [
          "TypeScript"
        ]
      },
      {
        "label_ko": "프레임워크",
        "label_en": "Frameworks",
        "items": [
          "Electron",
          "React"
        ]
      },
      {
        "label_ko": "빌드·배포",
        "label_en": "Build & Release",
        "items": [
          "Vite",
          "electron-builder (DMG)",
          "GitHub Releases"
        ]
      },
      {
        "label_ko": "플랫폼",
        "label_en": "Platform",
        "items": [
          "macOS"
        ]
      }
    ],
    "stackShort": [
      "TypeScript",
      "Electron",
      "React",
      "Vite"
    ],
    "links": [
      {
        "kind": "repo",
        "url": "https://github.com/hyunseop827/hangeul-filename-fixer",
        "label_ko": "GitHub 저장소",
        "label_en": "GitHub repository"
      },
      {
        "kind": "download",
        "url": "https://github.com/hyunseop827/hangeul-filename-fixer/releases/download/v1.0.0/hangeul-filename-fixer-1.0.0.dmg",
        "label_ko": "macOS DMG 다운로드",
        "label_en": "Download macOS DMG"
      },
      {
        "kind": "release",
        "url": "https://github.com/hyunseop827/hangeul-filename-fixer/releases/tag/v1.0.0",
        "label_ko": "릴리스 v1.0.0",
        "label_en": "Release v1.0.0"
      },
      {
        "kind": "docs",
        "url": "https://github.com/hyunseop827/hangeul-filename-fixer/blob/main/README.en.md",
        "label_ko": "영문 README",
        "label_en": "English README"
      }
    ],
    "logo": "assets/projects/hangeul-filename-fixer/icon.webp",
    "images": [
      {
        "src": "assets/projects/hangeul-filename-fixer/screenshot-1.webp",
        "kind": "screenshot",
        "width": 825,
        "height": 1080,
        "caption_ko": "사본 생성 완료: 이름 미리보기와 Finder에서 보기 버튼",
        "caption_en": "Copy created: name previews and the Show in Finder button (Korean UI)"
      },
      {
        "src": "assets/projects/hangeul-filename-fixer/screenshot-2.webp",
        "kind": "screenshot",
        "width": 943,
        "height": 1080,
        "caption_ko": "드래그앤드롭 또는 클릭으로 파일을 고르는 첫 화면",
        "caption_en": "Start screen for dropping or choosing a file (Korean UI)"
      },
      {
        "src": "assets/projects/hangeul-filename-fixer/screenshot-3.webp",
        "kind": "screenshot",
        "width": 943,
        "height": 1080,
        "caption_ko": "기존 이름 유지: 한글 이름을 NFC로 정리",
        "caption_en": "Keep Original Name: the Korean name normalized to NFC (Korean UI)"
      },
      {
        "src": "assets/projects/hangeul-filename-fixer/screenshot-4.webp",
        "kind": "screenshot",
        "width": 943,
        "height": 1080,
        "caption_ko": "이름 바꾸기: 새 이름 입력, 확장자는 원본 유지",
        "caption_en": "Rename: a new base name with the original extension kept (Korean UI)"
      }
    ],
    "notes_ko": "Apple 공증을 받지 않은 ad-hoc 서명 빌드라 첫 실행 시 macOS 경고가 표시될 수 있습니다. 테스트에서 Naver 메일, Daum 메일, Safari + Gmail로 보낸 사본은 Windows에서 정상 표시됐지만, Chrome + Gmail 웹 첨부에서는 파일명이 다시 분리될 수 있습니다. 그래서 README에서는 Gmail을 쓸 때 Safari에서 첨부하도록 권장합니다.",
    "notes_en": "This is an ad-hoc signed build that is not notarized by Apple, so macOS may show a warning on first launch. In testing, copies sent through Naver Mail, Daum Mail, and Safari + Gmail showed correct names on Windows, but Chrome + Gmail web attachments can decompose the filename again, so the README recommends attaching from Safari when using Gmail.",
    "order": 10
  },
  {
    "id": "log-scope",
    "type": "personal",
    "include": true,
    "featured": false,
    "repo": "hyunseop827/log-scope",
    "title_ko": "LogScope",
    "title_en": "LogScope",
    "tagline_ko": "Spring Boot 오류 로그와 Nginx 접근 로그를 함께 확인하는 C 기반 CLI",
    "tagline_en": "C command-line tool for reading Spring Boot error logs alongside Nginx access logs",
    "summary_ko": "Spring Boot 오류 로그와 Nginx 접근 로그를 함께 분석하는 C 기반 CLI입니다. API 경로별로 어떤 Spring ErrorCode가 발생했는지, Nginx에서 어떤 4xx·5xx 응답이 나갔는지, 두 기록이 서로 일치하는지 확인하려고 만들었습니다. 요청 단위 추적이 아니라 method·path·status 기준의 집계 건수를 비교합니다. AI 코딩 에이전트로 개발했으며, 저는 요구사항과 명세를 정하고 결과물을 직접 써 보며 검증·개선했습니다.",
    "summary_en": "A C command-line tool that analyzes Spring Boot error logs together with Nginx access logs. It shows which Spring ErrorCode each API path produced, which paths returned 4xx/5xx at the Nginx layer, and whether the two records line up. Matching compares aggregate counts by method, path, and status rather than tracing individual requests. I built it with AI coding agents: I defined the requirements and specs, then used the results myself to verify and refine them.",
    "period_ko": "2026.06",
    "period_en": "Jun 2026",
    "context_ko": "개인 프로젝트",
    "context_en": "Personal project",
    "role_ko": "1인 프로젝트 · AI 코딩 에이전트로 개발",
    "role_en": "Solo project · built with AI coding agents",
    "team_ko": "",
    "team_en": "",
    "platform": "CLI (macOS · Linux)",
    "features_ko": [
      "spring 모드: ERROR·WARN 로그를 API 경로·status·ErrorCode별로 집계",
      "Spring 로그의 key=value 필드 파싱과 --all-fields 전체 필드 조회",
      "nginx 모드: 기본 combined 형식 접근 로그의 4xx·5xx 응답을 method·path·status별로 집계",
      "match 모드: method·path·status 기준 MATCHED·NGINX_ONLY·SPRING_ONLY 판정",
      "비교 필드(method·path·status)가 빠진 Spring 로그 별도 목록",
      "로그를 한 줄씩 읽어 집계, 항목 수에 따라 카운터 크기 자동 확장",
      "파서·집계·출력 모듈 분리와 CMake 빌드, 세 모드를 바로 실행해 볼 수 있는 샘플 로그"
    ],
    "features_en": [
      "Spring mode: ERROR and WARN logs grouped by API path, status, and ErrorCode",
      "Generic key=value parsing of Spring logs, with --all-fields to list every parsed field",
      "Nginx mode: 4xx and 5xx responses counted by method, path, and status from the default combined access log format",
      "Match mode: each method + path + status labeled MATCHED, NGINX_ONLY, or SPRING_ONLY",
      "Separate list of Spring logs missing the method, path, or status needed for matching",
      "Line-by-line log reading, with counters that grow as new entries appear",
      "Separate parser, aggregation, and report modules with a CMake build, plus sample logs to run all three modes"
    ],
    "stackGroups": [
      {
        "label_ko": "언어",
        "label_en": "Language",
        "items": [
          "C11"
        ]
      },
      {
        "label_ko": "빌드",
        "label_en": "Build",
        "items": [
          "CMake",
          "clang (macOS)",
          "gcc (Linux)"
        ]
      },
      {
        "label_ko": "분석 대상",
        "label_en": "Log sources",
        "items": [
          "Spring Boot",
          "Nginx"
        ]
      }
    ],
    "stackShort": [
      "C11",
      "CMake"
    ],
    "links": [
      {
        "kind": "repo",
        "url": "https://github.com/hyunseop827/log-scope",
        "label_ko": "GitHub 저장소",
        "label_en": "GitHub repository"
      }
    ],
    "images": [],
    "notes_ko": "",
    "notes_en": "",
    "order": 14,
    "sample": "==================================================\n[Match Error Mapping]\n--------------------------------------------------\nMatch Key: method + path + status\n\nmethod path                             status  nginx_count   spring_code       spring_count   result\nPOST   /api/orders                      409     4             BREAD_002         4              MATCHED\nGET    /api/admin                       502     1             NONE              0              NGINX_ONLY\nPOST   /api/internal/batch              500     0             BATCH_001         1              SPRING_ONLY",
    "sampleCaption_ko": "README에 있는 match 모드 출력 예시",
    "sampleCaption_en": "Sample match-mode output from the README"
  }
];
