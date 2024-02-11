import { configureStore } from "@reduxjs/toolkit";
import Customerreducer from "../slices/Customerslice";
export const Store=configureStore({
    devTools:true,
    reducer:{
        customer:Customerreducer
    }
})