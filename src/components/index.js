// Libraries
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { watchViewport } from 'tornis';

// Layouts
import Intro from './intro';

const Index = () => {
    let [ width, setWidth ] = useState();
    let [ height, setHeight ] = useState();

    
    useEffect(() => {
        watchViewport(({ size }) => { setWidth(size.x); setHeight(size.y) });
    }, []);

    return (
        <Box width= { width } height= { height } bgcolor= "#2d3436" display= "flex" flexDirecton= "row" justifyContent= "center" alignItems= "center" overflow= "hidden">
            <Intro />
        </Box>
    );
}

export default Index;