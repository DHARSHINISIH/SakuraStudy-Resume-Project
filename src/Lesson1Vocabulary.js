import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const vocabulary = [
  { jp: "わたし", en: "I" },
  { jp: "わたしたち", en: "we" },
  { jp: "あなた", en: "you" },
  { jp: "あのひと", en: "that person, he, she" },
  { jp: "あのかた", en: "that person (polite)" },
  { jp: "みなさん", en: "everyone" },
  { jp: "〜さん", en: "Mr./Ms." },
  { jp: "〜ちゃん", en: "suffix for children" },
  { jp: "〜くん", en: "suffix for boys" },
  { jp: "〜じん", en: "nationality suffix" },
  { jp: "せんせい", en: "teacher" },
  { jp: "がくせい", en: "student" },
  { jp: "かいしゃいん", en: "company employee" },
  { jp: "ぎんこういん", en: "bank employee" },
  { jp: "いしゃ", en: "doctor" },
  { jp: "けんきゅうしゃ", en: "researcher" },
  { jp: "エンジニア", en: "engineer" },
  { jp: "だいがく", en: "university" },
  { jp: "びょういん", en: "hospital" },
  { jp: "でんき", en: "electricity" },
  { jp: "だれ", en: "who" },
  { jp: "〜さい", en: "years old" },
  { jp: "なんさい（おいくつ）", en: "how old (おいくつ is polite)" },
  { jp: "はい", en: "yes" },
  { jp: "いいえ", en: "no" },
  { jp: "しつれいですが", en: "Excuse me, but" },
  { jp: "おなまえは？", en: "May I have your name?" },
  { jp: "はじめまして", en: "How do you do? (first meeting)" },
  { jp: "どうぞよろしく [おねがいします]", en: "Pleased to meet you" },
  { jp: "こちらは〜さんです", en: "This is Mr./Ms. ～" },
  { jp: "〜からきました", en: "I came from ～" },
  { jp: "アメリカ", en: "U.S.A." },
  { jp: "イギリス", en: "U.K." },
  { jp: "インド", en: "India" },
  { jp: "インドネシア", en: "Indonesia" },
  { jp: "かんこく", en: "South Korea" },
  { jp: "タイ", en: "Thailand" },
  { jp: "ちゅうごく", en: "China" },
  { jp: "ドイツ", en: "Germany" },
  { jp: "にほん", en: "Japan" },
  { jp: "フランス", en: "France" },
  { jp: "ブラジル", en: "Brazil" },
  { jp: "さくらだいがく", en: "Sakura University" },
  { jp: "ふじだいがく", en: "Fuji University" },
  { jp: "IMC", en: "fictitious company" },
  { jp: "パワーでんき", en: "Power Electric (fictitious company)" },
  { jp: "ブラジルエアー", en: "Brazil Air (fictitious company)" },
  { jp: "AKC", en: "fictitious institute" },
  { jp: "しんじゅくびょういん", en: "Shinjuku Hospital (fictitious)" },
];
export default function Lesson1Vocabulary() {
  const navigate = useNavigate();

  // 🌸 Create floating sakura petals
  useEffect(() => {
    const numPetals = 15;
    for (let i = 0; i < numPetals; i++) {
      const petal = document.createElement("div");
      petal.classList.add("sakura");
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDuration = 6 + Math.random() * 5 + "s";
      petal.style.opacity = Math.random();
      petal.style.transform = `scale(${0.5 + Math.random()})`;
      document.body.appendChild(petal);

      petal.addEventListener("animationend", () => petal.remove());
    }
  }, []);

  return (
    <>
      {/* 🌸 Inline style block for all custom CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Mincho&display=swap');

        body {
          margin: 0;
          font-family: 'Sawarabi Mincho', sans-serif;
          background: linear-gradient(135deg, #ffe6f0 0%, #ffd1dc 40%, #ffe6f9 100%);
          overflow-x: hidden;
        }

        .vocab-container {
          width: 100%;
          min-height: 100vh;
          padding: 30px 20px;
          text-align: center;
          position: relative;
          z-index: 2;
        }

        .title {
          font-size: 30px;
          font-weight: bold;
          color: #d63384;
          margin-bottom: 40px;
          text-shadow: 1px 1px 3px rgba(255, 192, 203, 0.8);
        }

        .list {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .row {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 85%;
          max-width: 750px;
          gap: 12px;
          flex-wrap: wrap;
        }

        .card {
          flex: 1;
          background: rgba(255, 182, 193, 0.9);
          color: black;
          font-size: 22px;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          border-radius: 16px;
          box-shadow: 0 4px 10px rgba(255, 182, 193, 0.4);
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }

        .card:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 6px 20px rgba(255, 105, 180, 0.4);
          background: #ff69b4;
          color: white;
        }

        .back-btn {
          margin-top: 40px;
          padding: 12px 24px;
          background: #d63384;
          color: white;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 18px;
          transition: background 0.3s ease;
        }

        .back-btn:hover {
          background: #b82f70;
        }

        /* 🌸 Sakura petals animation */
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .sakura {
          position: fixed;
          top: -10px;
          width: 14px;
          height: 14px;
          background: rgba(255, 182, 193, 0.8);
          border-radius: 50%;
          animation: fall linear infinite;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      {/* 🌸 UI */}
      <div className="vocab-container">
        <h1 className="title">🌸 Lesson 1 Vocabulary 🌸</h1>

        <div className="list">
          {vocabulary.map((word, index) => (
            <div key={index} className="row">
              <div className="card">{word.jp}</div>
              <div className="card">{word.en}</div>
            </div>
          ))}
        </div>

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
      </div>
    </>
  );
}
