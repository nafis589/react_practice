import { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [buttonStyle, setButtonStyle] = useState("white");
  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");
    setTextColor(textColor === "black" ? "#ffa31a" : "black");
    setButtonStyle(backgroundColor === "white" ? "black" : "white");
  }
  return (
    <div>
      <section style={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            buttonStyle,
            color: textColor,
            border: `2px solid ${textColor}`,
          }}
        >
          {backgroundColor === "white" ? "Clair" : "sombre"}
        </button>
        <section className="content">
          <h1>
            Bienvenu dans
            <br />
            un vrai monde
          </h1>
        </section>
      </section>
    </div>
  );
};

export default ToggleButton;
