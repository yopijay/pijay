// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Design
import { Text } from '../../core/global/design/Text';

const Index = () => {

    return (
        <Box display= "flex" flexDirection= "column" justifyContent= "center" alignItems= "center">
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography text= "Hi, I`m " fontFamily= "Caviar" className= { Text().title } marginRight= "10px" />
                <Ctrl.Typography text= "Paul John Judan" fontFamily= "Caviar" className= { Text().title } color= "#00cec9" />
                <Ctrl.Typography text= "." fontFamily= "Caviar" className= { Text().title } />
            </Box>
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography text= "I`m a" fontFamily= "Caviar" className= { Text().title } marginRight= "10px" />
                <Ctrl.Typography text= "Front-End Web Developer." className= { Text().title } fontFamily= "Caviar" />
            </Box>
            <Box padding= "5px 12px 5px 22px" border= "solid 2px #00cec9" marginTop= "20px">
                <Link to= "/" style= {{ textDecoration: 'none' }}>
                    <Ctrl.Typography text= "View my work" fontFamily= "Caviar" fontSize= "120%" marginRight= "10px" color= "#00cec9" />
                </Link>
            </Box>
        </Box>
    );
}

export default Index;