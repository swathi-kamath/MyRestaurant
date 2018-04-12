import React, { Component } from 'react';
import './review.css';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';
import AddReviewButton from '../review/addReviewButton';


class ReviewDisplay extends Component {
    getAverageRating() {
        let count = 0;
        let ratingAverage = 0;
        let ratingSum = 0;
        if (this.props.reviewReducer.reviews) {
            this.props.reviewReducer.reviews.forEach(review => {
                count = count + 1;
                ratingSum = ratingSum + review.rating;
            });
        }
        if (count > 0) {
            ratingAverage = (ratingSum / count).toFixed(1);
        }
        return { "count": count, "ratingAverage": ratingAverage };
    }
    render() {
        return (
            <div>
                <div className="rating-average">
                    <div style={{ "fontWeight": 'bold' }}>{this.getAverageRating().ratingAverage}</div>
                    <ReactStars
                        edit={false}
                        count={5}
                        value={parseFloat(this.getAverageRating().ratingAverage)}
                        half={true}
                        size={32}
                    />
                    <div style={{ 'color': 'grey', 'fontSize': '12px', 'verticalAlign': 'bottom' }}>{this.getAverageRating().count} reviews</div>
                </div>
                <AddReviewButton/>                  
                <div className="reviews-display w3-container">
                    {   
                        this.props.reviewReducer.reviews.map(function (review, index) {
                            return <div className="review w3-row" key={index}>
                                <div className="user">
                                    User : <b>{review.user}</b>
                                </div>
                                <div className="rating">
                                    <div className="value"> Rating : <b>{review.rating}</b></div>
                                    <div className="stars">
                                        <ReactStars
                                            edit={false}
                                            count={5}
                                            value={parseFloat(review.rating)}
                                            half={true}
                                            size={22}
                                        />
                                    </div>
                                </div>
                                <div className="comments">{review.comments}</div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    }
}
export default connect(state => state)(ReviewDisplay);
