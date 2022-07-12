import axios from "axios";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
const ShowProduct = () =>{
    const [details, setDetails] = useState([]);
    const config = {
        headers:{
            Authorization : "Bearer "+ localStorage.getItem('ticket')
        }
    }
    const deletePro = (pro_id)=>{
        axios.delete("http://localhost:90/product/delete/"+pro_id,config)
        .then(result=>{
            console.log(result);
            if(result.data.success){
                window.location.reload("/showproduct")
            }
        })
        .catch(e =>{
            console.log(e)
        })
    }
    useEffect(()=>{
        axios.get("http://localhost:90/product/display",config)
        .then(result=>{
            console.log(result)
            setDetails(result.data.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[],)
    return(
        <div className="container">
            <div className="row">
            {details.map(singleData=>{
                return(
                    <div className="col-md-4">
                                <h3>{singleData.name}</h3>
                                <p>{singleData.price}</p>
                                <img src={"http://localhost:90/"+singleData.cust_img}/>
                                <p>{singleData.description}</p>
                                <p>{singleData.quantity}</p>
                                <Link to={"/product/single/"+singleData._id}>Details</Link>
                                <br/>
                                <Link to={"/update_product/"+singleData._id}>Update</Link>
                                <br/>
                                <buttom onClick={()=>{deletePro(singleData._id)}}>Delete</buttom>
                    </div>
                    
                )
            })}
                </div>
            </div>
    )
}
export default ShowProduct;