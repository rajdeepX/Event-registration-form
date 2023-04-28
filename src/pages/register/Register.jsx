import "./Register.css";

const Register = () => {
  return (
    <form>
      <div className="form">
        <div className="name-container">
          <label htmlFor="name" className="name-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="name-input"
            placeholder="Enter your name here..."
            // onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="email-container">
          <label htmlFor="email" className="email-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="email-input"
            placeholder="Enter your email here..."
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button className="btn-submit" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
