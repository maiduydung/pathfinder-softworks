import { caseStudies } from "$lib/data/case-studies";
import { error } from "@sveltejs/kit";

export function entries() {
	return caseStudies.map((study) => ({ slug: study.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const study = caseStudies.find((s) => s.slug === params.slug);
	if (!study) error(404, "Case study not found");

	const currentIndex = caseStudies.indexOf(study);
	const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

	return { study, nextStudy };
}
