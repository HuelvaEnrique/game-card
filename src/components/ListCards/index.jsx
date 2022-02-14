import React from 'react'

import { ContentListCards, Card } from './ListCardsStyles' 

const ListCards = ({ list }) => {
  return (
    <ContentListCards>
      {
        list.map( (card) => (
          <Card key={card.id}>
            <img src={require(`../../assets/cartas/${card.id}.jpg`)} alt={card.id} />
            <ul className="atributos">
              <li>Vida: {card.vida}</li>
              <li>Fuerza: {card.fuerza}</li>
              <li>Velocidad: {card.velocidad}</li>
              <li>Ataque: {card.ataque}</li>
            </ul>
          </Card>
        ) )
      }

    </ContentListCards>
  )
}

export default ListCards