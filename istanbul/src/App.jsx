import React,{Suspense} from "react";
import ReactDOM from "react-dom";
import {data,columns} from "./data/data";

import "./index.css";
// import Header from 'ankara/Header';
const Header =React.lazy(()=>import ('ankara/Header')) ;
const DataTables =React.lazy(()=>import ('ankara/DataTables')) ;
const App = () => (
  <div className="container">
    <Suspense fallback={<div>Loading..</div>}>
      <Header/>
      <DataTables data={data} columns={columns}/>

    </Suspense>

    <div>Name: istanbul</div>
   
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
