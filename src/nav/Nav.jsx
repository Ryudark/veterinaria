import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/LOGO_COMPLETO.png'
import elsa from '../images/TIPOGRAFIA.png'
import './styles.css'

function Nav() {
    return (
        <div >
            <div className='barra2'>
                <img className='logo' src={logo}/>
                <img className='logo2' src={elsa}/>
            </div>
            <nav className='barra1'> 
                <Link to='/'>
                    Inicio
                </Link>
                <Link to='/cremation'>
                    Cremación
                </Link>
                <Link to='/schedule'>
                    Agenda tu cita
                </Link>
                <a href='tel://+573123199679'> 3123199679</a>
            </nav>
        </div>
    )
}

export default Nav