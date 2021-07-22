const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
}) => {
  let title = "Create account";
  let isValid = false;

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      alert("Vos deux mots de passe ne sont pas identiques");
    } else {
      title = "Results";
    }
  };

  const validate = () => {
    if (
      typeof password !== "undefined" &&
      typeof confirmPassword !== "undefined"
    ) {
      if (password !== confirmPassword) {
        isValid = false;
        alert("Vos deux mots de passe ne sont pas identiques");
      } else {
        isValid = true;
      }
    }

    return isValid;
  };

  console.log(validate());

  return (
    <div className="container">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Jean Dupont"
          value={name}
          onChange={handleNameChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="jeandupont@lereacteur.io"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <label htmlFor="confirmPassword">Confirm your password</label>
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />

        <input type="submit" className="submit-button" value="Register" />
      </form>
    </div>
  );
};

export default Form;
