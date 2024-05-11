export default function handleEndGame(winOrLost: boolean) {
    const protectScreenEndGame = document.getElementById("protectScreenEndGame")
    if (protectScreenEndGame !== null) {
        protectScreenEndGame.style.display = "flex"
    }

    const title = document.getElementById("protectScreenEndGame__title")
    if (title !== null) {
        if (winOrLost === true) {
            title.innerHTML = "Você Ganhou!"
        } else if (winOrLost === false) {
            title.innerHTML = "Você Perdeu!"
        }
    }
}