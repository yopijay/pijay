// Libraries
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    const client = new QueryClient();

    return (
        <BrowserRouter>
            <QueryClientProvider client= { client }>
                <Routes>
                    <Route path= "*" element= { 'Hello World!' } />
                </Routes>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;