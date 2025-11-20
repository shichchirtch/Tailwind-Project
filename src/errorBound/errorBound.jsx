
import {useRouteError} from "react-router-dom";
import {Link} from "react-router-dom";


export  default function   ErrorBoundary() {
    const error = useRouteError(); // Get the error object for the current route
    return (
        <div>
            <h1>Error</h1>
            <p>{error.message || "Something went wrong"}</p> {/* Display the error message */}
            <Link to="/">Go back to Home</Link>
        </div>
    );
}
