/* Hyunseop Kim — portfolio renderer.
   Every page is a thin HTML shell (body[data-page]); this script renders the sidebar,
   navigation, page content and footer from js/data/*.js in Korean or English. */
(() => {
  'use strict';

  const SITE = window.SITE_PROFILE || {};
  const ALL_PROJECTS = (window.SITE_PROJECTS || []).slice().sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  const PROJECTS = ALL_PROJECTS.filter(p => p.include !== false);
  const PAGE = document.body.dataset.page || 'home';
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  const store = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage may be blocked */ } },
  };
  const params = new URLSearchParams(location.search);
  let lang = document.documentElement.lang === 'en' ? 'en' : 'ko';
  if (params.get('lang') === 'en' || params.get('lang') === 'ko') store.set('hk-lang', params.get('lang'));

  /* ---------- UI strings ---------- */
  const UI = {
    ko: {
      skip: '본문 바로가기', mainNav: '주요 메뉴', profileLabel: '프로필', langGroup: '언어 선택',
      toDark: '다크 테마로 전환', toLight: '라이트 테마로 전환',
      home: '홈', about: '소개', projects: '프로젝트', team: '팀 프로젝트', personal: '개인 프로젝트',
      experience: '경험', resume: '서류', all: '전체',
      teamShort: '팀', personalShort: '개인',
      photoAlt: '김현섭 프로필 사진', copyEmail: '이메일 주소 복사', copied: '이메일 주소를 복사했습니다',
      readAbout: '소개 자세히 보기', viewResume: '이력서 보기',
      featured: '대표 프로젝트', viewAll: '전체 보기', recentExp: '경험',
      skills: '주력 기술', credentials: '어학 · 자격 · 장학',
      contactTitle: '함께 일할 기회를 찾고 있습니다', contactText: '채용 관련 제안이나 궁금한 점이 있으시면 이메일로 편하게 연락해 주세요. 확인하는 대로 답장드리겠습니다.', sendEmail: '이메일 보내기',
      role: '역할', period: '기간', context: '구분', teamComp: '팀 구성', platform: '플랫폼', org: '조직',
      projectFilter: '프로젝트 분류',
      teamDesc: '주로 백엔드와 DevOps를 담당했습니다.',
      copyFailed: '복사하지 못했습니다. 주소를 직접 선택해 주세요.', breadcrumb: '이동 경로', prevNext: '이전·다음 프로젝트', newTab: '(새 탭에서 열림)',
      descAbout: '김현섭의 소개: 일하는 방식, 개발을 시작한 계기, 백엔드와 DevOps, 문서화, 앞으로의 방향, 어학·자격·장학.',
      descProjects: '김현섭의 팀 프로젝트(ERSync, 오늘의 빵 등)와 개인 프로젝트(Menu Pulse, Finder Presets 등).',
      descExperience: '김현섭의 경험: 업무 경험, 학력, 활동과 병역.',
      descResume: '김현섭의 웹 이력서: 학력, 경험, 프로젝트, 기술, 어학·자격·장학.',
      workLog: '작업 기록', projectsCount: n => `${n}개 프로젝트`,
      sample: '출력 예시', designDrafts: '디자인 초안', designNames: { classic: 'A · 기본', terminal: 'B · 개발자', editorial: 'C · 에디토리얼' },
      personalDesc: '개인 사용과 학교 수업을 위해 AI 코딩 에이전트로 만든 도구입니다. 요구사항과 명세를 정하고, 직접 써 보며 결과를 검증했습니다.',
      allRepos: 'GitHub에서 전체 저장소 보기',
      overview: '개요', myWork: '맡은 일', features: '주요 기능', stack: '기술 스택', gallery: '화면', video: '시연 영상', links: '링크',
      notes: '참고', repo: 'GitHub 저장소', openImage: '이미지 크게 보기', close: '닫기',
      playHere: '이 페이지에서 재생', watchYoutube: 'YouTube에서 보기', videoNoteFile: '로컬 파일로 열면 YouTube 새 탭에서 재생됩니다.',
      videoNoteTeam: '팀 프로젝트 전체 서비스의 시연 영상입니다.',
      prev: '이전 프로젝트', next: '다음 프로젝트', backToProjects: '프로젝트 목록',
      notFound: '프로젝트를 찾을 수 없습니다.', notFoundHelp: '프로젝트 목록에서 다시 선택해 주세요.',
      howIWork: '일하는 방식', story: '이야기',
      relatedProjects: '관련 프로젝트',
      expTitle: '경험',
      work: '업무 경험', education: '학력', activities: '활동 · 병역', relatedProject: '관련 프로젝트',
      resumeTitle: '이력서', resumeNote: '공개용 이력서라 전화번호, 주소 등 민감한 개인정보는 제외했습니다. 제외한 정보가 필요하시면 이메일로 문의해 주세요.',
      downloadPdf: 'PDF로 저장', docsTitle: '문서 · 증명서', docsRequest: '이메일로 요청', docsRequestSubject: '증명서 요청',
      rSummary: '요약', rExperience: '경험', rProjects: '프로젝트', rEducation: '학력', rSkills: '기술',
      rLanguages: '어학', rActivities: '활동 · 병역',
      gpa: '평점', courses: '주요 과목', certs: '자격', awards: '장학',
      footerNote: '마지막 업데이트', present: '현재',
      titleSuffix: '김현섭', homeTitle: '김현섭 | 백엔드 · DevOps 개발자',
      desc: '백엔드·DevOps 개발자 김현섭의 포트폴리오. Java·Spring Boot 백엔드, GitHub Actions·Docker·AWS 배포, AI 코딩 에이전트로 만든 macOS·iOS 도구.',
    },
    en: {
      skip: 'Skip to content', mainNav: 'Main menu', profileLabel: 'Profile', langGroup: 'Choose language',
      toDark: 'Switch to dark theme', toLight: 'Switch to light theme',
      home: 'Home', about: 'About', projects: 'Projects', team: 'Team projects', personal: 'Personal projects',
      experience: 'Experience', resume: 'Resume', all: 'All',
      teamShort: 'Team', personalShort: 'Personal',
      photoAlt: 'Profile photo of Hyunseop Kim', copyEmail: 'Copy email address', copied: 'Email address copied',
      readAbout: 'More about me', viewResume: 'View resume',
      featured: 'Featured projects', viewAll: 'View all', recentExp: 'Experience',
      skills: 'Core skills', credentials: 'Languages, certificates & scholarships',
      contactTitle: 'Open to new opportunities', contactText: 'If you have a role in mind or any questions, feel free to email me. I\'ll get back to you as soon as I can.', sendEmail: 'Send an email',
      role: 'Role', period: 'Period', context: 'Context', teamComp: 'Team', platform: 'Platform', org: 'Organization',
      projectFilter: 'Project category',
      teamDesc: 'I mainly worked on backend and DevOps.',
      copyFailed: 'Couldn\'t copy. Please select the address manually.', breadcrumb: 'Breadcrumb', prevNext: 'Previous and next projects', newTab: '(opens in a new tab)',
      descAbout: 'About Hyunseop Kim: how he works, how he started, backend and DevOps, documentation, what comes next, languages, certificates and scholarships.',
      descProjects: 'Team projects (ERSync, TodayBread and more) and personal projects (Menu Pulse, Finder Presets and more) by Hyunseop Kim.',
      descExperience: 'Work experience, education, activities and military service of Hyunseop Kim.',
      descResume: 'Web resume of Hyunseop Kim: education, experience, projects, skills, languages, certificates and scholarships.',
      workLog: 'Selected work', projectsCount: n => `${n} projects`,
      sample: 'Sample output', designDrafts: 'Design drafts', designNames: { classic: 'A · Classic', terminal: 'B · Developer', editorial: 'C · Editorial' },
      personalDesc: 'Tools I built with AI coding agents for my own use and for school courses. I set the requirements and specs, then used the tools myself to verify the results.',
      allRepos: 'All repositories on GitHub',
      overview: 'Overview', myWork: 'What I did', features: 'Key features', stack: 'Tech stack', gallery: 'Screenshots', video: 'Demo video', links: 'Links',
      notes: 'Note', repo: 'GitHub repository', openImage: 'View larger image', close: 'Close',
      playHere: 'Play on this page', watchYoutube: 'Watch on YouTube', videoNoteFile: 'When opened as a local file, the video plays in a new YouTube tab.',
      videoNoteTeam: 'A demo of the full service built by the team.',
      prev: 'Previous project', next: 'Next project', backToProjects: 'All projects',
      notFound: 'Project not found.', notFoundHelp: 'Please choose a project from the list.',
      howIWork: 'How I work', story: 'Story',
      relatedProjects: 'Related projects',
      expTitle: 'Experience',
      work: 'Work experience', education: 'Education', activities: 'Activities & service', relatedProject: 'Related project',
      resumeTitle: 'Resume', resumeNote: 'This is the public version of my resume, so sensitive details such as my phone number and address are left out. If you need them, please contact me by email.',
      downloadPdf: 'Download PDF', docsTitle: 'Documents & certificates', docsRequest: 'Request by email', docsRequestSubject: 'Certificate request',
      rSummary: 'Summary', rExperience: 'Experience', rProjects: 'Projects', rEducation: 'Education', rSkills: 'Skills',
      rLanguages: 'Languages', rActivities: 'Activities & Military Service',
      gpa: 'GPA', courses: 'Coursework', certs: 'Certificates', awards: 'Scholarships',
      footerNote: 'Last updated', present: 'Present',
      titleSuffix: 'Hyunseop Kim', homeTitle: 'Hyunseop Kim | Backend & DevOps Developer',
      desc: 'Portfolio of Hyunseop Kim, a backend & DevOps developer: Java/Spring Boot backends, deployment with GitHub Actions, Docker and AWS, and macOS/iOS tools he built with AI coding agents.',
    },
  };
  const t = key => UI[lang][key] ?? UI.ko[key] ?? key;

  /* ---------- Helpers ---------- */
  // Escape for HTML text/attributes. Word joiners around "·" keep Korean lists like "백엔드·DevOps" from breaking at the dot.
  const esc = v => String(v ?? '')
    .replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
    .replace(/(\S)·(?=\S)/g, '$1\u2060·\u2060')
    .replace(/ · /g, '\u00a0· '); // spaced separators break after the dot, never before it
  // Only allow http(s), mailto, in-page anchors and relative site paths in href/src.
  const safeUrl = u => (/^(https?:|mailto:|#|[\w./-]+(\?|#|$))/i.test(String(u ?? '').trim()) ? u : '#');
  const safeDecode = v => { try { return decodeURIComponent(v); } catch { return v; } };
  const other = () => (lang === 'ko' ? 'en' : 'ko');
  /** Localized scalar: obj.key_ko / obj.key_en (falls back to the other language). */
  const L = (obj, key) => {
    if (!obj) return '';
    const v = obj[`${key}_${lang}`];
    if (v !== undefined && v !== null && v !== '' && !(Array.isArray(v) && !v.length)) return v;
    const f = obj[`${key}_${other()}`];
    return f ?? (Array.isArray(v) ? [] : '');
  };
  const LA = (obj, key) => { const v = L(obj, key); return Array.isArray(v) ? v : (v ? [v] : []); };
  const ext = (href, inner, cls = '', label = '') =>
    `<a${cls ? ` class="${cls}"` : ''} href="${esc(safeUrl(href))}" target="_blank" rel="noopener noreferrer"${label ? ` aria-label="${esc(`${label} ${t('newTab')}`)}"` : ''}>${inner}<span class="visually-hidden"> ${esc(t('newTab'))}</span></a>`;
  const projectUrl = p => `project.html?id=${encodeURIComponent(p.id)}`;
  const byId = id => PROJECTS.find(p => p.id === id);
  const isFile = location.protocol === 'file:';
  const projectId = () => params.get('id') || safeDecode(location.hash.slice(1));

  /* ---------- Icons (inline SVG) ---------- */
  const svg = (body, cls = 'icon-stroke', vb = '0 0 24 24') => `<svg class="icon ${cls}" viewBox="${vb}" aria-hidden="true" focusable="false">${body}</svg>`;
  const I = {
    github: svg('<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>', 'icon-fill', '0 0 16 16'),
    linkedin: svg('<path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/>', 'icon-fill'),
    mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>'),
    pin: svg('<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>'),
    cap: svg('<path d="M2 9.5 12 5l10 4.5L12 14z"/><path d="M6 11.5V16c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5"/>'),
    external: svg('<path d="M14 4h6v6"/><path d="M20 4 10.5 13.5"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>'),
    arrowRight: svg('<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'),
    arrowLeft: svg('<path d="M19 12H5"/><path d="m11 6-6 6 6 6"/>'),
    arrowUpRight: svg('<path d="M7 17 17 7"/><path d="M8 7h9v9"/>'),
    arrowDown: svg('<path d="M12 5v14"/><path d="m6 13 6 6 6-6"/>'),
    sun: svg('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>'),
    moon: svg('<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'),
    copy: svg('<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a1 1 0 0 1 1-1h9"/>'),
    check: svg('<path d="m5 12.5 4.5 4.5L19 7.5"/>'),
    download: svg('<path d="M12 4v11"/><path d="m7 10.5 5 5 5-5"/><path d="M5 20h14"/>'),
    play: svg('<path d="M8 5.5v13l10.5-6.5z"/>', 'icon-fill'),
    file: svg('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h6"/>'),
    video: svg('<rect x="3" y="6" width="13" height="12" rx="2"/><path d="m16 10 5-3v10l-5-3"/>'),
    x: svg('<path d="M6 6l12 12M18 6 6 18"/>'),
  };

  /* ---------- Shared chrome ---------- */
  const profile = SITE.profile || {};
  const name = () => L(profile, 'name');
  const nameOther = () => profile[`name_${other()}`] || '';

  function renderSidebar() {
    const el = $('#sidebar');
    if (!el) return;
    el.setAttribute('aria-label', t('profileLabel'));
    const meta = [
      [I.pin, L(profile, 'location')],
      [I.cap, L(profile, 'education') || (SITE.resume?.education?.[0] ? L(SITE.resume.education[0], 'school') : ''), L(profile, 'educationNote')],
    ].filter(([, v]) => v);
    const photoHidden = PAGE !== 'home' && matchMedia('(max-width: 960px)').matches;
    el.innerHTML = `
      <div class="profile-photo"><img src="assets/profile/photo-320.webp" srcset="assets/profile/photo-320.webp 320w, assets/profile/photo-640.webp 640w" sizes="(max-width: 400px) 80px, (max-width: 960px) 96px, 168px" width="320" height="411" alt="${esc(t('photoAlt'))}" ${photoHidden ? 'loading="lazy"' : 'fetchpriority="high"'} decoding="async"></div>
      <div class="profile-head">
        <p class="profile-name">${esc(name())}<span class="profile-name-sub" lang="${other()}">${esc(nameOther())}</span></p>
      </div>
      ${meta.length ? `<ul class="profile-meta">${meta.map(([icon, v, note]) => `<li>${icon}<span>${esc(v)}${note ? `<small>${esc(note)}</small>` : ''}</span></li>`).join('')}</ul>` : ''}
      <ul class="profile-links">
        ${profile.github ? `<li>${ext(profile.github, `${I.github}<span class="link-text">GitHub <span class="link-handle">@${esc(profile.github.split('/').filter(Boolean).pop())}</span></span><span class="link-arrow">${I.arrowUpRight}</span>`, 'profile-link')}</li>` : ''}
        ${profile.linkedin ? `<li>${ext(profile.linkedin, `${I.linkedin}<span class="link-text">LinkedIn</span><span class="link-arrow">${I.arrowUpRight}</span>`, 'profile-link')}</li>` : ''}
        ${profile.email ? `<li class="email-row"><a class="profile-link" href="mailto:${esc(profile.email)}">${I.mail}<span class="link-text">${esc(profile.email)}</span></a><button type="button" class="copy-btn" data-copy="${esc(profile.email)}" aria-label="${esc(t('copyEmail'))}" title="${esc(t('copyEmail'))}">${I.copy}</button></li>` : ''}
      </ul>
      <a class="btn btn-sm sidebar-resume" href="resume.html">${I.file}${esc(t('viewResume'))}</a>`;
  }

  function renderTopnav() {
    const el = $('#topnav');
    if (!el) return;
    const cur = page => (PAGE === page || (page === 'projects' && PAGE === 'project')) ? ' aria-current="page"' : '';
    const dark = document.documentElement.dataset.theme === 'dark';
    el.innerHTML = `
      <a class="brand" href="index.html" aria-label="${esc(name())}"><img src="assets/profile/avatar-96.webp" width="96" height="96" alt="" loading="lazy" decoding="async"><span class="brand-name">${esc(name())}</span></a>
      <nav class="primary-nav" aria-label="${esc(t('mainNav'))}">
        <ul class="nav-list">
          <li class="nav-item"><a class="nav-link" href="index.html"${cur('home')}>${esc(t('home'))}</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html"${cur('about')}>${esc(t('about'))}</a></li>
          <li class="nav-item"><a class="nav-link" href="projects.html"${cur('projects')}>${esc(t('projects'))}</a></li>
          <li class="nav-item"><a class="nav-link" href="experience.html"${cur('experience')}>${esc(t('experience'))}</a></li>
          <li class="nav-item"><a class="nav-link" href="resume.html"${cur('resume')}>${esc(t('resume'))}</a></li>
        </ul>
      </nav>
      <div class="nav-tools">
        <div class="seg" role="group" aria-label="${esc(t('langGroup'))}">
          <button type="button" data-set-lang="ko" lang="ko" aria-pressed="${lang === 'ko'}" aria-label="한국어">한</button>
          <button type="button" data-set-lang="en" lang="en" aria-pressed="${lang === 'en'}" title="English">EN</button>
        </div>
        <button type="button" class="icon-btn" id="theme-btn" aria-label="${esc(t(dark ? 'toLight' : 'toDark'))}" title="${esc(t(dark ? 'toLight' : 'toDark'))}">${dark ? I.sun : I.moon}</button>
      </div>`;
  }

  function renderFooter() {
    const el = $('#footer');
    if (!el) return;
    el.innerHTML = `
      <span>© 2026 ${esc(profile.name_en || '')} · ${esc(t('footerNote'))} ${esc(SITE.updated || '')}</span>
      <ul class="footer-links">
        ${profile.email ? `<li><a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a></li>` : ''}
        ${profile.github ? `<li>${ext(profile.github, 'GitHub')}</li>` : ''}
        ${profile.linkedin ? `<li>${ext(profile.linkedin, 'LinkedIn')}</li>` : ''}
      </ul>`;
  }

  /* ---------- Project building blocks ---------- */
  function monogram(p) {
    if (p.monogram) return p.monogram;
    const title = p.title_en || p.title_ko || '?';
    const words = title.split(/\s+/).filter(Boolean);
    if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
    const caps = title.match(/[A-Z]/g);
    return (caps && caps.length > 1 ? caps.slice(0, 2).join('') : title.slice(0, 2)).toUpperCase();
  }
  function mark(p, lg = false) {
    const cls = `project-mark${lg ? ' is-lg' : ''}`;
    if (p.logo) {
      const alt = '';
            // With a dark twin, one of the two is display:none — lazy keeps the hidden one from downloading.
      const lazy = p.logoDark ? ' loading="lazy"' : '';
      return `<span class="${cls}${p.logoDark ? ' has-dark-logo' : ''}${p.logoTile ? ' has-tile' : ''}"><img class="logo-light" src="${esc(safeUrl(p.logo))}" alt="${alt}" width="192" height="192"${lazy} decoding="async">${p.logoDark ? `<img class="logo-dark" src="${esc(safeUrl(p.logoDark))}" alt="${alt}" width="192" height="192"${lazy} decoding="async">` : ''}</span>`;
    }
    return `<span class="${cls} is-monogram" aria-hidden="true">${esc(monogram(p))}</span>`;
  }
  const typeLabel = p => t(p.type === 'team' ? 'team' : 'personal');
  const chips = (items, cls = 'chip') => items && items.length ? `<ul class="chips">${items.map(x => `<li class="${cls}">${esc(x)}</li>`).join('')}</ul>` : '';

  function projectCard(p, level = 3, headRow = false) {
    const meta = p.type === 'team'
      ? [headRow ? L(p, 'cardMeta') || p.orgName : p.orgName, L(p, 'period')].filter(Boolean)
      : [p.platform, L(p, 'period')].filter(Boolean);
    const title = `<h3${level !== 3 ? ` aria-level="${level}"` : ''}><a href="${projectUrl(p)}">${esc(L(p, 'title'))}</a></h3>`;
    // headRow (home): logo, title and a one-line meta share the top row.
    const head = headRow
      ? `<div class="card-top">${mark(p)}<div class="card-head">${title}<p class="card-meta">${meta.map(m => `<span>${esc(m)}</span>`).join('')}</p></div></div>
        <p class="card-tagline">${esc(L(p, 'tagline'))}</p>`
      : `<div class="card-top">${mark(p)}<div class="card-meta">${meta.map(esc).join('<br>')}</div></div>
        <div>
          ${title}
          <p class="card-tagline">${esc(L(p, 'tagline'))}</p>
        </div>`;
    return `
      <article class="project-card${headRow ? ' is-head-row' : ''}" data-type="${esc(p.type)}">
        ${head}
        ${p.type === 'team' && L(p, 'role') ? `<p class="card-role"><b>${esc(t('role'))}</b><span>${esc(L(p, 'role'))}</span></p>` : ''}
        ${chips(p.stackShort)}
        <span class="card-arrow" aria-hidden="true">${I.arrowUpRight}</span>
      </article>`;
  }

  /* Qualification list (home and About): label on the left, items with an optional date on the right. */
  const qItem = (main, subs = [], when = '') => `<li><p class="qual-main"><strong>${esc(main)}</strong>${when ? `<span class="qual-when">${esc(when)}</span>` : ''}</p>${subs.filter(Boolean).map(x => `<p class="qual-sub">${esc(x)}</p>`).join('')}</li>`;
  const qRow = (label, items, cols = false) => items.length ? `<div class="qual-row"><dt>${esc(label)}</dt><dd><ul class="qual-items${cols ? ' is-cols' : ''}">${items.join('')}</ul></dd></div>` : '';
  function credentialRows() {
    const langs = SITE.resume?.languages || [];
    const certs = SITE.resume?.certificates || [];
    const certItem = c => qItem(L(c, 'title'), [L(c, 'detail'), L(c, 'terms')], L(c, 'date'));
    return [
      qRow(t('rLanguages'), langs.map(l => qItem(L(l, 'name'), l.tests ? l.tests.map(x => [`${x.name} ${L(x, 'score')}`, L(x, 'date')].filter(Boolean).join(' · ')) : [L(l, 'level')])), true),
      qRow(t('certs'), certs.filter(c => c.kind !== 'award').map(certItem)),
      qRow(t('awards'), certs.filter(c => c.kind === 'award').map(certItem)),
    ].join('');
  }

  /* ---------- Pages ---------- */
  function pageHome() {
    const featTeam = PROJECTS.filter(p => p.type === 'team' && p.featured);
    const featPersonal = PROJECTS.filter(p => p.type === 'personal' && p.featured);
    const work = (SITE.experience || []).filter(e => e.kind === 'work');
    const skills = SITE.homeSkills || SITE.resume?.skills || [];
    const skillItems = g => g[`items_${lang}`] || g.items || [];
    const strengths = profile.strengths || [];
    const creds = credentialRows();
    return `
      <section class="hero">
        <p class="hero-prompt" aria-hidden="true"><span class="prompt-user">hyunseop@portfolio</span><span class="prompt-sep">:</span><span class="prompt-path">~</span><span class="prompt-sign">$</span> <span class="prompt-cmd">whoami</span></p>
        <h1>${esc(L(profile, 'headline'))}</h1>
        <p class="hero-intro">${esc(L(profile, 'heroIntro'))}</p>
        ${strengths.length ? `<ul class="hero-points">${strengths.map(x => `<li><strong>${esc(L(x, 'title'))}</strong><p>${esc(L(x, 'text'))}</p></li>`).join('')}</ul>` : ''}
        <p class="hero-more"><a class="text-link" href="about.html">${esc(t('readAbout'))}${I.arrowRight}</a></p>
      </section>

      <section class="section" data-index="01" data-slug="projects" aria-labelledby="h-featured">
        <div class="section-head">
          <h2 id="h-featured">${esc(t('featured'))}</h2>
          <a class="text-link" href="projects.html">${esc(t('viewAll'))}${I.arrowRight}</a>
        </div>
        ${featTeam.length ? `<h3 class="subhead">${esc(t('team'))}<span class="count" aria-hidden="true">${featTeam.length}</span></h3><div class="project-grid">${featTeam.map(p => projectCard(p, 4, true)).join('')}</div>` : ''}
        ${featPersonal.length ? `<h3 class="subhead">${esc(t('personal'))}<span class="count" aria-hidden="true">${featPersonal.length}</span></h3><div class="project-grid">${featPersonal.map(p => projectCard(p, 4, true)).join('')}</div>` : ''}
      </section>

      ${work.length ? `
      <section class="section" data-index="02" data-slug="experience" aria-labelledby="h-exp">
        <div class="section-head">
          <h2 id="h-exp">${esc(t('recentExp'))}</h2>
          <a class="text-link" href="experience.html">${esc(t('viewAll'))}${I.arrowRight}</a>
        </div>
        <ol class="timeline is-compact">${work.map(e => timelineItem(e, true)).join('')}</ol>
      </section>` : ''}

      ${skills.length ? `
      <section class="section" data-index="03" data-slug="skills" aria-labelledby="h-skills">
        <div class="section-head"><h2 id="h-skills">${esc(t('skills'))}</h2></div>
        <dl class="card skill-table">${skills.map(g => `<div class="skill-group">
          <dt>${esc(L(g, 'label'))}</dt>
          <dd><ul class="skill-tags">${skillItems(g).map(x => `<li>${esc(x)}</li>`).join('')}</ul></dd>
        </div>`).join('')}</dl>
      </section>` : ''}

      ${creds ? `
      <section class="section" data-index="04" data-slug="credentials" aria-labelledby="h-creds">
        <div class="section-head"><h2 id="h-creds">${esc(t('credentials'))}</h2></div>
        <dl class="card qual-list">${creds}</dl>
      </section>` : ''}

      <section class="section" data-index="05" data-slug="contact" aria-labelledby="h-contact">
        <div class="card contact-card">
          <div><h2 id="h-contact">${esc(t('contactTitle'))}</h2><p>${esc(t('contactText'))}</p></div>
          <div class="btn-row">
            ${profile.email ? `<a class="btn btn-primary" href="mailto:${esc(profile.email)}">${I.mail}${esc(t('sendEmail'))}</a>` : ''}
            ${profile.github ? ext(profile.github, `${I.github}GitHub`, 'btn') : ''}
            ${profile.linkedin ? ext(profile.linkedin, `${I.linkedin}LinkedIn`, 'btn') : ''}
          </div>
        </div>
      </section>`;
  }

  function pageAbout() {
    const a = SITE.about || {};
    const values = (a.values || []).map((v, i) => `<div class="card value"><p class="value-num">0${i + 1}</p><h3>${esc(L(v, 'title'))}</h3><p>${esc(L(v, 'text'))}</p></div>`).join('');
    const story = (a.sections || []).map(s => {
      const related = (s.relatedProjectIds || []).map(byId).filter(Boolean);
      return `<div class="story-item" id="${esc(s.id)}">
        <h2>${esc(L(s, 'title'))}</h2>
        <div>
          <div class="prose">${LA(s, 'paragraphs').map(p => `<p>${esc(p)}</p>`).join('')}</div>
          ${related.length ? `<ul class="chips" aria-label="${esc(t('relatedProjects'))}">${related.map(p => `<li><a class="chip chip-link" href="${projectUrl(p)}">${esc(L(p, 'title'))}</a></li>`).join('')}</ul>` : ''}
        </div>
      </div>`;
    }).join('');
    const quals = credentialRows();
    return `
      <header class="page-head" data-slug="about">
        <p class="eyebrow">${esc(t('about'))}</p>
        <h1>${esc(t('about'))}</h1>
        <p class="lead">${esc(L(a, 'lead'))}</p>
      </header>
      ${values ? `<section class="section" data-index="01" data-slug="values" aria-labelledby="h-values"><div class="section-head"><h2 id="h-values">${esc(t('howIWork'))}</h2></div><div class="values">${values}</div></section>` : ''}
      ${story ? `<section class="section story" data-index="02" data-slug="story" aria-label="${esc(t('story'))}">${story}</section>` : ''}
      ${quals ? `<section class="section" data-index="03" data-slug="credentials" aria-labelledby="h-quick">
        <div class="section-head"><h2 id="h-quick">${esc(t('credentials'))}</h2></div>
        <dl class="card qual-list">${quals}</dl>
      </section>` : ''}`;
  }

  function pageProjects() {
    const team = PROJECTS.filter(p => p.type === 'team');
    const personal = PROJECTS.filter(p => p.type === 'personal');
    const tab = (key, label, count) => `<a class="tab" href="#${key}" data-filter="${key}">${esc(label)}<span class="count">${count}</span></a>`;
    return `
      <header class="page-head" data-slug="projects">
        <p class="eyebrow">${esc(t('workLog'))} · ${esc(t('projectsCount')(PROJECTS.length))}</p>
        <h1>${esc(t('projects'))}</h1>
        ${profile.github ? `<p class="page-links">${ext(profile.github + '?tab=repositories', `${I.github}${esc(t('allRepos'))}${I.arrowUpRight}`, 'text-link')}</p>` : ''}
      </header>
      <nav class="tabs" aria-label="${esc(t('projectFilter'))}">
        ${tab('all', t('all'), PROJECTS.length)}${tab('team', t('teamShort'), team.length)}${tab('personal', t('personalShort'), personal.length)}
      </nav>
      <section class="project-group" data-group="team" data-index="01" aria-labelledby="h-team">
        <div class="group-head"><h2 id="h-team">${esc(t('team'))}</h2><p>${esc(t('teamDesc'))}</p></div>
        <div class="project-grid">${team.map(p => projectCard(p)).join('')}</div>
      </section>
      <section class="project-group" data-group="personal" data-index="02" aria-labelledby="h-personal">
        <div class="group-head"><h2 id="h-personal">${esc(t('personal'))}</h2><p>${esc(t('personalDesc'))}</p></div>
        <div class="project-grid">${personal.map(p => projectCard(p)).join('')}</div>
      </section>`;
  }
  function applyProjectFilter() {
    const key = ['team', 'personal'].includes(location.hash.slice(1)) ? location.hash.slice(1) : 'all';
    $$('.tab[data-filter]').forEach(a => { if (a.dataset.filter === key) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
    $$('.project-group').forEach(g => { g.hidden = key !== 'all' && g.dataset.group !== key; });
  }

  /* Project links callout: a download stays a filled button; the rest are quiet icon links. */
  function linkItem(l) {
    const icon = l.kind === 'repo' || l.kind === 'org' ? I.github : l.kind === 'download' ? I.download : I.external;
    if (l.kind === 'download') return `<li class="is-primary"><a class="btn btn-primary btn-sm" href="${esc(safeUrl(l.url))}">${icon}${esc(L(l, 'label'))}</a></li>`;
    return `<li>${ext(l.url, `${icon}<span>${esc(L(l, 'label'))}</span>${I.arrowUpRight}`, 'link-item')}</li>`;
  }

  function videoBlock(p) {
    const id = encodeURIComponent(p.youtubeId);
    const url = `https://www.youtube.com/watch?v=${id}`;
    const thumb = `https://i.ytimg.com/vi_webp/${id}/hq720.webp`;
    const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
    const inner = `<img src="${thumb}" width="1280" height="720" alt="" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='${fallback}'"><span class="video-play"><span class="play-circle">${I.play}</span><span>${esc(t(isFile ? 'watchYoutube' : 'playHere'))}</span></span>`;
    const frame = isFile
      ? `<div class="video-frame">${ext(url, inner, '', `${L(p, 'title')} — ${t('watchYoutube')}`)}</div>`
      : `<div class="video-frame" id="video-frame"><button type="button" id="video-play" class="video-btn" aria-label="${esc(`${L(p, 'title')} — ${t('playHere')}`)}">${inner}</button></div>`;
    const notes = [p.type === 'team' ? t('videoNoteTeam') : '', isFile ? t('videoNoteFile') : ''].filter(Boolean).join(' ');
    return `${frame}<p class="video-note">${esc(notes)} ${ext(url, `${esc(t('watchYoutube'))} ${I.arrowUpRight}`, 'text-link')}</p>`;
  }

  function gallery(images) {
    const tall = img => img.width && img.height && img.height > img.width * 1.3;
    const phones = images.length > 1 && images.every(tall);
    const cls = phones ? ' is-phones' : images.length === 1 ? ' is-single' : '';
    return `<div class="gallery${cls}">${images.map((img, i) => {
      const src = img[`src_${lang}`] || img.src;
      const cap = L(img, 'caption');
      const small = img.width && img.width < 480;
      const mods = `${tall(img) ? ' is-tall' : ''}${small ? ' is-small' : ''}`;
      return `<figure class="shot${mods}"><button type="button" data-lightbox="${i}" aria-label="${esc(`${t('openImage')}: ${cap}`)}"><img src="${esc(safeUrl(src))}" alt="${esc(cap)}" loading="lazy" decoding="async"${img.width ? ` width="${img.width}" height="${img.height}"` : ''}></button>${cap ? `<figcaption>${esc(cap)}</figcaption>` : ''}</figure>`;
    }).join('')}</div>`;
  }

  function pageProject() {
    const p = byId(projectId());
    if (!p) {
      return `<div class="empty"><h1>${esc(t('notFound'))}</h1><p>${esc(t('notFoundHelp'))}</p><p class="empty-actions"><a class="btn" href="projects.html">${I.arrowLeft}${esc(t('backToProjects'))}</a></p></div>`;
    }
    const sameType = PROJECTS.filter(x => x.type === p.type);
    const idx = sameType.indexOf(p);
    const prev = sameType[idx - 1], next = sameType[idx + 1];
    const metaRows = [
      [t('period'), L(p, 'period')],
      [t('role'), L(p, 'role')],
      [t('context'), L(p, 'context') || typeLabel(p)],
      p.type === 'team' ? [t('teamComp'), L(p, 'team')] : [t('platform'), p.platform],
    ].filter(([, v]) => v);
    const contributions = p.type === 'team' ? LA(p, 'contributions') : []; // solo work: 주요 기능 only
    const features = LA(p, 'features');
    const images = (p.images || []).filter(img => img && img.src);
    const links = (p.links || []).filter(l => l.url && l.kind !== 'video').sort((a, b) => (b.kind === 'download') - (a.kind === 'download'));
    const hasVideo = !!p.youtubeId;
    const listSection = (title, items) => items.length ? `<section class="detail-section"><h2>${esc(title)}</h2><ul class="bullets">${items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>` : '';

    return `
      <nav aria-label="${esc(t('breadcrumb'))}"><ol class="breadcrumb">
        <li><a href="projects.html">${esc(t('projects'))}</a></li>
        <li><a href="projects.html#${esc(p.type)}">${esc(typeLabel(p))}</a></li>
        <li><span aria-current="page">${esc(L(p, 'title'))}</span></li>
      </ol></nav>
      <header class="detail-head">
        ${mark(p, true)}
        <div><h1>${esc(L(p, 'title'))}</h1><p class="detail-tagline">${esc(L(p, 'tagline'))}</p></div>
      </header>
      ${metaRows.length ? `<dl class="detail-meta">${metaRows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join('')}</dl>` : ''}
      ${(links.length || hasVideo) ? `<section class="detail-links" aria-labelledby="h-links"><h2 id="h-links">${esc(t('links'))}</h2>
        <ul>${links.map(linkItem).join('')}${hasVideo ? `<li><a class="link-item" href="#demo">${I.video}<span>${esc(t('video'))}</span>${I.arrowDown}</a></li>` : ''}</ul>
      </section>` : ''}

      <div class="detail-body">
        <section class="detail-section"><h2>${esc(t('overview'))}</h2>
          <div class="prose"><p>${esc(L(p, 'summary'))}</p></div>
          ${L(p, 'notes') ? `<p class="note-box">${esc(L(p, 'notes'))}</p>` : ''}
        </section>
        ${contributions.length && features.length
          ? `<div class="two-col">${listSection(t('myWork'), contributions)}${listSection(t('features'), features)}</div>`
          : listSection(t('myWork'), contributions) + listSection(t('features'), features)}
        ${(p.stackGroups || []).length ? `<section class="detail-section"><h2>${esc(t('stack'))}</h2><dl class="stack-table">${p.stackGroups.map(g => `<div><dt>${esc(L(g, 'label'))}</dt><dd>${chips(g.items)}</dd></div>`).join('')}</dl></section>` : ''}
        ${p.sample ? `<section class="detail-section"><h2>${esc(t('sample'))}</h2><figure class="code-sample"><pre tabindex="0"><code>${esc(p.sample)}</code></pre>${L(p, 'sampleCaption') ? `<figcaption>${esc(L(p, 'sampleCaption'))}</figcaption>` : ''}</figure></section>` : ''}
        ${images.length ? `<section class="detail-section"><h2>${esc(L(p, 'galleryTitle') || t('gallery'))}</h2>${gallery(images)}</section>` : ''}
        ${hasVideo ? `<section class="detail-section" id="demo"><h2>${esc(t('video'))}</h2>${videoBlock(p)}</section>` : ''}
      </div>

      <nav class="pager" aria-label="${esc(t('prevNext'))}">
        ${prev ? `<a class="prev" href="${projectUrl(prev)}"><small>← ${esc(t('prev'))}</small><strong>${esc(L(prev, 'title'))}</strong></a>` : ''}
        ${next ? `<a class="next" href="${projectUrl(next)}"><small>${esc(t('next'))} →</small><strong>${esc(L(next, 'title'))}</strong></a>` : ''}
      </nav>`;
  }

  function timelineItem(e, compact = false) {
    const related = (e.relatedProjectIds || []).map(byId).filter(Boolean);
    const type = L(e, 'type');
    const bullets = LA(e, 'bullets');
    return `<li class="tl-item">
      <div class="tl-when"><span>${esc(L(e, 'period'))}</span>${type ? `<span class="badge${e.kind === 'work' ? '' : ' badge-muted'}">${esc(type)}</span>` : ''}</div>
      <div>
        <h3 class="tl-title">${esc(L(e, 'title'))}</h3>
        <p class="tl-org">${e.orgUrl && !compact ? ext(e.orgUrl, `${esc(L(e, 'org'))} ${I.arrowUpRight}`) : `<span>${esc(L(e, 'org'))}</span>`}${L(e, 'location') ? `<span class="sep" aria-hidden="true">·</span><span>${esc(L(e, 'location'))}</span>` : ''}</p>
        ${!compact && L(e, 'summary') ? `<p class="tl-summary">${esc(L(e, 'summary'))}</p>` : ''}
        ${!compact && bullets.length ? `<ul class="bullets bullets-sm">${bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}
        ${!compact ? chips(e.stack) : ''}
        ${!compact && related.length ? `<p class="tl-related">${related.map(p => `<a class="text-link" href="${projectUrl(p)}">${esc(t('relatedProject'))}: ${esc(L(p, 'title'))}${I.arrowRight}</a>`).join(' ')}</p>` : ''}
      </div>
    </li>`;
  }

  // e.g. "2020 – 2027" from the experience start/end fields (YYYY-MM).
  function yearRange(items) {
    const years = items.flatMap(e => [e.start, e.end]).map(v => parseInt(String(v || ''), 10)).filter(Number.isFinite);
    return years.length ? `${Math.min(...years)} – ${Math.max(...years)}` : t('experience');
  }

  function pageExperience() {
    const ex = (SITE.experience || []).filter(e => !e.resumeOnly);
    let gi = 0;
    const group = (title, id, items) => items.length ? `<section class="section" data-index="0${++gi}" aria-labelledby="${id}"><div class="section-head"><h2 id="${id}">${esc(title)}</h2></div><ol class="timeline">${items.map(e => timelineItem(e)).join('')}</ol></section>` : '';
    return `
      <header class="page-head" data-slug="experience">
        <p class="eyebrow">${esc(yearRange(ex))}</p>
        <h1>${esc(t('expTitle'))}</h1>
      </header>
      ${group(t('work'), 'h-work', ex.filter(e => e.kind === 'work'))}
      ${group(t('education'), 'h-edu', ex.filter(e => e.kind === 'education'))}
      ${group(t('activities'), 'h-act', ex.filter(e => e.kind === 'activity' || e.kind === 'service'))}`;
  }

  function pageResume() {
    const r = SITE.resume || {};
    const ex = SITE.experience || [];
    const work = ex.filter(e => e.kind === 'work');
    const acts = ex.filter(e => e.kind === 'activity');
    const service = ex.filter(e => e.kind === 'service');
    const docs = SITE.documents || [];
    // The toolbar offers the resume PDF in the page language; both languages stay in the list below the paper.
    const resumePdf = (docs.find(d => d.files) || {}).files?.[lang === 'ko' ? 0 : 1];
    // subHtml must already be escaped by the caller. segs() keeps each " · " segment together so lines wrap only between segments.
    const segs = s => s.split(' · ').map(x => `<span class="nw">${esc(x)}</span>`).join(' · ');
    // Project links in the printed PDF must work outside this site: absolute (SITE_CONFIG.siteUrl, set by tools/set-site-url.py) and in the page language.
    const base = (window.SITE_CONFIG || {}).siteUrl || location.href;
    const rlink = h => { const u = new URL(h, base); u.searchParams.set('lang', lang); return u.href; };
    const entry = (title, subHtml, when, bullets = [], extra = '') => `<div class="r-entry"><h3>${esc(title)}</h3>${when ? `<span class="r-when">${esc(when)}</span>` : ''}${subHtml ? `<p class="r-sub">${subHtml}</p>` : ''}${bullets.length ? `<ul class="bullets">${bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}${extra}</div>`;
    const sec = (title, body) => body ? `<section class="r-section"><h2>${esc(title)}</h2>${body}</section>` : '';
    // Languages, certificates and scholarships share one label/value table (resume v3: 어학·자격·장학).
    const creds = [
      ...(r.languages || []).map(l => [L(l, 'name'), L(l, 'level')]),
      ...(r.certificates || []).map(c => { const when = L(c, 'resumeDate') || L(c, 'date'); return [t(c.kind === 'award' ? 'awards' : 'certs'), [`${L(c, 'title')}${when ? ` (${when})` : ''}`, L(c, 'detail')].filter(Boolean).join(' · ')]; }),
    ];
    // Activities, then military service, in one list (resume v3: 기타 활동 및 병역).
    const others = [
      ...acts.map(e => [L(e, 'title'), L(e, 'org'), L(e, 'period'), L(e, 'resumeDesc')]),
      ...service.map(e => [L(e, 'org'), L(e, 'type') || L(e, 'title'), L(e, 'period'), L(e, 'resumeDesc')]),
    ];
    return `
      <header class="page-head no-print" data-slug="resume">
        <h1>${esc(t('resume'))}</h1>
      </header>
      <div class="resume-toolbar">
        <div><p>${esc(t('resumeNote'))}</p></div>
        <div class="btn-row">
          ${resumePdf ? `<a class="btn btn-primary" href="${esc(safeUrl(resumePdf.href))}"${resumePdf.download ? ` download="${esc(resumePdf.download)}"` : ' download'}>${I.download}${esc(t('downloadPdf'))}</a>` : ''}
        </div>
      </div>
      <article class="card paper" aria-labelledby="r-name">
        <header class="paper-head">
          <div>
            <h1 id="r-name">${esc(name())}</h1>
            <p class="paper-role">${esc(L(profile, 'role'))}</p>
          </div>
          <ul class="paper-contact">
            ${profile.email ? `<li><a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a></li>` : ''}
            ${profile.github ? `<li>${ext(profile.github, esc(profile.github.replace(/^https?:\/\//, '')))}</li>` : ''}
            ${profile.linkedin ? `<li>${ext(profile.linkedin, esc(profile.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')))}</li>` : ''}
            ${L(profile, 'location') ? `<li>${esc(L(profile, 'location'))}</li>` : ''}
          </ul>
        </header>
        ${L(r, 'summary') ? `<p class="paper-summary">${esc(L(r, 'summary'))}</p>` : ''}
        ${sec(t('rEducation'), (r.education || []).map(ed => entry(
          L(ed, 'school'),
          esc([L(ed, 'degree'), L(ed, 'major'), L(ed, 'status')].filter(Boolean).join(' · ')),
          L(ed, 'period'), [],
          `<div class="r-extra">${L(ed, 'gpa') ? `${esc(t('gpa'))}: ${esc(L(ed, 'gpa'))}` : ''}${LA(ed, 'courses').length ? `<br>${esc(t('courses'))}: ${esc(LA(ed, 'courses').join(', '))}` : ''}</div>`,
        )).join(''))}
        ${sec(t('rExperience'), work.map(e => entry(L(e, 'title'), segs([L(e, 'org'), e.resumeOneLine ? '' : L(e, 'type'), L(e, 'resumeContext')].filter(Boolean).join(' · ')), L(e, 'period'), e.resumeOneLine ? [] : LA(e, 'bullets'))).join(''))}
        ${sec(t('rProjects'), (r.resumeProjects || []).map(rp => {
          const p = byId(rp.projectId);
          const href = p ? rlink(projectUrl(p)) : rp.href ? rlink(safeUrl(rp.href)) : '';
          const titleHtml = href ? `<a href="${esc(href)}">${esc(L(rp, 'title'))}</a>` : esc(L(rp, 'title'));
          return `<div class="r-entry"><h3>${titleHtml}</h3><span class="r-when">${esc(L(rp, 'period'))}</span><p class="r-sub">${segs(L(rp, 'role'))}</p>${LA(rp, 'bullets').length ? `<ul class="bullets">${LA(rp, 'bullets').map(b => `<li>${esc(b)}</li>`).join('')}</ul>` : ''}</div>`;
        }).join(''))}
        ${sec(t('rSkills'), (r.skills || []).length ? `<dl class="r-grid">${r.skills.map(s => `<dt>${esc(L(s, 'label'))}</dt><dd>${esc((s[`items_${lang}`] || s.items || []).join(', '))}</dd>`).join('')}</dl>` : '')}
        ${sec(t('credentials'), creds.length ? `<dl class="r-grid">${creds.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${segs(v)}</dd>`).join('')}</dl>` : '')}
        ${sec(t('rActivities'), others.length ? `<ul class="r-list">${others.map(([what, sub, when, desc]) => `<li><span><strong>${esc(what)}</strong>${sub ? ` — ${esc(sub)}` : ''}${desc ? `<span class="r-desc">${esc(desc)}</span>` : ''}</span><span class="r-when">${esc(when)}</span></li>`).join('')}</ul>` : '')}
      </article>
      ${docs.length ? `<section class="card doc-box no-print" aria-labelledby="h-docs">
        <h2 id="h-docs">${esc(t('docsTitle'))}</h2>
        <ul class="doc-list">${docs.map(d => `<li>
          <div><strong>${esc(L(d, 'label'))}</strong>${L(d, 'note') ? `<p>${esc(L(d, 'note'))}</p>` : ''}</div>
          <div class="doc-actions">${d.request
            ? (profile.email ? `<a class="btn btn-sm" href="mailto:${esc(profile.email)}?subject=${encodeURIComponent(t('docsRequestSubject'))}">${I.mail}${esc(t('docsRequest'))}</a>` : '')
            : (d.files || []).map(f => `<a class="btn btn-sm" href="${esc(safeUrl(f.href))}"${f.download ? ` download="${esc(f.download)}"` : ' download'}>${I.download}${esc(L(f, 'label'))}</a>`).join('')}</div>
        </li>`).join('')}</ul>
      </section>` : ''}`;
  }

  /* ---------- Page wiring ---------- */
  const PAGES = { home: pageHome, about: pageAbout, projects: pageProjects, project: pageProject, experience: pageExperience, resume: pageResume };

  function setMeta() {
    const titles = { about: t('about'), projects: t('projects'), experience: t('experience'), resume: t('resume') };
    let title = t('homeTitle');
    const descs = { about: t('descAbout'), projects: t('descProjects'), experience: t('descExperience'), resume: t('descResume') };
    let description = descs[PAGE] || t('desc');
    if (PAGE === 'project') {
      const p = byId(projectId());
      title = `${p ? L(p, 'title') : t('notFound')} | ${t('titleSuffix')}`;
      if (p) description = `${L(p, 'title')} — ${L(p, 'tagline')}`;
    } else if (titles[PAGE]) title = `${titles[PAGE]} | ${t('titleSuffix')}`;
    document.title = title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.content = description;
    [['og:title', title], ['og:description', description]].forEach(([k, v]) => {
      const m = document.querySelector(`meta[property="${k}"]`);
      if (m) m.content = v;
    });
    $('.skip-link') && ($('.skip-link').textContent = t('skip'));
  }

  function renderDesignPicker() {
    const cfg = window.SITE_CONFIG || {};
    let el = $('#design-picker');
    if (!cfg.designPicker) { el?.remove(); return; }
    if (!el) { el = document.createElement('div'); el.id = 'design-picker'; el.className = 'design-picker no-print'; document.body.appendChild(el); }
    const current = document.documentElement.dataset.design;
    const names = t('designNames');
    el.setAttribute('role', 'group');
    el.setAttribute('aria-label', t('designDrafts'));
    el.innerHTML = `<span class="dp-label">${esc(t('designDrafts'))}</span>${Object.keys(names).map(k => `<button type="button" data-set-design="${k}" aria-pressed="${k === current}">${esc(names[k])}</button>`).join('')}`;
  }

  // Keep the mobile browser bar in step with the visitor's chosen theme (not just the OS setting).
  function syncThemeColor() {
    const bg = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
    if (bg) $$('meta[name="theme-color"]').forEach(m => { m.setAttribute('content', bg); m.removeAttribute('media'); });
  }

  // When storage is blocked, carry the language choice through internal links instead.
  const STORAGE_OK = (() => { try { localStorage.setItem('hk-t', '1'); localStorage.removeItem('hk-t'); return true; } catch { return false; } })();
  function carryLang() {
    if (STORAGE_OK) return;
    $$('a[href]').forEach(a => {
      const href = a.getAttribute('href');
      if (!/^(index|about|projects|project|experience|resume)\.html/.test(href)) return;
      const u = new URL(href, location.href);
      u.searchParams.set('lang', lang);
      a.setAttribute('href', u.pathname.split('/').pop() + u.search + u.hash);
    });
  }

  function renderAll() {
    document.documentElement.lang = lang;
    renderSidebar();
    renderTopnav();
    const main = $('#main');
    if (main) main.innerHTML = (PAGES[PAGE] || pageHome)();
    renderFooter();
    renderDesignPicker();
    setMeta();
    if (PAGE === 'projects') applyProjectFilter();
    carryLang();
    syncThemeColor();
    document.documentElement.classList.remove('is-booting');
  }

  /* ---------- Interactions ---------- */
  let toastTimer;
  function ensureToast() {
    let el = $('.copy-toast');
    if (!el) { el = document.createElement('div'); el.className = 'copy-toast'; el.setAttribute('role', 'status'); el.setAttribute('aria-live', 'polite'); document.body.appendChild(el); }
    return el;
  }
  function toast(msg) {
    const el = ensureToast();
    el.textContent = '';
    requestAnimationFrame(() => { el.textContent = msg; el.classList.add('is-visible'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 1800);
  }
  async function copyText(text) {
    try { await navigator.clipboard.writeText(text); return true; } catch {
      const ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      let ok = false; try { ok = document.execCommand('copy'); } catch { ok = false; }
      ta.remove(); return ok;
    }
  }

  function openLightbox(img, caption) {
    let dlg = $('#lightbox');
    if (!dlg) {
      dlg = document.createElement('dialog');
      dlg.id = 'lightbox'; dlg.className = 'lightbox';
      dlg.addEventListener('click', e => { if (e.target === dlg || e.target.closest('.lb-close')) dlg.close(); });
      document.body.appendChild(dlg);
    }
    dlg.setAttribute('aria-label', caption || t('openImage'));
    dlg.innerHTML = `<button type="button" class="lb-close" aria-label="${esc(t('close'))}">${I.x}</button><img src="${esc(safeUrl(img))}" alt="${caption ? '' : esc(t('openImage'))}">${caption ? `<p class="lb-caption">${esc(caption)}</p>` : ''}`;
    if (typeof dlg.showModal === 'function') dlg.showModal(); else window.open(img, '_blank', 'noopener');
  }

  // One delegated listener survives every re-render (language/theme switches rebuild the DOM).
  document.addEventListener('click', async e => {
    const langBtn = e.target.closest('[data-set-lang]');
    if (langBtn) {
      if (langBtn.dataset.setLang === lang) return;
      lang = langBtn.dataset.setLang;
      store.set('hk-lang', lang);
      if (params.has('lang')) { const u = new URL(location.href); u.searchParams.set('lang', lang); history.replaceState(null, '', u); }
      const y = window.scrollY;
      renderAll();
      window.scrollTo(0, y);
      $(`[data-set-lang="${lang}"]`)?.focus();
      return;
    }
    const designBtn = e.target.closest('[data-set-design]');
    if (designBtn) {
      store.set('hk-design', designBtn.dataset.setDesign);
      // Drop a ?design= override so the stored choice applies, then reload to load that design's CSS and fonts.
      const url = new URL(location.href);
      url.searchParams.delete('design');
      location.replace(url.toString());
      return;
    }
    if (e.target.closest('#theme-btn')) {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      store.set('hk-theme', next);
      if (new URLSearchParams(location.search).has('theme')) { const u = new URL(location.href); u.searchParams.delete('theme'); history.replaceState(null, '', u); }
      renderTopnav();
      syncThemeColor();
      $('#theme-btn')?.focus();
      return;
    }
    const copyBtn = e.target.closest('[data-copy]');
    if (copyBtn) {
      if (await copyText(copyBtn.dataset.copy)) {
        copyBtn.dataset.copied = 'true'; copyBtn.innerHTML = I.check; toast(t('copied'));
        setTimeout(() => { copyBtn.dataset.copied = 'false'; copyBtn.innerHTML = I.copy; }, 1800);
      } else {
        toast(t('copyFailed'));
      }
      return;
    }
    const shot = e.target.closest('[data-lightbox]');
    if (shot) {
      const img = shot.querySelector('img');
      openLightbox(img.getAttribute('src'), img.getAttribute('alt'));
      return;
    }
    if (e.target.closest('#video-play')) {
      const p = byId(projectId());
      if (!p) return;
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(p.youtubeId)}?autoplay=1&rel=0`;
      iframe.title = `${L(p, 'title')} — ${t('video')}`;
      iframe.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      $('#video-frame').replaceChildren(iframe);
      iframe.focus();
    }
  });

  // Follow the OS theme until the visitor picks one.
  try {
    const mq = matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', e => {
      if (store.get('hk-theme')) return;
      document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
      renderTopnav();
      syncThemeColor();
    });
  } catch { /* old browsers */ }

  if (PAGE === 'projects') window.addEventListener('hashchange', applyProjectFilter);
  ensureToast();
  renderAll();
})();
