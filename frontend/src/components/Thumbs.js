import React, { Component } from 'react'
import '../styles/Thumbs.css';

export default class Thumbs extends Component {
    constructor(props){
        super(props);
        this.state = {
            thumbPercentage: '1'
        }
    }
    saveColor = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="body"> {this.state.thumbPercentage}% </div>
                <div class="rating">
                    <div class="like grow">
                        <i class="fa fa-thumbs-up fa-3x like" aria-hidden="true"></i>
                    </div>
                    <div class="dislike grow">
                        <i class="fa fa-thumbs-down fa-3x like" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        )
  }
}
