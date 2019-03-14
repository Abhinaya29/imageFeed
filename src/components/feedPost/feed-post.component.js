import React, { Component } from 'react';
import './feed-post.css';

class FeedPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '',
            title: ''
        }
        this.postFeedList = this.postFeedList.bind(this);
    }
    postFeedList = () => {
        this.props.postFeedList(this.state);
        this.setState({
            url: '',
            title: ''
        });
    }
    render() {
        return (
            <div className="feedPost">
                <div className="input-field">
                <form>
                    <input className="feedpost-input" type="url" name="url" placeholder="URL" onChange={(e) => this.setState({ url: e.target.value })}
                        value={this.state.url} required/>
                    <div className="title-field">
                        <input className="feedpost-input" type="text" placeholder="Title" onChange={(e) => this.setState({ title: e.target.value })}
                            value={this.state.title} />
                        <button disabled={!this.state.title.length || !this.state.url.length} onClick={this.postFeedList}>New Post</button>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default FeedPost;
