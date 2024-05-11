import { infoCards } from "../dataGame"

export default function hideAllCards() {
    const sameCardFound1 = document.getElementById(infoCards.cardsOpenedID[0])
    const sameCardFound2 = document.getElementById(infoCards.cardsOpenedID[2])
    if (sameCardFound1 !== null && sameCardFound2 !== null) {
        const dataSameCardFound1 = sameCardFound1.dataset.matched
        const dataSameCardFound2 = sameCardFound2.dataset.matched

        if (dataSameCardFound1 !== "true" && dataSameCardFound2 !== "true") {
            infoCards.cardsOpenedID.forEach(card => {
                const lastLetter = card.slice(-1)
                const element = document.getElementById(card)
                infoCards.lastCards = []
                if (element !== null) {
                    if (lastLetter === "d") {
                        element.style.backgroundColor = "#16A085"
                    } else if (lastLetter === "i") {
                        element.style.color = "#16A085"
                    }
                }
            })
        }
        infoCards.cardsOpenedID = []
        infoCards.amount = 0
    }
}