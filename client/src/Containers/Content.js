import React from 'react'
import Posts from './Posts'
import UserProfile from './UserProfile'
import { useState } from 'react'
import './Content.css'

export default function Content(props){

    const [showUser, setShowUser] = useState({
        status: false,
        userId: 236
    })

    const updateContent = (id) =>{
        props.setTab(3);
        setShowUser({
            status: true, 
            userId: id
        })
    }

    console.log("Content");
    return(
        <div className='content pa3 pt0'>
            {
                (props.current===1)
                ?<div>
                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pv3'>{`>>Timeline`}</h1>
                    <hr/>
                    <Posts url='https://dummyjson.com/posts?limit=10&skip=10' handleClick={updateContent} />
                </div> 
                :<div>
                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pv3'>{`>>User Profile`}</h1>
                    <UserProfile user={props.user} url='https://dummyjson.com/posts/user/5' userId={showUser.userId} />
                </div>
            }
        </div>
    )
}