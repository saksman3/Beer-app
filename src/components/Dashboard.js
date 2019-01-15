import React from 'react';
import Categories from './Categories';


class Dashboard extends React.Component{
    render(){
        return (
           <div>
              <p>Categories</p>
              <Categories/>
              
           </div>
        );
    }
}
export default Dashboard;