// Libraries
import { Avatar, Stack } from "@mui/material";

// Constants
import Banner from "assets/images/banner.png"; // Assets
import { banner, content, info } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack sx= { content }>
            <Avatar src= { Banner } alt= "banner" sx= { banner } />
            <Stack sx= { info }>
                
            </Stack>
        </Stack>
    );
}

export default Index;