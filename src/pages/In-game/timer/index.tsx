import handleEndGame from '../handles/handleEndGame';
import verifyEndGame from '../handles/verifyEndGame';
import style from './style.module.scss';
import { useState, useEffect } from 'react';

function Timer() {
    const queryString = window.location.search;
    const difficult = queryString.split("=")[1];
    const [difficultGameTime, setDifficultGameTime] = useState(1);
    const [displaySeg, setDisplaySeg] = useState(difficultGameTime);

    useEffect(() => {
        let countdown: NodeJS.Timeout | null = null;

        if (difficult === "easy") {
            setDifficultGameTime(120);
        } else if (difficult === "normal") {
            setDifficultGameTime(80);
        } else if (difficult === "hard") {
            setDifficultGameTime(50);
        }

        if (difficult !== "test") {
            countdown = setInterval(() => {
                setDifficultGameTime(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(countdown!);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }

        return () => {
            if (countdown) clearInterval(countdown);
        };
    }, [difficult]);

    useEffect(() => {
        setDisplaySeg(difficultGameTime);
        if (difficultGameTime === 0) {
            handleEndGame(false)
            verifyEndGame()
        }
    }, [difficultGameTime]);

    return (
        <div className={style.container}>
            <span className={style.progress}>{displaySeg}</span>
        </div>
    );
}

export default Timer;
