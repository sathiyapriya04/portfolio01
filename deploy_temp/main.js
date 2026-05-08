// ─── EmailJS Configuration ────────────────────────────────────────────────────
// STEP 1: Go to https://www.emailjs.com/ → Sign up (free)
// STEP 2: Add Email Service (Gmail) → copy Service ID below
// STEP 3: Create Email Template with variables: {{from_name}}, {{reply_to}}, {{message}}
//         → copy Template ID below
// STEP 4: Go to Account → copy Public Key below
const EMAILJS_PUBLIC_KEY  = 'bdFtZ6pPXKhTUjhRy';
const EMAILJS_SERVICE_ID  = 'service_ioud7mv';
const EMAILJS_TEMPLATE_ID = 'template_3lg9fjw';

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// ─── Cursor ───────────────────────────────────────────────────────────────────
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';
});

// ─── Scroll Progress Bar ─────────────────────────────────────────────────────
const progressBar = document.getElementById('scrollProgress');
function updateProgress() {
  const pct = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = Math.min(pct, 100) + '%';
}
window.addEventListener('scroll', updateProgress, { passive: true });

// ─── Nav scroll + active link highlight ─────────────────────────────────────
const nav      = document.getElementById('nav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 240) cur = s.id;
  });
  navLinks.forEach(l => {
    const isActive = l.getAttribute('href') === '#' + cur;
    l.classList.toggle('nav-active', isActive);
  });
}, { passive: true });

// ─── Hamburger X animation + Mobile menu ────────────────────────────────────
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobileMenu');

ham.addEventListener('click', () => {
  const open = ham.classList.toggle('open');
  mob.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('.m-link').forEach(l => l.addEventListener('click', () => {
  ham.classList.remove('open');
  mob.classList.remove('open');
  document.body.style.overflow = '';
}));
// Close on outside click
mob.addEventListener('click', e => {
  if (e.target === mob) {
    ham.classList.remove('open');
    mob.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// ─── Scroll Reveal ───────────────────────────────────────────────────────────
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 0.07 + 's';
  obs.observe(el);
});

// ─── Contact Form via EmailJS ─────────────────────────────────────────────────
const form      = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');

form.addEventListener('submit', async e => {
  e.preventDefault();

  // Basic validation
  const name    = document.getElementById('fname').value.trim();
  const email   = document.getElementById('femail').value.trim();
  const message = document.getElementById('fmsg').value.trim();
  if (!name || !email || !message) return;

  // Button loading state
  const orig = submitBtn.innerHTML;
  submitBtn.innerHTML = '<svg class="spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg> Sending...';
  submitBtn.disabled = true;

  try {
    await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
      name:    name,
      email:   email,
      message: message,
      title:   'Portfolio Contact Form',
    });
    submitBtn.innerHTML = 'Message Sent!';
    submitBtn.style.background = '#059669';
    form.reset();
    setTimeout(() => {
      submitBtn.innerHTML = orig;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 4000);
  } catch (err) {
    console.error('EmailJS error:', err);
    submitBtn.innerHTML = 'Failed — Try Again';
    submitBtn.style.background = '#dc2626';
    setTimeout(() => {
      submitBtn.innerHTML = orig;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 3500);
  }
});

// ─── Subtle parallax on orbs ─────────────────────────────────────────────────
let lastX = 0, lastY = 0;
document.addEventListener('mousemove', e => {
  const x = (e.clientX / window.innerWidth  - .5) * 20;
  const y = (e.clientY / window.innerHeight - .5) * 20;
  lastX += (x - lastX) * .08;
  lastY += (y - lastY) * .08;
  const o1 = document.querySelector('.o1');
  const o2 = document.querySelector('.o2');
  if (o1) o1.style.transform = `translate(${lastX * .4}px,${lastY * .4}px)`;
  if (o2) o2.style.transform = `translate(${-lastX * .3}px,${-lastY * .3}px)`;
});
