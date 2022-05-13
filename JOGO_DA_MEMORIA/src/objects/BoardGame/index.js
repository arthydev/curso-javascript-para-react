import './style.css'
import CardGame from "../../components/CardGame"


//Cria tabuleiro com quantidade de cartas dinâmica
function BoardGame (cardsAmount) {
    const $htmlCardGame =  CardGame()

    //Cria os cards de acordo com a quantidade
    const $htmlBoardGame = $htmlCardGame.repeat(cardsAmount)
    return `
    <section class="board-game">
        ${$htmlBoardGame}
    </section>
    `
}

export default BoardGame