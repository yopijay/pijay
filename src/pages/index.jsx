// Libraries
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

// Components
import Intro from "./components/intro";

// Constants
import { container } from "./index.style"; // Styles

// Styles
// const container = { flexGrow: 1, height: '100vh', overflow: 'hidden', padding: '150px 0 0 0' };
// const content = { flexDirection: 'column', justifyContent: 'space-between', alignItems: 'stretch', paddingBottom: '50px' };

const Index = () => {
    return (
        <Box display= "flex">
            <Container maxWidth= "md">
                <Stack sx= { container }>
                    <Intro />
                </Stack>
            </Container>
        </Box>
    );
}

export default Index;