import { Component } from "react";
import ZingTouch from 'zingtouch';

import Controls from "./Components/Controls";
import Screen from "./Components/Screeen";

export default class App extends Component {
  componentDidMount(){
    var zt=new ZingTouch.Region(document.body);
    let controlsCircleElement=document.getElementById('controlsCircle');
    zt.bind(controlsCircleElement, 'rotate', function(e){
      
      let {distanceFromLast}=e.detail
      //console.log('Rotating:', distanceFromLast)
      if(distanceFromLast>0){
        console.log('Clockwise');
      }
      else{
        console.log('Counter-clockwise');
      }
    }, false)
  }
  render(){
    return (
      <div className="ipod">
        <Screen/>
        <Controls/>
      </div>
    );
  }
}

