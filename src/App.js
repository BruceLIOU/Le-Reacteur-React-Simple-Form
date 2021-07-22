// import CSS
import "./assets/css/App.css";

// import
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye } from "@fortawesome/free-solid-svg-icons";

//import components
import Footer from "./components/Footer";
import Form from "./components/Form";
import Result from "./components/Result";

// import useState
import { useState } from "react";

library.add(faEye);

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [result, setResult] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setIsValid(true);
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      setIsValid(false);
      setResult(2);
    }
  };

  return (
    <div className="App">
      <div className="container">
        {result === 1 ? (
          <h1>Create account</h1>
        ) : result === 2 ? (
          <h1>Results</h1>
        ) : null}
        {result === 1 ? (
          <Form
            name={name}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            setName={setName}
            setEmail={setEmail}
            setPassword={setPassword}
            setConfirmPassword={setConfirmPassword}
            handleSubmit={handleSubmit}
            isValid={isValid}
            show={show}
            setShow={setShow}
          />
        ) : result === 2 ? (
          <Result
            setResult={setResult}
            name={name}
            email={email}
            password={password}
          />
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default App;
