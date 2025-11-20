document.documentElement.classList.add('js-enabled');

const banner = document.querySelector('[data-cookie-banner]');
const acceptBtn = banner?.querySelector('[data-cookie-accept]');
const declineBtn = banner?.querySelector('[data-cookie-decline]');
const consentKey = 'fp-cookie-consent';

const mainNav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');

const hideBanner = () => banner?.classList.add('hidden');
const showBanner = () => banner?.classList.remove('hidden');

const savedConsent = localStorage.getItem(consentKey);
if (!savedConsent) {
  showBanner();
}

acceptBtn?.addEventListener('click', () => {
  localStorage.setItem(consentKey, 'accepted');
  hideBanner();
});

declineBtn?.addEventListener('click', () => {
  localStorage.setItem(consentKey, 'declined');
  hideBanner();
});

const toggleNav = () => {
  if (!mainNav || !navToggle) return;
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
};

navToggle?.addEventListener('click', toggleNav);

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.querySelector('#contact-form');
const feedback = contactForm?.querySelector('[data-feedback]');

if (contactForm && feedback) {
  const params = new URLSearchParams(window.location.search);
  if (params.get('sent') === '1') {
    feedback.textContent =
      'Gracias por tu mensaje. Te responderemos lo antes posible.';
  }
}

