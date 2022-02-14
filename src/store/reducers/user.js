import { createSlice } from "@reduxjs/toolkit";

const CurrentUser = createSlice({
  name:'CurrentUser',
  initialState: {
    user: null
  },
  reducers: {
    actualizarUsuario: (state, action) => {
      state.user = action.payload;
    }
  }
})

export const { actualizarUsuario } = CurrentUser.actions;

export default CurrentUser.reducer