// Libraries
import React from 'react';
import { Box, Container } from '@mui/material';

// Layouts
import Navbar from './global/navbar/index';
import Intro from './intro';

const Index = () => {

    return (
        <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "flex-start" width= "100%" height= "100vh" bgcolor= "#2d3436">
            <Navbar />
            <Container>
                <Intro />
            </Container>
        </Box>
    );
}

export default Index;