import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Donate = () => {
    const navigate = useNavigate();

    const [amount, setAmount] = useState("");
    const [error, setError] = useState(null);

    const handlePayment = async () => {
        if (!amount || isNaN(amount) || amount <= 0) {
            setError("Invalid amount. Please enter a valid donation amount.");
            return;
        }

        try {
            // Call the backend API to create a PayPal payment
            const response = await axios.post("http://localhost:1234/payment/create-payment", { amount });
            const { approvalUrl } = response.data;
            // window.alert(approvalUrl);


            if (approvalUrl) {
                // Redirect user to PayPal approval page
                window.location.href = approvalUrl;
                <Link to={approvalUrl}></Link>
            }
        } catch (err) {
            console.error("Error creating payment:", err);
            setError("Failed to create payment. Please try again later.");
        }
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Make a Donation</h1>
            <input
                type="number"
                placeholder="Enter donation amount (USD)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ padding: "10px", fontSize: "16px", width: "300px" }}
            />
            <br />
            <button
                className="btn btn-primary"
                onClick={handlePayment}
                style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
            >
                Donate
            </button>
            {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
        </div>
    );
};

export default Donate;