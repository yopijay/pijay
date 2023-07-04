// Libraries
import { Box, Container, Stack } from "@mui/material";

// Components
import Intro from "./components/intro";
import About from "./components/about";
import Experience from "./components/experience";
import Works from "./components/works";

// Constants
import { container } from "./index.style"; // Styles

const Index = () => {
    return (
        <Box display= "flex">
            <Container maxWidth= "md">
                <Stack sx= { container }>
                    <Intro />
                    <About />
                    <Experience />
                    <Works />
                </Stack>
            </Container>
        </Box>
    );
}

export default Index;