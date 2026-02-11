export interface TeamMember {
	slug: string;
	name: string;
	role: string;
	linkedin: string;
	intro: string;
	description: string;
	image: string;
}

export const team: TeamMember[] = [
	{
		slug: "mai-duy-dung",
		name: "Mai Duy Dung",
		role: "Founder — Data & AI",
		linkedin: "https://www.linkedin.com/in/maiduydung/",
		intro:
			"Production AI engineer trained across Japan, China, and North America. Built and deployed real-world data systems under deadline pressure for companies that couldn't afford failure. Founded Pathfinder to bring disciplined engineering and execution to SMEs.",
		description:
			"Earned a scholarship to Japan, then shipped AI pipelines across Tokyo, Shanghai, Vancouver, and San Francisco. ML engineer who builds under pressure and founded Pathfinder to do it for clients.",
		image: "/dung_avatar.jpg",
	},
	{
		slug: "duy-tran",
		name: "Duy Tran",
		role: "Strategic Advisor — US Market",
		linkedin: "https://www.linkedin.com/in/duytranduc/",
		intro:
			"Former Microsoft and Google engineer. Architected large-scale cloud systems and built AI products for real estate investors. Advises Pathfinder on enterprise positioning, US strategy, and growth.",
		description:
			"Architected cloud infrastructure at Microsoft and Google before building PropLytics — AI for real estate investors. Led 1,000+ node data systems, managed global teams across the US and India, and partnered directly with C-level executives at Fortune enterprises. Now advises Pathfinder on strategy, sales, and enterprise positioning.",
		image: "/duy_avatar.jpg",
	},
	{
		slug: "felix",
		name: "Felicjan (Felix) Pavlak-Chiaradia",
		role: "Product Design",
		linkedin: "https://www.linkedin.com/in/felicjanp-c/",
		intro:
			"Industrial designer turned product architect. Designed and shipped full SaaS platforms from scratch. Every interface we deliver passes through his hands.",
		description:
			"Industrial design degree from Dublin, exchange semester at SF State, then straight into founding lead designer at Proplytics — where he built the entire design system from zero. Multilingual, design-obsessed, and now responsible for every client-facing interface we deliver.",
		image: "/felix_avatar.jpg",
	},
	{
		slug: "quang-than",
		name: "Quang Than",
		role: "Full-Stack Engineer",
		linkedin: "https://www.linkedin.com/in/quangthan/",
		intro:
			"10+ years building production systems across automation and web infrastructure. Focused on reliability, performance, and systems that hold under scale.",
		description:
			"Started as an automation engineer in industrial plants, taught himself to code, went freelance, then shipped production apps at three companies before joining us. 10+ years of building things that work under pressure. Now he builds ours.",
		image: "/quang_avatar.jpg",
	},
	{
		slug: "thao-do",
		name: "Thao (Flora) Do",
		role: "Marketing Lead",
		linkedin: "https://www.linkedin.com/in/quynhthao99/",
		intro:
			"Performance marketing specialist across APAC. From Shopee to Google Ads campaigns, she ensures great products reach the right decision-makers.",
		description:
			"From Shopee campaigns in Vietnam to Google Ads across APAC, SEO in the US, and sales development in Malaysia. Colleagues call her 'the extra mile person.' She gets your product in front of the right people.",
		image: "/thao_avatar.jpg",
	},
];
