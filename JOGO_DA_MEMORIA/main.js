import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import './src/styles/settings/reset.css'


import PlayerText from './src/components/PlayerText'
import BoardGame from './src/objects/BoardGame'

const $root = document.querySelector("#root")
const $htmlBoardGame = BoardGame(6) //Desennha o tabuleiro

const $htmlPlayerText = PlayerText("Player 1")


$root.insertAdjacentHTML('beforeend', $htmlBoardGame)
/*$root.insertAdjacentHTML('beforeend', $htmlPlayerText)*/