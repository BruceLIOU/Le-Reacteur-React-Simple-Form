const Result = ({ name, email, password, setResult }) => {
  return (
    <div className="result">
      <div>
        <span>Name : {name}</span>
        <span>Email : {email}</span>
        <span>Password : {password}</span>
      </div>

      <button className="edit-button" onClick={() => setResult(1)}>
        Edit your information
      </button>
    </div>
  );
};

export default Result;
