// Libraries
import { Stack, Typography } from "@mui/material";

// Constants
import { info, title } from "./index.style"; // Styles

const Index = () => {
    return (
        <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 3 } sx= {{ padding: '60px 0' }}>
            <Typography sx= { title }>About Me</Typography>
            <Stack direction= "column" justifyContent= "flex-start" alignItems= "stretch" spacing= { 2 }>
                <Typography sx= { info }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eros diam, dignissim ac sem non, volutpat pulvinar elit. 
                        Nunc venenatis facilisis ipsum, eu pharetra magna porta aliquam. Nulla vel ante est. Nullam vehicula imperdiet cursus. 
                        In feugiat, nisl et vulputate elementum, felis turpis faucibus tellus, et feugiat turpis enim eget purus. Nulla accumsan efficitur ante eu porttitor. 
                        In rutrum convallis posuere. Donec feugiat faucibus enim at finibus. Maecenas tortor mi, imperdiet non eleifend aliquet, tincidunt quis eros. 
                        Praesent nunc velit, porta in mattis a, sodales ac velit. Mauris eu nunc dapibus, feugiat sem sed, tristique diam. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in consectetur velit.</Typography>
                <Typography sx= { info }>Duis maximus nisl vitae pulvinar iaculis. Nam odio eros, mollis at elit sagittis, feugiat dapibus turpis. 
                        Sed mattis elit quam, ac tristique diam vestibulum sed. Phasellus eget ipsum lacinia, ullamcorper urna sed, eleifend est. 
                        Suspendisse interdum vehicula ligula, id tempus orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
                        Mauris at magna dapibus est varius fermentum vitae vel metus. Maecenas dictum id magna ut fermentum. 
                        Phasellus vulputate cursus purus nec accumsan. Quisque elementum, ligula volutpat condimentum luctus, tortor elit egestas nibh, 
                        vel vehicula odio tellus vitae ligula. Quisque dictum sem eu cursus feugiat. Sed sit amet sem at leo euismod vehicula.</Typography>
            </Stack>
        </Stack>
    );
}

export default Index;