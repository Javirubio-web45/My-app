import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Unidad1 from "./unidades/Unidad1.jsx";
import Unidad2 from "./unidades/Unidad2.jsx";
import Unidad3 from "./unidades/Unidad3.jsx";
import Unidad4 from "./unidades/Unidad4.jsx";
import "./menu-style.css";

function Contenido(){
  return (
    <BrowserRouter>
      <div className="menu">
        <input type='checkbox' id='menu' />
        <label htmlFor='menu'>Menú</label>
          <ul className="options">
            <li>
              <Link to="/unidades/Unidad1">Unidad1</Link>
            </li>
            <li>
              <Link to="/unidades/Unidad2">Unidad2</Link>
            </li>
            <li>
              <Link to="/unidades/Unidad3">Unidad3</Link>
            </li>
            <li>
              <Link to="/unidades/Unidad4">Unidad4</Link>
            </li>
          </ul>
        <Switch>
          <Route path="/unidades/Unidad1">
            <Unidad1 />
          </Route>
          <Route path="/unidades/Unidad2">
            <Unidad2 />
          </Route>
          <Route path="/unidades/Unidad3">
            <Unidad3 />
          </Route>
          <Route path="/unidades/Unidad4">
            <Unidad4 />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default Contenido;
