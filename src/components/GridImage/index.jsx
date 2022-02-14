import React, { useState } from 'react'
import axios from 'axios';
import { config } from '../../config'
import Modal from '../Modal';

import { ContentGridImage, ContentImage } from './GridImageStyles';

const GridImage = () => {

  const [ listArr, setListArr ] = useState(Array.from(Array(108).keys()));
  const [ isOpen, setIsOpen ] = useState(false);
  const [ currentId, setCurrentId ] = useState(undefined);

  // const random = (min, max) => {
  //   return Math.floor((Math.random() * (max - min + 1)) + min);
  // }

  const abrirModal = (id) => {
    setCurrentId(id)
    setIsOpen(true)
  }

  const guardarInfo =  async (e) => {
    e.preventDefault()
    setIsOpen(false)
    const t = e.target.elements

    const data = {
      id: currentId,
      fuerza: t.fuerza.value,
      vida: t.vida.value,
      velocidad: t.velocidad.value,
      ataque: t.ataque.value,
    }
    console.log(data)

    // PETICIÓN POST A LA API PARA GUARDAR LOS DATOS
    // const agregarDatos = await axios.post(config.URL_AGREGAR_DATOS_HEORES, data)
    // console.log(agregarDatos)
  }

  return (
    <ContentGridImage>
      { 
        listArr.map( idImg => (
          <ContentImage key={idImg}>
            <img src={require(`../../assets/cartas/${idImg}.jpg`)} alt="" />
            <div className="data">
              <button onClick={ () => abrirModal(idImg) } >Agregar Habilidades</button>
            </div>
          </ContentImage>
        ))
      }

      <Modal  isOpen={isOpen} guardarInfo={guardarInfo} setIsOpen={setIsOpen}/>
    </ContentGridImage>
  )
}

export default GridImage