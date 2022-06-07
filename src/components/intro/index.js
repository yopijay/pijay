// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

// Core
import Ctrl from '../../core/global/controls/Controls';

const Index = () => {
    return (
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
            <Box padding= "5px 12px 5px 22px" border= "solid 2px #00cec9" marginTop= "20px">
                <Link to= "/" style= {{ textDecoration: 'none' }}>
                    <Ctrl.Typography text= "View my work" fontFamily= "Gilroy Light" fontSize= "120%" marginRight= "10px" color= "#00cec9" />
                </Link>
            </Box>
        </Box>
    );
}

export default Index;