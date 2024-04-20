import PickDifficulty from './PickDifficulty/PickDifficulty'
import style from './style.module.scss'

function Home(){

    function closeProtectScreen(){
        var protectSreen = document.getElementById("protectSreen")
        if (protectSreen !== null){
            protectSreen.style.display = "none"
        }
    }

    function openProtectScreen(){
        var protectSreen = document.getElementById("protectSreen")
        if (protectSreen !== null){
            protectSreen.style.display = "flex"
        }
    }

    return(
        <div className={style.container}>
            <h1 className={style.title}>Jogo<br/>da<br/>Memória</h1>
            <button className={style.playButton} onClick={ () => {openProtectScreen()}}>Jogar!</button>

            <div className={style.ProtectSreen} id='protectSreen'>
                <div className={style.PickDifficulty}>
                    <i className={`fa-solid fa-xmark ${style.PickDifficulty__closeButton}`} onClick={() => {closeProtectScreen()}}></i>
                    <p className={style.PickDifficulty__title}>Escolha a dificuldade</p>
                    <PickDifficulty bgColor='limegreen' link='easy'>Fácil</PickDifficulty>
                    <PickDifficulty bgColor='yellow' link='normal'>Médio</PickDifficulty>
                    <PickDifficulty bgColor='red' link='hard'>Díficil</PickDifficulty>
                </div>
            </div>
        </div>
    )
}

export default Home