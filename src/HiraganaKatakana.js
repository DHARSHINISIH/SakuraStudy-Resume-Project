import React from "react";
import { useNavigate } from "react-router-dom";

const hiragana = [
  { jp: "あ", romaji: "a" }, { jp: "い", romaji: "i" }, { jp: "う", romaji: "u" }, { jp: "え", romaji: "e" }, { jp: "お", romaji: "o" },
  { jp: "か", romaji: "ka" }, { jp: "き", romaji: "ki" }, { jp: "く", romaji: "ku" }, { jp: "け", romaji: "ke" }, { jp: "こ", romaji: "ko" },
  { jp: "さ", romaji: "sa" }, { jp: "し", romaji: "shi" }, { jp: "す", romaji: "su" }, { jp: "せ", romaji: "se" }, { jp: "そ", romaji: "so" },
  { jp: "た", romaji: "ta" }, { jp: "ち", romaji: "chi" }, { jp: "つ", romaji: "tsu" }, { jp: "て", romaji: "te" }, { jp: "と", romaji: "to" },
  { jp: "な", romaji: "na" }, { jp: "に", romaji: "ni" }, { jp: "ぬ", romaji: "nu" }, { jp: "ね", romaji: "ne" }, { jp: "の", romaji: "no" },
  { jp: "は", romaji: "ha" }, { jp: "ひ", romaji: "hi" }, { jp: "ふ", romaji: "fu" }, { jp: "へ", romaji: "he" }, { jp: "ほ", romaji: "ho" },
  { jp: "ま", romaji: "ma" }, { jp: "み", romaji: "mi" }, { jp: "む", romaji: "mu" }, { jp: "め", romaji: "me" }, { jp: "も", romaji: "mo" },
  { jp: "や", romaji: "ya" }, { jp: "ゆ", romaji: "yu" }, { jp: "よ", romaji: "yo" },
  { jp: "ら", romaji: "ra" }, { jp: "り", romaji: "ri" }, { jp: "る", romaji: "ru" }, { jp: "れ", romaji: "re" }, { jp: "ろ", romaji: "ro" },
  { jp: "わ", romaji: "wa" }, { jp: "を", romaji: "wo" }, { jp: "ん", romaji: "n" }
];

const katakana = [
  { jp: "ア", romaji: "a" }, { jp: "イ", romaji: "i" }, { jp: "ウ", romaji: "u" }, { jp: "エ", romaji: "e" }, { jp: "オ", romaji: "o" },
  { jp: "カ", romaji: "ka" }, { jp: "キ", romaji: "ki" }, { jp: "ク", romaji: "ku" }, { jp: "ケ", romaji: "ke" }, { jp: "コ", romaji: "ko" },
  { jp: "サ", romaji: "sa" }, { jp: "シ", romaji: "shi" }, { jp: "ス", romaji: "su" }, { jp: "セ", romaji: "se" }, { jp: "ソ", romaji: "so" },
  { jp: "タ", romaji: "ta" }, { jp: "チ", romaji: "chi" }, { jp: "ツ", romaji: "tsu" }, { jp: "テ", romaji: "te" }, { jp: "ト", romaji: "to" },
  { jp: "ナ", romaji: "na" }, { jp: "ニ", romaji: "ni" }, { jp: "ヌ", romaji: "nu" }, { jp: "ネ", romaji: "ne" }, { jp: "ノ", romaji: "no" },
  { jp: "ハ", romaji: "ha" }, { jp: "ヒ", romaji: "hi" }, { jp: "フ", romaji: "fu" }, { jp: "ヘ", romaji: "he" }, { jp: "ホ", romaji: "ho" },
  { jp: "マ", romaji: "ma" }, { jp: "ミ", romaji: "mi" }, { jp: "ム", romaji: "mu" }, { jp: "メ", romaji: "me" }, { jp: "モ", romaji: "mo" },
  { jp: "ヤ", romaji: "ya" }, { jp: "ユ", romaji: "yu" }, { jp: "ヨ", romaji: "yo" },
  { jp: "ラ", romaji: "ra" }, { jp: "リ", romaji: "ri" }, { jp: "ル", romaji: "ru" }, { jp: "レ", romaji: "re" }, { jp: "ロ", romaji: "ro" },
  { jp: "ワ", romaji: "wa" }, { jp: "ヲ", romaji: "wo" }, { jp: "ン", romaji: "n" }
];

const styles = {
  container: {
    width: "100%",
    minHeight: "100vh",
    padding: "20px",
    background: "#ffe4ec",
    textAlign: "center"
  },
  title: { fontSize: "28px", fontWeight: "bold", marginBottom: "20px", color: "#d63384" },
  subtitle: { fontSize: "22px", margin: "20px 0 10px", color: "#e75480" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))",
    gap: "14px",
    justifyItems: "center"
  },
  card: {
    background: "#ffb6c1",
    color: "black",
    fontSize: "22px",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90px",
    width: "90px",
    borderRadius: "12px",
    boxShadow: "2px 2px 6px rgba(0,0,0,0.15)",
    transition: "transform 0.2s ease",
    cursor: "pointer"
  },
  romaji: {
    fontSize: "13px",
    color: "black",
    marginTop: "4px"
  },
  backBtn: {
    marginTop: "20px",
    padding: "10px 18px",
    background: "#d63384",
    color: "black",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
  }
};

// Card component with sound
const Card = ({ jp, romaji }) => {
  const playAudio = () => {
    const audio = new Audio(`/audio/${romaji}.mp3`);
    audio.play();
  };

  return (
    <div
      style={styles.card}
      onClick={playAudio}
      onMouseEnter={(e) => (e.currentTarget.style.background = "#ff69b4")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "#ffb6c1")}
    >
      {jp}
      <span style={styles.romaji}>{romaji}</span>
    </div>
  );
};

export default function HiraganaKatakana() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hiragana & Katakana Practice</h1>

      <h2 style={styles.subtitle}>Hiragana</h2>
      <div style={styles.grid}>
        {hiragana.map((char, index) => (
          <Card key={index} jp={char.jp} romaji={char.romaji} />
        ))}
      </div>

      <h2 style={styles.subtitle}>Katakana</h2>
      <div style={styles.grid}>
        {katakana.map((char, index) => (
          <Card key={index} jp={char.jp} romaji={char.romaji} />
        ))}
      </div>

      <button style={styles.backBtn} onClick={() => navigate(-1)}>
        ← Back
      </button>

      <button
        className="d=flex gap-2"
        style={styles.backBtn}
        onClick={() => navigate("/practice")}
      >
        📝 Start Practice
      </button>
    </div>
  );
}
