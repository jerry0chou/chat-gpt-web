import {useAppSelector} from "./storeHooks";

export default function useAllStates(){
    const fontSize = useAppSelector(state => state.header.fontSize);
    const theme = useAppSelector(state => state.header.theme);
    const loading = useAppSelector(state => state.chat.loading);
    return {fontSize, theme, loading};
}