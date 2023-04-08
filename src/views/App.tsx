import React, {useEffect} from 'react';
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import {AppContainer, SideMainContainer} from "./css";

import useAllStates from "../hooks/useAllStates";
import useWindowSize from "../hooks/useWindowSize";
import Header from "../components/Header/Header";
import {SmallDeviceWidth} from "../util/constanst";

function App() {
    const {theme} = useAllStates()
    const {width} = useWindowSize();
    return (<AppContainer theme={theme}>
            <Header/>
            <SideMainContainer>
                {width > SmallDeviceWidth ? <SideMenu/> : <div/>}
                <MainContent/>
            </SideMainContainer>
        </AppContainer>
    );
}

export default App;
