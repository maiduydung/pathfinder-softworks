export interface Service {
	slug: string;
	title: string;
	outcome: string;
	description: string;
	items: string[];
	icon: string;
}

export const services: Service[] = [
	{
		slug: 'saas-products',
		title: 'SaaS Products',
		outcome: 'Launch a product your customers pay for',
		description:
			'We take your idea from concept to a live, revenue-generating SaaS platform. Accounts, billing, dashboards, and the infrastructure to scale — all built in from day one.',
		items: [
			'From idea to paying customers, end to end',
			'Accounts, billing, and dashboards built in',
			'Built to grow with your business',
		],
		icon: 'globe',
	},
	{
		slug: 'digital-transformation',
		title: 'Digital Transformation',
		outcome: 'Kill the spreadsheets, save the hours',
		description:
			'We replace manual workflows, scattered spreadsheets, and disconnected tools with integrated systems that automate repetitive work and give you real-time visibility across your operations.',
		items: [
			'Automate repetitive work across your team',
			'Real-time dashboards instead of spreadsheets',
			'Connects with tools you already use',
		],
		icon: 'bolt',
	},
	{
		slug: 'ai-data',
		title: 'AI & Data Intelligence',
		outcome: 'Turn scattered data into a competitive advantage',
		description:
			'We build production-grade data pipelines and AI systems that collect, process, and analyze information from dozens of sources — delivering actionable insights your competitors miss.',
		items: [
			'Collect, organize, and analyze data automatically',
			'Dozens of sources unified into one view',
			'Reliable systems, not one-off demos',
		],
		icon: 'cpu',
	},
	{
		slug: 'custom-software',
		title: 'Custom Business Software',
		outcome: 'Software that fits how you actually work',
		description:
			'Off-the-shelf tools never quite fit. We build operations platforms, internal tools, and custom applications designed around your team\'s actual workflows — with zero disruption.',
		items: [
			'Operations, inventory, and internal tools',
			'Works with your existing processes',
			'Zero workflow disruption',
		],
		icon: 'terminal',
	},
];

export const processSteps = [
	{
		number: '01',
		title: 'Discovery',
		description:
			'We learn your business, your users, and the outcome you need. No generic questionnaires — we dig into what actually matters to your bottom line.',
	},
	{
		number: '02',
		title: 'Design & Plan',
		description:
			'Our designer maps out the UX. Our engineers plan the architecture. You see mockups and a clear roadmap before a single line of code is written.',
	},
	{
		number: '03',
		title: 'Build & Ship',
		description:
			'Iterative development with demos every week. You see real progress, not status reports. We ship working software, not slide decks.',
	},
	{
		number: '04',
		title: 'Measure & Iterate',
		description:
			'We track the outcomes we promised: time saved, costs cut, revenue generated. Then we optimize based on real data, not assumptions.',
	},
];

export const industries = [
	'Real Estate & PropTech',
	'Financial Services',
	'Venture Capital',
	'Manufacturing',
	'E-Commerce',
	'Supply Chain & Logistics',
];

export const techStack = [
	{
		title: 'Design & Product',
		tools: ['Figma', 'Adobe Suite', 'UX Research', 'Prototyping', 'Brand Identity', 'Design Systems'],
	},
	{
		title: 'Marketing & Growth',
		tools: ['Google Ads', 'Analytics', 'SEO & SEM', 'Content Strategy', 'Social Media', 'CRO'],
	},
	{
		title: 'Frontend',
		tools: ['Next.js', 'React', 'Svelte', 'TypeScript', 'Tailwind CSS'],
	},
	{
		title: 'Backend & Automation',
		tools: ['Python', 'FastAPI', 'PostgreSQL', 'DuckDB', 'Playwright', 'Scrapy'],
	},
	{
		title: 'AI & Machine Learning',
		tools: ['LLMs', 'LangChain', 'Hugging Face', 'PGVector', 'Pytorch'],
	},
	{
		title: 'Infrastructure',
		tools: ['Azure', 'Docker', 'Stripe', 'GitHub Actions', 'Sentry'],
	},
];
