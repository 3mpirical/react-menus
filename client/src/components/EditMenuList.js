import React from "react";
import { EditMenuForm } from "./EditMenuForm";



const EditMenuList = ({ menus, updateMenu, deleteMenu, toggleEditing }) => {
    return (
        <div className="menu-list">
            { menus.map((menu) => {
                if(!menu.editing) {
                    return(
                        <li
                            className="menu-list__item"
                            key={menu.id} 
                            onClick={() => toggleEditing(menu.id)} 
                        >{menu.name}</li> 
                    ) 
                } else {
                    return <EditMenuForm 
                                menu={menu} 
                                key={menu.id} 
                                updateMenu={updateMenu}
                                deleteMenu={deleteMenu}
                            />
                }
            }) }
        </div>
    )
}



export { EditMenuList };