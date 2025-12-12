import React from "react";
import { useNavigate } from "react-router-dom";

const grammarPoints = [
  {
    title: "1️⃣ ここ／そこ／あそこ／こちら／そちら／あちら",
    description:
      "These are demonstratives used to indicate places. 「ここ」 is near the speaker, 「そこ」 is near the listener, and 「あそこ」 is far from both. 「こちら」「そちら」「あちら」 are the more polite versions.",
    exampleJP:
      "① ここは 会社の 会議室です。\n② あそこは 銀行です。\n③ こちらは 受付です。",
    exampleEN:
      "① This is the company meeting room.\n② That (over there) is a bank.\n③ This way/This is the reception desk.",
  },
  {
    title: "2️⃣ N は N(Place) です",
    description:
      "Used to explain where a person, thing, or place is located.",
    exampleJP:
      "① トイレは あそこです。\n② 電話は ２階です。\n③ 山田さんは 事務所です。",
    exampleEN:
      "① The restroom is over there.\n② The telephone is on the second floor.\n③ Mr. Yamada is in the office.",
  },
  {
    title: "3️⃣ どこ／どちら",
    description:
      "「どこ」 means 'where', and 「どちら」 means 'which direction'. 「どちら」 is more polite. Both can also mean 'which (place, company, country, etc.)'.",
    exampleJP:
      "① お手洗いは どこですか。\n　…あそこです。\n② エレベーターは どちらですか。\n　…あちらです。",
    exampleEN:
      "① Where is the restroom? …Over there.\n② Where is the elevator? …In that direction.",
  },
  {
    title: "4️⃣ N の N",
    description:
      "When N1 is a country or company and N2 is a product, it means that N2 is made in or made by N1.",
    exampleJP:
      "① この コンピューターは 日本の ですか。\n　…いいえ、ＩＭＣの コンピューターです。",
    exampleEN:
      "① Is this computer made in Japan? …No, it’s an IMC computer.",
  },
  {
    title: "5️⃣ Demonstrative System (こ／そ／あ／ど)",
    description:
      "This table shows how demonstratives work with different types of words (things, persons, directions, places).",
    exampleJP:
      "これ／それ／あれ／どれ：things\nここ／そこ／あそこ／どこ：places\nこちら／そちら／あちら／どちら：directions (polite)",
    exampleEN:
      "‘Ko’ series = near the speaker\n‘So’ series = near the listener\n‘A’ series = far from both\n‘Do’ series = question form",
  },
  {
    title: "6️⃣ お～ (Polite Prefix)",
    description:
      "The prefix 「お」 is added to certain words related to the listener or third person to show respect or politeness.",
    exampleJP: "お国は どちらですか。",
    exampleEN: "Where are you from? (polite)",
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

export default function Grammar3() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌸 Grammar 3 - Lesson 3 🌸</h1>

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
