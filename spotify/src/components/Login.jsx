
import { loginUrl } from "../spotify";

const Login = () => {
    const handleClick = () => {
        window.location = loginUrl;
    }
  return (
    <div>
      <button onClick={handleClick}>Connect</button>
    </div>
  );
}

export default Login
