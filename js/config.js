// 사이트 설정 (Site settings)
// 디자인을 고른 뒤: design 값을 원하는 디자인으로 바꾸고 designPicker를 false로 두면 끝입니다.
// After choosing: set `design` and turn `designPicker` off.
window.SITE_CONFIG = {
  // 'classic'   — A. 무난한 기본형 (Clean & neutral)
  // 'terminal'  — B. 개발자 특화형 (Developer / terminal)
  // 'editorial' — C. 에디토리얼형 (Editorial / magazine)
  design: 'classic',  // ← 확정: A · 기본형 (2026-09-27)

  // true면 화면 오른쪽 아래에 디자인 초안 전환 버튼이 보입니다. 공개 전에는 false로 바꾸세요.
  // Shows a floating draft switcher (bottom-right). Set to false before publishing.
  designPicker: false,

  // 디자인별 추가 웹폰트 (Pretendard는 모든 디자인에서 기본으로 불러옵니다).
  fonts: {
    classic: '',
    terminal: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
    editorial: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Noto+Serif+KR:wght@500;600;700&display=swap',
  },
};
