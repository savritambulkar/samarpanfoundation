import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Navigate } from "react-router-dom";
import APIs from "../../src/apis/APIs";

function NgoRegister() {
  const [ngoData, setNgoData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);

  const sendData = async (newNGO) => {
    const formData = new FormData();
    formData.append('profilePic', selectedFile);
    formData.append('email', newNGO.email);
    formData.append('password', newNGO.password);
    formData.append('NGOName', newNGO.NGOName);
    formData.append('Type', newNGO.Type);

    try {
      let response = await axios.post(APIs.Register_Ngo, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if(response){
          console.log(response.data.message);
        return <Navigate to={APIs.Get_Ngo_List}/>
      }
      else{
        console.log("No response found");
        
      }
    } catch (err) {
      console.log(err);
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
      Type: NgoType.current.value
    };
    sendData(newNGO);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    // console.log(selectedFile)
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <h2>NGO Registration Form</h2>
      <form onSubmit={makeNgoObj}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name">Name:</label><br />
          <input
            ref={NgoName}
            type="text"
            id="name"
            name="name"
            placeholder="Enter NGO Name"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email">Email:</label><br />
          <input
            ref={NgoEmail}
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone">Type:</label><br />
          <select ref={NgoType} name="type" style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option>Select NGO Type</option>
            <option value="Widows">Widows</option>
            <option value="OldAge">Old Age</option>
            <option value="ChildWelFare">Child Welfare</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password">Password:</label><br />
          <input
            ref={NgoPass}
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="profilePic">Upload Profile Picture:</label><br />
          <input type="file" name="profilePic" onChange={handleFileChange} />
        </div>
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

export default NgoRegister;
