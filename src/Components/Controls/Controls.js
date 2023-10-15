import { Component } from "react";

export default class Controls extends Component{

    render(){
        let {midButtonclickHandler, menuButtonClickHandler}=this.props
        return(
            <>
            <div className="ipodControls">

                <div id="outerCircle" className="outerCircle">  
                    <div className="ipodButtons">
                        <div className="menuButtonDiv">
                            <i className="fa-solid fa-sm" style={{color: "gray"}} onClick={menuButtonClickHandler}>MENU</i>
                        </div>
                        <div className="forwardBackward">
                            <div className="forwardBackwardIcon">
                                <i className="fa-solid fa-backward-fast  fa-sm" style={{textAlign:"center", color: "gray", cursor: "pointer"}} ></i>
                            </div>
                            <button  type="button" onClick={midButtonclickHandler} className="roundButton"></button>
                            <div className="forwardBackwardIcon">
                                <i className="fa-solid fa-forward-fast  fa-sm" style={{color: "gray", cursor: "pointer"}}></i>
                            </div>
                        </div>
                        <div className="menuButtonDiv">
                            <i className="fa-solid fa-play fa-sm playPauseIcons"></i> <i className="fa-solid fa-pause fa-sm playPauseIcons" ></i>
                        </div>
                    </div>   

                </div>
            </div>
            </>
        )
    }
}
