import React, { Component } from 'react';
import './CreatePost.css'

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadImage: false,
            image: '',
            caption: null,
            text: '',
            tags: '',
            isPublic: true,
        };
    }

    nam='';
    id=0;

    componentDidMount(){
        //find info about current user
        fetch(`https://connect-app-backend-7hpt.onrender.com/userinfo/?email=${this.props.email}`)
        .then(resp=> resp.json())
        .then(user=> {
            this.nam = user.name;
            this.id = user._id;
        })
        .catch((e)=>console.log("Error in fetch:",e))
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let body;
        if(this.state.uploadImage) body=this.state.image;
        else body=this.state.text
        //Post to server
        fetch("https://connect-app-backend-7hpt.onrender.com/createpost", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hasImg: this.state.uploadImage,
                body: body,
                title: this.state.caption,
                tags: this.state.tags.split(" "),
                public: this.state.isPublic,
                poster: this.nam,
                poster_id: this.id,
            })
        })
        .then(alert("Post Created successfully"))
        .catch(err=>console.log("Caught error while fetching", err))
        this.props.closeCreate();
    };

    handleCheckboxChange = () => {
        this.setState((prevState) => ({
            uploadImage: !prevState.uploadImage,
        }));
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handlePublicChange = () => {
        this.setState((prevState) => ({
            isPublic: !prevState.isPublic,
        }));
    };

    render() {
        return (
            <div className="newpost-wrap flex justify-center items-center vh-100"
                onClick={this.props.closeCreate}
            >
                <div className="newpost pa4 bg-white br3 ba b--black-10 w-40 base-color-text1 base-colour-bg"
                    onClick={(event)=>event.stopPropagation()}
                >
                    <h1 className="f3 tc">Create a New Post</h1>
                    <form onSubmit={this.handleSubmit} className='pa2'>
                        <label className={`pa2 ${!this.state.uploadImage && 'db'}`}>
                            <input
                                type="checkbox"
                                name="uploadImage"
                                checked={this.state.uploadImage}
                                onChange={this.handleCheckboxChange}
                                className="mr2"
                            />
                            Upload Image
                        </label>
                        {this.state.uploadImage ? (
                            <div>
                                <div>
                                    <label htmlFor="urlInput">Enter image URL:</label>
                                    <input
                                        type="url"
                                        name="url"
                                        onChange={this.handleInputChange}
                                        placeholder="https://example.com"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="caption"
                                    placeholder="Caption (optional)"
                                    value={this.state.caption}
                                    onChange={this.handleInputChange}
                                    className="pa2 ma2 w-80"
                                />
                            </div>
                        ):
                        (
                            <textarea
                                name="text"
                                placeholder="Write something..."
                                value={this.state.text}
                                onChange={this.handleInputChange}
                                className="pa2 ma2 w-80"
                                required
                            />
                        )}
                        <input
                            type="text"
                            name="tags"
                            placeholder="Tags (space-separated)"
                            value={this.state.tags}
                            onChange={this.handleInputChange}
                            className="pa2 ma2 mt0 db"
                        />
                        <label className="pa2 ma3">
                            <input
                                type="checkbox"
                                name="isPublic"
                                checked={this.state.isPublic}
                                onChange={this.handlePublicChange}
                                className="mr2"
                            />
                            Make Post Public
                            <p className='dib f6 light-silver'>
                                (Public posts are visible to all unregistered users who visit connect)
                            </p>
                        </label>
                        <div className='flex justify-center'>
                            <button
                                type="submit"
                                className="button ma2 mt3 f4 ba br-pill ph3 pv2 dib border"
                            >
                                Create Post
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default CreatePost;
