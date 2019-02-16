import React, { Component } from "react";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      not_liked_img: "http://cdn.onlinewebfonts.com/svg/img_365874.png",
      liked_img:
        "https://b.kisscc0.com/20180705/spe/kisscc0-checkbox-check-mark-download-search-box-computer-i-checkbox-checked-5b3dc68b590140.5730385015307751793646.png",
      current_img: "http://cdn.onlinewebfonts.com/svg/img_365874.png",
      likes: this.props.likes
    };
  }

  handleClick(event) {
    if (this.state.liked === false) {
      this.props.incrementVote(this.props.my_id);
      this.setState({
        likes: this.props.likes + 1,
        liked: true,
        current_img: this.state.liked_img
      });
    } else {
      this.props.decrementVote(this.props.my_id);
      this.setState({
        likes: this.props.likes,
        liked: false,
        current_img: this.state.not_liked_img
      });
    }
  }
  render() {
    return (
      <div className="like_div">
        <img
          src={this.state.current_img}
          onClick={this.handleClick.bind(this)}
          my_index={this.props.my_index}
          className="like_box"
          width="25"
          height="25"
        />
      </div>
    );
  }
}

export default LikeButton;
