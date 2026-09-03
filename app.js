/**
 * MicroIntern SG — 真实的微实习，看清真实的工作契合度
 * "Evaluate real workflows. Eliminate hiring guesswork."
 */

document.addEventListener('DOMContentLoaded', () => {

  const i18n = {
    en: {
      nav_brand_sub: "Singapore",
      nav_how: "How It Works",
      nav_cases: "Micro-Internships",
      nav_join_link: "Join Pilot",
      nav_cta: "Join Pilot",

      hero_pill: "SINGAPORE MICRO-INTERNSHIP PILOT",
      hero_line1: "A resume doesn't tell the whole story.",
      hero_line2: "Experience the real daily work.",
      hero_sub: "A pragmatic platform connecting Singapore SMEs with university talent. Experience a company's genuine daily work routine before making a long-term commitment.",
      motto_text: "\"Evaluate real workflows. Eliminate hiring guesswork.\"",

      pain_sme_who: "FOR SINGAPORE SMES & FOUNDERS",
      pain_sme_title: "What is your biggest risk when hiring an intern?",
      pain_sme_desc: "Candidates often interview well, but you only discover whether they can handle your daily workflow after weeks of onboarding. MicroIntern SG lets you post a genuine daily routine workflow upfront. Review actual execution before committing your team's time.",

      pain_stu_who: "FOR NUS, NTU & SMU STUDENTS",
      pain_stu_title: "Stuck behind the \"prior experience\" barrier?",
      pain_stu_desc: "Entry-level postings demand prior internships, and standard applications rarely give you a chance to demonstrate your practical ability. Complete a company's real micro-internship, deliver tangible work, and put your capabilities directly in front of the team.",

      flow_kicker: "THE PRACTICAL ENGINE",
      flow_title: "How a Micro-Internship Works",
      flow_desc: "A realistic two-way evaluation built for Singapore's local business environment.",
      step1_head: "SME Posts a Routine Micro-Internship (Free)",
      step1_body: "Package a standard routine workflow (e.g. data cleaning, onboarding funnel analysis, or content drafting) into a short micro-internship. <strong>Free to post. Zero upfront payroll commitment.</strong>",
      step2_head: "Students Walk Through the Real Workflow",
      step2_body: "Students take on the micro-internship, experiencing the company's actual business rhythm and standards. Completed deliverables become verified work samples in their portfolio.",
      step3_head: "Review Fit & Connect Directly",
      step3_body: "The employer sees who genuinely fits their day-to-day operations. When there is mutual alignment, both sides connect directly for coffee, a chat, or a formal internship offer.",

      cases_kicker: "PRAGMATIC PROOFS",
      cases_title: "Two Real Micro-Internship Examples",
      tab1_btn: "PayBridge SEA (Product Operations)",
      tab2_btn: "OmniSupply AI (Data Engineering)",
      
      c1_sub: "Cross-border payments SME • Tanjong Pagar",
      c1_duration_tag: "Micro-Internship",
      c1_task_lbl: "Routine Workflow Process:",
      c1_task_val: "Review weekly onboarding event logs, identify friction points for Indonesian business users during Singpass verification, and propose practical low-code improvements.",
      c1_sol_lbl: "Student Execution (Darren, NUS Y1):",
      c1_sol_val: "Walked through the complete operational logic: diagnosed corporate entity mismatch errors and delivered clean fallback upload mockups with OCR preview.",
      c1_out_auth: "Mutual Fit Outcome:",
      c1_out_val: "Darren experienced real fintech operations; the COO confirmed he could handle routine analytics independently. Hired as a part-time Product Analyst.",

      c2_sub: "Supply chain automation • Jurong Innovation District",
      c2_duration_tag: "Micro-Internship",
      c2_task_lbl: "Routine Workflow Process:",
      c2_task_val: "Maintain the daily data pipeline: review non-standard supplier invoice formats, build extraction regex scripts, and write unit tests for edge-case variations.",
      c2_sol_lbl: "Student Execution (Siddharth, NTU Y1):",
      c2_sol_val: "Completed the end-to-end task according to team coding guidelines, writing clean Python code and 15 tests covering edge-case invoice structures.",
      c2_out_auth: "Mutual Fit Outcome:",
      c2_out_val: "Siddharth confirmed he enjoyed the team's engineering stack, while the CTO verified he could contribute to regular sprint cycles from day one. Formal internship offered.",

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
      nav_cases: "微实习档案",
      nav_join_link: "入驻试点",
      nav_cta: "入驻试点",

      hero_pill: "新加坡微实习（MICRO-INTERNSHIP）试点网络",
      hero_line1: "一份纸面简历，说明不了真实的工作能力。",
      hero_line2: "亲身跑一次真实日常工作，看清真正的适配度。",
      hero_sub: "专为新加坡中小企业与顶尖学子打造的务实微实习平台。企业开放日常业务流程，学生积累真实项目背书。在正式做出雇佣承诺之前，先通过真实的日常业务互相验证。",
      motto_text: "“不靠面试盲猜，用日常流程的真实表现说话。”",

      pain_sme_who: "致新加坡中小企业雇主",
      pain_sme_title: "你招实习生，最怕的是什么？",
      pain_sme_desc: "候选人面试对答如流、简历写得光鲜亮丽，但带教一个月才发现对方连团队日常业务都无法独立上手。传统的招聘往往是一场单向试错。在 MicroIntern SG，企业免费发布一份日常微实习，先看候选人处理你日常业务流程的实际水准，合适再进一步沟通。",

      pain_stu_who: "致 NUS、NTU 与 SMU 高校学子",
      pain_stu_title: "想找实习，但总卡在“缺乏经验”？",
      pain_stu_desc: "大一大二求职最大的困境，就是几乎所有岗位都生硬要求“过往名企经验”，精心修改的简历往往在系统初筛就被拦截。认领一份真实企业的微实习，走完一套真实的日常工作流程，直接把扎实的交付成果交到业务负责人手中，靠实操能力争取一次平等的交流机会。",

      flow_kicker: "务实双赢闭环",
      flow_title: "一份微实习如何运作？",
      flow_desc: "一套让企业与学生在真实业务中建立信任的务实机制：",
      step1_head: "企业发布一份日常微实习（免费）",
      step1_body: "将团队日常业务中的一个真实流程（如数据清洗归档、用户开户漏斗排查、内容起草）梳理为一份微实习。<strong>完全免费发布，无需对每位申请者付费</strong>，零用工负担。",
      step2_head: "学生经历真实日常流程并交付",
      step2_body: "学生沉浸式经历这家企业的实际业务节奏与交付标准。按规范完成的每份成果，都是个人履历中具有说服力的实战背书。",
      step3_head: "检验真实契合度，开启深入沟通",
      step3_body: "企业清晰看清谁能真正融入团队的日常业务，学生也确认了自己是否喜欢这份工作。双方契合，直接约线下喝咖啡、聊合作或发正式实习。",

      cases_kicker: "实操案例",
      cases_title: "两份真实微实习样本",
      tab1_btn: "PayBridge SEA（产品运营微实习）",
      tab2_btn: "OmniSupply AI（数据工程微实习）",

      c1_sub: "跨境支付初创企业 • 丹戎巴葛",
      c1_duration_tag: "真实微实习",
      c1_task_lbl: "微实习涵盖流程：",
      c1_task_val: "梳理上周真实用户开户日志，排查印尼籍企业客户在 Singpass 验证中的高频报错环节，并输出兼顾合规与体验的低代码备选上传方案。",
      c1_sol_lbl: "学生实际执行表现（Darren，NUS 大一）：",
      c1_sol_val: "逻辑严密、迅速理清了企业实体校验规则，不仅找出了流失诱因，还绘制了带有即时 OCR 扫描预览的交互线框图。",
      c1_out_auth: "双方适配结果：",
      c1_out_val: "Darren 确认了自己对金融科技产品日常分析很感兴趣；COO 确认他具备独立处理日常业务的能力，当周录用为兼职产品分析师。",

      c2_sub: "供应链自动化 SaaS • 裕廊创新区",
      c2_duration_tag: "真实微实习",
      c2_task_lbl: "微实习涵盖流程：",
      c2_task_val: "维护数据接入管道：阅读非规范发票数据样例，编写模块化提取规则，并按照团队工程规范编写覆盖边缘异常的单元测试。",
      c2_sol_lbl: "学生实际执行表现（Siddharth，NTU 大一）：",
      c2_sol_val: "代码规范严格遵守团队的 PEP8 与 Git 提交习惯，编写了 15 个异常用例测试，完全达到团队内部的日常工程交付标准。",
      c2_out_auth: "双方适配结果：",
      c2_out_val: "Siddharth 熟悉了团队的技术栈，CTO 确认他能无缝跟进日常迭代节奏，直接发放下学期的正式实习合同。",

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
    localStorage.setItem('microintern_lang_v8', lang);
  }

  const savedLang = localStorage.getItem('microintern_lang_v8') || 'en';
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
