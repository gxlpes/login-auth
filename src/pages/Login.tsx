import React from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export interface ILoginPageProps {}

const Login: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);

  return <div>Login</div>;
};

export default Login;
