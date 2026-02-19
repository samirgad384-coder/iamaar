const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

document.querySelectorAll('[data-animate]').forEach((el, idx) => {
  el.style.animationDelay = `${idx * 90}ms`;
  el.classList.add('fade-up');
});

const planSwitch = document.querySelector('#planSwitch');
if (planSwitch) {
  const prices = document.querySelectorAll('[data-monthly]');
  planSwitch.addEventListener('change', () => {
    prices.forEach((price) => {
      const value = planSwitch.checked ? price.dataset.yearly : price.dataset.monthly;
      price.textContent = value;
    });
  });
}
