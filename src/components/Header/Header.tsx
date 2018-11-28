import * as React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';

interface HeaderProps {
    img?: string;
}

export const Header = (props: HeaderProps) => {
    return (
        <header className="header">
            <nav className="menu">
                <div className="logo">
                    <img src={props.img} alt="" />
                    <a href="#" className="btn-menu" id="btn-menu">
                        <i className="icono fa fa-bars" aria-hidden="true">
                        </i>
                    </a>
                </div>
                <div className="enlaces" id="enlaces">
                    <Link to='/' className="public hvr-underline-from-left">
                        Home
                    </Link>
                    <Link to='/about' className="cupos hvr-underline-from-left">
                        About
                    </Link>
                    <Link to='/project' className="historial hvr-underline-from-left">
                        Project
                    </Link>
                    <Link to='/contact' className="historial hvr-underline-from-left">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}