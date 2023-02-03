import React from 'react'
// import styles from './styles.css'

import funeraria from "../../images/FUNERARIA.png"

function Cremation() {
  return (

    <div>
        <h1>Servicio</h1>
        <div className='container d-flex justify-content-cente animate__animated animate__fadeInUp'>
          <div className='col-md-1'></div>
          <div className='col-md-5'>
              <div className='card text-center bg-dark'>
                  <img src={funeraria} alt="" className='rounded mx-auto d-block'/>
                  <div className='card-body text-light'>
                      <h3>Individual</h3>
                      <div className="w-75 p-3 mx-auto justify-content-center">
                          <ul className="list-group">
                              <li class="list-group-item">Traslado</li>
                              <li class="list-group-item">Entrega de Cenizas</li>
                              <li class="list-group-item">Certificado de cremación</li>
                              <li class="list-group-item">                     Recordatorio con foto                 </li>
                              <li class="list-group-item">Cofre de madera</li>
                              <li class="list-group-item">Sala de despedida por 2 horas (si la familia lo desea)</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className='col-md-1'></div>
          <div className='col-md-5'>
              <div className='card text-center bg-dark'>
                  <img src={funeraria} alt="" className='rounded mx-auto d-block'/>
                  <div className='card-body text-light text-center'>
                      <h3>Colectivo</h3>
                      <div className="w-75 p-3 mx-auto justify-content-center">
                          <ul className="list-group">
                              <br />
                              <li class="list-group-item">Traslado</li>
                              <li class="list-group-item">No se entrega cenizas</li>
                              <li class="list-group-item">Certificado de cremación</li>
                              <li class="list-group-item">Recordatorio con foto</li>
                              <li class="list-group-item">            Se te envía el certificado a tu email.           </li>
                              <br />
                              <br />
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
                
        </div>
        <h2>Derecho de autor</h2>
    </div>
    // <div>
    //   <h1>Servicio </h1>
    //   <div className='container d-flex justify-content-cente animate__animated animate__fadeInUp bg-secondary'>
    //     <div className='row'>
    //       <div className='col-md-1'/>
    //       <div className='col-md-5'>
    //         <div className='card text-center bg-dark'>
    //           <img src={funeraria} alt="" className='rounded mx-auto d-block'/>
    //           <div className='card-body text-light'>
    //             <h3>Individual</h3>
    //             <div className="w-75 p-3 mx-auto justify-content-center">
    //               <ul className="list-group">
    //                 <li class="list-group-item">Traslado</li>
    //                 <li class="list-group-item">Entrega de CEnizas</li>
    //                 <li class="list-group-item">Certificado de cremación</li>
    //                 <li class="list-group-item">Recordatorio con foto</li>
    //                 <li class="list-group-item">Cofre de madera</li>
    //                 <li class="list-group-item">Sala de despedida por 2 horas (si la familia lo desea)</li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col-md-5'>
    //         <div className='card text-center bg-dark'>
    //           <img src={funeraria} alt="" className='rounded mx-auto d-block'/>
    //           <div className='card-body text-light text-center'>
    //             <h3>Colectivo</h3>
    //             <div className="w-75 p-3 mx-auto justify-content-center">
    //               <ul className="list-group">
    //                 <li class="list-group-item">Traslado</li>
    //                 <li class="list-group-item">No se entrega cenizas</li>
    //                 <li class="list-group-item">Certificado de cremación</li>
    //                 <li class="list-group-item">Recordatorio con foto</li>
    //                 <li class="list-group-item">Sala de despedida por 2 horas</li>
    //               </ul>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <h2>Derechos reservados</h2>
    // </div>
  )
}

export default Cremation