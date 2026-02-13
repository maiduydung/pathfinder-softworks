export interface CaseStudy {
	slug: string;
	title: string;
	subtitle: string;
	link: string | null;
	metric: string;
	metricDetail: string;
	summary: string;
	problem: string;
	solution: string;
	results: string[];
	tech: string[];
	image?: string;
}

export const caseStudies: CaseStudy[] = [
	{
		slug: 'proplytics',
		title: 'Proplytics',
		subtitle: 'SaaS Platform',
		link: 'https://www.linkedin.com/company/proplytics/',
		metric: 'Hours → Seconds',
		metricDetail: 'per investment decision',
		summary:
			'Hours of spreadsheet modeling replaced with instant, confidence-scored investment analysis.',
		problem:
			'Real estate investors pulled data from a dozen sources and ran manual spreadsheet models for every property. The process didn\'t scale — and critical decisions were based on stale data and gut feel.',
		solution:
			'We built a SaaS platform that gathers market data automatically, runs financial models in real time, and scores every data point for reliability. Investors get instant analysis instead of hours of spreadsheet work.',
		results: [
			'Hours of analysis reduced to seconds',
			'Financial insights no competitor offers',
			'Confidence scoring on every data point',
			'Venture-backed and growing',
		],
		tech: ['React', 'Python', 'FastAPI', 'PostgreSQL', 'Azure', 'Docker'],
	},
	{
		slug: 'investment-intelligence',
		title: 'Investment Intelligence Platform',
		subtitle: 'AI & Data',
		link: null,
		metric: '40+',
		metricDetail: 'data sources, zero manual work',
		summary:
			'Manual deal research across 40+ platforms and two languages — fully automated from start to finish.',
		problem:
			'VC investors couldn\'t research fast enough. Data was scattered across dozens of platforms in multiple languages. By the time research was complete, the best deals were already gone.',
		solution:
			'We built an automated intelligence system that monitors 40+ data sources, processes content in Japanese and English, and delivers scored investment opportunities directly to each investor\'s dashboard.',
		results: [
			'Raw data to scored opportunities, fully automated',
			'40+ sources consolidated into one view',
			'Deals surfaced before competitors see them',
			'Bilingual processing (Japanese & English)',
		],
		tech: ['Python', 'LangChain', 'PostgreSQL', 'PGVector', 'Playwright', 'Scrapy'],
	},
	{
		slug: 'nhu-tin',
		title: 'Nhu Tin',
		subtitle: 'Digital Transformation',
		link: 'https://nhutin.com/',
		metric: '30 min → Instant',
		metricDetail: 'per customer quote',
		summary:
			'30-minute manual Excel calculations replaced with instant, margin-protected quotes.',
		problem:
			'Every order required 30+ minutes of manual material calculations in Excel. The process caused slow quoting, inconsistent margins, and zero visibility into actual profitability across the business.',
		solution:
			'We built an operations platform that optimizes material usage instantly, tracks inventory in real time, and protects profit margins automatically on every quote — without changing how the team works.',
		results: [
			'Instant quotes instead of 30-minute calculations',
			'Profit margins protected automatically',
			'Real-time inventory visibility',
			'Zero workflow disruption for the team',
		],
		tech: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
	},
];
