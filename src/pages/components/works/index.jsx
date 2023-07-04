// Libraries
import { Avatar, Box, Chip, Grid, Stack, Typography } from "@mui/material";

// Constants
import { Works } from "./works"; // JSON
import { info, items, project, sample, title } from "./index.style"; // Styles
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 } sx= {{ padding: '60px 0' }}>
            <Typography sx= { title }>My Works</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 }>
                { Works.map((work, index) => (
                    <Box key= { index }>
                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                            <Grid item xs= { 12 } sm= { 4 } sx= {{ padding: '10px' }}>
                                <Stack direction= "row" justifyContent= "center" alignItems= "center">
                                    <Avatar variant= "rounded" src= { work.sample } alt= { work.title } sx= { sample } />
                                </Stack>
                            </Grid>
                            <Grid item xs= { 12 } sm= { 8 }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                                    <Typography sx= { project } component= { Link } to= { work.link } target= { work.link }>{ work.title }</Typography>
                                    <Typography sx= { info }>{ work.info }</Typography>
                                    <Box>
                                        <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 1 }>
                                            { (work.tech).map((wrk, index) => ( <Grid item key= { index }><Chip label= { wrk } sx= { items } /></Grid> )) }
                                        </Grid>
                                    </Box>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>
                ) )}
            </Stack>
        </Stack>
    );
}

export default Index;