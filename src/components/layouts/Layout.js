import React from 'react';
import Rutas from '../../rutas/rutas';
import Header from './Header';

/* COMPONENTE PARA TRARER LOS LAYOUTS */
const Layout = () => {
  return (
    <div>
      <Header/>
      <div>
        <Rutas/>
      </div>
    </div>
  )
}

export default Layout
