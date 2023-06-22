// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { info, label, name } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Typography sx= { name }>Paul John Solano Judan</Typography>
                <Typography sx= { label }>Front-end Developer</Typography>
            </Stack>
            <Typography sx= { info }>I build clean, reusable and automated components/functions for web.</Typography>
        </Stack>
    );
}

export default Index;