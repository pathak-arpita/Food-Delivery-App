import ErrorLogo from "../assets/img/errorLogo.png";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
    console.log(err)

  return (
    <div className="error-container">
      <img src={ErrorLogo} alg="error" />
      <h2>Oops! Something went wrong!</h2>
      <h2>{err.status + " : " + err.statusText}</h2>
      <h3>{err.data}</h3>
    </div>
  );
};

export default ErrorComponent;
