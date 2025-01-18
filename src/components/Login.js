import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { setUser } from "../redux-config/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import APIs from "../../src/apis/APIs"

function Login(){

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const sendData = async (user) => {
        // const formData = new FormData();
        // formData.append('images', selectedFile);
        // formData.append('email', newVol.email);
        // formData.append('password', newVol.password);
        // formData.append('companyName', newVol.NGOName);
        // formData.append('companyRegId', newVol.Type);
    
        try {
          let response = await axios.post(APIs.User_Log_In, user);
          console.log(response.data);
          dispatch(setUser(response.data));
          navigate("/");
          
        } catch (err) {
          console.log(err);
        }
      };
    
      const ComName = useRef();
      const ComPass = useRef();
      const ComEmail = useRef();
      const UserType = useRef();
    
      const makeNgoObj = async (e) => {
        e.preventDefault();
        const newVol = {
          email: ComEmail.current.value,
          password: ComPass.current.value
        };
        sendData(newVol);
      };

    return <>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
            <h2>Login Form</h2>
            <form onSubmit={makeNgoObj}>
            <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            ref={ComEmail}
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone">Type:</label><br />
          <select ref={UserType} name="type" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option>Select NGO Type</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Company">Company</option>
            <option value="Ngo">NGO</option>
          </select>
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label><br />
          <input
            ref={ComPass}
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', background: '#007BFF', color: '#fff' }}>
          Submit
        </button>
        
            </form>
        </div>
    </>
}

export default Login;

