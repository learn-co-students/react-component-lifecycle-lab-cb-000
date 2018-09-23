import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    });
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.newTweets.every(tweet => this.state.tweets.includes(tweet))
    )
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets:  nextProps.newTweets.concat(this.state.tweets)
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
