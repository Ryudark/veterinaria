import React from 'react'
import colombia from '../../images/NACIONAL.png'
import INTERNACIONAL from '../../images/INTERNACIONAL.png'
// import styles from './style.css'

function Certificate() {
    return (
        <div>
            <h1>Certificado de Viaje ICAs</h1>
            <div className='container d-flex justify-content-cente animate__animated animate__fadeInUp '>
                <div className='row'>
                    <div className='col-md-1'/>
                    <div className='col-md-5'>
                        <div className='card text-center bg-dark'>
                            <img src={colombia} alt="" className='rounded mx-auto d-block'/>
                            <div className='card-body text-light'>
                                <h3>Viaje nacional</h3>
                                <div className="w-75 p-3 mx-auto justify-content-center">
                                    <ul className="list-group">
                                        <li class="list-group-item">Se expide hasta 3 días antes del viaje.</li>
                                        <li class="list-group-item">La medica veterinaria va a tu domicilio, examina tu mascota, valida que este al día en vacunación y desparasitación</li>
                                        <li class="list-group-item">Se te envia el certificado a tu email.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-md-5'>
                        <div className='card text-center bg-dark'>
                            <img src={INTERNACIONAL} alt="" className='rounded mx-auto d-block'/>
                            <div className='card-body text-light text-center'>
                                <h3>Viaje internacional</h3>
                                <div className="w-75 p-3 mx-auto justify-content-center">
                                    <ul className="list-group">
                                        <li class="list-group-item">Se expide 5 días antes del viaje.</li>
                                        <li class="list-group-item">Un Medico Veterinario va a tu domicilio, examina tu mascota, valida que este al día en vacunación y desparasitación.</li>
                                        <li class="list-group-item">Se valida que cumplas con los requisitos del país de destino.</li>
                                        <li class="list-group-item">Se genera el certificado y se sube a la plataforma del ICA SISPAP.</li>
                                        <li class="list-group-item">Se te envía el certificado a tu email.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Debes tener en cuenta que algunos países solicitan el examen de títulos de rabia, el cual es un proceso que puede durar hasta 3 meses.</h2>
        </div>
    )
}

export default Certificate