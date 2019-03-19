import React, { Component } from 'react';
import axios from "axios";
import { Menu } from "./Menu";
import { Navbar } from "./Navbar";

class App extends Component {
  state = {
    menus: [],
  }

  componentDidMount() {
    axios.get("/api/menus")
    .then((res) => {
      const menus = res.data.map((menu) => {
        menu.addingFoods = false;
        menu.editing = false;
        return menu;
      });
      this.setState({ menus });

    })
    .catch((err) => console.log(err));
  }

  createMenu = (menu) => {
    axios.post("/api/menus", menu)
    .then((res) => {
      res.data.addingFoods = false;
      res.data.editing = false;
      this.setState({ menus: [...this.state.menus, res.data ] });
    })
    .catch((err) => console.log(err));
  }

  updateMenu = (menu) => {
    axios.put(`/api/menus/${menu.id}`, menu)
    .then((res) => {
      res.data.addingFoods = false;
      res.data.editing = false;
      const menus = this.state.menus.map((menu) => {
        if(menu.id === res.data.id) return res.data;
        return menu;
      });
      this.setState({ menus });
    })
    .catch((err) => console.log(err));
  }

  deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
    .then((res) => {
      const menus = this.state.menus.filter((menu) => {
        if(menu.id !== id) return menu;
      })
      this.setState({ menus });
    })
    .catch((err) => console.log(err));
  }


  toggleAddingFoods = (id) => {
    const menus = this.state.menus.map((menu) => {
      if(menu.id === id) menu.addingFoods = !menu.addingFoods;
      return menu;
    });
    this.setState({ menus });
  };

  toggleEditing = (id) => {
    const menus = this.state.menus.map((menu) => {
      if(menu.id === id) menu.editing = !menu.editing;
      return menu;
    })
    this.setState({ menus });
  }

  render() {
    return (
      <div className="app-container">
        <div className="wallpaper"></div>
        <Navbar 
          menus={this.state.menus} 
          createMenu={this.createMenu} 
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
          toggleEditing={this.toggleEditing}

        />
        <div className="clearfix"></div>

        { this.state.menus.map((menu) => {
          return <Menu 
                  key={menu.id}  
                  menu={menu}
                  toggleAddingFoods={this.toggleAddingFoods}
                />
        }) }
      </div>
    );
  }
}

export default App;
