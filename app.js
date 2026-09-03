/**
 * MicroIntern SG — Ultra-Condensed Bilingual Engine
 * "Get the Real Work Done. Impress the Company. Start the Conversation."
 */

document.addEventListener('DOMContentLoaded', () => {

  const i18n = {
    en: {
      nav_brand_sub: "Singapore",
      nav_how: "How It Works",
      nav_cases: "Cases",
      nav_join_link: "Join Pilot",
      nav_cta: "Join Pilot",

      hero_pill: "SINGAPORE MICRO-INTERNSHIP PILOT",
      hero_line1: "The resume is dead.",
      hero_line2: "Get the real work done.",
      hero_sub: "A lightweight platform connecting Singapore SMEs and university students through 2–4 hour real business challenges. Free for companies to post. Pure proof-of-work for students.",
      motto_text: "\"Get the Real Work Done. Impress the Company. Start the Conversation.\"",

      pain_sme_who: "FOR SINGAPORE SMES & FOUNDERS",
      pain_sme_title: "Sick of ChatGPT-generated resumes?",
      pain_sme_desc: "You post an opening and get 200 identical AI-polished resumes. You interview two rounds, make an offer, and realize they can’t write a basic database query. Traditional hiring is an expensive gamble on paper.",

      pain_stu_who: "FOR NUS, NTU & SMU STUDENTS",
      pain_stu_title: "Trapped in the \"need experience\" loop?",
      pain_stu_desc: "You have real skills, but every entry-level internship demands 1–2 prior corporate roles. You send 60 applications, only to be rejected in 4 seconds by an automated ATS keyword bot.",

      flow_kicker: "THE ZERO-RISK ENGINE",
      flow_title: "How MicroIntern SG Works",
      flow_desc: "A clean, mutual-win flywheel built specifically for Singapore's local business ecosystem.",
      step1_head: "SME Posts a 2–4h Task (Free)",
      step1_body: "Company posts a concrete business bottleneck (e.g. data scraping, onboarding UX audit, social copy). <strong>Zero cost. Zero payroll commitment.</strong> You do not pay each applicant.",
      step2_head: "Students Submit Real Proof",
      step2_body: "Multiple students execute and submit structured deliverables. Even if not selected, students gain a <strong>verified, real-world case</strong> for their portfolio.",
      step3_head: "Review Output & Start a Chat",
      step3_body: "Company reviews the tangible outputs. If a student's solution stands out, reach out directly for a coffee chat, further project work, or a formal internship offer.",

      cases_kicker: "EVIDENCE",
      cases_title: "Two Real Proof Deliverables",
      tab1_btn: "PayBridge SEA (Fintech UX)",
      tab2_btn: "OmniSupply AI (Python Data)",
      
      c1_sub: "Cross-border payments SME • Tanjong Pagar",
      c1_task_lbl: "The Challenge:",
      c1_task_val: "42% drop-off at Singpass onboarding for Indonesian SME users in Singapore.",
      c1_sol_lbl: "Student Deliverable (Darren, NUS Y1):",
      c1_sol_val: "Identified 68% entity-type mismatch and designed a 1-tap fallback upload with instant OCR preview.",
      c1_out_auth: "Outcome:",
      c1_out_val: "Founder reviewed 4 student submissions, immediately invited Darren for coffee, and offered a part-time Product Analyst role.",

      c2_sub: "Supply chain automation • Jurong Innovation District",
      c2_task_lbl: "The Challenge:",
      c2_task_val: "Parse non-standard invoice PDFs from 40 Malaysian & Singaporean hardware vendors into JSON.",
      c2_sol_lbl: "Student Deliverable (Siddharth, NTU Y1):",
      c2_sol_val: "Built a modular regex parser with 15 unit tests catching handwritten GST edge-cases.",
      c2_out_auth: "Outcome:",
      c2_out_val: "CTO reviewed submissions, kept the working script, and hired Siddharth directly for the upcoming semester.",

      join_kicker: "PILOT COHORT 01",
      join_title: "Join the MicroIntern SG Pilot",
      join_sub: "We are onboarding 30 forward-thinking Singapore SMEs and 100 motivated NUS / NTU / SMU students.",
      role_sme: "I am an SME / Employer (Post a Task Free)",
      role_stu: "I am a University Student (Tackle Tasks)",
      btn_submit: "Claim Your Pilot Access →",
      res_badge: "PILOT VANGUARD CONFIRMED",
      footer_sub: "Singapore's Proof-of-Work Micro-Internship Pilot"
    },

    zh: {
      nav_brand_sub: "新加坡",
      nav_how: "运作机制",
      nav_cases: "实战案例",
      nav_join_link: "入驻试点",
      nav_cta: "入驻试点",

      hero_pill: "新加坡微实习（MICRO-INTERNSHIP）试点网络",
      hero_line1: "传统简历已经失效。",
      hero_line2: "搞定真实任务，直接说话。",
      hero_sub: "专为新加坡中小企业与顶尖高校学子打造的轻量级微实习平台。企业免费发布 2~4 小时真实业务微任务，学生用实际交付成果证明实力，跳过虚假简历，直接开启深度沟通。",
      motto_text: "“搞定真实任务。赢得企业赏识。开启深度对话。”",

      pain_sme_who: "致新加坡中小企业与创始人",
      pain_sme_title: "你是否已经被 GPT 生成的假简历烦透了？",
      pain_sme_desc: "发布一个岗位收到 200 份排版一致、辞藻华丽的 AI 润色简历；面试两轮招进来，却发现面对真实业务连基础查询都写不出。传统看纸面简历招人，是一场高成本的试错赌博。",

      pain_stu_who: "致 NUS、NTU 与 SMU 高校学子",
      pain_stu_title: "你是否被困在“没经验就找不到经验”的死循环？",
      pain_stu_desc: "你明明懂技术、能干活，但每个初级实习都生硬要求 1~2 段名企背景；认真投了 60 家公司，却在 4 秒内被 ATS 关键词过滤软件直接丢进垃圾桶。",

      flow_kicker: "零试错成本机制",
      flow_title: "MicroIntern SG 如何运作？",
      flow_desc: "一套专为新加坡本地商业与高校生态量身定制的双赢飞轮：",
      step1_head: "企业免费发布 2~4h 微挑战",
      step1_body: "企业发布手头具体的业务小痛点（如数据抓取清洗、流失漏斗分析、短视频策划）。<strong>完全免费，无需对每位提交者付费</strong>，企业全程零用工成本。",
      step2_head: "多位高校学子提交实战成果",
      step2_body: "来自本地名校的学子认领任务并提交结构化交付物。<strong>即使未被最终选上，学生也扎实获得了一份属于自己的商业实战作品集</strong>，绝不白费。",
      step3_head: "企业看成果，直联心仪人才",
      step3_body: "企业省去海选简历的时间，直接检阅几份真实交付物。发现出彩的候选人，主动约咖啡、深入面聊，按需发放实习意向或直接签约。",

      cases_kicker: "真实成果",
      cases_title: "两份代表性实战交付切片",
      tab1_btn: "PayBridge SEA（金融科技 UX）",
      tab2_btn: "OmniSupply AI（Python 数据自动化）",

      c1_sub: "跨境支付初创企业 • 丹戎巴葛",
      c1_task_lbl: "企业微痛点：",
      c1_task_val: "新加坡本地印尼籍企业用户在 Singpass 注册开户环节存在 42% 的断崖流失。",
      c1_sol_lbl: "学生实际交付成果（Darren，NUS 大一）：",
      c1_sol_val: "排查出 68% 的流失由企业实体类型不匹配引起，并设计了带即时 OCR 扫描预览的一键备用上传方案。",
      c1_out_auth: "最终结果：",
      c1_out_val: "创始人检阅了 4 份学生提交的方案，直接邀请 Darren 线下喝咖啡，并当场提供兼职产品分析师实习职位。",

      c2_sub: "供应链自动化 SaaS • 裕廊创新区",
      c2_task_lbl: "企业微痛点：",
      c2_task_val: "每天收到来自新马 40 家不同供应商的非标准 PDF 发票，需要批量解析为规范 JSON。",
      c2_sol_lbl: "学生实际交付成果（Siddharth，NTU 大一）：",
      c2_sol_val: "编写了模块化正则解析脚本，并附带 15 个单元测试精准捕获手写 GST 税额死角。",
      c2_out_auth: "最终结果：",
      c2_out_val: "CTO 检阅提交后直接保留可用脚本，并向 Siddharth 发出了下学期的正式数据工程实习合同。",

      join_kicker: "首期先锋入驻",
      join_title: "加入 MicroIntern SG 试点计划",
      join_sub: "首期仅开放 30 家新加坡中小企业与 100 位来自 NUS / NTU / SMU 的高潜学生名额。",
      role_sme: "我是中小企业雇主（免费发布微任务）",
      role_stu: "我是高校在校学生（领取实战微任务）",
      btn_submit: "抢先锁定试点先锋名额 →",
      res_badge: "试点入驻确认",
      footer_sub: "新加坡工作量证明微实习试点平台"
    }
  };

  let currentLang = 'en';

  // Language Switcher
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  const langLabel = document.getElementById('current-lang-label');

  function updatePageLanguage(lang) {
    currentLang = lang;
    document.body.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);

    const dict = i18n[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    langLabel.textContent = lang === 'en' ? '中文 (ZH)' : 'English (EN)';
    localStorage.setItem('microintern_lang_condensed', lang);
  }

  const savedLang = localStorage.getItem('microintern_lang_condensed') || 'en';
  if (savedLang === 'zh') {
    updatePageLanguage('zh');
  }

  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'zh' : 'en';
    updatePageLanguage(nextLang);
    showToast(nextLang === 'en' ? 'Switched to English' : '已切换为中文模式');
  });

  // Case Tabs
  const caseTabs = document.querySelectorAll('.case-tab-btn');
  const caseBoxes = document.querySelectorAll('.case-box');

  caseTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case');

      caseTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      caseBoxes.forEach(box => box.classList.remove('active'));
      const target = document.getElementById(`${caseId}-box`);
      if (target) {
        target.classList.add('active');
      }
    });
  });

  // Join Form
  const joinForm = document.getElementById('join-form');
  const resultBox = document.getElementById('join-result');
  const serialEl = document.getElementById('res-serial');
  const msgEl = document.getElementById('res-msg');

  joinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const role = document.querySelector('input[name="userRole"]:checked').value;
    const name = document.getElementById('userName').value.trim();
    if (!name) return;

    const rand = Math.floor(100 + Math.random() * 900);
    const prefix = role === 'sme' ? 'SG-SME' : 'SG-TALENT';
    const serial = `#${prefix}-${rand}`;

    serialEl.textContent = serial;
    if (currentLang === 'zh') {
      msgEl.textContent = `感谢入驻！我们将在 24 小时内通过 WhatsApp/邮箱联系您，协助拆解首个任务。`;
    } else {
      msgEl.textContent = `Thank you! We will reach out via WhatsApp/Email to help scope your first task.`;
    }

    resultBox.style.display = 'block';
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    showToast(currentLang === 'zh' ? `席位已确认：${serial}` : `Pilot Access Confirmed: ${serial}`);
  });

  // Toast
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  let toastTimer = null;

  function showToast(msg) {
    if (toastTimer) clearTimeout(toastTimer);
    toastText.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  }

});
