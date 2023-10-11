import { Component } from "react";
import Menu from "./Menu";

export default class Screen extends Component{

    render(){
        const {menuItems ,itemNo}=this.props
        //console.log('Screen:', itemNo)
        return(
            <div className="ipodScreen">
                <div className="screen">
                    <Menu menuItems={menuItems} itemNo={itemNo}/>
                </div>
            </div>
        )
    }
}