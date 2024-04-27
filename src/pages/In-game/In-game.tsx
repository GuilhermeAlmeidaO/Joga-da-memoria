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
            setDifficultGameTime(90);
        } else if (difficult === "normal") {
            setDifficultGameTime(50);
        } else if (difficult === "hard") {
            setDifficultGameTime(3);
        }
    }, [difficult]);

    const handleAnimationEnd = () => {
        const protectScreenEndGame = document.getElementById("protectScreenEndGame")
        if (protectScreenEndGame !== null) {
            protectScreenEndGame.style.display = "none"
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

    const [cardOpened, setCardOpened] = useState({
        amount: 0,
        idOpend: [] as string[]
    })

    function showCard(idDiv: string, idI: string) {
        const elementDiv = document.getElementById(idDiv);
        const elementI = document.getElementById(idI);

        if (elementDiv && elementI) {
            if (cardOpened.amount !== 2) {
                elementDiv.style.backgroundColor = "#C0392B";
                elementI.style.color = "#fff";

                const incrementAmount = cardOpened.amount + 1;
                const idOpend = [...cardOpened.idOpend, idDiv, idI];
                setCardOpened({ amount: incrementAmount, idOpend });
            } else if (cardOpened.amount === 2) {
                cardOpened.idOpend.forEach((id) => {
                    if (id.slice(-1) === "i") {
                        const element = document.getElementById(id)
                        if (element !== null) {
                            element.style.color = "#16A085"
                        }
                    } else if(id.slice(-1) === "d"){
                        const element = document.getElementById(id)
                        if (element !== null) {
                            element.style.backgroundColor = "#16A085"
                        }
                    }
                })
                setCardOpened({ amount: 0, idOpend: [] });
            }
        }
    }

    return (
        <div className={style.container}>
            <div id="protectScreenEndGame" className={style.protectScreenEndGame}>
                <div className={style.endGame}>
                    <p className={style.title}>Você venceu!</p>

                    <Link to='/'>Clique para voltar para a tela principal</Link>
                </div>
            </div>
            <header>
                <div className={style.BarProgressCotainer}>
                    <BarProgress ref={progressRef} onAnimationEnd={handleAnimationEnd}></BarProgress>
                </div>
            </header>
            <main className={style.containerCard}>
                {shuffledEntries.map(([key, value]) => (
                    <div
                        key={`${key}01`}
                        className={style.card}
                        onClick={() => showCard(`${key}01d`, `${key}01i`)}
                        id={`${key}01d`}>
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
                        id={`${key}02d`}>
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