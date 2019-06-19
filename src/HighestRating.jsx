import React, { Component } from 'react';
import './HighestRating.css';

class HighestRating extends Component {
    render() { 
        return (  
            <div>
                <div className="high-task-box">
                    <div className="perf-tex-box">Weekly Performance</div>
                    <div className="perf-box">
                        <div className="anim-star">
                            <div className="perf-tex">4.9</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default HighestRating;