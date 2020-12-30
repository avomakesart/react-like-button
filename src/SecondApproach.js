import React from 'react';


class LikeButtonTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      liked: !this.state.liked,
    });
  }

  render() {
    const { liked } = this.state;
    const text = this.state.liked ? 100 : 100;
    const label = this.state.liked ? '101' : '100';
    return (
        <>
      <div className="customContainer">
        <button className={!liked ? 'like-button' : 'liked'} onClick={this.handleClick}>
          {label}
        </button>
        <p>you {text} this. Click to toggle.</p>
      </div>
      <style>{`
      .like-button {
          font-size: 1rem;
          padding: 5px 10px;
          color:  #585858;
      }
      .liked {
          font-weight: bold;
          color: #1565c0;
      }
      `}</style>;
      </>
    );
  }
}

export default LikeButtonTwo;
