import React from 'react'
import Posts from './Posts'
import UserProfile from './UserProfile'
import './Content.css'


// const handleShowUser = (props, id) => {
//     console.log("in content.js","id", id);
//     props.getUserId(id);
// }

export default function Content(props){
    return(
        <div className='content pa3'>
            {
                props.current==='home'  
                ?<div>
                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pb3'>{`>>Timeline`}</h1>
                    <hr/>
                    <Posts url='https://dummyjson.com/posts?limit=10&skip=10'
                    // showuser={()=>handleShowUser(props)} 
                    />
                </div> 
                :<div>
                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pb3'>{`>>User Profile`}</h1>
                    <UserProfile user={props.user} url='https://dummyjson.com/posts/user/5' />
                </div>
            }
        </div>
    )
}