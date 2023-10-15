import { Component } from "react";

export default class MusicPlayer extends Component{
    constructor(){
        super()
        this.state={
            currentTime: 0,
            timer: null
        }
        this.timer=null
    }



    componentDidMount() {
        this.timer=setTimeout(()=>this.setState({currentTime: this.state.currentTime+1}), 1000)
    }


    render(){
        let {currentTime}=this.state
        let min=Math.floor(currentTime/60)
        let sec=currentTime%60
        sec=sec<10?'0'+sec:''+sec

        let colorPercentage=Math.ceil(currentTime/212*100)+'%' 
        console.log('Min:', min, 'Sec:', currentTime, colorPercentage)
        return(
            <div style={{display: "flex", flexDirection: "column", alignItems:"center", justifyContent:"flex-start", height: "100%", width: '100%', backgroundColor: 'white', borderRadius: '1rem'}}>
                <div style={{height: '70%', width: '100%', backgroundColor: '', display: "flex", flexDirection: 'row', justifyContent:'space-evenly', alignItems: 'center', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem'}}>
                    <img src="https://i.scdn.co/image/ab67616d0000b273911836996618510e29a66085" alt="cover art" style={{height: '70%', width: '30%'}}/>
                    <div>
                        <h4 style={{padding: '0', height: '55%'}}>Never Gonna Leave This Bed</h4>
                        <p style={{margin: '0'}}>Maroon 5</p>
                    </div>
                </div>
                <div style={{height: '30%', width: '100%', backgroundColor: '', display: "flex", flexDirection: 'column', justifyContent:'center', alignItems: 'center', borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem'}}>
                    <div style={{height: '10%', width: '90%', backgroundColor: 'lightgray', backgroundImage: `linear-gradient(to right, #0090FF ${colorPercentage}, rgba(0,0,0,0)) ${colorPercentage}` }}></div>
                    <div style={{height: '10%', width: '90%', backgroundColor: '', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <p style={{margin: '0', fontSize: '60%'}}>{min}:{sec}</p>
                        <p style={{margin: '0', fontSize: '60%'}}>3:32</p>
                    </div>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        if(this.state.currentTime<212){
            this.timer=setTimeout(()=>this.setState({currentTime: this.state.currentTime+1}), 1000)
        }
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
        this.timer=null
        console.log('Cleared:', this.timer)
    }

}