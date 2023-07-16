import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//importing React-Router
import {Route, Link, Routes, BrowserRouter as Router} from "react-router-dom";
//importing React-toastify
import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/react-toastify.min.css";
//importing firebase
import {initializeApp} from "firebase/app";
import "firebase/auth";
//Components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
//importing Context
import UserContext from "./context/UserContext";

//init firebase
import FirebaseConfig from "./config/FirebaseConfig";
const fb = initializeApp(FirebaseConfig);

const App = () => {

  const [user, setUser] = useState(null);

  return(
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/signin" Component={ Signin} />
          <Route exact path="/signup" Component={Signup} />
          <Route path="*" Component={PageNotFound} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
