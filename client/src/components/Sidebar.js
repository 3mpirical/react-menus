import React from "react";
import { AddMenuForm } from "./AddMenuForm";
import { EditMenuList } from "./EditMenuList";



class Sidebar extends React.Component {
    state = {
        displayNewMenuForm: true,
        displayEditMenuForm: false,
    }

    displayNewMenuForm = () => {
        this.setState({
            displayNewMenuForm: true,
            displayEditMenuForm: false,
        });
    }

    displayEditMenuForm = () => {
        this.setState({
            displayNewMenuForm: false,
            displayEditMenuForm: true,
        });
    }
    
    render() {
        return (
            <div className="sidebar">
                <h3>Menu Actions</h3>

                <button 
                    className="sidebar__button"
                    onClick={this.displayNewMenuForm}
                >New</button>

                <button 
                    className="sidebar__button"
                    onClick={this.displayEditMenuForm}
                >Edit</button>
 
                {  
                    this.state.displayNewMenuForm && 
                    <AddMenuForm  createMenu={this.props.createMenu} />
                }
                {  
                    this.state.displayEditMenuForm && 
                    <EditMenuList 
                        menus={this.props.menus} 
                        toggleEditing={this.props.toggleEditing} 
                        updateMenu={this.props.updateMenu}
                        deleteMenu={this.props.deleteMenu}
                    />
                }

            </div>
        )
    }
}



export { Sidebar };