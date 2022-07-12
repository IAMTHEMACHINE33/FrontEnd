import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () =>{
    const {pid} = useParams();
    const[details,setDetails]=useState([]);

    const config ={
        headers:{
            Authorization: "Bearer "+localStorage.getItem('ticket')
        }
    }

    useEffect(()=>{
        axios.get("http://localhost:90/product/single/"+pid,config)
        .then(result =>{
            console.log(result)
            setDetails(result.data.data)
        })
    },[])

    

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div>
                        {/* <img src={"http://localhost:90/"+details.prod_img} className="image"></img> */}
                        <h3>{details.name}</h3>
                        <p>{details.price}</p>
                        <p>{details.qty}</p>
                        <p>{details.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;