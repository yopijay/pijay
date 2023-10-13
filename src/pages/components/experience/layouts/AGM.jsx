// Libraries
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { company, duties, position, year } from "../style"; // Styles
const techstack = [ 'ReactJS', 'Laravel', 'Java', 'Material UI', 'Bootstrap', 'NodeJS', 'HTML', 'CSS', 'Javascript', 'PHP', 'Sass/Scss' ];
const tools = [ 'VSCode', 'Android Studio', 'Github', 'Jira' ];

const AGM = () => {
    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Grid item xs= { 12 } md= { 4 }><Typography sx= { year }>June 2019 - Sept 2021</Typography></Grid>
                <Grid item xs= { 12 } md= { 8 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Typography sx= { company }>Aktus Global Management Inc.</Typography>
                            <Typography sx= { position }>Front-end Developer | Team Lead</Typography>
                        </Stack>
                        <Typography sx= { duties }>Enhance and made additions for some functionality of their Asset Management System. 
                            Part of the company's mobile app developer team for creating cross-platform Modular System.
                            In charge of creating standard design frameworks for the company's future projects.</Typography>
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

export default AGM;