import "./assets/css/App.css";
import Footer from "./components/Footer";
import Form from "./components/Form";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="App">
      <Form
        name={name}
        email={email}
        password={password}
        confirmPassword={confirmPassword}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmPassword={setConfirmPassword}
      />
      <Footer />
    </div>
  );
};

export default App;
