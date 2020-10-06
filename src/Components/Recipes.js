import React from 'react';
import RecipeItem from './RecipeItem';

const Recipes = ({ recipes }) => {
    return (
        <div className="recipes">
            <div className="card-columns text-center">
                {
                    recipes.map(recipe => (
                        <RecipeItem name={recipe.recipe.label}
                            image={recipe.recipe.image}
                            ingredientLines={recipe.recipe.ingredientLines} />
                    ))
                }
            </div>
        </div>
    )
}

export default Recipes;
