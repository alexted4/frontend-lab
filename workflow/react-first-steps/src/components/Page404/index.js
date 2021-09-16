import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div align="center" style={{ marginTop: '200px' }}>
            <Typography variant="h1">Sorry!</Typography>
            <Typography variant="h5" style={{ marginTop: '15px' }}>
                404 No such page
            </Typography>
            <div style={{ marginTop: '15px' }}>
                <Link style={{ color: '#4caf50' }} to="/">
                    Return to the home page
                </Link>
            </div>
        </div>
    );
};

export default Page404;
