import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITag } from "../../utils/interface/interface";

type Tags = ITag

interface TagsState{
    list: Tags[]
}

const initialState: TagsState = {
    list: []
}

const tagsSlice = createSlice({
    name: 'tags',
    initialState,
    reducers: {
        addTag(state, action: PayloadAction<string>){
            const arrTags = state.list.map(({tag}) => tag)
            if(!arrTags.includes(action.payload)){
                state.list.push({
                    idTag: new Date().toISOString() + `${Math.random()}`,
                    tag: action.payload
                })
            }            
        },
        removeTag(state, action: PayloadAction<string>){
            state.list = state.list.filter(tag => tag.idTag !== action.payload)
        }
    }
})

export const { addTag, removeTag } = tagsSlice.actions

export default tagsSlice.reducer