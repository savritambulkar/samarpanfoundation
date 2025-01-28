import React from "react";
import { Link } from "react-router-dom";

const Cancel = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Payment Cancelled</h1>
            <p>You have cancelled the payment. Please try again if you'd like to proceed.</p>
            {/* <button className="btn btn-primary" ><Link to="/">Home</Link></button> */}
        </div>
    );
};

export default Cancel;