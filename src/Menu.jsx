import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Recomendacion from "./Recomendacion";
import Rm from "./Rm";
import Equivalencia from "./Equivalencia";

function Menu() {
  return (

    <BrowserRouter className="divMenu">
      <div className="divMenu">
        <nav>

          <ul className="ulista">
            <li className="cabecera">My Training Place</li>
            <li >
              <Link to="Recomendacion" className="lista">Recomendaciones</Link>
            </li>
            <li >
              <Link to="RM" className="lista">1Rm</Link>
            </li>
            <li >
              <Link to="Equivalencia" className="lista">Equivalencias</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Recomendacion">
            <Recomendacion />
          </Route>
          <Route path="/Rm">
            <Rm />
          </Route>
          <Route path="/Equivalencia">
            <Equivalencia />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Menu;
