// Libraries
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { company, duties, position, year } from "../style"; // Styles
const techstack = [ 'ReactJS', 'ExpressJS', 'Material UI', 'Node JS', 'HTML', 'CSS', 'Javascript', 'RestAPI', 'PostgreSQL' ];
const tools = [ 'VSCode', 'Navicat', 'Vercel', 'Render', 'Github' ]

const KCEI = () => {
    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Grid item xs= { 12 } md= { 4 }><Typography sx= { year }>May 2022 - Present</Typography></Grid>
                <Grid item xs= { 12 } md= { 8 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Typography sx= { company }>KC Electrical Innovation, Inc.</Typography>
                            <Typography sx= { position }>Fullstack Web Developer | IT Staff</Typography>
                        </Stack>
                        <Typography sx= { duties }>Developed an Inventory Management System for internal use of the company which also functions to 
                            determine the annual inventory count, accounting the actual inventory in stock. Do IT Staff stuff like fixing printer, refilling inks, configure
                            LAN and Landline cables, setting up new computer and installing softwares.</Typography>
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

export default KCEI;