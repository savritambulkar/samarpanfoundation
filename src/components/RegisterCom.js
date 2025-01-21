import axios from "axios";
import { useRef } from "react";
import { setUser } from "../redux-config/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import APIs from "../../src/apis/APIs";

function RegisterCom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendData = async (newVol) => {
    try {
      let response = await axios.post(APIs.Register_Com, newVol);
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
  const ComRegId = useRef();

  const makeNgoObj = async (e) => {
    e.preventDefault();
    const newVol = {
      email: ComEmail.current.value,
      password: ComPass.current.value,
      companyName: ComName.current.value,
      companyRegId: ComRegId.current.value,
    };
    sendData(newVol);
  };

  return <>
  <h1 style={{ color: "black", marginBottom: "10px" , textAlign:"center" }}>
          Welcome to Company Registration
        </h1>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Left Side: Image and Content */}
      <div
        style={{
          flex: 1,
          backgroundImage: "url(../Image/photo11.jpg)", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: "1px solid #ccc",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",       
          alignItems: "center",
          textAlign: "center",
          height:"530px",
          padding: "20px",
          maxWidth: "700px",
          margin:"10px"
        }}
      >
        
       
      </div>

      {/* Right Side: Registration Form */}
      <div
        style={{
          flex: 1,
          maxWidth: "700px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
         
        }}
      >
        
        <form onSubmit={makeNgoObj}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              ref={ComName}
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
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              ref={ComEmail}
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
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="regId">Reg Id:</label>
            <br />
            <input
              ref={ComRegId}
              type="text"
              id="regId"
              name="regId"
              placeholder="Enter Company's Registration Id"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              ref={ComPass}
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
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="address">Address:</label>
            <br />
            <textarea
              id="address"
              name="address"
              placeholder="Enter Address"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              borderRadius: "5px",
              border: "none",
              background: "#007BFF",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
 </>
}

export default RegisterCom;
