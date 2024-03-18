import { Member, Senado } from "./types";

export const capitalizeWords = (sentence: string) => {
	return sentence
		.split(" ")
		.map((word) => {
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(" ");
};

export function filterPartys(obj: Senado) {
	const array = obj.senators.map((party: Member) => {
		return party.PARTIDO;
	});
	return array.filter(
		(value: string, index: number) => array.indexOf(value) === index
	);
}

