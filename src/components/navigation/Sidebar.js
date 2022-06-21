/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/images/logo.png';
import twitter from '../../assets/images/twitter-icon.png';
import facebook from '../../assets/images/facebook-icon.png';
import linkedin from '../../assets/images/linkedin-icon.png';
import github from '../../assets/images/github-icon.png';
import Logout from '../auth/Logout';
import './sidebar.css';

const navigation = [
  { name: 'Cars', href: '/home', current: true },
  { name: 'Reserve', href: 'reserve', current: false },
  { name: 'My reservations', href: '/reservations', current: false },
  // { name: 'Add car', href: '#', current: false },
  // { name: 'Delete car', href: 'delete', current: false },
];

const social = [
  { icon: twitter },
  { icon: facebook },
  { icon: linkedin },
  { icon: github },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = ({ currentUser }) => (
  <div className="flex flex-col w-64 sidebar-wrapper">
    <span className="nav-header">
      <h2>Rent a Car</h2>
    </span>

    <span className="user-mail">{currentUser.email}</span>

    <div className="flex-1 flex flex-col pt-3 pb-4 overflow-y-auto">
      <div className="flex items-center flex-shrink-0 px-4">
        <a href="/">
          <img src={logo} className="w-40" alt="logo" />
        </a>
      </div>
      <nav className="mt-12 flex-1 desktop-nav" aria-label="Sidebar">
        <div className="pl-3 uppercase font-black text-md">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-lime-500 text-slate-50'
                  : 'text-slate-900 hover:bg-lime-200',
                'group flex items-center pl-5 py-3 hover:text-slate-900',
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
          <div className="nav-column">
            <NavLink
              to="/add_car"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>ADD CAR</p>
            </NavLink>

            <NavLink
              to="/delete"
              className={({ isActive }) => (isActive ? 'active' : 'inactive')}
            >
              <p>DELETE CAR</p>
            </NavLink>

            <span className="logout">
              <Logout />
            </span>
          </div>
        </div>
      </nav>
    </div>
    <div className="flex-shrink-0 flex-200 p-4">
      <div className="flex gap-2">
        {social.map((item) => (
          <a href="/home" key={item.icon}>
            <img src={item.icon} alt="social-icon" className="w-6" />
          </a>
        ))}
      </div>
      <p className="text-gray-700 font-bold mt-2">© 2022</p>
    </div>
  </div>
);

const mapStateToProps = ({ auth: { currentUser } }) => {
  return { currentUser };
};

export default connect(mapStateToProps)(Sidebar);
