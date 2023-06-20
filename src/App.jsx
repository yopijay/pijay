// Libraries
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Layouts
import Main from "./pages";
import { Suspense } from "react";
import { ScreenLoader } from "./core/loader/Screen";
import { GlobalPrvdr } from "core/context/Global";

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