import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import './products.css'
import Swal from 'sweetalert2' 


function Products(){

const[products,setproducts]=useState([]); 

const getallproducts=()=>{fetch("http://localhost:9000/products").then((res)=>res.json()).then((data)=>setproducts(data) )}

useEffect(()=>{ 
fetch("http://localhost:9000/products").then((res)=>res.json()).then((data)=>setproducts(data))


},[])


const deletproduct=(productID)=>{ 
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
   }).then((result) => {
    if (result.isConfirmed) {fetch(`http://localhost:9000/products/${productID}`,{method:"DELETE"}).then(res=>res.json()).then( getallproducts())
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })

}

return(

  
<>

<Link type="button" className="btn btn-outline-secondary mt-2" to="/products/add">Add Product</Link>
<table class="table mt-5 ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Description</th>
      <th scope="col">Price</th>
    
    </tr>
  </thead>
  <tbody>
 
{

    products.map((data)=>{ return (
    <tr key={data.id}>
      <th scope="row">{data.id}</th>
      <td>{data.title}</td>
      
      <td>{data.price}$</td>
      <td><Link type="button" class="btn btn-outline-info  mx-1 btn-sm" to={`/products/${data.id}`}>View</Link>
       <button type="button" class="btn btn-outline-danger  mx-1 btn-sm" onClick={()=>{deletproduct(data.id)}}>Delete</button> 
       <Link type="button" class="btn btn-outline-success mx-1 btn-sm" to={`/products/edit/${data.id}`}>Edit</Link>
       </td>
    </tr>
    )
    }
    )

}

  </tbody>
</table>
</>

)

}


export default Products;