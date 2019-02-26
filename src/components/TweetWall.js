import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentWillMount() {
    this.setState({
      tweets: this.state.tweets.concat(this.props.newTweets)
    });
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.newTweets === this.state.tweets)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: nextProps.newTweets.concat(this.state.tweets)
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
