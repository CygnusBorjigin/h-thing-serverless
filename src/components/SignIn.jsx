import {useState} from "react";

const SignIn = () => {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const handelChange = (event) => {
        if (event.target.id === "emailInput") setUserEmail(event.target.value);
        if (event.target.id === "passwordInput") setUserPassword(event.target.value);
    };

    const handelSignIn = () => {
        console.log(userEmail);
        console.log(userPassword);
        setUserEmail("");
        setUserPassword("");
    }

    return(
        <div className={"h-screen w-screen bg-blue-300 flex justify-center"}>
            <div className={"h-1/2 w-1/2 border-2 rounded-md mt-60 flex flex-col"}>
                <h1 className={"text-center text-white mt-4 text-xl"}>Sign In</h1>
                <input
                    id={"emailInput"}
                    className={"w-2/3 h-10 border-2 rounded-md mt-4 ml-auto mr-auto bg-blue-300 text-center text-l"}
                    placeholder={"Please Enter your email"}
                    onChange={handelChange}
                    value={userEmail}
                ></input>
                <input
                    id={"passwordInput"}
                    className={"w-2/3 h-10 border-2 rounded-md mt-4 ml-auto mr-auto bg-blue-300 text-center text-l"}
                    placeholder={"Please Enter your password"}
                    onChange={handelChange}
                    value={userPassword}
                ></input>
                <button
                    className={"border-2 border-amber-100 w-1/6 ml-auto mr-auto mt-4"}
                    onClick={handelSignIn}
                >Sign In</button>
            </div>
        </div>
    )
}

export default SignIn;