import React from 'react';
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import './views.css'
import {AppContainer} from "./css";

import useAllStates from "../hooks/useAllStates";
import Header from "../components/Header/Header";

function App() {
    const {theme} = useAllStates()
    return (<AppContainer theme={theme}>
            <Header/>
            <div className="side-main-container">
                <SideMenu/>
                <MainContent/>
            </div>
        </AppContainer>
    );
}

export default App;
