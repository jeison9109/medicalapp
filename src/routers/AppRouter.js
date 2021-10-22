import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Consultorios } from "../components/screens/Consultorios";
import { Clinicas } from "../components/screens/Clinicas";
import { Empresas } from "../components/screens/Empresas";
import { Pacientes } from "../components/screens/Pacientes";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Consultorios" component={Consultorios} />
          <Route exact path="/Clinicas" component={Clinicas} />
          <Route exact path="/Empresas" component={Empresas} />
          <Route exact path="/Pacientes" component={Pacientes} />
        </Switch>
      </Router>
    </>
  );
}
