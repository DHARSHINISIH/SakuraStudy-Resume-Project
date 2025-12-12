import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function N5Page() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("home");

  const {
    username = "Guest",
    selectedLanguage = "English",
    selectedLevel = "N5",
  } = location.state || {};

  const lessons = Array.from({ length: 25 }, (_, i) => `Lesson ${i + 1}`);
  const grammarPoints = Array.from({ length: 25 }, (_, i) => `Grammar ${i + 1}`);
  const kaiwaTopics = Array.from({ length: 25 }, (_, i) => `Kaiwa ${i + 1}`);

  const n5KanjiList = [
    { kanji: "日", meaning: "Sun, Day", onyomi: "ニチ, ジツ", kunyomi: "ひ, -び" },
    { kanji: "月", meaning: "Moon, Month", onyomi: "ゲツ, ガツ", kunyomi: "つき" },
    { kanji: "水", meaning: "Water", onyomi: "スイ", kunyomi: "みず" },
    { kanji: "火", meaning: "Fire", onyomi: "カ", kunyomi: "ひ" },
    { kanji: "木", meaning: "Tree, Wood", onyomi: "モク, ボク", kunyomi: "き" },
    { kanji: "金", meaning: "Gold, Money", onyomi: "キン, コン", kunyomi: "かね" },
    { kanji: "土", meaning: "Earth, Soil", onyomi: "ド, ト", kunyomi: "つち" },
  ];

  const today = new Date();
  const dayOfYear = Math.floor(
    (today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
  );
  const kanjiOfDay = n5KanjiList[dayOfYear % n5KanjiList.length];

  // ✅ Universal Section Component
  const Section = ({ title, items, type }) => (
    <div
      style={{
        background: "#fff0f5",
        padding: "25px",
        borderRadius: "14px",
        textAlign: "center",
        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
        flex: "1 1 250px",
        minWidth: "250px",
      }}
    >
      <h3
        style={{
          fontSize: "20px",
          fontWeight: "600",
          marginBottom: "20px",
          color: "#be185d",
        }}
      >
        {title}
      </h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
          gap: "12px",
        }}
      >
        {items.map((item, index) => (
          <button
            key={index}
            style={{
              padding: "10px",
              backgroundColor: "#f9a8d4",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f472b6")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f9a8d4")}
            onClick={() =>
              navigate(`/n5/${type}${index + 1}`, {
                state: { username, selectedLanguage, selectedLevel },
              })
            }
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );

  const AccountDetails = () => (
    <div
      style={{
        background: "#fff0f5",
        padding: "30px",
        borderRadius: "14px",
        boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
        textAlign: "center",
        maxWidth: "500px",
        margin: "40px auto",
      }}
    >
      <h2 style={{ color: "#be185d", marginBottom: "20px" }}>👤 Account Details</h2>
      <p><strong>Username:</strong> {username}</p>
      <p><strong>Language:</strong> {selectedLanguage}</p>
      <p><strong>Exam Level:</strong> {selectedLevel}</p>
      <p><strong>Email:</strong> {username.toLowerCase()}@example.com</p>
      <p><strong>Joined:</strong> {today.toDateString()}</p>
    </div>
  );

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.clear();
      navigate("/", { replace: true });
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "linear-gradient(to bottom right, #ffe4e6, #fbcfe8)" }}>
      {/* Sidebar */}
      <div
        style={{
          width: "220px",
          backgroundColor: "#f9a8d4",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px 10px",
          boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "100%" }}>
          <h2 style={{ fontSize: "22px", marginBottom: "30px", color: "#fff", textAlign: "center" }}>
            N5 Menu
          </h2>
          {[
            { id: "home", label: "🏠 Home" },
            { id: "tests", label: "🧠 Tests" },
            { id: "examination", label: "📝 Examination" },
            { id: "account", label: "👤 Account" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              style={{
                backgroundColor: activeSection === item.id ? "#f472b6" : "transparent",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                padding: "10px 15px",
                margin: "8px 0",
                width: "100%",
                textAlign: "left",
                fontSize: "16px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#db2777",
            border: "none",
            color: "#fff",
            borderRadius: "8px",
            padding: "10px 15px",
            width: "90%",
            marginTop: "20px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#be185d")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#db2777")}
        >
          🚪 Logout
        </button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "40px", overflowY: "auto" }}>
        {activeSection === "home" && (
          <>
            <h2
              style={{
                marginBottom: "30px",
                fontSize: "26px",
                fontWeight: "bold",
                color: "#db2777",
                textAlign: "center",
              }}
            >
              🌸 {username}, Welcome to {selectedLevel} Resources ({selectedLanguage}) 🌸
            </h2>

            {/* Kanji of the Day */}
            <div
              style={{
                background: "#fff0f5",
                padding: "25px",
                borderRadius: "14px",
                textAlign: "center",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                margin: "0 auto 40px",
                maxWidth: "400px",
              }}
            >
              <h3 style={{ fontSize: "22px", fontWeight: "600", marginBottom: "15px", color: "#be185d" }}>
                Kanji of the Day
              </h3>
              <p style={{ fontSize: "60px", marginBottom: "10px", color: "#db2777" }}>
                {kanjiOfDay.kanji}
              </p>
              <p><strong>Meaning:</strong> {kanjiOfDay.meaning}</p>
              <p><strong>Onyomi:</strong> {kanjiOfDay.onyomi}</p>
              <p><strong>Kunyomi:</strong> {kanjiOfDay.kunyomi}</p>
            </div>

            {/* Sections */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "25px",
                maxWidth: "1100px",
                margin: "0 auto",
              }}
            >
              {/* Hiragana & Katakana */}
              <div
                style={{
                  background: "#fff0f5",
                  padding: "25px",
                  borderRadius: "14px",
                  textAlign: "center",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  flex: "1 1 250px",
                  minWidth: "250px",
                }}
                onClick={() =>
                  navigate("/hiragana-katakana", {
                    state: { username, selectedLanguage, selectedLevel },
                  })
                }
              >
                <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "15px", color: "#be185d" }}>
                  Hiragana & Katakana
                </h3>
                <button
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor: "#f9a8d4",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontWeight: "500",
                  }}
                >
                  Start Practice
                </button>
              </div>

              {/* Vocabulary / Grammar / Kaiwa Sections */}
              <Section title="Vocabulary" items={lessons} type="lesson" />
              <Section title="Grammar" items={grammarPoints} type="grammar" />
              <Section title="Kaiwa" items={kaiwaTopics} type="kaiwa" />
            </div>
          </>
        )}

        {activeSection === "tests" && (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2 style={{ color: "#be185d" }}>🧠 Tests Section</h2>
            <p>Coming soon! Here you'll find practice tests and quizzes for N5.</p>
          </div>
        )}

        {activeSection === "examination" && (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2 style={{ color: "#be185d" }}>📝 Examination Section</h2>
            <p>Upcoming JLPT mock exams and schedules will appear here.</p>
          </div>
        )}

        {activeSection === "account" && <AccountDetails />}
      </div>
    </div>
  );
}
