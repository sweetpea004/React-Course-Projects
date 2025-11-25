import { useState } from "react";

import Header from "./components/Header"
import Input from "./components/Input"
import Results from "./components/Results";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 110
  });

  function handleInputChange(inputId, newValue) {
    setInput(prevInput => {
      // "+" converts string to number
      console.log(input);
      return {
          ...prevInput, 
          [inputId]: +newValue
      };
    });
  }

  const inputIsValid = (input.duration >= 1);

  return (
    <>
      <Header/>
      <Input input={input} handleInputChange={handleInputChange}/>
      {!inputIsValid && <p  className="center">Please Enter Valid Duration</p>}
      {inputIsValid && <Results input={input}/>}
    </>
  )
}

export default App
