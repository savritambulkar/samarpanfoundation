import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

const Success = () => {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const executePayment = async () => {
            const paymentId = searchParams.get("paymentId");
            const payerId = searchParams.get("PayerID");

            if (paymentId && payerId) {
                try {
                    const response = await axios.post("http://localhost:5000/api/payments/execute", {
                        paymentId,
                        payerId,
                    });
                    console.log("Payment successful:", response.data);
                } catch (err) {
                    console.error("Error executing payment:", err);
                }
            }
        };

        executePayment();
    }, [searchParams]);

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Thank You for Your Donation!</h1>
            <p>Your payment was successful.</p>
            {/* <button className="btn btn-primary" ><Link to="/">Home</Link></button> */}
        </div>
    );
};

export default Success;