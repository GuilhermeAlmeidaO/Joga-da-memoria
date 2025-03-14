import { data } from "../gameData";
import { handleEndGame } from "./endGame";

export function sameCard() {
	const cardsOpen = data.open.id;
	if (cardsOpen.length < 2) return;
	if (cardsOpen[0].split("-")[0] === cardsOpen[1].split("-")[0]) {
		cardsOpen.forEach((cardId) => {
			const card = document.getElementById(cardId);
			if (card === null) return;
			card.dataset.matched = "true";
			card.classList.add("bg-transparent", "border-2", "border-neutral-600");
			data.cardsFound.push(cardId);
		});
		handleEndGame();
	}
}
