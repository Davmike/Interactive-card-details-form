import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import Card from "./Components/Card/Card";
import Complete from "./Components/Complete/Complete";

function App() {
  const [holder, setHolder] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [pin, setPin] = useState("");
  const [confirm, setConfirm] = useState(false);
  return (
    <main>
      <Card
        holder={holder}
        number={number}
        month={month}
        year={year}
        pin={pin}
      />
      {!confirm ? (
        <Form
          holder={holder}
          setHolder={setHolder}
          number={number}
          setNumber={setNumber}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          pin={pin}
          setPin={setPin}
          setConfirm={setConfirm}
        />
      ) : (
        <Complete />
      )}
    </main>
  );
}

export default App;
