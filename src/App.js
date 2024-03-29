import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import DashHome from "./components/dashboard/DashHome";
import {Route, Routes} from "react-router-dom";
import SignUpMessage from "./components/SignUpMessage";

function App() {

  return (
      <Routes>
          <Route path={"/"} element={<SignIn />}></Route>
          <Route path={"/register"} element={<SignUp />}></Route>
          <Route path={"/dashboard"} element={<DashHome />}></Route>
          <Route path={"/signedupmessage"} element={<SignUpMessage />}></Route>
      </Routes>
  );
}

export default App;
