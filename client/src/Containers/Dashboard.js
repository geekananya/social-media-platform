import React from  'react';
import Navigate from  '../Components/Navigate';
import SlideMenu from '../Components/SlideMenu'
import Content from  '../Containers/Content';
import RightPane from  '../Components/RightPane';
import {auth} from '../firebaseConfig'
import './Dashboard.css'

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
            currentTab: 1,      //1-home, 2-user profile, 3-view clicked profile
            isMobile: (window.innerWidth <= 400)
        }
    }

    componentDidMount(){
        const handleResize = () => {
            this.setState({isMobile: window.innerWidth <= 400});
        };
        window.addEventListener('resize', handleResize);
        return () => {
            //clean on unmount
            window.removeEventListener('resize', handleResize);
        };
    }

    switchMiddleContent = (current) =>{
        this.setState({
            currentTab: current
        })
    }

    callLogout = () =>{
        this.props.onLogout();
    }

    showUserCard = (id) => {
        this.setState({userId: id});
    }

    render(){
        console.log("username", auth.currentUser.username);
        return(
            <div className='grid'>
                { this.state.isMobile?
                    <SlideMenu handleClick = {this.switchMiddleContent} logout={this.callLogout}/>:
                    <Navigate handleClick = {this.switchMiddleContent} current={this.state.currentTab} logout={this.callLogout}/>
                }
                <Content current={this.state.currentTab} user={this.state.userData} getUserId={this.showUserCard} setTab={this.switchMiddleContent}/>
                {!this.state.isMobile && <RightPane userId={this.state.userId}/>}
            </div>
        )
    }
}

export default Dashboard;