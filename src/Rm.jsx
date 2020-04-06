import React, { useState } from "react";

function Rm() {

  const [wgt, setWgt] = useState();
  const [reps, setReps] = useState();
  const [res, setRm] = useState(0);

  function wgtChange(event){
    setWgt(event.target.value);
  }

  function repsChange(event){
    setReps(event.target.value);
  }

  function resultRm(){
    setRm(Math.round(wgt / (1.0278 - 0.0278 * reps)));
    console.log(res);
  }

  return (
    <div>
      <h1>Calculo de su 1RM</h1>
      <input onChange={repsChange} type="number" placeholder="reps?" />
      <input onChange={wgtChange}type="number" placeholder="Kg?" />
      <button onClick={resultRm}>Resultado</button>
      <h2>El cálculo de su 1RM es de: {res}Kg.</h2>
    </div>
  );
}

export default Rm;
