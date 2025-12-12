// src/Pages/JLPTPage.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import exambg from "./exambg.jpg";

export default function JLPTPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { username, selectedLanguage } =
    location.state || { username: "Guest", selectedLanguage: "English" };

  const levels = ["N5", "N4", "N3", "N2", "N1"];
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleConfirm = () => {
    if (!selectedLevel) {
      alert("Please select a JLPT level before confirming.");
      return;
    }

    // Navigate to selected level page
    navigate(`/${selectedLevel.toLowerCase()}`, {
      state: { username, selectedLanguage, selectedLevel },
    });
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
        🌸 {username}, Choose Your JLPT Level ({selectedLanguage}) 🌸
      </h2>

      {/* JLPT Level Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "20px",
          maxWidth: "700px",
          width: "100%",
          marginBottom: "30px",
        }}
      >
        {levels.map((level, index) => (
          <div
            key={index}
            onClick={() => setSelectedLevel(level)}
            style={{
              background: selectedLevel === level ? "#ffb6c1" : "#fff0f5",
              padding: "20px",
              borderRadius: "12px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "transform 0.2s, background 0.3s",
              border:
                selectedLevel === level
                  ? "2px solid #ff1493"
                  : "2px solid transparent",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            {level}
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
