// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { title } from "./style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Typography sx= { title }>Works</Typography>
        </Stack>
    );
}

export default Index;