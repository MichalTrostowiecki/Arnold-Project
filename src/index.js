import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //Line below make sure that whole React app can access the  Google Auth Provider once.
    <GoogleOAuthProvider clientId="792823518213-lfoaflh4r36ksinfn5r07294ces1fs0c.apps.googleusercontent.com">
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </GoogleOAuthProvider>
);
