import { createSlice } from "@reduxjs/toolkit";
const initialState = [];
const customerslice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer(state, action) {
      state.push(action.payload);
    },
    logout(){
        return initialState
    }
  },
});
export const { addCustomer,logout } = customerslice.actions;
export default customerslice.reducer;
