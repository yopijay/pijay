// Libraries
import { Box, Grid, Stack, Typography } from "@mui/material";

// Constants
import { year } from "../index.style"; // Styles

const AGM = () => {
    return (
        <Box>
            <Grid container direction= "row" justifyContent= "flex-start" alignItems= "flex-start" spacing= { 2 }>
                <Grid item xs= { 12 } sm= { 4 }><Typography sx= { year }>June 2019 - Sept 2021</Typography></Grid>
                <Grid item xs= { 12 } sm= { 8 }>
                    <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 1 }>
                            <Typography>Fullstack Web Developer</Typography>
                            <Typography>KC Electrical Innovation, Inc.</Typography>
                        </Stack>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros diam, dignissim ac sem non, volutpat pulvinar elit. 
                            Nunc venenatis facilisis ipsum, eu pharetra magna porta aliquam. Nulla vel ante est. Nullam vehicula imperdiet cursus. 
                            In feugiat, nisl et vulputate elementum, felis turpis faucibus tellus, et feugiat turpis enim eget purus. Nulla accumsan efficitur ante eu porttitor. 
                            In rutrum convallis posuere. Donec feugiat faucibus enim at finibus. Maecenas tortor mi, imperdiet non eleifend aliquet, tincidunt quis eros. 
                            Praesent nunc velit, porta in mattis a, sodales ac velit. Mauris eu nunc dapibus, feugiat sem sed, tristique diam. 
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in consectetur velit.</Typography>
                        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography gutterBottom>Tech Stack</Typography>
                            </Stack>
                            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch">
                                <Typography gutterBottom>Tools</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AGM;