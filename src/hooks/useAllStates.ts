import {useAppSelector} from "./storeHooks";

export default function useAllStates(){
    const fontSize = useAppSelector(state => state.header.fontSize);
    const theme = useAppSelector(state => state.header.theme);

    return {fontSize, theme};
}