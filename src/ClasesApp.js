import React from 'react'
import { AppRouter } from './routers/AppRouter';
import './estilos.css'
import './logo.jpg'
import { Logo } from './Logo';


export const ClasesApp = () => {
    return (
        <div>
            <div className="container-fluid">
                <div id="logo" className="row justify-content-center">
                    <Logo/>
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
