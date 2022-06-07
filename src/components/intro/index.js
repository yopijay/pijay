// Libraries
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { watchViewport } from 'tornis';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Design
import { Text } from '../../core/global/design/Text';

const Index = () => {
    let [ width, setWidth ] = useState();
    let [ height, setHeight ] = useState();

    
    useEffect(() => {
        watchViewport(({ size }) => { setWidth(size.x); setHeight(size.y) });
    }, []);

    return (
        <Box width= { width } height= { height } bgcolor= "#2d3436" display= "flex" flexDirecton= "row" justifyContent= "center" alignItems= "center" overflow= "hidden" id= "landing">
            <Box display= "flex" flexDirection= "column" justifyContent= "center" alignItems= "center">
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                    <Ctrl.Typography text= "Hi, I`m " className= { Text().title } marginRight= "10px" />
                    <Ctrl.Typography text= "Paul John Judan" className= { Text().title } color= "#00cec9" />
                    <Ctrl.Typography text= "." className= { Text().title } />
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                    <Ctrl.Typography text= "I`m a" className= { Text().title } marginRight= "10px" />
                    <Ctrl.Typography text= "Front-End Web Developer." className= { Text().title } />
                </Box>
                <Box display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center" border= "solid 1px #00cec9" padding= "6px 17px" marginTop= "20px">
                    <Link to= "/" style= {{ textDecoration: 'none' }}>
                        <Ctrl.Typography text= "View my work" fontSize= "120%" color= "#00cec9" />
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Index;