import axios from "axios";
import { useRef } from "react";
import { setUser } from "../redux-config/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import APIs from "../../src/apis/APIs";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendData = async (user) => {
    try {
      let response = await axios.post(APIs.User_Log_In, user);
      console.log(response.data);
      dispatch(setUser(response.data));
      window.alert("Login Successful");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const ComEmail = useRef();
  const ComPass = useRef();
  const UserType = useRef();

  const makeNgoObj = async (e) => {
    e.preventDefault();
    const newVol = {
      email: ComEmail.current.value,
      password: ComPass.current.value,
      UserType:UserType.current.value
    };
    sendData(newVol);
  };

  return <>
  <h1 style={{ color: "black", marginBottom: "10px", textAlign:"center" }}>
          Welcome Back!
        </h1>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        padding: "20px",
      }}
    >
      {/* Left Side: Image and Content */}
      <div
        style={{
          flex: 1,
          backgroundImage: "url(../Image/photo11.jpg)", // Replace with your image pathx
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height:"450px",
          padding: "20px",
          maxWidth: "700px",
        }}
      >
        
        
      </div>

      {/* Right Side: Login Form */}
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
          height:"450px"
        }}
      >
       
        <form onSubmit={makeNgoObj}>
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
            <label htmlFor="type">Type:</label>
            <br />
            <select
              ref={UserType}
              name="type"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            >
              <option>Select User Type</option>
              {/* <option value="Volunteer">Volunteer</option> */}
              <option value="Company">Company</option>
              <option value="Ngo">NGO</option>
            </select>
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

export default Login;
