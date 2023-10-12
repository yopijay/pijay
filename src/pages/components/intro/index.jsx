// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { info, name, position } from "./style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                <Typography sx= { name }>Paul John Judan</Typography>
                <Typography sx= { position }>Software Engineer - Full Stack Web Developer</Typography>
            </Stack>
            <Typography sx= { info }>I build reusable, responsive and functional components for web. 
                I can do both front and back-end, including database.</Typography>
        </Stack>
    );
}

export default Index;