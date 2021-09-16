import useStyles from './style'
import { TableRow, TableCell } from '@material-ui/core'

const SearchResult = ({item, setId, handleOpenModal, i}) => {
    const classes = useStyles()

    const handleClick = (id) =>{
        setId(id)
        handleOpenModal()
    }
    return (
        <TableRow className={classes.root} align="center" onClick={()=>handleClick(item.idDrink)}>
            <TableCell>{i}</TableCell>
            <TableCell>{item.idDrink}</TableCell>
            <TableCell><img src={item.strDrinkThumb} alt={item.strDrink}></img></TableCell>
            <TableCell>{item.strDrink}</TableCell>
            <TableCell>{item.strCategory}</TableCell>
            <TableCell>{item.strGlass}</TableCell>
        </TableRow>
    )
}

export default SearchResult
