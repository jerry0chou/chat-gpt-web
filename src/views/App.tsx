import React, {useEffect} from 'react';
import SideMenu from "./SideMenu";
import MainContent from "./MainContent";
import {AppContainer, SideMainContainer} from "./css";

import useAllStates from "../hooks/useAllStates";
import useWindowSize from "../hooks/useWindowSize";
import Header from "../components/Header/Header";
import {SmallDeviceWidth} from "../util/constanst";
import {useAppDispatch} from "../hooks/storeHooks";
import {foldMenuAction} from "../store/reducer/menu";

function App() {
    const {theme, foldMenu} = useAllStates()
    const dispatch = useAppDispatch();
    const {width} = useWindowSize();
    useEffect(()=>{
        if(width< SmallDeviceWidth){
            dispatch(foldMenuAction(true))
        }
    }, [width])
    return (<AppContainer theme={theme}>
            <Header/>
            <SideMainContainer>
                {foldMenu ? <div/>: <SideMenu/>}
                <MainContent/>
            </SideMainContainer>
        </AppContainer>
    );
}

export default App;
