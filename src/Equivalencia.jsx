import React from "react";

function Equivalencia() {
  return (
    <div className="bodyEq">
      <table>
        <tr>
          <th colSpan="3">Equivalencia 1RM y % de carga maxima</th>
        </tr>
        <tr>
          <td>Repeticiones</td>
          <td>Sobrecarga</td>
          <td>Coeficiente</td>
        </tr>
        <tr>
          <td>1 RM</td>
          <td>100%</td>
          <td>1.00</td>
        </tr>
        <tr>
          <td>2 RM</td>
          <td>95% (+/-2)</td>
          <td>0.95</td>
        </tr>
        <tr>
          <td>3 RM</td>
          <td>90% (+/-3)</td>
          <td>0.90</td>
        </tr>
        <tr>
          <td>4 RM</td>
          <td>86% (+/-4)</td>
          <td>0.86</td>
        </tr>
        <tr>
          <td>5 RM</td>
          <td>82% (+/-5)</td>
          <td>0.82</td>
        </tr>
        <tr>
          <td>6 RM</td>
          <td>78% (+/-6)</td>
          <td>0.78</td>
        </tr>
        <tr>
          <td>7 RM</td>
          <td>74% (+/-7)</td>
          <td>0.74</td>
        </tr>
        <tr>
          <td>8 RM</td>
          <td>70% (+/-8)</td>
          <td>0.70</td>
        </tr>
        <tr>
          <td>9 RM</td>
          <td>65% (+/-9)</td>
          <td>0.65</td>
        </tr>
        <tr>
          <td>10 RM</td>
          <td>61% (+/-10)</td>
          <td>0.61</td>
        </tr>
        <tr>
          <td>11 RM</td>
          <td>57% (+/-11)</td>
          <td>0.57</td>
        </tr>
        <tr>
          <td>12 RM</td>
          <td>53% (+/-12)</td>
          <td>0.53</td>
        </tr>
      </table>
      <hr />
      <p>
        Las equivalencias nos ayudan a poder calcular nuestro 1RM y poder
        controlar los pesos con los que trabajaremos cada dia en el gimnasio
      </p>
    </div>
  );
}

export default Equivalencia;
