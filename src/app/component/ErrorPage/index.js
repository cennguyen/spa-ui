import { memo } from "react";

const ErrorPage = () => {
    return (
        <div id="error-page">
            <h1>Oops! Something went wrongs!!!!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>It's 404 Not Found like your money</i>

            </p>
        </div>
    );
}
export default memo(ErrorPage);