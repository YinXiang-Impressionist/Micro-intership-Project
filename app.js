/**
 * MicroIntern SG — 现代精简版双语驱动引擎
 * "不靠面试盲猜，用日常流程的真实表现说话。"
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Dual Language Dictionary (100% Zero-Residue Translations)
  // =========================================================================

  const i18n = {
    zh: {
      // Navbar & Announcement
      announcement_badge: "先行者第一期",
      announcement_text: "现已开放新加坡中小企业雇主与 NUS / NTU / SMU 高校学子入驻申请。",
      announcement_cta: "申领先锋通行证 →",
      nav_manifesto: "为什么选择微实习",
      nav_audiences: "企业与学生端",
      nav_vault: "交付案例台",
      nav_comparison: "对比分析",
      nav_cta: "加入先锋计划",

      // Hero
      hero_pill: "新加坡工作量证明（PROOF-OF-WORK）微实习平台",
      hero_h1_line1: "传统纸面简历已经失效。",
      hero_h1_line2: "用交付说话，让 Offer 敲门。",
      hero_subdeck: "告别概率极低的简历彩票。新加坡本地中小企业发布涵盖日常工作真实流程的微实习，顶尖高校学子直接以实际成果证明胜任力。告别关键词虚标，让踏实的成果赢得企业的赏识与录用。",
      stamp_motto: "不靠面试盲猜，用日常流程的真实表现说话。",
      cta_sme_btn: "探索企业端与学生端价值 ↓",
      cta_inspect_btn: "检阅 2 个真实微实习案例 ☕",

      // Stats
      stat_1: "传统招聘中被 AI 模板淹没的无效简历",
      stat_2: "完成一次日常微实习的平均专注时长",
      stat_3: "高质量成果交付者获正式实习意向或深度面聊",
      stat_4: "首期入驻中小企业的发布与对接成本",

      // Manifesto
      manifesto_badge: "核心认知",
      manifesto_title: "招聘本该是对日常胜任力的双向验证。<br>现实中却成了 AI 润色与纸面简历的军备竞赛。",
      manifesto_subtitle: "企业看纸面简历猜人，入职带教一个月才发现候选人根本适应不了日常工作；学生被生硬的“过往经验门槛”拦截，连展示实操手艺的机会都没有。",
      pillar_1_title: "一份完整的日常微实习",
      pillar_1_desc: "不搞单一机械的打杂 Task。企业将团队日常业务的真实工作全流程（从业务场景理解、方案构建到成果验证）整合为一份微实习。",
      pillar_2_title: "零试错成本的双赢模式",
      pillar_2_desc: "企业免费发布，无需对每位申请者付费；多位学生完整经历实际日常流程，即使未被最终录用，也扎实收获了一份真实的商业实战作品集。",
      pillar_3_title: "看清日常契合，直联人才",
      pillar_3_desc: "企业通过交付成果，清晰评估谁能无缝融入团队日常节奏。双方互相认可，企业直接约喝咖啡、线下面聊或发放正式实习 Offer。",

      // Audiences
      audiences_badge: "双端价值",
      audiences_title: "为新加坡 SME 与顶尖高校学子量身设计",
      audiences_subtitle: "不靠虚浮的概念。在正式做出雇佣承诺之前，先通过真实的日常业务互相验证。",
      sme_tag: "致新加坡中小企业雇主",
      sme_title: "你招实习生，最怕的是什么？",
      sme_lead: "候选人面试对答如流、简历写得光鲜亮丽，但带教一个月才发现对方连团队日常业务都无法独立上手。传统的招聘往往是一场单向试错。",
      sme_b1_title: "发布日常微实习（完全免费）：",
      sme_b1_desc: "梳理团队日常正在做的一段业务流程，0 成本发布，无需对每位申请者付费。",
      sme_b2_title: "多维度检验日常胜任力：",
      sme_b2_desc: "直接对比多位学生提交的实际交付物，谁具备真本事、谁契合日常工作习惯，一目了然。",
      sme_b3_title: "确认合适再聊，零试错包袱：",
      sme_b3_desc: "挑出最出彩的候选人发起咖啡邀约，直接洽谈兼职或长期正式实习。",
      sme_cta: "免费发布日常微实习 →",

      stu_tag: "致 NUS、NTU 与 SMU 高校学子",
      stu_title: "想找实习，但总卡在“缺乏经验”？",
      stu_lead: "大一大二求职最大的困境，就是几乎所有岗位都要求“过往实习经验”，精心修改的简历往往在系统初筛就被拦截，根本没有机会证明实操能力。",
      stu_b1_title: "亲历企业日常工作的完整流程：",
      stu_b1_desc: "提前沉浸式了解真实企业的日常业务节奏与工作要求，告别盲盒猜岗位。",
      stu_b2_title: "成果直达负责人案头：",
      stu_b2_desc: "跳过冰冷的算法简历初筛，靠扎实的代码与分析成果直接让创始人或业务主管看到。",
      stu_b3_title: "稳赚不赔的实战履历：",
      stu_b3_desc: "即便未获最终 Offer，也扎实收获了一份有真实业务依托的商业级作品集背书。",
      stu_cta: "认领真实微实习 →",

      // Vault
      vault_badge: "实战样本",
      vault_title: "两份真实的微实习档案",
      vault_subtitle: "检阅学生如何在真实日常业务流程中证明实力，并赢得企业的深度合作意向：",
      tab_1: "PayBridge SEA（产品运营微实习）",
      tab_2: "OmniSupply AI（数据工程微实习）",
      c1_loc: "跨境支付初创企业 • 丹戎巴葛",
      lbl_workflow: "微实习涵盖的日常流程：",
      c1_flow: "梳理上周真实用户开户日志，排查印尼籍企业客户在 Singpass 商业认证中的高频报错断点，并输出兼顾合规与体验的低代码备选方案。",
      lbl_execution: "学生实际执行表现：",
      c1_exec: "逻辑清晰、迅速理清了企业实体校验逻辑。排查出实体不匹配死角，并绘制了带即时 OCR 扫描预览的交互原型草案。",
      c1_out_title: "双方适配结果：",
      c1_out_desc: "Darren 确认了自己对金融科技产品日常分析很感兴趣；COO 确认他具备独立处理日常业务的能力，当周录用为兼职产品分析师。",

      c2_loc: "供应链自动化 SaaS • 裕廊创新区",
      c2_flow: "维护数据接入管道：阅读非规范发票数据样例，编写模块化提取规则，并按照团队工程规范编写覆盖边缘异常的单元测试。",
      c2_exec: "代码规范严格遵守团队的 PEP8 与 Git 提交习惯，编写了 15 个异常用例测试，完全达到团队内部的日常工程交付标准。",
      c2_out_title: "双方适配结果：",
      c2_out_desc: "Siddharth 熟悉了团队的技术栈，CTO 确认他能无缝跟进日常迭代节奏，直接发放下学期的正式实习合同。",

      // Comparison Table
      comp_badge: "深度对比",
      comp_title: "传统纸面招聘 vs MicroIntern SG 真实微实习",
      th_dimension: "对比维度",
      th_trad: "传统纸面招聘",
      th_micro: "MicroIntern SG 真实微实习",
      r1_dim: "考察凭据",
      r1_trad: "AI 润色的 PDF 简历与自我包装",
      r1_micro: "日常真实业务流程中的可检验交付成果",
      r2_dim: "企业成本",
      r2_trad: "初筛数百份假简历，带教数周才知不合格",
      r2_micro: "0 成本发布，签约前先看实际实操水平",
      r3_dim: "学生门槛",
      r3_trad: "硬性卡“名企过往经历”，初筛直接过滤",
      r3_micro: "无简历歧视，凭真实手艺直接直达负责人",
      r4_dim: "双方确定性",
      r4_trad: "单向盲盒赌博，入职后容易双向失望",
      r4_micro: "通过真实日常流程互相验证，契合再发 Offer",

      // Vanguard Form
      vanguard_badge: "首期先锋入驻",
      vanguard_title: "加入 MicroIntern SG 试点网络",
      vanguard_subtitle: "首期仅连接 30 家开放日常真实微实习的新加坡中小企业，与 100 位渴望实战经验的高校学子。",
      form_role_label: "我的加入身份：",
      role_sme: "我是中小企业雇主（免费发布微实习）",
      role_student: "我是高校在校学生（认领真实微实习）",
      form_name_label: "您的姓名或企业名称：",
      form_contact_label: "WhatsApp 或常用邮箱：",
      form_submit_btn: "抢先锁定试点先锋名额 →",
      next_step_title: "下一步行动指引：",
      next_step_desc: "我们已为您锁定首期名额！创始团队将在 24 小时内与您联络；您也可直接发送您的微实习岗位设想或简历作品至官方邮箱：",
      footer_rights: "新加坡工作量证明微实习试点平台"
    },

    en: {
      announcement_badge: "PILOT COHORT 01",
      announcement_text: "Now accepting Singapore SME employers & NUS / NTU / SMU students.",
      announcement_cta: "Claim Vanguard Pass →",
      nav_manifesto: "Why Micro-Internship",
      nav_audiences: "For SMEs & Students",
      nav_vault: "Proof Vault",
      nav_comparison: "Comparison",
      nav_cta: "Get Early Access",

      hero_pill: "SINGAPORE'S PROOF-OF-WORK INTERNSHIP PLATFORM",
      hero_h1_line1: "The Traditional Resume is Dead.",
      hero_h1_line2: "Deliver Proof. Win the Offer.",
      hero_subdeck: "Bypass the recruitment lottery. Singapore SMEs post real-world micro-internships covering routine workflows. Top university talent delivers tangible execution. No noise, no keyword gaming — just real work recognized and rewarded.",
      stamp_motto: "Evaluate real workflows. Eliminate hiring guesswork.",
      cta_sme_btn: "Explore For SMEs & Students ↓",
      cta_inspect_btn: "Inspect 2 Real Cases ☕",

      stat_1: "SME resumes filtered due to AI spam",
      stat_2: "Avg time to complete a routine Micro-Internship",
      stat_3: "Top deliverers offered formal interviews or offers",
      stat_4: "Upfront placement fee for pilot SMEs",

      manifesto_badge: "CORE PRINCIPLE",
      manifesto_title: "Hiring Was Meant to Be a Handshake Over Capability.<br>Instead, It Became an AI Resume Arms Race.",
      manifesto_subtitle: "Employers guess from resumes, only to find weeks later that candidates struggle with routine work. Students face rigid experience barriers, denied the chance to prove practical skills.",
      pillar_1_title: "A Complete Daily Micro-Internship",
      pillar_1_desc: "Not an isolated chore. Companies package actual day-to-day workflows (from business context to execution and review) into a focused micro-internship.",
      pillar_2_title: "Zero-Risk Mutual Flywheel",
      pillar_2_desc: "Companies post for free without paying each applicant. Students complete real business flows and gain verified portfolio pieces even if not selected.",
      pillar_3_title: "Verify Routine Fit, Connect Directly",
      pillar_3_desc: "Employers observe who naturally fits their daily operational standards. Both sides connect for coffee or formalize an internship offer.",

      audiences_badge: "DUAL VALUE",
      audiences_title: "Tailored for Singapore SMEs & Top University Talent",
      audiences_subtitle: "No artificial concepts. Test real mutual fit through actual daily workflows before making a hiring commitment.",
      sme_tag: "FOR SINGAPORE SMES & EMPLOYERS",
      sme_title: "What is your biggest risk when hiring an intern?",
      sme_lead: "Candidates often interview well, but you only discover whether they can handle your daily workflow after weeks of onboarding. Traditional hiring is an expensive gamble.",
      sme_b1_title: "Post Routine Micro-Internships (Free):",
      sme_b1_desc: "Package a standard routine workflow into a micro-internship with zero upfront cost or payroll commitment.",
      sme_b2_title: "Evaluate Real Routine Competence:",
      sme_b2_desc: "Directly compare actual deliverables from multiple students to see who truly excels at your daily work.",
      sme_b3_title: "Connect When Truly Aligned:",
      sme_b3_desc: "Reach out to top deliverers for coffee and formalize part-time or full semester internship offers.",
      sme_cta: "Post a Micro-Internship Free →",

      stu_tag: "FOR NUS, NTU & SMU STUDENTS",
      stu_title: "Stuck behind the \"prior experience\" barrier?",
      stu_lead: "Entry-level postings demand prior internships, and standard applications rarely give you a chance to demonstrate practical ability.",
      stu_b1_title: "Experience Real Daily Workflows:",
      stu_b1_desc: "Immerse yourself in authentic company routines and standards before committing to a full role.",
      stu_b2_title: "Work Directly on the Founder's Desk:",
      stu_b2_desc: "Skip automated resume screening bots and let solid code and analysis speak directly to decision-makers.",
      stu_b3_title: "A Real-World Portfolio Piece:",
      stu_b3_desc: "Every completed micro-internship becomes verified proof of competence in your career portfolio.",
      stu_cta: "Take on a Micro-Internship →",

      vault_badge: "PRACTICAL EVIDENCE",
      vault_title: "Two Real Micro-Internship Samples",
      vault_subtitle: "Inspect how students proved capability in real workflows and secured direct opportunities:",
      tab_1: "PayBridge SEA (Product Operations)",
      tab_2: "OmniSupply AI (Data Engineering)",
      c1_loc: "Cross-border payments SME • Tanjong Pagar",
      lbl_workflow: "Workflow Process Covered:",
      c1_flow: "Analyze weekly onboarding event logs, identify friction points for Indonesian business users during Singpass verification, and propose practical low-code improvements.",
      lbl_execution: "Student Execution Performance:",
      c1_exec: "Walked through the complete operational logic: diagnosed corporate entity mismatch errors and delivered clean fallback upload mockups with OCR preview.",
      c1_out_title: "Mutual Fit Outcome:",
      c1_out_desc: "Darren experienced real fintech operations; the COO confirmed he could handle routine analytics independently. Hired as a part-time Product Analyst.",

      c2_loc: "Supply chain automation • Jurong Innovation District",
      c2_flow: "Maintain the daily data pipeline: review non-standard supplier invoice formats, build extraction regex scripts, and write unit tests for edge-case variations.",
      c2_exec: "Completed the end-to-end task according to team coding guidelines, writing clean Python code and 15 tests covering edge-case invoice structures.",
      c2_out_title: "Mutual Fit Outcome:",
      c2_out_desc: "Siddharth confirmed he enjoyed the team's engineering stack, while the CTO verified he could contribute to regular sprint cycles from day one. Formal internship offered.",

      comp_badge: "COMPARISON",
      comp_title: "Traditional Resumes vs MicroIntern SG",
      th_dimension: "Dimension",
      th_trad: "Traditional Hiring",
      th_micro: "MicroIntern SG",
      r1_dim: "Evaluation Basis",
      r1_trad: "AI-polished PDF resumes & self-promotion",
      r1_micro: "Verifiable deliverables from real workflows",
      r2_dim: "Employer Cost",
      r2_trad: "Weeks of senior manager onboarding gamble",
      r2_micro: "Free to post; evaluate proof before committing",
      r3_dim: "Student Barrier",
      r3_trad: "Rigid 'prior experience' keyword filters",
      r3_micro: "Zero resume bias; pure proof of craft",
      r4_dim: "Mutual Alignment",
      r4_trad: "Blind hiring gamble leading to mutual regret",
      r4_micro: "Verified mutual fit before signing offers",

      vanguard_badge: "PILOT COHORT 01",
      vanguard_title: "Join the MicroIntern SG Pilot",
      vanguard_subtitle: "Connecting 30 Singapore SMEs offering authentic micro-internships with 100 motivated NUS / NTU / SMU students.",
      form_role_label: "I am joining as:",
      role_sme: "I am an SME Employer (Post a Micro-Internship Free)",
      role_student: "I am a University Student (Take on a Micro-Internship)",
      form_name_label: "Your Name or Company Name:",
      form_contact_label: "WhatsApp or Business Email:",
      form_submit_btn: "Claim Your Pilot Access Pass →",
      next_step_title: "Actionable Next Steps:",
      next_step_desc: "Your pilot spot is confirmed! Our founding team will reach out within 24 hours. You can also send your routine workflow needs directly to us:",
      footer_rights: "Singapore's Proof-of-Work Micro-Internship Platform"
    }
  };

  let currentLang = 'zh'; // Default to Chinese as seen in user's favorite screenshot

  // =========================================================================
  // 2. Language Switcher Logic
  // =========================================================================

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

    langLabel.textContent = lang === 'zh' ? 'English (EN)' : '中文 (ZH)';
    localStorage.setItem('microintern_modern_v2', lang);
  }

  // Restore stored language preference or default to Chinese
  const savedLang = localStorage.getItem('microintern_modern_v2') || 'zh';
  updatePageLanguage(savedLang);

  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'zh' ? 'en' : 'zh';
    updatePageLanguage(nextLang);
    showToast(nextLang === 'zh' ? '已切换为简体中文' : 'Switched to English');
  });

  // =========================================================================
  // 3. Case Tabs Navigation
  // =========================================================================

  const caseTabs = document.querySelectorAll('.case-tab-btn');
  const caseCards = document.querySelectorAll('.case-card');

  caseTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseTarget = btn.getAttribute('data-case');

      caseTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      caseCards.forEach(card => card.classList.remove('active'));
      const activeCard = document.getElementById(`${caseTarget}-card`);
      if (activeCard) {
        activeCard.classList.add('active');
      }
    });
  });

  // =========================================================================
  // 4. Vanguard Form & Actionable Pass Generator
  // =========================================================================

  const vanguardForm = document.getElementById('vanguard-form');
  const vanguardPass = document.getElementById('vanguard-pass');
  const passId = document.getElementById('pass-id');
  const passName = document.getElementById('pass-name');
  const passRole = document.getElementById('pass-role');

  vanguardForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const role = document.querySelector('input[name="user_role"]:checked').value;
    const name = document.getElementById('reg-name').value.trim();
    const contact = document.getElementById('reg-contact').value.trim();

    if (!name || !contact) return;

    const randomSerial = Math.floor(100 + Math.random() * 900);
    const prefix = role === 'sme' ? 'SG-SME' : 'SG-STUDENT';
    const serial = `#${prefix}-${randomSerial}`;

    passId.textContent = serial;
    passName.textContent = name;
    
    if (role === 'sme') {
      passRole.textContent = currentLang === 'zh' 
        ? '新加坡中小企业雇主 • 真实日常微实习试点' 
        : 'Singapore SME Employer • Routine Micro-Internship Pilot';
    } else {
      passRole.textContent = currentLang === 'zh' 
        ? '顶尖高校高潜学子 • 工作量证明实战人选' 
        : 'University Talent • Proof-of-Work Candidate';
    }

    vanguardPass.style.display = 'block';
    vanguardPass.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    showToast(currentLang === 'zh' ? `先锋入驻已确认：${serial}` : `Vanguard Pass Confirmed: ${serial}`);
  });

  // =========================================================================
  // 5. Lightweight Toast
  // =========================================================================

  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;

  function showToast(msg) {
    if (toastTimer) clearTimeout(toastTimer);
    toastMessage.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

});
