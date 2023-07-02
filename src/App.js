import React, { useState } from "react";
import Login from "./components/loginPage/Login";
import Register from "./components/loginPage/Register";
import Header from "./components/global/Header";
import HomePage from "./components/homePage/HomePage";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      <Header/>
      {/* <Login/> */}
      <HomePage/>
    </div>
  );
}

export default App;
