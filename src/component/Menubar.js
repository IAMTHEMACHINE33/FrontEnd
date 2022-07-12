import { Component } from "react";
import {Link} from "react-router-dom";

const Menubar =()=>{
  var menu;
    if(localStorage.getItem("ticket")){
      menu = (
        <>
          <li className="nav-item">
        <Link className="nav-link " to="/home">Dashboard</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/logout">Logout</Link>
      </li>

            
        </>
      )
  
    }
    else{
        menu = (
            <>
              <li className="nav-item">
        <Link className="nav-link " to="/register">Register</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/login">Login</Link>
      </li>
            </>
        )
    }
  return(
    <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
     
      <li className="nav-item">
        <Link className="nav-link " to="/add_product">Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/update_product">Update Product</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/update_customer">Update Customer</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/show_product">Show Product</Link>
      </li>
      {menu}
    </ul>
    
  </div>
</nav>
        </div>
  );
}

export default Menubar;