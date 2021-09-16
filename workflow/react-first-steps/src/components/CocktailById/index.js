import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/index';
import Loading from '../Loading';
import Cocktail from '../Cocktail';

const CocktailById = ({ id }) => {
	const state = useSelector((state) => state);

	const dispatch = useDispatch();
	const { fetchCocktailById } = bindActionCreators(actionCreators, dispatch);

	const loading = state.cocktailById.loading;

	useEffect(() => {
		fetchCocktailById(id);
	}, []);

	if (loading || !state.cocktailById.cocktail.drinks) {
		return <Loading />;
	} else {
		const data = state.cocktailById.cocktail.drinks[0];
		return <Cocktail data={data} />;
	}
};

export default CocktailById;
