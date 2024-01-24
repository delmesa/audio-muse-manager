import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Something went wrong.</h1>
            <p className="error-text">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
};

export default Error;