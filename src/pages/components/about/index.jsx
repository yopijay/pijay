// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { info, title } from "./style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Typography sx= { title }>About</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                <Typography sx= { info }>I have been in the industry for 5 years, creating softwares, specifically web apps. I am currently
                    employed in StunnerYPP Corporation as a frontend developer, to which I am responsible for creating, managing and maintaining
                    front-end part of our external sites.</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;