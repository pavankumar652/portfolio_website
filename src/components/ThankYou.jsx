import React from "react";
import { useLocation } from "react-router-dom";

function ThankYou() {

  const location = useLocation();
  const whatsappURL = location.state?.whatsappURL || "";

 const handleWhatsApp = () => {
  if (whatsappURL) {
    window.open(whatsappURL, "_blank");
  } else {
    alert("No message found!");
  }
};

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center"
      }}
    >
      <h1>Thank You!</h1>

      <p>
        Thank you for reaching us.
        <br />
        Your inquiry has been received successfully.
      </p>

      <button
        className="btn btn-success mt-3"
        onClick={handleWhatsApp}
      >
        OK
      </button>
    </div>
  );
}

export default ThankYou;