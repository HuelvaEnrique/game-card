import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';

import ListCards from '../../components/ListCards';

import { ContentPlay, PlayButton } from './PlayStyles';

const Play = () => {
  const [ isReady, setIsReady] = useState(false);
  const [ idsCards, setIdsCards] = useState([]);
  const [ cards, setCards] = useState([]);

  const { lista } = useSelector( state => state.listaDeCartas);

  const iniciarJuego = () => {
    // obtener 6 numeros random
    setIdsCards([]);
    let i = 0
    while (i < 6) {
        const num = numeroAleatorio();
        // evitar que se repitan los numeros
        if (idsCards.includes(num)) {
          return;
        }
        
        setIdsCards((prev) => [...prev, num]);
        i++
    }
    setIsReady(true);

  }

  useEffect(() => {
    if(idsCards.length > 1) {
      // obtener los datos de las cartas segun los numeros aleatorios de idsCards
      const getListCards = () => {

        const listCards = lista.filter(card => idsCards.includes(card.id))
        setCards(listCards);
      }
      
      getListCards()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[ idsCards ] )

  // obtener números aleatorios entre 0 y 107
  const numeroAleatorio = () => {
    const max = 107;
    const min = 0;
    var num = Math.floor(Math.random()*(max - min + 1)) + min;
    return num;
  }

  return (
    <>
    <ContentPlay>
      <button onClick={iniciarJuego}>Jugar de nuevo</button>
      
      <ListCards  list={cards} />

      <PlayButton isReady={isReady}>
        <button onClick={iniciarJuego}>Play</button>
      </PlayButton>
    </ContentPlay>
    </>
  )
}

export default Play