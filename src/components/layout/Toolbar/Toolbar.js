import React from 'react';
import classes from './Toolbar.module.css';
import logo from '../Logo/Logo'
import Nav from './Nav/Nav';
import Logo from '../Logo/Logo';

export default () =>  (
  <div className={classes.Toolbar}>
   <Logo/>
    <Nav />
  </div>
);