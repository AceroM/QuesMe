import React, { Component } from 'react'
import '../styles/Thumbs.css';

export default class Thumbs extends Component {
    constructor(props) {
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
                <br />
                <br />
                <br />
                <br />
                <h2> How is the class doing right now ?</h2>
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
