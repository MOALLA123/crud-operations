import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './Products.css'

function Productdetails(){
let {productID}=useParams()
const[product,setproduct]=useState({})
useEffect(()=>{ (fetch(`http://localhost:9000/products/${productID}`).then((res)=>res.json()).then((data)=>{setproduct(data)})),[]})
return(
<>


<div class="card">
<div className="im">
  <img src={product.image} class="card-img-top" alt="..." /></div>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    
    <p class="card-text">{product.description}</p>
    

    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>


</>


)

}


export default Productdetails

