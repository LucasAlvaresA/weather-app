import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { WeatherComponent } from "./components/WeatherComponent";
import { GlobalStyle } from "./GlobalStyle";

function App() {
    return (
        <>
            <GlobalStyle />
            <ToastContainer />
            <WeatherComponent />
        </>
    );
}

export default App;
