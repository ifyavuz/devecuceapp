import React, { useState, useEffect } from 'react';

function App() {
  const [text, setText] = useState('');
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(null);

  const generateText = () => {
    const randomText = Math.random() > 0.5 ? 'Deve' : 'Cüce';
    setText(randomText);
  };

  useEffect(() => {
    const interval = setInterval(generateText, 2000);
    setTimer(interval);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (value) => {
    if (value === text) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    generateText(); // Yanıtladıktan sonra anında yeni bir metin oluştur
  };

  return (
    <div className="container text-center mt-5">
      <h1>Deve ve Cüce Oyunu</h1>
      <div className="mt-4">
        <h2>{text}</h2>
      </div>
      <div className="mt-4">
        <button className="btn btn-primary m-2" onClick={() => handleClick('Deve')}>
          Deve
        </button>
        <button className="btn btn-danger m-2" onClick={() => handleClick('Cüce')}>
          Cüce
        </button>
      </div>
      <div className="mt-4">
        <h3>Puan: {score}</h3>
      </div>
    </div>
  );
}

export default App;
