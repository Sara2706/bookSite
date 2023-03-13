import './App.scss'
import LoginPage from "./pages/LoginPage/loginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from './pages/HomePage/homePage'
import ProductPage from './pages/ProductSinglePage/productPage'
import CartPage from "./pages/CartPage/cartPage";
import SingleCartPage from "./pages/SingleCartPage/singleCartPage";
import OrderPage from "./pages/OrderPage/orderPage";
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate replace to="/" /> :<LoginPage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/" element={user ? <HomePage/> : <Navigate replace to="/login" />} />
        <Route path="/book/:id" element={user ? <ProductPage/> : <Navigate replace to="/login" />} />
        <Route path="/cart" element={user ? <CartPage/> : <Navigate replace to="/login" />} />
        <Route path="/cart/:id" element={user ? <SingleCartPage/> : <Navigate replace to="/login" />} />
        <Route path="/order" element={user ? <OrderPage/> : <Navigate replace to="/login" />} />
      </Routes>
    </Router>
  )
}

export default App
