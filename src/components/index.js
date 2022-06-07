// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { getViewportState, watchViewport } from 'tornis';

// Core
import Ctrl from '../core/global/controls/Controls';

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
        <Box width= { width } height= { height } bgcolor= "#2d3436" display= "flex" flexDirecton= "row" justifyContent= "center" alignItems= "center">
            <Box display= "flex" flexDirection= "column" justifyContent= "center" alignItems= "center">
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                    <Ctrl.Typography text= "Hi, I`m " fontFamily= "Gonzi Light" fontSize= "220%" marginRight= "10px" />
                    <Ctrl.Typography text= "Paul John Judan" fontFamily= "Gonzi Light" fontSize= "220%" color= "#00cec9" />
                    <Ctrl.Typography text= "." fontFamily= "Gonzi Light" fontSize= "220%" />
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                    <Ctrl.Typography text= "I`m a" fontFamily= "Gonzi Light" fontSize= "220%" marginRight= "10px" />
                    <Ctrl.Typography text= "Front-End Web Developer" fontFamily= "Gonzi Light" fontSize= "220%" />
                    <Ctrl.Typography text= "." fontFamily= "Gonzi Light" fontSize= "220%" />
                </Box>
            </Box>
        </Box>
    );
}

export default Index;