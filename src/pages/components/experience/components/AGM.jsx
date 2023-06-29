// Libraries
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { company, info, label, position, year } from "../index.style"; // Styles

const AGM = () => {
    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
                <Grid item xs= { 12 } sm= { 4 }><Typography sx= { year }>June 2019 - Sept 2021</Typography></Grid>
                <Grid item xs= { 12 } sm= { 8 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Typography sx= { position }>Frontend Web Developer</Typography>
                            <Typography sx= { company }>Aktus Global Management, Inc.</Typography>
                        </Stack>
                        <Typography sx= { info }>Enhance and made additions for some functionality of their Asset Management System. 
                            Part of the company's mobile app developer team for creating cross-platform Modular System.
                            In charge of creating standard design frameworks for the company's future projects.</Typography>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography gutterBottom sx= { label }>Tech Stack</Typography>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                    <Grid item><Chip label= "ReactJS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Laravel" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Java" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "MaterialUI" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Bootstrap" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "NodeJS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "HTML" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "CSS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "OOP" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "PHP" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Sass/Scss" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                </Grid>
                            </Stack>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography gutterBottom sx= { label }>Tools</Typography>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                    <Grid item><Chip label= "VSCode" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Android Studio" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Github" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Jira" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
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