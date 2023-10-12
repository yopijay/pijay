// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Stack, Typography } from "@mui/material";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

// Constants
const socials = [
    { links: 'https://www.facebook.com/yopijay', icon: <FontAwesomeIcon icon= { brands('facebook') } /> },
    { links: 'https://instagram.com/kuyapijay?igshid=MzNINGNkZWQ4Mg==', icon: <FontAwesomeIcon icon= { brands('instagram') } /> },
    { links: 'https://twitter.com/kuyapijay', icon: <FontAwesomeIcon icon= { brands('twitter') } /> },
    { links: 'https://www.youtube.com/@pijay8957', icon: <FontAwesomeIcon icon= { brands('youtube') } /> },
    { links: 'https://www.linkedin.com/in/paul-john-judan-0060a41b9/', icon: <FontAwesomeIcon icon= { brands('linkedin') } /> },
    { links: 'https://github.com/yopijay', icon: <FontAwesomeIcon icon= { brands('github') } /> }
];

const links = {
    fontSize: '145%', 
    textDecoration: 'none', 
    color: '#D8D9DA',
    '&:hover': { 
        color: '#FFFFFF', 
        transition: 'all 0.2s ease-in-out' 
    }
}

const Index = () => {
    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 2 }>
            { socials.map((data, index) => ( 
                <Typography sx= { links } 
                    component= { Link } 
                    key= { index } 
                    target= { data.links } 
                    to= { data.links }>{ data.icon }</Typography> )) 
            }
        </Stack>
    );
}

export default Index;