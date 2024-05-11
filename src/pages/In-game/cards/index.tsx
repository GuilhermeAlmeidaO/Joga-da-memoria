import style from '../style.module.scss'
import showCard from '../handles/ShowCard';

function MemoryCards() {

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

    const entries2 = [...entries]
    const shuffledEntries2 = entries2.sort(() => Math.random() - 0.5);
    return (
        <div>
            {
                shuffledEntries.map(([key, value]) => (
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
                ))
            }
            {
                shuffledEntries2.map(([key, value]) => (
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
                ))
            }
        </div>
    )
}

export default MemoryCards