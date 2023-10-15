import { Component } from "react";
import MenuItem from "./MenuItem";

export default class MusicMenu extends Component{
    constructor(){
        super();
        this.state={
            musicItems:[
                'Music Player',
                'All Songs',
                'Artists',
                'Albums'
            ],
        }
    }

    // componentDidMount(){

    //     var zt=new ZingTouch.Region(document.body);
    //     let controlsCircleElement=document.getElementById("outerCircle");

    //     zt.bind(controlsCircleElement, 'rotate', (e)=>{
          
    //       let initialItemNo=this.state.itemNo
    //       console.log("Initial Item No:", initialItemNo)
    
    //       let {distanceFromOrigin}=e.detail
    //       //console.log('Rotating:', distanceFromOrigin)
    //         console.log("Distance:", distanceFromOrigin);
    //         if(distanceFromOrigin<0 && distanceFromOrigin>=-45){
    //           if(initialItemNo===3){
    //             console.log("Setting itemno to 2")
    //             this.setState({itemNo: 2})
    //           }
    //         }
    //         else if(distanceFromOrigin<-45 && distanceFromOrigin>=-90){
    
    //           if(initialItemNo===2){
    //             this.setState({itemNo: 1})
    //           }
    //           else if(initialItemNo===3){
    //             this.setState({itemNo: 2})
    //           }
    //           else{
    //             this.setState({itemNo: 1})
    //           }
    //         }
    //         else if(distanceFromOrigin<-90 && distanceFromOrigin>=-180){
    //           if(initialItemNo===1){
    //             this.setState({itemNo: 0})
    //           }
    
    //         }
    //         else if(distanceFromOrigin>0 && distanceFromOrigin<=45){
    //             this.setState({itemNo: 0})
    //         }
    //         else if(distanceFromOrigin>45 && distanceFromOrigin<=90){
    //           this.setState({itemNo: 1})
    //         }
    //         else if(distanceFromOrigin>90 && distanceFromOrigin<=135){
    //           this.setState({itemNo: 2})
    //         }
    //         // else if(distanceFromOrigin>135 && distanceFromOrigin<=180){
    //         //   this.setState({itemNo: 3})
    //         // }
    
    
    //       // console.log('End');
    //     }, false)
    
    //     // let innerCircleButton=document.getElementById('midButton')
    //     // innerCircleButton.addEventListener('click',()=>console.log('Clicked'))
    //   }
    render(){
        let {musicItems}=this.state
        let {itemNo}=this.props
        return(
            <div style={{display: "flex", flexDirection: "column", alignItems:"flex-start", justifyContent:"flex-start", height: "100%", width: '50%', backgroundColor: 'white', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem'}}>
                {/* <img src="https://cdn-icons-png.flaticon.com/128/651/651717.png" alt="Settings Icon" />
                <h2 style={{textAlign: "center", margin: "0%"}}>Music</h2> */}
                <h4>Music</h4>
                <div className="screenMenu">
                    {musicItems.map((item, index)=>{
                        if(index===itemNo){
                            return (<MenuItem key={index} active={true} item={item}/>)
                        }
                        else{
                            return (<MenuItem key={index} active={false} item={item}/>)
                        }
                    })}
                </div>
            </div>
        )
    }
}