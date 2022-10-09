import {useNavigate} from "react-router-dom";
import axios from "axios";

const SignUpMessage = () => {
    const backgroundStyle = "h-screen w-screen bg-gray-600 flex justify-center";
    const formStyle = "h-1/2 w-1/2 border-2 rounded-md mt-60 flex flex-col";
    const buttonStyle = "border-2 rounded-md border-white w-1/6 ml-auto mr-auto mt-16 text-amber-50 py-2 hover:bg-amber-50 hover:text-gray-600 font-silkscreen";
    const messageStyle = "text-center text-white mt-[160px] mx-16 text-2xl font-quicksand";

    const navigate = useNavigate();

    const handelSignin = () => {
        navigate('/');
    }
    return(
        <div className={backgroundStyle}>
            <div className={formStyle}>
                <h3 className={messageStyle}>Please confirm your email address using the confirmation email and login using the email and password you've just entered</h3>
                <button className={buttonStyle} onClick={handelSignin}>Signin</button>
            </div>
        </div>
    )
}

export default SignUpMessage;