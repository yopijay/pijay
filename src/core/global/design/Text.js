// Libraries
import { makeStyles } from "@mui/styles";

export const Text = makeStyles(({
    title: {
        fontSize: '220%',

        '@media (max-width: 760px)': {
            fontSize: '190% !important',
        },
        '@media (max-width: 500px)': {
            fontSize: '160% !important',
        },
        '@media (max-width: 400px)': {
            fontSize: '150% !important',
        },
    },
    info: {
        fontSize: '130%',

        '@media (max-width: 760px)': {
            fontSize: '115% !important',
        },
        '@media (max-width: 500px)': {
            fontSize: '110% !important',
        },
        '@media (max-width: 400px)': {
            fontSize: '100% !important',
        },
    }
}));