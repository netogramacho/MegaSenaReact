import { useEffect, useState } from "react";
import NumberDisplay from "../components/NumberDisplay";
import { mega } from "../functions/mega"

export default function Home() {
  
  const [numbers, setNumbers] = useState([])

  useEffect(() => {
     setNumbers(mega())
    //  GENERATE ON READY PAGE
  }, []);


  function renderNumbers() {
    return numbers.map(number => <NumberDisplay key={number} number={number} />)
  }

  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1>Mega Sena</h1>
      <div>
        {/* GENERATE ON CLICK */}
        <button style={{
          marginBottom:"20px",
        }} onClick = {() => setNumbers(mega())}
        >Get Numbers</button>
      </div>
      <div style={{
        display:"flex"
      }}>
        {renderNumbers()}
      </div>
    </div>
  )
}
