const pages = ['home','advaith','ronak','timeline','global','email'];

function go(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('p-' + id).classList.add('active');
  document.querySelector(`.nav-btn[data-page="${id}"]`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function switchTab(group, panelId, btn) {
  const section = btn.closest('section');
  section.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));
  section.querySelectorAll('.t-btn').forEach(b => b.classList.remove('on'));
  document.getElementById(panelId).classList.add('on');
  btn.classList.add('on');
}

document.addEventListener('DOMContentLoaded', () => {
  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => go(btn.dataset.page));
  });

  // Pill buttons on home page
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => go(pill.dataset.page));
  });

  // Toggle tab buttons
  document.querySelectorAll('.t-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.group, btn.dataset.panel, btn));
  });
});
