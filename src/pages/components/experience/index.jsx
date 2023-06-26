// Libraries
import { Stack, Typography } from "@mui/material";

// Components
import KCEI from "./components/KCEI";
import Abrasoft from "./components/Abrasoft";
import AGM from "./components/AGM";

// Constants
import { title } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 } sx= {{ padding: '60px 0' }}>
            <Typography sx= { title }>Work Experience</Typography>
            <KCEI />
            <Abrasoft />
            <AGM />
        </Stack>
    );
}

export default Index;