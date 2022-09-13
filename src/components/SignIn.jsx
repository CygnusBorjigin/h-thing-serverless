import {useState} from "react";

const SignIn = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const inputStyle = "w-2/3 h-10 border-2 rounded-md mt-8 ml-auto mr-auto bg-transparent text-center text-l text-white placeholder:text-white placeholder:font-quicksand focus:outline-gray-300";

    const handelChange = (event) => {
        if (event.target.id === "emailInput") setUserEmail(event.target.value);
        if (event.target.id === "passwordInput") setUserPassword(event.target.value);
    };

    const handelSignIn = () => {
        console.log(userEmail);
        console.log(userPassword);
        setUserEmail("");
        setUserPassword("");
    };

    const handelSignUp = () => {

    }

    return(
        <div className={"h-screen w-screen bg-gray-600 flex justify-center"}>
            <div className={"h-1/2 w-1/2 border-2 rounded-md mt-60 flex flex-col"}>
                <h1 className={"text-center text-white mt-8 text-2xl font-aboreto"}>Sign In</h1>
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
                    className={"border-2 rounded-md border-white w-1/6 ml-auto mr-auto mt-8 text-amber-50 py-2 hover:bg-amber-50 hover:text-gray-600 font-silkscreen"}
                    onClick={handelSignIn}
                >
                    Sign In
                </button>

                <hr className={"mt-8 border-dotted w-2/3 ml-auto mr-auto"}/>

                <button
                    className={"border-2 rounded-md border-white w-1/6 ml-auto mr-auto mt-8 text-amber-50 py-2 hover:bg-amber-50 hover:text-gray-600 font-silkscreen"}
                    onClick={handelSignUp}
                >
                    Sign Up
                </button>

            </div>
        </div>
    )
}

export default SignIn;