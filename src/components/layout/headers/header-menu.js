import { Link } from 'react-router-dom';
import React from 'react';
import servicesData from '../../data/services-data';

const MainMenu = () => {
    return (
        <>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about-us'>About</Link></li>
                <li className='menu-item-has-children'><Link to='/services'>Services</Link>
                    <ul className='sub-menu'>
                        {servicesData && servicesData.map((s, idx) => (
                            <li key={idx}><Link to={`/services/${s.id}`}>{s.title}</Link></li>
                        ))}
                    </ul>
                </li>
                <li><Link to='/blog'>Blog</Link></li>
                <li><Link to='/contact-us'>Contact</Link></li>
                
            </ul>
        </>
    );
};

export default MainMenu;