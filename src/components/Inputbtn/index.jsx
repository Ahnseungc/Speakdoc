import React,{useState,useRef, useCallback} from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from 'react-redux';
import axios from "axios";


const Inputbtn = ()=>{
    const [name,Setname]=useState();
    const [date,Setdate]=useState();
    const dispatch =useDispatch();
    
    const ref = useRef();
    const handleChange =(e)=>{   
        console.log(e);
        
    }    
    const onUploadPdf=useCallback((e)=>{
            if(!e.target.files){
                return;
            }
            const file = e.target.files[0];
            const name = JSON.stringify(e.target.files[0].name);
            const date = JSON.stringify(e.target.files[0].lastModifiedDate).substr(1,10);        
            dispatch({type:"UPLOAD",name:name,date:date})

            const formData = new FormData();
            formData.append('file',file)
            // for (var key of formData.values()) {
            //     console.log(key);              
            //   }            
            axios({
                url: "/document",
                method:"POST",
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            }
            ).then(res=>{
                console.log(res.data);
            }).catch(err=>{
                console.error(err);
            })


    },[])
    

    return(
        <div className="Input">            
        <p>            
            <label for="input-file">
            <FontAwesomeIcon icon={faPlus}/>
            </label>
            <input type="file" id="input-file" 
            style={{display:"none"}} 
            onChange={onUploadPdf}
            ref={ref}
            />                        
        </p>
    </div>
    )
}

export default Inputbtn;