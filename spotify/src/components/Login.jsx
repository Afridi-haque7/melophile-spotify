import { loginUrl } from "../spotify";

const Login = () => {
  const handleClick = () => {
    window.location = loginUrl;
  };
  return (
    <div className="h-[100vh] w-full flex justify-center items-center bg-gradient-to-b from-green-600 to-slate-900 bg-center bg-cover bg-no-repeat">
      <button onClick={handleClick}
      className="h-10 w-[35%] md:w-[20%] bg-white shadow-lg font-semibold rounded-full"
      >Connect</button>
    </div>
  );
};

export default Login;
