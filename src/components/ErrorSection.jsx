import ErrorMessage from "./ErrorMessage";

const ErrorSection = (props) => {
    const { errorList } = props;
    return(
        <div>
            {errorList.map(eachError =>
                <h3 className={"text-center mt-2 text-lg text-fuchsia-300"}>
                    <ErrorMessage errorContent={eachError}/>
                </h3>)}
        </div>
    )
}

export default ErrorSection;