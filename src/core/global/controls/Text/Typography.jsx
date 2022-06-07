// Libraries
import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/styles';
// import { makeStyles } from '@mui/styles';

const Typography = ( props ) => {
    const { text= '', fontFamily= 'Gilroy Light', fontSize= '100%', color= '#dfe6e9', ...other } = props;

    const Text = styled(Box)({
        fontFamily: fontFamily,
        fontSize: fontSize,
        color: color
    });

    return (
        <Text { ...other }>{ text }</Text>
    );
}

export default Typography;