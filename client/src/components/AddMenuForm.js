import React from "react";



class AddMenuForm extends React.Component {
    state = {
        name: "",
        timeStart: "",
        timeEnd: "",
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.createMenu(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className="menu-form" onSubmit={this.handleSubmit}>
                <input 
                    className="form-item input"
                    required
                    type="text"
                    placeholder="Menu Name"
                    value={this.state.name}
                    name="name"
                    onChange={this.handleChange}
                />
                <input 
                    className="form-item input"
                    required
                    type="text"
                    placeholder="Start Time"
                    value={this.state.timeStart}
                    name="timeStart"
                    onChange={this.handleChange}
                />
                <input 
                    className="form-item input"
                    required
                    type="text"
                    placeholder="End Time"
                    value={this.state.timeEnd}
                    name="timeEnd"
                    onChange={this.handleChange}
                />
                <button type="submit" className="form-item" >Submit</button>
            </form>
        )
    }
}



export { AddMenuForm };