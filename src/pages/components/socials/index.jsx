// Libraries
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";


import { socials } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack sx= { socials } spacing= { 2 }>
            <Typography><FontAwesomeIcon icon= { brands('facebook') } size= "2x" color= "#f1f2f6" /></Typography>
            <Typography><FontAwesomeIcon icon= { brands('twitter') } size= "2x" color= "#f1f2f6" /></Typography>
            <Typography><FontAwesomeIcon icon= { brands('instagram') } size= "2x" color= "#f1f2f6" /></Typography>
            <Typography><FontAwesomeIcon icon= { brands('youtube') } size= "2x" color= "#f1f2f6" /></Typography>
            <Typography><FontAwesomeIcon icon= { brands('linkedin') } size= "2x" color= "#f1f2f6" /></Typography>
        </Stack>
    );
}

export default Index;