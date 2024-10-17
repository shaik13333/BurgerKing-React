import React from 'react'
import scanner from '../Assets/Scanner.webp'
import footerImg from '../Assets/footerInstallImage.png'
export default class GetApplication extends React.Component{
    render(){
        return(
            <div id='footerDiv'>
                <div id='scanner'>
                    <img src={scanner} alt="" />
                </div>
                <div id='install'>
                    <img src={footerImg} alt="" />
                </div>
            </div>
        )
    }
}