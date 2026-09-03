/**
 * MicroIntern SG — Interactive Engine & Dual Language Controller
 * "Get the Real Work Done. Impress the Company. Land the Offer."
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. Dual Language Dictionary (English & 简体中文)
  // =========================================================================

  const i18n = {
    en: {
      announcement_badge: "PILOT COHORT 01",
      announcement_text: "Now accepting Singapore SME pilot partners & NUS / NTU / SMU students. Zero placement fees.",
      announcement_cta: "Claim Vanguard Pass →",

      nav_manifesto: "The Manifesto",
      nav_for_smes: "For SMEs",
      nav_for_students: "For Students",
      nav_vault: "Proof Vault",
      nav_comparison: "The Cold Truth",
      nav_cta: "Get Early Access",

      hero_pill_1: "SINGAPORE ECOSYSTEM VANGUARD",
      hero_pill_2: "ZERO RESUME GAMBLING",
      hero_h1_line1: "The Traditional Resume is Dead.",
      hero_h1_line2: "Deliver Proof. Win the Offer.",
      hero_subdeck: "Singapore's first <strong>Proof-of-Work Micro-Internship Platform</strong>. SMEs post 2–6 hour real-world business challenges. Top university talent delivers tangible execution. No recruitment noise, no keyword gaming — just real work recognized and rewarded.",
      
      stamp_label: "THE 3-STEP REALITY PROTOCOL",
      stamp_motto: "Get the Real Work Done. Impress the Company. Land the Offer.",

      cta_sme_btn: "Read the Memo for SME Founders ↓",
      cta_student_btn: "Read the Memo for Students ↓",
      cta_inspect_btn: "Inspect 3 Live Cases 👁️",

      stat_1: "SME resumes filtered due to AI spam",
      stat_2: "Avg time to complete a Micro-Internship",
      stat_3: "Top deliverers offered formal interviews",
      stat_4: "Upfront headhunting fee for pilot SMEs",

      // Manifesto
      manifesto_badge: "THE MACRO MANIFESTO",
      manifesto_title: "Hiring Was Meant to Be a Handshake Over Capability.\nInstead, It Became an AI-Powered Arms Race.",
      manifesto_p1: "Let us state the uncomfortable truth plainly: <strong>The 1-page PDF resume has completely collapsed as a signal of competence.</strong>",
      manifesto_p2: "In 2026, any student can generate a flawless, buzzword-dense resume in thirty seconds using large language models. Meanwhile, corporate Applicant Tracking Systems (ATS) reject 90% of applicants purely based on arbitrary keyword filters.",
      manifesto_quote: "\"We have built a job market where great students spend hundreds of hours formatting bullet points, and founders spend hundreds of hours interviewing candidates who cannot write a single cohesive query or draft a basic customer cohort analysis.\"",
      manifesto_p3: "Singapore’s economy runs on <strong>150,000+ Small and Medium Enterprises (SMEs)</strong> that drive 70% of local employment. These companies do not have six-figure HR budgets or time for three-month interview pipelines. They have immediate, high-leverage business bottlenecks. And across Kent Ridge (NUS), Jurong West (NTU), and Bras Basah (SMU), tens of thousands of hungry, hyper-capable students are waiting for a chance to prove they can solve them.",
      manifesto_p4: "<strong>MicroIntern SG is the bridge. We replace the paper lottery with Proof-of-Work.</strong>",

      // Memo 1 (SME)
      memo1_meta_to: "DOCUMENT RECIPIENT:",
      memo1_meta_to_val: "Singapore SME Founders, Managing Directors & Team Leads",
      memo1_meta_from: "ISSUED BY:",
      memo1_meta_class: "CLASSIFICATION:",
      memo1_meta_class_val: "COMMERCIAL ADVISORY",
      memo1_tag: "THE FOUNDER'S EQUATION",
      memo1_heading: "Stop Reading 300 ChatGPT-Polished Resumes.\nPost a 4-Hour Micro-Challenge and Inspect Real Output.",
      memo1_p1: "Dear Founder: Every time you open a job posting on traditional job boards, you are effectively signing up for an unpaid full-time job as a resume filter. You wade through hundreds of identical CVs boasting of 'strategic synergy' and 'growth leadership.' You pick five, conduct two rounds of interviews, extend an offer, and four weeks later discover they struggle to execute a basic SQL join or write an authentic Singapore B2B email sequence.",
      pain_1_tag: "THE TRADITIONAL RISK",
      pain_1_title: "The 3-Month Probation Trap",
      pain_1_desc: "You risk 3 months of intern allowance ($1,200–$1,800/mo) and senior team bandwidth on someone who looked brilliant on a PDF but freezes in front of actual work.",
      pain_2_tag: "THE MICROINTERN ARBITRAGE",
      pain_2_title: "4-Hour Proof of Competence",
      pain_2_desc: "Turn a real backlogged task (market scan, data cleaning, customer audit) into a self-contained micro-task. You only review tangible deliverables. If it’s stellar, hire them with 100% confidence.",
      memo1_subheading: "How It Works for Your Business:",
      sme_step1_title: "1. Define a 2–6 Hour Scoped Deliverable:",
      sme_step1_desc: "Not open-ended busywork, but a focused challenge. E.g., 'Analyze our Southeast Asia checkout drop-off data' or 'Scrape and categorize 150 Singapore F&B suppliers.'",
      sme_step2_title: "2. Students Execute Under Strict Constraints:",
      sme_step2_desc: "Vetted undergrads from NUS, NTU, and SMU claim the task and submit structured outputs within 48 hours.",
      sme_step3_title: "3. Keep the Asset, Extend the Offer:",
      sme_step3_desc: "Regardless of hiring, your company keeps the finished deliverable. If the student’s thinking wows your leadership, invite them straight to a formal internship. No recruiter cuts, zero fluff.",
      sme_callout: "\"You don't hire a chef by reading their essay about culinary theory. You taste the soup. MicroIntern gives you the soup before you sign the contract.\"",
      sme_action_btn: "Register as a Pilot SME Partner →",
      sme_action_subtext: "Takes 60 seconds. Our engineering team assists with task scoping.",

      // Memo 2 (Student)
      memo2_meta_to: "DOCUMENT RECIPIENT:",
      memo2_meta_to_val: "University Freshmen, Undergrads & Ambitious International Students",
      memo2_meta_class_val: "CAREER BREAKTHROUGH",
      memo2_tag: "THE STUDENT'S PRISON BREAK",
      memo2_heading: "Trapped in the \"Need Experience to Get Experience\" Loop?\nBreak the Lock with Irrefutable Proof-of-Work.",
      memo2_p1: "You walked onto campus at Kent Ridge, Jurong West, or Bras Basah full of ambition. You opened LinkedIn or JobStreet, clicked on a dozen 'Entry-Level Internship' postings, and hit a concrete wall: \"Requires 1–2 prior internships and 2+ years of relevant industry experience.\"",
      memo2_p2: "It is an insulting paradox. How are you supposed to gain your first real-world internship if every single internship demands that you already have one?",
      box_old_badge: "THE OLD RESUME GRIND",
      box_old_1: "Cold-applying to 150 companies with a template CV",
      box_old_2: "Discarded in 4 seconds by an automated keyword bot",
      box_old_3: "Zero actionable feedback, 100% emotional burnout",
      box_old_4: "Wasting freshman summer doing theoretical coursework",
      box_new_badge: "THE MICROINTERN PROTOCOL",
      box_new_1: "Pick a 2–6 hour real business task aligned with your craft",
      box_new_2: "Do deep, exceptional work that directly solves an SME problem",
      box_new_3: "Your deliverable lands directly on the Founder/Lead's desk",
      box_new_4: "Earn task honorariums, verified portfolio assets, and direct offers",
      memo2_subheading: "What Happens When You Ship:",
      trio1_title: "Verifiable Proof Portfolio",
      trio1_desc: "No more hypothetical classroom assignments. You gain live commercial deliverables with timestamps and signed employer testimonials.",
      trio2_title: "Founder Direct Line",
      trio2_desc: "Skip the gatekeeping HR intern. If your deliverable creates business value, Singapore founders reach out to you directly.",
      trio3_title: "Zero Academic Conflicts",
      trio3_desc: "Tasks take 3–5 hours on weekends. You build prestige and earn cash honorariums without compromising your semester GPA.",
      student_action_btn: "Claim Your Student Vanguard Pass →",
      student_action_subtext: "Open to all Singapore tertiary students (NUS, NTU, SMU, SUTD, SIT, Poly).",

      // Vault
      vault_badge: "INTERACTIVE PROOF VAULT",
      vault_title: "See What \"Proof-of-Work\" Actually Looks Like.\n3 Real Micro-Tasks. Real Outputs. Direct Offers.",
      vault_subtitle: "Click through each micro-challenge below to inspect how a 3–4 hour task transformed a student from an \"untested freshman\" into an indispensable hire.",
      case1_tab: "Fintech User Funnel Audit",
      case2_tab: "AI Data Cleaning Automation",
      case3_tab: "TikTok SEA Go-To-Market Script",
      case1_company_meta: "Cross-Border Payments • Series A • 28 Staff • Tanjong Pagar",
      case2_company_meta: "Supply Chain Automation • Pre-Series A • 14 Staff • Jurong",
      case3_company_meta: "Specialty Singapore Robusta Brand • Bootstrapped • Jalan Besar",
      case_col_brief: "1. THE SPRINT BRIEF (FROM FOUNDER)",
      case_col_student: "2. THE STUDENT PROFILE",
      case_col_output: "3. DELIVERABLE EXCERPT (THE PROOF)",
      case_col_result: "4. FOUNDER EVALUATION & RESULT",
      offer_badge: "OFFER EXTENDED",
      case1_brief_p: "\"We have a 42% drop-off between KYC document submission and first SG-IDR cross-border transfer. We provide anonymized event logs for 2,000 onboarding attempts. Identify top 3 friction points and propose 2 low-code UX interventions.\"",
      case1_student_sub: "NUS Business & Computing (Year 1). Zero prior corporate internships. Passionate about payments UX.",
      case1_verdict: "\"Darren's teardown was cleaner than our external agency’s report. We offered him a paid part-time Product Analyst internship within 48 hours of reading his deliverable.\"",
      case2_brief_p: "\"Our warehouse ingestion receives erratic invoice PDFs from 40 different Malaysian & Singaporean hardware vendors. Build a resilient Python script utilizing regex and open-source parser to extract SKU, quantity, and GST values into normalized JSON.\"",
      case2_student_sub: "NTU Computer Science (Year 1). International student from India. Had submitted 80+ cold resumes with zero replies.",
      case2_verdict: "\"Siddharth didn't just solve the brief — he wrote 15 unit tests that caught 3 vendor formatting edge-cases we didn't know existed. We hired him as our Data Engineering intern immediately.\"",
      case3_brief_p: "\"We want to expand to Gen Z coffee drinkers in Singapore and Malaysia. We need 3 native TikTok script treatments that hook viewers in the first 2 seconds, highlight traditional Nanyang roasting heritage, and incorporate a viral humor angle.\"",
      case3_student_sub: "SMU School of Social Sciences (Year 1). Non-business major with zero corporate branding references on paper.",
      case3_verdict: "\"Traditional agencies pitched us $6,000 retainers with zero cultural pulse. Cheryl produced 3 killer concepts in an afternoon. She's now heading our content marketing.\"",

      // Comparison
      comp_badge: "THE HEAD-TO-HEAD AUDIT",
      comp_title: "Why Resumes Fail Everyone.\nTraditional Hiring vs. Micro-Internship Protocol.",
      th_dimension: "Hiring Dimension",
      th_traditional: "Traditional Resume Process (LinkedIn / JobStreet)",
      th_micro: "MicroIntern SG Protocol",
      dim_screening: "Candidate Evaluation",
      dim1_bad: "Keywords, GPA filters, and AI-inflated prose. Evaluates who can hire a resume writer.",
      dim1_good: "Actual work product. You evaluate code quality, analytical rigor, and execution speed.",
      dim_time: "Time-to-Offer",
      dim2_bad: "3 to 6 weeks of screening, phone calls, panels, and waiting.",
      dim2_good: "48 to 72 hours. From deliverable review directly to hiring conversation.",
      dim_sme_risk: "SME Financial Risk",
      dim3_bad: "High. Paid intern salary ($3,000–$6,000 total) + 40+ hours senior staff onboarding wasted if bad fit.",
      dim3_good: "Zero. Only a small micro-task stipend ($50–$150). You keep the asset even if you don't hire.",
      dim_freshman: "Freshman / Junior Access",
      dim4_bad: "Zero. Filtered instantly by ATS because they lack 'prior corporate experience'.",
      dim4_good: "100% meritocratic. Any student who can solve the problem gets their work reviewed by leadership.",
      dim_outcome: "Worst-Case Scenario",
      dim5_bad: "You wasted months and hired a candidate who can’t deliver.",
      dim5_good: "You gained a completed business analysis or script for a minimal task budget.",

      // Vanguard Form
      vanguard_badge: "PILOT COHORT 01 ACCESS",
      vanguard_title: "Claim Your Vanguard Pass.\nJoin Singapore's Micro-Internship Pioneer Network.",
      vanguard_subtitle: "We are accepting 30 forward-thinking Singapore SMEs and 200 motivated NUS / NTU / SMU students for our inaugural Q4 2026 pilot. Generate your cryptographic-style physical pass below.",
      form_heading: "1. Select Identity & Enter Details",
      form_role_label: "I AM JOINING AS:",
      role_sme: "🏢 Singapore SME / Employer",
      role_student: "🎓 University Student / Talent",
      form_name_label: "YOUR FULL NAME / ENTITY NAME:",
      form_contact_label: "CORPORATE EMAIL OR WHATSAPP:",
      form_focus_label: "PRIMARY DOMAIN FOCUS:",
      opt_biz: "Product & Business Analytics",
      opt_tech: "Software & AI Data Scripting",
      opt_mkt: "Growth Marketing & Short-form Content",
      opt_ops: "Operations & Supply Chain Automation",
      form_submit_btn: "Generate My Vanguard Pass 🎟️",

      // Ticket
      tkt_holder: "PASS HOLDER:",
      tkt_role: "ROLE DESIGNATION:",
      tkt_cohort: "COHORT:",
      tkt_focus: "CORE DOMAIN:",
      tkt_copy: "Copy Pass ID",
      tkt_note: "Keep safe for priority pilot invitation.",

      // Footer
      footer_motto: "\"Get the Real Work Done. Impress the Company. Land the Offer.\"",
      footer_col1: "MANIFESTO & MEMOS",
      footer_col2: "LOCAL ECOSYSTEM",
      footer_col3: "CONTACT & FOUNDING TEAM",
      footer_link_sme: "SME Pilot Program",
      footer_link_student: "NUS/NTU Vanguard Hub",
      footer_link_truth: "The Resume Audit"
    },

    zh: {
      announcement_badge: "先行者第一期 (COHORT 01)",
      announcement_text: "现已开放新加坡本地中小企业与 NUS / NTU / SMU 高校学生入驻。首期免撮合佣金。",
      announcement_cta: "即刻申领先锋通行证 →",

      nav_manifesto: "商业宣言",
      nav_for_smes: "致企业主",
      nav_for_students: "致高校学子",
      nav_vault: "交付实录台",
      nav_comparison: "残酷对比",
      nav_cta: "获取先锋席位",

      hero_pill_1: "新加坡高校与企业先锋网络",
      hero_pill_2: "告别简历赌博模式",
      hero_h1_line1: "传统纸面简历已经彻底死亡。",
      hero_h1_line2: "用交付说话，让 Offer 敲门。",
      hero_subdeck: "新加坡首个<strong>“工作量证明（Proof-of-Work）”微实习撮合平台</strong>。企业发布 2~6 小时真实商业微挑战，顶尖高校学子直接提交实打实的成果交付。拒绝 AI 包装噪音，告别关键词作弊——让真实的业务产出赢得企业赞赏与正式录用。",
      
      stamp_label: "3步真实闭环协议",
      stamp_motto: "搞定真实任务。赢得企业赞赏。直接斩获录用。",

      cta_sme_btn: "阅读致中小企业创始人备忘录 ↓",
      cta_student_btn: "阅读致大学生破局备忘录 ↓",
      cta_inspect_btn: "检阅 3 个真实微任务案例 👁️",

      stat_1: "被 AI 虚标垃圾简历淹没的招聘筛选",
      stat_2: "完成一次实战微实习的平均工时",
      stat_3: "高质量交付者获正式实习面试邀请率",
      stat_4: "首期试点中小企业的前期猎头中介费",

      // Manifesto
      manifesto_badge: "宏观商业宣言",
      manifesto_title: "招聘本应是基于真实能力的真诚握手，\n如今却演变成一场 AI 相互欺骗的军备竞赛。",
      manifesto_p1: "让我们直白地揭开这个残酷的皇帝新衣：<strong>单页 PDF 简历作为能力衡量工具，已经彻底崩溃。</strong>",
      manifesto_p2: "在 2026 年，任何学生都可以在 30 秒内用大语言模型生成一份词藻华丽、天衣无缝的简历；而企业的 ATS 招聘筛选系统，仅仅因为没有撞上某些僵化关键词，就将 90% 的候选人一键丢进垃圾桶。",
      manifesto_quote: "“我们构建了一个荒谬的求职市场：优秀的大学生花费上百小时调整简历排版和动词，而创始人花费几十个小时面试那些连基础 SQL 联结查询都写不出、连一张用户留存漏斗都拆不清的理论派‘面霸’。”",
      manifesto_p3: "新加坡经济依靠 <strong>15 万家中小企业（SMEs）</strong> 驱动，它们贡献了本地 70% 的就业岗位。这些企业没有六位数的猎头预算，更没有时间进行长达三个月的拉锯式面试。它们迫切需要解决手头具体的业务瓶颈。而在肯特岗（NUS）、南洋山（NTU）和勿拉士峇沙（SMU），成千上万充满激情、学习力极强的高潜年轻学子，正渴望一个证明自己的机会。",
      manifesto_p4: "<strong>MicroIntern SG 就是这座桥梁。我们用真实交付（Proof-of-Work）终结简历彩票。</strong>",

      // Memo 1 (SME)
      memo1_meta_to: "文件接收方：",
      memo1_meta_to_val: "新加坡本地中小企业创始人、董事经理与业务主管",
      memo1_meta_from: "发函机构：",
      memo1_meta_class: "文件密级：",
      memo1_meta_class_val: "商业战略咨询",
      memo1_tag: "创始人的雇佣算式",
      memo1_heading: "停止在 300 份 ChatGPT 润色的简历里捞针。\n发布 4 小时微挑战，直接验收真实产出。",
      memo1_p1: "尊敬的创始人：每次您在招聘网站上发布一个岗位，您实际上是在无偿兼职当垃圾简历过滤器。您浏览数百份千篇一律、满篇都是‘战略协同’和‘敏捷领导力’的简历，挑了 5 个人，面了两轮，发了 Offer，一个月后却发现他们连一份规范的供应商对账表都做不好。",
      pain_1_tag: "传统招聘的试错深坑",
      pain_1_title: "3 个月实习试用期陷阱",
      pain_1_desc: "您承担了 3 个月实习津贴（每月 $1,200–$1,800 新币）以及资深主管宝贵的带人时间，招来的却是一个纸面完美、面对真刀真枪实操却束手无策的理论派。",
      pain_2_tag: "微实习套利模型",
      pain_2_title: "4 小时真实能力验货",
      pain_2_desc: "把您手头积压的真实任务（竞品调研、数据清洗、客户流失分析）拆成一个独立微任务。您只评审成果交付。如果极为惊艳，100% 放心发 Offer。",
      memo1_subheading: "企业如何运作：",
      sme_step1_title: "1. 拆解一个 2~6 小时的具体业务目标：",
      sme_step1_desc: "不是毫无意义的打杂，而是具体问题。例如：‘分析我们东南亚跨境结账流失数据’或‘抓取并清洗 150 家新加坡餐饮供应商名录’。",
      sme_step2_title: "2. 顶尖高校学生在明确约束下交付：",
      sme_step2_desc: "来自 NUS、NTU、SMU 的高潜学生领取任务，并在 48 小时内提交结构化成果物。",
      sme_step3_title: "3. 保留交付资产，直通正式录用：",
      sme_step3_desc: "无论您是否最终录用该学生，您的企业都永久获得了这份切切实实的业务成果；若学生的思考超出预期，直接免试邀请长线实习。无中介抽成，零虚耗。",
      sme_callout: "“招厨师从来不需要他写一万字烹饪理论论文，你尝一口他熬的汤就全明白了。MicroIntern 让你在签约之前，先尝到那口真材实料的汤。”",
      sme_action_btn: "申请入驻先锋合作企业 →",
      sme_action_subtext: "仅需 60 秒。我们的工程师团队协助您拆解首个微任务。",

      // Memo 2 (Student)
      memo2_meta_to: "文件接收方：",
      memo2_meta_to_val: "大学新生、本科在校生与高潜国际学子",
      memo2_meta_class_val: "职业破局指南",
      memo2_tag: "大学生的求职越狱",
      memo2_heading: "被困在‘必须有经验才能找经验’的死循环？\n用不可辩驳的交付成果打破锁链。",
      memo2_p1: "你满怀憧憬地步入新加坡大学校园，打开招聘网站，点开一个个‘初级实习生’岗位，却撞上一面冰冷的高墙：‘要求 1~2 段过往名企实习经历，且具备 2 年以上行业实操经验’。",
      memo2_p2: "这是一个令人愤怒的死循环悖论。如果每份实习都要求你‘已经拥有实习经历’，大一新生的第一段经验到底从何而来？",
      box_old_badge: "传统投简历的煎熬模式",
      box_old_1: "拿着模版简历海投 150 家公司石沉大海",
      box_old_2: "被 ATS 关键词过滤系统在 4 秒内无情淘汰",
      box_old_3: "收不到任何具体改进反馈，陷入无尽精神内耗",
      box_old_4: "虚度大一暑假，只能做虚构的课后作业练习",
      box_new_badge: "MICROINTERN 交付协议",
      box_new_1: "挑选一个符合你专长的 2~6 小时真实企业任务",
      box_new_2: "用深度、卓越的成果帮新加坡 SME 解决实际问题",
      box_new_3: "你的交付成果直接呈现在创始人或主管的桌案上",
      box_new_4: "赚取任务津贴，积累可验证作品集，直接拿到 Offer",
      memo2_subheading: "当你交付成果时，你将获得：",
      trio1_title: "不可伪造的作品集",
      trio1_desc: "不再是虚构的课后 PPT，而是带有时间戳、雇主真实好评背书的商业级交付案例资产。",
      trio2_title: "创始人直通热线",
      trio2_desc: "绕过不懂业务的 HR 实习生初筛。只要你的交付产生价值，新加坡本地创始人会亲自向你抛出橄榄枝。",
      trio3_title: "零学业冲突，灵活自由",
      trio3_desc: "周末抽出 3~5 小时即可完成。在完全不牺牲大学 GPA 的前提下，积累最硬核的雇主声誉与津贴。",
      student_action_btn: "抢先申领学生先锋通行证 →",
      student_action_subtext: "向新加坡所有大专院校开放（NUS、NTU、SMU、SUTD、SIT、理工学院）。",

      // Vault
      vault_badge: "交互式交付实录台",
      vault_title: "亲眼见证“工作量证明”究竟如何运作。\n3 个真实微任务。真实产出。直通录用。",
      vault_subtitle: "点击下方不同的微挑战案例，检阅一段 3~4 小时的微任务如何让一名‘零经验的大一新生’转变为企业争抢的核心骨干。",
      case1_tab: "Fintech 用户流失漏斗诊断",
      case2_tab: "AI 供应链自动化清洗脚本",
      case3_tab: "TikTok 东南亚出海爆款脚本",
      case1_company_meta: "跨境支付金融科技 • A轮融资 • 28人团队 • 丹戎巴葛",
      case2_company_meta: "供应链自动化 SaaS • Pre-A轮 • 14人团队 • 裕廊创新区",
      case3_company_meta: "新加坡精品罗布斯塔咖啡品牌 • 自主盈利 • 甘榜格南",
      case_col_brief: "1. 创始人发布的微任务需求",
      case_col_student: "2. 领受任务的学生背景",
      case_col_output: "3. 交付成果实录（PROOFS）",
      case_col_result: "4. 企业创始人评价与结果",
      offer_badge: "直接发放 OFFER",
      case1_brief_p: "“我们在用户提交 KYC 身份认证与完成首笔新币-印尼盾跨境汇款之间，存在 42% 的断崖式流失。我们提供 2,000 条脱敏操作日志。请找出流失前 3 大阻力点，并提出 2 个低代码 UX 优化方案。”",
      case1_student_sub: "NUS 商业与计算系大一学生。过往 0 名企实习经历，痴迷支付产品 UX 研究。",
      case1_verdict: "“Darren 提交的诊断报告比我们之前聘请的外部咨询机构还要精准清晰。我们在看完整份交付物的 48 小时内，直接向他发放了带薪兼职产品分析师 Offer。”",
      case2_brief_p: "“我们的仓库系统每天收到来自 40 家马来西亚与新加坡硬件供应商的不规范 PDF 发票。请编写一个基于 Python 正则与开源解析库的健壮脚本，将 SKU、数量与 GST 税额解析为标准 JSON。”",
      case2_student_sub: "NTU 计算机科学大一留学生。此前投递了 80 多份简历全部石沉大海。",
      case2_verdict: "“Siddharth 不仅完美搞定了需求，还主动编写了 15 个单元测试，帮我们测出了 3 个此前根本不知道的发票排版死角。我们当场录用他为数据工程实习生。”",
      case3_brief_p: "“我们计划拓展新加坡与马来西亚的 Z 世代年轻客群。需要 3 组在开头 2 秒抓住眼球的 TikTok 原生短视频分镜脚本，融合南洋传统烘焙历史与当下流行幽默梗。”",
      case3_student_sub: "SMU 社会科学学院大一学生。非商科背景，纸面简历上没有任何企业文案经历。",
      case3_verdict: "“传统广告公关公司张口就要 6,000 新币月费，写的文案还毫无网感。Cheryl 花了一个下午做出的创意方案，上线 72 小时播放量突破 34 万。她现在全权负责我们品牌的内容营销。”",

      // Comparison
      comp_badge: "正面残酷对比",
      comp_title: "为什么传统简历模式辜负了所有人。\n传统招聘 vs. 微实习协议对比。",
      th_dimension: "考核维度",
      th_traditional: "传统简历招聘（LinkedIn / JobStreet）",
      th_micro: "MicroIntern SG 交付协议",
      dim_screening: "候选人筛选机制",
      dim1_bad: "看关键词、GPA 与 AI 润色的漂亮话。筛选出的是‘擅长包装简历的人’。",
      dim1_good: "看真实工作交付物。直接评估代码质量、商业分析严密性与解决问题的执行力。",
      dim_time: "录用决策周期",
      dim2_bad: "3 至 6 周漫长的简历初筛、HR 打电话、业务面委会排期。",
      dim2_good: "48 至 72 小时。检阅完交付物即可直接发起签约交流。",
      dim_sme_risk: "企业资金与试错风险",
      dim3_bad: "极高。全额发放 3 个月实习工资（合计 $3,000–$6,000）+ 资深人员上百小时带教，招错人全打水漂。",
      dim3_good: "极低。仅需支付微小任务津贴（$50–$150）。即使不合适，企业也切实拥有了该项产出资产。",
      dim_freshman: "低年级新生机会",
      dim4_bad: "几乎为零。因‘缺乏过往名企经验’直接被 ATS 算法剔除。",
      dim4_good: "100% 凭实力说话。只要你能做出惊艳的成果，创始人就能亲眼看到你的才华。",
      dim_outcome: "最坏情况结果",
      dim5_bad: "浪费几个月时间与高昂成本，招来一个根本无法胜任的员工。",
      dim5_good: "以极低的任务预算，换来了一份完整可用的商业分析或自动化脚本。",

      // Vanguard Form
      vanguard_badge: "首期先锋准入",
      vanguard_title: "申领您的先锋凭证。\n加入新加坡微实习开拓者生态。",
      vanguard_subtitle: "我们首期（2026 年 Q4）仅开放 30 家新加坡先锋中小企业及 200 位来自 NUS / NTU / SMU 的高潜学生名额。在下方即时生成您的实体风格先锋凭据。",
      form_heading: "1. 选择身份并填写信息",
      form_role_label: "我的入驻身份：",
      role_sme: "🏢 新加坡本地企业 / 雇主",
      role_student: "🎓 高等学府学子 / 人才",
      form_name_label: "您的全名 / 企业全称：",
      form_contact_label: "企业邮箱或 WHATSAPP：",
      form_focus_label: "核心专业 / 业务方向：",
      opt_biz: "产品与商业分析 (Analytics)",
      opt_tech: "软件开发与 AI 数据脚本 (Tech & AI)",
      opt_mkt: "增长营销与短视频内容 (Marketing)",
      opt_ops: "运营优化与供应链自动化 (Operations)",
      form_submit_btn: "即刻生成我的先锋通行证 🎟️",

      // Ticket
      tkt_holder: "通行证持有者：",
      tkt_role: "身份标识：",
      tkt_cohort: "入驻期次：",
      tkt_focus: "核心专长方向：",
      tkt_copy: "复制凭证编号",
      tkt_note: "请妥善保存此编号，作为首期试点优先受邀凭据。",

      // Footer
      footer_motto: "“搞定真实任务。赢得企业赞赏。直接斩获录用。”",
      footer_col1: "商业备忘录",
      footer_col2: "本地生态网络",
      footer_col3: "联系方式与创始团队",
      footer_link_sme: "SME 试点伙伴计划",
      footer_link_student: "NUS/NTU 先锋工作站",
      footer_link_truth: "传统简历病理分析"
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

    // Update text content of all [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        // preserve HTML if any, or replace
        el.innerHTML = dict[key];
      }
    });

    // Update Lang button text
    if (lang === 'en') {
      langLabel.textContent = '中文 (ZH)';
    } else {
      langLabel.textContent = 'English (EN)';
    }

    // Save in storage
    localStorage.setItem('microintern_lang', lang);
  }

  // Load saved language or default to en
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

      // Update active tabs
      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      // Update active case panels
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
  const contactInput = document.getElementById('contactEmail');
  const domainSelect = document.getElementById('taskFocus');

  // Ticket Preview Elements
  const ticketIdEl = document.getElementById('ticket-id');
  const ticketNameEl = document.getElementById('ticket-name');
  const ticketRoleEl = document.getElementById('ticket-role');
  const ticketFocusEl = document.getElementById('ticket-focus');
  const ticketBadgeEl = document.getElementById('ticket-badge');
  const copyPassBtn = document.getElementById('copy-pass-btn');

  // Generate Unique Vanguard Serial
  function generateSerial(role) {
    const prefix = role === 'sme' ? 'SG-SME' : 'SG-TALENT';
    const randNum = Math.floor(1000 + Math.random() * 9000);
    return `${prefix}-${randNum}`;
  }

  // Update Ticket role badge when radio changes
  roleRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      const role = e.target.value;
      if (role === 'sme') {
        ticketRoleEl.textContent = currentLang === 'zh' ? '新加坡 SME 雇主' : 'SINGAPORE SME';
        ticketRoleEl.className = 'field-val-pill badge badge-yellow';
        fullNameInput.placeholder = currentLang === 'zh' ? '例如：Marcus Tan 或 PayBridge SEA' : 'e.g. Marcus Tan or PayBridge SEA';
      } else {
        ticketRoleEl.textContent = currentLang === 'zh' ? '高校高潜学子 (NUS/NTU)' : 'NUS/NTU/SMU TALENT';
        ticketRoleEl.className = 'field-val-pill badge badge-lime';
        fullNameInput.placeholder = currentLang === 'zh' ? '例如：Darren Lim (NUS Year 1)' : 'e.g. Darren Lim (NUS Year 1)';
      }
    });
  });

  // Handle Form Submission
  vanguardForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedRole = document.querySelector('input[name="userRole"]:checked').value;
    const name = fullNameInput.value.trim();
    const domain = domainSelect.value;

    if (!name) return;

    // Generate new ticket id
    const newSerial = generateSerial(selectedRole);

    // Update ticket DOM
    ticketIdEl.textContent = newSerial;
    ticketNameEl.textContent = name;
    ticketFocusEl.textContent = domain;

    if (selectedRole === 'sme') {
      ticketRoleEl.textContent = currentLang === 'zh' ? '新加坡 SME 雇主' : 'SINGAPORE SME';
      ticketRoleEl.className = 'field-val-pill badge badge-yellow';
    } else {
      ticketRoleEl.textContent = currentLang === 'zh' ? '高校高潜学子 (NUS/NTU)' : 'NUS/NTU/SMU TALENT';
      ticketRoleEl.className = 'field-val-pill badge badge-lime';
    }

    // Visual pop animation on ticket
    const ticketEl = document.getElementById('vanguard-ticket');
    ticketEl.style.transform = 'scale(1.03) rotate(-1deg)';
    ticketEl.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    setTimeout(() => {
      ticketEl.style.transform = 'scale(1) rotate(0deg)';
    }, 250);

    const successMsg = currentLang === 'zh' 
      ? `🎉 先锋通行证已生成：${newSerial}`
      : `🎉 Vanguard Pass Generated: ${newSerial}`;
    showToast(successMsg);
  });

  // Copy Pass ID functionality
  copyPassBtn.addEventListener('click', () => {
    const passId = ticketIdEl.textContent;
    navigator.clipboard.writeText(passId).then(() => {
      const msg = currentLang === 'zh' 
        ? `✅ 凭证编号 [${passId}] 已复制到剪贴板！` 
        : `✅ Pass ID [${passId}] copied to clipboard!`;
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
    }, 3200);
  }

});
