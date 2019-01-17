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
        console.log("submitting");
       e.preventDefault();
       if(!this.state.name || !this.state.brewery_location || !this.state.ibu || !this.state.style){
           console.log("error");
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
            <div className="form-container">
               <div className="form-item col-md-12">
                    <form className="beer-form" onSubmit={this.onSubmitHandler}>
                    <div className="form-row">
                    <div className="form-group col-md-4">
                    <label  className="col-form-label ">Beer Name</label>
                    <div className="">
                        <input type="text" 
                        placeholder="beer Name..."
                        autoFocus
                        value = {this.state.name}
                        onChange={this.onNameChange}
                        name="beerName"
                        className="form-control"
                        />  
                    </div>
              
                </div>
                <div className="form-group col-md-4">
                    <label  className=" col-form-label">style Name</label>
                    <div className="">
                        <input type="text" 
                        placeholder="Style"
                        value = {this.state.style}
                        onChange={this.onStyleChange}
                        name="style"
                        className="form-control"
                        />         
                    </div>
                              
                </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                        <label  className="">Brewery Location</label>
                        <div className="">
                            <input type="text" 
                            placeholder="brewery"
                            value = {this.state.brewery_location}
                            onChange={this.onBreweryChange}
                            name="breweryLocation"
                            className="form-control"
                            />  
                        </div>
                                        
                    </div>
                    <div className="form-group col-md-2">
                        <label  className="">IBU</label>
                        <div className="">
                            <input type="number" 
                            placeholder="ibu"
                            value = {this.state.ibu}
                            onChange={this.onIbuChange}
                            name="ibu"
                            className="form-control"
                            /> 
                        </div>
                    </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label >calories</label> 
                            <div>
                                <input type="number" 
                                placeholder="calories"
                                value = {this.state.calories}
                                onChange={this.onCaloriesChange}
                                name="calories"
                                className="form-control"
                                /> 
                            </div>
                        
                        </div>
                        <div className="form-group col-md-2">
                            <label>ABV</label> 
                            <div>
                                <input type="number" 
                                placeholder="ABV"
                                value = {this.state.abv}
                                onChange={this.onAbvChange}
                                name="ABV"
                                className="form-control"
                                /> 
                            </div>
                        
                        </div>
                        
                    </div>
                    <div className="form-row">
                    <div className="form-group col-md-4">
                    <label>category</label>   
                    <div>
                        <select
                        value={this.state.category}
                        name="category"
                        onChange={this.CategoryChange}
                        disabled={this.props.disabled}
                        className="form-control"
                        >
                        <option>Select</option>
                        {
                            this.props.categories.map((category,index)=>{
                                return <option key={index}value={category.url}>{category.name}</option>
                            })
                        }
                        </select>
                    </div>           
                    
                </div>
                    </div>
                    <button className="btn btn-primary">Save Beer</button>

            </form>
               </div>
                
            </div>
        );
    }
}
export default BeerForm;