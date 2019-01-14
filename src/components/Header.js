import React from 'react';
import {NavLink} from 'react-router-dom';
export default class Header extends React.Component{
    render(){
        return (
          <header>
              <NavLink to="/" exact={true}>Home</NavLink>
              <NavLink to="/create">Add Beer</NavLink>
          </header>
        );
    }
}