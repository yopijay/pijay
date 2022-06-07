// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { watchViewport } from 'tornis';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Design
import { Text } from '../../core/global/design/Text';

// Assets
import Profile from '../../assets/images/profile.jpg';

const Index = () => {
    let [ width, setWidth ] = useState();
    
    useEffect(() => {
        watchViewport(({ size }) => { setWidth(size.x); });
    }, []);

    return (
        <Box width= { width } padding= "100px 40px">
            <Container>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Ctrl.Typography text= "About" className= { Text().title } color= "#2d3436" />
                        <Ctrl.Typography text= "." className= { Text().title } color= "#00cec9" />
                    </Box>
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 4 }>
                        <Grid item xs= { 12 } md= { 6 }>
                            <Ctrl.Typography text= { `I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. 
                                I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. 
                                Also I like working in a team, you'll learn faster and much more.` }
                                color= "#636e72" className= { Text().info } />
                        </Grid>
                        <Grid item xs= { 12 } md= { 6 }>
                            <Box display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                <Box width= "400px" height= "400px" overflow= "hidden" borderRadius= "100%" border= "solid 2px #636e72">
                                    <img src= { Profile } width= "100%" alt= "Profile" />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Index;