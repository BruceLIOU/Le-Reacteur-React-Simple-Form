// import Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  handleSubmit,
  isValid,
  show,
  setShow,
}) => {
  const handleShow = () => {
    if (!show) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="name">Name</label>
      <input
        required
        type="text"
        name="name"
        id="name"
        placeholder="Jean Dupont"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">Email</label>
      <input
        required
        type="email"
        name="email"
        id="email"
        placeholder="jeandupont@lereacteur.io"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="password">Password</label>
      <div>
        <input
          required
          className={isValid ? "error" : undefined}
          type={!show ? "password" : "text"}
          name="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <FontAwesomeIcon icon="eye" onClick={handleShow} />
      </div>

      <label htmlFor="confirmPassword">Confirm your password</label>
      <div>
        <input
          className={isValid ? "error" : undefined}
          type={!show ? "password" : "text"}
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />
        <FontAwesomeIcon icon="eye" onClick={handleShow} />
      </div>

      {isValid && (
        <span className="error-message">
          Les mots de passe ne sont pas identiques
        </span>
      )}
      <input type="submit" className="submit-button" value="Register" />
    </form>
  );
};

export default Form;
