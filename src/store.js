

// export const plusStr = ()=>({type:"PLUS", str:"helloWorld"});
export const returnImg = (img)=>({type:"SEND", img:{img}})
export const saveImg = (img,text)=>({type:"SAVE", img:{img},text:{text}})
export const saveText = (name,date)=>({type:"UPLOAD", name:{name},date:{date}})

const initState ={
    img: '',
    text: '',
    name: '',
    date: '',
}

export const reducer = (state=initState, action)=>{
    switch(action.type){
        case "SEND":
            console.log(state.img);
            return {img: action.saveImg.img,
                    text: action.saveImg.text
                }        
        case "SAVE":
            return{
                ...state,
                img: action.img,
            };
        case "UPLOAD":
            console.log(action.name)
            return{
                ...state,
                name: action.name,
                date: action.date,
            }
            

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
