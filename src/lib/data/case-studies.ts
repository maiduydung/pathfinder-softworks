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
		slug: 'investment-intelligence',
		title: 'Investment Intelligence Platform',
		subtitle: 'AI & Data',
		link: null,
		metric: '100M+',
		metricDetail: 'companies ranked instantly for VC deal flow',
		stats: [
			{ value: '40+', label: 'Data sources scraped' },
			{ value: '100M+', label: 'Companies profiled' },
			{ value: '1B+', label: 'Records processed' },
		],
		summary:
			'An ML-powered intelligence system for VCs hunting early-stage startups. We scrape LinkedIn, Crunchbase, Hacker News, and 40+ other sources across multiple languages, then rank 100M+ companies against each investor\'s profile. Billions of records, instant results.',
		problem:
			'VC investors couldn\'t research fast enough. Deal flow data was scattered across LinkedIn, Crunchbase, Hacker News, government registries, and dozens of other platforms, in multiple languages. By the time manual research was complete, competitors had already moved on the best deals.',
		solution:
			'We built an automated intelligence pipeline that scrapes 40+ data sources across multiple languages, profiles 100M+ companies, and uses a custom ML model to rank and score every company against each VC\'s specific investment thesis. Billions of records processed, results delivered instantly to each investor\'s dashboard.',
		results: [
			{ text: '40+ sources scraped (LinkedIn, Crunchbase, HN, etc.)', icon: 'globe' },
			{ text: 'ML ranking model trained on investor profiles', icon: 'brain' },
			{ text: 'Billions of records, sub-second ranking', icon: 'zap' },
			{ text: 'Multi-language processing across global markets', icon: 'languages' },
		],
		tech: ['Ruby on Rails', 'Python', 'LangChain', 'PostgreSQL', 'PGVector', 'Playwright', 'Scrapy', 'PyTorch'],
	},
	{
		slug: 'nhu-tin',
		title: 'Nhu Tin',
		subtitle: 'Digital Transformation',
		link: 'https://nhutin.com/',
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
		image: '/past_works/nhutin/nhutin_bom.png',
		images: [
			{ src: '/past_works/nhutin/nhutin_landing_page.png', alt: 'Nhu Tin BOM Optimizer: document viewing, invoice parsing, weight calculation' },
			{ src: '/past_works/nhutin/nhutin_shipment_input_fake.png', alt: 'Shipment input for container length, item type, dimensions, and profit margin' },
			{ src: '/past_works/nhutin/nhutin_bom.png', alt: 'BOM results with weight constraints, profit calculation, and exportable line items' },
			{ src: '/past_works/nhutin/nhutin_excel_input.png', alt: 'Inventory database sync via Excel upload' },
			{ src: '/past_works/nhutin/nhutin_invoice.png', alt: 'Intelligent XML invoice parsing with VAT calculation' },
		],
	},
];
