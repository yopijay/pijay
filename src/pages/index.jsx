// Libraries
import { Box, Container, Stack } from "@mui/material";

// Components
import Intro from "./components/intro";
import About from "./components/about";
import Experience from "./components/experience";

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
                </Stack>
            </Container>
        </Box>
    );
}

export default Index;