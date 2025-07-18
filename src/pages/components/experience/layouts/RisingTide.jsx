// Libraries
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { company, duties, position, year } from "../style";
const techstack = [ 'NextJS', 'Tailwind CSS', 'Node JS', 'HTML', 'CSS', 'Javascript', "Typescript", "Jest" ];
const tools = [ 'VSCode', 'Git', 'Azure' ]

const RisingTide = () => {
        return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Grid item xs= { 12 } md= { 4 }><Typography sx= { year }>Nov 2024 - July 2025</Typography></Grid>
                <Grid item xs= { 12 } md= { 8 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                            <Typography sx= { company }>Rising Tide Digital, Inc.</Typography>
                            <Typography sx= { position }>Frontend Web Developer</Typography>
                        </Stack>
                        <Typography sx= { duties }>Specialized in transforming Figma designs into functional, reusable, and responsive web applications with pixel-perfect precision. Responsible for 
                                comprehensive unit testing of components to ensure code quality and reliability, while seamlessly integrating RESTful APIs to deliver dynamic user experiences.</Typography>
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

export default RisingTide