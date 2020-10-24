import React from 'react'
import { AppRouter } from './routers/AppRouter';
import { Logo } from './Logo';
import { Footer } from './Footer';
import './estilos.css'

export const ClasesApp = () => {
    return (
        <div>
            <Logo/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}
