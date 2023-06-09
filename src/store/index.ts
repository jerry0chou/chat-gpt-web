import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import headerSlice from "./reducer/header";
import chatSlice from "./reducer/chat";
import menuSlice from "./reducer/menu";
import inputSlice from "./reducer/input";
export const store =  configureStore({
    reducer: {
        header: headerSlice,
        chat: chatSlice,
        menu: menuSlice,
        input: inputSlice

    }
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;