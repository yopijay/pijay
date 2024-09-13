// Libraries
import { Chip, Grid, Stack, Typography } from "@mui/material";

// Assets
import Portfolio from "assets/images/works/pijay.png";
import KC from "assets/images/works/kc.png";
import QCACACE  from "assets/images/works/qcacace.png";
import SPOWER from "assets/images/works/s-power.png";
import Invitation from "assets/images/works/paul-hazel.png";

// Constants
import { sitedesc, sitelink, sitephoto, title } from "./style"; // Styles
import { Link } from "react-router-dom";
const projects = [
    { photo: Portfolio, title: 'My Portfolio', techstach: [ 'Material UI', 'ReactJS', 'HTML', 'CSS', 'Javascript' ], 
        desc: 'Portfolio site built with React JS and Material UI', link: 'https://pijay.vercel.app/' },
    { photo: KC, title: 'Inventory & Assets Management System', techstach: [ 'Material UI', 'ReactJS', 'HTML', 'CSS', 'Javascript', 'NodeJS', 'ExpressJS', 'PostgreSQL', 'RestAPI' ], 
            desc: 'A web application for internal use of the compan. Used for tracking the remaining stocks of the product they are selling.', link: 'https://kenneth-commercial.vercel.app/' },
    { photo: QCACACE, title: 'Quezon City Animal Care & Adoption Center E-Services', techstach: [ 'Material UI', 'ReactJS', 'HTML', 'CSS', 'Javascript', 'NodeJS', 'ExpressJS', 'PostgreSQL', 'RestAPI' ], 
            desc: `Web application that provides services that makes adoption, surrendering, and reporting missing animals easier. 
                        It also provides information about Quezon City Animals including latest announcements to keep you updated. Here in QC ACAC, we offer love and care to the animals!`,
            link: 'https://qcacace.vercel.app/' },
    { photo: SPOWER, title: 'S-Power', techstach: [ 'Material UI', 'ReactJS', 'HTML', 'CSS', 'Javascript' ], 
            desc: `My web design proporal for S-power Corporation. This site is only for viewing of their products and also a way to contact the company for other services they can offer.`,
            link: 'https://s-power.vercel.app/' },
    { photo: Invitation, title: 'Paul & Hazel Wedding E-Invitaion', techstach: [ 'Material UI', 'ReactJS', 'HTML', 'CSS', 'Javascript' ], 
            desc: `E-invitation site for my own wedding! Planning to add RSVP functionality for future use.`,
            link: 'https://paul-hazel.vercel.app/' }
]

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Typography sx= { title }>Works</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                { projects.map((prj, index) =>
                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" key= { index }>
                        <Grid item xs= { 12 } sm= { 6 } md= { 8 } lg= { 6 } sx= {{ padding: '20px' }}>
                            <Stack sx= { sitephoto(prj.photo) } />    
                        </Grid>
                        <Grid item xs= { 12 } sx= {{ padding: '20px 12px' }}>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
                                <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                                    <Typography component= { Link } to= { prj.link } target= { prj.link } sx= { sitelink }>{ prj.title }</Typography>
                                    <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start">
                                        { (prj.techstach).map((tech, index) => <Grid item key= { index } sx= {{ padding: '4px' }}><Chip label= { tech } sx= {{ color: '#D8D9DA' }} /></Grid> )}
                                    </Grid>
                                </Stack>
                                <Typography sx= { sitedesc }>{ prj.desc }</Typography>
                            </Stack>
                        </Grid>
                    </Grid> )}
            </Stack>
        </Stack>
    );
}

export default Index;