import React from 'react'
import logo from "../../img/logo.png"

const Header = () => {
  return (
    <div className='container'>
    <div className="bg-primary-subtle d-flex justify-content-around align-items-center">
      <div>
        <h1>Mi lista de contactos</h1>
      </div>
      <div className='d-flex align-items-center'>
        <p>Developed by</p>
        <img src={logo} alt="logo Yeimy Dev" className='w-25'/>
      </div>
    </div>
    </div>
  )
}

export default Header