import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import {useEffect, useState} from "react";
import UserPool from "./UserPool";
import {Link, useNavigate} from "react-router-dom";
import ErrorSection from "./ErrorSection";
import {type} from "@testing-library/user-event/dist/type";

const SignIn = (props) => {
    const inputStyle = "w-2/3 h-10 border-2 rounded-md mt-8 ml-auto mr-auto bg-transparent text-center text-l text-white placeholder:text-white placeholder:font-quicksand focus:outline-gray-300";
    const buttonStyle = "border-2 rounded-md border-white w-1/6 ml-auto mr-auto mt-8 text-amber-50 py-2 hover:bg-amber-50 hover:text-gray-600 font-silkscreen";
    const backgroundStyle = "h-screen w-screen bg-gray-600 flex justify-center";
    const formStyle = "h-1/2 w-1/2 border-2 rounded-md mt-60 flex flex-col";
    const titleStyle = "text-center text-white mt-8 text-2xl font-aboreto";
    const lineStyle = "mt-8 border-dotted w-2/3 ml-auto mr-auto";

    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handelChange = (event) => {
        if (event.target.id === "emailInput") setUserEmail(event.target.value);
        if (event.target.id === "passwordInput") setUserPassword(event.target.value);
    };

    const handelSignIn = async () => {
        const user = new CognitoUser({
            Username: userEmail,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails( {
            Username: userEmail,
            Password: userPassword
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                const userToken = data.getAccessToken().getJwtToken();
                const tokenKey = data.getAccessToken();
                localStorage.setItem("hThingToken", userToken);

                // navigate to the dashboard
                navigate('/dashboard');

            },
            onFailure: (err) => {
                setErrors(["Incorrect username or password"])
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data);
            }
        })
    };

    return(
        <div className={backgroundStyle}>
            <div className={formStyle}>
                <h1 className={titleStyle}>Sign In</h1>
                <input
                    id={"emailInput"}
                    className={inputStyle}
                    placeholder={"Please Enter your email"}
                    onChange={handelChange}
                    value={userEmail}
                ></input>
                <input
                    id={"passwordInput"}
                    className={inputStyle}
                    placeholder={"Please Enter your password"}
                    onChange={handelChange}
                    value={userPassword}
                    type={"password"}
                ></input>
                <button
                    className={buttonStyle}
                    onClick={handelSignIn}
                >
                    Sign In
                </button>

                <hr className={lineStyle} />

                <button
                    className={buttonStyle}
                >
                    <Link to={"/register"}>Sign Up</Link>
                </button>

                {errors.length === 0 ? null : <ErrorSection errorList={errors} />}
            </div>
        </div>
    )
}

export default SignIn;