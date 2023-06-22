// Libraries
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

// Constants
import Main from "./pages"; // Layouts
import { ScreenLoader } from "./core/loader/Screen"; // Loader
import { GlobalPrvdr } from "core/context/Global"; // Context

const App = () => {
    const client = new QueryClient();
    return ( 
        <BrowserRouter>
            <QueryClientProvider client= { client }>
                <GlobalPrvdr>
                    <Routes>
                        <Route path= "*" element= { 
                            <Suspense fallback= { <ScreenLoader /> }>
                                <Main />
                            </Suspense> 
                        } />
                    </Routes>
                </GlobalPrvdr>
            </QueryClientProvider>
        </BrowserRouter> 
    );
}

export default App;