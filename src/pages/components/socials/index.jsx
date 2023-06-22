// Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack, Typography } from "@mui/material";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

const Index = () => {
    return (
        <Stack direction= "row" justifyContent= "flex-start" alignItems= "center" spacing= { 1 }>
            <Typography><FontAwesomeIcon icon= { brands('facebook') } /></Typography>
        </Stack>
    );
}

export default Index;