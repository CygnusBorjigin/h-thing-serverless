import {useEffect, useState} from "react";
import UserPool from "./UserPool.js";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

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
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate();

    const handelChange = (event) => {
        if (event.target.id === "emailInput") setUserEmail(event.target.value);
        if (event.target.id === "passwordInput1") setUserPassword1(event.target.value);
        if (event.target.id === "passwordInput2") setUserPassword2(event.target.value);
    };


    const checkPasswordMatch = () => userPassword1 === userPassword2;

    useEffect(() => {
        setPasswordMatch(checkPasswordMatch);
    }, [userPassword2]);

    const createTotoList = async (cogintoUserName) => {
        const data = JSON.stringify({
            "userSub": cogintoUserName
        });
        const config = {
            method: "post",
            url: "https://l3bzsklp86.execute-api.us-east-1.amazonaws.com/test/registeruser",
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios(config).then(function (response) {
            console.log("list created");
        }).catch(function (error) {
            console.log(error);
        });

        navigate('/signedupmessage');
    };

    const handelSignUp = () => {
        if (!passwordMatch) {
            setErrors(prev => {
                return prev.push("password does not match");
            })
        } else {
            UserPool.signUp(userEmail, userPassword1, [], null, (err, data) => {
                if (err) {
                    setErrors(["internal signup server error"]);
                } else {
                    createTotoList(data.userSub);
                }
            });
        }
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
                    onClick={handelSignUp}
                >
                    Sign Up
                </button>

                <hr className={lineStyle}/>

                <button
                    className={buttonStyle}
                >
                    <Link to={"/"}>Sign In</Link>
                </button>
            </div>
        </div>
    )
}

export default SignUp;