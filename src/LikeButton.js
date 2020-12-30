import cx from 'classnames';
import { Component } from 'react';

export default class LikeButton extends Component {
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
    const label = liked ? '101' : '100';

    return (
      <>
        <div>
          <h2>Like Button</h2>{' '}
          <button className={!liked ? 'like-button' : 'like-button liked'} onClick={this.handleClick}>
            Like | <span className="likes-counter">{label}</span>
          </button>
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
          `}</style>
      </>
    );
  }
}
