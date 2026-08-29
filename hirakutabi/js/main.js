document.addEventListener('DOMContentLoaded', () => {
  // 1. モバイルナビゲーションのトグル処理
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');

  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const isExpanded = navLinks.classList.contains('show');
      menuBtn.setAttribute('aria-expanded', isExpanded);
    });
  }

  // 2. アクティブナビゲーションリンクの自動判定
  const currentPath = window.location.pathname;
  const navAnchors = document.querySelectorAll('.nav-links a, .footer-nav a');

  navAnchors.forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (!href) return;

    if (
      (currentPath.endsWith('/') && href === 'index.html') ||
      (currentPath.endsWith('index.html') && href === 'index.html') ||
      (currentPath.includes(href) && href !== 'index.html')
    ) {
      anchor.classList.add('active');
    }
  });

  // 3. 問題セットTSVのダウンロード計測
  const questionSetLinks = document.querySelectorAll(
    'a.material-card[download][href$=".tsv"]'
  );

  questionSetLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (typeof window.gtag !== 'function') return;

      const setName = link.querySelector('.card-title')?.textContent.trim() || '';
      const fileName = link.getAttribute('href')?.split('/').pop() || '';

      window.gtag('event', 'question_set_download', {
        set_name: setName,
        file_name: fileName
      });
    });
  });
});
