// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { info, title } from "./style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 }>
            <Typography sx= { title }>About</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                <Typography sx= { info }>I have been in the industry for 4 and a half years, creating softwares, specifically web apps. I am currently
                    employed in KC Electrical Innovation Inc. as a fullstack developer, to which I am responsible for creating, managing and maintaining
                    front-end, back-end and also the database. I also engaged myself as an IT Staff in repairing printers, photocopiers, refill inks,
                    installing softwares, as well as landline and internet cables.</Typography>
                <Typography sx= { info }>At present, I am developing an asset and inventory management system which helps the company to internally
                    manage their products inventory and to monitor the stocks that are left. The technologies I use are ReactJS and Material UI for the front-end,
                    Node JS and Express JS for the back-end and PostgreSQL for the database. While I use RestAPI for the system that I am developing right now.</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;