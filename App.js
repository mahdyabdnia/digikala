import React,{useState} from 'react'
import First from './components/First/First'
import Category from './components/Category/Category'
import Navbar from './components/Navbar/Navbar'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Good from './components/Good/Good'
import Fotter from './components/Fotter/Fotter'
import Login from './components/Login/Login'
import Layout from './Layout'
import Cart from './components/Cart/Cart'

export default function App() {
  const [addCart, setAddCart] = useState(2);
  return (
     
    <BrowserRouter>
    <Switch>
    <Route path="/login" component={Login} />
     <Route path="/"  render={()=>{
       return(<Layout addCart={addCart}>
         <Switch>
       <Route path="/" exact component={First}/>
       <Route path="/category" exact component={Category}/>
       <Route path="/cart" exact component={Cart}/>
       <Route path="/good" exact component={Good} setAddCart={setAddCart} addCart={addCart}/>




      </Switch>
       </Layout>)
     }} />

     

    </Switch>
    
      
     
     
    
    
    
    
    </BrowserRouter>
  )
}

