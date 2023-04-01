import React from 'react';
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import './views.css'
import {AppContainer} from "./css";
import {theme} from "antd";
import useAllStates from "../hooks/useAllStates";

function App() {
    const {theme} = useAllStates()
    return (<AppContainer theme={theme}>
            <SideMenu/>
            <MainContent/>
        </AppContainer>
    );
}

export default App;
