import React from "react";
import { useNavigate } from "react-router-dom";

const grammarPoints = [
  {
    title: "1️⃣ これ / それ / あれ",
    description:
      "These are demonstratives meaning 'this', 'that', or 'that (over there)'. They are used to refer to things based on distance from the speaker and listener.",
    exampleJP: "それは 辞書ですか。\nこれを ください。",
    exampleEN: "Is that a dictionary?\nI’ll take this, please.",
    note: "これ – near the speaker.\nそれ – near the listener.\nあれ – far from both speaker and listener.",
  },
  {
    title: "2️⃣ この / その / あの + N",
    description:
      "Used before a noun to show possession or specify which item/person is being referred to.",
    exampleJP: "この本は わたしのです。\nあの方は どなたですか。",
    exampleEN: "This book is mine.\nWho is that person?",
    note: "この N – near the speaker.\nその N – near the listener.\nあの N – far from both speaker and listener.",
  },
  {
    title: "3️⃣ そうです / そうじゃ（では）ありません",
    description:
      "Used to respond to yes/no questions. 'そうです' means 'Yes, it is.' and 'そうじゃありません' means 'No, it isn’t.'",
    exampleJP:
      "それは テレホンカードですか。\nはい、そうです。\nいいえ、そうじゃありません。",
    exampleEN: "Is that a telephone card?\nYes, it is.\nNo, it isn’t.",
    note: "‘そう’ refers to what the other person just said.",
  },
  {
    title: "4️⃣ ～か、～か",
    description:
      "Used to ask the listener to choose between alternatives. The answer repeats the chosen item.",
    exampleJP: "「９」ですか、「７」ですか。\n「９」です。",
    exampleEN: "Is it ‘9’ or ‘7’?\nIt’s ‘9’.",
  },
  {
    title: "5️⃣ N の N",
    description:
      "The particle の is used to connect two nouns. It can show what something is about or who owns it.",
    exampleJP:
      "これは コンピューターの 本です。\nこれは わたしの 本です。\nあれは だれの かばんですか。\nサントスさんのです。",
    exampleEN:
      "This is a book on computers.\nThis is my book.\nWhose bag is that?\nIt’s Mr. Santos’s.",
    note: "When it’s obvious what N modifies, の can be omitted.\nExample: わたしの (mine).",
  },
  {
    title: "6️⃣ そうですか",
    description:
      "Used when the speaker receives new information and acknowledges it with understanding (similar to 'I see' or 'Oh, really?').",
    exampleJP:
      "このかさは あなたのですか。\nいいえ、違います。シュミットさんのです。\nそうですか。",
    exampleEN:
      "Is this umbrella yours?\nNo, it isn’t. It’s Mr. Schmidt’s.\nI see.",
  },
  // 🌸 Added Grammar Notes from Pages 42–43
  {
    title: "7️⃣ ここ / そこ / あそこ / どこ",
    description:
      "Used to indicate places based on distance from the speaker and listener.",
    exampleJP: "ここは しょくどうです。\nトイレは どこですか。",
    exampleEN: "This is the cafeteria.\nWhere is the restroom?",
    note: "ここ – near the speaker.\nそこ – near the listener.\nあそこ – far from both.\nどこ – where?",
  },
  {
    title: "8️⃣ この / その / あの / どの + N",
    description:
      "Used before a noun to identify which specific item or person is being referred to.",
    exampleJP:
      "この かばんは あなたのですか。\nどの かばんが あなたのですか。",
    exampleEN: "Is this bag yours?\nWhich bag is yours?",
  },
  {
    title: "9️⃣ だれの N",
    description: "Used to ask about ownership or possession.",
    exampleJP:
      "あれは だれの かばんですか。\nサントスさんの かばんです。",
    exampleEN: "Whose bag is that?\nIt’s Mr. Santos’s bag.",
  },
  {
    title: "🔟 ここ / そこ / あそこ は ～です",
    description:
      "Used to say what kind of place something is or what is located there.",
    exampleJP:
      "ここは きょうしつです。\nそこは じむしょです。\nあそこは しょくどうです。",
    exampleEN:
      "This is a classroom.\nThat is an office.\nThat over there is a cafeteria.",
  },
];

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "30px",
    background: `
      linear-gradient(135deg, #ffe4ec 0%, #ffd6e8 100%),
      radial-gradient(circle at 1px 1px, rgba(255, 182, 193, 0.3) 1px, transparent 0)
    `,
    backgroundSize: "cover, 30px 30px",
    textAlign: "center",
    position: "relative",
    overflow: "hidden",
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
  note: {
    marginTop: "8px",
    fontSize: "16px",
    color: "#555",
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

export default function Grammar2() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌸 Grammar 2 - Lesson 2 🌸</h1>

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
            {point.note && (
              <p style={styles.note}>
                <b>📝 Note:</b> <br />
                {point.note.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>

      <button style={styles.backBtn} onClick={() => navigate("/n5")}>
        ← Back to N5 Menu
      </button>
    </div>
  );
}
