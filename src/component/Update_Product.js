import { useEffect, useState } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
import userEvent from "@testing-library/user-event";


const Update_Product=()=>{  

    const [name,setName] =useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [qty,setQty] = useState('');
    const [image,setImage]=useState('');
    const [message, setMessage] =useState('');

    const {idd} = useParams();

    const config={
        headers:{
            Authorization:"Bearer "+localStorage.getItem("ticket")
        }
    }

    
    useEffect(()=>{
        axios.get("http://localhost:90/product/single/"+idd,config)
        .then(response=>{
            console.log(response)
            setName(response.data.data.name);
            setPrice(response.data.data.price);
            setDescription(response.data.data.description);
            setQty(response.data.data.qty);
        })
        .catch(e=>{
            console.log(e);
        })
    },[])

    const productUpdated = (e) => {
        e.preventDefault();
        const data = {
          name: name,
          price: price,
          description: description,
          qty: qty,
          product_id:idd
        };

        // const data = new FormData();
        // data.append("name",name);
        // data.append("price",price);
        // data.append("description",description);
        // data.append("qty",qty);
        // // data.append("userId",userId);
        // data.append("cust_img",image);
        
        axios
          .put("http://localhost:90/product/update/"+idd, data, config)
          .then((response) => {
            console.log(response)
            
          })
          .catch(e=>{
            console.log(e)
          });
      };
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h1>Update Product{idd}</h1>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type='text' className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type='text' className="form-control" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type='text' className="form-control" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Qty</label>
                            <input type='text' className="form-control" value={qty} onChange={(e)=>{setQty(e.target.value)}}/>
                        </div>
                        <div className='form-group'>
                            <label>Product Image</label>
                            <input type='file' className="form-control" value={image} onChange={(e)=>{setImage(e.target.files[0])}}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" onClick={productUpdated}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update_Product;