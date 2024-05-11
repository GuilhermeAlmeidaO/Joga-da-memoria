import { infoCards, cardsFound, updateCardsFound } from "../dataGame";
import verifyEndGame from "./verifyEndGame"

export default function verifyCardsSame() {

    const card1 = infoCards.cardsOpenedID[0]
    const card2 = infoCards.cardsOpenedID[2]
    const card1Splited = card1 !== undefined ? card1.split("0")[0] : null
    const card2Splited = card2 !== undefined ? card2.split("0")[0] : null
    if (card1Splited === card2Splited) {
        const cardElement1 = document.getElementById(card1)
        const cardElement2 = document.getElementById(card2)
        if (cardElement1 !== null && cardElement2 !== null) {
            cardElement1.style.backgroundColor = "transparent"
            cardElement1.style.border = "1px solid #16A085"

            cardElement2.style.backgroundColor = "transparent"
            cardElement2.style.border = "1px solid #16A085"

            cardElement1.dataset.matched = "true"
            cardElement2.dataset.matched = "true"

            updateCardsFound(String(card1Splited))
            verifyEndGame()
        }
    }
}