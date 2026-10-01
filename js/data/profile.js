// 소개 · 경력 · 이력서 데이터 (Profile, about, experience and resume)
// - *_ko 는 한국어, *_en 은 영어 필드입니다. 전화번호·주소 등 개인 정보는 넣지 않습니다.
// - experience[].kind: work | education | activity | service
// - experience[].resumeOnly: true 이면 이력서(서류)에만 표시하고 경험 페이지에서는 뺍니다.
// - experience[].resumeContext_*: 이력서 경험 항목의 부가 설명(조직 · 구분 뒤에 이어 붙임).
// - experience[].resumeDesc_*: 이력서 활동 항목 아래 한 줄 설명. resume.certificates[].resumeDate_*: 이력서에만 쓰는 기간 표기(홈·소개는 date_*).
// - resume.resumeProjects[].href: projectId가 없는 항목(예: 개인 프로젝트 묶음)의 제목 링크.
window.SITE_PROFILE = {
  "updated": "2026-10-01",
  "profile": {
    "name_ko": "김현섭",
    "name_en": "Hyunseop Kim",
    "role_ko": "백엔드 · DevOps 개발자",
    "role_en": "Backend & DevOps Developer",
    "headline_ko": "코드보다 문서를 먼저 씁니다.",
    "headline_en": "I write the spec before the code.",
    "heroIntro_ko": "한성대학교 컴퓨터공학부에서 빅데이터·모바일소프트웨어 트랙을 전공하고 있으며, 2027년 2월 졸업 예정인 김현섭입니다. 교내 팀 프로젝트에서 Java·Spring Boot 백엔드 개발을 주도했고, 일경험사업에서는 서비스 기획·명세와 CI/CD·AWS 배포를 맡았습니다. 개발 지식이 없는 사람도 쉽게 쓸 수 있는 AI 서비스를 만드는 것이 목표입니다.",
    "heroIntro_en": "I'm Hyunseop Kim, a Computer Engineering student at Hansung University in the Big Data and Mobile Software tracks. I expect to graduate in February 2027. I led backend development with Java and Spring Boot on a university team project, and in a work experience program I handled planning, specs, CI/CD, and AWS deployment. My goal is to build AI services that anyone can use, even without a development background.",
    "strengths": [
      {
        "title_ko": "체계성",
        "title_en": "Organized",
        "text_ko": "일이나 프로젝트를 시작할 때 문서·회의록 양식과 일정, 작업 규칙부터 정리합니다. 이렇게 공통 기준을 세워 팀 내 의사소통이 효율적으로 이루어지도록 합니다.",
        "text_en": "When I start a task or project, I first set up document and meeting-note templates, a schedule, and working rules. Setting these shared standards helps the team communicate efficiently."
      },
      {
        "title_ko": "꾸준함과 책임감",
        "title_en": "Consistency and responsibility",
        "text_ko": "대학교에서 5학기 연속 성적우수장학금을 받았습니다. 처음 다루는 도구도 따로 공부하고 모르는 부분은 질문해 가며, 맡은 일을 기한 안에 끝냅니다.",
        "text_en": "I earned merit scholarships five semesters in a row at university. I study new tools on my own, ask when I am unsure, and finish my work on time."
      },
      {
        "title_ko": "AI 에이전트 활용",
        "title_en": "Working with AI agents",
        "text_ko": "평소 필요한 앱과 작업 환경은 AI 에이전트를 활용해 직접 만들어 씁니다. 팀 프로젝트에서는 에이전트가 따를 작업 규칙을 정리하고, 기능별로 명세 → 구현 → 리뷰 문서를 남기는 방식을 도입합니다.",
        "text_en": "I use AI agents to build the apps and work setup I need. On team projects, I write the working rules the agents follow and set up a workflow with spec → implementation → review docs for each feature."
      }
    ],
    "email": "gustjq2580@gmail.com",
    "github": "https://github.com/hyunseop827",
    "linkedin": "https://www.linkedin.com/in/hyunseopkim827/",
    "location_ko": "서울, 대한민국",
    "location_en": "Seoul, Korea",
    "education_ko": "한성대학교",
    "education_en": "Hansung University",
    "educationNote_ko": "컴퓨터공학부 학사 · 2027년 2월 졸업 예정",
    "educationNote_en": "Bachelor's in Computer Engineering · Expected Feb 2027"
  },
  "about": {
    "lead_ko": "한성대학교 컴퓨터공학부에서 빅데이터·모바일소프트웨어 트랙을 전공하고 있으며, 2027년 2월 졸업 예정입니다. 일을 체계적으로 진행하는 편이며, 문서화하는 것을 선호합니다. 대학교에서는 평점 4.19/4.5와 5학기 연속 성적우수장학금으로 꾸준히 좋은 성적을 유지했습니다.",
    "lead_en": "I study Computer Engineering at Hansung University in the Big Data and Mobile Software tracks and expect to graduate in February 2027. I tend to work in an organized way and prefer to keep things documented. At university, I have kept my grades high, with a 4.19/4.5 GPA and merit scholarships five semesters in a row.",
    "sections": [
      {
        "id": "beginnings",
        "title_ko": "개발을 시작한 계기",
        "title_en": "How I got started",
        "paragraphs_ko": [
          "전자 관련 일을 하시는 아버지 덕분에 어릴 때부터 컴퓨터를 가까이 접했고, 집에 있던 UNIX API 책을 읽기도 했습니다. 이런 관심이 이어져 컴퓨터공학부에 진학했습니다."
        ],
        "paragraphs_en": [
          "Thanks to my father, who works in electronics, I grew up around computers and even read a book on UNIX APIs that we had at home. That interest led me to study Computer Engineering."
        ],
        "relatedProjectIds": []
      },
      {
        "id": "backend-devops",
        "title_ko": "백엔드와 DevOps",
        "title_en": "Backend and DevOps",
        "paragraphs_ko": [
          "대학에서 요구사항을 정리하고 API와 DB를 설계하는 일이 제 성향에 잘 맞아 팀 프로젝트에서 백엔드를 맡기 시작했고, 이후 AWS와 CI/CD를 다루는 DevOps로 관심이 이어졌습니다. ERSync에서는 서비스 아이디어를 제안했고, 백엔드 기술 스택 선정과 기획·명세, AI 에이전트 작업 규칙, CI/CD·AWS 배포를 맡았습니다. 백엔드 기능 구현은 다른 백엔드 팀원이 주로 맡았고, 저는 통합 리스크 리뷰를 작성한 뒤 후속 작업을 명세로 정리해 AI 에이전트로 반영했습니다. 오늘의 빵에서는 JWT 인증과 Toss Payments 결제 연동을 구현하고, AWS EC2·RDS·S3 배포 환경을 구성했습니다."
        ],
        "paragraphs_en": [
          "At university, I found that organizing requirements and designing APIs and databases suited me, so I began taking the backend role on team projects and later extended my interest to DevOps with AWS and CI/CD. On ERSync, I proposed the service idea, chose the backend stack, handled planning and specs, wrote the AI agents' working rules, and set up the CI/CD pipeline and AWS deployment. A fellow backend developer implemented most of the backend features; I wrote a consolidated risk review and turned its findings into specs for follow-up work that AI agents applied. On TodayBread, I implemented JWT authentication and the Toss Payments integration, and set up deployment on AWS EC2 with RDS and S3."
        ],
        "relatedProjectIds": [
          "ersync",
          "todaybread"
        ]
      },
      {
        "id": "documentation",
        "title_ko": "문서화",
        "title_en": "Documentation",
        "paragraphs_ko": [
          "팀원마다 역할과 작업 규칙을 다르게 이해해 혼란을 겪으며, 문서를 남기는 것만큼 모두가 같은 의미로 읽을 수 있게 쓰는 일이 중요하다는 것을 배웠습니다. ERSync에서는 기능마다 명세·구현·리뷰 기록을 남기고, 프론트엔드 연동 문서는 실제 구현된 API를 기준으로 쓰는 방식을 제안해 도입했습니다. 발표에서는 현직자에게 긍정적인 피드백을 받았고, 팀원들도 이 방식에 만족했습니다."
        ],
        "paragraphs_en": [
          "When teammates understood roles and working rules differently, confusion followed. It taught me that writing things down is not enough; the docs have to read the same way to everyone. On ERSync, I proposed a workflow the team adopted: each feature got a spec, an implementation note, and a review record, and frontend handoff docs followed the API as actually built. The project received positive feedback from industry professionals at the final presentation, and my teammates were happy with the workflow."
        ],
        "relatedProjectIds": [
          "ersync"
        ]
      },
      {
        "id": "ai",
        "title_ko": "AI 에이전트 활용",
        "title_en": "Working with AI agents",
        "paragraphs_ko": [
          "AI 에이전트와 함께 개발할 때는 에이전트가 따를 작업 규칙과 판단 기준을 문서로 정해 두고, 사람이 결정할 부분을 분명히 나눕니다. ERSync에서는 개발자가 AI와 함께 기능 명세를 쓰면 AI가 구현과 로컬 검증을 거쳐 리뷰 문서와 필요한 프론트엔드 연동 문서까지 작성하도록 AGENTS.md에 절차를 정리했고, 보안·개인정보처럼 정책 판단이 필요한 부분은 사람이 결정하도록 했습니다. 개인 프로젝트 Menu Pulse에서도 버전 관리와 릴리스 노트 작성 규칙을 AGENTS.md에 정리했습니다."
        ],
        "paragraphs_en": [
          "When I develop with AI agents, I write down the working rules and decision criteria they follow and make clear which calls are left to people. On ERSync, I set out a flow in AGENTS.md in which a developer drafted each feature spec with the AI, and the AI then implemented and verified it locally and wrote the review and any needed frontend handoff docs; questions that needed a policy call, such as security or personal data, went to a person. For Menu Pulse, a personal project, I also wrote versioning and release-note rules into its AGENTS.md."
        ],
        "relatedProjectIds": [
          "ersync",
          "menu-pulse"
        ]
      },
      {
        "id": "personal-tools",
        "title_ko": "개인 맞춤화",
        "title_en": "Personalizing my setup",
        "paragraphs_ko": [
          "AI 코딩 에이전트로 제 사용 방식에 맞는 앱과 작업 환경을 만들어 씁니다. 필요한 정보만 보여 주는 가벼운 모니터링 앱을 찾다가 메뉴바 앱 Menu Pulse를 만들었고, 지금도 사용하고 있습니다. 이 밖에도 macOS 앱 Finder Presets와 한글 파일명 정리기를 같은 방식으로 만들었습니다. 코드 작성은 대부분 에이전트에 맡기고, 저는 필요한 기능과 동작 기준을 정한 뒤 직접 써 보며 결과를 검증하고 개선합니다."
        ],
        "paragraphs_en": [
          "I use AI coding agents to build apps and a setup tailored to how I work. When I couldn't find a lightweight monitoring app that showed only what I needed, I built my own menu bar app, Menu Pulse, and I still use it. I built two other macOS apps, Finder Presets and Hangeul Filename Fixer, the same way. The agents write most of the code; I decide what each tool should do and how it should behave, then use it myself to check the results and improve them."
        ],
        "relatedProjectIds": [
          "menu-pulse",
          "finder-presets",
          "hangeul-filename-fixer"
        ]
      },
      {
        "id": "direction",
        "title_ko": "앞으로의 방향",
        "title_en": "Where I'm heading",
        "paragraphs_ko": [
          "제가 AI 에이전트로 도구를 만들어 쓰듯, 개발 지식이 없는 사람도 필요한 작업을 쉽게 처리할 수 있는 AI 서비스를 만드는 것이 목표입니다. Zalpha Decoder에 Gemini 기반 번역 기능을 넣으며 신조어와 문맥을 더 잘 반영하는 번역 모델에도 관심이 생겼습니다. 기존 모델을 활용해 본 경험을 바탕으로, 장기적으로는 석사 과정에서 머신러닝과 AI를 깊이 공부하고 싶습니다."
        ],
        "paragraphs_en": [
          "Just as I build my own tools with AI agents, I want to create AI services that let people without a development background easily handle what they need. Adding Gemini-based translation to Zalpha Decoder got me interested in translation models that better reflect new slang and context. Building on my experience using existing models, I would like to study machine learning and AI in depth in a master's program in the long run."
        ],
        "relatedProjectIds": [
          "zalpha-decoder"
        ]
      }
    ],
    "values": [
      {
        "title_ko": "시작 전에 정리",
        "title_en": "Set things up first",
        "text_ko": "프로젝트를 시작하면 회의록 양식과 작업 규칙, 일정, 자료를 모을 곳부터 정합니다. 팀원 모두가 같은 기준으로 일할 수 있게 하기 위해서입니다.",
        "text_en": "When a project starts, I begin by settling the meeting-note template, working rules, schedule, and where files will live, so that everyone on the team works from the same standards."
      },
      {
        "title_ko": "끝까지 확인",
        "title_en": "Double-check before finishing",
        "text_ko": "마무리 전에 결과를 한 번 더 확인합니다. 발표 직전 최종 점검에서 오류를 찾아 바로 고쳤고, 배포한 뒤에는 변경이 실제 서버에 반영됐는지까지 확인합니다.",
        "text_en": "I review the result once more before calling it done. A final check right before one presentation caught an error I fixed on the spot, and after a deployment I confirm the change has actually reached the server."
      },
      {
        "title_ko": "스스로 학습",
        "title_en": "Learn on my own",
        "text_ko": "처음 다루는 도구와 작업 방식은 따로 시간을 내 공부하고 연습합니다. 낯선 도구를 다뤄야 했던 팀 프로젝트에서도 이렇게 준비해 맡은 부분을 기한 전에 마쳤습니다.",
        "text_en": "When a tool or way of working is new to me, I set aside time to study and practice it. On a team project that involved unfamiliar tools, that preparation let me finish my part before the deadline."
      }
    ]
  },
  "experience": [
    {
      "id": "mobileappdev",
      "kind": "work",
      "org_ko": "모바일앱개발협동조합",
      "org_en": "Mobile App Development Cooperative",
      "orgUrl": "https://mobileappdev.kr/",
      "title_ko": "대학생 참여 · 기획·명세·DevOps 담당",
      "title_en": "Student Participant · Planning, Specs & DevOps",
      "type_ko": "일경험사업",
      "type_en": "Work Experience Program",
      "period_ko": "2026.07.06 – 2026.08.30",
      "period_en": "Jul 6 – Aug 30, 2026",
      "start": "2026-07",
      "end": "2026-08",
      "location_ko": "서울",
      "location_en": "Seoul, Korea",
      "summary_ko": "일경험사업 팀 프로젝트로 응급환자 이송 협업 시스템 ERSync를 만들었으며, 서비스 아이디어는 제가 제안했습니다. 백엔드 기능 구현은 다른 백엔드 팀원이 주로 맡았고, 저는 기획과 명세, AI 에이전트 작업 규칙, CI/CD·AWS 배포, 통합 리스크 리뷰를 담당했습니다.",
      "summary_en": "Proposed the service idea for ERSync, an emergency patient transport coordination system, which our team built in the Work Experience Program. Handled planning and specs, the AI agents' working rules, CI/CD and AWS deployment, and a consolidated risk review, while a fellow backend developer implemented most of the backend features.",
      "bullets_ko": [
        "GitHub Actions·Docker 기반 CI/CD 구성: PR 시 테스트·이미지 빌드, main 반영 시 ECR 푸시 후 SSM으로 EC2 배포",
        "AWS EC2·Nginx·ECR·비공개 RDS·Secrets Manager 구성, SSH 대신 SSM 접속, GitHub OIDC·IAM 최소 권한 설정",
        "readiness 실패 시 이전 컨테이너로 복구하는 EC2 배포 스크립트, 배포 버전 API, 병원·관리자 웹 Cloudflare Workers 자동 배포",
        "프로젝트 아이디어 제안, 백엔드 기술 스택 선정, 서비스 기획·MVP 요구사항 정의와 초기 DB·API 설계",
        "AI 에이전트 개발 체계 제안·도입: AGENTS.md 작업 규칙·정책 확인 기준, 공통 컨텍스트, 기능별 명세·구현·리뷰·연동 문서 템플릿 작성"
      ],
      "bullets_en": [
        "Set up GitHub Actions and Docker CI/CD: PR tests and image builds; on main, ECR push and SSM deploy to EC2",
        "Set up AWS EC2, Nginx, ECR, private RDS, Secrets Manager; SSM, not SSH; GitHub OIDC with least-privilege IAM",
        "Added a readiness-rollback EC2 deploy script, deploy-version API, and Cloudflare Workers CD for hospital/admin web",
        "Proposed the idea, chose the backend stack, planned the service and MVP requirements, designed the initial DB/API",
        "Proposed and set up AI-agent rules (AGENTS.md, policy checks), shared context, spec/impl/review/handoff templates"
      ],
      "stack": [
        "Spring Boot",
        "Docker",
        "GitHub Actions",
        "AWS EC2",
        "AWS ECR",
        "AWS RDS",
        "AWS Secrets Manager",
        "Nginx",
        "Cloudflare Workers"
      ],
      "relatedProjectIds": [
        "ersync"
      ],
      "resumeContext_ko": "ERSync (응급환자 이송 협업 시스템) · 4인 팀(프론트엔드 2명, 백엔드 2명)",
      "resumeContext_en": "ERSync (emergency patient transport coordination system) · 4-person team (2 frontend, 2 backend)"
    },
    {
      "id": "h-lep",
      "kind": "activity",
      "org_ko": "한성대학교 H-LEP",
      "org_en": "Hansung University H-LEP",
      "title_ko": "영어 토론 동아리 회원",
      "title_en": "English Discussion Club Member",
      "period_ko": "2024.09 – 2025.06",
      "period_en": "Sep 2024 – Jun 2025",
      "start": "2024-09",
      "end": "2025-06",
      "location_ko": "서울",
      "location_en": "Seoul, Korea",
      "summary_ko": "매주 영어로 토론하는 교내 동아리에서 활동했습니다.",
      "summary_en": "Member of a campus club that holds weekly discussions in English.",
      "bullets_ko": [
        "매주 선정된 주제에 대한 영어 토론 참여"
      ],
      "bullets_en": [
        "Took part in weekly English discussions on a range of selected topics"
      ],
      "relatedProjectIds": [],
      "resumeDesc_ko": "매주 선정된 주제로 영어 토론",
      "resumeDesc_en": "Weekly English discussions on selected topics"
    },
    {
      "id": "winter-programming-camp",
      "kind": "activity",
      "org_ko": "한성대학교",
      "org_en": "Hansung University",
      "title_ko": "제9회 동계 프로그래밍 캠프 참가",
      "title_en": "9th Winter Programming Camp, Participant",
      "period_ko": "2025.01.20 – 2025.01.24",
      "period_en": "Jan 20 – 24, 2025",
      "start": "2025-01",
      "end": "2025-01",
      "location_ko": "경기 양평",
      "location_en": "Yangpyeong, Gyeonggi",
      "summary_ko": "5일간 합숙하며 진행한 한성대학교 프로그래밍 캠프입니다. 참가자마다 C·C++·Java 중 한 언어를 골라 실습했고, 저는 Java를 선택했습니다.",
      "summary_en": "A five-day residential programming camp run by Hansung University. Each participant worked in C, C++, or Java; I chose Java.",
      "bullets_ko": [
        "프로그래밍과 문제 해결 집중 실습",
        "현직자 세미나를 통한 개발 직무와 진로 탐색"
      ],
      "bullets_en": [
        "Completed intensive programming and problem-solving exercises",
        "Attended industry-led seminars on software roles and career paths"
      ],
      "relatedProjectIds": [],
      "resumeDesc_ko": "5일 합숙 · Java 집중 실습과 문제 해결 · 현직자 세미나 참석",
      "resumeDesc_en": "5-day residential camp · intensive Java practice and problem solving · industry seminars"
    },
    {
      "id": "hansung-university",
      "kind": "education",
      "org_ko": "한성대학교",
      "org_en": "Hansung University",
      "title_ko": "컴퓨터공학부 (빅데이터·모바일소프트웨어 트랙)",
      "title_en": "Computer Engineering (Big Data and Mobile Software tracks)",
      "type_ko": "학사 · 졸업 예정",
      "type_en": "Bachelor's · Expected graduation",
      "period_ko": "2023.03 – 2027.02",
      "period_en": "Mar 2023 – Feb 2027",
      "start": "2023-03",
      "end": "2027-02",
      "location_ko": "서울",
      "location_en": "Seoul, Korea",
      "summary_ko": "컴퓨터공학부에서 빅데이터·모바일소프트웨어 트랙을 전공하고 있습니다.",
      "summary_en": "Studying Computer Engineering in the Big Data and Mobile Software tracks.",
      "bullets_ko": [
        "평점 4.19/4.5 (7개 학기 모두 4.0 이상), 127학점 취득",
        "성적우수장학금 5학기 연속 수혜 (2024년 1학기 – 2026년 1학기)",
        "모바일캡스톤디자인 오늘의 빵(TodayBread), 빅데이터프로그래밍 Review Refining 프로젝트 수행"
      ],
      "bullets_en": [
        "GPA 4.19/4.5 (4.0+ in all 7 semesters) with 127 credits earned",
        "Merit scholarships for five consecutive semesters (Spring 2024 – Spring 2026)",
        "Course projects: TodayBread (Mobile Capstone Design) and Review Refining (Big Data Programming)"
      ],
      "relatedProjectIds": [
        "todaybread",
        "review-refining"
      ]
    },
    {
      "id": "eland-eats",
      "kind": "work",
      "org_ko": "이랜드이츠 (애슐리퀸즈)",
      "org_en": "E-Land Eats (Ashley Queens)",
      "orgUrl": "https://elandeats.co.kr/",
      "title_ko": "주방 아르바이트",
      "title_en": "Part-time Kitchen Crew",
      "type_ko": "아르바이트",
      "type_en": "Part-time",
      "period_ko": "2022.05 – 2022.10",
      "period_en": "May – Oct 2022",
      "start": "2022-05",
      "end": "2022-10",
      "location_ko": "서울",
      "location_en": "Seoul, Korea",
      "summary_ko": "뷔페 레스토랑 주방에서 스시 파트를 맡았습니다.",
      "summary_en": "Worked the sushi station in a buffet restaurant kitchen.",
      "bullets_ko": [
        "스시 메뉴 조리·보충과 위생 관리",
        "혼잡 시간대 다른 주방 파트 지원"
      ],
      "bullets_en": [
        "Prepared and restocked sushi items while keeping the station clean",
        "Supported other kitchen stations during peak hours"
      ],
      "relatedProjectIds": [],
      "resumeOneLine": true
    },
    {
      "id": "rok-marine-corps",
      "kind": "service",
      "org_ko": "대한민국 해병대",
      "org_en": "Republic of Korea Marine Corps",
      "title_ko": "병역",
      "title_en": "Military Service",
      "type_ko": "만기 전역",
      "type_en": "Completed mandatory service",
      "period_ko": "2020.11 – 2022.05",
      "period_en": "Nov 2020 – May 2022",
      "start": "2020-11",
      "end": "2022-05",
      "summary_ko": "해병대에서 병역 의무를 마치고 만기 전역했습니다.",
      "summary_en": "Completed mandatory military service in the Marine Corps.",
      "bullets_ko": [],
      "bullets_en": [],
      "relatedProjectIds": []
    }
  ],
  "resume": {
    "summary_ko": "Java·Spring Boot로 백엔드를 개발하고 Docker·GitHub Actions 기반 CI/CD와 AWS 배포 환경을 구성해 왔습니다. 프로젝트 초기에는 AI 에이전트 작업 규칙과 기능별 명세·구현·리뷰 문서 템플릿을 만들고, 문서 양식·협업 규칙·일정 등 팀 컨벤션을 먼저 정리해 팀원 모두가 같은 기준으로 개발하고 효율적으로 소통할 수 있도록 합니다.",
    "summary_en": "I build backends with Java and Spring Boot and set up Docker/GitHub Actions CI/CD and AWS deployment. Early in a project, I write AI-agent rules, per-feature spec/implementation/review templates, and team conventions for docs, collaboration, and schedules, so everyone works to one standard and communicates efficiently.",
    "education": [
      {
        "school_ko": "한성대학교",
        "school_en": "Hansung University",
        "degree_ko": "컴퓨터공학부 학사",
        "degree_en": "Bachelor's in Computer Engineering",
        "major_ko": "빅데이터·모바일소프트웨어 트랙",
        "major_en": "Big Data & Mobile Software tracks",
        "period_ko": "2023.03 – 2027.02 (졸업 예정)",
        "period_en": "Mar 2023 – Feb 2027 (expected)",
        "gpa_ko": "4.19/4.5 · 127학점 취득 · 100점 환산 96.4 · 2026년 1학기까지 반영",
        "gpa_en": "4.19/4.5 · 127 credits · 96.4/100 equivalent · as of Spring 2026",
        "courses_ko": [
          "데이터베이스설계",
          "소프트웨어공학",
          "운영체제",
          "네트워크프로그래밍",
          "시스템프로그래밍",
          "디자인패턴",
          "빅데이터프로그래밍"
        ],
        "courses_en": [
          "Database Design",
          "Software Engineering",
          "Operating Systems",
          "Network Programming",
          "Systems Programming",
          "Design Patterns",
          "Big Data Programming"
        ]
      }
    ],
    "skills": [
      {
        "label_ko": "백엔드",
        "label_en": "Backend",
        "items": [
          "Java",
          "Spring Boot",
          "Spring Security",
          "JWT",
          "REST API",
          "SpringDoc OpenAPI"
        ]
      },
      {
        "label_ko": "DB",
        "label_en": "Database",
        "items": [
          "MySQL",
          "Spring Data JPA",
          "Flyway"
        ]
      },
      {
        "label_ko": "인프라",
        "label_en": "Infrastructure",
        "items_ko": [
          "AWS EC2·ECR·RDS·S3·Secrets Manager·SSM",
          "Cloudflare Workers",
          "Nginx",
          "Linux"
        ],
        "items_en": [
          "AWS (EC2, ECR, RDS, S3, Secrets Manager, SSM)",
          "Cloudflare Workers",
          "Nginx",
          "Linux"
        ]
      },
      {
        "label_ko": "CI/CD·테스트",
        "label_en": "CI/CD & Testing",
        "items": [
          "GitHub Actions",
          "Docker",
          "Docker Compose",
          "JUnit 5",
          "Testcontainers"
        ]
      },
      {
        "label_ko": "AI 에이전트 활용",
        "label_en": "AI Workflow",
        "items_ko": [
          "AI 코딩 에이전트",
          "AGENTS.md 작업 규칙",
          "명세 → 구현 → 리뷰 문서"
        ],
        "items_en": [
          "AI coding agents",
          "AGENTS.md working rules",
          "spec → implementation → review docs"
        ]
      },
      {
        "label_ko": "데이터 분석",
        "label_en": "Data Analysis",
        "items": [
          "Python",
          "pandas",
          "scikit-learn"
        ]
      },
      {
        "label_ko": "기타",
        "label_en": "Other",
        "items_ko": [
          "C",
          "Git·GitHub PR 기반 협업",
          "Notion"
        ],
        "items_en": [
          "C",
          "Git & GitHub PR-based collaboration",
          "Notion"
        ]
      }
    ],
    "languages": [
      {
        "name_ko": "한국어",
        "name_en": "Korean",
        "level_ko": "모국어",
        "level_en": "Native"
      },
      {
        "name_ko": "영어",
        "name_en": "English",
        "level_ko": "OPIc IH (2025.09) · TOEIC Speaking 150/200, IH (2026.09)",
        "level_en": "OPIc IH (Sep 2025) · TOEIC Speaking 150/200 (IH, Sep 2026)",
        "tests": [
          {
            "name": "OPIc",
            "score_ko": "IH",
            "score_en": "IH",
            "date_ko": "2025.09",
            "date_en": "Sep 2025"
          },
          {
            "name": "TOEIC Speaking",
            "score_ko": "150/200 (IH)",
            "score_en": "150/200 (IH)",
            "date_ko": "2026.09",
            "date_en": "Sep 2026"
          }
        ]
      }
    ],
    "certificates": [
      {
        "kind": "cert",
        "title_ko": "TOPCIT 수준 3",
        "title_en": "TOPCIT Level 3",
        "detail_ko": "602/1,000 · 정보통신기획평가원(IITP)",
        "detail_en": "602/1,000 · ICT competency test by IITP",
        "date_ko": "2026.05",
        "date_en": "May 2026"
      },
      {
        "kind": "award",
        "title_ko": "성적우수장학금",
        "title_en": "Merit Scholarship",
        "detail_ko": "한성대학교 · 5학기 연속",
        "detail_en": "Hansung University · 5 consecutive semesters",
        "terms_ko": "2024년 1·2학기, 2025년 1·2학기, 2026년 1학기",
        "terms_en": "Spring 2024, Fall 2024, Spring 2025, Fall 2025, Spring 2026",
        "date_ko": "2024 – 2026",
        "date_en": "2024 – 2026",
        "resumeDate_ko": "2024년 1학기 – 2026년 1학기",
        "resumeDate_en": "Spring 2024 – Spring 2026"
      }
    ],
    "resumeProjects": [
      {
        "projectId": "todaybread",
        "title_ko": "TodayBread (오늘의 빵) · 동네 빵집 마감 빵 주문·픽업 앱",
        "title_en": "TodayBread · Surplus-bread ordering and pickup app for local bakeries",
        "role_ko": "백엔드·DevOps 주도 · 모바일캡스톤디자인 · 4인 팀(프론트엔드 2명, 백엔드 2명) · 머지된 백엔드 PR 40건 중 39건 작성",
        "role_en": "Backend & DevOps Lead · Mobile Capstone Design course · 4-person team (2 frontend, 2 backend) · authored 39 of 40 merged backend PRs",
        "period_ko": "2026.03 – 2026.06",
        "period_en": "Mar – Jun 2026",
        "bullets_ko": [
          "Spring Boot 백엔드 구조 설계와 회원·매장·빵·장바구니·주문·리뷰 REST API 구현",
          "Spring Security·JWT 인증 구현, Argon2 기반 비밀번호·리프레시 토큰 해시 저장",
          "Toss Payments 결제 승인·취소 연동, Idempotency-Key 기반 중복 처리 방지, 결제 대기 주문 만료 스케줄러 구현",
          "MySQL 스키마 설계·Flyway 마이그레이션, Docker Compose 로컬 DB와 환경별 Spring 프로파일 구성, AWS EC2 배포와 RDS·S3 구성",
          "API·결제 흐름·DB 설정·개발 컨벤션 기술 문서 작성"
        ],
        "bullets_en": [
          "Designed the Spring Boot backend structure and built REST APIs for users, stores, bread, carts, orders, and reviews",
          "Implemented Spring Security JWT authentication, with Argon2 hashing for passwords and refresh tokens",
          "Integrated Toss Payments confirm/cancel; built Idempotency-Key deduplication and an unpaid-order expiry scheduler",
          "Designed the MySQL schema (Flyway); set up a Docker Compose local DB, per-env Spring profiles, EC2, RDS, S3",
          "Wrote technical docs on the APIs, payment flow, DB setup, and development conventions"
        ]
      },
      {
        "projectId": "review-refining",
        "title_ko": "Review Refining · 배달 앱 이벤트성 리뷰 탐지와 별점 보정",
        "title_en": "Review Refining · Detecting incentivized delivery-app reviews to adjust ratings",
        "role_ko": "데이터·머신러닝 담당 (빅데이터프로그래밍 · 4인 팀)",
        "role_en": "Data & Machine Learning (Big Data Programming course · 4-person team)",
        "period_ko": "2026.03 – 2026.06",
        "period_en": "Mar – Jun 2026",
        "bullets_ko": [
          "이벤트 확률이 높은 리뷰의 반영 비중을 낮추는 별점 보정 파이프라인 공동 설계, 처리 과정 대부분 구현",
          "배달의민족 리뷰 11,310건 통합·정제로 8,841건 데이터셋 구성, 메뉴명 기반 이벤트 리뷰 라벨링",
          "KcBERT 임베딩·메타데이터 결합 MLP 학습(PCA·SMOTE·5-fold 교차 검증), TF-IDF·메타데이터·KcBERT·하이브리드 모델 비교와 오답 분석, 단일 리뷰·CSV 입력 데모 구현"
        ],
        "bullets_en": [
          "Co-designed a rating-adjustment pipeline that down-weights likely incentivized reviews; implemented most of it",
          "Merged and cleaned 11,310 Baemin reviews into an 8,841-review dataset; labeled incentivized ones by menu name",
          "Trained an MLP on KcBERT embeddings plus metadata (PCA, SMOTE, 5-fold cross-validation); compared TF-IDF, metadata-only, KcBERT-only, and hybrid models with error analysis; built a demo for single-review and CSV input"
        ]
      },
      {
        "href": "projects.html#personal",
        "title_ko": "AI 코딩 에이전트로 개발한 도구",
        "title_en": "Tools built with AI coding agents",
        "role_ko": "개인 프로젝트 · Menu Pulse (메뉴바 모니터) · Finder Presets (Finder 보기 프리셋)",
        "role_en": "Personal projects · Menu Pulse (menu bar monitor) · Finder Presets (Finder view presets)",
        "period_ko": "2026.06 – 현재",
        "period_en": "Jun 2026 – present",
        "bullets_ko": [
          "도구별 요구사항·명세 정의, AI 코딩 에이전트 구현 결과를 직접 사용하며 검증·반복 개선",
          "GitHub Actions로 테스트 후 DMG 릴리스를 자동화해 버전 릴리스 운영 중"
        ],
        "bullets_en": [
          "Defined each tool's requirements and specs; verified the AI agents' output through hands-on use and iterated on it",
          "Automated test-gated DMG releases with GitHub Actions; ongoing versioned releases"
        ]
      }
    ]
  },
  "homeSkills": [
    {
      "label_ko": "백엔드",
      "label_en": "Backend",
      "items": [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "JWT",
        "MySQL",
        "Flyway"
      ]
    },
    {
      "label_ko": "인프라 · DevOps",
      "label_en": "Infra & DevOps",
      "items": [
        "AWS (EC2 · RDS · S3 · ECR)",
        "Nginx",
        "Linux",
        "Docker",
        "Docker Compose",
        "GitHub Actions"
      ]
    },
    {
      "label_ko": "AI 에이전트 활용",
      "label_en": "AI workflow",
      "items_ko": [
        "AI 코딩 에이전트",
        "AGENTS.md 작업 규칙",
        "명세 → 구현 → 리뷰 문서"
      ],
      "items_en": [
        "AI coding agents",
        "AGENTS.md working rules",
        "Spec → implementation → review docs"
      ]
    }
  ],
  "documents": [
    {
      "label_ko": "이력서 (PDF)",
      "label_en": "Resume (PDF)",
      "files": [
        {
          "label_ko": "한국어",
          "label_en": "Korean",
          "href": "documents/Hyunseop-Kim-Resume-KO.pdf",
          "download": "김현섭_이력서.pdf"
        },
        {
          "label_ko": "영어",
          "label_en": "English",
          "href": "documents/Hyunseop-Kim-Resume-EN.pdf",
          "download": "Hyunseop_Kim_Resume.pdf"
        }
      ]
    },
    {
      "label_ko": "재학 · 성적 증명서",
      "label_en": "Enrollment certificate & transcript",
      "note_ko": "생년월일 등 개인정보가 있어 공개하지 않습니다. 요청하시면 이메일로 보내 드립니다.",
      "note_en": "Not posted publicly because they contain personal details. I can send them by email on request.",
      "request": true
    }
  ]
};
