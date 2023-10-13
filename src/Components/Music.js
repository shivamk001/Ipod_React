import { Component } from "react";

export default class Music extends Component{
    render(){
        return(
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center", height: "100%", width: '100%'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/651/651717.png" alt="Settings Icon" />
                <h2 style={{textAlign: "center", margin: "0%"}}>Music</h2>
            </div>
        )
    }
}