import React from 'react';

const RecipeItem = ({ name, image, ingredientLines }) => {
    return (
        <div className="card p-3">
            <img src={image} className="img-fluid w-50 mx-auto text-center rounded-circle" />
            <div className="card-body">
                <h4 className="text-center"> {name} </h4>
            </div>
            <div>
                <ul className="list-group list-group-flush">
                    {
                        ingredientLines.map(ingredient => <li className="list-group-item">{ingredient}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default RecipeItem;
