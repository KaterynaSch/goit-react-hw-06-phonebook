import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
    name: "contacts",
    initialState: {
        list: [ 
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        ],
    },    
    reducers: {
        saveContact(state, action) {            
            state.list = [...state.list, action.payload];
        },           
        deleteContact (state, action) {
            state.list = state.list.filter(contact => contact.id !== action.payload);
  
        },
    },
});
// Експортуємо генератори екшенів та редюсер
export const {saveContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;