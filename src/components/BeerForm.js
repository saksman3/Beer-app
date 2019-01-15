import React from 'react';
import moment from 'moment';
class BeerForm extends React.Component{
    state = {
        name:this.props.beer? this.props.beer.name:'',
        ibu:this.props.beer?this.props.beer.ibu:0,
        calories:this.props.beer?this.props.beer.calories:0,
        abv:this.props.beer?this.props.beer.abv:"",
        style:this.props.beer?this.props.beer.style:"",
        brewery_location:this.props.beer?this.props.beer.brewery_location:"",
        created_on:this.props.beer?this.props.beer.created_on:moment().format('YYYY-MM-DD Th:mm:ss a'),
        category:this.props.beer?this.props.beer.category:undefined,
        error:''

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
               created_on:this.state.created_on,
               category:this.state.category
           })
       }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input type="text" 
                       placeholder="beer Name..."
                       autoFocus
                       value = {this.state.name}
                       onChange={this.onNameChange}
                    />
                    <input type="text" 
                       placeholder="Style"
                       value = {this.state.style}
                       onChange={this.onStyleChange}
                    />
                    <input type="text" 
                       placeholder="breweryLocation"
                       value = {this.state.brewery_location}
                       onChange={this.onBreweryChange}
                    />
                    <input type="number" 
                       placeholder="ibu"
                       value = {this.state.ibu}
                       onChange={this.onIbuChange}
                    />     
                    <input type="number" 
                       placeholder="calories"
                       value = {this.state.calories}
                       onChange={this.onCaloriesChange}
                    />               
                    <select
                     value={this.state.category}
                     onChange={this.CategoryChange}
                     >
                       <option>Select</option>
                       {
                           this.props.categories.map((category,index)=>{
                            return <option key={index}value={category.url}>{category.name}</option>
                           })
                       }
                    </select>
                    <button>Save Beer</button>

            </form>
            </div>
        );
    }
}
export default BeerForm;