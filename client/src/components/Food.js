import React from "react";

const Food = ({ food, toggleEditing }) => {

    return (
        <div className="food__container" onClick={() => toggleEditing(food.id)} >
            <p className="food__price" >${ food.price }</p>
            <p className="food__name" >{ food.name }</p>
        </div>
    )
}

export { Food };