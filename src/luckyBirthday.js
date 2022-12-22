import { useState } from "react";

let LuckyBirthday = () => {
  let [dob, SetDob] = useState("");
  let [luckyNumber, setLuckyNumber] = useState(0);
  let [output, setOutput] = useState("");

  let checkLuckyBirthday = () => {
    let numDob = dob.replaceAll("-", "");
    let sum = 0;

    for (let i = 0; i < numDob.length; i++) {
      sum += +numDob[i];
    }
    if (luckyNumber && dob) {
      if (sum % luckyNumber === 0) {
        setOutput("Your birthdate is Lucky");
      } else {
        setOutput("Your birthdate is not Lucky");
      }
    } else {
      alert("Please provide DOB and your Lucky number");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "30%",
        margin: "auto",
        padding: "1rem",
      }}
    >
      <h1 style={{ color: "grey" }}>
        Is Your Birthday <span style={{ color: "tomato" }}>Lucky?</span>
      </h1>
      <input
        style={{
          color: "grey",
          margin: "0.5rem",
          padding: "1rem",
          borderRadius: "1rem",
          borderColor: "tomato",
        }}
        type="date"
        onChange={(e) => SetDob(e.target.value)}
      />
      <input
        style={{
          color: "grey",
          margin: "0.5rem",
          padding: "1rem",
          borderRadius: "1rem",
          borderColor: "tomato",
        }}
        type="number"
        onChange={(e) => setLuckyNumber(e.target.value)}
        placeholder="Lucky Number"
      />
      <button
        style={{
          color: "white",
          margin: "0.5rem",
          padding: "1rem",
          borderRadius: "1rem",
          border: "none",
          backgroundColor: "tomato",
        }}
        onClick={checkLuckyBirthday}
      >
        Check
      </button>
      <h1 style={{ color: "grey" }}>{output}</h1>
    </div>
  );
};
export default LuckyBirthday;
