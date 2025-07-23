import { useState } from "react";
import "./App.css";
import validator from "validator";

// Corrigir a cor da lista quando é mais de 8 caracteres
// Alterar o simbolo da lista


function App() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isStrong, setIsStrong] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("")
  const [activeErrors, setActiveErrors] = useState<string[]>([]);

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

  const setPasswordErrors = (value: string) => {
    const errors: string[] = []

    console.log(value)

    if(!/[A-Z]/.test(value)){
      errors.push("Must have upperCase letter")
    }
    if(!/[a-z]/.test(value)){
      errors.push("Must have lowercase letter")
    }

    if(!/\d/.test(value)){
      errors.push("Must have Numbers")
    }

    if(value.length < 8){
      errors.push("Must contain 8 characters")
    }

    setActiveErrors(errors)
  }

  return (
    <div>
      <h1>Checking Password Strength in ReactJS</h1>
      <span>
        Enter Password:
        <input
          type="text"
          value={inputValue}
          onFocus={() => {
            setInputValue("")
            setErrorMessage("")
            setActiveErrors([])
          }}
          onChange={(e) => {
            setInputValue(e.target.value)
            setInputValue(e.target.value)
            validate(e.target.value)
            setPasswordErrors(e.target.value)
          }}
        ></input>
      </span>

      {errorMessage && isStrong == false ? (
        <span style={{ color: "red" }}>{errorMessage}</span>
      ) : errorMessage && isStrong == true ? (
        <span style={{ color: "blue" }}>{errorMessage}</span>
      ) : null}

      <ul>
        <li style={{color: inputValue != "" && !activeErrors.includes("Must contain 8 characters") ? "green" : "red"}}>Must contain 8 characters</li>
        <li style={{color: inputValue != "" && !activeErrors.includes("Must have upperCase letter") ? "green" : "red"}}>Must have upperCase letter</li>
        <li style={{color: inputValue != "" && !activeErrors.includes("Must have lowercase letter") ? "green" : "red"}}>Must have lowercase letter</li>
        <li style={{color: inputValue != "" && !activeErrors.includes("Must have special character") ? "green" : "red"}}>Must have special character</li>
        <li style={{color: inputValue != "" && !activeErrors.includes("Must have Numbers") ? "green" : "red"}}>Must have Numbers</li>
      </ul>

    </div>
  );
}

export default App;
