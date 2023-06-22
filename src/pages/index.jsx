// Libraries
import { Box, Container, Grid, Stack } from "@mui/material";

// Components
import Navbar from "./components/global/navbar";
import Intro from "./components/intro";
import Socials from "./components/socials";
import About from "./components/about";

// Styles
const container = { flexGrow: 1, height: '100vh', overflow: 'hidden', padding: '150px 0 0 0' };
const content = { flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', paddingBottom: '50px' };

const Index = () => {
    return (
        <Box display= "flex">
            <Navbar />
            <Container maxWidth= "md">
                <Grid container direction= "row" justifyContent= "flex-start" alignItems= "spacing" spacing= { 5 } sx= { container }>
                    <Grid item xs= { 12 } md= { 5 }>
                        <Stack spacing= { 5 } sx= { content }>
                            <Intro />
                            <Socials />
                        </Stack>
                    </Grid>
                    <Grid item xs= { 12 } md= { 7 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 5 }>
                            <About />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Index;