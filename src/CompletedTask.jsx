import React, { Component } from 'react';
import './CompletedTask.css';

class Task2 extends Component {
    render() { 
        const col = {
            color : '#9368e9'
        }
        return(
            <div>
                <div className="comp-task-par">
                    <div className="head taday-task-tex">TODAY'S TASK</div>
                    <div className="task-body">
                        <div className="task tex-b">Move Eyes</div>
                        <div className="task tex-lang">HTML|CSS|JS</div>
                        <div className="task tex-rate">|| Max Score: 5.0</div>
                        <div className="task tex-desc">You have to make eyes that will move on mouse move</div>
                        <div className="upload-button">Upload</div>
                    </div>
                    {/* <div className="task-body">
                        <div className="task tex-b">Move Eyes</div>
                        <div className="task tex-lang">HTML|CSS|JS</div>
                        <div className="task tex-rate">|| Max Score: 5.0</div>
                        <div className="task tex-desc">You have to make eyes that will move on mouse move</div>
                        <div className="upload-button">Upload</div>
                    </div> */}
                    <div className="head comp-task-tex">UPLOADED TASKS</div>
                    <div className="comp-task-body">
                        <div className="task-cover">
                            <div className="task tex-b">Move Person</div>
                            <div className="task tex-lang">HTML|CSS|JS</div>
                            <div className="task tex-rate">|| 4.5/5.0</div>
                            <div className="upload-done-button">Done
                                <div className="circle">
                                <i class="fa fa-check tick"></i>
                                </div>
                            </div>
                            <div className="stars">
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star-half-full half-checked starr"></i>
                                <i class="fa fa-star-o unchecked starr"></i>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="task tex-b">Move Person</div>
                            <div className="task tex-lang">HTML|CSS|JS</div>
                            <div className="task tex-rate">|| 4.5/5.0</div>
                            <div className="upload-done-button">Done
                                <div className="circle">
                                <i class="fa fa-check tick"></i>
                                </div>
                            </div>
                            <div className="stars">
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star-half-full half-checked starr"></i>
                                <i class="fa fa-star-o unchecked starr"></i>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="task tex-b">Move Person</div>
                            <div className="task tex-lang">HTML|CSS|JS</div>
                            <div className="task tex-rate">|| 4.5/5.0</div>
                            <div className="upload-done-button">Done
                                <div className="circle">
                                <i class="fa fa-check tick"></i>
                                </div>
                            </div>
                            <div className="stars">
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star-half-full half-checked starr"></i>
                                <i class="fa fa-star-o unchecked starr"></i>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="task tex-b">Move Person</div>
                            <div className="task tex-lang">HTML|CSS|JS</div>
                            <div className="task tex-rate">|| 4.5/5.0</div>
                            <div className="upload-done-button">Done
                                <div className="circle">
                                <i class="fa fa-check tick"></i>
                                </div>
                            </div>
                            <div className="stars">
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star-half-full half-checked starr"></i>
                                <i class="fa fa-star-o unchecked starr"></i>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="task tex-b">Move Person</div>
                            <div className="task tex-lang">HTML|CSS|JS</div>
                            <div className="task tex-rate">|| 4.5/5.0</div>
                            <div className="upload-done-button">Done
                                <div className="circle">
                                <i class="fa fa-check tick"></i>
                                </div>
                            </div>
                            <div className="stars">
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star-half-full half-checked starr"></i>
                                <i class="fa fa-star-o unchecked starr"></i>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="task tex-b">Move Person</div>
                            <div className="task tex-lang">HTML|CSS|JS</div>
                            <div className="task tex-rate">|| 4.5/5.0</div>
                            <div className="upload-done-button">Done
                                <div className="circle">
                                <i class="fa fa-check tick"></i>
                                </div>
                            </div>
                            <div className="stars">
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star-half-full half-checked starr"></i>
                                <i class="fa fa-star-o unchecked starr"></i>
                            </div>
                        </div>
                        <div className="task-cover">
                            <div className="task tex-b">Move Person</div>
                            <div className="task tex-lang">HTML|CSS|JS</div>
                            <div className="task tex-rate">|| 4.5/5.0</div>
                            <div className="upload-done-button">Done
                                <div className="circle">
                                <i class="fa fa-check tick"></i>
                                </div>
                            </div>
                            <div className="stars">
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star checked starr"></i>
                                <i class="fa fa-star-half-full half-checked starr"></i>
                                <i class="fa fa-star-o unchecked starr"></i>
                            </div>
                        </div>
                    </div>
                    {/* <div className="head upload-time">Date & Time</div>
                    <div className="upload-time-box">
                        <div className="upload-cover">
                            <div className="upload-tex">Uploaded Date:</div>
                            <div className="date">20/06/2019</div>
                            <div className="upload-tex t2">Uploaded time:</div>
                            <div className="time">20:03</div>
                        </div>
                        <div className="upload-cover">
                            <div className="upload-tex">Uploaded Date:</div>
                            <div className="date">20/06/2019</div>
                            <div className="upload-tex t2">Uploaded time:</div>
                            <div className="time">20:03</div>
                        </div>
                        <div className="upload-cover">
                            <div className="upload-tex">Uploaded Date:</div>
                            <div className="date">20/06/2019</div>
                            <div className="upload-tex t2">Uploaded time:</div>
                            <div className="time">20:03</div>
                        </div>
                        <div className="upload-cover">
                            <div className="upload-tex">Uploaded Date:</div>
                            <div className="date">20/06/2019</div>
                            <div className="upload-tex t2">Uploaded time:</div>
                            <div className="time">20:03</div>
                        </div>
                        <div className="upload-cover">
                            <div className="upload-tex">Uploaded Date:</div>
                            <div className="date">20/06/2019</div>
                            <div className="upload-tex t2">Uploaded time:</div>
                            <div className="time">20:03</div>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
}
 
export default Task2;