import React from "react";



class EditMenuForm extends React.Component {
    state = {
        name: this.props.menu.name,
        timeStart: this.props.menu.timeStart,
        timeEnd: this.props.menu.timeEnd,
        id: this.props.menu.id,
    }

    deleting = false;

    handleSubmit = (event) => {
        event.preventDefault()
        if(this.deleting) return null;
        this.props.updateMenu(this.state);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <form className="menu-form edit-form" onSubmit={this.handleSubmit}>
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
                <div className="button-container">
                    <button type="submit" className="form-item edit-btn" >Update</button>
                    <button 
                        onClick={() => { 
                            this.props.deleteMenu(this.props.menu.id); 
                            this.deleting = true;
                        }}
                        className="form-item edit-btn"
                    >Delete</button>
                </div>
            </form>
        )
    }
}



export { EditMenuForm };