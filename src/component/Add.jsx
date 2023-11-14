import { useState,useEffect } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Add(){
   
const[title,settitle]=useState("")
const[price,setprice]=useState(0)
const[image,setimage]=useState("")

const handleinput=(e)=>{e.preventDefault(); axios.post("http://localhost:9000/products" ,{"title":title,"price":price,"image":image} )
.then((data)=>console.log(data))
.catch(err=>console.log(err))
navigate('/products')
}

let navigate=useNavigate()
    return (
<form onSubmit={handleinput}>
  <div class="mb-3">
    <label htmlFor="title" class="form-label" >title</label>
    <input type="text"  onChange={(e)=>settitle(e.target.value)} class="form-control"/>
 
  </div>
  <div class="mb-3">
    <label htmlFor="price" class="form-label">price</label>
    <input type="number"  onChange={(e)=>setprice(e.target.value)} class="form-control" />
  </div>
  <div class="input-group mb-3">
  <input type="file" class="form-control" id="inputGroupFile02" onChange={(e)=>{setimage(e.target.files)}}/>
  <label class="input-group-text" htmlFor="inputGroupFile02">Upload</label>
</div>

  <button type="submit" class="btn btn-primary">add product</button>
</form>

    )
}


export default  Add;