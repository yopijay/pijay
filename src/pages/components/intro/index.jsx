// Libraries
import { Box, Stack, Typography } from "@mui/material";

// Constants
import { info, label, name } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Typography sx= { name }>Paul John Solano Judan</Typography>
                <Typography sx= { label }>Front-end Developer</Typography>
            </Stack>
            <Typography sx= { info }>I build clean, reusable and readable components/functions for web.</Typography>
            <Box sx= {{ width: '15%', backgroundColor: '#e4f7f8', height: '4px', borderRadius: '8px' }} />
        </Stack>
    );
}

export default Index;