import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation";
import { GlobalStyle } from "./style";

const App = () => {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <Navigation />
        </BrowserRouter>
    );
}

export default App;
