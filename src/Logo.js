import React from 'react'
import logo from './logo.jpg';
export const Logo = () => {
    return (
        <div className="container-fluid">
            <div id="logo" className="row justify-content-center">      
                <img src={logo} alt="Logo" />
            </div>
        </div>
    )
}
