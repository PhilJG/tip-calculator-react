import './App.css';
import Attribution from './components/Attribution';
import Calculator from './components/Calculator';
import Result from './components/Result';
import { useState } from 'react';
import { ReactComponent as Logo } from './images/logo.svg'

function App() {
  const [bill, setBill] = useState(0.00);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(0.00);
  const [customTip, setCustomTip] = useState("")

  const tipPercentage = [
    .05,
    .10,
    .15,
    .25,
    .50
  ]

  function handleBill(e) {
    // const value = parseFloat(e.target.value)
    // console.log(value);

    setBill(e.target.value);
  }

  function handlePeople(e) {
    console.log(e);

    const value = parseFloat(e.target.value)

    setPeople(value);
  }

  function handleTip(e) {
    const value = e.target.value
    console.log(`tip value: ${value}`);

    if (!tipPercentage.includes(value)) {
      // setTip("00");
      const percentValue = value / 100
      console.log(percentValue);

      setTip(parseFloat(percentValue))
    } else {
      setTip(parseFloat(value))
    }
    console.log(`tip value: ${value}`);
  }

  const customClick = function () {
    const customPercent = document.querySelector(".customPercent")
    const customInput = document.querySelector("#customInput")

    customPercent.classList.toggle("hidden");
    customInput.classList.toggle("hidden");

    setCustomTip("");
  }


  const handleReset = function () {
    if (people !== 0 || bill !== 0) {
      setBill(0.00);
      setTip(0.00);
      setPeople(1);
      customClick();
      document.getElementById("entry").value = { bill };
      document.getElementById("people").value = { people };
      document.getElementById("customInput").value = 0
    } else if (people === 0) {
      const addMessage = document.querySelector("#input__message--people");
      addMessage.classList.remove("hidden")
    }
    else if (bill === 0) {
      const addMessage = document.querySelector("#input__message--bill");
      addMessage.classList.remove("hidden")
    }
  }

  return (
    <main>
      <Logo className="logo" />
      <div className='main__container'>
        <Calculator
          bill={bill}
          people={people}
          tip={tip}
          handleBill={handleBill}
          handleTip={handleTip}
          handlePeople={handlePeople}
          tipPercentage={tipPercentage}
          handleReset={handleReset}
          customClick={customClick}
          setCustomTip={setCustomTip}
        />
        <Result
          bill={bill}
          people={people}
          tip={tip}
          setBill={setBill}
          setPeople={setPeople}
          setTip={setTip}
          handleReset={handleReset} />
      </div>
      <Attribution />
    </main>
  );
}

export default App;