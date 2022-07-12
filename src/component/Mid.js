import Login from "./Login";
import Register from "./Register";
import Product from "./Add_Product"
import Update_Product from "./Update_Product";
import Home from "./Home";
import {Routes,Route} from "react-router-dom";
import Dashboard from "./Dashboard";
import Update_Customer from "./Update_Customer";
import Showproduct from "./Show_Product";
import SingleProduct from "./Single_Product";
import PrivateRoute from "./ProtectedRoute";
import Logout from "./Logout";


const Mid=()=>{
    return(
<>
<Routes >
<Route path="/" element={<Home/>}></Route>
<Route path="/Register" element={<Register/>}></Route>
<Route path="/login" element={<Login/>}></Route>
<Route path="/add_product" element={<Product/>}></Route>
<Route path="/update_product/:idd" element={<Update_Product/>}></Route>
<Route path="/update_customer" element={<Update_Customer/>}></Route>
<Route path="/home" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route>
<Route path="/show_product" element={<Showproduct/>}></Route>
<Route path="/product/single/:pid" element={<SingleProduct/>}></Route>
<Route path="/logout" element={<Logout/>}></Route>
</Routes>
</>
    )
};
export default Mid;