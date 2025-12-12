import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const vocabulary = [
  { jp: "ここ", en: "here, this place" },
  { jp: "そこ", en: "there, that place near you" },
  { jp: "あそこ", en: "that place over there" },
  { jp: "どこ", en: "where, what place" },
  { jp: "こちら", en: "this way, this place (polite)" },
  { jp: "そちら", en: "that way, that place near you (polite)" },
  { jp: "あちら", en: "that way, that place over there (polite)" },
  { jp: "どちら", en: "which way, where (polite)" },
  { jp: "きょうしつ", en: "classroom" },
  { jp: "しょくどう", en: "dining hall, canteen" },
  { jp: "じむしょ", en: "office" },
  { jp: "かいぎしつ", en: "conference room, assembly room" },
  { jp: "うけつけ", en: "reception desk" },
  { jp: "ロビー", en: "lobby" },
  { jp: "へや", en: "room" },
  { jp: "トイレ(おてあらい)", en: "toilet, rest room" },
  { jp: "かいだん", en: "staircase" },
  { jp: "エレベーター", en: "elevator, lift" },
  { jp: "エスカレーター", en: "escalator" },
  { jp: "[お]くに", en: "country" },
  { jp: "かいしゃ", en: "company" },
  { jp: "うち", en: "house, home" },
  { jp: "でんわ", en: "telephone, telephone call" },
  { jp: "くつ", en: "shoes" },
  { jp: "ネクタイ", en: "necktie" },
  { jp: "ワイン", en: "wine" },
  { jp: "たばこ", en: "tobacco, cigarette" },
  { jp: "うりば", en: "department, counter (in a department store)" },
];
  
export default function Lesson2Vocabulary() {
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
        <h1 className="title">🌸 Lesson 3 Vocabulary 🌸</h1>

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
