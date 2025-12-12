import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import japanAnimation from "./Japaneese (1).json";


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
        alert("✅ " + (data.message || "Success!"));

        if (isLoginMode) {
          const userLevel = data.language?.toLowerCase() || "languages";

          switch (userLevel) {
            case "beginner":
              navigate("/beginner", { state: { username: data.username } });
              break;
            case "intermediate":
              navigate("/intermediate", { state: { username: data.username } });
              break;
            case "advanced":
              navigate("/advanced", { state: { username: data.username } });
              break;
            default:
              navigate("/languages", { state: { username: data.username } });
              break;
          }
        } else {
          navigate("/languages", { state: { username } });
        }
      } else {
        alert("❌ " + (data.error || data.message || "Something went wrong"));
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error, please try again later.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-pink-200 to-pink-400">

      {/* MAIN WRAPPER (Animation + Form Centered) */}
      <div className="flex w-[90%] max-w-5xl items-center justify-between">

        {/* LEFT SIDE — Animation */}
        <div className="w-1/2 flex justify-center items-center">
          <Lottie
            animationData={japanAnimation}
            loop={true}
            style={{
              width: "360px",
              height: "360px",
            }}
          />
        </div>

        {/* RIGHT SIDE — Card */}
        <div className="w-1/2 flex justify-center">
          <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl border border-pink-100">

            <h2 className="mb-6 text-center text-3xl font-bold text-pink-600">
              🌸 {isLoginMode ? "Login" : "Create Sakura Account"} 🌸
            </h2>
            <p className="text-lg text-gray-600 mb-8">
    Learn Japanese effectively — and beautifully 🌸
  </p>

  {/* form continues */}
  <form onSubmit={handleSubmit}></form>

            <form onSubmit={handleSubmit}>

              {!isLoginMode && (
                <input
                  type="text"
                  placeholder="Enter Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mb-4 w-full rounded-lg border p-3"
                  required
                />
              )}

              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mb-4 w-full rounded-lg border p-3"
                required
              />

              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mb-4 w-full rounded-lg border p-3"
                required
              />

              {!isLoginMode && (
                <input
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mb-4 w-full rounded-lg border p-3"
                  required
                />
              )}

              <button
                type="submit"
                className="w-full rounded-lg bg-pink-500 py-3 text-white font-semibold hover:bg-pink-600 transition"
              >
                {isLoginMode ? "Login" : "Register"}
              </button>
            </form>

            <p className="mt-4 text-center text-sm text-gray-600">
              {isLoginMode ? (
                <>
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setIsLoginMode(false)}
                    className="cursor-pointer text-pink-500 underline"
                  >
                    Register here
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    onClick={() => setIsLoginMode(true)}
                    className="cursor-pointer text-pink-500 underline"
                  >
                    Login here
                  </span>
                </>
              )}
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}
