import { useEffect } from 'react'
import { Grid, DialogContent, Typography, Tooltip, IconButton} from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../store/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import Loading from '../Loading'
import useStyles from './style.js'

var _ = require('lodash');

const RandomCocktail = () => {
  const classes = useStyles()

  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  const {fetchRandomCocktail} = bindActionCreators(actionCreators, dispatch)

  useEffect(()=>{
    fetchRandomCocktail()
  },[])

  const getIngredients = () => {
    const result = []
    for (let i = 1; i < 16; i++){
      const ingredient = _.get(state, 'fetchRandomCocktail.cocktail.drinks[0].strIngredient' + i)
      const measure = _.get(state, 'fetchRandomCocktail.cocktail.drinks[0].strMeasure' + i)
      if (ingredient !== null){
        result.push(
          <tr key = {i}>
            <td>{i}</td>
            <td className={classes.ingredient}>{ingredient}</td>
            <td>{measure}</td>
          </tr>
        )
      } else break;
    }
    return result
  }

  if (state.fetchRandomCocktail.loading) {return <Loading/>} 
  else return (
    <Grid container direction="column" align="center">
      <DialogContent>
        <Grid item align="center">
          <Typography variant = "h4">
            {state.fetchRandomCocktail.cocktail.drinks[0].strDrink}
          </Typography>
        </Grid>
        <Grid item align="right">
          <Tooltip title="Add to favorites" >
              <IconButton className={classes.favorite} aria-label="add">
                <FontAwesomeIcon icon={farStar} />
              </IconButton>
          </Tooltip>
        </Grid>
        <Grid item xs = {12}>
          <img 
            className={classes.thumbnail} 
            alt = "thumbnail" 
            src={state.fetchRandomCocktail.cocktail.drinks[0].strDrinkThumb}
          ></img>
        </Grid>
        <Grid item xs = {12}>
          <Typography variant = "h6" align="left">
            Recipe
          </Typography>
          <table className={classes.table}>
            <thead>
              <tr>
                <th>#</th>
                <th className={classes.ingredient}>Ingredient</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {getIngredients()}
            </tbody>
          </table>
          <div className={classes.instructions}>
            {state.fetchRandomCocktail.cocktail.drinks[0].strInstructions}
          </div>
        </Grid>
      </DialogContent>
    </Grid>
  )
}

export default RandomCocktail
