import React from 'react'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgetPassword from './pages/auth/ForgetPassword';
import Add from './pages/products/Add';
import Details from './pages/products/Details';
import List from './pages/products/List';
import MainLayout from './Layout/MainLayout';
import ProductDetails from './pages/products/Details';

const Routes = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/auth/login" element= {<Login/>} />
            <Route path="/auth/register" element={<Register/>}/>
            <Route path="/auth/forget-password" element={<ForgetPassword/>}/>
            <Route path="/add-items" element={<Add/>}/>
            <Route path='/product'>
                <Route index element={<List/>}/>
                <Route path=":id" element={<ProductDetails/>}/>
            </Route>
            
        </Route>
    ));
  return <RouterProvider router={router}/>
}

export default Routes;
