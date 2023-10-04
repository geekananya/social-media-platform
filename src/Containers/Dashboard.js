import React from  'react';
import Navigate from  '../Components/Navigate';
import SlideMenu from '../Components/SlideMenu'
import Content from  '../Containers/Content';
import RightPane from  '../Components/RightPane';
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
            currentTab: 'home',
            userId: 0,
            isMobile: (window.innerWidth <= 400)
        }
    }

    componentDidMount(){
        const handleResize = () => {
            this.setState({isMobile: window.innerWidth <= 400});
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            //clean on unmount
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

    render(){
        return(
            <div className='grid'>
                { this.state.isMobile?
                    <SlideMenu handleClick = {this.switchMiddleContent} logout={this.callLogout}/>:
                    <Navigate handleClick = {this.switchMiddleContent} current={this.state.currentTab} logout={this.callLogout}/>
                }
                <Content current={this.state.currentTab} user={this.state.userData} getUserId={this.showUserCard} />
                {!this.state.isMobile && <RightPane userId={this.state.userId}/>}
            </div>
        )
    }
}

export default Dashboard;