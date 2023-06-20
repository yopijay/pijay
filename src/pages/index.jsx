// Libraries
import { Box, Container, Grid, Stack } from "@mui/material";

// Components
import { container } from "./index.style"; // Styles
import Socials from "./components/socials"; // Styles
import Content from "./components/content"; // Styles

const Index = () => {
    return (
        <Box display= "flex">
            <Container maxWidth= "xl">
                <Content />
            </Container>
        </Box>
    );
}

export default Index;