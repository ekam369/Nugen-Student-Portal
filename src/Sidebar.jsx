import React, { Component } from 'react';
import CircularProgBar from './CricularProgBar';
// import './Sidebar.css';
import './css/Sidebar.css';

class Sidebar extends Component {
    
    render() { 
        return ( 
            <div>
                <div id="bar" className="bar">
                    <div className="tabs">
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Dashboard</div><i class="fa fa-home ico"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Attendance</div><i class="fas fa-hand-paper ico"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Batches</div><i class='fas fa-user-graduate ico'></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Courses</div><i class='fas fa-book-reader ico'></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Personal Details</div><i class="fa fa-file-text ico"></i>
                            </div>
                        </div>
                        <div className="tab">
                            <div className="tab-cover">
                                <div className="tab-tex">Assignments</div><i class='fas fa-book-open ico'></i>
                            </div>
                        </div>
                        
                        <div className="meter-box">
                            {/* mt1 for min-width 740
                            mt2 for max width 739 */}
                            <div className="meter-tex mt1">Course Completed</div>
                            <div className="meter-tex mt2">Course Comp.</div>
                            <div className="meter mt1"></div>
                            <CircularProgBar />
                            <div className="perc-completed mt1">75% completed</div>
                            <div className="meter-tex mt1">Average Rating</div>
                            <div className="meter-tex mt2">Avg. Rating</div>
                            <div className="meter mt1"></div>
                            <CircularProgBar />
                            <div className="perc-completed mt1">4.5 / 5.0</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Sidebar;