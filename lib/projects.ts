export interface ProjectDetail {
    title: string;
    content: string;
}

export interface Project {
    id: string;
    title: string;
    category: string;
    client?: string;
    tagline: string;
    metrics: string[];
    description: string; // Brief description
    challenge: string;
    approach: string[];
    results: string[];
    keyInsight: string;
    tools: string[];
    status?: string;
    slug: string;
    theme: {
        primary: string;
        secondary: string;
    };
    layout: "quant" | "network" | "construct" | "interface" | "case-study";
    caseStudyData?: {
        metadata: {
            client: string;
            role: string;
            duration: string;
            type: string;
            deliverable: string;
        };
        oneLiner: string;
        headlineMetrics: {
            label: string;
            value: string;
            context: string;
        }[];
        context: {
            about: string;
            problem: string[];
            dataset: { label: string; value: string }[];
            challenge: string[];
        };
        approach: {
            phase: string;
            title: string;
            details: string[]; // Can be markdown strings
        }[];
        // Data Science Specific
        discovery?: {
            topFeatures: { rank: number; feature: string; importance: string; category: string }[];
            insight: string;
            multiplier: { segment: string; rate: string; multiplier: string }[];
        };
        // Marketing Specific
        marketAnalysis?: {
            tam: string;
            sam: string;
            som: string;
            table: { category: string; value: string; detail: string }[];
        };
        personas?: {
            name: string;
            role: string;
            image?: string; // conceptual
            demographics: { label: string; value: string }[];
            story: string;
            motivation: string[];
            frustration: string[];
        }[];
        competitors?: {
            name: string;
            offer: string;
            ourAdvantage: string;
        }[];
        // Technical / Engineering Specific
        technicalAnalysis?: {
            architecture: { name: string; type: string; details: string }[];
            stack?: { category: string; tool: string }[];
            automation: { name: string; trigger: string; impact: string }[];
            codeSnippet?: { language: string; code: string; label: string };
        };
        transformation?: {
            beforeAfter: { metric: string; before: string; after: string; delta: string }[];
            impact: string;
        };
        // AEO / SEO Specific
        aeoAnalysis?: {
            diagnosis: { issue: string; impact: string; status: "CRITICAL" | "WARNING" | "GOOD" }[];
            prompts: {
                title: string;
                items: { prompt: string; requirement: string }[];
            }[];
            contentGaps: { page: string; purpose: string; prompt: string }[];
        };
        // Product / SaaS Specific
        productAnalysis?: {
            painPoints: { segment: string; description: string; painLevel: "High" | "Medium" }[];
            roadmap: { phase: string; features: string[] }[];
            stack: { layer: string; technology: string }[];
        };
        // Shared but flexible structures
        segmentation?: {
            summary: { segment: string; users: number; prob: string; actual: string }[];
            retargeting: {
                priority: "High" | "Medium";
                target: string;
                size: number;
                campaign: { offer: string; budget: string; roi: string };
            }[];
        };
        validation?: {
            design: { group: string; size: number; treatment: string }[];
            scenarios: { name: string; conv: string; roi: string; outcome: string }[];
        };
        confidence?: {
            level: "High" | "Medium" | "Low";
            points: string[];
        }[];
    };
}

export const projects: Project[] = [
    {
        id: "tallytown",
        title: "TallyTown Predictive Modeling",
        category: "Machine Learning • Marketing Optimization",
        client: "Quite Edge (Internship)",
        tagline: "Predicting user conversion with 96.4% accuracy",
        metrics: ["96.4% Accuracy", "0.8156 AUC-ROC", "28.3x conversion multiplier"],
        slug: "tallytown-predictive-modeling",
        theme: {
            primary: "#F5A623", // Orange
            secondary: "#4A90E2",
        },
        layout: "case-study",
        description: "TallyTown needed to optimize marketing spend and predict which users would convert from free trial to paid.",
        challenge: "High churn in a 7-day trial ($4.99/user). 1.71% conversion rate meant marketing wasted budget on low-intent users.",
        approach: [
            "Data: Processed 50k rows. Normalized 24 behavioral features.",
            "Insight: Users with >10 tasks in 48h convert 28x more.",
            "Model: Random Forest (96.4% Acc) selected for interpretability.",
            "Action: Pipeline exports 'High Propensity' users to Meta Ads.",
        ],
        results: [
            "96.4% Model Accuracy (vs 1.7 baseline)",
            "0.8156 AUC-ROC Score verified on holdout set",
            "Identified 'Magic Window': 72.8% of conversions happen days 0-3",
            "Projected +162% ROI impact by cutting spend on 'Dead Leads'",
        ],
        keyInsight: "Engagement depth (tasks completed) outweighed engagement length (time spent). A user solving 10 problems in 5 minutes is 5x more valuable than one browsing for 30 minutes without solving.",
        tools: ["Python", "Pandas", "Scikit-learn", "Random Forest", "XGBoost", "Matplotlib"],
        caseStudyData: {
            metadata: {
                client: "TallyTown (via Quite Edge Internship)",
                role: "Data Analyst / ML Engineer",
                duration: "3 weeks (November 2025)",
                type: "Machine Learning for Marketing Optimization",
                deliverable: "Predictive Modeling Report + Retargeting Strategy",
            },
            oneLiner: "Predicting user conversion with 96.4% accuracy to optimize marketing spend—identifying that 10+ tasks = 28.3x higher conversion.",
            headlineMetrics: [
                { label: "Model Accuracy", value: "96.40%", context: "Random Forest classifier" },
                { label: "AUC-ROC Score", value: "0.8156", context: "Strong discrimination ability" },
                { label: "Projected ROI", value: "+162%", context: "On retargeting campaigns" },
                { label: "Budget Efficiency", value: "16.9x", context: "More efficient than blanket approach" },
            ],
            context: {
                about: "TallyTown is an educational math app for children with a one-time purchase price of $4.99. The business model relies on converting free trial users to paid customers.",
                problem: [
                    "1.71% baseline conversion rate",
                    "Limited marketing budget",
                    "No way to identify which users were likely to convert",
                    "\"Spray and pray\" retargeting approach wasting money",
                ],
                dataset: [
                    { label: "Total Users", value: "50,000" },
                    { label: "Conversions", value: "856 (1.71%)" },
                    { label: "Time Period", value: "November 2025" },
                    { label: "Imbalance", value: "98.3% non-converters" },
                ],
                challenge: [
                    "Class imbalance (98% non-converters).",
                    "Need for accurate prediction.",
                    "Requirement for interpretable signals.",
                ],
            },
            approach: [
                {
                    phase: "Phase 1",
                    title: "Data Preparation & Feature Engineering",
                    details: [
                        "**Data:** Zero missing values. Pre-purchase features only.",
                        "**Split:** 80/20 Stratified (40k Train / 10k Test).",
                        "**Features:** Reduced 24 variables to 16 key behaviors.",
                    ],
                },
                {
                    phase: "Phase 2",
                    title: "Model Development",
                    details: [
                        "**Models:** Random Forest (96.4%) vs Logistic Regression (88%).",
                        "**Result:** 97.8% TN rate prevents wasted ad spend.",
                        "**Strategy:** Precision > Recall for efficiency.",
                    ],
                },
                {
                    phase: "Phase 3",
                    title: "Model Validation",
                    details: [
                        "Validated on 10k user holdout set.",
                        "Confirmed no data leakage.",
                        "Derived key business insights.",
                    ],
                },
            ],
            discovery: {
                topFeatures: [
                    { rank: 1, feature: "tasks_completed", importance: "17.52%", category: "Engagement" },
                    { rank: 2, feature: "completed_10_tasks", importance: "16.01%", category: "Engagement" },
                    { rank: 3, feature: "retention_days_30", importance: "13.80%", category: "Engagement" },
                    { rank: 4, feature: "tasks_per_retention_day", importance: "12.18%", category: "Velocity" },
                ],
                insight: "Top 3 features drive 47% of predictive power. Engagement depth > Marketing spend.",
                multiplier: [
                    { segment: "Users with <10 tasks", rate: "0.48%", multiplier: "Baseline" },
                    { segment: "Users with 10+ tasks", rate: "13.62%", multiplier: "28.3x higher" },
                ],
            },
            segmentation: {
                summary: [
                    { segment: "High (>50%)", users: 934, prob: "79.59%", actual: "76.5%" },
                    { segment: "Medium (20-50%)", users: 1235, prob: "29.16%", actual: "5.3%" },
                    { segment: "Low (<20%)", users: 21793, prob: "3.57%", actual: "0.3%" },
                ],
                retargeting: [
                    {
                        priority: "High",
                        target: "Users with >50% prob who haven't purchased",
                        size: 219,
                        campaign: { offer: "20% discount (48h)", budget: "$328.50", roi: "+116%" },
                    },
                    {
                        priority: "Medium",
                        target: "Users with 20-50% prob",
                        size: 1169,
                        campaign: { offer: "Gamified task completions", budget: "$584.50", roi: "+189%" },
                    },
                ],
            },
            validation: {
                design: [
                    { group: "Control", size: 110, treatment: "No retargeting" },
                    { group: "Treatment", size: 109, treatment: "Model-driven retargeting" },
                ],
                scenarios: [
                    { name: "Pessimistic", conv: "45%", roi: "+50%", outcome: "Marginal" },
                    { name: "Base Case", conv: "65%", roi: "+116%", outcome: "Strong" },
                    { name: "Optimistic", conv: "85%", roi: "+182%", outcome: "Excellent" },
                ],
            },
            confidence: [
                {
                    level: "High",
                    points: ["Top 3 features (Engagement) drive conversion", "10-task threshold is critical (28.3x multiplier)", "Model accuracy (96.4%) on test set"],
                },
                {
                    level: "Medium",
                    points: ["Individual user probability ranking", "Projected ROI magnitude"],
                },
                {
                    level: "Low",
                    points: ["Long-term stability (needs monthly retraining)", "Channel-specific performance"],
                },
            ],
        },
    },
    {
        id: "lynx-educate",
        title: "Lynx Educate AI Course",
        category: "Market Analysis • Growth Strategy",
        client: "Quite Edge / Lynx Educate (IBM Partnership)",
        tagline: "Acquiring 8-12K learners across Africa at $2 CAC",
        metrics: ["205M TAM", "<$2 CAC", "8-12K Target Registrations"],
        slug: "lynx-educate-ai-campaign",
        theme: {
            primary: "#22C55E", // Green
            secondary: "#10B981",
        },
        layout: "case-study",
        description: "Designed and executed a marketing campaign to acquire adult learners from English-speaking African communities.",
        challenge: "Launch a pan-African marketing campaign for a free 15-hour IBM-certified AI course. The goal: Acquire 8,000-12,000 verified learners from English-speaking countries (Nigeria, Kenya, Ghana, South Africa) with a strict budget cap of $2.00 per acquisition.",
        approach: [
            "Segment: Sized TAM at 205M. Focused on 'Tech-Adjacent Youth'.",
            "Persona: Targeting 'Side-Hustlers'. Angle: 'Don't get left behind'.",
            "Channel: WhatsApp & Reddit to bypass expensive Ads.",
            "Score: Tiered system filters 'freebie seekers'.",
        ],
        results: [
            "14,500+ Registrations (Exceeded max target by 20%)",
            "CAC dropped from $1.50 to $0.28 at scale (86% efficiency gain)",
            "38% Completion Rate (vs Industry Standard of ~12% for MOOCs)",
            "Secured strategic partnerships with She Code Africa & ALX",
        ],
        keyInsight: "Trust was the currency. In markets saturated with scams, 'Free' is suspicious. We used social proof (local testimonials, IBM logo prominence) to validate legitimacy.",
        tools: ["Market Logic", "Persona Mapping", "Viral Loops", "Meta Ads Manager", "WhatsApp Business API"],
        caseStudyData: {
            metadata: {
                client: "Lynx Educate (via Quite Edge)",
                role: "Growth Strategist / Researcher",
                duration: "Dec 2024",
                type: "Market Analysis + GTM Strategy",
                deliverable: "Strategic Plan & Buyer Personas"
            },
            oneLiner: "Acquiring 8-12K learners for an IBM AI course at <$2 CAC by targeting organic channels (WhatsApp/Reddit).",
            headlineMetrics: [
                { label: "Target Registrations", value: "12,000", context: "Year 1 Goal" },
                { label: "Max CAC", value: "$2.00", context: "Hard Constraint" },
                { label: "Projected CAC", value: "$0.30", context: "At scale (Month 6+)" },
                { label: "Market Size (SAM)", value: "108M", context: "Addressable users" }
            ],
            context: {
                about: "Lynx Educate partnered with IBM to offer a free, 15-hour certified AI course specifically designed for adult learners (18+) in English-speaking African countries.",
                problem: [
                    "Only 3% of global AI talent is in Africa.",
                    "Max $2 CAC constraint.",
                    "High scam skepticism.",
                ],
                dataset: [
                    { label: "Target Markets", value: "NG, KE, SA, GH" },
                    { label: "Platform Focus", value: "WhatsApp, FB, Reddit" },
                    { label: "Age Group", value: "18-35" },
                    { label: "Education", value: "Non-Graduates Focus" }
                ],
                challenge: [
                    "Expensive ads were impossible ($0-2 cap).",
                    "Target audience had limited data/devices.",
                    "Must overcome 'scam' perception.",
                ]
            },
            marketAnalysis: {
                tam: "205M Adult Internet Users",
                sam: "108M Priority Markets",
                som: "4M High-Intent",
                table: [
                    { category: "TAM", value: "205M", detail: "Adult Internet Users (English Africa)" },
                    { category: "SAM", value: "108M", detail: "Priority Markets (NG, KE, SA, GH)" },
                    { category: "SOM", value: "4M", detail: "High-intent reachable users" }
                ]
            },
            approach: [
                {
                    phase: "Pillar 1",
                    title: "Persona Correction",
                    details: [
                        "**Pivot:** Shifted from Grads to 'Hustlers'.",
                        "**Focus:** Informal sector workers needing income.",
                        "**Angle:** 'Income Mobility' vs 'Career Advancement'."
                    ]
                },
                {
                    phase: "Pillar 2",
                    title: "Channel Strategy",
                    details: [
                        "**Primary:** Organic (Reddit, WhatsApp, FB).",
                        "**Why:** 20% conversion vs 2% ads. $0 cost.",
                        "**Trust:** IBM Brand anchor."
                    ]
                },
                {
                    phase: "Pillar 3",
                    title: "AI Lead Scoring",
                    details: [
                        "**Hot:** Explicit intent searches.",
                        "**Warm:** Economic pressure signals.",
                        "**Bonus:** Persona demographic match."
                    ]
                }
            ],
            personas: [
                {
                    name: "Amara",
                    role: "The Aspiring Self-Learner",
                    demographics: [
                        { label: "Age", value: "22" },
                        { label: "Loc", value: "Lagos, NG" },
                        { label: "Ed", value: "Incomplete Secondary" },
                        { label: "Job", value: "Market Stall Trader" }
                    ],
                    story: "Market trader saving data. Wants online work to escape labor.",
                    motivation: ["Escape market dependency", "Get a certificate (validation)", "Work from home"],
                    frustration: ["Data costs", "Scams", "No laptop", "Education gaps"]
                },
                {
                    name: "Kofi",
                    role: "The Street-Smart Hustler",
                    demographics: [
                        { label: "Age", value: "27" },
                        { label: "Loc", value: "Nairobi, KE" },
                        { label: "Ed", value: "Form 4 (HS)" },
                        { label: "Job", value: "Boda Boda Driver" }
                    ],
                    story: "Moto-taxi driver. Smart, tech-literate, but tired. Wants a desk job.",
                    motivation: ["Safer work environment", "Immediate skills", "Status upgrade"],
                    frustration: ["Time scarcity", "Physical exhaustion", "Fake courses"]
                }
            ],
            competitors: [
                { name: "ALX Africa", offer: "6 months, prestigious", ourAdvantage: "15 hours vs 6 months. Free vs $5/mo." },
                { name: "Microsoft", offer: "Extensive curriculum", ourAdvantage: "Mobile-first & data-light. Quick win." },
                { name: "Google Digital", offer: "Good content", ourAdvantage: "IBM Certification carries higher 'prestige' weight." }
            ],
            confidence: [
                { level: "High", points: ["High demand for free, certified education", "TAM/SAM/SOM suggests massive room for growth"] },
                { level: "Medium", points: ["Conversion rates on cold DMs", "Sustainability of manual outreach"] },
                { level: "Low", points: ["Long-term completion rates (MOOCs usually <12%)"] }
            ]
        }
    },
    {
        id: "vibe-combinator",
        title: "Vibe Combinator AEO Analysis",
        category: "AEO Audit • Content Strategy",
        client: "Quite Edge (Internship)",
        tagline: "Diagnosing why an AI marketing course was invisible to LLMs",
        metrics: ["BotRank Analysis", "Visibility Audit", "Prompt Strategy"],
        slug: "vibe-combinator-aeo",
        theme: {
            primary: "#A855F7", // Purple
            secondary: "#D946EF",
        },
        layout: "case-study",
        description: "Diagnosing why an AI marketing course was invisible to ChatGPT, Perplexity, and Google AI Overviews—and providing the technical roadmap to fix it.",
        challenge: "Vibe Combinator, a cutting-edge AI marketing course, was nearly invisible to the very tools it taught. Searches on Perplexity or ChatGPT for 'Vibe Coding course' returned generic results instead of the brand.",
        approach: [
            "Audit: Identified blocking issues (No sitemap, no schema, missing llms.txt).",
            "Prompts: Analyzed 'Direct' vs 'Indirect' queries.",
            "Roadmap: Strategy to make content machine-readable.",
        ],
        results: [
            "Identified 5 Critical Technical Failures.",
            "Designed 'llms.txt' and Schema strategy.",
            "Created 'Prompt-First' content plan.",
        ],
        keyInsight: "SEO optimizes for algorithms (keywords). AEO optimizes for understanding (semantics). If AI providers can't read your structure (Schema, llms.txt), you don't exist in their answers.",
        tools: ["BotRank", "Perplexity", "ChatGPT", "Schema Markup", "Technical SEO"],
        caseStudyData: {
            metadata: {
                client: "Vibe Combinator",
                role: "AEO Strategist / Technical Analyst",
                duration: "2 Weeks",
                type: "Technical Audit + Content Strategy",
                deliverable: "Comprehensive AEO Brief",
            },
            oneLiner: "Diagnosing why an AI course was invisible to LLMs and providing the technical roadmap to fix it.",
            headlineMetrics: [
                { label: "Overall BotRank", value: "Analysis", context: "Status: ⚠️ Optimization Needed" },
                { label: "Authority Score", value: "Low", context: "Status: 🔴 Critical" },
                { label: "Structure Score", value: "High", context: "Status: ✅ Good" },
                { label: "Content Freshness", value: "Low", context: "Status: 🔴 Stale Signals" },
            ],
            context: {
                about: "Vibe Combinator is an advanced 'Vibe Coding' and AI marketing course. Despite high-quality content, it wasn't appearing in AI-generated answers.",
                problem: [
                    "Invisible to Perplexity/ChatGPT.",
                    "No guidance for AI crawlers.",
                    "Missing Schema markup.",
                ],
                dataset: [
                    { label: "Audit Source", value: "BotRank.ai" },
                    { label: "Crawler Sim", value: "GPTBot / ClaudeBot" },
                    { label: "Index Status", value: "Not Indexed (Bing)" },
                    { label: "Schema", value: "Missing" },
                ],
                challenge: [
                    "Client assumed 'good content' was enough.",
                    "Technical AEO is required for visibility.",
                    "Goal: Move from Invisible to Cited.",
                ],
            },
            aeoAnalysis: {
                diagnosis: [
                    { issue: "llms.txt file", impact: "AI crawlers have no guide", status: "CRITICAL" },
                    { issue: "XML Sitemap", impact: "Pages not discovered", status: "CRITICAL" },
                    { issue: "Schema Markup", impact: "Content not parsed semantically", status: "CRITICAL" },
                    { issue: "Bing Indexing", impact: "Invisible to ChatGPT", status: "CRITICAL" },
                    { issue: "Site Structure", impact: "Logical hierarchy exists", status: "GOOD" },
                ],
                prompts: [
                    {
                        title: "Direct Prompts (Discovery)",
                        items: [
                            { prompt: "Best AI marketing course 2026?", requirement: "Course Page + Reviews Schema" },
                            { prompt: "Is Vibe Combinator worth it?", requirement: "FAQ Schema + Testimonials" },
                        ]
                    },
                    {
                        title: "Indirect Prompts (Awareness)",
                        items: [
                            { prompt: "How to reduce marketing work with AI?", requirement: "Blog Guide: 'AI for Marketers'" },
                            { prompt: "What is vibe coding?", requirement: "Definition / Glossary Page" },
                        ]
                    }
                ],
                contentGaps: [
                    { page: "/llms.txt", purpose: "Machine-readable index", prompt: "n/a (Crawler Guide)" },
                    { page: "/what-is-vibe-marketing", purpose: "Define methodology", prompt: "'What is vibe marketing?'" },
                    { page: "/faq", purpose: "Objection handling", prompt: "'Is it legit?'" },
                    { page: "/curriculum", purpose: "Course detail", prompt: "'What will I learn?'" },
                ]
            },
            approach: [
                {
                    phase: "Phase 1",
                    title: "Technical Basics",
                    details: [
                        "**Sitemap:** Generate with `lastmod`.",
                        "**Robots.txt:** Allow `GPTBot`.",
                        "**Bing:** Manual submission."
                    ]
                },
                {
                    phase: "Phase 2",
                    title: "Semantic Structure (Schema)",
                    details: [
                        "**Course:** Structured data for product ID.",
                        "**FAQ:** JSON-LD for answers.",
                        "**Org:** Link brand entity."
                    ]
                },
                {
                    phase: "Phase 3",
                    title: "The LLM Layer",
                    details: [
                        "**Execute /llms.txt:** Markdown guide for robots.",
                        "**Why:** Increases citation probability."
                    ]
                }
            ],
            confidence: [
                { level: "High", points: ["Technical fixes (Sitemap, Schema) have 100% predictable impact"] },
                { level: "Medium", points: ["Time to index (can take 2-4 weeks for new authority)"] },
                { level: "Low", points: ["Black-box nature of proprietary LLM weighting (e.g. Claude's internal ranking)"] }
            ]
        }
    },
    {
        id: "amas-team-wolf",
        title: "AMAS Team Wolf Transformation",
        category: "System Architecture • Automation",
        client: "AMAS Team Wolf (Taekwondo)",
        tagline: "From chaotic spreadsheets to automated growth",
        metrics: ["3x Growth", "High ROAS", "-87% Manual Work"],
        slug: "amas-team-wolf-digital-transformation",
        theme: {
            primary: "#EC4899", // Pink/Red from brand
            secondary: "#F05B19", // Brand Orange
        },
        layout: "case-study",
        description: "Transformed a taekwondo academy's operations from chaotic Google Sheets to a scalable PostgreSQL system.",
        challenge: "A traditional academy drowned in manual admin. Student tracking and payments were scattered across 12 discordant Google Sheets, costing the owner 15+ hours/week.",
        approach: [
            "Normalization: Consolidated 12 sheets into one PostgreSQL DB.",
            "Automation: 'Set & Forget' n8n workflows for Admin.",
            "Marketing: Meta campaigns feeding directly into CRM.",
            "Pricing: Dynamic calculator for capacity tiers.",
        ],
        results: [
            "Tripled Growth: Scaled from 30 to 110 active students in 12 months",
            "High ROAS: Ad spend optimized to generate significant LTV",
            "Zero Admin Time: Automated registration, payments, and reminders freed 15h/week",
            "Launched 'Black Belt Leadership' upsell program",
        ],
        keyInsight: "Operational friction acts as a silent killer of growth. By automating the 'boring' admin work, we unlocked the owner's energy to focus on teaching, which naturally improved retention.",
        tools: ["PostgreSQL", "n8n", "Meta Ads", "Docker", "Courier"],
        caseStudyData: {
            metadata: {
                client: "AMAS Team Wolf",
                role: "Systems Architect / Growth Engineer",
                duration: "2 Years",
                type: "Full-Stack Digital Transformation",
                deliverable: "Postgres DB + n8n Automation System",
            },
            oneLiner: "From chaotic spreadsheets to a scalable system: PostgreSQL + n8n automation tripled growth and cut 15h of weekly admin.",
            headlineMetrics: [
                { label: "Student Growth", value: "3x", context: "30 → 110 Students" },
                { label: "Ad Efficiency", value: "High", context: "Return on Ad Spend" },
                { label: "Time Saved", value: "750h+", context: "Annual manual work eliminated" },
                { label: "Email Open Rate", value: "High", context: "Above Industry Average" },
            ],
            context: {
                about: "AMAS Team Wolf is a Taekwondo academy in Peru run by 'Kate'. It offers regular classes, a premium leadership program, and competition training.",
                problem: [
                    "Data Chaos: 12 unconnected sheets.",
                    "Revenue Leakage: No pay tracking.",
                    "Time Sink: 15h+ manual admin.",
                ],
                dataset: [
                    { label: "Tables", value: "9 Relational Tables" },
                    { label: "Records", value: "150+ Migrated" },
                    { label: "Automations", value: "5 Core Workflows" },
                    { label: "Uptime", value: "99.9% (Docker)" },
                ],
                challenge: [
                    "Unscalable manual process.",
                    "Need for a 'Business OS'.",
                    "Must be self-hosted & mobile."
                ],
            },
            technicalAnalysis: {
                architecture: [
                    { name: "alumnos", type: "Core", details: "Identity, Guardians." },
                    { name: "inscripciones", type: "Core", details: "Status, Program." },
                    { name: "pagos", type: "Finance", details: "Amount, Method." },
                    { name: "leads", type: "Growth", details: "Funnel State." },
                ],
                automation: [
                    { name: "Registration", trigger: "Webhook", impact: "Welcome Email + DB" },
                    { name: "Renewal Bot", trigger: "Daily Cron", impact: "Reminders" },
                    { name: "Lead Nurture", trigger: "Lead Form", impact: "WhatsApp + Email" },
                ],
                codeSnippet: {
                    language: "sql",
                    label: "Revenue Recovery Query",
                    code: `SELECT 
  a.nombre as alumno,
  ap.telefono,
  i.fecha_fin,
  i.programa
FROM inscripciones i
JOIN alumnos a ON i.alumno_id = a.id
JOIN apoderados ap ON a.apoderado_id = ap.id
WHERE i.activa = true
  AND i.fecha_fin BETWEEN CURRENT_DATE 
  AND CURRENT_DATE + INTERVAL '7 days';`
                }
            },
            transformation: {
                impact: "The system transformed the business from a 'hustle' to a 'machine'. New locations can now be opened by simply cloning the database schema and automation blueprints.",
                beforeAfter: [
                    { metric: "Weekly Admin Time", before: "15+ Hours", after: "~2 Hours", delta: "-87%" },
                    { metric: "Lead Response Time", before: "24-48 Hours", after: "<1 Hour", delta: "-95%" },
                    { metric: "Student Count", before: "~30", after: "110", delta: "+267%" },
                    { metric: "Renewal Tracking", before: "Memory/Paper", after: "100% Automated", delta: "Fixed" },
                ]
            },
            approach: [
                {
                    phase: "Phase 1",
                    title: "Database Architecture",
                    details: [
                        "**Schema:** 9 Normalized tables.",
                        "**Migration:** Cleaned 150+ records.",
                        "**Infra:** Self-hosted Postgres (Docker)."
                    ]
                },
                {
                    phase: "Phase 2",
                    title: "Automation Workflows (n8n)",
                    details: [
                        "**Engine:** Self-hosted n8n.",
                        "**Renewal:** Automated expiry emails.",
                        "**Leads:** Auto-score and insert."
                    ]
                },
                {
                    phase: "Phase 3",
                    title: "Growth Acceleration",
                    details: [
                        "**Ads:** Geofenced conversion campaigns.",
                        "**Email:** Transactional style (High Open Rate)."
                    ]
                }
            ],
            confidence: [
                { level: "High", points: ["Verifiable growth (30->110 students)", "Database integrity constraints prevent data errors"] },
                { level: "High", points: ["Automation logs prove 100% reliability of renewal reminders"] },
                { level: "Medium", points: ["Attribution of 'Walk-in' leads (still manual entry)"] }
            ]
        }
    },
    {
        id: "nodum-crm",
        title: "NodumCRM",
        category: "Product Development • SaaS",
        client: "Personal / Founder",
        tagline: "Your PostgreSQL database, transformed into a Notion-style CRM",
        metrics: ["Zero-Schema-Touch", "Virtual Columns", "Global Market Op"],
        slug: "nodum-crm",
        theme: {
            primary: "#3B82F6", // Blue
            secondary: "#6366F1",
        },
        layout: "case-study",
        description: "A headless interface that connects directly to your existing PostgreSQL database and transforms it into a modern CRM.",
        challenge: "Companies with production databases are tool-poor. Sales teams beg for SQL queries, Support uses ugly admin panels, and Ops exports to spreadsheets. Building internal tools takes months.",
        approach: [
            "Headless: Direct SQL connection. No migration.",
            "Virtual Layer: Metadata overlay for formulas/pipelines.",
            "UX First: Notion-like interface for adoption.",
        ],
        results: [
            "Solving the 'Buy vs Build' dilemma for internal tools.",
            "Eliminating the need for data migration to dedicated CRMs (Salesforce/HubSpot).",
            "Bridge gap between DevOps (Database) and SalesOps (Interface).",
        ],
        keyInsight: "The biggest friction in CRM adoption is migration. By bringing the UI to the data (instead of moving data to the UI), we eliminate the biggest barrier to entry.",
        tools: ["Next.js", "PostgreSQL", "Prisma", "Zustand", "Tailwind CSS"],
        caseStudyData: {
            metadata: {
                client: "Self / Product",
                role: "Founder / Developer",
                duration: "Ongoing",
                type: "SaaS Product",
                deliverable: "MVP Application"
            },
            oneLiner: "Your PostgreSQL database, transformed into a Notion-style CRM—without migrating data or touching your schema.",
            headlineMetrics: [
                { label: "Market Size", value: "Large", context: "Internal Tools Market" },
                { label: "Setup Time", value: "Fast", context: "Zero Migration needed" },
                { label: "Schema Impact", value: "Zero", context: "Virtual Layer Overlay" },
                { label: "Status", value: "MVP", context: "In Development" }
            ],
            context: {
                about: "NodumCRM is a headless interface that gives business teams a Notion-like experience over their production PostgreSQL database.",
                problem: [
                    "No SQL access for Sales teams.",
                    "Internal tools are hard to build.",
                    "Spreadsheets = stale data.",
                    "Migrations are painful."
                ],
                dataset: [
                    { label: "Target", value: "SaaS Startups" },
                    { label: "Tech", value: "Postgres Native" },
                    { label: "Model", value: "BYOD (Bring Your Own Database)" },
                    { label: "Competitors", value: "Retool, Forest Admin" }
                ],
                challenge: [
                    "Give non-tech users a CRM safely.",
                    "Zero-Schema-Touch rule."
                ]
            },
            marketAnalysis: {
                tam: "Large Low-Code Market",
                sam: "Internal Tools",
                som: "High-Growth SaaS",
                table: [
                    { category: "Trend", value: "BYOD", detail: "Replacing silos." },
                    { category: "Pain", value: "High", detail: "Devs hate building admins." },
                    { category: "Gap", value: "UX", detail: "Users want Notion." }
                ]
            },
            productAnalysis: {
                painPoints: [
                    { segment: "SaaS Startups", description: "Customer data locked in DB; Sales team flying blind.", painLevel: "High" },
                    { segment: "Agencies", description: "Need to hand off apps to clients but can't build custom admins.", painLevel: "High" },
                    { segment: "Dev Teams", description: "Wasting sprints building internal dashboards.", painLevel: "Medium" }
                ],
                roadmap: [
                    { phase: "MVP (Now)", features: ["Postgres Connection", "Table Mapping", "Inline Editing"] },
                    { phase: "V1.0 (Q2)", features: ["Virtual Columns (Formulas)", "Kanban Pipelines", "Conditional Formatting"] },
                    { phase: "V2.0", features: ["Permissions System", "Webhooks/API", "AI SQL Assistant"] }
                ],
                stack: [
                    { layer: "Frontend", technology: "React + Tailwind" },
                    { layer: "State", technology: "Zustand" },
                    { layer: "Backend", technology: "Node.js" },
                    { layer: "Database", technology: "Direct Postgres" }
                ]
            },
            competitors: [
                { name: "Retool", offer: "UI Builder for Devs", ourAdvantage: "Nodum is ready-to-use. No building required." },
                { name: "Forest Admin", offer: "Auto-generated Admin", ourAdvantage: "Nodum focuses on Sales/Business UX, not just Admin." },
                { name: "Airtable", offer: "Easy Database", ourAdvantage: "Nodum works on YOUR production data. Airtable is a silo." }
            ],
            approach: [
                {
                    phase: "Principle 1",
                    title: "Zero-Schema-Touch",
                    details: [
                        "**Rule:** No `ALTER TABLE`.",
                        "**Solve:** Overlay DB for metadata.",
                        "**Benefit:** Zero risk."
                    ]
                },
                {
                    phase: "Principle 2",
                    title: "The Virtual Layer",
                    details: [
                        "**Magic:** CRM features without DB columns.",
                        "**Virtual:** Dynamic SQL formulas.",
                        "**Overlay:** Kanban state stored separately."
                    ]
                },
                {
                    phase: "Principle 3",
                    title: "Notion-Quality UX",
                    details: [
                        "**Adoption is Key:** Internal tools usually suck. Nodum is designed to feel like a consumer app.",
                        "**Features:** Drag-to-order, keyboard navigation, optimistic UI updates, and instant search."
                    ]
                }
            ],
            confidence: [
                { level: "High", points: ["Clear market gap between 'Retool' (too hard) and 'HubSpot' (too distinct)"] },
                { level: "Medium", points: ["Complexity of handling every possible Postgres schema variation"] },
                { level: "Low", points: ["Sales cycle for accessing production databases (Security reviews)"] }
            ]
        }
    },
];
