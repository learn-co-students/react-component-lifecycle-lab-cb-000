import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      latestTweets: []
    };
  }

  // Get new tweets just before mounting
  componentWillMount() {
    this.fetchTweets();
  }
  
  // Start interval to check for more tweets when mounted
  componentDidMount() {
    this.startInterval();
  }
  
  // Stop interval upon unmounting
  componentWillUnmount() {
    this.cleanUpInterval();
  }

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => clearInterval(this.interval);

  fetchTweets = () => {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }
}

export default App;
