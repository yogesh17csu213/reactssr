import React from 'react'
import { Routes,Route,useRoutes } from 'react-router-dom'
import Home from './components/home'
import App from './components/app'

const CustomRoutes = ()=>{
    let element = useRoutes([
        { 
            path: '/', 
            element: <App /> ,
            exact:true
        },
        {
          path: '/home',
          element: <Home />,
          exact:true
          ,
        }
      ]);
    return(element)
}
export default CustomRoutes



