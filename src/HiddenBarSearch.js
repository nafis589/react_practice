import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./HiddenBarSearch.css";

const HiddenBarSearch = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const handleclick = (e) => {
    setBgColor("#1a1a1a");
    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    }
  };
  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={handleclick}
    >
      {showInput ? (
        <input type="text" placeholder="Search...." />
      ) : (
        <FaSearch
          onClick={() => {
            setShowInput(true);
          }}
        />
      )}
    </section>
  );
};

export default HiddenBarSearch;
