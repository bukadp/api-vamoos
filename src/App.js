import './App.css';
import BriefContainer from "./components/BriefContainer";
import MainPageContainer from "./components/MainPageContainer";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/*<Route path='*' element={<NotFound/>} />*/}
                    {/*<Route path="*" element={<NotFound to="/notfound" replace />} />*/}

                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />

                    <Route path="/" element={<MainPageContainer/>}/>
                    <Route path="/brief/:briefId" element={<BriefContainer/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
