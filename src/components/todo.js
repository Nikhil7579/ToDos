import { TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React ,{useState} from "react";
import { useSelector ,useDispatch } from 'react-redux';
import { addTodo,deleteTodo,removeTodo } from "../action";
const Todo=()=>{
    const list =useSelector((state)=>state.todoReducers.list);
    const [inputdata,setinputdata]=useState('');
    const dispatch=useDispatch();
    return(
        <>
        <div>
        <Typography variant="h4" align="center" >Todo List</Typography>
        </div>
        <div>
            
            <input  value={inputdata} onChange={(event)=>setinputdata(event.target.value)} />
            <button onClick={()=>dispatch(addTodo(inputdata),setinputdata(''))} >ADD</button>
        <div>
            {
                list.map((item)=>{
                    return(                    
                        <div key={item.id}>
                    <h3>{item.data}
                <button onClick={()=>dispatch(deleteTodo(item.id))} >delete</button></h3>
                </div>                
                    )
                    
                })
            }
        </div>

        </div>
        </>
    )
}
export default Todo;