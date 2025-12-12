import React from "react";
import { useNavigate } from "react-router-dom";

const grammarPoints = [
  {
    title: "1️⃣ ～時／～分（じ／ふん）／今〜時〜分です",
    description:
      "Used to express time. 「時」means 'o’clock' and 「分」means 'minutes'. Numbers are placed before them. 分 is read differently depending on the number — ふん, ぷん, or っぷん. The topic marker 「は」 can be used to mark a location or time in the sentence.",
    exampleJP:
      "① 今 何時ですか。\n　…７時１０分です。\n② ニューヨークは 今 何時ですか。\n　…午前４時です。",
    exampleEN:
      "① What time is it now? …It’s seven ten.\n② What time is it in New York? …It’s 4 a.m.",
    note: "「は」 marks the topic of a sentence. Example: ニューヨークは ４じです。 (In New York, it’s 4 a.m.)",
  },
  {
    title: "2️⃣ Vます",
    description:
      "A verb with ます works as a predicate and makes the sentence polite. It is used for habitual actions, routines, or general truths. The ます form is called the 'polite present/future tense'.",
    exampleJP: "① わたしは 毎日 勉強します。",
    exampleEN: "I study every day.",
    note: "ます is the basic polite verb ending in Japanese.",
  },
  {
    title: "3️⃣ Vます／Vません／Vました／Vませんでした",
    description:
      "These are the polite tense forms of verbs. ます-form indicates both tense and affirmation/negation.\nます → non-past affirmative\nません → non-past negative\nました → past affirmative\nませんでした → past negative",
    exampleJP:
      "【Present/Future tense】\n　① （おきます）おきます → I get up.\n　② （おきません）おきません → I don’t get up.\n\n【Past tense】\n　③ （おきました）おきました → I got up.\n　④ （おきませんでした）おきませんでした → I didn’t get up。",
    exampleEN:
      "ます-form shows whether an action happens (affirmative/negative) and when (present/past).",
    note:
      "Examples:\n① わたしは まいにち ６じに おきます。→ I get up at six every morning。\n② きのう ６じに おきました。→ I got up at six yesterday。",
  },
  {
    title: "4️⃣ Vますか",
    description:
      "Used to make polite questions using verbs. Often used to ask if someone does something or did something. The same verb form is repeated in short answers.",
    exampleJP:
      "① 毎朝 何時に 起きますか。\n　…６時に 起きます。\n② 昨日 勉強しましたか。\n　…はい、勉強しました。\n　…いいえ、勉強しませんでした。",
    exampleEN:
      "① What time do you get up every morning? …I get up at six.\n② Did you study yesterday? …Yes, I did. / No, I didn’t.",
    note:
      "Use か at the end of a sentence to make it a question. Example: 「べんきょうしましたか。」",
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
  note: {
    marginTop: "8px",
    fontSize: "15px",
    color: "#5a5a5a",
    fontStyle: "italic",
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

export default function Grammar4() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🌸 Grammar 4 - Lesson 4 🌸</h1>

      <div style={styles.list}>
        {grammarPoints.map((point, index) => (
          <div
            key={index}
            style={styles.card}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#ff69b4")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#ffb6c1")}
          >
            <h2>{point.title}</h2>
            <p style={{ whiteSpace: "pre-line" }}>{point.description}</p>
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
            {point.note && <p style={styles.note}>Note: {point.note}</p>}
          </div>
        ))}
      </div>

      <button style={styles.backBtn} onClick={() => navigate("/n5")}>
        ← Back to N5 Menu
      </button>
    </div>
  );
}
