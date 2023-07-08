import './App.css';
import Products from './ProductsPage';
import Navigation from './Navbar';
import Form from './FormPage';
import Login from './LoginPage';
import ProductDetailsPage from './DisplaProducts';
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div >
     <Navigation/>
      <BrowserRouter>
      <Routes>
       <Route index element={<Products/>}/>
       <Route path='/home' element={<Products/>}/>
       <Route path='/information/:productId' element={<ProductDetailsPage/>}/>
       <Route path='/form' element={<Form/>}/>
       <Route path='/login' element={<Login/>}/>

        </Routes>
        </BrowserRouter> 
    </div>
  ); 
}

export default App;