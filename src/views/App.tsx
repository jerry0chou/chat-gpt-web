import React from 'react';
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import {AppContainer, SideMainContainer} from "./css";

import useAllStates from "../hooks/useAllStates";
import Header from "../components/Header/Header";

function App() {
    const {theme} = useAllStates()
    return (<AppContainer theme={theme}>
            <Header/>
            <SideMainContainer>
                <SideMenu/>
                <MainContent/>
            </SideMainContainer>
        </AppContainer>
    );
}

export default App;
