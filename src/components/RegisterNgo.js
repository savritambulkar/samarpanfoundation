import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIs from "../../src/apis/APIs";
import { useDispatch } from "react-redux";
import { setUser } from "../redux-config/UserSlice";

function NgoRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedFile, setSelectedFile] = useState(null);

  const sendData = async (newNGO) => {
    const formData = new FormData();
    formData.append("profilePic", selectedFile);
    formData.append("email", newNGO.email);
    formData.append("password", newNGO.password);
    formData.append("NGOName", newNGO.NGOName);
    formData.append("Type", newNGO.Type);

    try {
      console.log(formData);
      
      let response = await axios.post(APIs.Register_Ngo, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if(response){
          console.log(response.data.message);
          dispatch(setUser(response.data));
          window.alert("Registration Successful");
          navigate("/")
      }
      else{
        console.log("No response found");
        alert("No response found");
      }
    } catch (err) {
      console.log(err);
      alert("Sign Up Failed");
    }
  };

  const NgoName = useRef();
  const NgoPass = useRef();
  const NgoEmail = useRef();
  const NgoType = useRef();

  const makeNgoObj = async (e) => {
    e.preventDefault();
    const newNGO = {
      email: NgoEmail.current.value,
      password: NgoPass.current.value,
      NGOName: NgoName.current.value,
      Type: NgoType.current.value,
    };
    sendData(newNGO);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return <>
   <h1 style={{ color: "black" , textAlign:"center" }}>Welcome to NGO Registration</h1>
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
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
          height:"600px",
          alignItems: "center",
          textAlign: "center",
          // padding: "20px",
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
          marginLeft: "10px",
        }}
      >
        
        <form onSubmit={makeNgoObj}>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              ref={NgoName}
              type="text"
              id="name"
              name="name"
              placeholder="Enter NGO Name"
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
              ref={NgoEmail}
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
            <label htmlFor="phone">Type:</label>
            <br />
            <select
              ref={NgoType}
              name="type"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <option>Select NGO Type</option>
              <option value="Widows">Widows</option>
              <option value="OldAge">Old Age</option>
              <option value="ChildWelFare">Child Welfare</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              ref={NgoPass}
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
            <label htmlFor="profilePic">Upload Profile Picture:</label>
            <br />
            <input type="file" name="profilePic" onChange={handleFileChange} />
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
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
}

export default NgoRegister;
