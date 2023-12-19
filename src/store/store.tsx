import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import { userApi } from "./features/UserApi";
import { authApi } from "./features/auth/AuthApi";

const rootReducer = combineReducers({
    userReducer,
    [userApi.reducerPath]:userApi.reducer,
    [authApi.reducerPath]:authApi.reducer,
});

export const setupStore = ()=>{
    return configureStore({
         reducer:rootReducer,
         middleware(getDefaultMiddleware) {
             return getDefaultMiddleware().concat(
                userApi.middleware,
                authApi.middleware,
             )
         },
    });
}


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];