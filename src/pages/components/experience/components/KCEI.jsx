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
                        <Typography sx= { info }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros diam, dignissim ac sem non, volutpat pulvinar elit. 
                            Nunc venenatis facilisis ipsum, eu pharetra magna porta aliquam. Nulla vel ante est. Nullam vehicula imperdiet cursus. 
                            In feugiat, nisl et vulputate elementum, felis turpis faucibus tellus, et feugiat turpis enim eget purus. Nulla accumsan efficitur ante eu porttitor. 
                            In rutrum convallis posuere. Donec feugiat faucibus enim at finibus. Maecenas tortor mi, imperdiet non eleifend aliquet, tincidunt quis eros. 
                            Praesent nunc velit, porta in mattis a, sodales ac velit. Mauris eu nunc dapibus, feugiat sem sed, tristique diam. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in consectetur velit.</Typography>
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