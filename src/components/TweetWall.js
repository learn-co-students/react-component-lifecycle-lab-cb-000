import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  // Get the new tweets passed down from App and update state before mounting
  componentWillMount() {
    this.setState({
      tweets: this.props.newTweets
    });
  }
  
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps) {
    return nextProps.newTweets.length > 0;
  }
  
  // Add new tweets to the beginning of the tweets array before updating
  componentWillReceiveProps(nextProps) {
    const tweets = [...nextProps.newTweets.slice(), ...this.state.tweets.slice()];
    
    this.setState({tweets});
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
