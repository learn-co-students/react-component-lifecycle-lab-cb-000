import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {

    state = {
      tweets: []
  }

  componentWillMount() {
    this.setState({tweets: this.props.newTweets})
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ tweets: nextProps.newTweets.concat(this.state.tweets)})
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.newTweets.length > 0
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
