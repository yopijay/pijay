// Libraries
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { company, duties, position, year } from "../style"; // Styles
const techstack = [ 'ReactJS', 'Material UI', 'NodeJS', 'HTML', 'CSS', 'Javascript', 'RestAPI' ];
const tools = [ 'VSCode', 'BitBucket', 'Github' ];

const Abrasoft = () => {
    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Grid item xs= { 12 } md= { 4 }><Typography sx= { year }>Sept 2021 - Mar 2022</Typography></Grid>
                <Grid item xs= { 12 } md= { 8 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Typography sx= { company }>Abrasoft Information Technology Solutions</Typography>
                            <Typography sx= { position }>Frontend Web Developer</Typography>
                        </Stack>
                        <Typography sx= { duties }>Developed a crypto-exchange website, facilitating smooth transactions for trading 
                            and transferring crypto assets between crypto holders.</Typography>
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

export default Abrasoft;