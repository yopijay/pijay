// Libraries
import { makeStyles } from "@mui/styles";

export const Text = makeStyles(({
    title: {
        fontSize: '220%',

        '@media (max-width: 760px)': {
            fontSize: '170% !important',
        },
        '@media (max-width: 500px)': {
            fontSize: '140% !important',
        },
        '@media (max-width: 400px)': {
            fontSize: '100% !important',
        },
    }
}));