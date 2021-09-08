import useStyles from './style'

const Ingredient = ({i, ingredient, measure}) => {
    const classes = useStyles()
    return (
        <tr key = {i}>
            <td>{i}</td>
            <td className={classes.ingredient}>{ingredient}</td>
            <td>{measure}</td>
        </tr>
    )
}

export default Ingredient
