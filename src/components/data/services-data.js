import image1 from "../assets/img/service/services-1.jpg";
import image2 from "../assets/img/service/services-2.jpg";
import image3 from "../assets/img/service/services-3.jpg";
import image4 from "../assets/img/service/services-4.jpg";
import image5 from "../assets/img/service/services-5.jpg";
import image6 from "../assets/img/service/services-6.jpg";

const servicesData = [
    {
        id: 'bid-ready-takeoff',
        slug: 'bid-ready-takeoff',
        icon: <i className="flaticon-data-visualization"></i>,
        title: 'Bid-Ready Takeoff',
        shortTitle: 'Digital Takeoffs',
        description: 'Fast, precise digital takeoffs from CAD, PDF and plan sets using PlanSwift and Bluebeam. Deliverables include an auditable takeoff, bid-ready quantity spreadsheets and a clear assumptions log.',
        summary: 'Auditable, bidder-ready quantities (CSV/PDF) with a one-pass revision and QC checklist.',
        longDescription: [
            'Our Bid-Ready Takeoff is a comprehensive, audit-friendly quantity measurement service designed for general contractors, subcontractors, and estimators who need defensible quantities quickly. We accept electronic plan sets in PDF, DWG, or image formats and produce a traceable set of takeoff files with highlight overlays tied to exported quantity tables.',
            'Each takeoff includes a line-by-line mapping to drawing sheets, clear assumptions (scope, unit definitions, inclusions/exclusions), and a one-pass QC review. For complex projects we provide a reconciliation worksheet showing how each measured quantity maps to the delivered CSV/XLS line items.',
            'Typical use cases include pre-bid quantity verification, subcontractor scope validation, and preparing buyout lists. Our deliverables are structured so you can drop them directly into your estimating model or share with procurement and trade partners.'
        ],
        methodology: [
            'Receive plan set and scope instructions; confirm any unavailable items or unclear drawings.',
            'Perform initial PDF/DWG calibration and set scale zones in PlanSwift/Bluebeam.',
            'Measure by trade and layer with standardized item codes and quantity units.',
            'Export CSV/XLS and generate an auditable PDF with color highlights.',
            'Run QC checklist and provide assumptions log and one revision pass.'
        ],
        caseStudies: [
            {title: 'Hospital Renovation Takeoff', summary: 'Delivered 120-sheet takeoff with validated quantities and saved the GC two days of prep time; enabled faster bid submission and more accurate subcontractor pricing.', impact: 'Reduced bid prep time by 40% and uncovered $18,000 in scope inconsistencies.'}
        ],
        faqs: [
            {q: 'Can you work from hand-marked PDFs?', a: 'Yes. We can digitize hand-marked plans; provide clear photos/scans and we will verify scale and clarity before starting.'},
            {q: 'How do revisions work?', a: 'One revision pass is included; additional revisions are quoted based on sheet count and scope.'}
        ],
        category: 'Takeoff',
        tags: ['takeoff','plan-quantities','auditable'],
        deliverables: [
            'Auditable takeoff PDF with highlights',
            'Bid-ready quantity spreadsheet (CSV/XLS)',
            'Trade-by-trade line-item counts',
            'Assumptions and exclusions log',
            'One revision pass and QC checklist'
        ],
        tools: 'PlanSwift, Bluebeam, Excel/CSV',
        toolsList: ['PlanSwift','Bluebeam','Excel'],
        turnaround: '24–72 hours (typical; depends on plan set size)',
        responseTime: {minDays:1, maxDays:3},
        benefits: [
            'Reduce manual counting errors',
            'Speed bid preparation',
            'Produce auditable quantities for clients and subcontractors'
        ],
        pricing: {type: 'per-sheet/project', from: null, to: null, currency: 'USD', note: 'Priced per sheet or per project; sample takeoff available for qualified projects.'},
        pricingNote: 'Priced per sheet or per project; sample takeoff available free for qualified projects.',
        sampleAvailable: true,
        featured: true,
        active: true,
        number: 1,
        image: image1,
        seo: {title: 'Bid-Ready Takeoff — Win Bids Co', description: 'Fast digital takeoffs and auditable quantity spreadsheets to prepare competitive bids.', keywords: ['takeoff','bid-ready','plans']}
    },
    {
        id: 'material-lists',
        slug: 'material-lists-buyout',
        icon: <i className="flaticon-wrench"></i>,
        title: 'Material Lists & Buyout',
        shortTitle: 'Material Lists',
        description: 'Complete trade-by-trade material lists and buyout packages prepared for procurement. Includes unit quantities, packaging recommendations and consolidated purchase summaries.',
        summary: 'Procurement-ready bill-of-materials and consolidated buyout summaries to streamline purchasing.',
        longDescription: [
            'Our Material Lists & Buyout service translates measured quantities into procurement-ready bills of materials. We provide trade-level lists, packaging guidance (e.g., sheets, bundles, rolls), suggested vendors for common items, and consolidated sheets formatted for purchasing systems.',
            'We include waste factors, delivery notes, and packaging/unit recommendations so procurement teams can quickly place orders with minimal follow-up. Where requested, we can group items by supplier to create consolidated purchase orders and estimate freight/lead-time impacts.'
        ],
        methodology: [
            'Map takeoff quantities to standard material codes.',
            'Apply waste and packaging rules per trade.',
            'Group items by supplier and prepare CSV for procurement.',
            'Provide summary and recommendations for order timing and lead times.'
        ],
        caseStudies: [
            {title: 'Retail Fit-Out Buyout', summary: 'Consolidated 300+ line items into 12 supplier orders and optimized packaging, reducing freight by 22%.', impact: 'Reduced procurement lead time and lowered shipping costs by 22%.'}
        ],
        faqs: [
            {q: 'Do you recommend vendors?', a: 'We can suggest common vendors and their typical packaging options, but we do not act as a purchasing agent unless contracted to do so.'}
        ],
        category: 'Procurement',
        tags: ['materials','procurement','buyout','BOM'],
        deliverables: [
            'Trade-specific material lists',
            'Packaging and unit-size recommendations',
            'Waste factors and contractor notes',
            'Consolidated procurement summary (CSV/XLS)'
        ],
        tools: 'Excel, procurement CSV/BOM formats',
        toolsList: ['Excel','CSV/BOM'],
        turnaround: '48–96 hours depending on scope',
        responseTime: {minDays:2, maxDays:4},
        benefits: [
            'Simplifies purchasing and subcontractor buyout',
            'Reduces material waste and over-ordering',
            'Speeds procurement onboarding'
        ],
        pricing: {type: 'project/add-on', from: null, to: null, currency: 'USD', note: 'Available standalone or bundled with estimates.'},
        pricingNote: 'Available as a standalone service or packaged with takeoffs/estimates.',
        sampleAvailable: false,
        featured: false,
        active: true,
        number: 2,
        image: image2,
        seo: {title: 'Material Lists & Buyout — Win Bids Co', description: 'Trade-by-trade material lists and buyout packages for procurement and purchasing.', keywords: ['materials','buyout','procurement']}
    },
    {
        id: 'bid-cost-estimate',
        slug: 'bid-ready-estimates',
        icon: <i className="flaticon-project-1"></i>,
        title: 'Bid-Ready Estimates',
        shortTitle: 'Bid Estimates',
        description: 'Auditable, line-item bid estimates combining RSMeans unit costs, regional modifiers, and supplier pricing where available. Includes labor/material breakdowns and contingency notes.',
        summary: 'Line-item, auditable bid estimates with cost breakdowns and assumptions for submission.',
        longDescription: [
            'Our Bid-Ready Estimates provide detailed, auditable cost models suitable for bid submission and internal review. We combine industry-standard cost libraries (RSMeans) with local supplier checks and labor productivity assumptions to produce a defensible line-item estimate.',
            'Estimates include a clear assumptions section, contingency and escalation notes, and assembly-level summaries for executive review. We also provide sensitivity scenarios to show the impact of material price changes, labor availability, or scope alternates.'
        ],
        methodology: [
            'Import takeoff quantities and map to standard cost items.',
            'Apply regional labor and material modifiers and supplier quotes.',
            'Assemble line-item estimate and run consistency checks.',
            'Produce executive summary, bid sheet, and assumptions log.'
        ],
        caseStudies: [
            {title: 'Commercial Office Bid', summary: 'Completed a 2,500-line estimate for a multi-floor office buildout enabling the GC to submit a competitive bid with clear contingencies.', impact: 'Improved margin accuracy and reduced post-bid clarifications.'}
        ],
        faqs: [
            {q: 'Can you incorporate supplier quotes into the estimate?', a: 'Yes. Provide supplier pricing and we will incorporate it into the estimate and flag deviations from benchmark rates.'},
            {q: 'Do you include escalation?', a: 'Escalation scenarios are provided as part of sensitivity analyses; we document the assumptions and calculation method.'}
        ],
        category: 'Estimating',
        tags: ['estimate','rsmeans','line-item'],
        deliverables: [
            'Line-item estimate (CSV/XLS)',
            'Executive cost summary and bid sheet',
            'Assemblies and labor/material breakdowns',
            'Assumptions, contingency and escalation notes'
        ],
        tools: 'RSMeans, Excel, internal estimating models',
        toolsList: ['RSMeans','Excel'],
        turnaround: '3–7 days depending on project complexity',
        responseTime: {minDays:3, maxDays:7},
        benefits: [
            'Produce defensible, auditable bids',
            'Improve margin visibility and risk controls',
            'Standardized estimate output for approvals'
        ],
        pricing: {type: 'project', from: null, to: null, currency: 'USD', note: 'Estimates priced by project complexity; enterprise pricing available for volume engagements.'},
        pricingNote: 'Estimates priced by project complexity; enterprise pricing available for volume engagements.',
        sampleAvailable: false,
        featured: true,
        active: true,
        number: 3,
        image: image3,
        seo: {title: 'Bid-Ready Estimates — Win Bids Co', description: 'Auditable line-item estimates using RSMeans and supplier pricing for defensible bids.', keywords: ['estimates','bid-ready','RSMeans']}
    },
    {
        id: 'estimate-audit',
        slug: 'estimate-audit-recovery',
        icon: <i className="flaticon-search-analysis"></i>,
        title: 'Estimate Audit & Recovery',
        shortTitle: 'Estimate Audit',
        description: 'Independent estimating audits that compare submitted bids against drawings and specifications to identify omissions, scope gaps, and pricing errors. We quantify recovery opportunities and recommend corrective actions.',
        summary: 'Audit reports highlighting omissions and recoverable value, with prioritized corrective actions.',
        longDescription: [
            'Estimate audits are targeted reviews of a submitted bid or internal estimate to identify scope omissions, underpriced items, or inconsistent assumptions. Our audits are checklist-driven and quantify potential recoverable value along with a ranked list of corrective actions.',
            'Deliverables include an exceptions register with priority tags (High / Medium / Low), a conservative estimate of recoverable value, and a suggested change-order or clarification package that can be used when negotiating with owners or subcontractors.'
        ],
        methodology: [
            'Receive estimate and plans; review scope vs. drawings and specifications.',
            'Identify omissions, mismatches, and pricing anomalies.',
            'Quantify recoverable value and prepare an exceptions register.',
            'Provide a prioritised recommendation list and follow-up review call.'
        ],
        caseStudies: [
            {title: 'General Contractor Audit', summary: 'Found $45k in missed scope on a hospitality renovation; provided a prioritized change-order package that recovered 80% of the value.', impact: 'Recovered majority of missed value and improved internal QA processes.'}
        ],
        faqs: [
            {q: 'What do audits cost?', a: 'Audit fees scale with estimate size; we offer rapid audits for urgent bids at a premium and standard audits at a fixed per-sheet or hourly rate.'}
        ],
        category: 'Audit',
        tags: ['audit','QA','recovery'],
        deliverables: [
            'Exceptions register with priority levels',
            'Estimated recoverable value and recommendations',
            'Corrective item list suitable for change orders',
            'Follow-up review call with estimator'
        ],
        tools: 'Checklist-driven QA, Bluebeam, estimating models',
        toolsList: ['Bluebeam','QA Checklist'],
        turnaround: '48–96 hours for standard audits',
        responseTime: {minDays:2, maxDays:4},
        benefits: [
            'Recover missed margin',
            'Reduce bid risk and omissions',
            'Provide clear corrective actions for subcontractors'
        ],
        pricing: {type: 'audit', from: null, to: null, currency: 'USD', note: 'Audit fees based on estimate size; rapid audits available for urgent bids.'},
        pricingNote: 'Audit fees based on estimate size; rapid audits available for urgent bids.',
        sampleAvailable: false,
        featured: false,
        active: true,
        number: 4,
        image: image4,
        seo: {title: 'Estimate Audit & Recovery — Win Bids Co', description: 'Independent estimate audits to identify omissions and recoverable value.', keywords: ['audit','estimate-audit','recovery']}
    },
    {
        id: 'rsmeans-pricing',
        slug: 'rsmeans-regional-pricing',
        icon: <i className="flaticon-statistics-1"></i>,
        title: 'RSMeans & Regional Pricing',
        shortTitle: 'Regional Pricing',
        description: 'RSMeans-driven unit-cost benchmarking combined with local labor and material indexes to validate pricing assumptions. We apply regional multipliers and supplier checks to produce defensible cost baselines.',
        summary: 'Unit-cost benchmarking with regional modifiers and sensitivity scenarios.',
        longDescription: [
            'Our RSMeans & Regional Pricing service creates defensible unit-cost tables tailored to the project region. We validate RSMeans base rates against local labor indices, supplier checks, and historical project data to create a market-aligned pricing baseline.',
            'We provide sensitivity analysis to show how changes in labor or material costs affect the project estimate and document the calculation methodology so auditors or clients can reproduce the results.'
        ],
        methodology: [
            'Extract unit items from the estimate and map to RSMeans codes.',
            'Apply regional multipliers and perform supplier validation when available.',
            'Produce a benchmarking report with sensitivity tables and confidence levels.'
        ],
        caseStudies: [
            {title: 'Regional Benchmarking for Healthcare Project', summary: 'Validated unit rates for a hospital project across three metro areas, enabling the client to justify regional price adjustments to the owner.', impact: 'Reduced pricing disputes and improved bid defensibility.'}
        ],
        faqs: [
            {q: 'Do you supply RSMeans datasets?', a: 'We use licensed RSMeans data within our models and can incorporate client-provided RSMeans subscriptions into the deliverable where permitted.'}
        ],
        category: 'Benchmarking',
        tags: ['RSMeans','benchmarking','pricing'],
        deliverables: [
            'Unit-cost tables with regional modifiers',
            'Sensitivity analysis and escalation scenarios',
            'Supplier-checked unit rates where available'
        ],
        tools: 'RSMeans, regional indices, supplier data',
        toolsList: ['RSMeans'],
        turnaround: '2–4 days depending on coverage',
        responseTime: {minDays:2, maxDays:4},
        benefits: [
            'Defensible, market-aligned pricing',
            'Faster validation of assumptions',
            'Clear documentation for clients and auditors'
        ],
        pricing: {type: 'benchmark', from: null, to: null, currency: 'USD', note: 'Benchmarking projects quoted per region and data scope.'},
        pricingNote: 'Benchmarking projects quoted per region and data scope.',
        sampleAvailable: false,
        featured: false,
        active: true,
        number: 5,
        image: image5,
        seo: {title: 'RSMeans & Regional Pricing — Win Bids Co', description: 'RSMeans unit-cost benchmarking and regional pricing validation.', keywords: ['RSMeans','regional-pricing']}
    },
    {
        id: 'estimator-as-a-service',
        slug: 'estimator-as-a-service',
        icon: <i className="flaticon-teamwork"></i>,
        title: 'Estimator-as-a-Service',
        shortTitle: 'Estimator-as-a-Service',
        description: 'Flexible estimator-as-a-service engagements: on-demand estimators, scoped staffing for peak bids, or ongoing estimating partnerships. Includes file sharing, weekly status reviews, SLAs for turnaround and integration support.',
        summary: 'Scale estimating capacity with on-demand experienced estimators and SLAs.',
        longDescription: [
            'Estimator-as-a-Service provides flexible estimating capacity without the overhead of hiring. We integrate with your workflow, use your templates and estimation models, and supply experienced estimators on an hourly, retainer, or dedicated basis.',
            'Engagements include onboarding, weekly status reports, collaborative reviews, and defined SLAs for turnaround. Typical use cases include peak bid season support, covering estimator attrition, or outsourcing entire estimating functions for specific packages.'
        ],
        methodology: [
            'Onboard to client estimating templates and standards.',
            'Assign estimator(s) and establish communication cadence.',
            'Deliver estimates according to agreed SLAs and provide weekly reporting.',
            'Conduct regular performance reviews and scaling adjustments.'
        ],
        caseStudies: [
            {title: 'Peak Season Support for GC', summary: 'Provided 2 dedicated estimators during peak season, enabling the GC to respond to 30% more bids without hiring.', impact: 'Increased bid capacity and reduced time-to-bid.'}
        ],
        faqs: [
            {q: 'How quickly can you ramp?', a: 'Typical ramp-up for a dedicated estimator is 3–5 business days including onboarding; rapid responses can be arranged for urgent needs.'}
        ],
        category: 'Staffing',
        tags: ['staffing','estimator','on-demand'],
        deliverables: [
            'Scoped estimator hours or dedicated estimator(s)',
            'Weekly status reports and file sharing',
            'Integration support with estimating tools',
            'Bid support and review calls'
        ],
        tools: 'Bluebeam, PlanSwift, Excel, cloud file sharing',
        toolsList: ['Bluebeam','PlanSwift','Excel'],
        turnaround: 'On-demand per SLA; ramp-up typically 3–5 business days',
        responseTime: {minDays:3, maxDays:5},
        benefits: [
            'Scale estimating capacity without hiring',
            'Meet tight bid deadlines',
            'Access experienced estimators on demand'
        ],
        pricing: {type: 'retainer/hourly', from: null, to: null, currency: 'USD', note: 'Available as hourly retainers or monthly packages; contact for staffing quotes.'},
        pricingNote: 'Available as hourly retainers or monthly packages; contact for staffing quotes.',
        sampleAvailable: false,
        featured: false,
        active: true,
        number: 6,
        image: image6,
        seo: {title: 'Estimator-as-a-Service — Win Bids Co', description: 'On-demand estimators and scoped estimating teams to meet peak bidding needs.', keywords: ['estimator-as-a-service','estimators']}
    }
];

export default servicesData;