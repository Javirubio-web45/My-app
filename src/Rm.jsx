import React from "react";

let wgt;
let reps;

function test() {
  return Math.round(wgt / (1.0278 - 0.0278 * reps));
}
function Rm() {
  reps = parseInt(prompt("Cuantas repeticiones realizo?"), 10);
  wgt = parseInt(
    prompt("Las repeticiones con cuanto peso en Kg se realizaron?"),
    10
  );

  return (
    <div>
      <h2>El cálculo de su 1RM es de: {test()}Kg.</h2>
    </div>
  );
}

export default Rm;
