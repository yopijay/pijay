// Libraries
import React from 'react';
import { Box, Grid, LinearProgress, linearProgressClasses } from '@mui/material';

// Core
import Ctrl from '../../../core/global/controls/Controls';

// Design
import { Text } from '../../../core/global/design/Text';

// Constants
import { Languages as Lang } from '../../../core/global/constants/Skills';

const Languages = () => {

    return (
        <Box display= "flex" flexDirection= "column" justifyContent= "flex-start" alignItems= "stretch" marginTop= "80px">
            <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                <Ctrl.Typography text= "Programming" className= { Text().subtitle } color= "#2d3436" marginRight= "10px" />
                <Ctrl.Typography text= "Languages" className= { Text().subtitle } color= "#00cec9" />
            </Box>
            <Box marginTop= "40px">
                <Grid container direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                    {
                        Lang().map((lang, index) => (
                            <Grid item key= { index }>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                                    <Grid item xs= { 2 } md= { 1 }>
                                        <Box width= "40px" height= "40px" borderRadius= "100%" overflow= "hidden">
                                            <img src= { lang.icon } width= "100%" alt= { lang.name } />
                                        </Box>
                                    </Grid>
                                    <Grid item xs= { 10 } md= { 11 }>
                                        <Box display= "flex" flexDirection= "row" justifyContent= "flex-start" alignItems= "center">
                                            <Box flexGrow= "1">
                                                <LinearProgress variant= "determinate" value= { parseInt(lang.percentage) } 
                                                    sx= {{ height: '5px', borderRadius: '5px', 
                                                    [`& .${ linearProgressClasses.bar }`]: {
                                                        backgroundColor: lang.color
                                                    } }} />
                                            </Box>
                                            <Box marginLeft= "10px" color= "#636e72">{ lang.percentage }%</Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    );
}

export default Languages;