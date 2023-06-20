// Libraries
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";

// Assets
import App from "./App"; // Layouts

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    // <ThemeProvider>
    //     <CssBaseline />
    // </ThemeProvider>
        <App />
);