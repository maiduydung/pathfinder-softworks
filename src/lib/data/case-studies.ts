export interface CaseStudy {
	slug: string;
	title: string;
	subtitle: string;
	link: string | null;
	metric: string;
	metricDetail: string;
	stats: { value: string; label: string }[];
	summary: string;
	problem: string;
	solution: string;
	results: { text: string; icon: string }[];
	tech: string[];
	image?: string;
	images?: { src: string; alt: string }[];
	founder?: { name: string; slug: string; credential: string };
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'proplytics',
		title: 'Proplytics',
		subtitle: 'SaaS Platform',
		link: 'https://www.proplytics.net/',
		metric: 'Every US Property',
		metricDetail: 'with investment-grade financial metrics',
		stats: [
			{ value: '140M+', label: 'Properties indexed' },
			{ value: '97.5%', label: 'ROI coverage' },
			{ value: '<1s', label: 'Per analysis' },
		],
		summary:
			'The only platform that surfaces ROI, cash flow, cap rate, and rent-to-price ratios for 140M+ US properties, updated daily. 97.5% of listings have full financial metrics, coverage that even Zillow doesn\'t offer. Used by thousands of investors and agents, generating real revenue, backed by Sam Altman\'s Residency program.',
		problem:
			'Real estate investors were pulling data from a dozen sources and running manual spreadsheet models for every single property. ROI, cash-on-cash return, cap rate, all calculated by hand. The process didn\'t scale, decisions were based on stale data, and the best deals were gone before the math was done.',
		solution:
			'We built a full SaaS platform that indexes every residential property in the US. That\'s 140M+ and growing, with daily data refreshes across hundreds of millions of data points. Each property gets instant, personalized financial analysis: ROI, monthly cash flow, cap rate, rent-to-price ratio, all customized to the investor\'s financial profile (down payment, interest rate, insurance, management fees). Market-level heatmaps let investors compare entire counties at a glance.',
		results: [
			{ text: '140M+ properties with daily-updated financial metrics', icon: 'database' },
			{ text: '97.5% ROI coverage, metrics most platforms don\'t have', icon: 'trending-up' },
			{ text: 'Used by thousands of real investors & agents', icon: 'users' },
			{ text: 'Backed by Sam Altman\'s Residency and generating revenue', icon: 'rocket' },
		],
		tech: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Azure', 'Docker'],
		image: '/past_works/proplytics/discovery_page.png',
		images: [
			{ src: '/past_works/proplytics/landing_page.png', alt: 'Proplytics landing page: find the highest-return properties in seconds' },
			{ src: '/past_works/proplytics/discovery_page.png', alt: 'Property discovery with financial filters and ROI sorting' },
			{ src: '/past_works/proplytics/individual_page.png', alt: 'Individual property page with full financial breakdown' },
			{ src: '/past_works/proplytics/financial_breakdown.png', alt: '30-year financial projection with cash flow analysis' },
			{ src: '/past_works/proplytics/market_page.png', alt: 'Market heatmap for comparing ROI across counties' },
		],
		founder: {
			name: 'Duy Tran',
			slug: 'duy-tran',
			credential: 'FAANG Engineer, Sam Altman\'s Residency',
		},
	},
	{
		slug: 'trade-compliance-platform',
		title: 'Trade Compliance Operations Platform',
		subtitle: 'Custom Software',
		link: null,
		metric: '7 Stages',
		metricDetail: 'automated from first inquiry to license closed',
		stats: [
			{ value: '8', label: 'Role tiers managed' },
			{ value: '30+', label: 'Automated email triggers' },
			{ value: '100%', label: 'Workflow coverage' },
		],
		summary:
			'A full-stack compliance operations platform for a regulated trade services firm (NDA). Brokers submit deals, compliance officers review documents, regulatory authorities receive structured filings, all coordinated through a single role-gated system across 8 user tiers and a 7-stage pipeline, fully automated from first inquiry to license closed.',
		problem:
			'The firm was coordinating high-stakes licensing cases across field brokers, sub-agents, compliance officers, accountants, and government authorities, entirely over email and spreadsheets. Physical document couriers had no tracking, fee calculations were done manually per case, status was invisible to everyone except the person holding the last email, and there was zero audit trail. One missed document could stall a case for weeks.',
		solution:
			'We built a role-gated operations platform where every actor sees exactly their slice of the workflow, nothing more. Brokers enter client data and the system auto-calculates service fees. Cases advance through 7 defined statuses with automated emails firing at each transition: regulatory filings dispatched to authority, courier tracking numbers logged and confirmed, brokerage invoice auto-generation, and 30/45/60/75-day payment reminders if fees go unpaid. Directors get a live dashboard with per-officer caseload analytics and workload-based assignment recommendations.',
		results: [
			{ text: '8-tier role hierarchy with granular, per-stage access control', icon: 'shield-check' },
			{ text: 'Full case lifecycle across 7 statuses with zero manual handoffs', icon: 'git-branch' },
			{ text: '30+ automated email triggers replacing ad-hoc coordination', icon: 'mail' },
			{ text: 'Fee invoicing with escalating reminders at Day 31, 45, 60, 75', icon: 'timer' },
		],
		tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Node.js', 'Docker'],
	},
	{
		slug: 'vn-logistics',
		title: 'Vietnamese Logistics Co.',
		subtitle: 'Digital Transformation',
		link: null,
		metric: '3%',
		metricDetail: 'cost optimization per shipment',
		stats: [
			{ value: '20%', label: 'Margin protected' },
			{ value: '14M', label: 'VND saved per order' },
			{ value: 'Instant', label: 'Quote generation' },
		],
		summary:
			'A Bill of Materials Optimizer built for a Vietnamese logistics company. The platform calculates optimal container weight, parses XML invoices, manages warehouse inventory via Excel sync, and automatically distributes hidden sunk costs across every shipment quote. That means 20% margins protected on every order.',
		problem:
			'Every shipment came with hidden sunk costs that weren\'t tax-deductible: fuel, meals, part-time dock labor, transport overhead. These costs ate into margins invisibly. On top of that, every customer quote required 30+ minutes of manual Excel work. That meant calculating material weight against container limits, looking up inventory, and pricing by hand, with no visibility into actual profitability.',
		solution:
			'We built a BOM optimization platform where the operator inputs container length, item type, slat dimensions, and target profit margin. The system instantly calculates the optimal weight within min/target/max constraints, factors in all sunk costs, and generates a complete quote with invoice. Inventory syncs from Excel uploads, XML invoices are parsed automatically, and results export to Excel, CSV, JSON, or PDF.',
		results: [
			{ text: '3% cost optimization per container shipment', icon: 'package' },
			{ text: '20% profit margin protected automatically', icon: 'shield-check' },
			{ text: '~14M VND saved per order for an SME', icon: 'piggy-bank' },
			{ text: '30 min manual quotes to instant generation', icon: 'timer' },
		],
		tech: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
		image: '/past_works/nhutin/bom.png',
		images: [
			{ src: '/past_works/nhutin/bom.png', alt: 'BOM results with weight constraints, profit calculation, and exportable line items' },
			{ src: '/past_works/nhutin/landing_page.png', alt: 'BOM Optimizer: document viewing, invoice parsing, weight calculation' },
			{ src: '/past_works/nhutin/excel_input.png', alt: 'Inventory database sync via Excel upload' },
			{ src: '/past_works/nhutin/invoice.png', alt: 'Intelligent XML invoice parsing with VAT calculation' }
		],
	},
];
