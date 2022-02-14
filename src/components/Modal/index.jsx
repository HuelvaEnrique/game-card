import React from 'react'

import { ContentModal, ModalData, Overlay } from './ModalStyles'

const Modal = ({isOpen, guardarInfo, setIsOpen }) => {
  return (
    <>
      <ContentModal isOpen={isOpen}>  
        <ModalData>
          <form className='form-modal' onSubmit={guardarInfo}>
            <div className="content-input">
              <label htmlFor="fuerza">Fuerza</label>
              <input type="text" name="fuerza" id="fuerza" required/>
            </div>
            <div className="content-input">
              <label htmlFor="vida">Vida</label>
              <input type="text" name="vida" id="vida" required/>
            </div>
            <div className="content-input">
              <label htmlFor="velocidad">Velocidad</label>
              <input type="text" name="velocidad" id="velocidad" required/>
            </div>
            <div className="content-input">
              <label htmlFor="ataque">Ataque</label>
              <input type="text" name="ataque" id="ataque" required/>
            </div>
            <button type='submit'>Guardar</button>
          </form>
        </ModalData>
        <Overlay onClick={ () => setIsOpen(false) }></Overlay>
      </ContentModal>
    </>
  )
}

export default Modal