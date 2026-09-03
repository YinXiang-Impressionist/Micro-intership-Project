/**
 * MicroIntern SG — 一份真实的微实习，胜过千言万语的简历
 * "Experience the Real Workflow. Prove Real Competence. Start the Conversation."
 */

document.addEventListener('DOMContentLoaded', () => {

  const i18n = {
    en: {
      nav_brand_sub: "Singapore",
      nav_how: "How It Works",
      nav_cases: "Micro-Internships",
      nav_join_link: "Join Pilot",
      nav_cta: "Join Pilot",

      hero_pill: "SINGAPORE MICRO-INTERNSHIP NETWORK",
      hero_line1: "The resume is dead.",
      hero_line2: "Complete a real micro-internship.",
      hero_sub: "A micro-internship is not just a single isolated task. Singapore SMEs post lightweight internships covering actual daily workflows — allowing students to experience real job routines, and enabling employers to evaluate true on-the-job competence.",
      motto_text: "\"Experience the Real Workflow. Prove Real Competence. Start the Conversation.\"",

      pain_sme_who: "FOR SINGAPORE SMES & FOUNDERS",
      pain_sme_title: "A resume proves nothing. A micro-internship reveals everything.",
      pain_sme_desc: "Interviews and AI-written resumes fail to show how a candidate navigates your daily workflows. Traditional hiring is an expensive gamble. With MicroIntern SG, you post a real micro-internship covering your routine processes — evaluating practical execution without upfront payroll risk.",

      pain_stu_who: "FOR NUS, NTU & SMU STUDENTS",
      pain_stu_title: "Don't be a cold applicant. Complete a verified micro-internship.",
      pain_stu_desc: "Job portals demand prior experience while keeping daily work a mystery. Take on a company's genuine micro-internship, immerse yourself in their actual business routines, and produce verified work that speaks louder than any resume.",

      flow_kicker: "THE REALITY ENGINE",
      flow_title: "How a Micro-Internship Works",
      flow_desc: "A structured, mutually beneficial workflow designed for Singapore's local business and university ecosystem.",
      step1_head: "SME Posts a Micro-Internship (Free)",
      step1_body: "The company packages their actual daily workflow into a focused micro-internship (covering business context, execution, and review). <strong>Free to post. Zero payroll obligation.</strong> You do not pay each applicant.",
      step2_head: "Students Walk Through Real Workflows",
      step2_body: "Students take on the micro-internship, experiencing the company's real standards and operational rhythms across multiple steps. Every deliverable becomes tangible proof in their portfolio.",
      step3_head: "Evaluate Workflow Fit & Connect",
      step3_body: "Employers evaluate how candidates perform across the actual routine processes. When there is mutual alignment, both sides connect for a coffee chat or formalize an internship offer.",

      cases_kicker: "PROVEN TRACK RECORD",
      cases_title: "Two Real Micro-Internship Samples",
      tab1_btn: "PayBridge SEA (Product Operations)",
      tab2_btn: "OmniSupply AI (Data Engineering)",
      
      c1_sub: "Cross-border payments SME • Tanjong Pagar",
      c1_duration_tag: "Micro-Internship",
      c1_task_lbl: "Daily Workflow Routine:",
      c1_task_val: "Walk through the company's weekly KYC operations: review raw session drop-off logs, analyze Singpass business sync errors, and draft product improvements.",
      c1_sol_lbl: "Student Execution (Darren, NUS Y1):",
      c1_sol_val: "Completed the full operational loop: diagnosed entity mismatch patterns and delivered low-code fallback upload mockups with OCR preview.",
      c1_out_auth: "Mutual Fit Outcome:",
      c1_out_val: "Darren experienced real fintech product routines; the COO saw he could handle daily analytics independently. Offered a part-time Product Analyst role within 48 hours.",

      c2_sub: "Supply chain automation • Jurong Innovation District",
      c2_duration_tag: "Micro-Internship",
      c2_task_lbl: "Daily Workflow Routine:",
      c2_task_val: "Ingest non-standard supplier invoice PDFs, build extraction scripts following team standards, and write automated tests for edge-case billing variations.",
      c2_sol_lbl: "Student Execution (Siddharth, NTU Y1):",
      c2_sol_val: "Handled the end-to-end data pipeline: clean Python code, regex rule architecture, and 15 rigorous unit tests adhering to internal git conventions.",
      c2_out_auth: "Mutual Fit Outcome:",
      c2_out_val: "Siddharth verified that he thrived in the engineering stack; the CTO confirmed he was sprint-ready from day one. Formal semester internship contract issued.",

      join_kicker: "PILOT COHORT 01",
      join_title: "Join the MicroIntern SG Pilot",
      join_sub: "Connecting 30 Singapore SMEs offering authentic micro-internships with 100 motivated NUS / NTU / SMU students.",
      role_sme: "I am an SME / Employer (Post a Micro-Internship Free)",
      role_stu: "I am a Student (Take on a Micro-Internship)",
      btn_submit: "Claim Your Pilot Access →",
      res_badge: "PILOT ACCESS CONFIRMED",
      footer_sub: "Singapore's Proof-of-Work Micro-Internship Platform"
    },

    zh: {
      nav_brand_sub: "新加坡",
      nav_how: "运作机制",
      nav_cases: "微实习样本",
      nav_join_link: "入驻试点",
      nav_cta: "入驻试点",

      hero_pill: "新加坡微实习（MICRO-INTERNSHIP）试点网络",
      hero_line1: "传统简历已经失效。",
      hero_line2: "来完成一份真实的微实习。",
      hero_sub: "微实习不只是孤立的单一打杂任务。新加坡中小企业将真实的日常工作全流程提炼为一份份轻量微实习——让学生完整体验实际工作流程与团队节奏，让企业多维度看清候选人面对日常业务的真实胜任力。",
      motto_text: "“体验真实工作全貌。证明日常业务素养。开启深度合作。”",

      pain_sme_who: "致新加坡中小企业与雇主",
      pain_sme_title: "一份简历证明不了任何事，但一份微实习可以。",
      pain_sme_desc: "面试聊得天花乱坠、AI 润色的简历天衣无缝，但根本看不出候选人面对真实工作流程的执行力。在 MicroIntern SG，企业免费发布一份微实习，涵盖团队日常工作的核心流程，无需背负长期用工包袱，直接看清候选人在真实业务各环节中的真实水准。",

      pain_stu_who: "致 NUS、NTU 与 SMU 高校学子",
      pain_stu_title: "不要做无休止的海投分母，来经历一次真实的微实习。",
      pain_stu_desc: "招聘网站要求的“名企经验”是一道冰冷的门槛，而日常工作内容对你而言更像一个盲盒。认领一份企业的真实微实习，完整经历实际业务流程，做出一套扎实的成果——这远比任何美化的纸面简历都有说服力。",

      flow_kicker: "真实业务飞轮",
      flow_title: "一份微实习如何运作？",
      flow_desc: "一套让企业与学生在真实业务流程中互相建立信任的双向机制：",
      step1_head: "企业发布一份微实习（完全免费）",
      step1_body: "企业将日常业务中的核心工作流程（从业务理解、方案构建到成果验证）整合为一份微实习。<strong>完全免费发布，无需向每位申请者付费</strong>，零用工门槛。",
      step2_head: "学生经历完整日常流程并交付",
      step2_body: "来自本地名校的学子认领微实习，亲历企业真实的工作标准与协同节奏。<strong>完成微实习的每一个步骤，都成为个人简历中极具含金量的实战证明</strong>。",
      step3_head: "全面评估流程契合度，直发 Offer",
      step3_body: "企业全方位检视学生在各个业务环节的表现与专业素养。双方确认彼此真正契合后，企业主动约线下喝咖啡面聊，发放正式实习 Offer。",

      cases_kicker: "真实样本",
      cases_title: "两份真实微实习档案",
      tab1_btn: "PayBridge SEA（产品运营微实习）",
      tab2_btn: "OmniSupply AI（数据工程微实习）",

      c1_sub: "跨境支付初创企业 • 丹戎巴葛",
      c1_duration_tag: "真实微实习",
      c1_task_lbl: "微实习涵盖流程：",
      c1_task_val: "完整经历产品运营闭环：从调阅上周用户开户流失日志 ➔ 拆解 Singpass 企业端校验错误 ➔ 输出兼顾合规与体验的低代码备用方案。",
      c1_sol_lbl: "学生实际执行表现（Darren，NUS 大一）：",
      c1_sol_val: "展现出对真实业务场景的高效理解力，不仅精准锁定了实体不匹配诱因，还输出了带即时 OCR 预览的原型草案。",
      c1_out_auth: "双向奔赴结果：",
      c1_out_val: "Darren 完整体验了金融科技产品运营的日常；COO 确认他具备独立处理业务流程的能力，48 小时内直接发放兼职产品分析师 Offer。",

      c2_sub: "供应链自动化 SaaS • 裕廊创新区",
      c2_duration_tag: "真实微实习",
      c2_task_lbl: "微实习涵盖流程：",
      c2_task_val: "完整走完数据管道开发流程：理解非标准供应商发票数据规范 ➔ 编写健壮正则提取管道 ➔ 编写内部标准单元测试覆盖边缘异常。",
      c2_sol_lbl: "学生实际执行表现（Siddharth，NTU 大一）：",
      c2_sol_val: "端到端完成数据工程全流程：代码干净优雅，测试覆盖全面，完全契合团队内部的工程交付标准与 Git 规范。",
      c2_out_auth: "双向奔赴结果：",
      c2_out_val: "Siddharth 提前熟悉了团队的技术栈与工作习惯，CTO 确认他能无缝跟进日常迭代，直接发放下学期正式实习合同。",

      join_kicker: "首期先锋入驻",
      join_title: "加入 MicroIntern SG 试点网络",
      join_sub: "连接 30 家提供真实微实习的新加坡中小企业，与 100 位渴望积累硬核实战经验的高校学子。",
      role_sme: "我是中小企业雇主（免费发布微实习）",
      role_stu: "我是高校在校学生（认领真实微实习）",
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
    localStorage.setItem('microintern_lang_v7', lang);
  }

  const savedLang = localStorage.getItem('microintern_lang_v7') || 'en';
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
      msgEl.textContent = `感谢入驻！我们将在 24 小时内通过 WhatsApp/邮箱联系您，协助设计并匹配首个微实习。`;
    } else {
      msgEl.textContent = `Thank you! We will reach out via WhatsApp/Email to help design and match your first micro-internship.`;
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
