/**
 * MicroIntern SG — Clean Minimalist Interactive Engine
 * "Get the Real Work Done. Impress the Company. Land the Offer."
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Dual Language Dictionary (English & 简体中文)
  // =========================================================================

  const i18n = {
    en: {
      announcement_badge: "PILOT COHORT 01",
      announcement_text: "Now accepting Singapore SME partners & NUS / NTU / SMU students.",
      announcement_cta: "Claim Vanguard Pass →",

      nav_manifesto: "Why Micro-Internship",
      nav_audiences: "For SMEs & Students",
      nav_vault: "Proof Vault",
      nav_comparison: "The Cold Truth",
      nav_cta: "Get Early Access",

      hero_pill: "SINGAPORE'S PROOF-OF-WORK INTERNSHIP PLATFORM",
      hero_h1_line1: "The Traditional Resume is Dead.",
      hero_h1_line2: "Deliver Proof. Win the Offer.",
      hero_subdeck: "Bypass the broken recruitment lottery. Singapore SMEs post 2–6 hour real-world business challenges. Top university talent delivers tangible execution. No recruitment noise, no keyword gaming — just real work recognized and rewarded.",
      
      stamp_motto: "Get the Real Work Done. Impress the Company. Land the Offer.",

      cta_sme_btn: "Explore For SMEs & Students ↓",
      cta_inspect_btn: "Inspect 3 Live Cases 👁️",

      stat_1: "SME resumes filtered due to AI spam",
      stat_2: "Avg time to complete a Micro-Internship",
      stat_3: "Top deliverers offered formal interviews",
      stat_4: "Upfront placement fee for pilot SMEs",

      // Manifesto
      manifesto_badge: "THE CORE PROBLEM",
      manifesto_title: "Hiring Was Meant to Be a Handshake Over Capability.\nInstead, It Became an AI Arms Race.",
      manifesto_p1: "Let us state the truth plainly: <strong>The 1-page PDF resume has collapsed as a signal of real-world competence.</strong>",
      manifesto_p2: "In 2026, any student can generate a flawless, buzzword-dense resume in thirty seconds using large language models. Meanwhile, corporate Applicant Tracking Systems (ATS) reject 90% of applicants purely based on arbitrary keyword filters.",
      manifesto_quote: "\"We have built a hiring market where great students spend hundreds of hours formatting bullet points, and founders spend hundreds of hours interviewing candidates who cannot write a single cohesive query or draft a basic customer cohort analysis.\"",
      manifesto_p3: "Singapore runs on <strong>150,000+ Small and Medium Enterprises (SMEs)</strong> that drive 70% of local employment. These companies do not have six-figure recruitment agency retainers or time for three-month interview pipelines. They have immediate, high-leverage business bottlenecks. And across Kent Ridge (NUS), Jurong West (NTU), and Bras Basah (SMU), tens of thousands of hungry, hyper-capable students are waiting for a chance to prove their skills.",
      manifesto_p4: "MicroIntern SG is the bridge. We replace the paper lottery with Proof-of-Work.",

      // Dual Audience Hub
      hub_section_badge: "DUAL PERSPECTIVE",
      hub_section_title: "Built for Founders Who Want Execution.\nBuilt for Students Who Want Real Proof.",
      hub_section_subtitle: "Whether you are looking to solve a real business challenge or looking to prove your talent directly to decision-makers, MicroIntern removes the friction.",
      
      // SME Card
      hub_sme_badge: "FOR SINGAPORE SMES",
      hub_sme_title: "Stop Sifting Resumes. Inspect Real Output.",
      hub_sme_desc: "Turn your backlogged business tasks into self-contained 2–6 hour challenges. Review structured outputs and hire with complete confidence.",
      sme_b1_title: "Zero Probation Risk:",
      sme_b1_desc: "Avoid burning 3 months of intern allowance on candidates who freeze in front of real work.",
      sme_b2_title: "Keep the Asset Regardless:",
      sme_b2_desc: "Even if you don't extend an offer, your company gains a finished market scan or script.",
      sme_b3_title: "Access Top NUS/NTU Talent:",
      sme_b3_desc: "Connect with motivated undergrads eager to work with agile Singapore businesses.",
      hub_sme_btn: "Post a Micro-Challenge →",
      hub_sme_hint: "Takes 60 seconds. Free onboarding for pilot partners.",

      // Student Card
      hub_student_badge: "FOR UNIVERSITY STUDENTS",
      hub_student_title: "Break the \"No Experience\" Lock.",
      hub_student_desc: "Stop submitting 150 cold applications into the ATS void. Pick real company tasks, deliver exceptional work, and land direct internship offers.",
      stu_b1_title: "Direct Founder Visibility:",
      stu_b1_desc: "Your finished work lands directly in front of founders and team leads, not HR gatekeepers.",
      stu_b2_title: "Build a Proof Portfolio:",
      stu_b2_desc: "Accumulate timestamped commercial deliverables with verified employer recommendations.",
      stu_b3_title: "Zero Semester Conflicts:",
      stu_b3_desc: "Complete self-contained challenges on weekends (3–5 hours) without risking your GPA.",
      hub_student_btn: "Join as Student Talent →",
      hub_student_hint: "Open to all Singapore university & polytechnic students.",

      // Vault
      vault_badge: "INTERACTIVE PROOF VAULT",
      vault_title: "See What \"Proof-of-Work\" Actually Looks Like.\n3 Real Challenges. Real Outputs. Direct Offers.",
      vault_subtitle: "Explore how real Singapore SMEs converted 3–4 hour scoped tasks into high-conviction internship placements.",
      case1_tab: "Fintech User Funnel Audit",
      case2_tab: "AI Data Cleaning Automation",
      case3_tab: "TikTok SEA Go-To-Market Script",
      case1_company_meta: "Cross-Border Payments • Series A • 28 Staff • Tanjong Pagar",
      case2_company_meta: "Supply Chain Automation • Pre-Series A • 14 Staff • Jurong",
      case3_company_meta: "Specialty Singapore Robusta Brand • Bootstrapped • Jalan Besar",
      case_col_brief: "1. THE SPRINT BRIEF",
      case_col_student: "2. THE STUDENT TALENT",
      case_col_output: "3. DELIVERABLE EXCERPT",
      case_col_result: "4. FOUNDER EVALUATION",
      offer_badge: "OFFER EXTENDED",
      case1_brief_p: "\"We have a 42% drop-off between KYC document submission and first cross-border transfer. Analyze 2,000 anonymized onboarding attempts. Identify top 3 friction points and propose 2 low-code UX interventions.\"",
      case1_student_sub: "NUS Business & Computing (Year 1). Zero prior corporate internships. Passionate about payments UX.",
      case1_verdict: "\"Darren's teardown was cleaner than our external agency’s report. We offered him a paid part-time Product Analyst internship within 48 hours.\"",
      case2_brief_p: "\"Our warehouse ingestion receives erratic invoice PDFs from 40 different Malaysian & Singaporean vendors. Build a resilient Python script utilizing regex to extract SKU, quantity, and GST values into normalized JSON.\"",
      case2_student_sub: "NTU Computer Science (Year 1). International student from India. Had submitted 80+ cold resumes with zero replies.",
      case2_verdict: "\"Siddharth didn't just solve the brief — he wrote 15 unit tests that caught 3 vendor formatting edge-cases. We hired him as Data Engineering intern immediately.\"",
      case3_brief_p: "\"We want to expand to Gen Z coffee drinkers in Singapore and Malaysia. We need 3 native TikTok script treatments highlighting traditional Nanyang roasting heritage with a viral humor angle.\"",
      case3_student_sub: "SMU School of Social Sciences (Year 1). Non-business major with zero corporate branding references on paper.",
      case3_verdict: "\"Traditional agencies pitched $6k retainers with zero cultural pulse. Cheryl produced 3 killer concepts in an afternoon. She's now heading our content marketing.\"",

      // Comparison
      comp_badge: "THE HEAD-TO-HEAD AUDIT",
      comp_title: "Why Resumes Fail Everyone.\nTraditional Hiring vs. Micro-Internship Protocol.",
      th_dimension: "Hiring Dimension",
      th_traditional: "Traditional Resume Process (LinkedIn / JobStreet)",
      th_micro: "MicroIntern SG Protocol",
      dim_screening: "Candidate Evaluation",
      dim1_bad: "Keywords, GPA filters, and AI-inflated prose. Evaluates who can hire a resume writer.",
      dim1_good: "Actual work product. Evaluate code quality, analytical rigor, and execution speed.",
      dim_time: "Time-to-Offer",
      dim2_bad: "3 to 6 weeks of screening, phone calls, panels, and waiting.",
      dim2_good: "48 to 72 hours. From deliverable review directly to hiring conversation.",
      dim_sme_risk: "SME Financial Risk",
      dim3_bad: "High. Paid intern salary ($3,000–$6,000 total) + 40+ hours onboarding wasted if bad fit.",
      dim3_good: "Zero. Only a small micro-task stipend ($50–$150). You keep the asset even if you don't hire.",
      dim_freshman: "Freshman / Junior Access",
      dim4_bad: "Zero. Filtered instantly by ATS because they lack 'prior corporate experience'.",
      dim4_good: "100% meritocratic. Any student who can solve the problem gets their work reviewed.",
      dim_outcome: "Worst-Case Scenario",
      dim5_bad: "You wasted months and hired a candidate who can’t deliver.",
      dim5_good: "You gained a completed business analysis or script for a minimal task budget.",

      // Vanguard Form
      vanguard_badge: "PILOT COHORT 01 ACCESS",
      vanguard_title: "Claim Your Vanguard Member Pass.\nJoin Singapore's Micro-Internship Pioneer Network.",
      vanguard_subtitle: "We are accepting 30 forward-thinking Singapore SMEs and 200 motivated NUS / NTU / SMU students for our inaugural Q4 2026 pilot.",
      form_heading: "1. Select Identity & Enter Details",
      form_role_label: "I AM JOINING AS:",
      role_sme: "🏢 Singapore SME Employer",
      role_student: "🎓 University Student",
      form_name_label: "YOUR FULL NAME / COMPANY NAME:",
      form_contact_label: "EMAIL OR WHATSAPP CONTACT:",
      form_focus_label: "PRIMARY FOCUS DOMAIN:",
      opt_biz: "Product & Business Analytics",
      opt_tech: "Software & AI Data Scripting",
      opt_mkt: "Growth Marketing & Short-form Content",
      opt_ops: "Operations & Supply Chain Automation",
      form_submit_btn: "Generate My Vanguard Pass 🎟️",

      // Ticket
      tkt_holder: "PASS HOLDER",
      tkt_role: "MEMBERSHIP ROLE",
      tkt_cohort: "COHORT CYCLE",
      tkt_focus: "CORE DOMAIN",
      tkt_copy: "Copy Pass ID",
      tkt_note: "Keep safe for priority pilot invitation.",

      // Footer
      footer_motto: "\"Get the Real Work Done. Impress the Company. Land the Offer.\"",
      footer_col1: "PLATFORM",
      footer_col2: "ECOSYSTEM",
      footer_col3: "CONTACT",
      footer_link_sme: "SME Pilot Program",
      footer_link_student: "NUS/NTU Talent Hub"
    },

    zh: {
      announcement_badge: "先行者第一期",
      announcement_text: "现已开放新加坡中小企业雇主与 NUS / NTU / SMU 高校学子入驻申请。",
      announcement_cta: "申领先锋通行证 →",

      nav_manifesto: "为什么选择微实习",
      nav_audiences: "企业与学生端",
      nav_vault: "交付案例台",
      nav_comparison: "对比分析",
      nav_cta: "加入先锋计划",

      hero_pill: "新加坡工作量证明（PROOF-OF-WORK）微实习平台",
      hero_h1_line1: "传统纸面简历已经失效。",
      hero_h1_line2: "用交付说话，让 Offer 敲门。",
      hero_subdeck: "告别概率极低的简历彩票。新加坡本地中小企业发布 2~6 小时真实业务微任务，顶尖高校学子直接以实际成果证明能力。告别关键词虚标，让踏实的成果赢得企业的赏识与录用。",
      
      stamp_motto: "搞定真实任务。赢得企业赞赏。直接斩获录用。",

      cta_sme_btn: "探索企业端与学生端价值 ↓",
      cta_inspect_btn: "检阅 3 个真实微任务案例 👁️",

      stat_1: "传统招聘中被 AI 模板淹没的简历",
      stat_2: "完成一次微实习任务的平均工时",
      stat_3: "高质量成果交付者获正式实习面试率",
      stat_4: "首期入驻中小企业的前期猎头中介费",

      // Manifesto
      manifesto_badge: "核心痛点透视",
      manifesto_title: "招聘本应是基于真实能力的真诚握手，\n如今却演变成一场 AI 相互欺骗的军备竞赛。",
      manifesto_p1: "让我们直截了当地指出事实：<strong>单页 PDF 简历作为工作能力的衡量标准，已经彻底崩溃。</strong>",
      manifesto_p2: "在 2026 年，任何求职者都可以在几十秒内用大模型生成一份毫无破绽、堆满关键词的漂亮简历；而企业的招聘过滤系统，仅仅因为缺少几个生硬词汇，就将 90% 的潜力学子直接筛除。",
      manifesto_quote: "“我们处在一个畸形的招聘环境里：优秀的学生为了润色简历动词耗费数百小时，而企业创始人为了面试那些背得出八股文却连基础数据都拆不清的‘面霸’浪费大把精力。”",
      manifesto_p3: "新加坡经济依靠 <strong>15 万家中小企业（SMEs）</strong> 支撑，提供了本地 70% 的就业。中小企业没有数十万新币的猎头预算，更没有时间拖拉 3 个月面试。它们需要快速解决手头具体的业务瓶颈。而在 NUS、NTU 和 SMU 校园里，成千上万充满激情、学习力极强的年轻人，正渴求一个证明实力的舞台。",
      manifesto_p4: "MicroIntern SG 正是连接彼此的桥梁。我们用工作量证明（Proof-of-Work）打破简历的死结。",

      // Dual Audience Hub
      hub_section_badge: "双重视角赋能",
      hub_section_title: "为注重实干的企业创始人打造。\n为渴望真实证明的高校学子打造。",
      hub_section_subtitle: "无论您是想低风险解决具体业务瓶颈，还是想跳过简历内卷直接让决策者看到你的才华，微实习平台都能让合作轻松高效。",

      // SME Card
      hub_sme_badge: "致新加坡中小企业",
      hub_sme_title: "拒绝大海捞针，直接检阅真实产出。",
      hub_sme_desc: "将积压的真实业务需求拆解为 2~6 小时的微挑战。直接验收结构化的交付物，100% 放心发 Offer。",
      sme_b1_title: "零试用期踩雷风险：",
      sme_b1_desc: "避免白白消耗 3 个月实习津贴（$1,500/月）在纸面完美却无法上手的人选身上。",
      sme_b2_title: "切实留存交付资产：",
      sme_b2_desc: "哪怕不录用，您的企业也扎实地收获了一份可用的市场调研报告或数据自动化脚本。",
      sme_b3_title: "对接顶尖高校高潜生源：",
      sme_b3_desc: "直接连接来自 NUS / NTU / SMU 积极进取、执行力出色的年轻人才。",
      hub_sme_btn: "发布您的微挑战任务 →",
      hub_sme_hint: "仅需 60 秒，首期试点企业享免费协助拆解需求。",

      // Student Card
      hub_student_badge: "致高校学子与低年级新生",
      hub_student_title: "打破‘必须有经验才能找经验’的死循环。",
      hub_student_desc: "别再向黑洞邮箱海投 150 份注定被过滤的 PDF。认领企业真实任务，拿出过硬成果，直通创始人邀约。",
      stu_b1_title: "直达创始人视线：",
      stu_b1_desc: "你的成果直接呈现在创始人与核心主管面前，跳过繁琐低效的 HR 初筛门槛。",
      stu_b2_title: "建立不可辩驳的作品集：",
      stu_b2_desc: "积累带有时间戳、企业好评背书的真实商业成果，形成最硬核的求职资产。",
      stu_b3_title: "完全不耽误学业 GPA：",
      stu_b3_desc: "利用周末 3~5 小时即可独立搞定微任务，兼顾课业的同时建立行业声誉。",
      hub_student_btn: "以学生身份加入人才库 →",
      hub_student_hint: "面向新加坡所有大学及理工学院学生开放。",

      // Vault
      vault_badge: "真实案例检阅台",
      vault_title: "亲眼看看“工作量证明”如何发生。\n3 个真实挑战。真实产出。直通 Offer。",
      vault_subtitle: "检阅真实的新加坡中小企业如何通过 3~4 小时的微任务，将高潜学生直接转化为长期核心实习生。",
      case1_tab: "Fintech 用户流失漏斗诊断",
      case2_tab: "AI 供应链自动化脚本",
      case3_tab: "TikTok 东南亚出海创意脚本",
      case1_company_meta: "跨境支付金融科技 • A轮融资 • 28人团队 • 丹戎巴葛",
      case2_company_meta: "供应链自动化 SaaS • Pre-A轮 • 14人团队 • 裕廊创新区",
      case3_company_meta: "新加坡精品咖啡品牌 • 自主盈利 • 甘榜格南",
      case_col_brief: "1. 业务微挑战简报",
      case_col_student: "2. 领受任务的学生",
      case_col_output: "3. 成果交付物节选",
      case_col_result: "4. 创始人评价与录用",
      offer_badge: "正式发出 OFFER",
      case1_brief_p: "“我们在用户提交 KYC 与完成首笔跨境汇款之间，存在 42% 的断崖流失。分析 2,000 条脱敏操作日志，指出 3 个核心阻力点并提出 2 个低代码优化方案。”",
      case1_student_sub: "NUS 商业与计算大一新生。无过往名企经历，对支付 UX 极具热情。",
      case1_verdict: "“Darren 的诊断报告比外部咨询公司还要扎实。我们在阅读完交付成果的 48 小时内，直接发了兼职产品分析师 Offer。”",
      case2_brief_p: "“我们的仓库系统每天收到 40 家供应商不同格式的发票 PDF。编写一个基于 Python 正则的健壮脚本，准确解析 SKU、数量和 GST 税额为标准 JSON。”",
      case2_student_sub: "NTU 计算机大一留学生。此前投递了 80 多份模版简历均石沉大海。",
      case2_verdict: "“Siddharth 不仅写出了脚本，还附带了 15 个单元测试测出 3 个发票死角。我们当场录用他为数据工程实习生。”",
      case3_brief_p: "“我们想拓展新马 Z 世代咖啡受众。需要 3 组在开头 2 秒抓住眼球的 TikTok 短视频分镜脚本，融合南洋传统烘焙历史与当下流行幽默梗。”",
      case3_student_sub: "SMU 社会科学大一在读。非商科背景，纸面上没有任何企业经历。",
      case3_verdict: "“外部中介动辄要 6,000 新币月费还缺乏网感。Cheryl 一个下午搞出的创意脚本，上线 72 小时播放量破 34 万，现全权负责我们内容营销。”",

      // Comparison
      comp_badge: "维度对比",
      comp_title: "为什么传统简历招聘正在辜负每个人。\n传统招聘渠道 vs. 微实习交付模式。",
      th_dimension: "招聘维度",
      th_traditional: "传统简历招聘（LinkedIn / JobStreet）",
      th_micro: "MicroIntern SG 交付模式",
      dim_screening: "候选人筛选机制",
      dim1_bad: "看关键词、GPA 与 AI 润色的漂亮话。筛选出的是擅长包装简历的人。",
      dim1_good: "看真实工作交付物。直接评估代码质量、商业分析严密性与解决问题的执行力。",
      dim_time: "录用决策周期",
      dim2_bad: "3 至 6 周漫长的简历初筛、HR 打电话与业务面试排期。",
      dim2_good: "48 至 72 小时。检阅完交付成果即可直接发起签约交流。",
      dim_sme_risk: "企业试错成本",
      dim3_bad: "极高。全额承担 3 个月实习工资（$3,000–$6,000）+ 上百小时带教，招错人代价高昂。",
      dim3_good: "极低。仅需支付微小任务津贴（$50–$150）。哪怕不合适，也切实收获了工作成果。",
      dim_freshman: "低年级新生机会",
      dim4_bad: "几乎为零。因‘缺乏过往名企经历’直接被 ATS 算法剔除。",
      dim4_good: "100% 凭实力说话。只要你能做出优秀产出，创始人就能亲眼看到你的才能。",
      dim_outcome: "最坏情况结果",
      dim5_bad: "浪费几个月时间与高昂成本，招来一个根本无法胜任的员工。",
      dim5_good: "以极低的任务预算，换来了一份完整可用的商业分析或自动化脚本。",

      // Vanguard Form
      vanguard_badge: "首期先锋入驻",
      vanguard_title: "申领您的先锋会员凭据。\n加入新加坡微实习开拓者网络。",
      vanguard_subtitle: "我们首期（2026 年 Q4）仅开放 30 家新加坡中小企业与 200 位来自 NUS / NTU / SMU 的学子名额。",
      form_heading: "1. 选择身份并填写信息",
      form_role_label: "我的入驻身份：",
      role_sme: "🏢 新加坡中小企业雇主",
      role_student: "🎓 高等院校在校生",
      form_name_label: "您的全名 / 企业全称：",
      form_contact_label: "邮箱或 WHATSAPP：",
      form_focus_label: "核心专业 / 业务方向：",
      opt_biz: "产品与商业分析 (Analytics)",
      opt_tech: "软件开发与 AI 数据脚本 (Tech & AI)",
      opt_mkt: "增长营销与短视频内容 (Marketing)",
      opt_ops: "运营优化与供应链自动化 (Operations)",
      form_submit_btn: "即刻生成我的先锋会员卡 🎟️",

      // Ticket
      tkt_holder: "凭据持有者",
      tkt_role: "会员身份",
      tkt_cohort: "入驻期次",
      tkt_focus: "专业方向",
      tkt_copy: "复制编号",
      tkt_note: "请妥善保存此编号，作为首期试点优先受邀凭据。",

      // Footer
      footer_motto: "“搞定真实任务。赢得企业赞赏。直接斩获录用。”",
      footer_col1: "平台架构",
      footer_col2: "生态网络",
      footer_col3: "联系方式",
      footer_link_sme: "SME 试点伙伴计划",
      footer_link_student: "高校人才先锋站"
    }
  };

  let currentLang = 'en';

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

    if (lang === 'en') {
      langLabel.textContent = '中文 (ZH)';
    } else {
      langLabel.textContent = 'English (EN)';
    }

    localStorage.setItem('microintern_lang', lang);
  }

  const savedLang = localStorage.getItem('microintern_lang') || 'en';
  if (savedLang === 'zh') {
    updatePageLanguage('zh');
  }

  langToggleBtn.addEventListener('click', () => {
    const nextLang = currentLang === 'en' ? 'zh' : 'en';
    updatePageLanguage(nextLang);
    showToast(nextLang === 'en' ? 'Switched to English' : '已切换为简体中文');
  });


  // =========================================================================
  // 3. Interactive Proof Vault (Tab Switching)
  // =========================================================================

  const tabBtns = document.querySelectorAll('.tab-btn');
  const casePanels = document.querySelectorAll('.case-card');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const caseId = btn.getAttribute('data-case');

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      casePanels.forEach(panel => {
        panel.classList.remove('active');
      });
      const targetPanel = document.getElementById(`${caseId}-panel`);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });


  // =========================================================================
  // 4. Vanguard Pass Generator & Form Engine
  // =========================================================================

  const vanguardForm = document.getElementById('vanguard-form');
  const roleRadios = document.querySelectorAll('input[name="userRole"]');
  const fullNameInput = document.getElementById('fullName');
  const domainSelect = document.getElementById('taskFocus');

  const ticketIdEl = document.getElementById('ticket-id');
  const ticketNameEl = document.getElementById('ticket-name');
  const ticketRoleEl = document.getElementById('ticket-role');
  const ticketFocusEl = document.getElementById('ticket-focus');
  const copyPassBtn = document.getElementById('copy-pass-btn');

  function generateSerial(role) {
    const prefix = role === 'sme' ? 'SG-SME' : 'SG-TALENT';
    const randNum = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${randNum}`;
  }

  roleRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const role = e.target.value;
      if (role === 'sme') {
        ticketRoleEl.textContent = currentLang === 'zh' ? '新加坡 SME 雇主' : 'Singapore SME Partner';
        fullNameInput.placeholder = currentLang === 'zh' ? '例如：Marcus Tan 或 PayBridge SEA' : 'e.g. Marcus Tan or PayBridge SEA';
      } else {
        ticketRoleEl.textContent = currentLang === 'zh' ? '高校高潜学子 (NUS/NTU)' : 'NUS/NTU/SMU Talent';
        fullNameInput.placeholder = currentLang === 'zh' ? '例如：Darren Lim (NUS Year 1)' : 'e.g. Darren Lim (NUS Year 1)';
      }
    });
  });

  vanguardForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedRole = document.querySelector('input[name="userRole"]:checked').value;
    const name = fullNameInput.value.trim();
    const domain = domainSelect.value;

    if (!name) return;

    const newSerial = generateSerial(selectedRole);

    ticketIdEl.textContent = newSerial;
    ticketNameEl.textContent = name;
    ticketFocusEl.textContent = domain;

    if (selectedRole === 'sme') {
      ticketRoleEl.textContent = currentLang === 'zh' ? '新加坡 SME 雇主' : 'Singapore SME Partner';
    } else {
      ticketRoleEl.textContent = currentLang === 'zh' ? '高校高潜学子 (NUS/NTU)' : 'NUS/NTU/SMU Talent';
    }

    const ticketEl = document.getElementById('vanguard-ticket');
    ticketEl.style.transform = 'translateY(-4px)';
    setTimeout(() => {
      ticketEl.style.transform = 'translateY(0)';
    }, 250);

    const successMsg = currentLang === 'zh' 
      ? `🎉 先锋凭证已生成：${newSerial}`
      : `🎉 Vanguard Pass Generated: ${newSerial}`;
    showToast(successMsg);
  });

  copyPassBtn.addEventListener('click', () => {
    const passId = ticketIdEl.textContent;
    navigator.clipboard.writeText(passId).then(() => {
      const msg = currentLang === 'zh' 
        ? `✅ 凭证编号 [${passId}] 已复制！` 
        : `✅ Pass ID [${passId}] copied!`;
      showToast(msg);
    }).catch(() => {
      showToast(`Pass: ${passId}`);
    });
  });


  // =========================================================================
  // 5. Toast System
  // =========================================================================

  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  let toastTimer = null;

  function showToast(message) {
    if (toastTimer) clearTimeout(toastTimer);
    toastMsg.textContent = message;
    toast.classList.add('show');
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

});
