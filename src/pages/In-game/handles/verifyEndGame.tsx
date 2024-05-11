import { cardsFound } from "../dataGame"
import handleEndGame from "./handleEndGame"

export default function verifyEndGame(){
    if (cardsFound.length >= 15){
        handleEndGame(true)
        const barProgress = document.getElementById("BarProgess")
        if (barProgress !== null){
            barProgress.style.animationName = "none"
        }
    }
}