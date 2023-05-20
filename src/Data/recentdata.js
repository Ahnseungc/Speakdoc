import {createSlice} from "@reduxjs/toolkit";

let recent  = createSlice({

    name : 'cart',
    initialState: [],
    reducers: {
        insertItem(state, action){
            let num = state.findIndex((obj)=>{
                return obj.id === action.payload.id;
            });
            if(num ===-1){
                state.push(action.payload);
            }
            else{
                state[num].count +=action.payload.count;
            }
        }
    },
});

export let {insertItem} = recent.actions;
export default recent;