const DisplayPage=(props)=>{
        let {link, title}=props
        console.log(link, title);
        return (
            <div className="ipodScreen">
                <div className="screen">
                    <div className="displayPage">
                        {link&& <img src={link} alt="Icon"/>}
                        <h2 style={{textAlign: "center", margin: "0%"}}>{title}</h2>
                    </div>
                </div>
            </div>
        )
}

export default DisplayPage;