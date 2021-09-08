
import { useSelector } from "react-redux"
import Ingredient from '../Ingredient'
var _ = require('lodash');

const Ingredients = () => {
    const state = useSelector((state) => state)
    const result = []

    for (let i = 1; i < 16; i++){
        const ingredient = _.get(state, 'fetchRandomCocktail.cocktail.drinks[0].strIngredient' + i)
        const measure = _.get(state, 'fetchRandomCocktail.cocktail.drinks[0].strMeasure' + i)
        if (ingredient){
        result.push(<Ingredient 
            i={i}
            ingredient={ingredient}
            measure={measure}
        />)
        } else break;
    }
    return result
}

export default Ingredients
