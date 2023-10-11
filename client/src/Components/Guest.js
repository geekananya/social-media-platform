import React from 'react'
import Posts from '../Containers/Posts'

export default function Guest(props){

    return(
        <div className='flex justify-center content pa3 pt0'>
            <div className='w-50'>
                <div className='flex justify-between items-center sticky base-color-bg'>
                    <h1 className='head base-color-text1 ma0 pl3 pv3'>{`>>Timeline`}</h1>
                    <button 
                        className='guest-sign-in button br-pill border pa2 mr3 bg-yellow grow'
                        onClick={props.handleSignin}
                    >
                        Sign In
                    </button>
                </div>
                <hr/>
                <Posts entrypoint='publicposts' query='' handleClick={props.handleSignin}/>
            </div>
        </div>
    )
}