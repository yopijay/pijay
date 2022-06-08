// Libraries
import React, { useEffect, useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { watchViewport } from 'tornis';

// Core
import Ctrl from '../../core/global/controls/Controls';

// Design
import { Text } from '../../core/global/design/Text';
import { Image } from '../../core/global/design/Image';

// Assets
import Profile from '../../assets/images/profile.jpg';

const Index = () => {
    let [ width, setWidth ] = useState();
    
    useEffect(() => {
        watchViewport(({ size }) => { setWidth(size.x); });
    }, []);

    return (
        <Box width= { width } padding= "100px 40px" bgcolor= "#dfe6e9">
            <Container>
                <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch">
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                        <Ctrl.Typography text= "About me" className= { Text().title } color= "#2d3436" />
                        <Ctrl.Typography text= "." className= { Text().title } color= "#00cec9" />
                    </Box>
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 4 }>
                        <Grid item xs= { 12 } md= { 6 }>
                            <Ctrl.Typography text= { `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis bibendum velit et interdum. 
                                Donec ex dolor, posuere ut placerat sed, egestas at risus. Sed et risus suscipit, accumsan urna sit amet, efficitur dolor. Donec id lacinia erat. 
                                Praesent placerat varius lectus, at luctus nisi. Phasellus molestie lobortis feugiat. Mauris aliquam sem eu facilisis vehicula. 
                                Donec id risus pretium, tincidunt ante a, vehicula neque. Pellentesque nunc orci, sollicitudin quis lacus nec, lacinia placerat orci. Morbi in erat elit.` }
                                color= "#636e72" className= { Text().info } />
                        </Grid>
                        <Grid item xs= { 12 } md= { 6 }>
                            <Box display= "flex" flexDirection= "row" justifyContent= "center" alignItems= "center">
                                <Box className= { Image().profile } overflow= "hidden" borderRadius= "100%" border= "solid 2px #636e72">
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