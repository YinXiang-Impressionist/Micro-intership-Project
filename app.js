/**
 * MicroIntern SG — 体验企业日常工作，检验真实胜任力
 * "Experience the Real Work. Prove the Daily Fit. Start the Conversation."
 */

document.addEventListener('DOMContentLoaded', () => {

  const i18n = {
    en: {
      nav_brand_sub: "Singapore",
      nav_how: "How It Works",
      nav_cases: "Routine Tasks",
      nav_join_link: "Join Pilot",
      nav_cta: "Join Pilot",

      hero_pill: "SINGAPORE MICRO-INTERNSHIP PILOT",
      hero_line1: "The resume is dead.",
      hero_line2: "Experience the real daily work.",
      hero_sub: "A lightweight platform connecting Singapore SMEs and university students through 2–4 hour slices of actual day-to-day work. Students experience real company workflows; employers see who truly fits the job.",
      motto_text: "\"Experience the Real Work. Prove the Daily Fit. Start the Conversation.\"",

      pain_sme_who: "FOR SINGAPORE SMES & FOUNDERS",
      pain_sme_title: "Can your candidates actually do the daily work?",
      pain_sme_desc: "Interviews and AI-polished resumes tell you nothing about daily execution. Traditional hiring is an expensive gamble — you only find out if someone can handle your routine work weeks after they start.",

      pain_stu_who: "FOR NUS, NTU & SMU STUDENTS",
      pain_stu_title: "Want to know what the job is actually like?",
      pain_stu_desc: "Job descriptions are vague, and portals demand \"prior experience\" just to get in the door. You deserve to experience a company's genuine daily work before committing, and prove your ability through real execution.",

      flow_kicker: "THE DAILY-FIT ENGINE",
      flow_title: "How MicroIntern SG Works",
      flow_desc: "A realistic two-way preview built for Singapore's SMEs and university talent.",
      step1_head: "SME Shares a 2–4h Daily Task (Free)",
      step1_body: "Company posts a representative sample of its actual daily routine (e.g. data ingestion, customer funnel triage, content drafting). <strong>Free to post; zero payroll obligation.</strong> You don't pay each applicant.",
      step2_head: "Students Experience the Real Work",
      step2_body: "Students take on the task, experiencing what working at the company genuinely feels like. Every completed deliverable becomes verified proof in their portfolio.",
      step3_head: "Evaluate Daily Fit & Connect",
      step3_body: "The employer sees who has the natural instinct and execution skills for their routine operations. Both sides connect for coffee or an internship offer knowing there is a genuine mutual fit.",

      cases_kicker: "ROUTINE SAMPLES",
      cases_title: "Two Real Daily Work Tasks",
      tab1_btn: "PayBridge SEA (Fintech Operations)",
      tab2_btn: "OmniSupply AI (Data Automation)",
      
      c1_sub: "Cross-border payments SME • Tanjong Pagar",
      c1_duration_tag: "3.5h Daily Task",
      c1_task_lbl: "Routine Work Sample:",
      c1_task_val: "Analyze weekly onboarding event logs and identify where Indonesian business users drop off during Singpass registration.",
      c1_sol_lbl: "Student Execution (Darren, NUS Y1):",
      c1_sol_val: "Demonstrated clear understanding of the company's daily KYC workflow; recommended a fallback document upload flow.",
      c1_out_auth: "Mutual Fit Outcome:",
      c1_out_val: "Darren loved the practical problem; the founder immediately saw he could handle day-to-day analytics without hand-holding. Joined as a part-time Product Analyst.",

      c2_sub: "Supply chain automation • Jurong Innovation District",
      c2_duration_tag: "4.0h Daily Task",
      c2_task_lbl: "Routine Work Sample:",
      c2_task_val: "Maintain the daily ingestion pipeline: clean and parse irregular hardware invoice PDFs into structured company JSON.",
      c2_sol_lbl: "Student Execution (Siddharth, NTU Y1):",
      c2_sol_val: "Wrote robust Python parser and 15 tests mirroring the team's internal code quality standards.",
      c2_out_auth: "Mutual Fit Outcome:",
      c2_out_val: "Siddharth experienced the actual engineering stack, while the CTO confirmed he was ready to step into daily sprint cycles from day one.",

      join_kicker: "PILOT COHORT 01",
      join_title: "Join the MicroIntern SG Pilot",
      join_sub: "Connecting 30 Singapore SMEs opening their daily work with 100 motivated NUS / NTU / SMU students.",
      role_sme: "I am an SME / Employer (Share a Daily Task Free)",
      role_stu: "I am a Student (Experience Daily Tasks)",
      btn_submit: "Claim Your Pilot Access →",
      res_badge: "PILOT VANGUARD CONFIRMED",
      footer_sub: "Singapore's Daily-Work Micro-Internship Pilot"
    },

    zh: {
      nav_brand_sub: "新加坡",
      nav_how: "运作机制",
      nav_cases: "日常工作样本",
      nav_join_link: "入驻试点",
      nav_cta: "入驻试点",

      hero_pill: "新加坡微实习（MICRO-INTERNSHIP）试点网络",
      hero_line1: "传统简历已经失效。",
      hero_line2: "亲身体验企业日常工作。",
      hero_sub: "专为新加坡中小企业与顶尖学子打造的微实习平台。企业开放 2~4 小时的日常真实工作切片，让学生沉浸式体验企业日常，让企业直观检验学生是否真正适合日常岗位，双向真实奔赴。",
      motto_text: "“体验真实工作。检验日常胜任。开启深度对话。”",

      pain_sme_who: "致新加坡中小企业与创始人",
      pain_sme_title: "你的候选人，真能做好日常工作吗？",
      pain_sme_desc: "面试聊得天花乱坠、AI 润色的简历天衣无缝，但根本看不出候选人面对日常工作的真实水准。传统招人是一场昂贵的试错赌博——往往入职几周后才发现对方连最基本的日常业务都做不来。",

      pain_stu_who: "致 NUS、NTU 与 SMU 高校学子",
      pain_stu_title: "想提前知道一家企业的日常工作究竟是什么样？",
      pain_stu_desc: "招聘网站上的岗位描述空洞虚浮，还动辄要求过往名企经验。在正式入职前，你应该有机会亲身体验这家公司的真实工作日常，并通过具体的实操成果直接证明自己的胜任力。",

      flow_kicker: "双向适配机制",
      flow_title: "MicroIntern SG 如何运作？",
      flow_desc: "一套让企业与学生互相了解真实工作日常的双向体验飞轮：",
      step1_head: "企业开放 2~4h 日常工作切片（免费）",
      step1_body: "企业拿出日常业务中的典型工作切片（如真实数据清洗录入、日常用户体验排查、日常营销内容起草）。<strong>完全免费开放，无需向每位申请者付费</strong>，零用工负担。",
      step2_head: "学生亲身体验日常工作实操",
      step2_body: "来自本地名校的学子认领任务，沉浸式体验这家企业的真实工作节奏与业务要求。<strong>即使未进入最终面试，学生也扎实获得了一份真实的商业实操作品集</strong>。",
      step3_head: "检验日常契合度，开启深度合作",
      step3_body: "企业通过实际交付物，直观看到谁天然契合团队的日常工作习惯与执行标准。双方借此直接开启线下咖啡面聊，根据意向发放正式实习 Offer。",

      cases_kicker: "日常工作样本",
      cases_title: "两份真实的日常工作切片",
      tab1_btn: "PayBridge SEA（金融科技日常运营）",
      tab2_btn: "OmniSupply AI（日常数据自动化）",

      c1_sub: "跨境支付初创企业 • 丹戎巴葛",
      c1_duration_tag: "3.5 小时日常工作切片",
      c1_task_lbl: "日常工作切片：",
      c1_task_val: "团队日常运营任务：分析上周用户入驻日志，排查印尼籍企业用户在 Singpass 商业开户流程中的卡点。",
      c1_sol_lbl: "学生实际执行表现（Darren，NUS 大一）：",
      c1_sol_val: "迅速理解了团队日常 KYC 业务逻辑，排查出企业实体不匹配问题，并给出了备用上传通道的低代码改进方案。",
      c1_out_auth: "双向契合结果：",
      c1_out_val: "Darren 确认了自己对金融科技日常分析很感兴趣；创始人确认他能独立处理日常报表与分析，当即录用为兼职产品分析师。",

      c2_sub: "供应链自动化 SaaS • 裕廊创新区",
      c2_duration_tag: "4.0 小时日常工作切片",
      c2_task_lbl: "日常工作切片：",
      c2_task_val: "工程团队日常维护：维护数据管道，将新入驻供应商的非规范发票批量清洗解析为内部规范 JSON。",
      c2_sol_lbl: "学生实际执行表现（Siddharth，NTU 大一）：",
      c2_sol_val: "编写的 Python 正则脚本完全贴合团队内部的代码规范与测试要求，并自带 15 个异常分支测试。",
      c2_out_auth: "双向契合结果：",
      c2_out_val: "Siddharth 提前熟悉了团队的工程技术栈，CTO 也确认他入职第一天就能无缝跟上日常 Sprint 节奏，直接发放了下学期正式实习合同。",

      join_kicker: "首期先锋入驻",
      join_title: "加入 MicroIntern SG 试点网络",
      join_sub: "连接 30 家开放日常真实工作的新加坡中小企业，与 100 位渴望实战体验的高校学子。",
      role_sme: "我是中小企业雇主（免费开放日常工作切片）",
      role_stu: "我是高校在校学生（亲身体验企业日常工作）",
      btn_submit: "抢先锁定试点先锋名额 →",
      res_badge: "试点入驻确认",
      footer_sub: "新加坡日常工作实战微实习试点网络"
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
    localStorage.setItem('microintern_lang_daily_fit', lang);
  }

  const savedLang = localStorage.getItem('microintern_lang_daily_fit') || 'en';
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
      msgEl.textContent = `感谢入驻！我们将在 24 小时内通过 WhatsApp/邮箱联系您，协助挑选首个日常工作切片。`;
    } else {
      msgEl.textContent = `Thank you! We will reach out via WhatsApp/Email to help select your first daily routine task.`;
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
