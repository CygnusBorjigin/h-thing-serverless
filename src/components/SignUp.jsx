import {useState} from "react";

const SignUp = () => {
    const inputStyle = "w-2/3 h-10 border-2 rounded-md mt-8 ml-auto mr-auto bg-transparent text-center text-l text-white placeholder:text-white placeholder:font-quicksand focus:outline-gray-300";
    const backgroundStyle = "h-screen w-screen bg-gray-600 flex justify-center";
    const buttonStyle = "border-2 rounded-md border-white w-1/6 ml-auto mr-auto mt-8 text-amber-50 py-2 hover:bg-amber-50 hover:text-gray-600 font-silkscreen";

    const [userEmail, setUserEmail] = useState("");
    const [userPassword1, setUserPassword1] = useState("");
    const [userPassword2, setUserPassword2] = useState("");

    const handelChange = (event) => {
        if (event.target.id === "emailInput") setUserEmail(event.target.value);
        if (event.target.id === "password1Input") setUserPassword1(event.target.value);
        if (event.target.id === "password2Input") setUserPassword2(event.target.value);
    };

    const handelSignIn = () => {

    };

    const handelSignUp = () => {
        console.log(userEmail);
        console.log(userPassword1);
        console.log(userPassword2);
    };

    return(
        <div className={backgroundStyle}>

        </div>
    )
}

export default SignUp;