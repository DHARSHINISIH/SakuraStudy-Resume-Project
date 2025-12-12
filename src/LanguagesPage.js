import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import exambg from "./exambg.jpg"; 

export default function LanguagesPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const username = location.state?.username || "Guest";
  const [selectedLanguage, setSelectedLanguage] = useState("");

  const languages = [
    "English",
    "日本語 (Japanese)",
    "हिंदी (Hindi)",
    "Français",
    "Español",
    "中文",
  ];

  const handleConfirm = () => {
    if (selectedLanguage) {
      navigate("/exam", {
        state: { username, language: selectedLanguage },
      });
    } else {
      alert("Please select a language before confirming.");
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${exambg})`,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>
        🌸 Welcome, {username}! Choose Your Language 🌸
      </h2>

      {/* Language Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "20px",
          maxWidth: "700px",
          width: "100%",
          marginBottom: "30px",
        }}
      >
        {languages.map((lang, index) => (
          <div
            key={index}
            onClick={() => setSelectedLanguage(lang)}
            style={{
              background: selectedLanguage === lang ? "#ffb6c1" : "#fff0f5",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "transform 0.2s, background 0.3s",
              border:
                selectedLanguage === lang
                  ? "2px solid #ff1493"
                  : "2px solid transparent",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {lang}
          </div>
        ))}
      </div>

      {/* Confirm Button */}
      <button
        onClick={handleConfirm}
        style={{
          backgroundColor: "#ff69b4",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        Confirm
      </button>
    </div>
  );
}
