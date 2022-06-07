// Libraries
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { getViewportState, watchViewport } from 'tornis';

// Layouts
import Intro from './intro';

const Index = () => {
    let [ width, setWidth ] = useState(getViewportState().size.x);
    let [ height, setHeight ] = useState(getViewportState().size.y);

    useEffect(() => {
        const viewport = ({ size }) => {
            if(size.changed) {
                setWidth(getViewportState().size.x);
                setHeight(getViewportState().size.y);
            }
        }
    
        watchViewport(viewport);
    }, []);

    return (
        <Box width= { width } height= { height } bgcolor= "#2d3436" display= "flex" flexDirecton= "row" justifyContent= "center" alignItems= "center" overflow= "hidden">
            <Intro />
        </Box>
    );
}

export default Index;