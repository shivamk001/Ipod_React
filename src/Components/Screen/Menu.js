import { Component } from "react";

import MenuItem from "./MenuItem";

export default class Menu extends Component{

    render(){
        const {menuItems, itemNo}=this.props
        //console.log("Menu:", itemNo);
        return(
            <div style={{height: '100%', width: '50%', backgroundColor: 'white', borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem'}}>
                <h4 style={{height: '10%'}}>iPod.js</h4>
                <div className="screenMenu">
                    {menuItems.map((item, index)=>{
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