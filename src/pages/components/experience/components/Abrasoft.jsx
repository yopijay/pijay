// Libraries
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { company, info, label, position, year } from "../index.style"; // Styles

const Abrasoft = () => {
    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
                <Grid item xs= { 12 } sm= { 4 }><Typography sx= { year }>Sept 2021 - Mar 2022</Typography></Grid>
                <Grid item xs= { 12 } sm= { 8 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Typography sx= { position }>Frontend Web Developer</Typography>
                            <Typography sx= { company }>Abrasoft Information Technology Solutions</Typography>
                        </Stack>
                        <Typography sx= { info }>Developed a crypto-exchange website, facilitating smooth transactions for trading 
                            and transferring crypto assets between crypto holders.</Typography>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography gutterBottom sx= { label }>Tech Stack</Typography>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                    <Grid item><Chip label= "ReactJS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "MaterialUI" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "NodeJS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "HTML" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "CSS" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "OOP" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                </Grid>
                            </Stack>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography gutterBottom sx= { label }>Tools</Typography>
                                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                    <Grid item><Chip label= "VSCode" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
                                    <Grid item><Chip label= "Bitbucket" sx= {{ backgroundColor: '#263238', color: '#ECEFF1' }} /></Grid>
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

export default Abrasoft;