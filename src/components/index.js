// Libraries
import React from 'react';
import { Box } from '@mui/material';

// Layouts
import Intro from './intro';
import About from './about';

const Index = () => {

    return (
        <Box dispaly= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
            <Intro />
            <About />
        </Box>
    );
}

export default Index;