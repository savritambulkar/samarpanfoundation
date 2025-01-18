import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { setUser } from "../redux-config/UserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import APIs from "../../src/apis/APIs"

function RegisterCom() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ngoData, setNgoData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const sendData = async (newVol) => {
    // const formData = new FormData();
    // formData.append('images', selectedFile);
    // formData.append('email', newVol.email);
    // formData.append('password', newVol.password);
    // formData.append('companyName', newVol.NGOName);
    // formData.append('companyRegId', newVol.Type);

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
      companyRegId: ComRegId.current.value
    };
    sendData(newVol);
  };

  //   const handleFileChange = (e) => {
  //     setSelectedFile(e.target.files[0]);
  //   };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>Company Registration Form</h2>
      <form onSubmit={makeNgoObj}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label><br />
          <input
            ref={ComName}
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
            ref={ComEmail}
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="regId">Reg Id:</label><br />
          <input
            ref={ComRegId}
            type="text"
            id="regId"
            name="regId"
            placeholder="Enter Company's Registration Id"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
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
        {/* <div style={{ marginBottom: '15px' }}>
          <label htmlFor="images">Upload Profile Picture:</label><br />
          <input type="file" name="images" onChange={handleFileChange} />
        </div> */}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="address">Address:</label><br />
          <textarea
            id="address"
            name="address"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          ></textarea>
        </div>
        <button type="submit" style={{ padding: '10px 20px', borderRadius: '5px', border: 'none', background: '#007BFF', color: '#fff' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterCom;
