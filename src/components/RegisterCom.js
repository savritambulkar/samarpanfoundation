import axios from "axios";
import { useRef, useState } from "react";
import { setUser } from "../redux-config/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import APIs from "../../src/apis/APIs";

function RegisterCom() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const sendData = async (newCom) => {
    const formData = new FormData();

    // console.log(selectedFile);
    
    formData.append("profilePic", selectedFile);
    formData.append("email", newCom.email);
    formData.append("password", newCom.password);
    formData.append("companyName", newCom.companyName);
    formData.append("companyRegId", newCom.companyRegId);
    formData.append("companyDesc", newCom.companyDesc);
    try {
      // console.log(formData);
      let response = await axios.post(APIs.Register_Com, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });if(response){
        // console.log(response.data.message);
        dispatch(setUser(response.data));
        window.alert("Registration Successful");
        navigate("/")
    }
    else{
      // console.log("No response found");
      window.alert("No response found");
    }
    } catch (err) {
      console.log(err);
      window.alert("Sign Up Failed");
    }
  };

  const ComName = useRef();
  const ComPass = useRef();
  const ComEmail = useRef();
  const ComRegId = useRef();
  const ComDesc = useRef();

  const makeComObj = async (e) => {
    e.preventDefault();
    const newCom = {
      email: ComEmail.current.value,
      password: ComPass.current.value,
      companyName: ComName.current.value,
      companyRegId: ComRegId.current.value,
      companyDesc: ComDesc.current.value,
    };
    sendData(newCom);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
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
        
        <form onSubmit={makeComObj}>
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
              required />
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
              required  />
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
              required  />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="profilePic">Upload Profile Picture:</label>
            <br />
            <input type="file" name="profilePic" onChange={handleFileChange} />
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
              required />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="description">Description:</label>
            <br />
            <textarea
              ref={ComDesc}
              id="description"
              name="description"
              // placeholder="Enter Address"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
              required  ></textarea>
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
