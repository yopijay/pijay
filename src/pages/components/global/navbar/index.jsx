// Libraries
import { AppBar, Container, Typography } from "@mui/material"

// Constants
import { appbar, title } from "./index.style" // Styles

const Index = () => {
    return (
        <AppBar position= "fixed" sx= { appbar }>
            <Container maxWidth= "lg">
                <Typography sx= { title }><span style= {{ color: '#f36d4d' }}>.</span>pijay</Typography>
            </Container>
        </AppBar>
    );
}

export default Index;