import { useState } from "react";

const ToggleButton = () => {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [buttonStyle, setButtonStyle] = useState("white");
  function handleClick() {
    setBackgroundColor(backgroundColor === "white" ? "black" : "white");
    setTextColor(textColor === "black" ? "white" : "black");
    setButtonStyle(backgroundColor === "white" ? "black" : "white");
  }
  return (
    <div>
      <section syle={{ backgroundColor, color: textColor }}>
        <button
          onClick={handleClick}
          style={{
            buttonStyle,
            color: textColor,
            border: "2px solid ${textColor}",
          }}
        >
          alterner
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
