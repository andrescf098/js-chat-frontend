import PropTypes from "prop-types";
import axios from "axios";
const AuthPage = ({ onAuth }) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://js-chat-backend.pages.dev/authenticate", {
        username: value,
      })
      .then((response) => onAuth({ ...response.data, secret: value }))
      .catch((error) => console.log("error", error));
  };
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome</div>
        <div className="form-subtitle">Set a username to get started</div>
        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};
AuthPage.propTypes = {
  onAuth: PropTypes.object,
};
export default AuthPage;
