(function () {
  function loadEmailJS(cb) {
    if (window.emailjs) return cb();
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = () => { emailjs.init('V7K3ChHw292fhrl0R'); cb(); };
    document.head.appendChild(s);
  }

  window.footerFormSubmit = function (e) {
    e.preventDefault();
    const name  = document.getElementById('ff-name').value.trim();
    const email = document.getElementById('ff-email').value.trim();
    const idea  = document.getElementById('ff-idea')?.value.trim() || '';
    const btn   = document.getElementById('ff-btn');
    const msg   = document.getElementById('ff-msg');

    btn.disabled = true;
    btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;animation:spin 1s linear infinite">progress_activity</span>';

    loadEmailJS(() => {
      emailjs.send('service_hk7wttn', 'template_x2k4bcn', {
        from_name:  name,
        from_email: email,
        service:    'Website Enquiry',
        message:    ['Name: ' + name, 'Email: ' + email, 'Enquiry: ' + (idea || '(No details provided)')].join('\n')
      }).then(() => {
        btn.style.display = 'none';
        msg.style.color = '#4edea3';
        msg.textContent = '✓ Received. We'll be in touch within 24h.';
        msg.style.display = 'block';
        document.getElementById('footer-form').reset();
      }).catch(() => {
        btn.disabled = false;
        btn.innerHTML = 'Let\'s Talk <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>';
        msg.style.color = '#f87171';
        msg.textContent = 'Something went wrong — try again.';
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 3000);
      });
    });
  };
})();
