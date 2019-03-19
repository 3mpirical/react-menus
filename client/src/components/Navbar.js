import React from "react";
import { Sidebar } from "./Sidebar";



class Navbar extends React.Component {
    state = {
        sidebarDisplayed: false,
    }

    handleClick = (event) => {
        this.setState({ sidebarDisplayed: !this.state.sidebarDisplayed });
    }

    render() {
        return(
            <div className="navbar">
                <div className="navbar__title">
                    Menu Editor
                </div>

                <img 
                    className="navbar__dropdown-icon"
                    src={require("../img/sidebar-toggle.svg")} 
                    alt="sidebar toggle icon"
                    onClick={this.handleClick}
                />

                { 
                    this.state.sidebarDisplayed 
                    && <Sidebar 
                            menus={this.props.menus} 
                            createMenu={this.props.createMenu} 
                            toggleEditing={this.props.toggleEditing}
                            updateMenu={this.props.updateMenu}
                            deleteMenu={this.props.deleteMenu}
                        /> 
                }
            </div>
        )
    }
}



export { Navbar };