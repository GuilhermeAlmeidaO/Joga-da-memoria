import verifyCardsSame from "./verifyCardsSame";
import hideAllCards from "./hideAllCards";
import { infoCards } from "../dataGame";

export default function showCard(idDiv: string, idI: string) {
    const elementDiv = document.getElementById(idDiv);
    const elementI = document.getElementById(idI);

    if (elementDiv && elementI) {
        if (elementDiv.dataset.matched !== "true") {
            if (infoCards.lastCards[0] !== idDiv && infoCards.lastCards[1] !== idDiv) {
                if (infoCards.amount !== 2) {
                    elementDiv.style.backgroundColor = "#C0392B";
                    elementI.style.color = "#fff";

                    infoCards.amount += 1
                    infoCards.cardsOpenedID = [...infoCards.cardsOpenedID, idDiv, idI]
                    infoCards.lastCards = [...infoCards.lastCards, idDiv]
                    verifyCardsSame()
                } else if (infoCards.amount === 2) {
                    hideAllCards()

                    elementDiv.style.backgroundColor = "#C0392B";
                    elementI.style.color = "#fff";

                    infoCards.amount += 1
                    infoCards.cardsOpenedID = [...infoCards.cardsOpenedID, idDiv, idI]
                    infoCards.lastCards = [...infoCards.lastCards, idDiv]
                    verifyCardsSame()
                }
            }
        }
    }
}