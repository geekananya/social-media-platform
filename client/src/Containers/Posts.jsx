import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTag } from '../app/reducers/searchReducer';
import like from '../assets/icons/like.svg';
import liked from '../assets/icons/like-fill.svg';
import unlike from '../assets/icons/unlike.svg';
import comment from '../assets/icons/comment.svg';
// import { setPosts } from '../app/reducers/contentReducer';
// import { current } from '@reduxjs/toolkit';

export default function Posts(){
    
    const [posts, setPosts] = useState(null);
    const tag = useSelector(state => state.search.tag);
    const current = useSelector(state=> state.content.current);
    const userEmail = useSelector(state => state.auth.userEmail);
    const dispatch = useDispatch();

    useEffect(()=>{
        fetchData();
    }, [tag])
    
    async function fetchData() {
    // Request to server
        try {
            // console.log("posts", posts);
            const response = await fetch(`https://connect-app-backend-7hpt.onrender.com/posts/${(current=='profile')?`${userEmail}/posts`:tag}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPosts(data); // Update state with fetched data
            // console.log("posts", posts);
          } catch (err) {
            console.error("Caught error while fetching", err);
          }
    }

    const toggleLike = (event) =>{
        let elem = event.target;
        elem.setAttribute("src", (elem.getAttribute("src") === like)? liked: like);
        let prev = elem.previousSibling;
        if(elem.getAttribute("src") === like)
            prev.classList.add("fly");
        else
            prev.classList.remove("fly");
        let next = elem.nextSibling;
        let likes = Number(next.textContent);
        //Add backend logic
        next.textContent = (elem.getAttribute("src") === liked)? likes+1: likes-1;
    }
        
    const imageOrText = (post) => {
        return (post.picturePath.length)
            ?<div>
                <p className='base-color-text1 ma2'>{post.description}</p>
                <img src={post.picturePath} alt='postImage' className='h-80 h-auto br3' />
            </div>
            : <p className='base-color-text1 ma2'>{post.description}</p> 
        ;
    }

    const getPosts = (posts)=>{
        if(posts.length===0)    
            return <div className='flex flex-column items-center'><h1 className='base-color-text1 tc mt4'>No Posts Found!</h1>
                {/* <button className='button br-pill f4 pa2' onClick={()=>dispatch(setTag({searchText: ''}))}>Go Back</button> */}
            </div>;
        return posts.map((post)=>
            <>
                <div className='flex items-center pointer'
                    // onClick = {()=>props.handleClick(post.poster_id)}
                    >
                    {/*user-info*/}
                    <img src={(post.userPicturePath)||`robohashhh`} alt='pfp' width={50} height={50} className=' bg-dark-blue mh2 ml3'/>
                    <p className='f4 base-color-text2'>{`${post.name}`}</p>
                </div>
                    {/*post*/}
                {imageOrText(post)}
                <div className='flex justify-between items-center'>
                        {/*Tags*/}
                    <p className='f6 pointer mw-40'>{
                        post.tags.map(tag => `#${tag} `)
                    }
                    </p>
                        {/*Reactions, replies*/}
                    <div className='relative t-0 flex items-center mr3'>
                        <img src={unlike} alt='unlike' className='unlike '/>
                        <img src={like} alt='like' onClick={toggleLike} className='pointer'/><p className='dib mh2 b'>{Object.keys(post.likes).length}</p>
                        <img src={comment} alt='comment' className='pointer comment'/><p className='dib mh2 b'>{Math.max(Object.keys(post.likes).length-3, 0)}</p>
                    </div>
                </div>
                <hr/>
            </>
            )
    }
    
    return (
        <>
            {
                (posts===null) ? <h1 className='tc base-color-text1 ma3'>Loading...</h1> : 
                <div className='pa4 w-90 content'>
                    {getPosts(posts)}
                </div>
            }
        </>
    )
}