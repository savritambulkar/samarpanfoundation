import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";
import APIs from "../apis/APIs";
import axios from "axios";

function CompanyDetail(){
    const {_id} = useParams();
    const [comObj, setComObj] = useState({});

    
    
    useEffect(() => {
        loadData();
      }, []);

    const loadData = async ()=>{

        try {
            const response = await axios.get(APIs.Com_By_Id+_id);
            // console.log(response.data.message);
            
            setComObj(response.data.message);
            
        } catch (err) {
            console.error(err);
        }
    }

    // console.log(comObj);




 return <>
    <h1>Company Detail Page</h1>
    <div className="container mt-5">
        <div className="row d-flex justify-content-between">
            <div  className="col-md-6 d-flex flex-column p-2" style={{height:"500px",boxShadow:"10px 10px 10px 10px grey"}}>
              <img src={comObj.ProfilePic} style={{width:"100%", height:"500px"}}/>  
            </div>
            <div className="col-md-6" style={{height:"500px", boxShadow:"10px 10px 10px grey"}}>
               <div className="p-3 d-flex flex-column"> 
                <h4>{comObj.companyName}</h4>
                <p>{comObj.companyRegId}</p>
                {/* <p>Category : <b>{product?.category?.toUpperCase()}</b></p> */}
                <p>Mail Id : <b>{comObj.email}</b></p>
                {/* <p>Shipping Information : <b>{product.shippingInformation}</b></p> */}
                {/* <p>Availability Status : <b>{product.availabilityStatus}</b></p> */}
                {/* <p>Discount : <b>{product.discountPercentage} %</b> <b><label className="text-success" style={{fontSize:"30px"}}>{(product.price - (product.price*product.discountPercentage)/100).toFixed(2)} Rs.</label></b></p> */}
                {/* <p>Rating : <b>{product.rating}(5)</b></p> */}
                {/* <button onClick={()=>navigate("/buy-now")} className="btn btn-warning p-2">Buy now</button> */}
              </div>
            </div>
        </div>
    </div>
 </>   
}

export default CompanyDetail;