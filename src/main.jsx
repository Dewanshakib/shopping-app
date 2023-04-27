import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Product_Provider from "./context/Product_Context.jsx";
import LoginProvider from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <LoginProvider>
    <Product_Provider>
      <App />
    </Product_Provider>
    </LoginProvider>
);
