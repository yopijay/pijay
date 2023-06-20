// Libraries
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands, solid } from "@fortawesome/fontawesome-svg-core/import.macro";

// Assets
import Banner from "assets/images/banner.png";

// Components
import { banner, container, content, info, socials } from "./index.style"; // Styles

const Index = () => {
    return (
        <Box display= "flex">
            <Container maxWidth= "xl">
                <Stack direction= "row" justifyContent= "flex-start" alignItems= "stretch" sx= { container } spacing= { 5 }>
                    <Stack sx= { socials } spacing= { 3 }>
                        <Typography><FontAwesomeIcon icon= { brands('facebook') } size= "2x" color= "#f1f2f6" /></Typography>
                        <Typography><FontAwesomeIcon icon= { brands('twitter') } size= "2x" color= "#f1f2f6" /></Typography>
                        <Typography><FontAwesomeIcon icon= { brands('instagram') } size= "2x" color= "#f1f2f6" /></Typography>
                        <Typography><FontAwesomeIcon icon= { brands('youtube') } size= "2x" color= "#f1f2f6" /></Typography>
                        <Typography><FontAwesomeIcon icon= { brands('linkedin') } size= "2x" color= "#f1f2f6" /></Typography>
                    </Stack>
                    <Stack sx= { content }>
                        <Avatar src= { Banner } alt= "banner" sx= { banner } />
                        <Stack sx= { info }>
                            
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}

export default Index;