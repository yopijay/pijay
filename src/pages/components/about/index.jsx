// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { info, title } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 } sx= {{ padding: '60px 0' }}>
            <Typography sx= { title }>About Me</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                <Typography sx= { info }>I'm a Front-end web developer based in Philippines.</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;