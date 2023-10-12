// Libraries
import { Container, Stack } from "@mui/material";

// Components
import Intro from "./components/intro";
import Socials from "./components/socials";
import About from "./components/about";

// Constants
import { container, content } from "./style"; // Styles

const Index = () => {
    return (
        <Container maxWidth= "lg">
            <Stack direction= {{ xs: 'column', md: 'row' }} justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 } sx= { container }>
                <Stack direction= "column" justifyContent= "space-between" alignItems= "stretch" width= {{ xs: '100%', md: '35%' }} spacing= { 4 }>
                    <Intro />
                    <Socials />
                </Stack>
                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 } sx= { content }>
                    <About />
                </Stack>
            </Stack>
        </Container>
    );
}

export default Index;