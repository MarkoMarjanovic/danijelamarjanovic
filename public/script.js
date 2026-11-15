(() => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.getElementById('site-nav');
  toggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Zatvori navigaciju' : 'Otvori navigaciju');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
  const dialog = document.getElementById('booking-dialog');
  let opener = null;
  document.querySelectorAll('.js-open-calendar').forEach(button => button.addEventListener('click', () => {
    opener = button;
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    dialog.showModal();
  }));
  function close() { dialog.close(); if (opener) opener.focus(); }
  document.querySelectorAll('.close-dialog,.close-demo').forEach(button => button.addEventListener('click', close));
  dialog.addEventListener('click', e => { if (e.target === dialog) close(); });
  const selection = dialog.querySelector('.demo-selection');
  dialog.querySelectorAll('.date-option').forEach(button => button.addEventListener('click', () => {
    dialog.querySelectorAll('.date-option').forEach(b => {b.classList.remove('selected'); b.setAttribute('aria-pressed', 'false');});
    button.classList.add('selected');
    button.setAttribute('aria-pressed', 'true');
    selection.textContent = `Izabrani demonstracioni termin: ${button.dataset.label}. Ovo nije prava rezervacija.`;
  }));
  if (document.getElementById('year')) document.getElementById('year').textContent = String(new Date().getFullYear());
})();
