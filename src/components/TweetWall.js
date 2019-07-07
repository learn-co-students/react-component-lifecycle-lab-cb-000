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
  componentWillMount = () => {
    this.setState({tweets:this.props.newTweets});
  }
  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps,nextState){
    return(nextProps.tweets > this.props.tweets)
  }
  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    var newArray = nextProps.newTweets.concat(this.state.tweets);
    this.setState({tweets:newArray});
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
