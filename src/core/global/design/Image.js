// Libraries
import { makeStyles } from "@mui/styles";

export const Image = makeStyles(({
    profile: {
        width: '400px',
        height: '400px',

        '@media (max-width: 760px)': {
            width: '350px',
            height: '350px',
        },
        '@media (max-width: 500px)': {
            width: '300px',
            height: '300px',
        },
        '@media (max-width: 400px)': {
            width: '280px',
            height: '280px',
        },
    }
}));