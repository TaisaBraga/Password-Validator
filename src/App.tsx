import { useState } from "react";
import "./App.css";
import validator from "validator";

function App() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isStrong, setIsStrong] = useState<boolean>(false);
  const valideRules = {
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  };
  
  const validate = (password: string) => {
    if (validator.isStrongPassword(password, valideRules)) {
      setErrorMessage("The Password is Strong!");
      setIsStrong(true);
    } else {
      setErrorMessage("The Password is not Strong!");
      setIsStrong(false);
    }
  };

  return (
    <>
      <h1>Checking Password Strength in ReactJS</h1>
      <span>
        Enter Password:
        <input
          type="text"
          onFocus={() => setErrorMessage("")}
          onChange={(e) => {
            validate(e.target.value);
          }}
        ></input>
      </span>
      {errorMessage && isStrong == false ? (
        <span style={{ color: "red" }}>{errorMessage}</span>
      ) : errorMessage && isStrong == true ? (
        <span style={{ color: "blue" }}>{errorMessage}</span>
      ) : null}
    </>
  );
}

export default App;
