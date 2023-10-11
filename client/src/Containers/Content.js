import React from 'react'
import Posts from './Posts'
import UserProfile from './UserProfile'
import { useState, useCallback } from 'react'
import './Content.css'

export default function Content(props){

    const [showUser, setShowUser] = useState({
        status: false,
        userId: 2,
        email: props.email
    })

    async function fetchEmail(id) {
    try {
      const response = await fetch(`/userinfobyid/?id=${id}`);
      const user = await response.json();
      return user.email;
    } catch (error) {
      console.error('Error in fetchEmail:', error);
      throw error;
    }
    }
    async function fetchId(email) {
        try {
        const response = await fetch(`/userinfo/?email=${email}`);
        const user = await response.json();
        return user._id;
        } catch (error) {
        console.error('Error in fetchId:', error);
        throw error;
        }
    }

    const updateContent = useCallback(async (id) => {
        props.setTab(3);
        try {
            const email = await fetchEmail(id);
            setShowUser({
                status: true,
                userId: id,
                email: email,
            });
        } catch (error) {
            console.log("ERR:", error);
        }
    });

    return(
        <div className='content pa3 pt0'>
            {
                (props.current===1)
                ?<div>
                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pv3'>{`>>Timeline`}</h1>
                    <hr/>
                    <Posts entrypoint='posts' handleClick={updateContent} query='' />
                </div> 
                :<div>
                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pv3'>{`>>User Profile`}</h1>
                    <UserProfile email={(props.current===2)? props.email: showUser.email} userId={(props.current===2)? fetchId(props.email): showUser.userId} />
                </div>
            }
        </div>
    )
}