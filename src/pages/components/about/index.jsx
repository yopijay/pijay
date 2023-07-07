// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { info, title } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 } sx= {{ padding: '60px 0' }}>
            <Typography sx= { title }>About Me</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                <Typography sx= { info }>I`m a front-end web developer with a 4 year experience in web development.
                    And the funny thing is that I'm not that good when it comes to designing.
                    I'm really passionate about creating a clean, reusable and easy to read components/functions
                    that helps me to make my project work faster. Currently, I'm working as a
                    fullstack developer at KC Electrical Innovation, Inc and I`m developing a web app inventory
                    system for internal use.</Typography>
                <Typography sx= { info }>As a frontend web developer, I am currently studying various frameworks and libraries such as ReactJS and 
                    Typescript for the framework and Material UI for the design and responsiveness of the website. And also for the future I am also studying 
                    the backend part of the development such as databases and APIs</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;