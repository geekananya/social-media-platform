import React from 'react';
import like from '../assets/icons/like.svg';
import liked from '../assets/icons/like-fill.svg';
import unlike from '../assets/icons/unlike.svg';
import comment from '../assets/icons/comment.svg';

export default class Posts extends React.Component{
    constructor(){
        super();
        this.state = {
            posts: [],
            imagePosts: [],
            loading: true,
        }
    }

    componentDidMount(){
        fetch(this.props.url)
        .then(response => response.json())
        .then(obj => {
            this.setState({posts: obj.posts});
        })
        console.log("Text posts loaded");
        fetch('https://nature-image-api.vercel.app/search?q=sunflower')
        .then(response => response.json())
        .then(obj => {
            this.setState({imagePosts: obj.images, loading: false});
        })
        console.log("Images loaded");
    }
        
    toggleLike = (event) =>{
        let elem = event.target;
        elem.setAttribute("src", (elem.getAttribute("src") === like)? liked: like);
        let prev = elem.previousSibling;
        if(elem.getAttribute("src") === like)
            prev.classList.add("fly");
        else
            prev.classList.remove("fly");
        let next = elem.nextSibling;
        let likes = Number(next.textContent);
        next.textContent = (elem.getAttribute("src") === liked)? likes+1: likes-1;
    }
        
    imageOrText = (post, imagePosts) => {
        let img = imagePosts[(post.userId)%25];
        return Math.random()<0.5 
            ? <p className='base-color-text1'>{post.body}</p> 
            : <div>
                <p className='ma2'>{img.title}</p>
                <img src={img.image} alt='post' className='w-100 h-auto br3' />
            </div>
        ;
    }
    
    getPosts = (posts, imagePosts)=>{
        if(posts.length===0)    return <div></div>;
        return posts.map((post)=>
            <div>
                <div className='flex items-center pointer'
                    onClick = {()=>this.props.handleClick(post.userId)}
                    >
                    {/*user-info*/}
                    <img src={`https://robohash.org/${post.userId}?set=set5&size=30x30`} alt='pfp' className='br-pill bg-dark-blue mh2'/>
                    <p className='f4 base-color-text2'>{`User #${post.userId}`}</p>
                </div>
                    {/*post*/}
                {this.imageOrText(post, imagePosts)}
                <div className='flex justify-between items-center'>
                        {/*Tags*/}
                    <p className='f6 pointer mw-40'>{
                        post.tags.map(tag => `#${tag}`)
                    }
                    </p>
                        {/*Reactions, replies*/}
                    <div className='relative t-0 flex items-center mr3'>
                        <img src={unlike} alt='unlike' className='unlike '/>
                        <img src={like} alt='like' onClick={this.toggleLike} className='pointer'/><p className='dib mh2 b'>{post.reactions}</p>
                        <img src={comment} alt='comment' className='pointer comment'/><p className='dib mh2 b'>{Math.max(post.reactions-3, 0)}</p>
                    </div>
                </div>
                <hr/>
            </div> 
            )
    }
    
    render(){
        console.log("Posts");
        const {posts, imagePosts, loading} = this.state;
        return (
            <>
                {
                    loading ? <h1 className='tc base-color-text1 ma3'>Loading...</h1> : 
                    <div>
                        {this.getPosts(posts, imagePosts)}
                    </div>
                }
            </>
        )
    }
}