import React from 'react'
import { AppRouter } from './routers/AppRouter';
import './estilos.css'


export const ClasesApp = () => {
    return (
        <div>
            <div className="container-fluid">
                <div id="logo" className="row justify-content-center">
                    <img src="http://tecno.unca.edu.ar/wp-content/uploads/2017/05/18575422_10211412467781016_1446490516_o.jpg" alt="logo-tecno-unca"/>
                </div>
            </div>

            <AppRouter/>



            <footer className="footer">
                <div className="container-fluid">
                    <p>Copyright 2020-Arquitectura de Software, Carrizo-Gomez-Toloza.</p>      
                </div>
            </footer> 
        </div>
    )
}
