import React from 'react';
import Feature from '../Feature/Feature';
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../Navbar/Navbar';
import './Header.css';

const Header = () => {
    return (
        <section className='header'>
            <Navbar></Navbar>
            <HeaderContent></HeaderContent>
            <Feature></Feature>
            

        </section>
    );
};

export default Header;