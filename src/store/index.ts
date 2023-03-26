import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import headerSlice from "./reducer/header";
export const store =  configureStore({
    reducer: {
        header: headerSlice,
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