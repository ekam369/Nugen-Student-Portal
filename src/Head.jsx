import React, { Component } from 'react';
import './css/Head.css';
// import './Head.css';

class Design extends Component {
    myFunction = (x) => {
        document.getElementById("bar1").style.transform = "rotate(-45deg) translate(-8px, 9px)";
        document.getElementById("bar1").style.width = "35px"
        document.getElementById("bar2").style.opacity = "0";
        document.getElementById("bar3").style.transform = "rotate(45deg) translate(-6px, -7px)";
        document.getElementById("bar3").style.width = "35px"
        document.getElementById("bar").style.visibility = "visible";
        
    }
    render() { 
        return (  
            <div>
                <div className="personalbar">
                    <div className="menu">
                        <div className="menu-box" onClick={this.myFunction}>
                            <div id="bar1" className="bar1"></div>
                            <div id="bar2" className="bar2"></div>
                            <div id="bar3" className="bar3"></div>
                        </div>

                    </div>
                    <div className="nugen-logo">
                        <i className='fas fa-laptop-code laptop'></i>
                        <div className="nugen-tex">Nugen</div>
                    </div>
                    <div className="right-cover">
                        <div className="logout">
                            <i class="fa fa-power-off"></i>
                        </div>
                        <div className="noti-icon">
                        <i id="bell" class='far fa-bell'></i>
                        </div>
                        <div className="personal">
                            <div className="photo"></div>
                            <div className="naam">Ekamjit Singh</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Design;