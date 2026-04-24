import image1 from "../assets/img/blog/blog-1.jpg";
import image2 from "../assets/img/blog/blog-2.jpg";
import image3 from "../assets/img/blog/blog-3.jpg";
import image4 from "../assets/img/blog/blog-4.jpg";
import image5 from "../assets/img/blog/blog-5.jpg";
import image6 from "../assets/img/blog/blog-6.jpg";

const blogData = [
    {
        number: '01',
        id: 'key-steps-to-ensure-a-smooth-building-process',
        date: '10',
        comment: '2',
        title: 'Key Steps to Ensure a Smooth Building Process',        
        image: image1,
        description: 'Top Mistakes to Avoid During Home Renovation',
        author: { name: 'Sarah L', role: 'Project Coordinator' },
        readingTime: '8 min',
        tags: ['process','planning','QA'],
        longContent: [
            'A successful building project depends on disciplined pre-construction planning, clear communication across stakeholders, and robust quality controls. In this article we break down the most important steps that protect schedule, budget, and quality from design through turnover.',
            'First, invest time in the pre-bid review: verify drawings, confirm scope boundaries, and log clarifications. Many downstream disputes begin with ambiguous scope. A well-documented assumptions log prevents rework and supports defensible change orders.',
            'Second, standardize measurement and costing practices. Use auditable takeoffs and line-item estimates so subcontractors can confirm quantities and your bid holds up under scrutiny. Discrepancies between takeoffs and estimates are frequent and expensive.'
        ],
        sections: [
            {heading: 'Pre-Construction Best Practices', content: 'Conduct a multi-disciplinary review of drawings with project managers, superintendents, and key trades. Record all clarifications in a central RFI log and assign owners and due dates.'},
            {heading: 'Quality Controls', content: 'Implement daily QA checklists, hold short scope verification meetings before each major package, and maintain digital records of inspections and approvals.'}
        ],
        delay: '0.4',
    },
    {
        number: '02',
        id: 'how-weather-can-impact-a-construction-project',
        date: '12',
        comment: '3',
        title: 'How Weather Can Impact a Construction Project',        
        image: image2,
        description: 'Weather conditions can significantly influence timeline and quality',
        author: { name: 'Michael R', role: 'Field Supervisor' },
        readingTime: '6 min',
        tags: ['schedule','risk','safety'],
        longContent: [
            'Weather is a predictable but often underestimated risk. The impact is both direct (rain, snow, wind) and indirect (material lead times, productivity reductions, inspection delays). Successful teams plan seasonally and mitigate exposure through sequencing and protective work methods.',
            'Mitigation strategies include temporary shelters, shifted sequencing for weather-sensitive activities, and early procurement of long-lead, weather-critical items. Document weather contingency plans in the baseline schedule.'
        ],
        sections: [
            {heading: 'Planning for Weather', content: 'Use historical weather data for the project region to plan critical path activities and include buffer days for known seasonal impacts.'},
            {heading: 'On-Site Protections', content: 'Protect stored materials, provide safe access routes when surfaces are wet, and avoid starting moisture-sensitive installs during forecasted precipitation.'}
        ],
        delay: '0.7',
    },
    {
        number: '03',
        id: 'how-to-choose-the-perfect-construction-company',
        date: '13',
        comment: '6',
        title: 'How to Choose the Perfect Construction Company',        
        image: image3,
        description: 'How to choose the right construction partner',
        author: { name: 'Alex P', role: 'Estimator' },
        readingTime: '7 min',
        tags: ['procurement','vendor','selection'],
        longContent: [
            'Selecting the right contractor is one of the most consequential decisions on any project. Look beyond price: evaluate the company’s track record on similar scopes, their safety record, financial stability, and how they manage subcontractor relationships.',
            'Request references and ask for examples of projects that faced similar constraints to yours. Confirm how the contractor manages change orders, substitutions, and schedule pressures.'
        ],
        sections: [
            {heading: 'Key Questions to Ask', content: 'Ask about their approach to cost control, their typical change order volume, and how they document scope clarifications.'},
            {heading: 'Red Flags', content: 'Avoid firms with high staff turnover, opaque subcontractor practices, or inconsistent documentation — these often lead to disputes.'}
        ],
        delay: '1',
    },
    {
        number: '04',
        id: 'top-mistakes-to-avoid-during-home-renovation',
        date: '15',
        comment: '7',
        title: 'Top Mistakes to Avoid During Home Renovation',        
        image: image4,
        description: 'Common renovation mistakes and how to avoid them',
        author: { name: 'Emily S', role: 'Project Manager' },
        readingTime: '9 min',
        tags: ['renovation','budget','planning'],
        longContent: [
            'Renovations carry unique risks: concealed conditions, changing client preferences, and tight sequencing in occupied buildings. Mitigate these by conducting thorough site investigations, setting clear change management rules, and maintaining a realistic contingency reserve.',
            'Budget transparency is key: tie allowances to specific products and require owner approvals for upgrades. This avoids costly mid-project scope creep.'
        ],
        sections: [
            {heading: 'Site Investigations', content: 'Early destructive testing and targeted inspections reduce surprises. Plan for unknowns and document all findings.'},
            {heading: 'Communication Protocols', content: 'Establish weekly checkpoints with stakeholders and a single source of truth for change requests.'}
        ],
        delay: '0.4',
    },
    {
        number: '05',
        id: 'how-to-maximize-space-in-your-commercial-building',
        date: '17',
        comment: '5',
        title: 'How to Maximize Space in Your Commercial Building',        
        image: image5,
        description: 'Strategies to maximize usable space in commercial buildings',
        author: { name: 'Jordan K', role: 'Architect' },
        readingTime: '6 min',
        tags: ['design','space-planning','commercial'],
        longContent: [
            'Space optimization blends design, furniture systems, and operational thinking. Consider flexible layouts with demountable partitions, dual-use rooms, and vertically integrated storage to free usable floor area.',
            'Work with occupants to map daily workflows; sometimes small layout tweaks unlock significant efficiency gains without structural changes.'
        ],
        sections: [
            {heading: 'Design Principles', content: 'Prioritize circulation efficiency, sightlines, and clustering of shared services to reduce wasted square footage.'},
            {heading: 'Furniture and Systems', content: 'Select modular, multi-purpose furniture that can adapt to evolving needs and seasonal usage patterns.'}
        ],
        delay: '0.7',
    },
    {
        number: '06',
        id: 'the-future-of-smart-homes-in-construction',
        date: '21',
        comment: '3',
        title: 'The Future of Smart Homes in Construction',        
        image: image6,
        description: 'Smart home trends and their impact on residential construction',
        author: { name: 'Priya N', role: 'Technology Lead' },
        readingTime: '7 min',
        tags: ['smart-home','IoT','residential'],
        longContent: [
            'Smart homes are moving beyond convenience into resilience and energy optimization. Integrating sensors, automated controls, and analytics helps homeowners reduce energy consumption and respond to maintenance needs proactively.',
            'Builders should plan conduit, power, and data pathways early in framing so systems can be installed cleanly and economically. Retrofit smart solutions are possible but often more costly.'
        ],
        sections: [
            {heading: 'Designing for Smart Systems', content: 'Coordinate with MEP designers to allocate space for controllers, panels, and communication hubs. Standardize on protocols where possible to minimize integration work.'},
            {heading: 'Owner Experience', content: 'Deliver simple, well-documented user interfaces and provide training or turnover materials so owners realize the value of smart systems.'}
        ],
        delay: '1',
    },
];

export default blogData;