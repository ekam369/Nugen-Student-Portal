import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
    render() { 
        return (  
            <div>
                <div className="rating-box">
                    <div className="tex-box">
                        <div className="high-rating">Highest Rating:</div>
                        <div className="anim-star">
                            <div className="perf-tex">4.7</div>
                        </div>
                        <div className="my-profile">Achievements:</div>
                        <div className="short-tex">Average Rating:</div>
                        <div className="rating">4.5</div>
                        <div className="short-tex">Prev. Rating:</div>
                        <div className="prev-rating-box">
                            <div className="box-rating">4.5</div>
                            <div className="star">
                            <i class="fa fa-star-half-full"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Rating;