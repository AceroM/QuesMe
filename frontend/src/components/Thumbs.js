import React, { Component } from 'react'

export default class Thumbs extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
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
