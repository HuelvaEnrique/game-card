import { createSlice } from "@reduxjs/toolkit";

const ListaDeCartas = createSlice({
  name:'ListaDeCartas',
  initialState: {
    lista: [
      {
        id: 0,
        ataque: 100,
        fuerza: 150,
        vida: 100,
        velocidad: 50,
      },
      {
        id: 10,
        ataque: 120,
        fuerza: 250,
        vida: 50,
        velocidad: 100,
      },
      {
        id: 5,
        ataque: 120,
        fuerza: 250,
        vida: 50,
        velocidad: 100,
      },
      {
        id: 97,
        ataque: 120,
        fuerza: 250,
        vida: 50,
        velocidad: 100,
      },
      {
        id: 30,
        ataque: 120,
        fuerza: 250,
        vida: 50,
        velocidad: 100,
      },
      {
        id: 19,
        ataque: 120,
        fuerza: 250,
        vida: 50,
        velocidad: 100,
      },
      {
        id: 70,
      },
      {
        id: 71,
      },
      {
        id: 72,
      },
      {
        id: 73,
      },
      {
        id: 74,
      },
      {
        id: 75,
      },
      {
        id: 76,
      },
      {
        id: 77,
      },      
      {
        id: 78,
      },
      {
        id: 79,
      },
      {
        id: 80,
      }
    ]
  },
  reducers: {
    guardarLista: (state, action) => {
      state.lista = action.payload;
    }
  }
})

export const { guardarLista } = ListaDeCartas.actions;

export default ListaDeCartas.reducer