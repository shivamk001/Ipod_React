import { Component } from "react";
import ZingTouch from 'zingtouch';

import Controls from "./Components/Controls/Controls";
import Screen from "./Components/Screen/Screen";

export default class App extends Component {
  constructor(){
    super();
    this.state={
      //all the items which will be displayed in menu page
      menuItems:['Cover Flow', 'Music', 'Games', 'Settings'],

      //all the items which will be displayed for music option
      musicItems:['MusicPlayer', 'AllSongs', 'Artists', 'Albums'],

      
      itemNo: 0, 
      page:'Menu',
      prevPage: 'Menu'
    }
  }


  //A handler to handle for center button clicks
  midButtonclickHandler=(event)=>{
    event.preventDefault();
    console.log('Mid Button clicked', this.state.page)
    if(this.state.page==='Menu'){
      this.setState({prevPage: 'Menu'})
      this.setState({page: this.state.menuItems[this.state.itemNo], itemNo: 0}, ()=>console.log('Page:', this.state.page))
    }
    else if(this.state.page==='Music'){
      //don't change page
      if(this.state.itemNo<4){
        this.setState({prevPage: 'Music'})
        this.setState({page: this.state.musicItems[this.state.itemNo], itemNo: 0}, ()=>console.log('Page:', this.state.page, 'PrevPage:', this.state.prevPage))
      }
      
    }
  }

  //a handler to handle menu button click events
  menuButtonClickHandler=()=>{
    if(this.state.prevPage==='Music'){
      if(this.state.page==='Music'){
        this.setState({page: 'Menu', itemNo: 0}, ()=>console.log('Page:', this.state.page))
      }
      else{
        this.setState({page: 'Music', itemNo: 0}, ()=>console.log('Page:', this.state.page))
      }
      
    }
    else if(this.state.prevPage==='Menu'){
      this.setState({page: 'Menu', itemNo: 0}, ()=>console.log('Page:', this.state.page))
    }
    
  }
  
  
  //logic to handle rotation events
  componentDidMount(){

    var zt=new ZingTouch.Region(document.body);
    let controlsCircleElement=document.getElementById("outerCircle");
    zt.bind(controlsCircleElement, 'rotate', (e)=>{
      
      let initialItemNo=this.state.itemNo

      let {distanceFromOrigin}=e.detail
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

    // let innerCircleButton=document.getElementById('midButton')
    // innerCircleButton.addEventListener('click',()=>console.log('Clicked'))
  }
  render(){
    const {menuItems, itemNo, page, prevPage}=this.state
    //console.log("App:", itemNo);
    return (
      <div className="ipod">
        <Screen menuItems={menuItems} itemNo={itemNo} prevPage={prevPage} page={page}/>
        <Controls midButtonclickHandler={this.midButtonclickHandler} menuButtonClickHandler={this.menuButtonClickHandler}/>
      </div>
    );
  }
}

