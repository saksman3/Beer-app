import React from 'react';
import Categories from './Categories';



class Dashboard extends React.Component{
  state = {
    show:false
  }
  showModal = ()=>{
    this.setState(()=>({show:true}));
  }
  hideModal = ()=>{
    this.setState(()=>({show:false}));
  }
    render(){
        return (
           <div className="wrapper">
             <div className="main">
                <div className="content-container">                 
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