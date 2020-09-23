(() => {
  const el = document.getElementById('link');
  const messageEl = document.getElementById('message');

  if (!el || !el.textContent) {
    return;
  }

  navigator.clipboard.writeText(el.textContent).then(() => {
    messageEl.innerText = 'Copied to clipboard';
  }, err => {
    messageEl.innerText = '';
  });
})();
