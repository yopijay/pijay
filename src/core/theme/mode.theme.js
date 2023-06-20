import { createTheme } from "@mui/material"; // Libraries

export const mode = onoff => createTheme({
    typography: {
        fontFamily: [ '-apple-system', 'Gilroy Light' ],
        fontSize: 13
    }
});