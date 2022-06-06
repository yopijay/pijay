// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Box sx= {{ fontSize: "250%", color: '#dcdde1', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', padding: '10px 0', fontFamily: 'Boldstrom' }}>
            <Link to= "/" style= {{ textDecoration: 'none', color: '#dcdde1' }}>
                <span style= {{ paddingRight: '10px', color: '#81ecec' }}>Paul</span>John<span style= {{ color: '#81ecec' }}>.</span>
            </Link>
        </Box>
    );
}

export default Logo;