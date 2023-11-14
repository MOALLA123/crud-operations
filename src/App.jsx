import Navbar from './component/Navbar'
import './App.css'
import Sidebar from './component/Sidebar'
import { Routes ,Route} from 'react-router-dom'
import Home from './component/Home'
import Products from './component/Products'
import Add from './component/Add'
import Productdetails from './component/Productdetails'
import Edit from './component/Edit'

function App() {
 
  return (

    <>

<Navbar/>

<div className='row'> 

<div className="col-2 sidebar"> <Sidebar/></div>

 <div className='col-10'><Routes> 

  <Route path='/' element={<Home/>}/>

  <Route path='/products' element={<Products/>}/>  

  <Route path='/products/add' element={<Add/>}/>

  <Route path='/products/:productID' element={<Productdetails/>}/>

  <Route path='/products/edit/:productID' element={<Edit/>}/>

  </Routes>

  </div>


</div>

    </>

  )
}

export default App
