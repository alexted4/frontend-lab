import useStyles from './style';
import { Grid, DialogContent, Typography, Tooltip, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Ingredients from '../Ingredients';

const Cocktail = ({ data }) => {
    const classes = useStyles();
    return (
        <Grid container direction="column" align="center">
            <DialogContent>
                <Grid item align="center">
                    <Typography variant="h4">{data.strDrink}</Typography>
                </Grid>
                <Grid item align="right">
                    <Tooltip title="Add to favorites">
                        <IconButton className={classes.favorite} aria-label="add">
                            <FontAwesomeIcon icon={faStar} />
                        </IconButton>
                    </Tooltip>
                </Grid>
                <Grid item xs={12}>
                    <img className={classes.thumbnail} alt="thumbnail" src={data.strDrinkThumb} />
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h6" align="center">
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
                            <Ingredients data={data} />
                        </tbody>
                    </table>
                    <div className={classes.instructions}>{data.strInstructions}</div>
                </Grid>
            </DialogContent>
        </Grid>
    );
};

export default Cocktail;
