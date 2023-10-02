import React from  'react';
import Navigate from  '../Components/Navigate';
import Content from  '../Containers/Content';
import RightPane from  '../Components/RightPane';
import './Dashboard.css'

//states: screen size, toggle-menucomponent, tabs on timeline section.
//states: Profile clicked or not--show profile on side or redirect to profile.
//state to manage tabs of timeline in phone.
//state to manage current middle section (as chosen from left pane) -- done


class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            userData : {
                username: 'currentUser',
                friends: 35,
                reactions: 17,
                pfp_url: `https://robohash.org/ananya?set=set2&size=300x300`,
            },   //details of currently logged in user
            currentTab: 'Home',
            userId: 0,
        }
    }

    switchMiddleContent = (event) =>{
        this.setState({
            currentTab: event.target.innerHTML
        })
        console.log("CLick detected", this.state.currentTab);
    }

    render(){
        return(
            <div className='grid'>
                <Navigate handleClick = {this.switchMiddleContent} />
                <Content current={this.state.currentTab} user={this.state.userData}/>
                <RightPane/>
                    {/* <TabComponent />
                    <SectionComponent />  */}
            </div>
            // on clicking on someone's profile a small snippet of their profile appears on the right side--utilize right side.
        )
    }
}

export default Dashboard;


// Left-Pane       |       Timeline    |   Right-Pane
// Profile         |   Posts, Likes,   | Trending--Popular Tags 
// Search users,   |     comments      | Profile-Snippet
// topics,tags     |   text, videos,   | Active Users
// Upload/Post     |    photos
// Settings
// LogOut

//Right Pane will become a tab in content section in Phone.
//Left Pane will become Hamburger menu in phone.