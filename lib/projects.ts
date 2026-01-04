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
    layout: "quant" | "network" | "construct" | "interface";
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
        layout: "quant",
        description: "TallyTown needed to optimize marketing spend and predict which users would convert from free trial to paid.",
        challenge: "TallyTown, a math education app ($4.99/user), faced high churn during the 7-day free trial. With a dataset of 50,000 distinct user sessions and a 1.71% conversion rate (856 paid users), the marketing team was burning budget on broad retargeting without pinpointing high-intent users.",
        approach: [
            "Data Ingestion & Cleaning: Processed 50k rows using Pandas. Handled missing values (SMOTE for class imbalance) and normalized 24 behavioral features (e.g., 'tasks_completed', 'session_duration', 'parental_dashboard_visits').",
            "Feature Engineering: Discovered 'Magic Metric': Users completing >10 tasks in first 48h had a 28.3x higher conversion probability. Created interaction velocity features.",
            "Model Selection: Trained Logistic Regression (Baseline: 82%), XGBoost (94%), and Random Forest (96.4%). Selected Random Forest for interpretability and stability.",
            "Deployment Strategy: Built a daily batch pipeline generating CSVs of 'High Propensity' users for direct upload to Meta Ads Custom Audiences.",
        ],
        results: [
            "96.4% Model Accuracy (vs 1.7 baseline)",
            "0.8156 AUC-ROC Score verified on holdout set",
            "Identified 'Magic Window': 72.8% of conversions happen days 0-3",
            "Projected +162% ROI impact by cutting spend on 'Dead Leads'",
        ],
        keyInsight: "Engagement depth (tasks completed) outweighed engagement length (time spent). A user solving 10 problems in 5 minutes is 5x more valuable than one browsing for 30 minutes without solving.",
        tools: ["Python", "Pandas", "Scikit-learn", "Random Forest", "XGBoost", "Matplotlib"],
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
        layout: "network",
        description: "Designed and executed a marketing campaign to acquire adult learners from English-speaking African communities.",
        challenge: "Launch a pan-African marketing campaign for a free 15-hour IBM-certified AI course. The goal: Acquire 8,000-12,000 verified learners from English-speaking countries (Nigeria, Kenya, Ghana, South Africa) with a strict budget cap of $2.00 per acquisition.",
        approach: [
            "Market Segmentation (TAM-SAM-SOM): Sized the TAM at 205M users. Narrowed SOM to 'Tech-Adjacent Urban Youth' reachable via mobile data.",
            "Persona-Driven Messaging: Developed 'Amara' (The Side-Hustler) and 'Kofi' (The Career-Switcher). Tested 40+ ad creatives. Winner: 'Don't get left behind by AI' (Fear of Missing Out).",
            "Grassroots Distribution: Bypassed expensive LinkedIn ads (CPC >$5). Leveraged WhatsApp Groups, Reddit Communities (r/Nigeria, r/Kenya), and micro-influencers in tech hubs.",
            "Algorithmic Lead Scoring: Built a tiered scoring system. +60pts for direct intent signals, +10pts for persona match. Filtered out 'freebie seekers' vs. 'career learners'.",
        ],
        results: [
            "14,500+ Registrations (Exceeded max target by 20%)",
            "CAC dropped from $1.50 to $0.28 at scale (86% efficiency gain)",
            "38% Completion Rate (vs Industry Standard of ~12% for MOOCs)",
            "Secured strategic partnerships with She Code Africa & ALX",
        ],
        keyInsight: "Trust was the currency. In markets saturated with scams, 'Free' is suspicious. We used social proof (local testimonials, IBM logo prominence) to validate legitimacy.",
        tools: ["Market Logic", "Persona Mapping", "Viral Loops", "Meta Ads Manager", "WhatsApp Business API"],
    },
    {
        id: "amas-team-wolf",
        title: "AMAS Team Wolf Transformation",
        category: "Database Architecture • Automation",
        client: "AMAS Team Wolf",
        tagline: "From spreadsheets to 40x ROAS and 267% growth",
        metrics: ["30-40x ROAS", "30→110 Students", "9 Database Tables"],
        slug: "amas-team-wolf-digital-transformation",
        theme: {
            primary: "#EC4899", // Pink
            secondary: "#8B5CF6",
        },
        layout: "construct",
        description: "Transformed a taekwondo academy's operations from chaotic Google Sheets to a scalable PostgreSQL system.",
        challenge: "A traditional Taekwondo academy with 30 students was drowning in manual admin. Student tracking, payments, and attendance were scattered across 12 discordant Google Sheets. The owner spent 20 hours/week on admin, preventing growth.",
        approach: [
            "Database Normalization (PostgreSQL): Consolidated 12 sheets into a single relational DB. Designed schemas for 'Students', 'Guardians', 'Memberships', 'Attendance', and 'Payments'.",
            "Lifecycle Automation (n8n): Built 'Set & Forget' workflows. 1. New Lead -> WhatsApp Welcome sequence. 2. Missed Payment -> Automatic polite reminder. 3. 90-Day Absence -> Re-engagement offer.",
            "Hyper-Local Performance Marketing: Launched 'Confidence for Kids' Meta campaigns targeting parents within 5km radius. Used Lead Forms to feed directly into the new CRM.",
            "Dynamic Pricing Engine: Built a calculator to determine optimal pricing tiers based on class capacity utilization.",
        ],
        results: [
            "267% Growth: Scaled from 30 to 110 active students in 12 months",
            "40x ROAS: Ad spend optimized to ~$500/mo generating ~$20k/mo LTV",
            "Zero Admin Time: Automated registration, payments, and reminders freed 20h/week",
            " Launched 'Black Belt Leadership' upsell program (+$5k MMR)",
        ],
        keyInsight: "Operational friction acts as a silent killer of growth. By automating the 'boring' admin work, we unlocked the owner's energy to focus on teaching, which naturally improved retention.",
        tools: ["PostgreSQL", "n8n", "Meta Ads", "Stripe API", "Webhooks", "React"],
    },
    {
        id: "nodum-crm",
        title: "NodumCRM",
        category: "Product Development • SaaS",
        status: "In Development",
        tagline: "Your PostgreSQL database, transformed into a Notion-style CRM",
        metrics: ["Zero-Schema-Touch", "Notion-like UX", "Virtual Layer"],
        slug: "nodum-crm",
        theme: {
            primary: "#3B82F6", // Blue
            secondary: "#6366F1",
        },
        layout: "interface",
        description: "A headless interface that connects directly to your existing PostgreSQL database and transforms it into a modern CRM.",
        challenge: "SaaS Startups often build their own internal tools (Admin Panels) from scratch or use restrictive no-code tools (Retool) that don't scale. They need the UX of Notion but with the data integrity of their production PostgreSQL database.",
        approach: [
            "Headless Architecture: Decoupled the UI from the data storage. Nodum acts as a 'skin' over any Postgres DB.",
            "Zero-Schema-Touch Philosophy: Nodum reads the schema but never alters it. 'Virtual Columns' (formulas, tags, status) are stored in a separate metadata layer, preventing database pollution.",
            "The 'Notion' Experience: Implemented Drag-and-Drop Kanbans, Inline Editing, and Rich Text properties that feel native.",
            "Real-Time Sync: Utilized Postgres NOTIFY/LISTEN channels to update the UI instantly when data changes on the backend.",
        ],
        results: [
            "Beta Launch: Onboarded 5 pilot startups with active production databases",
            "Speed: Reduces internal tool build time from weeks to minutes",
            "Security: Row-Level Security (RLS) support ensured compliant data access",
        ],
        keyInsight: "Developers hate building admin panels, but business teams need them. By making the admin panel feel like a consumer productivity app (Notion), we bridge the gap between Dev Ops and Sales Ops.",
        tools: ["Next.js", "PostgreSQL", "Prisma", "WebSockets", "Zustand"],
    },
    {
        id: "vibe-combinator",
        title: "Vibe Combinator AEO Analysis",
        category: "SEO/AEO Research • Content Strategy",
        client: "Quite Edge",
        tagline: "Positioning content for AI-first discovery",
        metrics: ["AI Citation Strategy", "Content Restructuring"],
        slug: "vibe-combinator-aeo",
        theme: {
            primary: "#A855F7", // Purple
            secondary: "#D946EF",
        },
        layout: "quant",
        description: "Analysis of how AI language models discover, evaluate, and cite content sources.",
        challenge: "With the rise of AI assistants (ChatGPT, Perplexity), traditional SEO is evolving into AEO. Needed a strategy for AI citation.",
        approach: [
            "Analyzed citation patterns: AI favors authoritative, structured content.",
            "Content Structure Requirements: Question-based headers, concise factual statements.",
            "Trust Signals: Author credentials, freshness signals.",
        ],
        results: [
            "Strategic recommendations for content restructuring to optimize for AI citation and discovery.",
        ],
        keyInsight: "AI extracts snippets from concise, factual statements found in the first paragraph or under question-based headers.",
        tools: ["Content Analysis", "LLM Behavior Research", "SEO/AEO Strategy"],
    },
];
