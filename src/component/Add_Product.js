import { useState } from "react";
import axios from 'axios';
import userEvent from "@testing-library/user-event";


const Product=()=>{
    const [name,setName] =useState('');
    const [price,setPrice] = useState('');
    const [description,setDescription] = useState('');
    const [qty,setQty] = useState('');
    const [image,setImage]=useState('');
    const [message, setMessage] =useState('');

    

    const productAdded = (e) => {
        e.preventDefault();
        // const data = {
        //   name: name,
        //   price: price,
        //   description: description,
        //   qty: qty,
        // };

        const data = new FormData();
        data.append("name",name);
        data.append("price",price);
        data.append("description",description);
        data.append("qty",qty);
        // data.append("userId",userId);
        data.append("cust_img",image);
        const config ={
            headers:{
                Authorization:"Bearer "+localStorage.getItem("ticket")
            }
        }
        axios
          .post("http://localhost:90/product/insert", data, config)
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
                    <h1>Add Product</h1>
                    <form>
                        <div className="form-group">
                            <label>Name</label>
                            <input type='text' className="form-control" onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input type='text' className="form-control" onChange={(e)=>{setPrice(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input type='text' className="form-control" onChange={(e)=>{setDescription(e.target.value)}}/>
                        </div>
                        <div className="form-group">
                            <label>Qty</label>
                            <input type='text' className="form-control" onChange={(e)=>{setQty(e.target.value)}}/>
                        </div>
                        <div className='form-group'>
                            <label>Product Image</label>
                            <input type='file' className="form-control" onChange={(e)=>{setImage(e.target.files[0])}}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" onClick={productAdded}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Product;