import React from "react";
import { GoogleLogin } from "@react-oauth/google";

function GoogleUserLogin() {
    const responseMessage = (response) => {
        console.log(response);
    };

    const errorMessage = (error) => {
        console.log(error);
    };

    return (
        <div>
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
    );
}

export default GoogleUserLogin;
