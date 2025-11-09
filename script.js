(function () {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNavigation');
  const toast = document.getElementById('toast');
  const contactForm = document.getElementById('contactForm');
  const yearEl = document.getElementById('year');

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  if (navToggle && nav) {
    const closeNav = () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    };

    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('click', (event) => {
      if (!nav.contains(event.target) && event.target !== navToggle) {
        closeNav();
      }
    });
  }

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    toast.setAttribute('aria-hidden', 'false');
    setTimeout(() => {
      toast.classList.remove('is-visible');
      toast.setAttribute('aria-hidden', 'true');
    }, 4000);
  };

  if (contactForm) {
    const feedbackEl = contactForm.querySelector('.form-feedback');
    const errorElements = Array.from(contactForm.querySelectorAll('[data-error-for]'));

    const validators = {
      name: (value) => value.trim().length >= 2 || 'Please enter your full name.',
      email: (value) => /.+@.+\..+/.test(value) || 'Please enter a valid email address.',
      company: () => true,
      message: (value) => value.trim().length >= 10 || 'Please add a few more details to your message.',
    };

    const clearErrors = () => {
      errorElements.forEach((el) => {
        el.textContent = '';
      });
      if (feedbackEl) {
        feedbackEl.textContent = '';
      }
    };

    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      clearErrors();

      const formData = new FormData(contactForm);
      let hasError = false;

      for (const [key, validator] of Object.entries(validators)) {
        const value = String(formData.get(key) ?? '');
        const result = validator(value);
        if (result !== true) {
          const errorEl = contactForm.querySelector(`[data-error-for="${key}"]`);
          if (errorEl) {
            errorEl.textContent = result;
          }
          hasError = true;
        }
      }

      if (hasError) {
        if (feedbackEl) {
          feedbackEl.textContent = 'Please fix the highlighted fields and try again.';
        }
        return;
      }

      contactForm.reset();
      if (feedbackEl) {
        feedbackEl.textContent = 'Thank you! Your message has been recorded for follow-up.';
      }
      showToast('Message sent! We will be in touch shortly.');
    });
  }
})();
