(function () {
  const html = `
<style>@keyframes spin{to{transform:rotate(360deg)}}</style>
<div id="initiate-modal" style="display:none;position:fixed;inset:0;z-index:100;align-items:center;justify-content:center;padding:16px;-webkit-overflow-scrolling:touch">
  <div onclick="closeInitiateModal()" style="position:absolute;inset:0;background:rgba(9,16,12,0.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);cursor:pointer;-webkit-tap-highlight-color:transparent"></div>
  <div class="relative w-full max-w-2xl rounded-xl shadow-2xl" style="background:#111a15;border:1px solid rgba(78,222,163,0.1);max-height:90vh;overflow-y:auto;-webkit-overflow-scrolling:touch">

    <div class="h-0.5" style="background:#1a211d">
      <div id="mp-progress" class="h-full transition-all duration-500" style="background:#4edea3;width:25%"></div>
    </div>

    <div class="flex items-center justify-between px-8 pt-8 pb-6" style="border-bottom:1px solid rgba(221,228,221,0.05)">
      <div>
        <div id="mp-step-label" style="font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#4edea3;margin-bottom:4px">Step 1 of 4</div>
        <h2 id="mp-step-title" style="font-size:1.4rem;font-weight:900;letter-spacing:-.03em;color:#dde4dd;font-family:Inter,sans-serif">What are you building?</h2>
      </div>
      <button onclick="closeInitiateModal()" style="width:36px;height:36px;border-radius:8px;background:#1a211d;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#c1c9c1;transition:background .2s" onmouseover="this.style.background='#242c27'" onmouseout="this.style.background='#1a211d'">
        <span class="material-symbols-outlined" style="font-size:20px">close</span>
      </button>
    </div>

    <div class="px-8 py-8" style="min-height:340px;display:flex;flex-direction:column">

      <!-- Step 1 -->
      <div id="mp-step-1" style="display:grid;grid-template-columns:1fr 1fr;gap:12px;flex:1">
        <button onclick="mpSelectService(this,'Development')" class="mp-service-card" style="text-align:left;padding:20px;border-radius:8px;background:#1a211d;border:1px solid #3f4940;cursor:pointer;transition:all .2s">
          <span class="material-symbols-outlined" style="color:#10B981;font-size:24px;display:block;margin-bottom:12px">terminal</span>
          <div style="font-weight:700;color:#dde4dd;margin-bottom:4px;font-family:Inter,sans-serif">Development</div>
          <div style="font-size:12px;color:#c1c9c1;line-height:1.5">Web apps, SaaS platforms, AI-native products</div>
        </button>
        <button onclick="mpSelectService(this,'Automation')" class="mp-service-card" style="text-align:left;padding:20px;border-radius:8px;background:#1a211d;border:1px solid #3f4940;cursor:pointer;transition:all .2s">
          <span class="material-symbols-outlined" style="color:#a8cfc1;font-size:24px;display:block;margin-bottom:12px">robot_2</span>
          <div style="font-weight:700;color:#dde4dd;margin-bottom:4px;font-family:Inter,sans-serif">Automation</div>
          <div style="font-size:12px;color:#c1c9c1;line-height:1.5">Workflow systems, Zapier/Make, process bots</div>
        </button>
        <button onclick="mpSelectService(this,'Email Infrastructure')" class="mp-service-card" style="text-align:left;padding:20px;border-radius:8px;background:#1a211d;border:1px solid #3f4940;cursor:pointer;transition:all .2s">
          <span class="material-symbols-outlined" style="color:#10B981;font-size:24px;display:block;margin-bottom:12px">alternate_email</span>
          <div style="font-weight:700;color:#dde4dd;margin-bottom:4px;font-family:Inter,sans-serif">Email</div>
          <div style="font-size:12px;color:#c1c9c1;line-height:1.5">Deliverability, outreach, SPF/DKIM/DMARC</div>
        </button>
        <button onclick="mpSelectService(this,'Full Stack Package')" class="mp-service-card" style="text-align:left;padding:20px;border-radius:8px;background:#1a211d;border:1px solid #3f4940;cursor:pointer;transition:all .2s">
          <span class="material-symbols-outlined" style="color:#4edea3;font-size:24px;display:block;margin-bottom:12px">layers</span>
          <div style="font-weight:700;color:#dde4dd;margin-bottom:4px;font-family:Inter,sans-serif">Full Stack</div>
          <div style="font-size:12px;color:#c1c9c1;line-height:1.5">End-to-end Digital Park — all three verticals</div>
        </button>
      </div>

      <!-- Step 2 -->
      <div id="mp-step-2" style="display:none;flex-direction:column;gap:20px;flex:1">
        <div>
          <label style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1;display:block;margin-bottom:8px">Project Name</label>
          <input id="mp-proj-name" type="text" placeholder="e.g. Outreach Pulse Platform" style="width:100%;background:#1a211d;color:#dde4dd;border-radius:8px;padding:12px 16px;font-size:14px;border:1px solid #3f4940;outline:none;box-sizing:border-box;font-family:Inter,sans-serif;transition:border .2s" onfocus="this.style.borderColor='rgba(78,222,163,.5)'" onblur="this.style.borderColor='#3f4940'">
        </div>
        <div>
          <label style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1;display:block;margin-bottom:8px">What do you need built?</label>
          <textarea id="mp-proj-desc" rows="3" placeholder="Describe the core problem you're solving..." style="width:100%;background:#1a211d;color:#dde4dd;border-radius:8px;padding:12px 16px;font-size:14px;border:1px solid #3f4940;outline:none;box-sizing:border-box;font-family:Inter,sans-serif;resize:none;transition:border .2s" onfocus="this.style.borderColor='rgba(78,222,163,.5)'" onblur="this.style.borderColor='#3f4940'"></textarea>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <div>
            <label style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1;display:block;margin-bottom:8px">Timeline</label>
            <select id="mp-timeline" style="width:100%;background:#1a211d;color:#dde4dd;border-radius:8px;padding:12px 16px;font-size:14px;border:1px solid #3f4940;outline:none;box-sizing:border-box;font-family:Inter,sans-serif">
              <option value="">Select...</option>
              <option>1–2 weeks</option><option>1 month</option><option>2–3 months</option><option>Ongoing retainer</option>
            </select>
          </div>
          <div>
            <label style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1;display:block;margin-bottom:8px">Budget Range</label>
            <select id="mp-budget" style="width:100%;background:#1a211d;color:#dde4dd;border-radius:8px;padding:12px 16px;font-size:14px;border:1px solid #3f4940;outline:none;box-sizing:border-box;font-family:Inter,sans-serif">
              <option value="">Select...</option>
              <option>Under $2k</option><option>$2k – $10k</option><option>$10k – $50k</option><option>$50k+</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Step 3 -->
      <div id="mp-step-3" style="display:none;flex-direction:column;gap:20px;flex:1">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
          <div>
            <label style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1;display:block;margin-bottom:8px">First Name</label>
            <input id="mp-first" type="text" placeholder="John" style="width:100%;background:#1a211d;color:#dde4dd;border-radius:8px;padding:12px 16px;font-size:14px;border:1px solid #3f4940;outline:none;box-sizing:border-box;font-family:Inter,sans-serif;transition:border .2s" onfocus="this.style.borderColor='rgba(78,222,163,.5)'" onblur="this.style.borderColor='#3f4940'">
          </div>
          <div>
            <label style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1;display:block;margin-bottom:8px">Last Name</label>
            <input id="mp-last" type="text" placeholder="Doe" style="width:100%;background:#1a211d;color:#dde4dd;border-radius:8px;padding:12px 16px;font-size:14px;border:1px solid #3f4940;outline:none;box-sizing:border-box;font-family:Inter,sans-serif;transition:border .2s" onfocus="this.style.borderColor='rgba(78,222,163,.5)'" onblur="this.style.borderColor='#3f4940'">
          </div>
        </div>
        <div>
          <label style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1;display:block;margin-bottom:8px">Email</label>
          <input id="mp-email" type="email" placeholder="john@company.com" style="width:100%;background:#1a211d;color:#dde4dd;border-radius:8px;padding:12px 16px;font-size:14px;border:1px solid #3f4940;outline:none;box-sizing:border-box;font-family:Inter,sans-serif;transition:border .2s" onfocus="this.style.borderColor='rgba(78,222,163,.5)'" onblur="this.style.borderColor='#3f4940'">
        </div>
        <div>
          <label style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1;display:block;margin-bottom:8px">Company <span style="font-weight:400;text-transform:none;letter-spacing:0;color:#8a938c">(optional)</span></label>
          <input id="mp-company" type="text" placeholder="Acme Corp" style="width:100%;background:#1a211d;color:#dde4dd;border-radius:8px;padding:12px 16px;font-size:14px;border:1px solid #3f4940;outline:none;box-sizing:border-box;font-family:Inter,sans-serif;transition:border .2s" onfocus="this.style.borderColor='rgba(78,222,163,.5)'" onblur="this.style.borderColor='#3f4940'">
        </div>
      </div>

      <!-- Step 4: Success -->
      <div id="mp-step-4" style="display:none;flex-direction:column;align-items:center;justify-content:center;text-align:center;flex:1;padding:16px 0">
        <div style="width:64px;height:64px;border-radius:50%;background:rgba(78,222,163,.1);display:flex;align-items:center;justify-content:center;margin-bottom:24px">
          <span class="material-symbols-outlined" style="color:#4edea3;font-size:32px">check_circle</span>
        </div>
        <h3 style="font-size:1.5rem;font-weight:900;color:#dde4dd;font-family:Inter,sans-serif;margin-bottom:12px">We're on it.</h3>
        <p style="color:#c1c9c1;font-size:14px;max-width:340px;line-height:1.7;margin-bottom:32px">Your project brief has been received. An architect will reach out within <strong style="color:#dde4dd">24 hours</strong> to schedule a discovery call.</p>
        <div style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:280px">
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:#1a211d;border-radius:8px;text-align:left">
            <span class="material-symbols-outlined" style="color:#4edea3;font-size:18px">schedule</span>
            <span style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1">Response within 24h</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:#1a211d;border-radius:8px;text-align:left">
            <span class="material-symbols-outlined" style="color:#4edea3;font-size:18px">video_call</span>
            <span style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1">Discovery call scheduled</span>
          </div>
          <div style="display:flex;align-items:center;gap:12px;padding:14px 16px;background:#1a211d;border-radius:8px;text-align:left">
            <span class="material-symbols-outlined" style="color:#4edea3;font-size:18px">architecture</span>
            <span style="font-size:10px;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:#c1c9c1">Blueprint delivered in 48h</span>
          </div>
        </div>
      </div>

    </div>

    <div id="mp-modal-err" style="display:none;text-align:center;padding:0 32px 12px;font-size:12px;color:rgba(248,113,113,.9)">Something went wrong — please try again.</div>

    <!-- Footer -->
    <div id="mp-footer" style="display:flex;align-items:center;justify-content:space-between;padding:0 32px 32px">
      <button id="mp-btn-back" onclick="mpStepBack()" style="display:none;background:none;border:none;cursor:pointer;color:#c1c9c1;font-weight:700;font-size:13px;font-family:Inter,sans-serif;display:flex;align-items:center;gap:8px;transition:color .2s" onmouseover="this.style.color='#4edea3'" onmouseout="this.style.color='#c1c9c1'">
        <span class="material-symbols-outlined" style="font-size:18px">arrow_back</span> Back
      </button>
      <div id="mp-back-placeholder"></div>
      <button id="mp-btn-next" onclick="mpStepNext()" style="background:#10B981;color:#002111;padding:12px 28px;border-radius:8px;font-weight:700;font-size:13px;font-family:Inter,sans-serif;border:none;cursor:pointer;display:flex;align-items:center;gap:8px;transition:all .2s;letter-spacing:.01em" onmouseover="this.style.filter='brightness(1.1)'" onmouseout="this.style.filter='none'">
        Continue <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>
      </button>
    </div>

  </div>
</div>`;

  const container = document.createElement('div');
  container.innerHTML = html;
  document.body.appendChild(container.firstElementChild);

  let mpCurrent = 1;
  let mpSelectedService = null;
  const mpTitles = ['What are you building?', 'Project details.', 'How do we reach you?', 'Project received.'];
  const mpProgress = ['25%', '50%', '75%', '100%'];

  window.openInitiateModal = function (preselect) {
    mpCurrent = 1;
    mpSelectedService = null;
    document.querySelectorAll('.mp-service-card').forEach(c => {
      c.style.borderColor = '#3f4940';
      c.style.background = '#1a211d';
    });
    if (preselect) {
      const match = Array.from(document.querySelectorAll('.mp-service-card'))
        .find(c => c.querySelector('div')?.textContent?.trim() === preselect);
      if (match) mpSelectService(match, preselect);
    }
    mpRender();
    const modal = document.getElementById('initiate-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  };

  window.closeInitiateModal = function () {
    document.getElementById('initiate-modal').style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  };

  window.mpSelectService = function (el, name) {
    document.querySelectorAll('.mp-service-card').forEach(c => {
      c.style.borderColor = '#3f4940';
      c.style.background = '#1a211d';
    });
    el.style.borderColor = '#4edea3';
    el.style.background = '#1e2d25';
    mpSelectedService = name;
  };

  function mpLoadEmailJS(cb) {
    if (window.emailjs) return cb();
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    s.onload = () => { emailjs.init('V7K3ChHw292fhrl0R'); cb(); };
    document.head.appendChild(s);
  }

  window.mpStepNext = function () {
    if (mpCurrent === 1 && !mpSelectedService) {
      document.querySelectorAll('.mp-service-card').forEach(c => {
        c.style.outline = '1px solid rgba(248,113,113,.4)';
        setTimeout(() => c.style.outline = 'none', 800);
      });
      return;
    }

    // Step 3 → 4: send email before advancing
    if (mpCurrent === 3) {
      const first   = document.getElementById('mp-first').value.trim();
      const email   = document.getElementById('mp-email').value.trim();
      if (!first || !email) {
        ['mp-first','mp-email'].forEach(id => {
          const el = document.getElementById(id);
          if (!el.value.trim()) { el.style.borderColor = 'rgba(248,113,113,.6)'; setTimeout(() => el.style.borderColor = '#3f4940', 1200); }
        });
        return;
      }

      const btn = document.getElementById('mp-btn-next');
      btn.disabled = true;
      btn.innerHTML = '<span class="material-symbols-outlined" style="font-size:18px;animation:spin 1s linear infinite">progress_activity</span>';

      const params = {
        from_name:  first + ' ' + document.getElementById('mp-last').value.trim(),
        from_email: email,
        service:    mpSelectedService,
        message: [
          'Company: '     + (document.getElementById('mp-company').value  || '—'),
          'Project: '     + (document.getElementById('mp-proj-name').value || '—'),
          'Description: ' + (document.getElementById('mp-proj-desc').value || '—'),
          'Timeline: '    + (document.getElementById('mp-timeline').value  || '—'),
          'Budget: '      + (document.getElementById('mp-budget').value    || '—'),
        ].join('\n')
      };

      mpLoadEmailJS(() => {
        emailjs.send('service_hk7wttn', 'template_x2k4bcn', params)
          .then(() => { btn.disabled = false; mpCurrent++; mpRender(); })
          .catch(() => {
            btn.disabled = false;
            btn.innerHTML = 'Continue <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>';
            const errEl = document.getElementById('mp-modal-err');
            if (errEl) { errEl.style.display = 'block'; setTimeout(() => errEl.style.display = 'none', 3000); }
          });
      });
      return;
    }

    if (mpCurrent < 4) { mpCurrent++; mpRender(); }
  };

  window.mpStepBack = function () {
    if (mpCurrent > 1) { mpCurrent--; mpRender(); }
  };

  function mpRender() {
    document.getElementById('mp-step-label').textContent = `Step ${mpCurrent} of 4`;
    document.getElementById('mp-step-title').textContent = mpTitles[mpCurrent - 1];
    document.getElementById('mp-progress').style.width = mpProgress[mpCurrent - 1];

    for (let i = 1; i <= 4; i++) {
      const el = document.getElementById(`mp-step-${i}`);
      el.style.display = i === mpCurrent ? (i === 4 ? 'flex' : i === 1 ? 'grid' : 'flex') : 'none';
    }

    const btnBack = document.getElementById('mp-btn-back');
    const placeholder = document.getElementById('mp-back-placeholder');
    const btnNext = document.getElementById('mp-btn-next');

    if (mpCurrent === 1) {
      btnBack.style.visibility = 'hidden';
      placeholder.style.display = 'block';
    } else {
      btnBack.style.visibility = 'visible';
      placeholder.style.display = 'none';
    }

    if (mpCurrent === 4) {
      btnNext.innerHTML = 'Close <span class="material-symbols-outlined" style="font-size:18px">check</span>';
      btnNext.onclick = closeInitiateModal;
    } else {
      btnNext.innerHTML = 'Continue <span class="material-symbols-outlined" style="font-size:18px">arrow_forward</span>';
      btnNext.onclick = mpStepNext;
    }
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeInitiateModal();
  });
})();
