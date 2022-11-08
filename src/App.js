import React, { useState } from "react";
import Timer from "./Timer";
import './App.css'


class App extends React.Component  {
  constructor() {
  super ()
   this.state={
   Fullname: "Kharrat Amine" ,
   Profession: "khdima la rass la sess",
   Bio: "Barcha ktiba 3ala 7yeti" ,
    Show: true ,
 }
  }


  bouton = () => {
    this.setState({Show:!this.state.Show}) }

  
  
   render (){
   return (
    <div className="App">
      <button onClick={this.bouton} >{this.state.Show ? "Hide Counter" : "Show Counter"}</button>
      { this.state.Show ?
      (<> <img className="pic" src="./Pic.jpg"/>
      <p> {this.state.Fullname} </p>
      <p>{this.state.Bio} </p>
      <p>{this.state.Profession}</p>
      <Timer/> </>) : null }
    </div> 
  );
}} 

export default App;
