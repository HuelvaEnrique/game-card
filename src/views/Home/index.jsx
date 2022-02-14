import React from 'react'
import GridImage from '../../components/GridImage';
import { Link } from 'react-router-dom';

import { ContentHome } from './homeStyles';

const Home = () => {
  return (
    <ContentHome>
      <div className="header">
        <div className="title">
          <h1>Lista de Cartas de Super Heroes</h1>
          <span>Haz click sobre un super heroe y colocale sus atributos</span>
        </div>
        <Link to='/play' className='btn'>Play</Link>
      </div>
      <GridImage />
    </ContentHome>
  )
}

export default Home