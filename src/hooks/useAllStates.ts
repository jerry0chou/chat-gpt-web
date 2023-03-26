import {useAppSelector} from "./storeHooks";

export default function useAllStates(){
    const fontSize = useAppSelector(state => state.fontSize);
    const theme = useAppSelector(state => state.theme);

    return {fontSize, theme};
}