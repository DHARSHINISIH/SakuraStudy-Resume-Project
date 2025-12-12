import React, { useState, useRef } from "react";
import { Volume2, Square } from "lucide-react"; // Add Square icon for stop

const Kaiwa1 = () => {
  const audioRef = useRef(new Audio("/audio/kaiwa1.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.play();
      setIsPlaying(true);

      // When audio ends, reset the state
      audio.onended = () => setIsPlaying(false);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffe4ec",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#d63384",
          marginBottom: "20px",
        }}
      >
        会話 (Kaiwa 1) – はじめまして
      </h1>

      <div
        style={{
          backgroundColor: "#f9c5d1",
          borderRadius: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          padding: "20px",
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <div style={{ textAlign: "right", marginBottom: "10px" }}>
          <button
            onClick={toggleAudio}
            style={{
              backgroundColor: "#d63384",
              color: "white",
              border: "none",
              padding: "10px 15px",
              borderRadius: "10px",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            {isPlaying ? (
              <>
                <Square size={18} /> Stop Audio
              </>
            ) : (
              <>
                <Volume2 size={18} /> Play Audio
              </>
            )}
          </button>
        </div>

        <div style={{ fontSize: "18px", color: "#333", lineHeight: "1.8" }}>
          <p><b>佐藤：</b> おはようございます。</p>
          <p><b>山田：</b> おはようございます。</p>
          <p><b>佐藤：</b> 山田さん、こちらはマイク・ミラーさんです。</p>
          <p><b>ミラー：</b> はじめまして。マイク・ミラーです。アメリカから来ました。どうぞよろしく。</p>
          <p><b>佐藤：</b> 佐藤 けいこです。どうぞ よろしく。</p>
        </div>

        <div style={{ marginTop: "20px", fontSize: "15px", color: "#555" }}>
          <p><b>English Translation:</b></p>
          <p><b>Sato:</b> Good morning.</p>
          <p><b>Yamada:</b> Good morning.</p>
          <p><b>Sato:</b> Mr. Yamada, this is Mr. Mike Miller.</p>
          <p><b>Miller:</b> Nice to meet you. I’m Mike Miller. I came from America. Pleased to meet you.</p>
          <p><b>Sato:</b> I’m Keiko Sato. Pleased to meet you.</p>
        </div>
      </div>
    </div>
  );
};

export default Kaiwa1;
