import React from 'react'
import Trending from './Trending'
import Profile from './ProfileCard'
import Active from './Active'

export default class RightPane extends React.Component{

    render(){
        return(
            <div className='rp pl3'>
                <Active/>
                <Profile username={`ananya`} reactions='3' pfp={`https://robohash.org/236?set=set3`} />
                <Trending/>
            </div>
        )
    }
}