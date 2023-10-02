import React from 'react'
import Posts from './Posts'
import UserProfile from './UserProfile'
import './Content.css'


const setUserInfo = () =>{
//     setId({id: event.currentTarget.children[1].innerHTML});
//     // console.log("user clicked")
//     // console.log(event.currentTarget.children[1].innerHTML)
}

export default function Content(props){
    return(
        <div className='content pa3'>
            {
                props.current==='Home'  
                ?<div>
                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pb3'>{`>>Timeline`}</h1>
                    <hr/>
                    <Posts limit={10} />
                </div> 
                :<div>

                    <h1 className='head sticky base-color-bg base-color-text1 ma0 pl3 pb3'>{`>>User Profile`}</h1>
                    <UserProfile user={props.user} limit={2} />
                </div>
            }
        </div>
    )
}