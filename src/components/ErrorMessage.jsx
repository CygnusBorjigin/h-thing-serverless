const ErrorMessage = (props) => {
    const { errorContent } = props;
    return (
        <div>
            { errorContent }
        </div>
    )
}

export default ErrorMessage;