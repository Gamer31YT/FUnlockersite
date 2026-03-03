// === Мобильное меню ===
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const nav = document.querySelector('.nav');

mobileMenuBtn?.addEventListener('click', () => {
  nav.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    mobileMenuBtn?.classList.remove('active');
  });
});

// === Плавная прокрутка ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// === Анимация появления при скролле ===
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Добавляем класс fade-in элементам
document.querySelectorAll('.feature-card, .step, .faq-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// === Анимация шапки при скролле ===
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.style.background = 'rgba(10, 10, 15, 0.95)';
    header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
  } else {
    header.style.background = 'rgba(10, 10, 15, 0.85)';
    header.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// === Подсказка при скачивании ===
document.querySelector('[download]')?.addEventListener('click', () => {
  setTimeout(() => {
    // Можно добавить кастомное уведомление вместо alert
    console.log('✅ Файл загружается...');
  }, 500);
});

// === Параллакс эффект для фона ===
document.addEventListener('mousemove', (e) => {
  const gradient = document.querySelector('.bg-gradient');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  gradient.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
});