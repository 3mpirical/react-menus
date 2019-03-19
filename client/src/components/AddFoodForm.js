import React from "react";



class AddFoodForm extends React.Component {
    state = {
        name: "",
        price: "",
        menu_id: this.props.menuId,
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createFood(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form 
                className="add-food-form"
                onSubmit={this.handleSubmit}
            >
                <input 
                    className="add-food-form__price"
                    required
                    placeholder="price"
                    type="text"
                    value={this.state.price}
                    name="price"
                    onChange={this.handleChange}
                />
                <input 
                    className="add-food-form__name"
                    required
                    placeholder="food name"
                    type="text"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                />
                <button>Create</button>
            </form>
        )
    }
}


export { AddFoodForm };