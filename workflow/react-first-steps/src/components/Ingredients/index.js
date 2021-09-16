import Ingredient from '../Ingredient';
import _ from 'lodash';

const Ingredients = ({ data }) => {
	const result = [];

	for (let i = 1; i < 16; i++) {
		const ingredient = _.get(data, 'strIngredient' + i);
		const measure = _.get(data, 'strMeasure' + i);
		if (ingredient) {
			result.push(
				<Ingredient key={i} i={i} ingredient={ingredient} measure={measure} />
			);
		} else break;
	}
	return result;
};

export default Ingredients;
