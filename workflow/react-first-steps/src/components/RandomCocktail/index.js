import {Grid, DialogContent, Typography} from '@material-ui/core';

const RandomCocktail = () => {
    return (
      <Grid container direction="column">
        <DialogContent>
          <Typography variant = "h4" align="center">
            Cocktail Name
          </Typography>
          <div>
            Coctail content TODO
          </div>
        </DialogContent>
      </Grid>
    )
}

export default RandomCocktail
