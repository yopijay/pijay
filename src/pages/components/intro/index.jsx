// Libraries
import { Grid, Stack, Typography } from "@mui/material";

// Constants
import Logo from "assets/images/logo.png"; // Assets
import { avatar, intro, likes, links, name, profession } from "./index.style"; // Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <Grid container direction= "row" justifyContent= "space-between" alignItems= "stretch">
            <Grid item xx= { 12 } md= { 4 }>
                <img src= { Logo } alt= "logo" style= { avatar } />
            </Grid>
            <Grid item xs= { 12 } md= { 7 }>
                <Stack direction= "column" justifyContent= "center" alignItems= "stretch" spacing= { 2 } sx= {{ height: '100%' }}>
                    <Typography sx= { intro }>Hi my name is</Typography>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                        <Typography sx= { name }>Paul John Judan</Typography>
                        <Typography sx= { profession }>Front-end Web Developer</Typography>
                    </Stack>
                    <Typography sx= { likes }>I really like to code, that's all.</Typography>
                    <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
                    <Typography sx= { links } component= { Link } 
                        target= "https://www.facebook.com/yopijay" 
                        to= "https://www.facebook.com/yopijay"><FontAwesomeIcon icon= { brands('facebook') } /></Typography>
                    <Typography sx= { links } component= { Link } 
                        target= "https://instagram.com/kuyapijay?igshid=MzNINGNkZWQ4Mg==" 
                        to= "https://instagram.com/kuyapijay?igshid=MzNINGNkZWQ4Mg=="><FontAwesomeIcon icon= { brands('instagram') } /></Typography>
                    <Typography sx= { links } component= { Link } 
                        target= "https://twitter.com/kuyapijay" 
                        to= "https://twitter.com/kuyapijay"><FontAwesomeIcon icon= { brands('twitter') } /></Typography>
                    <Typography sx= { links } component= { Link } 
                        target= "https://www.youtube.com/@pijay8957" 
                        to= "https://www.youtube.com/@pijay8957"><FontAwesomeIcon icon= { brands('youtube') } /></Typography>
                    <Typography sx= { links } component= { Link } 
                        target= "https://www.linkedin.com/in/paul-john-judan-0060a41b9/" 
                        to= "https://www.linkedin.com/in/paul-john-judan-0060a41b9/"><FontAwesomeIcon icon= { brands('linkedin') } /></Typography>
                    <Typography sx= { links } component= { Link } 
                        target= "https://github.com/yopijay" 
                        to= "https://github.com/yopijay"><FontAwesomeIcon icon= { brands('github') } /></Typography>
                    </Stack>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Index;