import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './planet.png';

export default function NavBar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/dragons',
      text: 'Dragons',
    },
    {
      id: 4,
      path: '/myprofile',
      text: 'My Profile',
    },
  ];
  return (
    <>
      <header>
        <div className="Header">
          <img src={logo} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
          <nav className="navBar">
            {links.map((link) => (
              <NavLink key={link.id} className="link" to={link.path}>
                {link.text}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <div className="line" />
    </>
  );
}
