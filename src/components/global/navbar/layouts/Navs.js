// Libraries
import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

// Custom design

const Navs = () => {
    return (
        <Box display= "flex" flexDirection= "row" justifyContent= "flex-end" alignItems= "center">
            <Link to= "/about" style= {{ textDecoration: 'none', color: '#dcdde1', textTransform: 'uppercase', padding: '0 20px' }}>
                <Box>About Me</Box>
            </Link>
        </Box>
    );
}

export default Navs;