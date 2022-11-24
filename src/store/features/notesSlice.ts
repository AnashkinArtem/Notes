import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INote } from "../../utils/interface/interface";

type Note = INote

interface NotesState {
    list: Note[]
}

const initialState: NotesState = {
    list: [],
}

const noteSlice = createSlice({
   name: 'notes',
   initialState,
   reducers: {
      addNote(state, action: PayloadAction<string>){
           state.list.push({
               id: new Date().toISOString() + `${Math.random()}`,
               title: action.payload,
       })},
       removeNote(state, action: PayloadAction<string>){
           state.list = state.list.filter(note => note.id !== action.payload)
       },
       updateNote(state, action: PayloadAction<Note>){
           state.list = state.list.map(note => (
            note.id === action.payload.id ? 
            {...note, 
                title: action.payload.title,
            }
            : {...note}))          
       },
       filterNote(state, action: PayloadAction<string>){                   
            state.list = state.list.filter(note => note.title.split(' ').includes(action.payload))
       },

   } 
})

export const { addNote, removeNote, updateNote, filterNote } = noteSlice.actions

export default noteSlice.reducer