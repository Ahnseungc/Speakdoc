import React from "react";
import "./style.css"
import {DataGrid} from "@mui/x-data-grid";
import {DeleteOutline} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useState} from "react";
import {Rows} from "../../Data/Pdfdata";
import PdfDetail from "../Pdf_detail";
import { useNavigate } from 'react-router-dom';



export default function PdfMain(){

    const navigate = useNavigate();

    const columns =[
        {field: 'id', headerName:"NUMBER", width: 70},
        {field: 'date', headerName:"DATE", width: 80},
        {field: 'name', headerName:"NAME", width: 100},
        {field: 'action', headerName:"Action", width:80,
            renderCell: (params)=>{
                return(
                    <>
                    <Link to={'/pdfdetail'} state={params.row.id}>
                    <button className="userListEdit"
                    
                    >+</button>
                    </Link>
                    <DeleteOutline className="userListDelete"
                     onClick={()=> handleDelete(params.row.id)}
                    />
                    </>
                )
            }
    }
    ]
    const [data,setData] = useState(Rows);
    const handleDelete = (id) =>{
        setData(data.filter((item)=>item.id !== id));
    }

    return(
        <div className="userList"
        style={{color:"white"}}
        >
            <DataGrid
            rows={data}
            disableSelectionOnClick
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            />
        </div>
    )
}