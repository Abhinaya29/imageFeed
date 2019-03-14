import React, { Component } from 'react';
import './App.css';
import FeedList from './components/feedList/feed-list.component';
import FeedPost from './components/feedPost/feed-post.component';
class App extends Component {
  constructor(props) {
    super(props);
    this.postFeedList = this.postFeedList.bind(this);
    this.state = {
      feedListObj: {}
    }
  }
  postFeedList = (obj) => {
    this.setState({ feedListObj: obj });
  }
  render() {
    const { feedListObj } = this.state;
    return (
      <div className="App">
        <div className="feed-app">
          <FeedPost postFeedList={this.postFeedList} />
          <FeedList feedListObj = {feedListObj}/>
        </div>
      </div>
    );
  }
}
export default App;
