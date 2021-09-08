import { useEffect } from 'react'
import { Grid, DialogContent, Typography, Tooltip, IconButton} from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../store/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import Loading from '../Loading'
import useStyles from './style.js'
import Ingredients from '../Ingredients'

const RandomCocktail = () => {
  const classes = useStyles()

  const state = useSelector((state) => state)

  const dispatch = useDispatch()
  const {fetchRandomCocktail} = bindActionCreators(actionCreators, dispatch)
  
  const loading = state.fetchRandomCocktail.loading

  useEffect(()=>{
    fetchRandomCocktail()
  },[])

  if (loading){
    return <Loading/>
  } else {
    const data = state.fetchRandomCocktail.cocktail.drinks[0]
    return (
      <Grid container direction="column" align="center">
        <DialogContent>
          <Grid item align="center">
            <Typography variant = "h4">
              {data.strDrink}
            </Typography>
          </Grid>
          <Grid item align="right">
            <Tooltip title="Add to favorites" >
                <IconButton className={classes.favorite} aria-label="add">
                  <FontAwesomeIcon icon={faStar} />
                </IconButton>
            </Tooltip>
          </Grid>
          <Grid item xs = {12}>
            <img 
              className={classes.thumbnail} 
              alt = "thumbnail" 
              src={data.strDrinkThumb}
            ></img>
          </Grid>
          <Grid item xs = {12}>
            <Typography variant = "h6" align="center">
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
                <Ingredients/>
              </tbody>
            </table>
            <div className={classes.instructions}>
              {data.strInstructions}
            </div>
          </Grid>
        </DialogContent>
      </Grid>
    )
  }
}

export default RandomCocktail
