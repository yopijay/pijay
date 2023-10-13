// Libraries
import { Container, Stack } from "@mui/material";

// Components
import Intro from "./components/intro";
import Socials from "./components/socials";
import About from "./components/about";
import Experience from "./components/experience";
import Works from "./components/works";

// Constants
import { container, content, intro } from "./style"; // Styles

const Index = () => {
    return (
        <Container maxWidth= "lg">
            <Stack direction= {{ xs: 'column', md: 'row' }} justifyContent= "flex-start" alignItems= "stretch" spacing= { 8 } sx= { container }>
                <Stack direction= "column" justifyContent= "space-between" alignItems= "stretch" sx= { intro } spacing= { 4 }>
                    <Intro />
                    <Socials />
                </Stack>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 10 } sx= { content }>
                    <About />
                    <Experience />
                    <Works />
                </Stack>
            </Stack>
        </Container>
    );
}

export default Index;