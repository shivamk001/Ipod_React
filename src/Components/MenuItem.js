import { Component } from "react";

export default class MenuItem extends Component{
    render(){
        let {active, item}=this.props
        return(
            <>
                <div className={active?"activemenuItem":"menuItem"}>
                    <h5>{item}</h5>{active?<p>{'        >'}</p>:''}
                </div>
            </>
        )
    }
}