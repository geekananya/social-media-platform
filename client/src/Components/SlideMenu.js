import React from 'react';
import { auth } from '../firebaseConfig';
import { signOut } from "firebase/auth";

import logo from '../assets/logo_small.jpg'
import home from '../assets/icons/home.svg'
import profile from '../assets/icons/profile.svg'
import search from '../assets/icons/search.svg'
import activity from '../assets/icons/activity.svg'
import upload from '../assets/icons/upload.svg'
import settings from '../assets/icons/settings.svg'
import logout from '../assets/icons/logout.svg'
import {slide as Menu} from 'react-burger-menu'
import './SlideMenu.css'

class SlideMenu extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menuOpen: false
        }
    }

    async handleLogout(){
        try{
            await signOut(auth);
            console.log("Successfully signed out");
            this.props.logout();
        } catch(error){
            console.log("SOmething's wrong. COuldn't sign out");
        }
    }
    
    handleStateChange (state) {
        this.setState({menuOpen: state.isOpen})  
    }
    closeMenu () {
        this.setState({menuOpen: false})
    }
    toggleMenu () {
        this.setState(state => ({menuOpen: !state.menuOpen}))
    }
    handleOnOpen (){
        this.toggleMenu();
    }

    render () {
        return (
        <div>
            <Menu 
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                // onOpen={this.handleOnOpen}
                >
                    <div className="sticky dib w-100 pa3 pt0 f3 flex-column justify-center">
                        <img src={logo} alt='logo' height={100} width={'auto'} className='center'/>
                        <div className='pl3'>
                            <div onClick = { ()=>{
                                this.closeMenu();
                                this.props.handleClick(1);
                            }} className='flex pointer base-color-text2'>
                                <img src={home} alt='' className='mr3'/> 
                                <p className='dib'>Home</p>
                            </div>
                            <div onClick = { ()=>{
                                this.closeMenu();
                                this.props.handleClick(2);
                            }} className='flex pointer base-color-text2'>
                                <img src={profile} alt='' className='mr3'/>
                                <p className='dib'>Profile</p>
                            </div>
                            <div className='flex pointer base-color-text2'>
                                <img src={search} alt='' className='mr3'/>
                                <p className='dib' >Discover</p>
                            </div>
                            <div className='flex pointer base-color-text2'>
                                <img src={activity} alt='' className='mr3'/>
                                <p className='dib' >Notification</p>
                            </div>
                            <div className='flex pointer base-color-text2'>
                                <img src={upload} alt='' className='mr3'/>
                                <p className='dib' >Make a Post</p>
                            </div>
                            <div className='flex pointer base-color-text2'>
                                <img src={settings} alt='' className='mr3'/>
                                <p className='dib' >Settings</p>
                            </div>
                            <div onClick={this.handleLogout} className='flex pointer base-color-text2'>
                                <img src={logout} alt='' className='mr3'/>
                                <p className='dib' >LogOut</p>
                            </div>
                        </div>
                    </div>
            </Menu>
        </div>
        )
    }
}

export default SlideMenu;