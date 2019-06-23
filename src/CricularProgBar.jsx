import React, { Component } from 'react';
import './CircularProgBar.css';

class CircularProgBar extends Component {
    render() { 
        return (  
            <div>
                <div className="progress-circle over50 p75 mt2">
                    <span>75%</span>
                    <div className="left-half-clipper">
                    <div className="first50-bar"></div>
                    <div className="value-bar"></div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CircularProgBar;