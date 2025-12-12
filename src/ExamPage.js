import { useLocation, useNavigate } from "react-router-dom";
import exambg from "./exambg.jpg"; // 👈 Importing your image

export default function ExamPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const username = location.state?.username || "Guest";
  const language = location.state?.language || "English";

  const handleExamSelect = (examType) => {
    if (examType === "JLPT") {
      navigate("/jlpt", { state: { username, language } }); // ✅ go to JLPT page
    } else if (examType === "NAT") {
      navigate("/nat", { state: { username, language } }); // ✅ go to NAT page
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${exambg})`, // 👈 Using imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        color: "#222",
      }}
    >
      {/* Overlay container for readability */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
        }}
      >
        <h2 style={{ marginBottom: "40px" }}>
          🌸 {username}, Select Your Exam Mode ({language}) 🌸
        </h2>

        <div
          style={{
            display: "flex",
            gap: "40px",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* JLPT Card */}
          <div
            onClick={() => handleExamSelect("JLPT")}
            style={{
              backgroundColor: "Pink",
              padding: "30px",
              width: "220px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3>JLPT</h3>
            <p>Japanese Language Proficiency Test</p>
          </div>

          {/* NAT Card */}
          <div
            onClick={() => handleExamSelect("NAT")}
            style={{
              background: "Pink",
              padding: "30px",
              width: "220px",
              borderRadius: "15px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              cursor: "pointer",
              transition: "transform 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3>NAT</h3>
            <p>Japanese NAT-TEST</p>
          </div>
        </div>
      </div>
    </div>
  );
}
