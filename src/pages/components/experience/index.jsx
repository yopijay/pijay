// Libraries
import { Stack, Typography } from "@mui/material";

// Layouts
import AGM from "./layouts/AGM";

// Constants
import { title } from "./style"; // Styles
import KCEI from "./layouts/KCEI";
import Abrasoft from "./layouts/Abrasoft";

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Typography sx= { title }>Experience</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 4 }>
                <KCEI />
                <Abrasoft />
                <AGM />
            </Stack>
        </Stack>
    );
}

export default Index;