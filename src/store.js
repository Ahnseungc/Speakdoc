// export const plusStr = ()=>({type:"PLUS", str:"helloWorld"});
export const returnImg = (img)=>({type:"SEND", img:{img}})
export const saveImg = (img)=>({type:"SAVE", img:{img}})

const initState ={
    img: '',
}

export const reducer = (state=initState, action)=>{
    switch(action.type){
        case "SEND":
            console.log(state.img);
            return {img: action.saveImg }
        
        case "SAVE":
            return{
                ...state,
                img: action.img,
            };

        default:
            return state;
    }
}

export default reducer;
// import { createSlice, configureStore } from "@reduxjs/toolkit";

// let img = createSlice({
//         name : "user",
//         // index : "1",
//         initialState: "none"
// })


// export default configureStore({

//     reducer:{
//         img : img.reducer
//     }
// })
