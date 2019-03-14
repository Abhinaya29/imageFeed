import React, { Component } from 'react';
import './feed-list.css';

class FeedList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedList: []
        }
    }
    componentWillReceiveProps(nextprops) {
        const { feedListObj } = nextprops;
        let { feedList } = this.state;
        feedList.push(feedListObj);
        this.setState({
            feedList
        });
    }
    render() {
        const { feedList } = this.state;
        const listItems = feedList.map(function (item, ind) {
            return (
                <div className="feedlist-image" key={ind}>
                    <p>{item.title}</p>
                    <img src={item.url} alt={item.title} />
                </div>
            );
        });
        return (
            <div className="feedList">
                {listItems}
            </div>
        );
    }
}

export default FeedList;
