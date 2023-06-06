import React from "react"

const userFavoriteColurs = (props)=>{
    const favAnimals = props.favAnimals;
    const animalList= favAnimals.map((animal,index)=>
    <li key={index}>{animal}</li>)
    return <ul>{animalList}</ul>

}
export default userFavoriteColurs;