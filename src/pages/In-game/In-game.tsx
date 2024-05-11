import style from "./style.module.scss"
import { Link } from "react-router-dom";
import MemoryCards from "./cards";
import Timer from "./timer";

function InGame() {
    return (
        <div className={style.container}>
            <div id="protectScreenEndGame" className={style.protectScreenEndGame}>
                <div className={style.endGame}>
                    <p className={style.title} id="protectScreenEndGame__title"></p>

                    <Link to='/'>Página principal</Link>
                </div>
            </div>
            <header>
                <Timer />
            </header>
            <main className={style.containerCard}>
                <MemoryCards />
            </main>
        </div>
    );
}

export default InGame;