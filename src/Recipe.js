import React from 'react';

const Recipe = ({title, calories, cautions,image, ingredients}) => { 
    return(
        <div>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <p>{cautions}</p>
            <img src={image} alt=""/>
        </div>
        );
}
export default Recipe;