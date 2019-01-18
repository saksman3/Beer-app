import React from 'react';
class BeerForm extends React.Component{
    state = {
        name:this.props.beer? this.props.beer.name:'',
        ibu:this.props.beer?this.props.beer.ibu:0,
        calories:this.props.beer?this.props.beer.calories:0,
        abv:this.props.beer?this.props.beer.abv:0,
        style:this.props.beer?this.props.beer.style:"",
        brewery_location:this.props.beer?this.props.beer.brewery_location:"",
        category:this.props.beer?this.props.beer.category:undefined,
        url:this.props.beer?this.props.beer.url:'',
        error:'',


    }
    onNameChange = (e)=>{
       const name = e.target.value;
       this.setState(()=>({name}));
    }
    onStyleChange = (e)=>{
      const style = e.target.value;
      this.setState(()=>({style}));
    }
    onBreweryChange = (e)=>{
        const brewery_location = e.target.value;
        this.setState(()=>({brewery_location}));
    }
    onIbuChange = (e)=>{
        const ibu = e.target.value;
        this.setState(()=>({ibu}));
    }
    onCaloriesChange = (e)=>{
        const calories = e.target.value;
        this.setState(()=>({calories}));
    }
    CategoryChange = (e)=>{
       const category = e.target.value;
       this.setState(()=>({category}));
    }
    onAbvChange=(e)=>{
        const abv = e.target.value;
        this.setState(()=>({abv}));
    }


    onSubmitHandler = (e)=>{
        
       e.preventDefault();
       if(!this.state.name || !this.state.brewery_location || !this.state.ibu || !this.state.style){
           
           this.setState(()=>{
               return {error:"Please enter mandatory fields."}
           });
       }else {
           this.setState(()=>({error:''}));
           this.props.onSubmit({
               name:this.state.name,
               ibu:this.state.ibu,
               calories:this.state.calories,
               abv:this.state.abv,
               style:this.state.style,
               brewery_location:this.state.brewery_location,
               category:this.state.category,
               url:this.state.url
           })
       }
    }
    render(){
        return (
            <div className="form-wrapper">
            <form className="form" onSubmit={this.onSubmitHandler}>
                    <div className="input-group">              
                        <input type="text" 
                        placeholder="beer Name..."
                        autoFocus
                        value = {this.state.name}
                        onChange={this.onNameChange}
                        name="beerName"
                        className="form-control"
                        />
                    </div>
                   <div className="input-group">
                       
                       <input type="text" 
                        placeholder="Style"
                        value = {this.state.style}
                        onChange={this.onStyleChange}
                        name="style"
                        className="form-control"
                        />                                       
                   </div>
                    <div className="input-group">
                        <input type="text" 
                            placeholder="brewery"
                            value = {this.state.brewery_location}
                            onChange={this.onBreweryChange}
                            name="breweryLocation"
                            className="form-control"
                            />  
                            <select
                            value={this.state.category}
                            name="category"
                            onChange={this.CategoryChange}
                            disabled={this.props.disabled}
                            className="select_"
                            >
                            <option>Category</option>
                            {
                                this.props.categories.map((category,index)=>{
                                    return <option key={index}value={category.url}>{category.name}</option>
                                })
                            }
                            </select>

                    </div>
                        <div className="input-group">
                            <label className="input_label">Calories</label>
                           <input type="number" 
                                placeholder="calories"
                                value = {this.state.calories}
                                onChange={this.onCaloriesChange}
                                name="calories"
                                className="form-control"
                                /> 
                                
                        </div>
                        <div className="input-group">
                        <label className="input_label">ABV</label>
                            <input type="number" 
                            placeholder="ABV"
                            value = {this.state.abv}
                            onChange={this.onAbvChange}
                            name="ABV"
                            className="form-control"
                            /> 
                        </div>
                   
                    <div className="input-group"> 
                    <label className="input_label">IBU</label> 
                    <input type="number" 
                    placeholder="ibu"
                    value = {this.state.ibu}
                    onChange={this.onIbuChange}
                    name="ibu"
                    className="form-control"
                    /> 
                    </div>           
                    
                    <div className="input-group">
                      <button className="button btn-beer">Save</button>
                      <h6 className="error_message">{this.state.error}</h6>
                    </div>
                    

            </form>
            </div>
               
                
            
        );
    }
}
export default BeerForm;