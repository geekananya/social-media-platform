import React from  'react';
import Navigate from  '../Components/Navigate/Navigate';
import SlideMenu from '../Components/Navigate/SlideMenu'
import Content from  '../Containers/Content';
import RightPane from  '../Components/RightPane/RightPane';
import CreatePost from  '../Components/Create/CreatePost';
import './Dashboard.css'

class Dashboard extends React.Component {    
    constructor(){
        super();
        this.state = {  
            currentTab: 1,
            post: false
        }
    }

    callLogout = () =>{
        this.props.onLogout();
    }

    switchMiddleContent = (current) =>{
        this.setState({
            currentTab: current
        })
    }

    showUserCard = (id) => {
        this.setState({userId: id});
    }

    toggleCreate = () =>{
        this.setState({post: !this.state.post});
    }

    render(){
        return(
            <div className='grid'>
                {this.props.isMobile?
                    <SlideMenu handleClick = {this.switchMiddleContent} handleCreate={this.toggleCreate} logout={this.callLogout}/>:
                    <Navigate handleClick = {this.switchMiddleContent} handleCreate={this.toggleCreate} current={this.state.currentTab} logout={this.callLogout}/>
                }
                <Content 
                    current={this.state.currentTab}
                    email={this.props.email}
                    getUserId={this.showUserCard}
                    setTab={this.switchMiddleContent}
                />
                {!this.props.isMobile && <RightPane user={this.props.email}/>}
                {this.state.post && <CreatePost closeCreate={this.toggleCreate} email={this.props.email} />}
            </div>
        )
    }
}

export default Dashboard; 