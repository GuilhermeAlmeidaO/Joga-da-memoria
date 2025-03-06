import { data } from "../gameData";
import { sameCard } from "./sameCard";

export function showCard(id: string) {
	const card = document.getElementById(id);
	if (card === null) return;
	if (card.dataset.matched === "true") return;
	if (data.open.lastCardId[0] === id) return;
	if (data.open.lastCardId[1] === id) return;
	if (data.open.number === 3) {
		data.open.number = 1;
		data.open.id.forEach((value) => {
			const card = document.getElementById(value);
			if (card === null) return;
			if (card.dataset.matched === "true") return;
			card.classList.add("text-neutral-900");
			card.classList.remove("text-neutral-400");
		});
		data.open.id.length = 0;
		data.open.lastCardId.length = 0;
	}
	data.open.number += 1;
	card.classList.remove("text-neutral-900");
	card.classList.add("text-neutral-400");
	data.open.id.push(id);
	data.open.lastCardId.push(id);
	sameCard();
}
