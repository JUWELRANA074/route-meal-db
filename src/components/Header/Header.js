import React from 'react';
import './Header.css'

const Header = () => {

    return (
        <>
            <div className="header">
                <div className="with-logo">
                    <h2 className=""  >Food Ghor</h2>
                    <nav className="navbar">
                        <a className="" href="/home">Home</a>
                        <a className="" href="/resturent">Resturent</a>
                        <a className="" href="/meal">Meal</a>
                        <a className="" href="/about">About</a>
                    </nav>
                </div>

            </div>

        </>
    );
};

export default Header;