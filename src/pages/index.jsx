// Libraries
import { Box, Container, Grid, Stack } from "@mui/material";

// Layouts
import Navbar from "./components/global/navbar";
import Intro from "./components/intro";
import Socials from "./components/socials";

// Styles
const container = { flexGrow: 1, height: '100vh', overflow: 'hidden', padding: '150px 0 0 0' };

const Index = () => {
    return (
        <Box display= "flex">
            <Navbar />
            <Container maxWidth= "lg">
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "spacing" spacing= { 2 } sx= { container }>
                    <Grid item xs= { 12 } md= { 4 }>
                        <Stack direction= "column" justifyContent= "space-between" alignItems= "stretch" spacing= { 5 }>
                            <Intro />
                            <Socials />
                        </Stack>
                    </Grid>
                    <Grid item xs= { 12 } md= { 8 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>

                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Index;