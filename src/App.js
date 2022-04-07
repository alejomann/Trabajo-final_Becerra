import Header from "./Header.js"
import Main from "./Main.js"
import MiProvider from "./context/cartContext.js";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <BrowserRouter>
            <MiProvider>    
                <Header/>
                <Main/>
            </MiProvider>
            <ToastContainer 
                position="bottom-right"
                autoClose={4000}
                closeOnClick
                draggable
                pauseOnHover/>
        </BrowserRouter>
    )
}

export default App