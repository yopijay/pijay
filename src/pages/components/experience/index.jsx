// Libraries
import { Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { Experience } from "./experience"; // JSON
import { company, info, items, label, position, title, year } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 } sx= {{ padding: '60px 0' }}>
            <Typography sx= { title }>Work Experience</Typography>
            { Experience.map((exp, index) => (
                <Box key= { index }>
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
                        <Grid item xs= { 12 } sm= { 4 }><Typography sx= { year }>{ exp.year }</Typography></Grid>
                        <Grid item xs= { 12 } sm= { 8 }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                    <Typography sx= { position }>{ exp.position }</Typography>
                                    <Typography sx= { company }>{ exp.company }</Typography>
                                </Stack>
                                <Typography sx= { info }>{ exp.info }</Typography>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                        <Typography gutterBottom sx= { label }>Tech Stack</Typography>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                            { (exp.tech_stack).map((tech, index) => ( <Grid item key= { index }><Chip label= { tech } sx= { items } /></Grid> )) }
                                        </Grid>
                                    </Stack>
                                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                        <Typography gutterBottom sx= { label }>Tools</Typography>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                            { (exp.tools).map((tool, index) => ( <Grid item key= { index }><Chip label= { tool } sx= { items } /></Grid> )) }
                                        </Grid>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Box>
            )) }
        </Stack>
    );
}

export default Index;