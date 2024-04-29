import styled from "styled-components";
import style from "./style.module.scss"
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function InGame() {
    const queryString = window.location.search;
    const difficult = queryString.split("=")[1];
    const [difficultGameTime, setDifficultGameTime] = useState(0);
    const progressRef = useRef(null);

    useEffect(() => {
        if (difficult === "easy") {
            setDifficultGameTime(120);
        } else if (difficult === "normal") {
            setDifficultGameTime(80);
        } else if (difficult === "hard") {
            setDifficultGameTime(50);
        }
    }, [difficult]);

    const handleAnimationEnd = (winOrLost: boolean) => {
        const protectScreenEndGame = document.getElementById("protectScreenEndGame")
        if (protectScreenEndGame !== null) {
            protectScreenEndGame.style.display = "flex"
        }

        const title = document.getElementById("protectScreenEndGame__title")
        if (title !== null){
            if (winOrLost === true){
                title.innerHTML = "Você Ganhou!"
            } else if (winOrLost === false){
                title.innerHTML = "Você Perdeu!"
            }
        }
    };

    const BarProgress = styled.div`
        height: 10px;
        width: 100%;
        background-color: #f00;
        animation-name: progress;
        animation-duration: ${difficultGameTime}s;

        @keyframes progress {
            from {
                width: 100%;
            }

            to {
                width: 0;
            }
        }

        &:not(.end-animation) {
            animation-fill-mode: forwards;
        }
    `;

    type ListCardsType = {
        [key: string]: string;
    };

    const listCards: ListCardsType = {
        envolpe: "fa-solid fa-envelope",
        plus: "fa-solid fa-plus",
        laptop: "fa-solid fa-laptop",
        house: "fa-solid fa-house",
        star: "fa-solid fa-star",
        heart: "fa-solid fa-heart",
        cloud: "fa-solid fa-cloud",
        bell: "fa-solid fa-bell",
        car: "fa-solid fa-car",
        apple: "fa-brands fa-apple",
        gear: "fa-solid fa-gear",
        minus: "fa-solid fa-minus",
        plane: "fa-solid fa-plane",
        folder: "fa-solid fa-folder",
        check: "fa-solid fa-check",
    }

    const entries = Object.entries(listCards)
    const shuffledEntries = entries.sort(() => Math.random() - 0.5);
    const shuffledEntries2 = entries.sort(() => Math.random() - 0.5);

    type InfoCardsType = {
        cardsOpenedID: string[]
        amount: number
        lastCards: string[]
    };

    const infoCards: InfoCardsType = {
        "cardsOpenedID": [],
        "amount": 0,
        "lastCards": []
    }

    const cardsFound = []
    function verifyEndGame(){
        if (cardsFound.length >= 15){
            handleAnimationEnd(true)
            const barProgress = document.getElementById("BarProgess")
            if (barProgress !== null){
                barProgress.style.animationName = "none"
            }
        }
    }

    function verifyCardsSame(idCard: string) {
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

                cardsFound.push(card1Splited)
                verifyEndGame()
            }
        }
    }

    function hideAllCards() {
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

    function showCard(idDiv: string, idI: string) {
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
                        verifyCardsSame(idDiv)
                    } else if (infoCards.amount === 2) {
                        hideAllCards()

                        elementDiv.style.backgroundColor = "#C0392B";
                        elementI.style.color = "#fff";

                        infoCards.amount += 1
                        infoCards.cardsOpenedID = [...infoCards.cardsOpenedID, idDiv, idI]
                        infoCards.lastCards = [...infoCards.lastCards, idDiv]
                        verifyCardsSame(idDiv)
                    }
                }
            }
        }
    }

    return (
        <div className={style.container}>
            <div id="protectScreenEndGame" className={style.protectScreenEndGame}>
                <div className={style.endGame}>
                    <p className={style.title} id="protectScreenEndGame__title"></p>

                    <Link to='/'>Clique para voltar para a tela principal</Link>
                </div>
            </div>
            <header>
                <div className={style.BarProgressCotainer}>
                    <BarProgress ref={progressRef} onAnimationEnd={() => {handleAnimationEnd(false)}} id="BarProgess"></BarProgress>
                </div>
            </header>
            <main className={style.containerCard}>
                {shuffledEntries.map(([key, value]) => (
                    <div
                        key={`${key}01`}
                        className={style.card}
                        onClick={() => showCard(`${key}01d`, `${key}01i`)}
                        id={`${key}01d`}
                        data-matched="false">
                        <i
                            className={`${value}`}
                            key={`${key}01i`}
                            id={`${key}01i`}></i>
                    </div>
                ))}
                {shuffledEntries2.map(([key, value]) => (
                    <div
                        key={`${key}02`}
                        className={style.card}
                        onClick={
                            () => { showCard(`${key}02d`, `${key}02i`) }
                        }
                        id={`${key}02d`}
                        data-matched="false">
                        <i
                            className={`${value}`}
                            key={`${key}02i`}
                            id={`${key}02i`}></i>
                    </div>
                ))}
            </main>
        </div>
    );
}

export default InGame;