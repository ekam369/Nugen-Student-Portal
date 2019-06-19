import React, { Component } from 'react';
import './Assignment.css';
// import Task from './Task';
// import Rating from './Rating';
// import Uploadtab from './Uploadtab';
import CompletedTask from './CompletedTask';
import TodaysTask from './TodaysTask';
import HighestRating from './HighestRating';

class Assignment extends Component {
    render() { 
        return ( 
            <div>
                <div className="parent">
                    <CompletedTask />
                    <TodaysTask />
                    <HighestRating />
                    {/* <Task /> */}
                    {/* <Rating /> */}
                    {/* <Uploadtab /> */}
                </div>
            </div>    
        );
    }
}
 
export default Assignment;