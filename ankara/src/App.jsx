import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import {data,columns} from "./data/data.js";
import "./index.css";
import Datatables from "./components/Datatables";

const App = () => (
  <div className="container">
    <Header/>
    <Datatables data={data} columns={columns}/>
    <div>Name: ankara</div>
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
