import React, { useState, useEffect } from "react";
import "./App.css";

const moods = ["행복해", "좋아", "그냥 그래", "슬퍼", "화나", "기타"];

function App() {
  const [selectedMood, setSelectedMood] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("todayMood");
    if (saved) setSelectedMood(saved);
  }, []);

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
    localStorage.setItem("todayMood", mood);
  };

  return (
    <div className="App">
      <h1>오늘 나의 기분은?</h1>
      <div className="buttons">
        {moods.map((mood) => (
          <button
            key={mood}
            onClick={() => handleMoodClick(mood)}
            className={selectedMood === mood ? "selected" : ""}
          >
            {mood}
          </button>
        ))}
      </div>
      {selectedMood && <p className="result">오늘의 기분: {selectedMood}</p>}
    </div>
  );
}

export default App;
