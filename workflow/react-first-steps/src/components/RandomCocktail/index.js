import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../store/index';
import Loading from '../Loading';
import Cocktail from '../Cocktail';

const RandomCocktail = () => {
	const state = useSelector((state) => state);

	const dispatch = useDispatch();
	const { fetchRandomCocktail } = bindActionCreators(actionCreators, dispatch);

	const loading = state.randomCocktail.loading;

	useEffect(() => {
		fetchRandomCocktail();
	}, []);

	if (loading) {
		return <Loading />;
	} else {
		const data = state.randomCocktail.cocktail.drinks[0];
		return <Cocktail data={data} />;
	}
};

export default RandomCocktail;
