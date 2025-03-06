import { data } from "../gameData";

export function handleEndGame() {
	if (data.cardsFound.length === 44) {
		console.log("fim de jogo");
		data.isFinishGame = true;
	}
}
