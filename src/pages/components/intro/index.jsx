// Libraries
import { Grid, Stack, Typography } from "@mui/material";

// Constants
import Logo from "assets/images/logo.png"; // Assets
import { avatar, intro, likes, name, profession } from "./index.style"; // Styles
import Socials from "./components/Socials"; // Layouts

const Index = () => {
    return (
        <Grid container direction= "row" justifyContent= "space-evenly" alignItems= "stretch" spacing= { 6 }>
            <Grid item xs= { 8 } sm= { 4 } md= { 4 }>
                <img src= { Logo } alt= "logo" style= { avatar } />
            </Grid>
            <Grid item xs= { 12 } sm= { 6 } md= { 7 }>
                <Stack direction= "column" justifyContent= "center" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%' }}>
                    <Typography sx= { intro }>Hi my name is</Typography>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                        <Typography sx= { name }>Paul John Judan</Typography>
                        <Typography sx= { profession }>Front-end Web Developer</Typography>
                    </Stack>
                    <Typography sx= { likes }>I really like to code, that's all.</Typography>
                    <Socials />
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Index;