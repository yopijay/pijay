// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";
import { links } from "./index.style";

const Index = () => {
    return (
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
    );
}

export default Index;