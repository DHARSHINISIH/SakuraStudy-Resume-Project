import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import japanAnimation from "./Japaneese (1).json";
import sakuraLogo from "./assets/sakura-logo.jpg";
import "./LoginPage.css";

export default function LoginPage() {
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoginMode && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const url = isLoginMode
      ? "http://localhost:5000/api/login"
      : "http://localhost:5000/api/register";

    const body = isLoginMode
      ? { email, password }
      : { username, email, password };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/languages", {
          state: { username: data.username || username },
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="login-page">
      {/* LOGO */}
      <div className="logo-container" onClick={() => navigate("/")}>
        <img src={sakuraLogo} alt="Sakura Logo" className="sakura-logo" />
        <span className="logo-text">Learn Japanese Effectively</span>
      </div>

      {/* WRAPPER */}
      <div className="login-wrapper">
        {/* ANIMATION */}
        <div className="side-animation">
          <Lottie
            animationData={japanAnimation}
            loop
            className="login-animation"
          />
        </div>

        {/* LOGIN CARD */}
        <div className="login-card">
          <h2 className="login-title">
            🌸 {isLoginMode ? "Login" : "Create Sakura Account"}
          </h2>

          <p className="login-subtitle">
            Learn Japanese effectively — and beautifully
          </p>

          <form onSubmit={handleSubmit}>
            {!isLoginMode && (
              <input
                className="login-input"
                type="text"
                placeholder="Enter Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            )}

            <input
              className="login-input"
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="login-input"
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {!isLoginMode && (
              <input
                className="login-input"
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}

            {/* REGISTER / LOGIN */}
            <button className="login-button" type="submit">
              {isLoginMode ? "Login" : "Register"}
            </button>

            {/* GOOGLE BUTTON BELOW REGISTER */}
            {!isLoginMode && (
              <>
                <div className="or-divider">OR</div>

                <button
                  type="button"
                  className="google-button"
                  onClick={() => alert("Google Sign-In coming soon")}
                >
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google"
                  />
                  Continue with Google
                </button>
              </>
            )}
          </form>

          <p className="switch-text">
            {isLoginMode ? (
              <>
                Don’t have an account?{" "}
                <span onClick={() => setIsLoginMode(false)}>Register</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => setIsLoginMode(true)}>Login</span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
