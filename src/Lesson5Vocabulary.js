import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const vocabulary = [
{ jp: "いきます", en: "go" },
  { jp: "きます", en: "come" },
  { jp: "かえります", en: "go home, return" },
  { jp: "がっこう", en: "school" },
  { jp: "スーパー", en: "supermarket" },
  { jp: "えき", en: "station" },
  { jp: "ひこうき", en: "airplane" },
  { jp: "ふね", en: "ship" },
  { jp: "でんしゃ", en: "electric train" },
  { jp: "ちかてつ", en: "subway, underground" },
  { jp: "しんかんせん", en: "the Shinkansen, bullet train" },
  { jp: "バス", en: "bus" },
  { jp: "タクシー", en: "taxi" },
  { jp: "じてんしゃ", en: "bicycle" },
  { jp: "あるいて", en: "on foot" },
  { jp: "ひと", en: "person, people" },
  { jp: "ともだち", en: "friend" },
  { jp: "かれ", en: "he, boyfriend, lover" },
  { jp: "かのじょ", en: "she, girlfriend, lover" },
  { jp: "かぞく", en: "family" },
  { jp: "ひとりで", en: "alone, by oneself" },
  { jp: "せんしゅう", en: "last week" },
  { jp: "こんしゅう", en: "this week" },
  { jp: "らいしゅう", en: "next week" },
  { jp: "せんげつ", en: "last month" },
  { jp: "こんげつ", en: "this month" },
  { jp: "らいげつ", en: "next month" },
  { jp: "きょねん", en: "last year" },
  { jp: "ことし", en: "this year" },
  { jp: "らいねん", en: "next year" },
  { jp: "―がつ", en: "-th month of the year" },
  { jp: "なんがつ", en: "what month" },
  { jp: "ついたち", en: "1st day of the month" },
  { jp: "ふつか", en: "2nd, two days" },
  { jp: "みっか", en: "3rd, three days" },
  { jp: "よっか", en: "4th, four days" },
  { jp: "いつか", en: "5th, five days" },
  { jp: "むいか", en: "6th, six days" },
  { jp: "なのか", en: "7th, seven days" },
  { jp: "ようか", en: "8th, eight days" },
  { jp: "ここのか", en: "9th, nine days" },
  { jp: "とおか", en: "10th, ten days" },
  { jp: "じゅうよっか", en: "14th, fourteen days" },
  { jp: "はつか", en: "20th, twenty days" },
  { jp: "にじゅうよっか", en: "24th, twenty-four days" },
  { jp: "―にち", en: "-th day of the month" },
  { jp: "なんにち", en: "what day, how many days" },
  { jp: "いつ", en: "when" },
  { jp: "たんじょうび", en: "birthday" },
  { jp: "ふつう", en: "local (train)" },
  { jp: "きゅうこう", en: "rapid" },
  { jp: "とっきゅう", en: "express" },
  { jp: "つぎの", en: "next" },
  { jp: "どう いたしまして", en: "You’re welcome / Don’t mention it" },
  { jp: "―ばんせん", en: "platform number" },
  { jp: "はかた", en: "name of a town in Kyushu" },
  { jp: "ふしみ", en: "name of a town in Kyoto" },
  { jp: "こうべ", en: "name of a town near Osaka" },
  { jp: "おおさかじょう", en: "Osaka Castle" },
];
export default function Lesson5Vocabulary() {
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
        <h1 className="title">🌸 Lesson 5 Vocabulary 🌸</h1>

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
