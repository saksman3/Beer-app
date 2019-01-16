import React from 'react';
import {NavLink} from 'react-router-dom';
export default class Header extends React.Component{
    render(){
        return (
          <header className="header">
          <div className="header_container">
              <NavLink to="/" exact={true} className="header_items" activeClassName="header_active_class">Home</NavLink>
              <NavLink to="/create" className="header_items" activeClassName="header_active_class">Add Beer</NavLink>
          </div>
              
          </header>
        );
    }
}