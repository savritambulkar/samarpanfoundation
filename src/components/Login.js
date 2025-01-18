import axios from "axios";
import { useEffect, useState, useRef } from "react";
import APIs from "../../src/apis/APIs";

function Login(){
    const [volData, setVolData] = useState({});

const sendData = async (newVol) => {

    try {
        let response = await axios.post(APIs.Register_Vol, newVol);
        // console.log("response got");
        
        // console.log(response.data.message);
    } catch (err) {
        console.log(err);
    }
};


const VolName = useRef();
const VolPass = useRef();
const VolEmail = useRef();

const makeVolObj = async () => {
    const newNGO = {
        email: VolEmail.current.value,
        password: VolPass.current.value,
        volunteerName: VolName.current.value,
    };
    sendData(newNGO);
};


    return <>
    <div>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px'}}>
        <h2 style={{textAlign:"center"}}>Login Here</h2>

        <form onSubmit={makeVolObj}>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="name">Name:</label><br />
                <input
                    ref={VolName}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Name"
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="email">Email:</label><br />
                <input
                    ref={VolEmail}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="password">Password:</label><br />
                <input
                    ref={VolPass}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
            </div>
            
            <div style={{ marginBottom: '15px' }}>
                <label htmlFor="address">Address:</label><br />
                <textarea
                    id="address"
                    name="address"
                    style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                ></textarea>
            </div>
            <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', background: '#007BFF', color: '#fff' , marginLeft:"230px"}}>
                Submit
            </button>
        </form>
    </div>
    </div>

    </>
}

export default Login ;