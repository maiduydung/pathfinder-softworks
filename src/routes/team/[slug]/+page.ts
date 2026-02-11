import { team } from "$lib/data/team";
import { error } from "@sveltejs/kit";

export function entries() {
	return team.map((member) => ({ slug: member.slug }));
}

export function load({ params }: { params: { slug: string } }) {
	const member = team.find((m) => m.slug === params.slug);
	if (!member) error(404, "Team member not found");
	return { member };
}
