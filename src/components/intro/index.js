// Libraries
import React from 'react';
import { Box, Grid, Toolbar } from '@mui/material';

// Assets
import Profile from '../../assets/images/avatar.jpg';

const Index = () => {
    return (
        <Box>
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Toolbar />
            <Grid container direction= "row" justifyContent= "center" alignItems= "center" spacing= { 2 }>
                <Grid item xs= { 12 } md= { 6 }>
                    <Box display= "flex" flexDirection= "column" justifyContent= "flex-end" alignItems= "flex-end" padding= "0 10px">
                        <Box sx= {{ fontSize: '600%', fontFamily: 'Theories', color: '#dcdde1' }}>Hi,</Box>
                        <Box sx= {{ fontSize: '320%', fontFamily: 'Theories', color: '#81ecec' }}>I`m a Front-End</Box>
                        <Box sx= {{ fontSize: '320%', fontFamily: 'Theories', color: '#81ecec' }}>Web Developer</Box>
                        <Box sx= {{ fontSize: '250%', fontFamily: 'Theories', color: '#dcdde1' }}>With 3 Years of Experience</Box>
                        <Box sx= {{ fontSize: '250%', fontFamily: 'Theories', color: '#dcdde1' }}>In Web-development</Box>
                    </Box>
                </Grid>
                <Grid item xs= { 12 } md= { 6 }>
                    <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center" padding= "0 10px">
                        {/* <Box sx= {{ width: '500px', height: '500px', borderRadius: '100%', overflow: 'hidden', border: 'solid 25px #81ecec' }}> */}
                            {/* <img src= { Profile } alt= "profile" width= "100%" height= "100%" /> */}
                        {/* </Box> */}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Index;