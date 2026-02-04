import { useEffect } from "react";
import { Link } from "react-router-dom"

const NotFound = () => {
        useEffect(() => {
            document.title = 'Not Found | Nackademin AB';
        }, []);

    return (
        <div className="center-content">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link className="btn" to="/">Go back to Home</Link>

        </div>
    )
}

export default NotFound