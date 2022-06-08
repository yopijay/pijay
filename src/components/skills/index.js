// Libraries
import React from 'react';
import { Box, Container } from '@mui/material';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Design
import { Text } from '../../core/global/design/Text';

// Layouts
import Languages from './layouts/Languages';

const Index = () => {
    return (
        <Box width= "100vw" padding= "20px 40px" bgcolor= "#dfe6e9">
            <Container>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Ctrl.Typography text= "My skills" className= { Text().title } color= "#2d3436" />
                        <Ctrl.Typography text= "." className= { Text().title } color= "#00cec9" />
                    </Box>
                    <Languages />
                </Box>
            </Container>
        </Box>
    );
}

export default Index;