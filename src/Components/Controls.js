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
                            <i className="fa-solid fa-xl" style={{color: "gray"}} onClick={menuButtonClickHandler}>MENU</i>
                        </div>
                        <div className="forwardBackward">
                            <div className="forwardBackwardIcon">
                                <i className="fa-solid fa-backward-fast  fa-2xl" style={{textAlign:"center", color: "gray", cursor: "pointer"}} onClick={midButtonclickHandler}></i>
                            </div>
                            <button  type="button" onClick={midButtonclickHandler} className="roundButton"></button>
                            <div className="forwardBackwardIcon">
                                <i className="fa-solid fa-forward-fast  fa-2xl" onClick={midButtonclickHandler} style={{color: "gray", cursor: "pointer"}}></i>
                            </div>
                        </div>
                        <div className="menuButtonDiv">
                            <i className="fa-solid fa-play fa-2xl playPauseIcons" onClick={midButtonclickHandler}></i> <i className="fa-solid fa-pause fa-2xl playPauseIcons" onClick={midButtonclickHandler}></i>
                        </div>
                    </div>   

                </div>
            </div>
            </>
        )
    }
}

                        {/* <button  type="button" className="innerButton" onClick={this.clickHandler}>
                        </button>


                        <div className="forwardFast">
                            <i className="fa-solid fa-forward-fast  fa-2xl" onClick={this.clickHandler}></i>
                        </div>
                        <div className="playPause">
                            <i className="fa-solid fa-play fa-2xl"></i> <i className="fa-solid fa-pause fa-2xl"></i>
                        </div> */}