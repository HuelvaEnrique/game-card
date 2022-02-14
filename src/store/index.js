import { configureStore } from "@reduxjs/toolkit";

import ListaDeCartas from "./reducers/listaDeCartas";
import CurrentUser from "./reducers/user";

const store = configureStore({
  reducer: {
    listaDeCartas: ListaDeCartas,
    currentUser: CurrentUser,
  }
})

export default store;