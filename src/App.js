import { Component } from "react";
import ZingTouch from 'zingtouch';

import Controls from "./Components/Controls";
import Screen from "./Components/Screeen";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      menuItems:['Cover Flow', 'Music', 'Games', 'Settings'],
      itemNo: 0
    }
  }

  

  componentDidMount(){

    var zt=new ZingTouch.Region(document.body);
    let controlsCircleElement=document.getElementById('controlsCircle');
    zt.bind(controlsCircleElement, 'rotate', (e)=>{
      
      let initialItemNo=this.state.itemNo
      console.log("Initial Item No:", initialItemNo)

      let {distanceFromOrigin}=e.detail
      //console.log('Rotating:', distanceFromOrigin)
        console.log("Distance:", distanceFromOrigin);
        if(distanceFromOrigin<0 && distanceFromOrigin>=-45){
          if(initialItemNo===3){
            console.log("Setting itemno to 2")
            this.setState({itemNo: 2})
          }
        }
        else if(distanceFromOrigin<-45 && distanceFromOrigin>=-90){

          if(initialItemNo===2){
            this.setState({itemNo: 1})
          }
          else if(initialItemNo===3){
            this.setState({itemNo: 2})
          }
          else{
            this.setState({itemNo: 1})
          }
        }
        else if(distanceFromOrigin<-90 && distanceFromOrigin>=-180){
          if(initialItemNo===1){
            this.setState({itemNo: 0})
          }

        }
        else if(distanceFromOrigin>0 && distanceFromOrigin<=45){
            this.setState({itemNo: 0})
        }
        else if(distanceFromOrigin>45 && distanceFromOrigin<=90){
          this.setState({itemNo: 1})
        }
        else if(distanceFromOrigin>90 && distanceFromOrigin<=135){
          this.setState({itemNo: 2})
        }
        else if(distanceFromOrigin>135 && distanceFromOrigin<=180){
          this.setState({itemNo: 3})
        }


      // console.log('End');
    }, false)
  }
  render(){
    const {menuItems, itemNo}=this.state
    console.log("App:", itemNo);
    return (
      <div className="ipod">
        <Screen menuItems={menuItems} itemNo={itemNo}/>
        <Controls/>
      </div>
    );
  }
}

