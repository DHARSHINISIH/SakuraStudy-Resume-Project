import React from "react";
import { useNavigate } from "react-router-dom";

const grammarPoints = [
  {
    title: "1️⃣ N1 は N2 です",
    description:
      "Indicates that N1 is the topic of the sentence, and N2 is a statement about it.",
    exampleJP: "わたしは マイク・ミラーです。",
    exampleEN: "I am Mike Miller.",
  },
  {
    title: "2️⃣ N1 は N2 じゃ（では）ありません",
    description: "Negative form of です, used in daily conversation.",
    exampleJP: "サントスさんは 学生じゃありません。",
    exampleEN: "Mr. Santos is not a student.",
  },
  {
    title: "3️⃣ 〜か (Question Particle)",
    description: "Used to form questions. Add か at the end of the sentence.",
    exampleJP: "ミラーさんは アメリカ人ですか。",
    exampleEN: "Is Mr. Miller an American?",
  },
  {
    title: "4️⃣ N も",
    description:
      "Used instead of は when the statement about the topic is the same as the previous topic.",
    exampleJP: "ミラーさんは 会社員です。\nグプタさんも 会社員です。",
    exampleEN:
      "Mr. Miller is a company employee. Mr. Gupta is also a company employee.",
  },
  {
    title: "5️⃣ N1 の N2",
    description: "Indicates that N1 modifies N2; shows possession or belonging.",
    exampleJP: "ミラーさんは ＩＭＣの 社員です。",
    exampleEN: "Mr. Miller is an IMC employee.",
  },
  {
    title: "6️⃣ ～さん",
    description:
      "Added to a name to show respect. Not used with one’s own name.",
    exampleJP: "あの方は ミラーさんです。",
    exampleEN: "That’s Mr. Miller.",
  },
];

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "30px",
    background: "#ffe4ec",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "40px",
    color: "#d63384",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  card: {
    background: "#ffb6c1",
    color: "black",
    fontSize: "18px",
    fontWeight: "500",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
    width: "85%",
    maxWidth: "700px",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.15)",
    transition: "transform 0.2s ease, background 0.2s ease",
    cursor: "pointer",
  },
  example: {
    marginTop: "10px",
    fontStyle: "italic",
    color: "#333",
  },
  backBtn: {
    marginTop: "40px",
    padding: "12px 22px",
    background: "#d63384",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background 0.3s ease",
  },
};

export default function Grammar1() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌸 Grammar 1 - Lesson 1 🌸</h1>

      <div style={styles.list}>
        {grammarPoints.map((point, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ff69b4")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ffb6c1")}
          >
            <h2>{point.title}</h2>
            <p>{point.description}</p>
            <p style={styles.example}>
              <b>JP:</b>{" "}
              {point.exampleJP.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              <br />
              <b>EN:</b> {point.exampleEN}
            </p>
          </div>
        ))}
      </div>

      <button style={styles.backBtn} onClick={() => navigate("/n5")}>
        ← Back to N5 Menu
      </button>
    </div>
  );
}
