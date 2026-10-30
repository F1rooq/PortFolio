/* ===== 1. YOUR INFO (edit these) ===== */
const EMAIL  = "mahcenifarouk7@gmail.com";
const GITHUB = "https://github.com/F1rooq";
const SKILLS = ["HTML", "CSS", "JavaScript", "Python", "Git", "GitHub", "Responsive Design"];

// Contact form: with "" it opens the visitor's email app with the message filled in.
// To receive messages directly, make a free form at formspree.io and paste its link here.
const FORM_ENDPOINT = "";

/* ===== 2. PROJECTS  <-- ADD NEW PROJECTS HERE =====
   Copy one whole { ... } block, paste it after the last one (with a comma), and fill it:
   title / tags / desc (en + ar) / img (photo path, "" = colored box) /
   live (website link) / repo (GitHub link). Leave a link as "" to hide its button. */
const PROJECTS = [
  {
    title: "Task Manager",
    tags: ["JavaScript", "HTML", "CSS"],
    desc: {
      en: "A calm board to capture tasks, sort them by priority and watch your progress. Includes search, filters, auto-save and an Arabic/English switch.",
      ar: "لوحة هادئة لتسجيل المهام وترتيبها حسب الأولوية ومتابعة تقدّمك. تحتوي على بحث وفلاتر وحفظ تلقائي وزر تبديل بين العربية والإنجليزية."
    },
    img: "https://res.cloudinary.com/ktkc6t1z/image/upload/v1793396514/task-manager.jpg",
    live: "https://f1rooq.github.io/TaskManager/",
    repo: "https://github.com/F1rooq/TaskManager"
  }
  // , { title: "", tags: [], desc: { en: "", ar: "" }, img: "images/new.jpg", live: "", repo: "" }
];
const SHOW_EMPTY_SLOT = true; // dashed "your next project" card at the end

/* ===== 3. TEXTS (English + Arabic): keep the keys, change the words ===== */
const ROLES = {
  en: ["Beginner Web Developer", "Future Full-Stack Developer", "Freelancer in the making"],
  ar: ["مطوّر ويب مبتدئ", "مطوّر Full Stack قادم", "مستقل قيد التكوين"]
};
const TEXTS = {
  en: {
    nav_home: "Home", nav_about: "About", nav_journey: "Journey", nav_projects: "Projects", nav_contact: "Contact",
    hi: "Hello, I'm", name: "Farooq",
    pitch: "I build websites one project at a time, and I'm ready to build yours.",
    btn_projects: "See my projects", btn_mail: "Email me",
    about_title: "About me",
    about_p1: "I'm Farooq, a beginner web developer who learns by building. I started with HTML and CSS, moved on to JavaScript, and I'm growing into a full-stack developer who can take a website from idea to launch.",
    about_p2: "I'm looking for freelance work where I can build clean, friendly websites for real people, and learn something new with every project.",
    f1k: "Role", f1v: "Beginner full-stack web developer", f2k: "Goal", f2v: "Freelance website projects", f3k: "Learning style", f3v: "Building real projects",
    journey_title: "My learning journey",
    j1_t: "HTML & CSS", j1_d: "Built my first multi-page website and learned how pages are structured and styled.",
    j2_t: "JavaScript", j2_d: "Made a Task Manager with search, filters and saved tasks.",
    j3_t: "Python", j3_d: "Learning the basics step by step.",
    j4_t: "Full stack", j4_d: "Next goal: connect the front end and the back end into complete websites.",
    projects_title: "Projects", projects_sub: "Things I built while learning. More are coming.",
    live: "Live demo", code: "Source code", empty: "Your next project goes here",
    contact_title: "Let's build something", contact_p: "Need a website? Send me a message and tell me about your idea.",
    mail_btn: "Send me an email", footer: "Made with curiosity", toast: "Arc reactor at 100%",
    form_title: "Send me a message", l_name: "Your name", l_email: "Your email", l_subject: "Subject", l_message: "Message",
    send: "Send message", sent: "Message sent. Thank you!", opening: "Opening your email app…", fail: "Could not send. Please try again."
  },
  ar: {
    nav_home: "الرئيسية", nav_about: "عنّي", nav_journey: "رحلتي", nav_projects: "مشاريعي", nav_contact: "تواصل",
    hi: "مرحبًا، أنا", name: "فاروق",
    pitch: "أبني المواقع مشروعًا بعد مشروع، وجاهز لأبني موقعك.",
    btn_projects: "شاهد مشاريعي", btn_mail: "راسلني",
    about_title: "من أنا",
    about_p1: "أنا فاروق، مطوّر ويب مبتدئ أتعلّم عن طريق البناء. بدأت بـ HTML وCSS، ثم انتقلت إلى JavaScript، وأطمح أن أصبح مطوّر Full Stack قادرًا على تحويل أي فكرة إلى موقع حقيقي.",
    about_p2: "أبحث عن عمل حرّ أبني فيه مواقع نظيفة وسهلة الاستخدام لأشخاص حقيقيين، وأتعلّم شيئًا جديدًا مع كل مشروع.",
    f1k: "التخصص", f1v: "مطوّر ويب Full Stack مبتدئ", f2k: "الهدف", f2v: "مشاريع مواقع كعمل حر", f3k: "طريقة التعلّم", f3v: "بناء مشاريع حقيقية",
    journey_title: "رحلتي في التعلّم",
    j1_t: "HTML و CSS", j1_d: "بنيت أول موقع متعدد الصفحات وتعلّمت كيف تُبنى الصفحات وتُنسَّق.",
    j2_t: "JavaScript", j2_d: "صنعت تطبيق Task Manager مع بحث وفلاتر وحفظ للمهام.",
    j3_t: "Python", j3_d: "أتعلّم الأساسيات خطوة بخطوة.",
    j4_t: "Full Stack", j4_d: "هدفي القادم: ربط الواجهة الأمامية بالخلفية لبناء مواقع متكاملة.",
    projects_title: "المشاريع", projects_sub: "أشياء بنيتها أثناء التعلّم. والمزيد قادم.",
    live: "شاهد الموقع", code: "الكود المصدري", empty: "مشروعك القادم هنا",
    contact_title: "لنبنِ شيئًا معًا", contact_p: "تحتاج موقعًا؟ راسلني وأخبرني عن فكرتك.",
    mail_btn: "أرسل لي بريدًا إلكترونيًا", footer: "صُنع بشغف التعلّم", toast: "مفاعل آرك يعمل بنسبة 100%",
    form_title: "أرسل لي رسالة", l_name: "اسمك", l_email: "بريدك الإلكتروني", l_subject: "الموضوع", l_message: "الرسالة",
    send: "إرسال الرسالة", sent: "تم الإرسال. شكرًا لك!", opening: "جاري فتح تطبيق البريد…", fail: "تعذّر الإرسال. حاول مرة أخرى."
  }
};

/* ===== 4. CODE (no need to edit below) ===== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const store = { get: k => { try { return localStorage.getItem(k); } catch { return null; } }, set: (k, v) => { try { localStorage.setItem(k, v); } catch {} } };
let lang = store.get("lang") || "en", theme = store.get("theme") || "dark", typer;
const root = document.documentElement;

function startTyping() {              // typing effect
  clearTimeout(typer);
  const words = ROLES[lang], el = $("#typed"); let w = 0, i = 0, del = false;
  (function tick() {
    const word = words[w]; el.textContent = word.slice(0, i);
    if (!del && i === word.length) { del = true; typer = setTimeout(tick, 1400); return; }
    if (del && i === 0) { del = false; w = (w + 1) % words.length; }
    i += del ? -1 : 1; typer = setTimeout(tick, del ? 40 : 80);
  })();
}

function renderProjects() {           // build cards from PROJECTS
  const t = TEXTS[lang];
  $("#grid").innerHTML = PROJECTS.map((p, i) => `
    <article class="card" data-tilt style="--i:${i}">
      <div class="shot">${p.img ? `<img src="${p.img}" alt="${p.title}" loading="lazy">` : ""}</div>
      <h3>${p.title}</h3><p>${p.desc[lang]}</p>
      <div class="tags">${p.tags.map(x => `<span>${x}</span>`).join("")}</div>
      <div class="acts">
        ${p.live ? `<a class="btn" href="${p.live}" target="_blank" rel="noopener">${t.live}</a>` : ""}
        ${p.repo ? `<a class="btn ghost" href="${p.repo}" target="_blank" rel="noopener">${t.code}</a>` : ""}
      </div></article>`).join("")
    + (SHOW_EMPTY_SLOT ? `<div class="card empty" style="--i:${PROJECTS.length}">${t.empty}</div>` : "");
}

function applyLang() {
  const t = TEXTS[lang];
  root.lang = lang; root.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => el.textContent = t[el.dataset.i18n]);
  $("#lang").textContent = lang === "ar" ? "EN" : "ع";
  renderProjects(); startTyping(); store.set("lang", lang);
}
function applyTheme() {
  root.dataset.theme = theme; $("#theme").textContent = theme === "dark" ? "☀" : "☾";
  store.set("theme", theme); readColors();
}
$("#lang").onclick = () => { lang = lang === "en" ? "ar" : "en"; applyLang(); };
$("#theme").onclick = () => { theme = theme === "dark" ? "light" : "dark"; document.startViewTransition ? document.startViewTransition(applyTheme) : applyTheme(); };

$("#ghBtn").href = GITHUB;
$("#year").textContent = new Date().getFullYear();
$("#track").innerHTML = [...SKILLS, ...SKILLS].map(s => `<span>${s}</span>`).join("");

/* ---- contact form page ---- */
const modal = $("#modal"), msg = $("#formMsg");
const openForm = () => { modal.classList.add("open"); modal.setAttribute("aria-hidden", "false"); msg.textContent = ""; setTimeout(() => $("#form input").focus(), 400); };
const closeForm = () => { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); };
$$("[data-open]").forEach(b => b.onclick = openForm);
$("#close").onclick = closeForm;
modal.onclick = e => { if (e.target === modal) closeForm(); };
addEventListener("keydown", e => { if (e.key === "Escape") closeForm(); });
$("#form").onsubmit = async e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target)), t = TEXTS[lang];
  if (FORM_ENDPOINT) {                // send straight to your inbox through Formspree
    try {
      const r = await fetch(FORM_ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw 0; msg.textContent = t.sent; e.target.reset();
    } catch { msg.textContent = t.fail; }
  } else {                            // no server: open the visitor's email app
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message + "\n\n" + d.name + " (" + d.email + ")")}`;
    msg.textContent = t.opening;
  }
};

/* ---- moving stars background (canvas) ---- */
const cv = $("#bg"), cx = cv.getContext("2d");
let W, H, stars = [], shots = [], bursts = [], mouse = { x: -999, y: -999 }, cols = ["#c4b5fd", "#8b5cf6"];
function readColors() { const s = getComputedStyle(root); cols = [s.getPropertyValue("--accent").trim(), s.getPropertyValue("--accent2").trim()]; }
function sizeCanvas() {
  W = cv.width = innerWidth; H = cv.height = innerHeight;
  stars = Array.from({ length: Math.min(120, W / 9) }, () => ({ x: Math.random() * W, y: Math.random() * H, z: Math.random() * .9 + .1, vx: Math.random() - .5, vy: Math.random() - .5, p: Math.random() * 6 }));
}
function draw(t) {
  cx.clearRect(0, 0, W, H);
  const ox = (mouse.x - W / 2) * -.03, oy = (mouse.y - H / 2) * -.03;   // stars shift with the mouse
  stars.forEach((s, i) => {
    s.x = (s.x + s.vx * s.z * .35 + W) % W; s.y = (s.y + s.vy * s.z * .35 + H) % H;
    s.px = s.x + ox * s.z; s.py = s.y + oy * s.z;
    cx.globalAlpha = .35 + .65 * Math.abs(Math.sin(t / 900 + s.p)); cx.fillStyle = cols[s.p > 3 ? 1 : 0];
    cx.beginPath(); cx.arc(s.px, s.py, s.z * 2, 0, 7); cx.fill();
    for (let j = i + 1; j < stars.length; j++) {                        // lines between close stars and to the mouse
      const o = stars[j], d = Math.hypot(s.px - o.px, s.py - o.py);
      if (d < 95) { cx.globalAlpha = (1 - d / 95) * .35; cx.strokeStyle = cols[0]; cx.beginPath(); cx.moveTo(s.px, s.py); cx.lineTo(o.px, o.py); cx.stroke(); }
    }
    const m = Math.hypot(s.px - mouse.x, s.py - mouse.y);
    if (m < 150) { cx.globalAlpha = (1 - m / 150) * .8; cx.strokeStyle = cols[1]; cx.beginPath(); cx.moveTo(s.px, s.py); cx.lineTo(mouse.x, mouse.y); cx.stroke(); }
  });
  if (Math.random() < .006) shots.push({ x: Math.random() * W, y: 0, l: 1 });  // shooting stars
  shots = shots.filter(s => (s.l -= .012) > 0);
  shots.forEach(s => { s.x += 9; s.y += 5; cx.globalAlpha = s.l; cx.strokeStyle = cols[0]; cx.lineWidth = 2; cx.beginPath(); cx.moveTo(s.x, s.y); cx.lineTo(s.x - 70, s.y - 38); cx.stroke(); cx.lineWidth = 1; });
  bursts = bursts.filter(b => (b.l -= .02) > 0);                          // click sparks
  bursts.forEach(b => { b.x += b.vx; b.y += b.vy; cx.globalAlpha = b.l; cx.fillStyle = cols[1]; cx.beginPath(); cx.arc(b.x, b.y, 2.5, 0, 7); cx.fill(); });
  requestAnimationFrame(draw);
}
addEventListener("resize", sizeCanvas);
addEventListener("click", e => { for (let i = 0; i < 14; i++) { const a = Math.random() * 6.28, v = Math.random() * 4 + 1; bursts.push({ x: e.clientX, y: e.clientY, vx: Math.cos(a) * v, vy: Math.sin(a) * v, l: 1 }); } });

/* ---- mouse effects: light, 3D reactor, card tilt, magnetic buttons ---- */
addEventListener("mousemove", e => {
  mouse = { x: e.clientX, y: e.clientY };
  root.style.setProperty("--mx", e.clientX + "px"); root.style.setProperty("--my", e.clientY + "px");
  const r = $("#reactor").style;
  r.setProperty("--ry", (e.clientX / W - .5) * 40 + "deg"); r.setProperty("--rx", (.5 - e.clientY / H) * 40 + "deg");
  const el = e.target.closest("[data-tilt]");
  if (el) { const b = el.getBoundingClientRect(), x = (e.clientX - b.left) / b.width - .5, y = (e.clientY - b.top) / b.height - .5; el.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.02)`; }
  const bt = e.target.closest(".btn");
  if (bt) { const b = bt.getBoundingClientRect(); bt.style.setProperty("--tx", (e.clientX - b.left - b.width / 2) * .15 + "px"); bt.style.setProperty("--ty", (e.clientY - b.top - b.height / 2) * .25 + "px"); }
});
addEventListener("mouseout", e => {
  const el = e.target.closest("[data-tilt]"); if (el && !el.contains(e.relatedTarget)) el.style.transform = "";
  const bt = e.target.closest(".btn"); if (bt && !bt.contains(e.relatedTarget)) { bt.style.setProperty("--tx", "0px"); bt.style.setProperty("--ty", "0px"); }
});
$("#reactor").onclick = () => {        // click the arc reactor
  $("#reactor").classList.add("boost"); $("#toast").textContent = TEXTS[lang].toast; $("#toast").classList.add("show");
  setTimeout(() => { $("#reactor").classList.remove("boost"); $("#toast").classList.remove("show"); }, 2200);
};

/* ---- scroll: progress bar, reveal, and REMEMBER the place after reload ---- */
addEventListener("scroll", () => {
  $(".progress").style.width = root.scrollTop / (root.scrollHeight - root.clientHeight) * 100 + "%";
  store.set("y", Math.round(scrollY));
});
const io = new IntersectionObserver(l => l.forEach(x => x.isIntersecting && x.target.classList.add("in")), { threshold: .15 });
$$(".rv").forEach(el => io.observe(el));
history.scrollRestoration = "manual";                 // we restore the position ourselves
if (location.hash) history.replaceState(null, "", location.pathname + location.search);  // a "#about" would pull you away
const backToPlace = () => scrollTo({ top: +store.get("y") || 0, behavior: "instant" });

/* ---- start ---- */
applyTheme(); applyLang(); sizeCanvas();
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) requestAnimationFrame(draw); else draw(0);
backToPlace(); addEventListener("load", backToPlace);
