import React from 'react';
import Logo from '../atoms/Logo'

const NavBar = () => {
    return (
        <>
            <nav className="navbar-container">
                <Logo />
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Cursos</a></li>
                </ul>
            </nav>
            <style jsx>{`
            .navbar-container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 4rem;
                padding: 0 133px;
                background: var(--darkBlue);
                border-bottom: 1px solid var(--medBlue);
                position: fixed;
                width: 100%;
                z-index: 999;
            }
            ul{
                width: 300px;
                display: flex;
                justify-content: space-between;
            }
            li{
                list-style: none;
            }
            a{  
                color: white;
                font-weight: 500;
                text-decoration: none;
            }
            a:hover{
                color: var(--orange)
            }
        `}</style>
        </>

    );
}

export default NavBar;