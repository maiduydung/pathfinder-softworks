export interface TeamLocation {
	city: string;
	country: string;
	timezone: string;
}

export interface TeamMember {
	slug: string;
	name: string;
	gridName?: string;
	role: string;
	gridRole?: string;
	linkedin: string;
	tagline: string;
	intro: string;
	description: string[];
	image: string;
	location: TeamLocation;
}

export const team: TeamMember[] = [
	{
		slug: "mai-duy-dung",
		name: "Mai Duy Dung",
		role: "Founder - Data & AI",
		linkedin: "https://www.linkedin.com/in/maiduydung/",
		tagline:
			"Delivered production-grade AI systems across 5+ countries. From Vietnam to Japan to the U.S.",
		intro:
			"I build data and AI systems that companies actually rely on. Trained in Japan on scholarship, worked across Asia and North America, and trusted to deliver when timelines were tight and the numbers had to be right.",
		description: [
			"My background is in building end-to-end data systems: From large-scale data collection and processing to analytics, automation, and AI features that decision-makers use daily. I've led infrastructure for high-volume platforms handling hundreds of thousands of records, built internal tools for investors and operators, and deployed systems on cloud environments that had to stay stable under pressure.",
			"I'm comfortable working across time zones, directly with founders and executives, and translating business goals into systems that reduce manual work, surface the right metrics, and protect margins.",
			"Pathfinder is my way of bringing that execution discipline to SMEs that need serious systems without enterprise bureaucracy.",
		],
		image: "/dung_avatar.jpg",
		location: { city: "Ho Chi Minh City", country: "Vietnam", timezone: "GMT+7" },
	},
	{
		slug: "duy-tran",
		name: "Duy Tran",
		role: "Strategic Advisor - US Market",
		gridRole: "Strategic Advisor",
		linkedin: "https://www.linkedin.com/in/duytranduc/",
		tagline:
			"Ex-Google & Microsoft. Venture-backed founder. Brings Silicon Valley discipline to our U.S. strategy.",
		intro:
			"Former Microsoft and Google cloud leader turned venture-backed founder. Selected into Sam Altman's Residency and backed through Draper House Americas. Built enterprise-scale data systems, led global engineering teams, and closed multi-million dollar cloud initiatives before stepping into startups.",
		description: [
			"Duy has operated at both ends of the spectrum: Enterprise and venture-backed startup. At Microsoft and Google, he led large cloud engagements, managed distributed engineering teams across the U.S. and India, and worked directly with C-level executives on mission-critical infrastructure.",
			"He later founded PropLytics, an AI platform for U.S. real estate investors, and was selected into Sam Altman's Residency, joining a global cohort of high-growth founders.",
			"Today, he advises Pathfinder on U.S. strategy, enterprise positioning, and how to win credibility in markets where standards are unforgiving and execution matters.",
		],
		image: "/duy_avatar.jpg",
		location: { city: "San Francisco", country: "United States", timezone: "GMT-8" },
	},
	{
		slug: "felix",
		name: "Felicjan (Felix) Pavlak-Chiaradia",
		gridName: "Felix Pavlak-Chiaradia",
		role: "Product Design",
		linkedin: "https://www.linkedin.com/in/felicjanp-c/",
		tagline:
			"Founding UI/UX lead at PropLytics, built the product's design system from zero. Every interface we ship goes through his hands.",
		intro:
			"Product designer with an industrial design background and international training in Dublin and San Francisco. Focused on building software that feels clear, trustworthy, and easy to use, even when the product is complex.",
		description: [
			"Felix designs software that feels clear the first time you use it. With a background in industrial product design and international training in Dublin and San Francisco, he approaches digital products like engineered systems, every component intentional, every interaction purposeful.",
			"He has led the design direction of venture-backed software from zero to launch, shaping product structure, user flows, and brand presence. If something feels confusing, slow, or visually off, it does not ship.",
			"At Pathfinder, he owns the final user experience before any client sees it.",
		],
		image: "/felix_avatar.jpg",
		location: { city: "Warsaw", country: "Poland", timezone: "GMT+1" },
	},
	{
		slug: "quang-than",
		name: "Quang Than",
		role: "Full-Stack Engineer",
		linkedin: "https://www.linkedin.com/in/quangthan/",
		tagline:
			"Industrial engineer turned full-stack architect. 10+ years building systems that don't break. ",
		intro:
			"Engineer with over a decade of experience, starting in industrial automation before transitioning into full-stack web systems. Brings reliability-first thinking into modern software.",
		description: [
			"Quang began his career designing and maintaining industrial control systems, environments where failure isn't acceptable. He later transitioned into web and application development, carrying that same reliability mindset into modern stacks like React, Node.js, and scalable backend systems.",
			"He has delivered production software for startups and remote teams across multiple countries. Calm under pressure and deeply practical, Quang focuses on building systems that are maintainable, performant, and dependable long after launch.",
		],
		image: "/quang_avatar.jpg",
		location: { city: "Ho Chi Minh City", country: "Vietnam", timezone: "GMT+7" },
	},
	{
		slug: "thao-do",
		name: "Thao (Flora) Do",
		role: "Marketing Lead",
		linkedin: "https://www.linkedin.com/in/quynhthao99/",
		tagline:
			"From Shopee campaigns in Vietnam to Google Ads across APAC and SEO in the U.S. She gets your product in front of the right people.",
		intro:
			"Marketing and growth specialist with experience across Vietnam, Malaysia, and the U.S. Focused on turning strong products into real visibility, pipeline, and revenue.",
		description: [
			"Thao brings hands-on experience across Shopee campaign operations, U.S. focused SEO strategy, and Google Ads performance management across APAC. She understands both acquisition and positioning: how to frame a product, target the right audience, and drive measurable visibility.",
			"Her recent LinkedIn campaign work generated 8,000+ impressions within days, contributing directly to brand exposure among U.S. founders and investors. She focuses on one thing: making sure the right people see the right message at the right time.",
		],
		image: "/thao_avatar.jpg",
		location: { city: "Ho Chi Minh City", country: "Vietnam", timezone: "GMT+7" },
	},
];
