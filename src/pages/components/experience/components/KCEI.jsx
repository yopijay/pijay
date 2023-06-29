// Libraries
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { company, info, label, position, year } from "../index.style"; // Styles

const KCEI = () => {
    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
                <Grid item xs= { 12 } sm= { 4 }><Typography sx= { year }>May 2022 - Present</Typography></Grid>
                <Grid item xs= { 12 } sm= { 8 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Typography sx= { position }>Fullstack Web Developer</Typography>
                            <Typography sx= { company }>KC Electrical Innovation, Inc.</Typography>
                        </Stack>
                        <Typography sx= { info }>Developed an Inventory Management System for internal use of the company which also functions to 
                            determine the annual inventory count, accounting the actual inventory in stock.</Typography>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography gutterBottom sx= { label }>Tech Stack</Typography>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                    <Grid item><Chip label= "ReactJS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "ExpressJS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "MaterialUI" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "NodeJS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "HTML" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "CSS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "OOP" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "RestAPI" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "PostgreSQL" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                </Grid>
                            </Stack>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography gutterBottom sx= { label }>Tools</Typography>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                    <Grid item><Chip label= "VSCode" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Navicat" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Vercel" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Render" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Github" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
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