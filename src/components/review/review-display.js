import React, { Component } from 'react';
import './review.css';
import { connect } from 'react-redux';
import ReactStars from 'react-stars';


class ReviewDisplay extends Component {
    getAverageRating() {

        let count = 0;
        let ratingAverage = 0;
        let ratingSum = 0;
        if (this.props.reviewReducer.reviews) {
            this.props.reviewReducer.reviews.map(function (review, index) {
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
                    <div style={{ 'font-weight': 'bold' }}>{this.getAverageRating().ratingAverage}</div>
                    <ReactStars
                        edit={false}
                        count={5}
                        value={this.getAverageRating().ratingAverage}
                        half={true}
                        size={32}
                    />
                    <div style={{ 'color': 'grey', 'font-size': '12px', 'verticalAlign': 'bottom' }}>{this.getAverageRating().count} reviews</div>
                </div>
                <div className="reviews-display w3-container">
                    {   
                        this.props.reviewReducer.reviews.map(function (review, index) {
                            return <div className="review w3-row">
                                <div className="user">
                                    User : <b>{review.user}</b>
                                </div>
                                <div className="rating">
                                    <div className="value"> Rating : <b>{review.rating}</b></div>
                                    <div className="stars">
                                        <ReactStars
                                            edit={false}
                                            count={5}
                                            value={review.rating}
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
