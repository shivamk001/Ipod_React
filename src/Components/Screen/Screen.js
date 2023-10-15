import { Component } from "react";


//all the pages which will be displayed on selected an option in Menu page or in Music page
import Menu from "./Menu";
import MusicMenu from "./MusicMenu";
import MusicPlayer from "./MusicPlayer";
import DisplayPage from "./DisplayPage";


export default class Screen extends Component{
    constructor(){
        super();
        this.state={
            links:{
                'Cover Flow':'',
                'Games': "https://cdn-icons-png.flaticon.com/128/686/686589.png",
                'Settings': "https://cdn-icons-png.flaticon.com/128/2040/2040504.png",
                'Albums': "https://cdn-icons-png.flaticon.com/128/727/727233.png",
                'AllSongs': "https://cdn-icons-png.flaticon.com/128/651/651717.png",
                'Artists': "https://cdn-icons-png.flaticon.com/128/10452/10452600.png"
            }
        }
    }
    render(){
        const {links}=this.state
        const {menuItems ,itemNo, page, prevPage}=this.props
        console.log('Screen PrevPage:', prevPage, 'Screen page:', page)
        if(page==='Menu'){
            return(
                <div className="ipodScreen">
                    <div className="screen">
                        <Menu menuItems={menuItems} itemNo={itemNo}/>
                    </div>
                </div>
            )
        }
        else if(page==='Music'){
            console.log("Music ItemNo:", itemNo);
            return(
                <div className="ipodScreen">
                    <div className="screen">
                        <MusicMenu itemNo={itemNo}/>
                    </div>
                </div>
            )
        }
        else if(page==='MusicPlayer'){
            console.log("Music ItemNo:", itemNo);
            return(
                <div className="ipodScreen">
                    <div className="screen">
                        <MusicPlayer/>
                    </div>
                </div>
            )
        }
        else{
            return(
                <DisplayPage link={links[page]} title={page}/>
            )
        }








    }
}