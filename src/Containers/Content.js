import React from 'react'
import Posts from './Posts'
import UserProfile from './UserProfile'
import './Content.css'

export default function Content(props){
    return(
        <div className='content pa3 pt0'>
            {
                props.current==='home'  
                ?<div>
                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pv3'>{`>>Timeline`}</h1>
                    <hr/>
                    <Posts url='https://dummyjson.com/posts?limit=10&skip=10'/>
                </div> 
                :<div>
                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pv3'>{`>>User Profile`}</h1>
                    <UserProfile user={props.user} url='https://dummyjson.com/posts/user/5' />
                </div>
            }
        </div>
    )
}