import { Component } from "react";

export default class Settings extends Component{
    
    render(){
        return (
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"center", height: "100%", width: '100%'}}>
                <img src="https://cdn-icons-png.flaticon.com/128/2040/2040504.png" alt="Settings Icon"/>
                <h2 style={{textAlign: "center", margin: "0%"}}>Settings</h2>
            </div>
            
        )
    }
} 