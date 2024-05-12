// Libraries
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { company, duties, position, year } from "../style";
const techstack = [ 'NextJS', 'Bootstrap', 'Node JS', 'HTML', 'CSS', 'Javascript' ];
const tools = [ 'VSCode', 'Github', 'Jira' ]

const StunnerYPP = () => {
    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Grid item xs= { 12 } md= { 4 }><Typography sx= { year }>Feb 2023 - Present</Typography></Grid>
                <Grid item xs= { 12 } md= { 8 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Typography sx= { company }>Stunner YPP Corporation</Typography>
                            <Typography sx= { position }>Frontend Web Developer</Typography>
                        </Stack>
                        <Typography sx= { duties }>More focused on fixing minimal bugs and sometimes an errors. Also creating new product from scratch and adding additional feature
                        for existing sites depends of what our client wants.</Typography>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography marginBottom= "12px" variant= "body2" color= "#FFF6E0" fontWeight= "bold">Tech Stack</Typography>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                    { techstack.map((ts, index) => <Grid item key= { index }><Chip label= { ts } sx= {{ color: '#D8D9DA' }} /></Grid> ) }
                                </Grid>
                            </Stack>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography marginBottom= "12px" variant= "body2" color= "#FFF6E0" fontWeight= "bold">Tools</Typography>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                    { tools.map((tool, index) => <Grid item key= { index }><Chip label= { tool } sx= {{ color: '#D8D9DA' }} /></Grid> ) }
                                </Grid>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default StunnerYPP;