import React, { useState } from 'react'
import './style.css'

import consulta from '../../images/CONSULTA.png'
import Diagnostico from '../../images/DIAGNOSTICO.png'
import Examenes from '../../images/EXAMENES.png'
import cirugia from '../../images/CIRUGIA.png'
import { Link } from 'react-router-dom'
function Home() {

    const [toggle, setToggle] = useState(false)

    const [cachorros, setCachorros] = useState(true)
    const [gatitos, setGatitos] = useState(false)
    const [pAdulto, setPAdulto] = useState(false)
    const [gAdulto, setGAdulto] = useState(false)

    function statePet(id){
        if(id===1){
            setCachorros(!cachorros)
            setGAdulto(false)
            setPAdulto(false)
            setGatitos(false)
        }
        if(id===2){
            setCachorros(false)
            setGAdulto(false)
            setPAdulto(false)
            setGatitos(!gatitos)
        }
        if(id===3){
            setCachorros(false)
            setGAdulto(false)
            setPAdulto(!pAdulto)
            setGatitos(false)
        }
        if(id===4){
            setCachorros(false)
            setGAdulto(!gAdulto)
            setPAdulto(false)
            setGatitos(false)
        }
    }

    return (
        <div>
            <div>
                <h1>Atención veterinaria domiciliaria en Bogotá</h1>
                <p>Agenda Tu Consulta Veterinaria A Domicilio, Toma De Examenes De Laboratorio. Planes De Vacunacion Para Cachorros.</p>
                <div className='container d-flex justify-content-cente animate__animated animate__fadeInUp'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='card text-center bg-dark'>
                                <img src={consulta} alt='' className='rounded mx-auto d-block'/>
                                <div className='card-body text-light'>
                                    <h3 className='card-title'>Consulta</h3>
                                    <br />
                                    <br />
                                    <p className='card-text text-secondary'>Se realiza el examen clinico del paciente y se crea la historia clinica.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card text-center bg-dark'>
                                <img src={Diagnostico} alt='' className='rounded mx-auto d-block'/>
                                <div className='card-body text-light'>
                                    <h3 className='card-title'>Diagnostico</h3>
                                    <br />
                                    <p className='card-text text-secondary'>Se obtiene el diagnostico segun lo observado, se realizan inyectologias y se crea la historia clinica del paciente.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card text-center bg-dark'>
                                <img src={Examenes} alt='' className='rounded mx-auto d-block'/>
                                <div className='card-body text-light'>
                                    <h3 className='card-title'>Examenes</h3>
                                    <p className='card-text text-secondary'>Según el criterio médico se podran solicitar examenes o muestras de laboratorio.</p>
                                    <button 
                                        onClick={() => setToggle(!toggle)} 
                                        class="btn btn-outline-secondary rounded-0">
                                        🡳
                                    </button>
                                    {toggle && (
                                    <ul class="list-group">
                                        <li class="list-group-item">Hematología</li>
                                        <li class="list-group-item">Pruebas de coagulación</li>
                                        <li class="list-group-item">Química sanguínea</li>
                                        <li class="list-group-item">Minerales</li>
                                        <li class="list-group-item">Hormonas</li>
                                        <li class="list-group-item">Uroanalisís</li>
                                        <li class="list-group-item">Parasitología</li>
                                        <li class="list-group-item">Dermatología</li>
                                        <li class="list-group-item">Citología</li>
                                        <li class="list-group-item">Inmunológicos</li>
                                        <li class="list-group-item">Microbiología</li>
                                        <li class="list-group-item">Pruebas VCHECK</li>
                                        <li class="list-group-item">Perfiles diagnósticos</li>
                                        <li class="list-group-item">Necropsia</li>
                                    </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card text-center bg-dark'>
                                <img src={cirugia} alt='' className='rounded mx-auto d-block'/>
                                <div className='card-body text-light'>
                                    <h3 className='card-title'>Cirugías</h3>
                                    <br />
                                    <br />
                                    <p className='card-text text-secondary'>Se realizan cirugías de tejidos blandos, esterilizaciones, castraciones y profilaxis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div className='container d-flex justify-content-cente animate__animated animate__fadeInUp'>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='card text-center bg-dark'>
                                <img src={consulta} alt='' className='rounded mx-auto d-block'/>
                                <div className='card-body text-light'>
                                    <h3 className='card-title'>Desparasitación</h3>
                                    <br />
                                    <br />
                                    <p className='card-text text-secondary'>Nuestra veterinaria se encarga de controlar la aparición de los parasitos intestinales.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card text-center bg-dark'>
                                <img src={Diagnostico} alt='' className='rounded mx-auto d-block'/>
                                <div className='card-body text-light'>
                                    <h3 className='card-title'>Corte de uñas</h3>
                                    <br />
                                    <p className='card-text text-secondary'>La veterinaria se encarga de hacer este momento tranquilo y sin incomodidades, evitando que tu mascota se haga daño.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card text-center bg-dark'>
                                <img src={Examenes} alt='' className='rounded mx-auto d-block'/>
                                <div className='card-body text-light'>
                                    <h3 className='card-title'>Chip identificación</h3>
                                    <p className='card-text text-secondary'>Dispositivo electrónico que la veterinaria se encarga de implantar en la parte superior del cuello del animal, debajo de su piel.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card text-center bg-dark'>
                                <img src={cirugia} alt='' className='rounded mx-auto d-block'/>
                                <div className='card-body text-light'>
                                    <h3 className='card-title'>Terapia respiratoria</h3>
                                    <p className='card-text text-secondary'>La veterinaria cuenta con equipo nebulizador, con el cual se realizan terapias respiratorias, eliminando el virus, logrando despejar sus vias respiratorias y asi mejorar los sintomas.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <h2>Exquema de vacunación</h2>
                <div>

                    <div className='card-body text-light'>
                        {/* <p className='card-text text-secondary'>Según el criterio médico se podran solicitar examenes o muestras de laboratorio.</p> */}
                        <button 
                            onClick={() => statePet(1)} 
                            class="btn btn-outline-secondary rounded-0">
                            🡳 Vacunación en cachorros
                        </button>
                        {cachorros && (
                        <ul class="list-group">
                            <li class="list-group-item">Vacuna Puppy</li>
                            <li class="list-group-item">Vacuna Pentavalente</li>
                            <li class="list-group-item">Vacuna Pentavalente</li>
                            <li class="list-group-item">Vacuna Pentavalente + rabia</li>
                            <li class="list-group-item">Vacuna Tos de las perreras</li>
                        </ul>
                        )}
                    </div>
                    <div className='card-body text-light'>
                        {/* <p className='card-text text-secondary'>Según el criterio médico se podran solicitar examenes o muestras de laboratorio.</p> */}
                        <button 
                            onClick={() => statePet(2)} 
                            class="btn btn-outline-secondary rounded-0">
                            🡳 Vacunación en Gatitos
                        </button>
                        {gatitos && (<div>
                            <ul class="list-group">
                                <li class="list-group-item">Vacuna Triple Felina</li>
                                <li class="list-group-item">Vacuna Triple Felina + rabia</li>
                                <h3 className='bg-primary'>Para la vacuna de Leucemia Felina, solicitamos una prueba de Leucemia Felina y que esta salga negativa.</h3>
                                <li class="list-group-item">Vacuna Leucemia Felina</li>
                            </ul>
                        </div>)}
                    </div>
                    <div className='card-body text-light'>
                        {/* <p className='card-text text-secondary'>Según el criterio médico se podran solicitar examenes o muestras de laboratorio.</p> */}
                        <button 
                            onClick={() => statePet(3)} 
                            class="btn btn-outline-secondary rounded-0">
                            🡳 Vacunación En Perros Adultos
                        </button>
                        {pAdulto && (
                        <ul class="list-group">
                            <li class="list-group-item">Vacuna Pentavalente + Rabia</li>
                            <li class="list-group-item">Vacuna Tos de las Perreras</li>
                        </ul>
                        )}
                    </div>
                    <div className='card-body text-light'>
                        {/* <p className='card-text text-secondary'>Según el criterio médico se podran solicitar examenes o muestras de laboratorio.</p> */}
                        <button 
                            onClick={() => statePet(4)} 
                            class="btn btn-outline-secondary rounded-0">
                            🡳 Vacunación En Gatos Adultos
                        </button>
                        {gAdulto && (
                        <ul class="list-group">
                            <li class="list-group-item">Vacuna Triple Felina + Rabia</li>
                            <h3 className='bg-primary'>Si ya lo hemos vacunado antes contra Leucemia Felina o si le realizamos una prueba de Leucemia Felina y esta da negativa</h3>
                            <li class="list-group-item">Vacuna Leucemia Felina</li>
                        </ul>
                        )}
                    </div>
                </div>
                <div>
                    <h2>Certificado de Viaje Nacional o Internacional</h2>
                    <h2>ICA – SISPAP</h2>
                    <h3>Certificado de titulos de rabia para países que lo soliciten</h3>
                    <p>Nuestros Medicos Veterinarios estan debidamente registrados y habilitados en el sistema SISPAP del ICA para hacer el registro de mascotas que viajan al exterior.
                    Asi mismo, contamos con convenios para emitir el certificado de TITULOS DE RABIA para aquellos paises que lo solicitan.</p>
                    <Link to='/certificate'>
                        <span>🐾 Mas información</span>
                    </Link>
                </div>

                <div>
                    <h1>Medica Veterinaria Verificada</h1>
                    <p>Medica Veterinaria que asiste a tu domicilio esta previamente validada ante COMVEZCOL. Si quieres validar que la Medica Veterinaria es quien esta realizando la consulta a tu mascota, puedes ingresar directamente a la pagina de COMVEZCOL y realizar la verificación de la tarjeta profesional o haciendo click <a href='https://administrador.consejoapp.com.co/index.php/consultas/profesionales'>AQUI</a></p>
                </div>
            </div>
        </div>
    )
}

export default Home