import React, { Component } from 'react';
import './TodaysTask.css';  

class TodaysTask extends Component {
    render() {
        const iStyle = {
            fontSize : '20px'
        } 
        return (  
            <div>
                <div className="today-task-box">
                    <div className="task-today-tex-box">Today's Tasks</div>
                    <div className="task-body2">
                        <div className="task-cover2">
                            <div className="tick2">
                                <div className="check2"></div>
                            </div>
                            <div className="task2">
                                <div className="task-tex2">You have to make eyes that will move on mouse hover</div>
                            </div>
                            <div className="upload2">
                                <div className="upload2-icon">
                                <i style={iStyle} class="fa fa-upload"></i>
                                </div>
                            </div>
                        </div>
                        <div className="task-cover2">
                            <div className="tick2">
                                <div className="check2"></div>
                            </div>
                            <div className="task2">
                                <div className="task-tex2">You have to make eyes that will move on mouse hover</div>
                            </div>
                            <div className="upload2">
                                <div className="upload2-icon">
                                <i style={iStyle} class="fa fa-upload"></i>
                                </div>
                            </div>
                        </div>
                        <div className="task-cover2">
                            <div className="tick2">
                                <div className="check2"></div>
                            </div>
                            <div className="task2">
                                <div className="task-tex2">You have to make eyes that will move on mouse hover</div>
                            </div>
                            <div className="upload2">
                                <div className="upload2-icon">
                                <i style={iStyle} class="fa fa-upload"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default TodaysTask;