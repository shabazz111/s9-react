import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./app/screens/auth/Login";
import { useEffect, useState } from "react";
import Home from "./app/screens/pages/Home";

const App = () => {
  const [user, setUser] = useState({});
  const [loader,setLoader] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setUser({ auth: auth });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/login"
          element={
            user?.auth ? <Navigate to="/home" /> : <Login setLoader={setLoader}  loader={loader} setUser={setUser} />
          }
        />
        <Route
          path="/home"
          element={user?.auth ? <Home /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
