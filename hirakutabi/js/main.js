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
});
