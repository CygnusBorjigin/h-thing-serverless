import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {useEffect, useState} from "react";
import DashHome from "./components/dashboard/DashHome";

function App() {
  const [displaySignUp, toggleDisplaySignup] = useState(false);
  const userToken = localStorage.getItem("hThingToken");
  const [loggedIn, setLoggedIn] = useState(userToken == null ? false : true);

  return (
      loggedIn ? <DashHome/> :
          (displaySignUp ?
              <SignUp switchScreen={toggleDisplaySignup} loginUser={setLoggedIn}/>
                :
                <SignIn switchScreen={toggleDisplaySignup} loginUser={setLoggedIn}/>)
  );
}

export default App;
