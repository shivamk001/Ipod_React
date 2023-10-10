import { Component } from "react";

export default class Controls extends Component{

    render(){
        return(
            <>
            <div className="ipodControls">
                <div className="ipodButtons">
                    <div className="menu">
                        <i className="fa-solid fa-xl">MENU</i>
                    </div>
                    <div className="backwardFast">
                        <i className="fa-solid fa-backward-fast  fa-2xl"></i>
                    </div>
                    <div className="forwardFast">
                        <i className="fa-solid fa-forward-fast  fa-2xl"></i>
                    </div>
                    <div className="playPause">
                        <i className="fa-solid fa-play fa-2xl"></i> <i className="fa-solid fa-pause fa-2xl"></i>
                    </div>
                </div>


                <div id="controlsCircle" className="controls">
                    <div className="outerCircle">                
                        <div className="innerCircle">
                     </div>
                </div>
                </div>
            </div>
            </>
        )
    }
}