/**
 * Elpitiya Plantations PLC - Sustainability Management Performance Dashboard
 * Single Evidence-Based Sustainability Management System
 */

// ==========================================
// 1. DATA REPOSITORY & STATE
// ==========================================

const HISTORICAL_KPIS = [
    {
        category: "Environmental",
        kpi: "Total GHG emissions / carbon footprint",
        unit: "tCO2e",
        direction: "Lower",
        fy22: 8151,
        fy23: 8173,
        fy24: 7462,
        fy25: 6817,
        fy26: 8013,
        note: "Comparable five-year absolute emissions series. Rebounded in FY25/26.",
        sdg: "SDG 13",
        sdgName: "Climate Action",
        sdgTarget: "13.2 - Integrate climate-change measures into policies, strategies and planning",
        secondarySdgs: "SDG 7, SDG 12"
    },
    {
        category: "Environmental",
        kpi: "Energy consumption",
        unit: "GJ",
        direction: "Lower / production-adjusted",
        fy22: 155717,
        fy23: 188594,
        fy24: 240346,
        fy25: 163548,
        fy26: 203570,
        note: "Absolute energy increased; interpret in context with production volume and energy intensity.",
        sdg: "SDG 7",
        sdgName: "Affordable and Clean Energy",
        sdgTarget: "7.3 - Improve the rate of energy-efficiency improvement",
        secondarySdgs: "SDG 13"
    },
    {
        category: "Environmental",
        kpi: "Energy intensity",
        unit: "GJ/MT output",
        direction: "Lower",
        fy22: null,
        fy23: 7.17,
        fy24: 8.55,
        fy25: 5.65,
        fy26: 6.39,
        note: "FY2021/22 not comparable. Comparable trend available from FY2022/23 onward.",
        sdg: "SDG 7",
        sdgName: "Affordable and Clean Energy",
        sdgTarget: "7.3 - Improve the rate of energy-efficiency improvement",
        secondarySdgs: "SDG 13"
    },
    {
        category: "Environmental",
        kpi: "Rainwater contribution / reliance",
        unit: "%",
        direction: "Higher",
        fy22: 49.0,
        fy23: 62.0,
        fy24: 71.7,
        fy25: 82.0,
        fy26: 59.0,
        note: "FY2023/24 (~71.7%) calculated from harvested rainwater / total water withdrawal. Peaked in FY25 at 82%.",
        sdg: "SDG 6",
        sdgName: "Clean Water and Sanitation",
        sdgTarget: "6.4 - Increase water-use efficiency and ensure sustainable withdrawals",
        secondarySdgs: "SDG 13, SDG 15"
    },
    {
        category: "Environmental",
        kpi: "Solid waste generation - headline",
        unit: "MT",
        direction: "Lower",
        fy22: 6561,
        fy23: 2398,
        fy24: 2262,
        fy25: 299,
        fy26: 333,
        note: "Headline reported tonnage dropped substantially; definition and reporting scope may vary. Establish waste-diversion KPI.",
        sdg: "SDG 12",
        sdgName: "Responsible Consumption and Production",
        sdgTarget: "12.5 - Substantially reduce waste generation through prevention, reduction, recycling and reuse",
        secondarySdgs: "SDG 13"
    },
    {
        category: "Social",
        kpi: "Total employees",
        unit: "No.",
        direction: "Context",
        fy22: 4747,
        fy23: 4628,
        fy24: 4547,
        fy25: 4407,
        fy26: 4563,
        note: "Workforce size context metric across tea, rubber, oil palm and diversifications.",
        sdg: "SDG 8",
        sdgName: "Decent Work and Economic Growth",
        sdgTarget: "8.5 - Full and productive employment and decent work for all",
        secondarySdgs: "SDG 5, SDG 10"
    },
    {
        category: "Social",
        kpi: "Employee retention rate",
        unit: "%",
        direction: "Higher",
        fy22: 89.0,
        fy23: 86.0,
        fy24: 80.0,
        fy25: 79.0,
        fy26: 82.0,
        note: "Comparable trend as reported. Down 7pp from FY22 baseline, recovered +3pp in FY26.",
        sdg: "SDG 8",
        sdgName: "Decent Work and Economic Growth",
        sdgTarget: "8.5 - Achieve full and productive employment and decent work",
        secondarySdgs: "SDG 3"
    },
    {
        category: "Social",
        kpi: "Female representation",
        unit: "%",
        direction: "Maintain / improve",
        fy22: 53.0,
        fy23: 51.0,
        fy24: 49.0,
        fy25: 49.0,
        fy26: 49.0,
        note: "Overall workforce female representation. Senior-management female representation baseline is required.",
        sdg: "SDG 5",
        sdgName: "Gender Equality",
        sdgTarget: "5.5 - Ensure women's full and effective participation and equal opportunities",
        secondarySdgs: "SDG 8, SDG 10"
    },
    {
        category: "Social",
        kpi: "New recruits",
        unit: "No.",
        direction: "Context",
        fy22: 401,
        fy23: 532,
        fy24: 839,
        fy25: 784,
        fy26: 582,
        note: "Workforce replacement and recruitment activity indicator.",
        sdg: "SDG 8",
        sdgName: "Decent Work and Economic Growth",
        sdgTarget: "8.5 - Achieve full and productive employment and decent work",
        secondarySdgs: "SDG 5, SDG 8"
    },
    {
        category: "Social",
        kpi: "Investment in training",
        unit: "Rs. Mn",
        direction: "Higher subject to outcomes",
        fy22: 6.5,
        fy23: 7.4,
        fy24: 15.0,
        fy25: 14.0,
        fy26: 19.0,
        note: "Financial spending on capability building. Input measure; pair with outcome metrics.",
        sdg: "SDG 4",
        sdgName: "Quality Education",
        sdgTarget: "4.4 - Increase relevant skills for employment and decent jobs",
        secondarySdgs: "SDG 8"
    },
    {
        category: "Social",
        kpi: "Total training hours",
        unit: "Hours",
        direction: "Higher",
        fy22: 7255,
        fy23: 11076,
        fy24: 72330,
        fy25: 85178,
        fy26: 84850,
        note: "Substantial 10x capability scale-up across estate and factory workforce.",
        sdg: "SDG 4",
        sdgName: "Quality Education",
        sdgTarget: "4.4 - Increase relevant skills for employment and decent jobs",
        secondarySdgs: "SDG 8"
    },
    {
        category: "Social",
        kpi: "Average training hours / employee",
        unit: "Hours",
        direction: "Higher",
        fy22: 1.5,
        fy23: 2.4,
        fy24: 16.0,
        fy25: 18.0,
        fy26: 19.0,
        note: "Exceptional human-capital growth from 1.5 hrs in FY22 to 19.0 hrs in FY26.",
        sdg: "SDG 4",
        sdgName: "Quality Education",
        sdgTarget: "4.4 - Increase relevant skills for employment and decent jobs",
        secondarySdgs: "SDG 8"
    },
    {
        category: "Stakeholder",
        kpi: "Community investment",
        unit: "Rs. Mn",
        direction: "Outcome-focused",
        fy22: 111.0,
        fy23: 231.0,
        fy24: 200.0,
        fy25: 274.0,
        fy26: 146.0,
        note: "Input measure; should be linked with measurable social and health outcomes.",
        sdg: "SDG 10",
        sdgName: "Reduced Inequalities",
        sdgTarget: "10.2 - Promote social, economic and political inclusion",
        secondarySdgs: "SDG 1, SDG 3, SDG 4, SDG 6"
    },
    {
        category: "Stakeholder",
        kpi: "Payments to suppliers",
        unit: "Rs. Mn",
        direction: "Context",
        fy22: 1304.0,
        fy23: 3516.0,
        fy24: 2761.0,
        fy25: 3883.0,
        fy26: 3528.0,
        note: "Economic value distributed to suppliers and smallholders.",
        sdg: "SDG 8",
        sdgName: "Decent Work and Economic Growth",
        sdgTarget: "8.3 - Support productive activities, entrepreneurship and growth of enterprises",
        secondarySdgs: "SDG 12"
    },
    {
        category: "Stakeholder",
        kpi: "Local supplier spending",
        unit: "%",
        direction: "Higher",
        fy22: 99.0,
        fy23: 98.0,
        fy24: 40.0,
        fy25: 41.0,
        fy26: 46.95,
        note: "Likely reporting boundary or definition change after FY2022/23; caution on direct multi-year comparison.",
        sdg: "SDG 8",
        sdgName: "Decent Work and Economic Growth",
        sdgTarget: "8.3 - Support productive activities, entrepreneurship and growth of enterprises",
        secondarySdgs: "SDG 12"
    },
    {
        category: "Health & Safety",
        kpi: "Fatalities",
        unit: "No.",
        direction: "Maintain Zero",
        fy22: 0,
        fy23: 0,
        fy24: 0,
        fy25: 0,
        fy26: 0,
        note: "Zero fatalities maintained across all five reporting years.",
        sdg: "SDG 8",
        sdgName: "Decent Work and Economic Growth",
        sdgTarget: "8.8 - Protect labour rights and promote safe and secure working environments",
        secondarySdgs: "SDG 3"
    },
    {
        category: "Health & Safety",
        kpi: "High-consequence injuries",
        unit: "No.",
        direction: "Maintain Zero",
        fy22: 0,
        fy23: 0,
        fy24: 0,
        fy25: 1,
        fy26: 0,
        note: "Returned to 0 in FY25/26 after 1 incident in FY24/25.",
        sdg: "SDG 8",
        sdgName: "Decent Work and Economic Growth",
        sdgTarget: "8.8 - Protect labour rights and promote safe and secure working environments",
        secondarySdgs: "SDG 3"
    },
    {
        category: "Health & Safety",
        kpi: "Recordable injuries",
        unit: "No.",
        direction: "Lower (<30)",
        fy22: null,
        fy23: null,
        fy24: null,
        fy25: 121,
        fy26: 70,
        note: "Fell from 121 to 70 (-42.1%). Target ceiling is <30 incidents.",
        sdg: "SDG 8",
        sdgName: "Decent Work and Economic Growth",
        sdgTarget: "8.8 - Protect labour rights and promote safe and secure working environments",
        secondarySdgs: "SDG 3"
    },
    {
        category: "Health & Safety",
        kpi: "Lost hours from work-related injuries",
        unit: "Hours",
        direction: "Lower",
        fy22: null,
        fy23: null,
        fy24: null,
        fy25: 5237,
        fy26: 2236,
        note: "Substantial reduction from 5,237 to 2,236 hours (-57.3%).",
        sdg: "SDG 8",
        sdgName: "Decent Work and Economic Growth",
        sdgTarget: "8.8 - Protect labour rights and promote safe and secure working environments",
        secondarySdgs: "SDG 3"
    },
    {
        category: "Stakeholder / Supply Chain",
        kpi: "New suppliers ESG-screened",
        unit: "No.",
        direction: "Higher",
        fy22: null,
        fy23: null,
        fy24: null,
        fy25: 60,
        fy26: 140,
        note: "Screened supplier count expanded +133%. Transitioning to % screened and compliant.",
        sdg: "SDG 12",
        sdgName: "Responsible Consumption and Production",
        sdgTarget: "12.6 - Encourage companies to adopt sustainable practices and reporting",
        secondarySdgs: "SDG 8"
    },
    {
        category: "Stakeholder / Supply Chain",
        kpi: "Community beneficiaries",
        unit: "No.",
        direction: "Higher",
        fy22: 1000,
        fy23: 1500,
        fy24: null,
        fy25: 34010,
        fy26: 24989,
        note: "Reach metric for health camps, food security, and estate welfare programmes.",
        sdg: "SDG 10",
        sdgName: "Reduced Inequalities",
        sdgTarget: "10.2 - Promote social and economic inclusion",
        secondarySdgs: "SDG 1, SDG 2, SDG 3"
    }
];

// ==========================================
// 2. THE 20 BOARD-LEVEL FRAMEWORK KPIS (Appendix 1 & Part D)
// ==========================================

const BOARD_KPIS = [
    {
        id: 1,
        dimension: "Environmental",
        kpi: "Scope 1 + Scope 2 GHG intensity",
        unit: "tCO2e/MT",
        primarySdg: "SDG 13",
        sdgTitle: "Climate Action",
        currentBaseline: "TBE intensity (Absolute: 8,013 tCO2e)",
        targetDirection: "Reduce further & establish consistent intensity baseline",
        historicalData: "Partial",
        status: "Attention",
        owner: "Head of Sustainability + Operations",
        reviewFreq: "Annual / Quarterly",
        comment: "Absolute GHG series exists across 5 years (8,151 down to 8,013 tCO2e), but intensity per metric ton of production requires standardized normalization. FY26 rebound requires root-cause action."
    },
    {
        id: 2,
        dimension: "Environmental",
        kpi: "% material Scope 3 categories quantified/assured",
        unit: "%",
        primarySdg: "SDG 13",
        sdgTitle: "Climate Action",
        currentBaseline: "TBE",
        targetDirection: "Quantify material Scope 3 categories",
        historicalData: "No / New",
        status: "Baseline Required",
        owner: "Head of Sustainability + Operations",
        reviewFreq: "Annual",
        comment: "New framework KPI. 5-year comparable series is not available. Scope 3 supply chain and fertilizer footprint baseline must be established."
    },
    {
        id: 3,
        dimension: "Environmental",
        kpi: "Energy intensity",
        unit: "GJ/MT",
        primarySdg: "SDG 7",
        sdgTitle: "Affordable & Clean Energy",
        currentBaseline: "6.39 GJ/MT",
        targetDirection: "Lower than current; investigate adverse annual movement",
        historicalData: "Yes / Partial",
        status: "Attention",
        owner: "Engineering / Operations",
        reviewFreq: "Quarterly",
        comment: "Comparable trend from FY2022/23 (7.17 -> 8.55 -> 5.65 -> 6.39). FY26 worsened versus the 5.65 GJ/MT low. Requires energy management action for high-power factories."
    },
    {
        id: 4,
        dimension: "Environmental",
        kpi: "Renewable electricity generated / total electricity consumed",
        unit: "%",
        primarySdg: "SDG 7",
        sdgTitle: "Affordable & Clean Energy",
        currentBaseline: "TBE ratio",
        targetDirection: "Increase renewable share once ratio baseline is established",
        historicalData: "Partial",
        status: "Baseline Required",
        owner: "Engineering / Operations",
        reviewFreq: "Quarterly",
        comment: "Rooftop solar and hydro generation are disclosed, but formal percentage ratio of total electricity consumed needs standard calculation."
    },
    {
        id: 5,
        dimension: "Environmental",
        kpi: "Operational water demand met through rainwater",
        unit: "%",
        primarySdg: "SDG 6",
        sdgTitle: "Clean Water & Sanitation",
        currentBaseline: "59.0%",
        targetDirection: "Increase rainwater contribution & investigate current-year decline",
        historicalData: "Yes",
        status: "Watch",
        owner: "Estate Operations",
        reviewFreq: "Quarterly",
        comment: "Long-term improvement from 49% baseline to 59%, but fell significantly from 82% peak in FY25. Investigate water harvesting infrastructure and storage efficiency."
    },
    {
        id: 6,
        dimension: "Environmental",
        kpi: "Freshwater intensity",
        unit: "m3/MT",
        primarySdg: "SDG 6",
        sdgTitle: "Clean Water & Sanitation",
        currentBaseline: "TBE",
        targetDirection: "Establish baseline then reduce freshwater intensity",
        historicalData: "No / New",
        status: "Baseline Required",
        owner: "Estate Operations",
        reviewFreq: "Quarterly",
        comment: "Requires a consistent new baseline pairing factory and irrigation freshwater withdrawal against crop tonnage."
    },
    {
        id: 7,
        dimension: "Environmental",
        kpi: "Waste diverted from disposal",
        unit: "%",
        primarySdg: "SDG 12",
        sdgTitle: "Responsible Consumption",
        currentBaseline: "TBE diversion rate (333 MT headline waste)",
        targetDirection: "Establish waste-diversion baseline & increase diversion",
        historicalData: "No / Data Caution",
        status: "Watch",
        owner: "Estate Managers + Sustainability / Agriculture",
        reviewFreq: "Quarterly",
        comment: "Waste tonnage reduced from 6,561 to 333 MT, but definitions/scope may vary. Moving to formal percentage diverted from landfill/incineration through composting and recycling."
    },
    {
        id: 8,
        dimension: "Environmental",
        kpi: "Hectares protected / restored / agroforestry managed",
        unit: "ha",
        primarySdg: "SDG 15",
        sdgTitle: "Life on Land",
        currentBaseline: "TBE / recent partial data only",
        targetDirection: "Establish protected/agroforestry baseline and increase",
        historicalData: "Partial",
        status: "Baseline Required",
        owner: "Estate Managers + Sustainability / Agriculture",
        reviewFreq: "Annual",
        comment: "Agroforestry baseline initiatives exist; 5-year comparable series is being consolidated for biodiversity conservation zones."
    },
    {
        id: 9,
        dimension: "Social",
        kpi: "Fatalities / high-consequence injuries",
        unit: "No.",
        primarySdg: "SDG 8",
        sdgTitle: "Decent Work & Economic Growth",
        currentBaseline: "0 fatalities; 0 high-consequence injuries",
        targetDirection: "Maintain zero",
        historicalData: "Yes / Partial",
        status: "Positive",
        owner: "HR / OHS + Estate Management",
        reviewFreq: "Monthly",
        comment: "0 fatalities maintained across all 5 years. High-consequence injuries eliminated (0 in FY26 vs 1 in FY25)."
    },
    {
        id: 10,
        dimension: "Social",
        kpi: "Recordable injury count / rate",
        unit: "No. / rate",
        primarySdg: "SDG 8",
        sdgTitle: "Decent Work & Economic Growth",
        currentBaseline: "70 injuries",
        targetDirection: "< 30 incidents (Target T08)",
        historicalData: "Partial",
        status: "Priority",
        owner: "HR / OHS + Estate Management",
        reviewFreq: "Monthly",
        comment: "Strong recent progress from 121 in FY25 to 70 in FY26 (-42.1%). Still above the consultant target ceiling of <30 incidents."
    },
    {
        id: 11,
        dimension: "Social",
        kpi: "Lost hours from work-related injuries",
        unit: "Hours",
        primarySdg: "SDG 8",
        sdgTitle: "Decent Work & Economic Growth",
        currentBaseline: "2,236 lost hours",
        targetDirection: "Continue downward trajectory",
        historicalData: "Partial",
        status: "Positive",
        owner: "HR / OHS + Estate Management",
        reviewFreq: "Monthly",
        comment: "Substantial 57.3% reduction from 5,237 to 2,236 hours in FY25/26. Driven by improved field safety and rapid triage."
    },
    {
        id: 12,
        dimension: "Social",
        kpi: "Workforce under externally audited/certified OHS system",
        unit: "%",
        primarySdg: "SDG 8",
        sdgTitle: "Decent Work & Economic Growth",
        currentBaseline: "TBE / recent baseline required",
        targetDirection: "Establish baseline & expand certified coverage",
        historicalData: "No / Recent",
        status: "Baseline Required",
        owner: "HR / OHS + Estate Management",
        reviewFreq: "Annual",
        comment: "Recent audit baseline available; expanding formal ISO 45001 / RainForest Alliance OHS coverage across all divisions."
    },
    {
        id: 13,
        dimension: "Social",
        kpi: "Average formal training hours per employee",
        unit: "Hours",
        primarySdg: "SDG 4",
        sdgTitle: "Quality Education",
        currentBaseline: "19.0 hours / employee (84,850 total hrs)",
        targetDirection: "Increase from 19 while linking training to outcomes",
        historicalData: "Yes",
        status: "Positive",
        owner: "HR",
        reviewFreq: "Quarterly",
        comment: "One of the strongest improvements in the company (1.5 -> 2.4 -> 16 -> 18 -> 19 hrs). Now pairing with skill retention and field productivity metrics."
    },
    {
        id: 14,
        dimension: "Social",
        kpi: "Female representation in senior management",
        unit: "%",
        primarySdg: "SDG 5",
        sdgTitle: "Gender Equality",
        currentBaseline: "TBE senior-mgr (49% overall workforce)",
        targetDirection: "Establish senior-management baseline & improve representation",
        historicalData: "No / Recent",
        status: "Watch",
        owner: "HR",
        reviewFreq: "Annual",
        comment: "Overall female representation is 49%, down from 53% baseline. A dedicated senior-management & estate executive gender ratio must be tracked separately."
    },
    {
        id: 15,
        dimension: "Social",
        kpi: "Voluntary employee turnover",
        unit: "%",
        primarySdg: "SDG 8",
        sdgTitle: "Decent Work & Economic Growth",
        currentBaseline: "TBE voluntary turnover (Retention: 82%)",
        targetDirection: "Establish voluntary-turnover baseline & improve retention",
        historicalData: "Partial",
        status: "Attention",
        owner: "HR",
        reviewFreq: "Quarterly",
        comment: "Retention rate is 82%, below the 89% baseline. Need to isolate voluntary turnover drivers (estate vs factory vs executive) and deploy retention initiatives."
    },
    {
        id: 16,
        dimension: "Governance / Supply Chain",
        kpi: "High-risk / new suppliers screened and compliant",
        unit: "%",
        primarySdg: "SDG 12",
        sdgTitle: "Responsible Consumption",
        currentBaseline: "140 new suppliers screened (Compliance % TBE)",
        targetDirection: "Move from screening count to % screened & compliant",
        historicalData: "Partial",
        status: "Watch",
        owner: "Procurement",
        reviewFreq: "Quarterly",
        comment: "Screened suppliers grew from 60 to 140. Transitioning metric from simple count to percentage audit-compliant with ESG criteria."
    },
    {
        id: 17,
        dimension: "Governance",
        kpi: "Scheduled Board sustainability reviews completed",
        unit: "%",
        primarySdg: "SDG 16",
        sdgTitle: "Peace, Justice & Strong Institutions",
        currentBaseline: "TBE",
        targetDirection: "Define schedule & achieve full 100% completion",
        historicalData: "No / New",
        status: "Baseline Required",
        owner: "Company Secretariat / Compliance / Internal Audit",
        reviewFreq: "Quarterly",
        comment: "Board Sustainability Committee exists; establishing formal quarterly KPI review completion rate with signed minutes."
    },
    {
        id: 18,
        dimension: "Governance / Ethics",
        kpi: "Substantiated ethics cases closed within agreed SLA",
        unit: "%",
        primarySdg: "SDG 16",
        sdgTitle: "Peace, Justice & Strong Institutions",
        currentBaseline: "TBE",
        targetDirection: "Define SLA & improve closure performance to 100%",
        historicalData: "No / New",
        status: "Baseline Required",
        owner: "Company Secretariat / Compliance / Internal Audit",
        reviewFreq: "Quarterly",
        comment: "Whistleblowing and ethics governance register to be formalized with strict 30-day investigation and resolution SLAs."
    },
    {
        id: 19,
        dimension: "Financial / Innovation",
        kpi: "Revenue from value-added / non-traditional businesses",
        unit: "%",
        primarySdg: "SDG 8",
        sdgTitle: "Decent Work & Economic Growth",
        currentBaseline: "TBE revenue share",
        targetDirection: "Establish revenue-share baseline & grow value-added revenue",
        historicalData: "No / Partial",
        status: "Baseline Required",
        owner: "CEO / CFO / Strategy",
        reviewFreq: "Quarterly",
        comment: "Commercial diversification (berries, eco-tourism, specialty tea, solar power) is strategically active; formal revenue share % tracking is being configured."
    },
    {
        id: 20,
        dimension: "Stakeholder",
        kpi: "Material community programmes with independently measured outcomes",
        unit: "%",
        primarySdg: "SDG 10",
        sdgTitle: "Reduced Inequalities",
        currentBaseline: "TBE outcome % (Rs. 146 Mn spend, 24,989 beneficiaries)",
        targetDirection: "Increase independently measured programme outcomes",
        historicalData: "No / New",
        status: "Watch",
        owner: "Sustainability / HR / Community Development",
        reviewFreq: "Annual",
        comment: "Transitioning from expenditure and beneficiary headcounts to independently verified health, nutrition, and education improvement metrics."
    }
];

// ==========================================
// 3. THE 10 CONSULTANT SDG TARGET REGISTER (Appendix 2 & Section 21.1)
// ==========================================

const CONSULTANT_TARGETS = [
    {
        id: "T01",
        sdg: "SDG 2",
        goal: "Zero Hunger",
        target: "Achieve zero hunger across EPP low-country operations.",
        due: "2028",
        measure: "Zero-hunger programme coverage / food-security outcome",
        targetVal: "100%",
        unit: "% / outcome",
        review: "Annual",
        status: "Planned",
        owner: "Sustainability / Community Development",
        desc: "Expand food ration assistance, home-gardening programmes and child nutritional support across low-country tea and rubber estates by 2028."
    },
    {
        id: "T02",
        sdg: "SDG 2",
        goal: "Zero Hunger",
        target: "Extend the zero-hunger outcome to up-country operations and the entire Elpitiya Plantations Group.",
        due: "2030",
        measure: "Group-wide zero-hunger programme coverage / food-security outcome",
        targetVal: "100%",
        unit: "% / outcome",
        review: "Annual",
        status: "Planned",
        owner: "Sustainability / Community Development",
        desc: "Scale food security and nutritional interventions across all up-country estates, ensuring zero food vulnerability across the entire plantation workforce."
    },
    {
        id: "T03",
        sdg: "SDG 3",
        goal: "Good Health and Well-being",
        target: "Maintain an operational elderly home at Madakumbura by FY2026/27.",
        due: "FY2026/27",
        measure: "Number of operational elderly homes",
        targetVal: "1",
        unit: "No.",
        review: "Annual",
        status: "In Progress",
        owner: "Sustainability / HR",
        desc: "Ensure comprehensive senior healthcare, shelter and dignified elder care at the flagship Madakumbura facility."
    },
    {
        id: "T04",
        sdg: "SDG 3",
        goal: "Good Health and Well-being",
        target: "Commence the second elderly home at Dunsinane by 2028.",
        due: "2028",
        measure: "Number of operational / commenced elderly homes",
        targetVal: "2",
        unit: "No.",
        review: "Annual",
        status: "Planned",
        owner: "Sustainability / HR",
        desc: "Initiate construction and service delivery for the second dedicated plantation community elder care center at Dunsinane Estate."
    },
    {
        id: "T05",
        sdg: "SDG 4",
        goal: "Quality Education",
        target: "Use food-ration support to improve school attendance among students up to Grade 5.",
        due: "Ongoing",
        measure: "Grade 1–5 student attendance rate",
        targetVal: "TBE (>95%)",
        unit: "% attendance",
        review: "Quarterly",
        status: "In Progress",
        owner: "Community Development / HR",
        desc: "Pair morning meals and dry food support with primary school enrollment and attendance monitoring across plantation schools."
    },
    {
        id: "T06",
        sdg: "SDG 4",
        goal: "Quality Education",
        target: "Improve sanitary facilities across the identified school environment.",
        due: "Ongoing",
        measure: "Sanitary-facility improvement coverage",
        targetVal: "100%",
        unit: "% / facilities",
        review: "Quarterly",
        status: "Planned",
        owner: "Community Development / Operations",
        desc: "Provide clean water, safe WASH sanitation blocks and hygiene supplies for children in estate child development centers and schools."
    },
    {
        id: "T07",
        sdg: "SDG 8",
        goal: "Decent Work and Economic Growth",
        target: "Conduct region-wise PPE/safety-wear awareness sessions every quarter.",
        due: "Quarterly",
        measure: "Regional PPE/safety awareness sessions completed",
        targetVal: "4 sessions/region/yr",
        unit: "Sessions/yr",
        review: "Quarterly",
        status: "In Progress",
        owner: "HR / OHS + Estate Management",
        desc: "Mandatory practical workshops on protective gear, chemical handling safety, harvester ergonomics, and machinery guarding."
    },
    {
        id: "T08",
        sdg: "SDG 8",
        goal: "Decent Work and Economic Growth",
        target: "Reduce and maintain workplace injuries below 30 incidents.",
        due: "Ongoing",
        measure: "Recordable injury incidents",
        targetVal: "< 30",
        unit: "Incidents (max 30)",
        review: "Monthly",
        status: "In Progress",
        owner: "HR / OHS + Estate Management",
        desc: "Reduce recordable injuries from 70 (FY26) down below 30 through leading safety audits, hazard reporting and preventative measures."
    },
    {
        id: "T09",
        sdg: "SDG 12",
        goal: "Responsible Consumption & Production",
        target: "Improve land-use efficiency through vertical-farming and hydroponic-farming techniques.",
        due: "Ongoing",
        measure: "Area / production under vertical or hydroponic farming",
        targetVal: "TBE",
        unit: "ha / % / output",
        review: "Quarterly",
        status: "Planned",
        owner: "Estate Managers + Agriculture / Innovation",
        desc: "Deploy climate-smart agriculture, commercial berry cultivation in controlled environments, and vertical hydroponics to optimize yield per hectare."
    },
    {
        id: "T10",
        sdg: "SDG 12",
        goal: "Responsible Consumption & Production",
        target: "Increase bio-fertiliser adoption and apply selective fertiliser only where agronomically required.",
        due: "Ongoing",
        measure: "Bio-fertiliser share and selective-fertiliser intensity",
        targetVal: "TBE",
        unit: "% / kg per ha",
        review: "Quarterly",
        status: "Planned",
        owner: "Estate Managers + Agriculture / Innovation",
        desc: "Produce estate-generated compost and bio-nutrients to reduce synthetic chemical dependency and enhance soil microbial health."
    }
];

// ==========================================
// 4. UN SDG ALIGNMENT MATRIX (Section 2.3 & 19)
// ==========================================

const SDG_MATRIX = [
    {
        sdg: "SDG 2",
        name: "Zero Hunger",
        color: "#DDA63A",
        histMetrics: 0,
        frameworkKpis: 0,
        coverageRatio: "New Target Area",
        primaryTarget: "2.1 & 2.2 - End hunger and malnutrition",
        interpretation: "Consultant targets T01 and T02 establish low-country (2028) and group-wide (2030) zero hunger agendas."
    },
    {
        sdg: "SDG 3",
        name: "Good Health & Well-being",
        color: "#4C9F38",
        histMetrics: 0,
        frameworkKpis: 0,
        coverageRatio: "New Target Area",
        primaryTarget: "3.8 - Universal health coverage and elder care",
        interpretation: "Consultant targets T03 (Madakumbura elderly home) and T04 (Dunsinane elderly home) deliver dedicated community care."
    },
    {
        sdg: "SDG 4",
        name: "Quality Education",
        color: "#C5192D",
        histMetrics: 3,
        frameworkKpis: 1,
        coverageRatio: "3.0 (Strong Basis)",
        primaryTarget: "4.4 - Relevant skills for decent employment",
        interpretation: "Exceptional historical employee training foundation (19 hrs/emp) plus consultant school food/sanitation targets (T05, T06)."
    },
    {
        sdg: "SDG 5",
        name: "Gender Equality",
        color: "#FF3A21",
        histMetrics: 1,
        frameworkKpis: 1,
        coverageRatio: "1.0 (Strong Basis)",
        primaryTarget: "5.5 - Full participation in leadership and decision-making",
        interpretation: "Workforce representation tracked at 49%; next step is formalizing a senior management female leadership metric."
    },
    {
        sdg: "SDG 6",
        name: "Clean Water & Sanitation",
        color: "#26BDE2",
        histMetrics: 1,
        frameworkKpis: 2,
        coverageRatio: "0.5 (Partial Basis)",
        primaryTarget: "6.4 - Increase water-use efficiency & sustainable withdrawal",
        interpretation: "Rainwater contribution series exists (59% in FY26); adding freshwater intensity (m3/MT) as a formal Board KPI."
    },
    {
        sdg: "SDG 7",
        name: "Affordable & Clean Energy",
        color: "#FCC30B",
        histMetrics: 2,
        frameworkKpis: 2,
        coverageRatio: "1.0 (Strong Basis)",
        primaryTarget: "7.2 & 7.3 - Renewable energy and energy efficiency",
        interpretation: "Comparable energy intensity tracked from FY23 (6.39 GJ/MT); establishing renewable electricity consumption share ratio."
    },
    {
        sdg: "SDG 8",
        name: "Decent Work & Economic Growth",
        color: "#A21942",
        histMetrics: 10,
        frameworkKpis: 6,
        coverageRatio: "1.67 (Broadest Coverage)",
        primaryTarget: "8.5, 8.8 - Decent work, OHS zero-harm, economic value",
        interpretation: "Broadest historical coverage across safety, retention, training, supplier value and employment. Injury reduction is primary focus."
    },
    {
        sdg: "SDG 10",
        name: "Reduced Inequalities",
        color: "#DD1367",
        histMetrics: 2,
        frameworkKpis: 1,
        coverageRatio: "2.0 (Strong Basis)",
        primaryTarget: "10.2 - Promote social and economic inclusion",
        interpretation: "Community investments (Rs. 146 Mn) and 24,989 beneficiaries transitioning to independently measured outcome tracking."
    },
    {
        sdg: "SDG 12",
        name: "Responsible Consumption & Production",
        color: "#BF8B2E",
        histMetrics: 2,
        frameworkKpis: 2,
        coverageRatio: "1.0 (Strong Basis)",
        primaryTarget: "12.5, 12.6 - Waste reduction, sustainable practices & procurement",
        interpretation: "Solid waste management, supplier ESG screening (140 vendors), and new targets for hydroponics and bio-fertiliser."
    },
    {
        sdg: "SDG 13",
        name: "Climate Action",
        color: "#3F7E44",
        histMetrics: 1,
        frameworkKpis: 2,
        coverageRatio: "0.5 (Partial Basis)",
        primaryTarget: "13.2 - Climate-change measures in strategy and operations",
        interpretation: "5-year GHG emissions series (8,013 tCO2e); establishing Scope 1+2 intensity normalization and Scope 3 footprint."
    },
    {
        sdg: "SDG 15",
        name: "Life on Land",
        color: "#56C02B",
        histMetrics: 0,
        frameworkKpis: 1,
        coverageRatio: "New Measurement Area",
        primaryTarget: "15.2 - Sustainable forest & agroforestry management",
        interpretation: "Conservation zones, agroforestry and land restoration baseline being consolidated into the 20-KPI framework."
    },
    {
        sdg: "SDG 16",
        name: "Peace, Justice & Strong Institutions",
        color: "#00689D",
        histMetrics: 0,
        frameworkKpis: 2,
        coverageRatio: "New Measurement Area",
        primaryTarget: "16.6 - Effective, accountable and transparent institutions",
        interpretation: "Board sustainability review completion % and ethics case resolution SLA compliance."
    }
];

// ==========================================
// 5. PDCA CORRECTIVE ACTION LOG (Active Cases)
// ==========================================

let CORRECTIVE_ACTIONS = [
    {
        id: "CA-01",
        trigger: "FY25/26 GHG Emissions Rebound (+17.5% YoY to 8,013 tCO2e)",
        rootCause: "Increased factory thermal energy consumption during dry harvest peaks and fossil fuel reliance in standby generation.",
        plan: "Conduct boiler energy audit, optimize biomass boiler feed efficiency, and accelerate rooftop solar commissioning across 4 factories.",
        owner: "Head of Sustainability + Operations",
        budget: "Rs. 8.5 Mn",
        dueDate: "Q3 FY2026/27",
        status: "In Progress"
    },
    {
        id: "CA-02",
        trigger: "Energy Intensity Increase (6.39 vs 5.65 GJ/MT low)",
        rootCause: "Fluctuations in green leaf throughput volume resulting in lower factory utilization efficiency.",
        plan: "Implement smart power meters, VFDs on tea dryer fans, and schedule high-energy processes during off-peak tariff hours.",
        owner: "Engineering / Operations",
        budget: "Rs. 4.2 Mn",
        dueDate: "Q2 FY2026/27",
        status: "In Progress"
    },
    {
        id: "CA-03",
        trigger: "Rainwater Reliance Decline (Fell from 82% to 59%)",
        rootCause: "Unseasonal monsoon distribution and siltation in primary estate rainwater retention ponds.",
        plan: "De-silt 6 estate reservoirs, upgrade gutter capture systems on factory roofs, and install automated level telemetry.",
        owner: "Estate Operations",
        budget: "Rs. 3.0 Mn",
        dueDate: "Q4 FY2026/27",
        status: "Planned"
    },
    {
        id: "CA-04",
        trigger: "Employee Retention Decline (82% vs 89% Baseline)",
        rootCause: "Increased competition for estate labor and youth outward migration toward urban service sectors.",
        plan: "Introduce estate worker welfare incentives, child-care center upgrades, youth vocational scholarships, and improved plucker tools.",
        owner: "HR",
        budget: "Rs. 12.0 Mn",
        dueDate: "Q4 FY2026/27",
        status: "In Progress"
    },
    {
        id: "CA-05",
        trigger: "Supplier ESG Screening Transition from Count to Compliance %",
        rootCause: "Historical tracking only counted vendor intake numbers (140) without formal ESG compliance scoring audit.",
        plan: "Deploy standard EPP Supplier ESG Code of Conduct audit checklist with third-party verification for tier-1 suppliers.",
        owner: "Procurement",
        budget: "Rs. 1.8 Mn",
        dueDate: "Q2 FY2026/27",
        status: "Planned"
    }
];

// ==========================================
// 6. TOP 10 STRATEGIC RECOMMENDATIONS (Part F)
// ==========================================

const RECOMMENDATIONS = [
    {
        num: "01",
        title: "Establish a Single Corporate ESG Performance System",
        body: "Use the Excel workbook structure as the core master data repository. Historical series, SDG mappings, Board KPIs, and consultant targets should be controlled in one single system to avoid fragmented and conflicting reporting across departments."
    },
    {
        num: "02",
        title: "Strengthen GHG and Energy Performance Management",
        body: "The FY25/26 increase in emissions (8,013 tCO2e) and energy intensity (6.39 GJ/MT) requires root-cause analysis. Establish Scope 1+2 normalized intensity per MT and complete Scope 3 coverage before setting arbitrary reduction trajectories."
    },
    {
        num: "03",
        title: "Move from Water Availability to Water Productivity",
        body: "Rainwater reliance improved from 49% to 59% but dropped from the 82% peak. Investigate capture limitations and establish Freshwater Intensity (m3/MT) as the key decision-useful water efficiency KPI."
    },
    {
        num: "04",
        title: "Standardise Waste Measurement & Move to Diversion Rate",
        body: "Headline waste tonnage dropped from 6,561 to 333 MT, but boundary and definitions may have varied. Transition formally to percentage waste diverted from disposal (composting, recycling, biomass reuse) as the approved Board KPI."
    },
    {
        num: "05",
        title: "Strengthen Workforce Outcome Measurement",
        body: "Training hours surged to 19 hrs/employee (84,850 total hours). Management must now link training to employee productivity and career progression, establish dedicated voluntary turnover tracking, and separately baseline senior management female representation."
    },
    {
        num: "06",
        title: "Deliver the Zero-Harm Safety Pathway (<30 Injuries)",
        body: "Recordable injuries fell from 121 to 70 and lost hours from 5,237 to 2,236. The priority is to maintain zero fatalities, reduce injuries below 30, and enforce 4 mandatory quarterly PPE awareness sessions per region."
    },
    {
        num: "07",
        title: "Move Supplier ESG from Screening Counts to Compliance %",
        body: "Expanding screening from 60 to 140 new vendors is positive. The Board framework must now monitor % compliant suppliers and enforce corrective actions for non-compliant vendors."
    },
    {
        num: "08",
        title: "Shift Community Reporting from Spending to Measurable Outcomes",
        body: "Spending of Rs. 146 Mn and 24,989 beneficiaries demonstrate scale, not outcome. Major community programs (zero hunger, elderly care, education) must define baseline and verify tangible quality-of-life improvements."
    },
    {
        num: "09",
        title: "Operationalise SDG 12 Land and Input Efficiency Targets",
        body: "Establish baseline yields, water use, and cost savings for vertical farming / hydroponics (T09) and bio-fertiliser substitution (T10) to validate commercial and ecological return."
    },
    {
        num: "10",
        title: "Formalise Governance, Data Quality, and Executive Ownership",
        body: "Every KPI must have one named executive owner, one definition, one current value, one approved target or direction, and one auditable evidence trail. All missing baselines must remain TBE rather than unsupported numbers."
    }
];

// ==========================================
// 7. APP CONTROLLER
// ==========================================

const app = {
    charts: {},
    currentTab: "tab-overview",
    filters: {
        dimension: "ALL",
        status: "ALL",
        owner: "ALL",
        targetSdg: "ALL",
        targetStatus: "ALL",
        search: ""
    },

    init() {
        // Safe Lucide call
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }

        // Render Views
        this.renderBoardKpis();
        this.renderHistoricalTable();
        this.renderConsultantTargets();
        this.renderSdgMatrix();
        this.renderCorrectiveActions();
        this.renderDataDictionary();
        this.renderRecommendations();
        this.renderBoardBriefing();
        this.initCharts();
        this.setupEventListeners();
        this.setupSimulator();
    },

    // ------------------------------------------
    // Tab Navigation
    // ------------------------------------------
    switchTab(tabId) {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));

        const targetBtn = document.querySelector(`[data-tab="${tabId}"]`);
        const targetContent = document.getElementById(tabId);

        if (targetBtn) targetBtn.classList.add("active");
        if (targetContent) targetContent.classList.add("active");

        this.currentTab = tabId;

        // Trigger chart resize if navigating to analytics
        if (tabId === "tab-analytics") {
            setTimeout(() => {
                Object.values(this.charts).forEach(c => c.resize());
            }, 100);
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    },

    filterByDimension(dimName) {
        this.switchTab("tab-board-kpis");
        const select = document.getElementById("kpiDimensionFilter");
        if (select) {
            select.value = dimName;
            this.filters.dimension = dimName;
            this.renderBoardKpis();
        }
    },

    // ------------------------------------------
    // Render 20 Board KPIs Grid
    // ------------------------------------------
    renderBoardKpis() {
        const container = document.getElementById("kpiCardsContainer");
        if (!container) return;

        let filtered = BOARD_KPIS.filter(item => {
            const matchDim = this.filters.dimension === "ALL" || item.dimension.toLowerCase().includes(this.filters.dimension.toLowerCase());
            const matchStatus = this.filters.status === "ALL" || item.status.toLowerCase().includes(this.filters.status.toLowerCase());
            const matchOwner = this.filters.owner === "ALL" || item.owner === this.filters.owner;
            const matchSearch = !this.filters.search || 
                item.kpi.toLowerCase().includes(this.filters.search.toLowerCase()) ||
                item.dimension.toLowerCase().includes(this.filters.search.toLowerCase()) ||
                item.owner.toLowerCase().includes(this.filters.search.toLowerCase()) ||
                item.primarySdg.toLowerCase().includes(this.filters.search.toLowerCase());

            return matchDim && matchStatus && matchOwner && matchSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <i data-lucide="search-x" style="width: 48px; height: 48px; color: var(--text-muted); margin-bottom: 1rem;"></i>
                    <h4>No KPIs match your active filters</h4>
                    <p style="color: var(--text-secondary); margin-top: 0.5rem;">Try adjusting the dimension, status, or search keywords.</p>
                </div>
            `;
            lucide.createIcons();
            return;
        }

        container.innerHTML = filtered.map(kpi => {
            let statusClass = "status-strong";
            if (kpi.status === "Attention") statusClass = "status-moderate";
            if (kpi.status === "Priority") statusClass = "status-priority";
            if (kpi.status === "Watch") statusClass = "status-watch";
            if (kpi.status === "Baseline Required") statusClass = "status-tbe";

            return `
                <div class="kpi-card" onclick="app.showKpiModal(${kpi.id})">
                    <div class="kpi-card-header">
                        <span class="kpi-dimension-tag">${kpi.dimension}</span>
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span class="dim-status ${statusClass}">${kpi.status}</span>
                            <span class="kpi-number">#${kpi.id < 10 ? '0' + kpi.id : kpi.id}</span>
                        </div>
                    </div>
                    
                    <h4 class="kpi-card-title">${kpi.kpi}</h4>
                    
                    <div class="kpi-val-row">
                        <div>
                            <span class="kpi-target-label">Current / Baseline</span>
                            <span class="kpi-current-val">${kpi.currentBaseline}</span>
                        </div>
                        <div class="kpi-target-col">
                            <span class="kpi-target-label">Target Direction</span>
                            <span class="kpi-target-val">${kpi.targetDirection}</span>
                        </div>
                    </div>

                    <div class="kpi-meta-row">
                        <span class="sdg-chip"><i data-lucide="globe"></i> ${kpi.primarySdg}</span>
                        <span class="kpi-owner-tag" title="Owner: ${kpi.owner}">
                            <i data-lucide="user"></i> ${kpi.owner.split('+')[0].split('/')[0].trim()}
                        </span>
                    </div>
                </div>
            `;
        }).join("");

        lucide.createIcons();
    },

    // ------------------------------------------
    // KPI Modal Drilldown
    // ------------------------------------------
    showKpiModal(kpiId) {
        const kpi = BOARD_KPIS.find(k => k.id === kpiId);
        if (!kpi) return;

        document.getElementById("modalDimensionBadge").textContent = kpi.dimension;
        document.getElementById("modalDimensionBadge").className = `badge badge-${kpi.dimension.toLowerCase().includes('env') ? 'primary' : 'secondary'}`;
        document.getElementById("modalKpiTitle").textContent = `#${kpi.id}: ${kpi.kpi}`;
        document.getElementById("modalKpiSubtitle").textContent = `${kpi.primarySdg} - ${kpi.sdgTitle}`;

        const body = document.getElementById("modalKpiBody");
        body.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                    <small style="color: var(--text-muted); text-transform: uppercase; font-size: 0.675rem; font-weight: 700;">Current Baseline (FY25/26)</small>
                    <div style="font-size: 1.25rem; font-weight: 800; color: var(--text-primary); margin-top: 0.25rem;">${kpi.currentBaseline}</div>
                    <small style="color: var(--text-secondary);">${kpi.unit}</small>
                </div>
                <div style="background: var(--bg-subtle); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                    <small style="color: var(--text-muted); text-transform: uppercase; font-size: 0.675rem; font-weight: 700;">Target / Direction</small>
                    <div style="font-size: 1.1rem; font-weight: 700; color: var(--brand-green-light); margin-top: 0.25rem;">${kpi.targetDirection}</div>
                    <small style="color: var(--text-secondary);">Review: ${kpi.reviewFreq}</small>
                </div>
            </div>

            <div style="margin-bottom: 1.25rem;">
                <h5 style="margin-bottom: 0.35rem; font-size: 0.9rem;">Executive & Management Reading</h5>
                <p style="font-size: 0.825rem; color: var(--text-secondary); line-height: 1.5;">${kpi.comment}</p>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-size: 0.8rem; background: var(--bg-elevated); padding: 1rem; border-radius: var(--radius-md);">
                <div>
                    <span style="color: var(--text-muted); display: block;">Primary Executive Owner:</span>
                    <strong>${kpi.owner}</strong>
                </div>
                <div>
                    <span style="color: var(--text-muted); display: block;">Historical Data Availability:</span>
                    <strong class="badge badge-outline">${kpi.historicalData}</strong>
                </div>
            </div>
        `;

        document.getElementById("kpiModal").classList.remove("hidden");
        lucide.createIcons();
    },

    // ------------------------------------------
    // Render 5-Year Master Data Table
    // ------------------------------------------
    renderHistoricalTable() {
        const tbody = document.getElementById("historicalTableBody");
        if (!tbody) return;

        tbody.innerHTML = HISTORICAL_KPIS.map(item => `
            <tr>
                <td><span class="kpi-dimension-tag">${item.category}</span></td>
                <td><strong>${item.kpi}</strong></td>
                <td><code>${item.unit}</code></td>
                <td><small>${item.direction}</small></td>
                <td>${item.fy22 !== null ? item.fy22.toLocaleString() : '<span class="text-tbe">TBE</span>'}</td>
                <td>${item.fy23 !== null ? item.fy23.toLocaleString() : '<span class="text-tbe">TBE</span>'}</td>
                <td>${item.fy24 !== null ? item.fy24.toLocaleString() : '<span class="text-tbe">TBE</span>'}</td>
                <td>${item.fy25 !== null ? item.fy25.toLocaleString() : '<span class="text-tbe">TBE</span>'}</td>
                <td><strong>${item.fy26 !== null ? item.fy26.toLocaleString() : '<span class="text-tbe">TBE</span>'}</strong></td>
                <td><span class="sdg-chip">${item.sdg}</span></td>
                <td><small style="color: var(--text-secondary);">${item.note}</small></td>
            </tr>
        `).join("");
    },

    // ------------------------------------------
    // Render Consultant SDG Targets
    // ------------------------------------------
    renderConsultantTargets() {
        const container = document.getElementById("targetsContainer");
        if (!container) return;

        let filtered = CONSULTANT_TARGETS.filter(t => {
            const matchSdg = this.filters.targetSdg === "ALL" || t.sdg === this.filters.targetSdg;
            const matchStatus = this.filters.targetStatus === "ALL" || t.status === this.filters.targetStatus;
            return matchSdg && matchStatus;
        });

        container.innerHTML = filtered.map(t => {
            let statusBadge = "badge-primary";
            if (t.status === "In Progress") statusBadge = "badge-warning";
            if (t.status === "At Risk") statusBadge = "badge-danger";

            return `
                <div class="target-card">
                    <div class="target-header">
                        <div style="display: flex; align-items: center; gap: 0.5rem;">
                            <span class="target-id-badge">${t.id}</span>
                            <span class="sdg-chip">${t.sdg} &bull; ${t.goal}</span>
                        </div>
                        <span class="badge ${statusBadge}">${t.status}</span>
                    </div>

                    <h4 class="target-title">${t.target}</h4>
                    <p style="font-size: 0.775rem; color: var(--text-secondary); margin-bottom: 1rem;">${t.desc}</p>

                    <div class="target-meta-grid">
                        <div class="target-meta-item">
                            <span class="lbl">Measure / KPI</span>
                            <span class="val">${t.measure}</span>
                        </div>
                        <div class="target-meta-item">
                            <span class="lbl">Target Value & Unit</span>
                            <span class="val text-emerald">${t.targetVal} <small>(${t.unit})</small></span>
                        </div>
                        <div class="target-meta-item">
                            <span class="lbl">Due Milestone</span>
                            <span class="val">${t.due}</span>
                        </div>
                        <div class="target-meta-item">
                            <span class="lbl">Review Frequency</span>
                            <span class="val">${t.review}</span>
                        </div>
                    </div>

                    <div class="target-footer">
                        <span style="color: var(--text-muted);"><i data-lucide="user-check"></i> ${t.owner}</span>
                    </div>
                </div>
            `;
        }).join("");

        lucide.createIcons();
    },

    // ------------------------------------------
    // Render SDG Alignment Matrix
    // ------------------------------------------
    renderSdgMatrix() {
        const container = document.getElementById("sdgMatrixContainer");
        if (!container) return;

        container.innerHTML = SDG_MATRIX.map(sdg => `
            <div class="sdg-card">
                <div class="sdg-card-header">
                    <div class="sdg-num-box" style="background-color: ${sdg.color};">
                        ${sdg.sdg.replace('SDG ', '')}
                    </div>
                    <div>
                        <h4 class="sdg-card-title">${sdg.name}</h4>
                        <small style="color: var(--text-muted);">${sdg.sdg}</small>
                    </div>
                </div>

                <div class="sdg-metrics-count">
                    <div class="sdg-count-box">
                        <span class="num">${sdg.histMetrics}</span>
                        <span class="lbl">Hist Metrics</span>
                    </div>
                    <div class="sdg-count-box">
                        <span class="num">${sdg.frameworkKpis}</span>
                        <span class="lbl">Board KPIs</span>
                    </div>
                    <div class="sdg-count-box">
                        <span class="num" style="font-size: 0.85rem;">${sdg.coverageRatio}</span>
                        <span class="lbl">Coverage</span>
                    </div>
                </div>

                <div style="font-size: 0.75rem; margin-bottom: 0.5rem;">
                    <strong style="color: var(--text-muted);">Target Focus:</strong>
                    <p style="color: var(--text-primary); margin-top: 2px;">${sdg.primaryTarget}</p>
                </div>

                <div class="sdg-interpretation">
                    ${sdg.interpretation}
                </div>
            </div>
        `).join("");
    },

    // ------------------------------------------
    // Render PDCA Corrective Action Log
    // ------------------------------------------
    renderCorrectiveActions() {
        const tbody = document.getElementById("correctiveActionsBody");
        if (!tbody) return;

        document.getElementById("openActionsCount").textContent = CORRECTIVE_ACTIONS.filter(a => a.status !== "Completed").length;

        tbody.innerHTML = CORRECTIVE_ACTIONS.map(action => {
            let statusBadge = "badge-warning";
            if (action.status === "Completed") statusBadge = "badge-success";
            if (action.status === "At Risk") statusBadge = "badge-danger";
            if (action.status === "Planned") statusBadge = "badge-secondary";

            return `
                <tr>
                    <td><strong>${action.id}</strong></td>
                    <td style="max-width: 180px;"><strong>${action.trigger}</strong></td>
                    <td style="max-width: 220px; font-size: 0.775rem; color: var(--text-secondary);">${action.rootCause}</td>
                    <td style="max-width: 240px; font-size: 0.775rem;">${action.plan}</td>
                    <td><small>${action.owner}</small></td>
                    <td><code>${action.budget}</code></td>
                    <td><small>${action.dueDate}</small></td>
                    <td><span class="badge ${statusBadge}">${action.status}</span></td>
                    <td>
                        <button class="btn btn-icon btn-sm" onclick="app.toggleActionStatus('${action.id}')" title="Cycle Status">
                            <i data-lucide="check"></i>
                        </button>
                    </td>
                </tr>
            `;
        }).join("");

        lucide.createIcons();
    },

    toggleActionStatus(id) {
        const item = CORRECTIVE_ACTIONS.find(a => a.id === id);
        if (!item) return;

        const statuses = ["In Progress", "Completed", "Planned", "At Risk"];
        const currIdx = statuses.indexOf(item.status);
        item.status = statuses[(currIdx + 1) % statuses.length];
        this.renderCorrectiveActions();
    },

    // ------------------------------------------
    // Render ESG Data Dictionary
    // ------------------------------------------
    renderDataDictionary() {
        const tbody = document.getElementById("dictionaryTableBody");
        if (!tbody) return;

        const dictData = [
            {
                id: 1,
                kpi: "Scope 1 + Scope 2 GHG intensity",
                dim: "Environmental",
                unit: "tCO2e / MT crop",
                method: "Total Scope 1 (factory diesel/furnace oil) + Scope 2 (grid electricity) emissions ÷ MT output",
                source: "Annual Report GHG inventory & Factory Production logs",
                assurance: "Internal Review (Moving to Limited Assurance)",
                note: "FY26 absolute series is comparable; intensity denominator is being standardized."
            },
            {
                id: 2,
                kpi: "Energy intensity",
                dim: "Environmental",
                unit: "GJ / MT processed crop",
                method: "Total thermal + electrical energy (GJ) ÷ Finished crop output (MT)",
                source: "Engineering fuel logs & CEB meter readings",
                assurance: "Management Verified",
                note: "FY22 not comparable due to unit basis; use series from FY23 onward."
            },
            {
                id: 3,
                kpi: "Rainwater contribution / reliance",
                dim: "Environmental",
                unit: "% of total water demand",
                method: "(Harvested Rainwater Volume ÷ Total Operational Water Withdrawal) × 100",
                source: "Estate reservoir telemetry & water meter records",
                assurance: "Management Verified",
                note: "FY24 (71.7%) calculated from harvested rainwater vs total withdrawal."
            },
            {
                id: 4,
                kpi: "Solid waste diverted from disposal",
                dim: "Environmental",
                unit: "% diverted",
                method: "(Composted + Recycled + Reused Waste MT ÷ Total Solid Waste MT) × 100",
                source: "Estate composting yards & waste manifest logs",
                assurance: "Baseline in Progress",
                note: "Historical headline waste had scope variations; move to formal mass-balance diversion %."
            },
            {
                id: 5,
                kpi: "Recordable injury rate",
                dim: "Social / Safety",
                unit: "Count & Rate per 200,000 hrs",
                method: "(Total OSHA Recordable Injuries × 200,000) ÷ Total Hours Worked",
                source: "Estate Medical Dispensary & OHS Incident Register",
                assurance: "Audited internally / OHS Committee",
                note: "FY24 used minor injury categorization; FY25–FY26 uses standardized recordable definition."
            },
            {
                id: 6,
                kpi: "Average training hours per employee",
                dim: "Social / HR",
                unit: "Hours / employee / year",
                method: "Total Verified Training Hours ÷ Average Annual Total Headcount",
                source: "HR ERP training attendance sheets",
                assurance: "Internal HR Audit",
                note: "Comparable full 5-year series available with excellent data pedigree."
            },
            {
                id: 7,
                kpi: "Supplier ESG Screening & Compliance",
                dim: "Governance / Supply Chain",
                unit: "% screened & compliant",
                method: "(Screened & Compliant Vendors ÷ Total Active Tier-1 Suppliers) × 100",
                source: "Procurement vendor master & ESG audit questionnaires",
                assurance: "Procurement Committee Verified",
                note: "Historical numbers only counted new vendors screened (140 in FY26); converting to compliance %."
            },
            {
                id: 8,
                kpi: "Substantiated ethics cases closure SLA",
                dim: "Governance / Ethics",
                unit: "% closed in 30 days",
                method: "(Substantiated Ethics Inquiries Closed within 30 days ÷ Total Cases) × 100",
                source: "Company Secretariat / Internal Audit Whistleblowing Log",
                assurance: "Audit Committee Oversight",
                note: "New governance control KPI starting FY2026/27."
            }
        ];

        tbody.innerHTML = dictData.map(d => `
            <tr>
                <td><strong>${d.id}</strong></td>
                <td><strong>${d.kpi}</strong></td>
                <td><span class="kpi-dimension-tag">${d.dim}</span></td>
                <td><code>${d.unit}</code></td>
                <td style="font-size: 0.775rem;">${d.method}</td>
                <td style="font-size: 0.775rem; color: var(--text-secondary);">${d.source}</td>
                <td><span class="badge badge-secondary">${d.assurance}</span></td>
                <td><small style="color: var(--text-muted);">${d.note}</small></td>
            </tr>
        `).join("");
    },

    // ------------------------------------------
    // Render Top 10 Recommendations
    // ------------------------------------------
    renderRecommendations() {
        const container = document.getElementById("recommendationsContainer");
        if (!container) return;

        container.innerHTML = RECOMMENDATIONS.map((rec, idx) => `
            <div class="rec-item ${idx === 0 ? 'open' : ''}" onclick="this.classList.toggle('open')">
                <div class="rec-header">
                    <span><strong>Recommendation ${rec.num}:</strong> ${rec.title}</span>
                    <i data-lucide="chevron-down"></i>
                </div>
                <div class="rec-body">
                    ${rec.body}
                </div>
            </div>
        `).join("");

        lucide.createIcons();
    },

    // ------------------------------------------
    // Initialize Chart.js Trend Visualizations
    // ------------------------------------------
    initCharts() {
        const chartYears = ["FY 2021/22", "FY 2022/23", "FY 2023/24", "FY 2024/25", "FY 2025/26"];
        
        // Chart defaults for theme
        Chart.defaults.color = "#94a3b8";
        Chart.defaults.font.family = "'Plus Jakarta Sans', sans-serif";
        Chart.defaults.plugins.tooltip.padding = 10;
        Chart.defaults.plugins.tooltip.cornerRadius = 8;

        // 1. GHG Emissions Chart
        const ghgCtx = document.getElementById("ghgChart")?.getContext("2d");
        if (ghgCtx) {
            this.charts.ghg = new Chart(ghgCtx, {
                type: "line",
                data: {
                    labels: chartYears,
                    datasets: [
                        {
                            label: "Total GHG Emissions (tCO2e)",
                            data: [8151, 8173, 7462, 6817, 8013],
                            borderColor: "#10b981",
                            backgroundColor: "rgba(16, 185, 129, 0.1)",
                            fill: true,
                            tension: 0.35,
                            borderWidth: 3,
                            pointRadius: 6,
                            pointHoverRadius: 8,
                            pointBackgroundColor: "#10b981"
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: {
                            min: 6000,
                            max: 9000,
                            grid: { color: "rgba(255,255,255,0.05)" }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // 2. Energy Consumption & Intensity Chart
        const energyCtx = document.getElementById("energyChart")?.getContext("2d");
        if (energyCtx) {
            this.charts.energy = new Chart(energyCtx, {
                data: {
                    labels: chartYears,
                    datasets: [
                        {
                            type: "bar",
                            label: "Energy Consumption (GJ)",
                            data: [155717, 188594, 240346, 163548, 203570],
                            backgroundColor: "rgba(56, 189, 248, 0.35)",
                            borderColor: "#38bdf8",
                            borderWidth: 1,
                            borderRadius: 6,
                            yAxisID: "y"
                        },
                        {
                            type: "line",
                            label: "Energy Intensity (GJ/MT)",
                            data: [null, 7.17, 8.55, 5.65, 6.39],
                            borderColor: "#f59e0b",
                            backgroundColor: "#f59e0b",
                            borderWidth: 3,
                            tension: 0.3,
                            pointRadius: 6,
                            yAxisID: "y1"
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: "top", labels: { boxWidth: 12 } }
                    },
                    scales: {
                        y: {
                            type: "linear",
                            position: "left",
                            grid: { color: "rgba(255,255,255,0.05)" }
                        },
                        y1: {
                            type: "linear",
                            position: "right",
                            min: 4,
                            max: 10,
                            grid: { display: false }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // 3. Rainwater Harvesting Chart
        const waterCtx = document.getElementById("waterChart")?.getContext("2d");
        if (waterCtx) {
            this.charts.water = new Chart(waterCtx, {
                type: "line",
                data: {
                    labels: chartYears,
                    datasets: [
                        {
                            label: "Rainwater Reliance (%)",
                            data: [49.0, 62.0, 71.7, 82.0, 59.0],
                            borderColor: "#06b6d4",
                            backgroundColor: "rgba(6, 182, 212, 0.15)",
                            fill: true,
                            tension: 0.35,
                            borderWidth: 3,
                            pointRadius: 6,
                            pointBackgroundColor: "#06b6d4"
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: {
                            min: 30,
                            max: 100,
                            ticks: { callback: v => v + "%" },
                            grid: { color: "rgba(255,255,255,0.05)" }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // 4. Occupational Safety Chart
        const safetyCtx = document.getElementById("safetyChart")?.getContext("2d");
        if (safetyCtx) {
            this.charts.safety = new Chart(safetyCtx, {
                data: {
                    labels: ["FY 2024/25", "FY 2025/26", "2030 Target Pathway"],
                    datasets: [
                        {
                            type: "bar",
                            label: "Recordable Injuries (Count)",
                            data: [121, 70, 25],
                            backgroundColor: ["#f43f5e", "#10b981", "#38bdf8"],
                            borderRadius: 6,
                            yAxisID: "y"
                        },
                        {
                            type: "line",
                            label: "Lost Hours (Hours)",
                            data: [5237, 2236, 600],
                            borderColor: "#fbbf24",
                            backgroundColor: "#fbbf24",
                            borderWidth: 3,
                            pointRadius: 6,
                            yAxisID: "y1"
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: "top", labels: { boxWidth: 12 } }
                    },
                    scales: {
                        y: {
                            type: "linear",
                            position: "left",
                            max: 140,
                            title: { display: true, text: "Injuries Count" },
                            grid: { color: "rgba(255,255,255,0.05)" }
                        },
                        y1: {
                            type: "linear",
                            position: "right",
                            title: { display: true, text: "Lost Hours" },
                            grid: { display: false }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // 5. Training Hours & Investment Chart
        const trainingCtx = document.getElementById("trainingChart")?.getContext("2d");
        if (trainingCtx) {
            this.charts.training = new Chart(trainingCtx, {
                data: {
                    labels: chartYears,
                    datasets: [
                        {
                            type: "bar",
                            label: "Training Investment (Rs. Mn)",
                            data: [6.5, 7.4, 15.0, 14.0, 19.0],
                            backgroundColor: "rgba(168, 85, 247, 0.35)",
                            borderColor: "#a855f7",
                            borderRadius: 6,
                            yAxisID: "y"
                        },
                        {
                            type: "line",
                            label: "Avg Training Hrs / Employee",
                            data: [1.5, 2.4, 16.0, 18.0, 19.0],
                            borderColor: "#10b981",
                            backgroundColor: "#10b981",
                            borderWidth: 3,
                            tension: 0.3,
                            pointRadius: 6,
                            yAxisID: "y1"
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: "top", labels: { boxWidth: 12 } }
                    },
                    scales: {
                        y: {
                            position: "left",
                            title: { display: true, text: "Rs. Mn" },
                            grid: { color: "rgba(255,255,255,0.05)" }
                        },
                        y1: {
                            position: "right",
                            title: { display: true, text: "Hours / Emp" },
                            grid: { display: false }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }

        // 6. Workforce Retention & Female Representation
        const workforceCtx = document.getElementById("workforceChart")?.getContext("2d");
        if (workforceCtx) {
            this.charts.workforce = new Chart(workforceCtx, {
                type: "line",
                data: {
                    labels: chartYears,
                    datasets: [
                        {
                            label: "Retention Rate (%)",
                            data: [89.0, 86.0, 80.0, 79.0, 82.0],
                            borderColor: "#38bdf8",
                            backgroundColor: "rgba(56, 189, 248, 0.1)",
                            tension: 0.3,
                            borderWidth: 3,
                            pointRadius: 6
                        },
                        {
                            label: "Female Representation (%)",
                            data: [53.0, 51.0, 49.0, 49.0, 49.0],
                            borderColor: "#ec4899",
                            backgroundColor: "rgba(236, 72, 153, 0.1)",
                            tension: 0.3,
                            borderWidth: 3,
                            pointRadius: 6
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { position: "top", labels: { boxWidth: 12 } }
                    },
                    scales: {
                        y: {
                            min: 40,
                            max: 100,
                            ticks: { callback: v => v + "%" },
                            grid: { color: "rgba(255,255,255,0.05)" }
                        },
                        x: { grid: { display: false } }
                    }
                }
            });
        }
    },

    // ------------------------------------------
    // Target Simulator Logic
    // ------------------------------------------
    setupSimulator() {
        const renSlider = document.getElementById("simRenewableRange");
        const rainSlider = document.getElementById("simRainwaterRange");
        const safetySlider = document.getElementById("simSafetySessionsRange");
        const bioSlider = document.getElementById("simBioFertRange");

        const updateSim = () => {
            const renVal = parseInt(renSlider.value);
            const rainVal = parseInt(rainSlider.value);
            const safetyVal = parseInt(safetySlider.value);
            const bioVal = parseInt(bioSlider.value);

            document.getElementById("simRenewableVal").textContent = renVal + "%";
            document.getElementById("simRainwaterVal").textContent = rainVal + "%";
            document.getElementById("simSafetySessionsVal").textContent = safetyVal;
            document.getElementById("simBioFertVal").textContent = bioVal + "%";

            // Recalculate outcomes
            const projectedGhg = Math.round(8013 * (1 - (renVal * 0.0075)));
            const projectedInjuries = Math.max(8, Math.round(70 - (safetyVal * 11)));
            const displacedWater = Math.round(rainVal * 512);

            document.getElementById("simOutcomeGhg").textContent = projectedGhg.toLocaleString() + " tCO2e";
            document.getElementById("simOutcomeInjuries").textContent = projectedInjuries + " incidents";
            document.getElementById("simOutcomeWater").textContent = "+" + displacedWater.toLocaleString() + " m³";
            document.getElementById("simOutcomeFert").textContent = "-" + bioVal + ".0%";
        };

        [renSlider, rainSlider, safetySlider, bioSlider].forEach(slider => {
            if (slider) slider.addEventListener("input", updateSim);
        });
    },

    // ------------------------------------------
    // Event Listeners & Modals
    // ------------------------------------------
    setupEventListeners() {
        // Tab buttons
        document.querySelectorAll(".tab-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                this.switchTab(btn.dataset.tab);
            });
        });

        // Theme Toggle
        const themeBtn = document.getElementById("themeToggle");
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("theme-light");
            const isLight = document.body.classList.contains("theme-light");
            document.getElementById("themeIcon").setAttribute("data-lucide", isLight ? "moon" : "sun");
            lucide.createIcons();
        });

        // KPI Filters
        const dimSelect = document.getElementById("kpiDimensionFilter");
        const statusSelect = document.getElementById("kpiStatusFilter");
        const ownerSelect = document.getElementById("kpiOwnerFilter");
        const resetBtn = document.getElementById("resetKpiFiltersBtn");

        if (dimSelect) dimSelect.addEventListener("change", (e) => {
            this.filters.dimension = e.target.value;
            this.renderBoardKpis();
        });
        if (statusSelect) statusSelect.addEventListener("change", (e) => {
            this.filters.status = e.target.value;
            this.renderBoardKpis();
        });
        if (ownerSelect) ownerSelect.addEventListener("change", (e) => {
            this.filters.owner = e.target.value;
            this.renderBoardKpis();
        });
        if (resetBtn) resetBtn.addEventListener("click", () => {
            dimSelect.value = "ALL";
            statusSelect.value = "ALL";
            ownerSelect.value = "ALL";
            this.filters.dimension = "ALL";
            this.filters.status = "ALL";
            this.filters.owner = "ALL";
            this.renderBoardKpis();
        });

        // Global Search
        const searchInput = document.getElementById("globalSearch");
        if (searchInput) searchInput.addEventListener("input", (e) => {
            this.filters.search = e.target.value;
            this.renderBoardKpis();
        });

        // Target Filters
        const targetSdgSelect = document.getElementById("targetSdgFilter");
        const targetStatusSelect = document.getElementById("targetStatusFilter");
        if (targetSdgSelect) targetSdgSelect.addEventListener("change", (e) => {
            this.filters.targetSdg = e.target.value;
            this.renderConsultantTargets();
        });
        if (targetStatusSelect) targetStatusSelect.addEventListener("change", (e) => {
            this.filters.targetStatus = e.target.value;
            this.renderConsultantTargets();
        });

        // Chart View Toggle (Dashboard vs Simulator)
        document.querySelectorAll("#chartViewToggle .btn-pill").forEach(pill => {
            pill.addEventListener("click", () => {
                document.querySelectorAll("#chartViewToggle .btn-pill").forEach(p => p.classList.remove("active"));
                pill.classList.add("active");

                const view = pill.dataset.view;
                if (view === "simulator") {
                    document.getElementById("analyticsDashboardView").classList.add("hidden");
                    document.getElementById("analyticsSimulatorView").classList.remove("hidden");
                } else {
                    document.getElementById("analyticsDashboardView").classList.remove("hidden");
                    document.getElementById("analyticsSimulatorView").classList.add("hidden");
                }
            });
        });

        // Modal Close Buttons
        document.getElementById("modalCloseBtn")?.addEventListener("click", () => {
            document.getElementById("kpiModal").classList.add("hidden");
        });
        document.getElementById("actionModalCloseBtn")?.addEventListener("click", () => {
            document.getElementById("actionModal").classList.add("hidden");
        });
        document.getElementById("actionFormCancelBtn")?.addEventListener("click", () => {
            document.getElementById("actionModal").classList.add("hidden");
        });
        document.getElementById("briefingModalCloseBtn")?.addEventListener("click", () => {
            document.getElementById("briefingModal").classList.add("hidden");
        });

        // Close on backdrop click
        document.querySelectorAll(".modal-overlay").forEach(overlay => {
            overlay.addEventListener("click", (e) => {
                if (e.target === overlay) overlay.classList.add("hidden");
            });
        });

        // Add Action Button
        document.getElementById("addNewActionBtn")?.addEventListener("click", () => {
            document.getElementById("actionForm").reset();
            document.getElementById("actionModal").classList.remove("hidden");
        });

        // Submit Action Form
        document.getElementById("actionForm")?.addEventListener("submit", (e) => {
            e.preventDefault();
            const newAction = {
                id: `CA-0${CORRECTIVE_ACTIONS.length + 1}`,
                trigger: document.getElementById("actionFormKpi").value,
                rootCause: document.getElementById("actionFormRootCause").value,
                plan: document.getElementById("actionFormPlan").value,
                owner: document.getElementById("actionFormOwner").value,
                budget: document.getElementById("actionFormBudget").value || "Within OpEx",
                dueDate: document.getElementById("actionFormDate").value || "Q3 FY2026/27",
                status: document.getElementById("actionFormStatus").value
            };
            CORRECTIVE_ACTIONS.unshift(newAction);
            this.renderCorrectiveActions();
            this.renderBoardBriefing();
            document.getElementById("actionModal").classList.add("hidden");
        });

        // Export CSV
        document.getElementById("exportDataBtn")?.addEventListener("click", () => this.exportCsv());
        document.getElementById("exportTableCsvBtn")?.addEventListener("click", () => this.exportCsv());

        // Board Briefing Modal & Print Actions
        document.getElementById("printReportBtn")?.addEventListener("click", () => {
            this.renderBoardBriefing();
            document.getElementById("briefingModal")?.classList.remove("hidden");
        });

        document.getElementById("briefingPrintActionBtn")?.addEventListener("click", () => {
            this.renderBoardBriefing();
            window.print();
        });

        // Refresh print container right before native browser print
        window.addEventListener("beforeprint", () => {
            this.renderBoardBriefing();
        });
    },

    // ------------------------------------------
    // Render Executive Board Briefing & Company Summary
    // ------------------------------------------
    renderBoardBriefing() {
        const modalBody = document.getElementById("briefingModalBody");
        const printContainer = document.getElementById("printReportContainer");

        // Helper to format values
        const fmt = (v, suffix = "") => (v !== null && v !== undefined ? `${v}${suffix}` : '<span class="text-tbe">TBE</span>');

        // 1. ON-SCREEN MODAL CONTENT
        if (modalBody) {
            modalBody.innerHTML = `
                <!-- Strategic Hero Box -->
                <div class="briefing-hero-box">
                    <div class="briefing-hero-title">Executive Briefing: Whole-Company Sustainability Performance</div>
                    <div class="briefing-hero-desc">
                        <strong>Elpitiya Plantations PLC</strong> manages 13 high-, mid-, and low-country estates spanning over 8,800 hectares in Galle, Pundaluoya, and Pussellawa regions, producing premium Tea, Rubber, Oil Palm, and Specialty Cinnamon. The company is actively driving high-value commercial diversifications in commercial berry cultivation, renewable hydro/solar power generation, and eco-tourism. With a total workforce of <strong>4,563 employees</strong> and supporting <strong>24,989 plantation community residents</strong>, this briefing presents a unified, evidence-based performance summary bridging 5-year historical data (FY21/22–FY25/26) to the 2030 strategic destination.
                    </div>
                </div>

                <!-- High-Impact Key Indicators Grid -->
                <div class="briefing-stats-row">
                    <div class="briefing-stat-card">
                        <span class="briefing-stat-label">Total Workforce</span>
                        <span class="briefing-stat-val">4,563</span>
                        <span class="briefing-stat-sub text-accent">13 Estates & Factories</span>
                    </div>
                    <div class="briefing-stat-card">
                        <span class="briefing-stat-label">GHG Carbon Footprint</span>
                        <span class="briefing-stat-val">8,013 <small style="font-size:0.9rem">tCO2e</small></span>
                        <span class="briefing-stat-sub text-warning"><i data-lucide="alert-circle" style="width:13px;height:13px"></i> +17.5% YoY (CA-01)</span>
                    </div>
                    <div class="briefing-stat-card">
                        <span class="briefing-stat-label">Energy Intensity</span>
                        <span class="briefing-stat-val">6.39 <small style="font-size:0.9rem">GJ/MT</small></span>
                        <span class="briefing-stat-sub text-emerald"><i data-lucide="trending-down" style="width:13px;height:13px"></i> -10.9% vs FY23 Base</span>
                    </div>
                    <div class="briefing-stat-card">
                        <span class="briefing-stat-label">Rainwater Reliance</span>
                        <span class="briefing-stat-val">59.0%</span>
                        <span class="briefing-stat-sub text-accent">+10pp vs FY22 Base</span>
                    </div>
                    <div class="briefing-stat-card">
                        <span class="briefing-stat-label">Training Hours/Emp</span>
                        <span class="briefing-stat-val text-emerald">19.0 <small style="font-size:0.9rem">hrs</small></span>
                        <span class="briefing-stat-sub text-emerald">+1,166% Capability Surge</span>
                    </div>
                    <div class="briefing-stat-card">
                        <span class="briefing-stat-label">OHS Zero Harm</span>
                        <span class="briefing-stat-val text-emerald">0 Fatalities</span>
                        <span class="briefing-stat-sub text-emerald">Injuries: 70 (-42.1% YoY)</span>
                    </div>
                    <div class="briefing-stat-card">
                        <span class="briefing-stat-label">Community Welfare</span>
                        <span class="briefing-stat-val">Rs. 146 <small style="font-size:0.9rem">Mn</small></span>
                        <span class="briefing-stat-sub text-accent">24,989 Beneficiaries</span>
                    </div>
                    <div class="briefing-stat-card">
                        <span class="briefing-stat-label">Supplier Distribution</span>
                        <span class="briefing-stat-val">Rs. 3.53 <small style="font-size:0.9rem">Bn</small></span>
                        <span class="briefing-stat-sub text-emerald">140 Screened (+133%)</span>
                    </div>
                </div>

                <!-- Section 1: 7 Core Management Dimensions Summary -->
                <div class="briefing-section">
                    <div class="briefing-section-title">
                        <i data-lucide="layers"></i> 1. Whole-Company Performance Across 7 Core Management Dimensions
                    </div>
                    <div class="briefing-dim-grid">
                        <div class="briefing-dim-box">
                            <div class="briefing-dim-header">
                                <span class="briefing-dim-name"><i data-lucide="leaf" class="text-emerald"></i> Environmental & Climate</span>
                                <span class="dim-status status-moderate">Moderate / Action</span>
                            </div>
                            <ul class="briefing-dim-list">
                                <li><strong>GHG Emissions:</strong> 8,013 tCO2e (-1.7% vs FY22 baseline). FY25/26 rebound (+17.5% YoY) addressed via boiler efficiency and rooftop solar acceleration (CA-01).</li>
                                <li><strong>Energy Intensity:</strong> 6.39 GJ/MT output, down from 7.17 GJ/MT in FY23 (-10.9%). Deploying VFD smart drives across tea dryer fans (CA-02).</li>
                                <li><strong>Water Resilience:</strong> 59.0% rainwater reliance (+10pp long term; down from 82% peak). De-silting 6 estate retention reservoirs (CA-03).</li>
                                <li><strong>Solid Waste:</strong> 333 MT headline waste generated (-94.9% vs FY22 base of 6,561 MT). Transitioning to formal % waste-diversion KPI.</li>
                            </ul>
                        </div>

                        <div class="briefing-dim-box">
                            <div class="briefing-dim-header">
                                <span class="briefing-dim-name"><i data-lucide="users" class="text-accent"></i> Social & Human Capital</span>
                                <span class="dim-status status-strong">Strong Capability</span>
                            </div>
                            <ul class="briefing-dim-list">
                                <li><strong>Capability Expansion:</strong> Average training hours reached 19.0 hrs/employee (84,850 total hours; Rs. 19.0 Mn investment), surging +1,166% from 1.5 hrs baseline.</li>
                                <li><strong>Workforce Retention:</strong> 82.0% in FY25/26 (down 7pp from 89% FY22 base). Introducing estate welfare incentives and child-care upgrades (CA-04).</li>
                                <li><strong>Gender Diversity:</strong> 49.0% female workforce representation. Establishing separate senior management female leadership metric.</li>
                                <li><strong>Total Workforce:</strong> 4,563 employees across Up-country, Mid-country, and Low-country estates.</li>
                            </ul>
                        </div>

                        <div class="briefing-dim-box">
                            <div class="briefing-dim-header">
                                <span class="briefing-dim-name"><i data-lucide="heart-pulse" class="text-danger"></i> Occupational Health & Safety</span>
                                <span class="dim-status status-priority">Priority Pathway</span>
                            </div>
                            <ul class="briefing-dim-list">
                                <li><strong>Zero Fatalities:</strong> 0 fatalities maintained across all 5 consecutive reporting years (FY22–FY26).</li>
                                <li><strong>High-Consequence Injuries:</strong> 0 incidents in FY25/26 (eliminated from 1 in FY24/25).</li>
                                <li><strong>Recordable Injuries:</strong> Decreased by -42.1% from 121 (FY25) to 70 incidents (FY26). Firm target ceiling is &lt;30 incidents (Target T08).</li>
                                <li><strong>Lost Time Injury Hours:</strong> Dropped by -57.3% from 5,237 hrs to 2,236 lost hours in FY25/26. Enforcing 4 regional PPE safety sessions/year (Target T07).</li>
                            </ul>
                        </div>

                        <div class="briefing-dim-box">
                            <div class="briefing-dim-header">
                                <span class="briefing-dim-name"><i data-lucide="scale" class="text-tbe"></i> Governance & Sustainable Supply Chain</span>
                                <span class="dim-status status-tbe">Governance Discipline</span>
                            </div>
                            <ul class="briefing-dim-list">
                                <li><strong>Supplier ESG Screening:</strong> Expanded by +133% from 60 to 140 new suppliers. Transitioning to % ESG audit-compliant scoring (CA-05).</li>
                                <li><strong>Board Sustainability Oversight:</strong> Formalizing quarterly Board Sustainability Committee reviews with 100% completion target.</li>
                                <li><strong>Ethics & Whistleblowing:</strong> Establishing formal 30-day SLA resolution register for all substantiated ethics cases.</li>
                                <li><strong>Data Architecture:</strong> Adopting single corporate master repository with named owners and auditable evidence trails.</li>
                            </ul>
                        </div>

                        <div class="briefing-dim-box">
                            <div class="briefing-dim-header">
                                <span class="briefing-dim-name"><i data-lucide="handshake" class="text-warning"></i> Stakeholder & Community Welfare</span>
                                <span class="dim-status status-moderate">Outcome Focus Req.</span>
                            </div>
                            <ul class="briefing-dim-list">
                                <li><strong>Community Investment:</strong> Rs. 146.0 Mn invested in community wellbeing in FY25/26 (cumulative 5-year spend: Rs. 968 Mn).</li>
                                <li><strong>Direct Reach:</strong> 24,989 plantation community residents supported through healthcare camps, nutritional aid, and child development.</li>
                                <li><strong>Economic Distribution:</strong> Rs. 3,528 Mn disbursed to local suppliers and tea smallholders.</li>
                                <li><strong>Strategic Transition:</strong> Shifting from input expenditure to verified quality-of-life outcomes (Zero Hunger targets T01/T02; Elder Care T03/T04; Education T05/T06).</li>
                            </ul>
                        </div>

                        <div class="briefing-dim-box">
                            <div class="briefing-dim-header">
                                <span class="briefing-dim-name"><i data-lucide="lightbulb" class="text-accent"></i> Financial Resilience & Innovation</span>
                                <span class="dim-status status-tbe">Strategic Growth</span>
                            </div>
                            <ul class="briefing-dim-list">
                                <li><strong>Commercial Diversification:</strong> Scaling revenue from commercial berry cultivation, specialty teas, and renewable power generation.</li>
                                <li><strong>Climate-Smart Agriculture:</strong> Advancing vertical farming and hydroponic systems (Target T09) to maximize crop yield per hectare.</li>
                                <li><strong>Bio-Nutrient Substitution:</strong> Expanding estate compost and bio-fertiliser adoption (Target T10) to reduce synthetic chemical dependency.</li>
                                <li><strong>Renewable Generation:</strong> Rooftop solar and hydro power offsetting factory grid energy intensity.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Section 2: 5-Year Historical Performance Benchmark Table -->
                <div class="briefing-section">
                    <div class="briefing-section-title">
                        <i data-lucide="table"></i> 2. Complete 5-Year Sustainability KPI Historical Performance Master Table
                    </div>
                    <div class="briefing-table-container">
                        <table class="briefing-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>KPI Name</th>
                                    <th>Unit</th>
                                    <th>FY 2021/22</th>
                                    <th>FY 2022/23</th>
                                    <th>FY 2023/24</th>
                                    <th>FY 2024/25</th>
                                    <th>FY 2025/26</th>
                                    <th>5-Yr Change / Direction</th>
                                    <th>Primary SDG</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${HISTORICAL_KPIS.map(r => `
                                    <tr>
                                        <td><strong>${r.category}</strong></td>
                                        <td>${r.kpi}</td>
                                        <td><small>${r.unit}</small></td>
                                        <td>${fmt(r.fy22)}</td>
                                        <td>${fmt(r.fy23)}</td>
                                        <td>${fmt(r.fy24)}</td>
                                        <td>${fmt(r.fy25)}</td>
                                        <td><strong>${fmt(r.fy26)}</strong></td>
                                        <td><span class="badge ${r.direction.includes('Lower') || r.direction.includes('Zero') ? 'badge-primary' : 'badge-secondary'}">${r.direction}</span></td>
                                        <td><span class="sdg-chip"><i data-lucide="globe" style="width:12px;height:12px"></i> ${r.sdg}</span></td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Section 3: The 20 Board-Level Sustainability KPIs -->
                <div class="briefing-section">
                    <div class="briefing-section-title">
                        <i data-lucide="gauge"></i> 3. Proposed 20 Board-Level Sustainability Performance KPIs
                    </div>
                    <div class="briefing-table-container">
                        <table class="briefing-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Dimension</th>
                                    <th>KPI Description</th>
                                    <th>Unit</th>
                                    <th>Primary SDG</th>
                                    <th>Current Baseline (FY25/26)</th>
                                    <th>Target Direction</th>
                                    <th>Status</th>
                                    <th>Executive Owner</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${BOARD_KPIS.map(k => {
                                    let badgeCls = "badge-success";
                                    if (k.status === "Attention") badgeCls = "badge-warning";
                                    if (k.status === "Priority") badgeCls = "badge-danger";
                                    if (k.status === "Baseline Required") badgeCls = "badge-secondary";
                                    if (k.status === "Watch") badgeCls = "badge-primary";
                                    return `
                                        <tr>
                                            <td><strong>#${k.id < 10 ? '0' + k.id : k.id}</strong></td>
                                            <td><small>${k.dimension}</small></td>
                                            <td><strong>${k.kpi}</strong></td>
                                            <td><small>${k.unit}</small></td>
                                            <td><span class="sdg-chip">${k.primarySdg}</span></td>
                                            <td>${k.currentBaseline}</td>
                                            <td>${k.targetDirection}</td>
                                            <td><span class="badge ${badgeCls}">${k.status}</span></td>
                                            <td><small>${k.owner}</small></td>
                                        </tr>
                                    `;
                                }).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Section 4: 10 Consultant SDG Targets Register -->
                <div class="briefing-section">
                    <div class="briefing-section-title">
                        <i data-lucide="target"></i> 4. Sustainability Consultant 10 SDG Target Commitments (Horizon: 2026/27 – 2030/31)
                    </div>
                    <div class="briefing-table-container">
                        <table class="briefing-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>SDG Goal</th>
                                    <th>Strategic Target Commitment</th>
                                    <th>Timeline</th>
                                    <th>Target Metric</th>
                                    <th>Review Cadence</th>
                                    <th>Executive Owner</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${CONSULTANT_TARGETS.map(t => `
                                    <tr>
                                        <td><strong>${t.id}</strong></td>
                                        <td><span class="sdg-chip">${t.sdg}</span></td>
                                        <td><strong>${t.target}</strong><br><small style="color:var(--text-muted)">${t.desc}</small></td>
                                        <td><span class="badge badge-primary">${t.due}</span></td>
                                        <td>${t.targetVal} ${t.unit}</td>
                                        <td><small>${t.review}</small></td>
                                        <td><small>${t.owner}</small></td>
                                        <td><span class="badge ${t.status === 'In Progress' ? 'badge-success' : 'badge-secondary'}">${t.status}</span></td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Section 5: Active PDCA Corrective Action Log -->
                <div class="briefing-section">
                    <div class="briefing-section-title">
                        <i data-lucide="refresh-cw"></i> 5. Active PDCA Closed-Loop Management Action Log
                    </div>
                    <div class="briefing-table-container">
                        <table class="briefing-table">
                            <thead>
                                <tr>
                                    <th>Action ID</th>
                                    <th>Triggering Variance / Trend</th>
                                    <th>Investigated Root Cause</th>
                                    <th>Corrective Action Plan</th>
                                    <th>Owner</th>
                                    <th>Budget</th>
                                    <th>Due Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${CORRECTIVE_ACTIONS.map(a => `
                                    <tr>
                                        <td><strong>${a.id}</strong></td>
                                        <td><strong style="color:var(--accent-amber)">${a.trigger}</strong></td>
                                        <td><small>${a.rootCause}</small></td>
                                        <td>${a.plan}</td>
                                        <td><small>${a.owner}</small></td>
                                        <td><small>${a.budget || 'Within OpEx'}</small></td>
                                        <td><span class="badge badge-primary">${a.dueDate}</span></td>
                                        <td><span class="badge ${a.status === 'In Progress' ? 'badge-success' : 'badge-secondary'}">${a.status}</span></td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Section 6: Top 10 Strategic Recommendations & 5-Year Horizon -->
                <div class="briefing-section">
                    <div class="briefing-section-title">
                        <i data-lucide="list-checks"></i> 6. Top Strategic Recommendations & 5-Year Phased Implementation Horizon
                    </div>
                    <div class="briefing-dim-grid">
                        ${RECOMMENDATIONS.slice(0, 6).map(r => `
                            <div class="briefing-dim-box">
                                <div class="briefing-dim-header">
                                    <span class="briefing-dim-name"><span class="badge badge-primary">#${r.num}</span> ${r.title}</span>
                                </div>
                                <p style="font-size:0.825rem; color:var(--text-secondary); line-height:1.5">${r.body}</p>
                            </div>
                        `).join("")}
                    </div>
                </div>

                <!-- Governance Sign-off Box -->
                <div class="briefing-signoff">
                    <div class="briefing-sign-box">
                        <div class="briefing-sign-role">Head of Sustainability & Operations</div>
                        <div>Elpitiya Plantations PLC</div>
                        <div style="font-size:0.7rem; color:var(--text-muted); margin-top:0.25rem">Evidence & Data Verification</div>
                    </div>
                    <div class="briefing-sign-box">
                        <div class="briefing-sign-role">Chairman, Board Sustainability Committee</div>
                        <div>Board of Directors Review</div>
                        <div style="font-size:0.7rem; color:var(--text-muted); margin-top:0.25rem">Oversight & Target Approval</div>
                    </div>
                    <div class="briefing-sign-box">
                        <div class="briefing-sign-role">Managing Director / CEO</div>
                        <div>Executive Management Approval</div>
                        <div style="font-size:0.7rem; color:var(--text-muted); margin-top:0.25rem">Resource Allocation & Strategy</div>
                    </div>
                </div>
            `;
        }

        // 2. DEDICATED PRINTABLE DOCUMENT (Strictly formatted for A4 PDF Output)
        if (printContainer) {
            printContainer.innerHTML = `
                <div class="print-doc">
                    <!-- Page 1: Executive Summary & Performance Snapshot -->
                    <div class="print-header">
                        <div>
                            <h1 class="print-brand-title">ELPITIYA PLANTATIONS PLC</h1>
                            <div class="print-report-title">EXECUTIVE BOARD SUSTAINABILITY BRIEFING & PERFORMANCE REPORT</div>
                            <div class="print-report-subtitle">Single Evidence-Based Sustainability Management System | FY 2021/22 – FY 2025/26 Benchmark & 2030 Horizon</div>
                        </div>
                        <div class="print-meta-col">
                            <span class="print-badge-tag">BOARD OF DIRECTORS EDITION</span><br>
                            <strong>Reporting Horizon:</strong> FY 2026/27 – 2030/31<br>
                            <strong>Master Data:</strong> 5-Year Historical Series<br>
                            <strong>Generated:</strong> October 2026 / Board Cycle
                        </div>
                    </div>

                    <div class="print-summary-box">
                        <div class="print-summary-title">EXECUTIVE SUMMARY: WHOLE-COMPANY STRATEGIC SUSTAINABILITY PROFILE</div>
                        <p class="print-summary-p">
                            <strong>Elpitiya Plantations PLC</strong> (Aitken Spence PLC Group) manages 13 high-, mid-, and low-country estates spanning over 8,800+ hectares across Galle, Pundaluoya, and Pussellawa, producing premium Tea, Rubber, Oil Palm, and Specialty Cinnamon. The company has accelerated commercial diversification into commercial berry cultivation, renewable hydro/solar power generation, and eco-tourism. With a total workforce of <strong>4,563 employees</strong> and supporting <strong>24,989 plantation community residents</strong>, this Board Executive Briefing transitions the company from fragmented reporting into a unified, evidence-based management system connecting 5-year empirical data, 10 UN SDGs, 20 Board KPIs, 10 Consultant Target Commitments, and closed-loop PDCA governance.
                        </p>
                    </div>

                    <div class="print-stats-grid">
                        <div class="print-stat-item">
                            <div class="print-stat-item-label">Workforce</div>
                            <div class="print-stat-item-val">4,563</div>
                            <div class="print-stat-item-sub">13 Estates & Plants</div>
                        </div>
                        <div class="print-stat-item">
                            <div class="print-stat-item-label">GHG Emissions</div>
                            <div class="print-stat-item-val">8,013 t</div>
                            <div class="print-stat-item-sub">+17.5% YoY (CA-01)</div>
                        </div>
                        <div class="print-stat-item">
                            <div class="print-stat-item-label">Energy Intensity</div>
                            <div class="print-stat-item-val">6.39 GJ</div>
                            <div class="print-stat-item-sub">-10.9% vs FY23 Base</div>
                        </div>
                        <div class="print-stat-item">
                            <div class="print-stat-item-label">Rainwater Share</div>
                            <div class="print-stat-item-val">59.0%</div>
                            <div class="print-stat-item-sub">+10pp vs FY22 Base</div>
                        </div>
                        <div class="print-stat-item">
                            <div class="print-stat-item-label">Training / Emp</div>
                            <div class="print-stat-item-val">19.0 hrs</div>
                            <div class="print-stat-item-sub">+1,166% Capability</div>
                        </div>
                        <div class="print-stat-item">
                            <div class="print-stat-item-label">Safety Record</div>
                            <div class="print-stat-item-val">0 Fatalities</div>
                            <div class="print-stat-item-sub">Injuries: 70 (-42%)</div>
                        </div>
                    </div>

                    <div class="print-section">
                        <div class="print-section-header">1. Whole-Company Performance Across 7 Core Management Dimensions</div>
                        <div class="print-dim-grid">
                            <div class="print-dim-card">
                                <div class="print-dim-title">Environmental & Climate Action</div>
                                <p class="print-dim-text"><strong>GHG Footprint:</strong> 8,013 tCO2e (-1.7% vs FY22 base). FY26 rebound investigated via rooftop solar & boiler optimizations (CA-01). <strong>Energy Intensity:</strong> 6.39 GJ/MT (-10.9% vs FY23). <strong>Rainwater Reliance:</strong> 59.0% (+10pp long-term; CA-03 de-silting). <strong>Solid Waste:</strong> 333 MT (-94.9% vs FY22 base).</p>
                            </div>
                            <div class="print-dim-card">
                                <div class="print-dim-title">Social & Human Capital Development</div>
                                <p class="print-dim-text"><strong>Training Surge:</strong> 19.0 hrs/employee (84,850 total hours; Rs. 19 Mn spend), surging +1,166% from 1.5 hrs baseline. <strong>Workforce Retention:</strong> 82.0% (down 7pp vs FY22 base; CA-04 welfare intervention). <strong>Gender Balance:</strong> 49.0% female workforce representation.</p>
                            </div>
                            <div class="print-dim-card">
                                <div class="print-dim-title">Occupational Health & Safety (OHS)</div>
                                <p class="print-dim-text"><strong>Zero Fatalities:</strong> Maintained 0 fatalities across all 5 reporting years (FY22–FY26). <strong>Recordable Injuries:</strong> Decreased by -42.1% from 121 (FY25) to 70 incidents (Target: &lt;30). <strong>Lost Time Hours:</strong> Dropped by -57.3% from 5,237 to 2,236 hours in FY26.</p>
                            </div>
                            <div class="print-dim-card">
                                <div class="print-dim-title">Governance & Sustainable Supply Chain</div>
                                <p class="print-dim-text"><strong>Supplier ESG Screening:</strong> 140 new suppliers screened (+133% YoY). Moving to % audit-compliance scoring (CA-05). <strong>Board Reviews:</strong> Formalizing quarterly Board Sustainability review schedule. <strong>Ethics SLA:</strong> 30-day investigation closure SLA register.</p>
                            </div>
                            <div class="print-dim-card">
                                <div class="print-dim-title">Stakeholder & Community Welfare</div>
                                <p class="print-dim-text"><strong>Community Spend:</strong> Rs. 146.0 Mn invested in community wellbeing (5-year cumulative: Rs. 968 Mn). <strong>Direct Reach:</strong> 24,989 plantation residents supported. <strong>Smallholder Disbursals:</strong> Rs. 3,528 Mn paid to local green-leaf smallholders and vendors.</p>
                            </div>
                            <div class="print-dim-card">
                                <div class="print-dim-title">Financial Resilience & Innovation</div>
                                <p class="print-dim-text"><strong>Value-Added Expansion:</strong> Commercial berry cultivation, specialty teas, and renewable power. <strong>Climate Agriculture:</strong> Vertical farming and hydroponics (Target T09). <strong>Bio-Fertilisers:</strong> Estate composting and bio-nutrient substitution (Target T10).</p>
                            </div>
                        </div>
                    </div>

                    <div class="print-page-break"></div>

                    <!-- Page 2: 5-Year Historical Performance Benchmark Master Table -->
                    <div class="print-section">
                        <div class="print-section-header">2. 5-Year Historical Sustainability Performance Master Table (FY 2021/22 – FY 2025/26)</div>
                        <table class="print-table">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>KPI Name</th>
                                    <th>Unit</th>
                                    <th>FY21/22</th>
                                    <th>FY22/23</th>
                                    <th>FY23/24</th>
                                    <th>FY24/25</th>
                                    <th>FY25/26</th>
                                    <th>Direction</th>
                                    <th>Primary SDG</th>
                                    <th>Governance / Data Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${HISTORICAL_KPIS.map(r => `
                                    <tr>
                                        <td><strong>${r.category}</strong></td>
                                        <td>${r.kpi}</td>
                                        <td>${r.unit}</td>
                                        <td>${r.fy22 !== null ? r.fy22 : 'TBE'}</td>
                                        <td>${r.fy23 !== null ? r.fy23 : 'TBE'}</td>
                                        <td>${r.fy24 !== null ? r.fy24 : 'TBE'}</td>
                                        <td>${r.fy25 !== null ? r.fy25 : 'TBE'}</td>
                                        <td><strong>${r.fy26 !== null ? r.fy26 : 'TBE'}</strong></td>
                                        <td><span class="print-badge ${r.direction.includes('Lower') || r.direction.includes('Zero') ? 'print-badge-strong' : 'print-badge-primary'}">${r.direction}</span></td>
                                        <td><strong>${r.sdg}</strong></td>
                                        <td><small style="font-size:6.5pt; color:#475569">${r.note || ''}</small></td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>

                    <!-- Page 3: 20 Board-Level Framework KPIs -->
                    <div class="print-section">
                        <div class="print-section-header">3. The 20 Board-Level Sustainability Management Framework KPIs</div>
                        <table class="print-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Dimension</th>
                                    <th>KPI Description</th>
                                    <th>Unit</th>
                                    <th>SDG</th>
                                    <th>Current Baseline (FY25/26)</th>
                                    <th>Target Direction</th>
                                    <th>Status</th>
                                    <th>Executive Owner</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${BOARD_KPIS.map(k => {
                                    let badgeCls = "print-badge-strong";
                                    if (k.status === "Attention") badgeCls = "print-badge-moderate";
                                    if (k.status === "Priority") badgeCls = "print-badge-priority";
                                    if (k.status === "Baseline Required") badgeCls = "print-badge-tbe";
                                    if (k.status === "Watch") badgeCls = "print-badge-watch";
                                    return `
                                        <tr>
                                            <td><strong>#${k.id < 10 ? '0' + k.id : k.id}</strong></td>
                                            <td>${k.dimension}</td>
                                            <td><strong>${k.kpi}</strong></td>
                                            <td>${k.unit}</td>
                                            <td><strong>${k.primarySdg}</strong></td>
                                            <td>${k.currentBaseline}</td>
                                            <td>${k.targetDirection}</td>
                                            <td><span class="print-badge ${badgeCls}">${k.status}</span></td>
                                            <td><small style="font-size:6.5pt">${k.owner}</small></td>
                                        </tr>
                                    `;
                                }).join("")}
                            </tbody>
                        </table>
                    </div>

                    <div class="print-page-break"></div>

                    <!-- Page 4: 10 Consultant SDG Targets & Active PDCA Corrective Actions -->
                    <div class="print-section">
                        <div class="print-section-header">4. Sustainability Consultant 10 SDG Target Register (Milestones: 2026/27 – 2030/31)</div>
                        <table class="print-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>SDG</th>
                                    <th>Strategic Target Commitment</th>
                                    <th>Due</th>
                                    <th>Target Metric</th>
                                    <th>Cadence</th>
                                    <th>Executive Owner</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${CONSULTANT_TARGETS.map(t => `
                                    <tr>
                                        <td><strong>${t.id}</strong></td>
                                        <td><strong>${t.sdg}</strong></td>
                                        <td><strong>${t.target}</strong></td>
                                        <td><span class="print-badge print-badge-primary">${t.due}</span></td>
                                        <td>${t.targetVal} ${t.unit}</td>
                                        <td>${t.review}</td>
                                        <td><small style="font-size:6.5pt">${t.owner}</small></td>
                                        <td><span class="print-badge ${t.status === 'In Progress' ? 'print-badge-strong' : 'print-badge-watch'}">${t.status}</span></td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>

                    <div class="print-section">
                        <div class="print-section-header">5. Active PDCA Management Action Log (Root Causes & Interventions)</div>
                        <table class="print-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Variance Trigger</th>
                                    <th>Investigated Root Cause</th>
                                    <th>Corrective Action Plan</th>
                                    <th>Owner</th>
                                    <th>Budget</th>
                                    <th>Target Date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${CORRECTIVE_ACTIONS.map(a => `
                                    <tr>
                                        <td><strong>${a.id}</strong></td>
                                        <td><strong style="color:#b45309">${a.trigger}</strong></td>
                                        <td><small style="font-size:6.5pt">${a.rootCause}</small></td>
                                        <td>${a.plan}</td>
                                        <td><small style="font-size:6.5pt">${a.owner}</small></td>
                                        <td>${a.budget || 'Within OpEx'}</td>
                                        <td><span class="print-badge print-badge-primary">${a.dueDate}</span></td>
                                        <td><span class="print-badge ${a.status === 'In Progress' ? 'print-badge-strong' : 'print-badge-watch'}">${a.status}</span></td>
                                    </tr>
                                `).join("")}
                            </tbody>
                        </table>
                    </div>

                    <!-- Sign-off Block -->
                    <div class="print-sign-row">
                        <div class="print-sign-card">
                            <div class="print-sign-name">Head of Sustainability & Operations</div>
                            <div>Elpitiya Plantations PLC</div>
                            <div style="color:#64748b; margin-top:2px">Evidence Verified & Maintained</div>
                        </div>
                        <div class="print-sign-card">
                            <div class="print-sign-name">Chairman, Board Sustainability Committee</div>
                            <div>Board of Directors Review</div>
                            <div style="color:#64748b; margin-top:2px">Governance Oversight & Targets</div>
                        </div>
                        <div class="print-sign-card">
                            <div class="print-sign-name">Managing Director / CEO</div>
                            <div>Executive Management Approval</div>
                            <div style="color:#64748b; margin-top:2px">Strategy & Resource Allocation</div>
                        </div>
                    </div>
                </div>
            `;
        }

        // Re-run lucide icons if available
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons();
        }
    },

    // ------------------------------------------
    // Export Data to CSV
    // ------------------------------------------
    exportCsv() {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Category,KPI Name,Unit,Preferred Direction,FY 2021/22,FY 2022/23,FY 2023/24,FY 2024/25,FY 2025/26,Primary SDG,Data Note\n";

        HISTORICAL_KPIS.forEach(row => {
            const safeNote = `"${(row.note || '').replace(/"/g, '""')}"`;
            const rowArr = [
                row.category,
                `"${row.kpi}"`,
                row.unit,
                row.direction,
                row.fy22 !== null ? row.fy22 : "TBE",
                row.fy23 !== null ? row.fy23 : "TBE",
                row.fy24 !== null ? row.fy24 : "TBE",
                row.fy25 !== null ? row.fy25 : "TBE",
                row.fy26 !== null ? row.fy26 : "TBE",
                row.sdg,
                safeNote
            ];
            csvContent += rowArr.join(",") + "\n";
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "Elpitiya_Plantations_5Year_Sustainability_Data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

// Initialize app on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    app.init();
});
