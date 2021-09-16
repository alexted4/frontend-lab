import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    root:{
        background: '#e3eae4 ',
        '& .MuiTableCell-head, .MuiTablePagination-caption, .MuiTablePagination-input':{
            color: '#ddd!important'
        }
    },
    row: {
        backgroundColor: '#555',
        color: '#ddd!important'
    }
  })

export default useStyles