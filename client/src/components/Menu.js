import React from "react";
import axios from "axios";
import { Food } from "./Food";
import { AddFoodForm } from "./AddFoodForm";
import { EditFoodForm } from "./EditFoodForm";



class Menu extends React.Component {
    state = {
        foods: [],
    }

    componentDidMount() {
        axios.get(`/api/menus/${this.props.menu.id}/foods/`)
        .then((res) => {
            const foods = res.data.map((food) => {
                food.editing = false;
                return food;
            }); 
            this.setState({ foods });
        })
        .catch((err) => console.log(err));
    }

    createFood = (food) => {
        axios.post(`/api/menus/${this.props.menu.id}/foods`, food)
        .then((res) =>  {
            res.data.editing = false;
            this.setState({ foods: [...this.state.foods, res.data] }) 
        })
        .catch((err) => console.log(err));
    }

    updateFood = (food) => {
        axios.put(`/api/menus/${this.props.menu.id}/foods/${food.id}`, food)
        .then((res) => {
            res.data.editing = false;
            const foods = this.state.foods.map((food) => {
                if(food.id === res.data.id) return res.data;
                return food;
            });
            this.setState({ foods });
        })
        .catch((err) => console.log(err));
    }

    deleteFood = (id) => {
        axios.delete(`/api/menus/${this.props.menu.id}/foods/${id}`)
        .then((res) => {
            const foods = this.state.foods.filter((food) => {
                if(food.id !== id) return food;
            });
            this.setState({ foods });
        })
        .catch((err) => console.log(err));
    }

    toggleEditing = (id) => {
        const foods = this.state.foods.map((food) => {
            if(food.id === id) food.editing = !food.editing;
            return food;
        });
        this.setState({ foods });
    }

    renderFoodOrForm = () => {
        return this.state.foods.map((food) => {
            if(!food.editing) {
                return <Food 
                            key={food.id} 
                            food={food} 
                            toggleEditing={this.toggleEditing}
                        />
            } else {
                return <EditFoodForm 
                            key={food.id}
                            food={food}  
                            toggleEditing={this.toggleEditing}
                            updateFood={this.updateFood}
                            deleteFood={this.deleteFood}
                        />
            }
        }) 
    }

    render() {
        return (
            <div className="menu__container">
                <div className="menu__heading" >
                    <h2>{this.props.menu.name}</h2>
                    <span className="menu__times">
                        {this.props.menu.timeStart} - {this.props.menu.timeEnd} 
                    </span> 
                    <button 
                        onClick={() => this.props.toggleAddingFoods(this.props.menu.id)}
                    >
                        { this.props.menu.addingFoods? "Done" : "Add"}
                    </button>
                </div>

                { this.renderFoodOrForm() }

                { 
                    this.props.menu.addingFoods
                    ? 
                        <AddFoodForm 
                            createFood={this.createFood} 
                            menuId={this.props.menu.id}
                        /> 
                    : 
                        null 
                }
            </div>
        )
    }
}



export { Menu }