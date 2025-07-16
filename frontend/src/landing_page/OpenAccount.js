import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Sign up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;



axios.post(`${process.env.REACT_APP_API_URL}/signin`, loginData)
  .then(res => {
    localStorage.setItem("authToken", res.data.token);
    // Redirect to dashboard
    window.location.href = "https://stack-vast-zekz.vercel.app";
  })
  .catch(err => {
    console.error("Login failed:", err);
  });

