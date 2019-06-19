import React, { Component } from 'react';
import './CompletedTask.css';

class Task2 extends Component {
    render() { 
        const iStyle = {
            fontSize : '10px'
        }
        return(
            <div>
                <div className="completed-task-box">
                    <div className="task-comp-tex-box">Completed Tasks</div>
                    <div className="task-body">
                        <div className="task-cover">
                            <div className="tick">
                                <div className="check">
                                    <i className="fa fa-check"></i>
                                </div>
                            </div>
                            <div className="task">
                                <div className="task-tex">You have to make eyes that will move on mouse hover</div>
                            </div>
                            <div className="rating">4.9
                                <div className="star-rating">
                                    <i style={iStyle} className="fa fa-star-o"></i>
                                </div>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="tick">
                                <div className="check">
                                    <i className="fa fa-check"></i>
                                </div>
                            </div>
                            <div className="task">
                                <div className="task-tex">You have to make eyes that will move on mouse hover</div>
                            </div>
                            <div className="rating">4.9
                                <div className="star-rating">
                                    <i style={iStyle} className="fa fa-star-o"></i>
                                </div>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="tick">
                                <div className="check">
                                    <i className="fa fa-check"></i>
                                </div>
                            </div>
                            <div className="task">
                                <div className="task-tex">You have to make eyes that will move on mouse hover</div>
                            </div>
                            <div className="rating">4.9
                                <div className="star-rating">
                                    <i style={iStyle} className="fa fa-star-o"></i>
                                </div>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="tick">
                                <div className="check">
                                    <i className="fa fa-check"></i>
                                </div>
                            </div>
                            <div className="task">
                                <div className="task-tex">You have to make eyes that will move on mouse hover</div>
                            </div>
                            <div className="rating">4.9
                                <div className="star-rating">
                                    <i style={iStyle} className="fa fa-star-o"></i>
                                </div>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="tick">
                                <div className="check">
                                    <i className="fa fa-check"></i>
                                </div>
                            </div>
                            <div className="task">
                                <div className="task-tex">You have to make eyes that will move on mouse hover</div>
                            </div>
                            <div className="rating">4.9
                                <div className="star-rating">
                                    <i style={iStyle} className="fa fa-star-o"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Task2;