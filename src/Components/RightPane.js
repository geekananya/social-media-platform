import React from 'react'
import Trending from './Trending'
import Profile from './ProfileCard'
import Active from './Active'

export default class Content extends React.Component{
    constructor(){
        super();
        this.state = {
            showUser: true          // update to false with functionality
        }
    }
    render(){
        console.log("in rightpane", "userId", this.props.userId);
        return(
            <div className='rp pl3'>
                <Active/>
                {
                    // (this.props.userId!=0) 
                    this.state.showUser && <Profile username='ananya' reactions='3' pfp='https://robohash.org/236?set=set3' />
                }
                <Trending/>
            </div>
        )
    }
}