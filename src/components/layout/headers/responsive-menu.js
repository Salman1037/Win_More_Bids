"use client"
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import servicesData from '../../data/services-data';

const ResponsiveMenu = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const active = (value) => setActiveMenu(value === activeMenu ? null : value),
    activeIcon = (value) => (activeMenu == value ? "mean-clicked" : ""),
    activeSubMenu = (value) =>
    value == activeMenu ? { display: "block" } : { display: "none" };

    const [activeMenus, setActiveMenus] = useState(null);
    const actives = (value) => setActiveMenus(value === activeMenus ? null : value),
    activeIcons = (value) => (activeMenus == value ? "mean-clicked" : ""),
    activeSubMenus = (value) =>
    value == activeMenus ? { display: "block" } : { display: "none" };
  return (
    <>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about-us'>About</Link></li>
        <li className='menu-item-has-children'><Link to='/services'>Services</Link>
            <ul className='sub-menu' style={activeSubMenu("services")}>
                {servicesData && servicesData.map((s, idx) => (
                    <li key={idx}><Link to={`/services/${s.id}`}>{s.title}</Link></li>
                ))}
            </ul>
            <a className={`mean-expand ${activeIcon("services")}`} onClick={() => active("services")}></a>
        </li>
        <li><Link to='/contact-us'>Contact</Link></li>
    </ul>
    </>
  );
};

export default ResponsiveMenu;