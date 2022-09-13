import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {useState} from "react";

function App() {
  const [displaySignUp, toggleDisplaySignup] = useState(false);

  return (
      displaySignUp ? <SignUp switchScreen={toggleDisplaySignup}/> : <SignIn switchScreen={toggleDisplaySignup}/>
  );
}

export default App;
