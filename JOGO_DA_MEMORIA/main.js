import './src/styles/settings/colors.css'
import './src/styles/elements/base.css'
import './src/styles/settings/reset.css'

import CardGame from './src/components/CardGame'

const $root = document.querySelector("#root")

const $htmlCardGame =  CardGame()


function multiCards() {
    for (let i = 0; i <= 6; i++){
        $root.insertAdjacentHTML('beforeend', $htmlCardGame)
    }
}

multiCards()

