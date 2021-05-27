import React from 'react'
import Fotter from './components/Fotter/Fotter'
import Navbar from './components/Navbar/Navbar'
import First from './components/First/First'
import Category from './components/Category/Category'

import {Route,Switch,BrowserRouter} from 'react-router-dom'
export default function Layout(props) {
  
    return (
        <div style={{ display:'flex',flexDirection:"column" }}>
            <Navbar addCart={props.addCart} />

            {props.children}

            <Fotter/>
        </div>
    )
}
