const SignIn = () => {
    return(
        <div className={"h-screen w-screen bg-blue-300 flex justify-center"}>
            <div className={"h-1/2 w-1/2 border-2 rounded-md mt-60 flex flex-col content-center"}>
                <h1 className={"text-center text-white mt-4 text-xl"}>Sign In</h1>
                <input className={"w-2/3 h-4 border-2 rounded-md mt-4"}></input>
            </div>
        </div>
    )
}

export default SignIn;