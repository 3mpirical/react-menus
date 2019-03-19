import React from "react";



class EditFoodForm extends React.Component {
    state = {
        name: this.props.food.name,
        price: this.props.food.price,
        id: this.props.food.id,
        menu_id: this.props.menuId,
    }

    deleting = false;

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.deleting) return null;
        this.props.updateFood(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleDelete = (id) => {
        this.deleting = true;
        this.props.deleteFood(id);
    }

    render() {
        return (
            <div className="edit-food-form">
                <button onClick={() => this.handleDelete(this.props.food.id)} >Delete</button>
                <form 
                    onSubmit={this.handleSubmit}
                >
                    <input 
                        className="edit-food-form__price"
                        required
                        placeholder="price"
                        type="text"
                        value={this.state.price}
                        name="price"
                        onChange={this.handleChange}
                    />
                    <input 
                        className="edit-food-form__name"
                        required
                        placeholder="food name"
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.handleChange}
                    />
                    <button type="submit" >Update</button>
                </form>
            </div>
        )
    }
}



export { EditFoodForm };