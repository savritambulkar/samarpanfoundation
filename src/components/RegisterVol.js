import axios from "axios";
import { useRef } from "react";
import APIs from "../../src/apis/APIs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../redux-config/UserSlice";

function RegisterVol() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendData = async (newVol) => {
    try {
      let response = await axios.post(APIs.Register_Vol, newVol);
      console.log(response);
      console.log(response.data.message);
      dispatch(setUser(response.data));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const VolName = useRef();
  const VolPass = useRef();
  const VolEmail = useRef();

  const makeVolObj = async (e) => {
    e.preventDefault();
    const newNGO = {
      email: VolEmail.current.value,
      password: VolPass.current.value,
      volunteerName: VolName.current.value,
    };
    sendData(newNGO);
  };

  return <>
   <h1 style={{ color: "black" , textAlign:"center"}}>Welcome to Volunteer Registration</h1>
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Left Side: Image and Content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        //   padding: "20px",
          backgroundImage: "url(../Image/photo11.jpg)", // Replace with your image path
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
           backgroundPosition: "center",
          height: "450px",
          border: "1px solid #ccc",
          borderRadius: "10px",
         marginRight: "10px",
        }}
      >
       
      </div>

      {/* Right Side: Registration Form */}
      <div
        style={{
          flex: 1,
        //   maxWidth: "600px",
           padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        
        <form onSubmit={makeVolObj}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              ref={VolName}
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            required/>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              ref={VolEmail}
              type="email"
              id="email"
              name="email"
              placeholder="Enter Email"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              ref={VolPass}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="address">Address:</label>
            <br />
            <textarea
              id="address"
              name="address"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              background: "#007BFF",
              color: "#fff",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
}

export default RegisterVol;
