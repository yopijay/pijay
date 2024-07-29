// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { info, title } from "./style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Typography sx= { title }>About</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                <Typography sx= { info }>I have been in the industry for 5 years, creating softwares, specifically web apps. I am currently working on a system
                    which is RSVP, for my personal need, and later on if it becomes successfull, I also plan to use it for random users who also have the same needs
                    as me.</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;