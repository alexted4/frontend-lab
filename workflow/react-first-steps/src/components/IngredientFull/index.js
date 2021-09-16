import { Grid } from '@material-ui/core'
import React from 'react'
import useStyles from './style'

const IngredientFull = ({item}) => {
    const classes = useStyles()
    return (
        <Grid container justifyContent="center">
            <Grid item align="center" xs={12} md={7} className={classes.container}>
                    <h2>{item.strIngredient}</h2>
                    <Grid container md={4} justifyContent={item.strType ? "space-between" : "center"}>
                    {item.strType && <div>Type: {item.strType}</div>}
                    <div>Alcoholic: {item.strAlcohol ? 'Yes' : 'No'}</div>
                    {item.strABV && <div>Alcohol %: {item.strABV}</div>}
                    </Grid>
                    <p>{item.strDescription}</p>
            </Grid>
        </Grid>
    )
}

export default IngredientFull
