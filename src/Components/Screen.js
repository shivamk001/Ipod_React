import { Component } from "react";
import Menu from "./Menu";
import CoverFlow from "./CoverFlow";
import Games from "./Games"
import Settings from "./Settings";
import Music from "./Music";
export default class Screen extends Component{

    render(){
        const {menuItems ,itemNo, page}=this.props
        //console.log('Screen:', itemNo)
        if(page==='Menu'){
            return(
                <div className="ipodScreen">
                    <div className="screen">
                        <Menu menuItems={menuItems} itemNo={itemNo}/>
                    </div>
                </div>
            )
        }
        else if(page==='Cover Flow'){
            return(
                <div className="ipodScreen">
                    <div className="screen">
                        <CoverFlow/>
                    </div>
                </div>
            )
        }
        else if(page==='Games'){
            return(
                <div className="ipodScreen">
                    <div className="screen">
                        <Games/>
                    </div>
                </div>
            )
        }
        else if(page==='Settings'){
            return(
                <div className="ipodScreen">
                    <div className="screen">
                        <Settings/>
                    </div>
                </div>
            )
        }
        else if(page==='Music'){
            return(
                <div className="ipodScreen">
                    <div className="screen">
                        <Music/>
                    </div>
                </div>
            )
        }

    }
}