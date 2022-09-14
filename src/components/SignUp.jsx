import {useEffect, useState} from "react";

// TODO:
const SignUp = (props) => {
    const inputStyle = "w-2/3 h-10 border-2 rounded-md mt-8 ml-auto mr-auto bg-transparent text-center text-l text-white placeholder:text-white placeholder:font-quicksand focus:outline-gray-300";
    const inputStyleMatch = "w-2/3 h-10 border-4 rounded-md mt-8 ml-auto mr-auto bg-transparent text-center text-l text-white placeholder:text-white placeholder:font-quicksand outline-green-300 focus:outline-green-700";
    const inputStyleNotMatch = "w-2/3 h-10 border-4 rounded-md mt-8 ml-auto mr-auto bg-transparent text-center text-l text-white placeholder:text-white placeholder:font-quicksand outline-red-300 focus:outline-red-700";
    const buttonStyle = "border-2 rounded-md border-white w-1/6 ml-auto mr-auto mt-8 text-amber-50 py-2 hover:bg-amber-50 hover:text-gray-600 font-silkscreen";
    const backgroundStyle = "h-screen w-screen bg-gray-600 flex justify-center";
    const formStyle = "h-1/2 w-1/2 border-2 rounded-md mt-60 flex flex-col";
    const titleStyle = "text-center text-white mt-8 text-2xl font-aboreto";
    const lineStyle = "mt-8 border-dotted w-2/3 ml-auto mr-auto";

    const [userEmail, setUserEmail] = useState("");
    const [userPassword1, setUserPassword1] = useState("");
    const [userPassword2, setUserPassword2] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handelChange = (event) => {
        if (event.target.id === "emailInput") setUserEmail(event.target.value);
        if (event.target.id === "passwordInput1") setUserPassword1(event.target.value);
        if (event.target.id === "passwordInput2") setUserPassword2(event.target.value);
    };

    const handelSignIn = () => {
        props.switchScreen((prev) => {
            return(!prev);
        });
    };

    const checkPasswordMatch = () => userPassword1 === userPassword2;

    useEffect(() => {
        setPasswordMatch(checkPasswordMatch);
    }, [userPassword2]);

    const handelSignUp = () => {

    };

    return(
        <div className={backgroundStyle}>
            <div className={formStyle}>
                <h1 className={titleStyle}>Sign Up</h1>
                <input
                    id={"emailInput"}
                    className={inputStyle}
                    placeholder={"Please Enter your email"}
                    onChange={handelChange}
                    value={userEmail}
                ></input>
                <input
                    id={"passwordInput1"}
                    className={inputStyle}
                    placeholder={"Please Enter your password"}
                    onChange={handelChange}
                    value={userPassword1}
                    type={"password"}
                ></input>
                <input
                    id={"passwordInput2"}
                    className={userPassword1 === "" ? inputStyle : (passwordMatch ? inputStyleMatch : inputStyleNotMatch)}
                    placeholder={"Please Re-enter your password"}
                    onChange={handelChange}
                    type={"password"}
                ></input>
                <button
                    className={buttonStyle}
                    onClick={handelSignIn}
                >
                    Sign In
                </button>

                <hr className={lineStyle}/>

                <button
                    className={buttonStyle}
                    onClick={handelSignUp}
                >
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default SignUp;