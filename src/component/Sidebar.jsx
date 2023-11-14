import { Link } from "react-router-dom";
function Sidebar(){ 
return(
    

<div >

<ul className="list-unstyled fw-bold">
<li>  < Link to="/products" >all products</Link> </li>
<li>  <Link to="/category">all category</Link> </li>

</ul>
</div>


)

}
export default Sidebar;
