// Libraries
import React from 'react';
import { Box, Container, Grid } from '@mui/material';

// Layouts
import Logo from './layouts/Logo';
import Navs from './layouts/Navs';

const Index = () => {
    return (
        <Box position= "fixed" width= "100%" bgcolor= "#2d3436">
            <Container>
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                    <Grid item xs= { 7 } md= { 4 }>
                        <Logo />
                    </Grid>
                    <Grid item xs= { 5 } md= { 8 }>
                        {/* <Navs /> */}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Index;