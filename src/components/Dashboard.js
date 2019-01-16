import React from 'react';
import Categories from './Categories';


class Dashboard extends React.Component{
    render(){
        return (
           <div className="wrapper">
             <div className="main">
                <div className="container">                 
                  <div className="widget">
                    <Categories/>
                  </div>                  
                </div>
             </div>              
           </div>
        );
    }
}
export default Dashboard;