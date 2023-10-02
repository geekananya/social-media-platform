// import {slide as Menu} from 'react-burger-menu';
import logo from '../assets/logo_small.jpg'
import home from '../assets/icons/home.svg'
import profile from '../assets/icons/profile.svg'
import search from '../assets/icons/search.svg'
import activity from '../assets/icons/activity.svg'
import upload from '../assets/icons/upload.svg'
import settings from '../assets/icons/settings.svg'
import logout from '../assets/icons/logout.svg'

export default function Navigate(props){
    return(
        // <Menu>
            <div className='base-color-bg  h-100'>
                <div className="navigate sticky left-0  dib w-100 pa4 pt0 f3 flex-column justify-center ">
                    <img src={logo} alt='logo' height={100} width={'auto'} className='center'/>
                    <div className='pl3'>
                        <div className='flex pointer base-color-text2'>
                            <img src={home} alt='' className='mr3'/>
                            <p onClick={props.handleClick} className='dib'>Home</p>
                        </div>
                        <div className='flex pointer base-color-text2'>
                            <img src={profile} alt='' className='mr3'/>
                            <p onClick={props.handleClick} className='dib'>Profile</p>
                        </div>
                        <div className='flex pointer base-color-text2'>
                            <img src={search} alt='' className='mr3'/>
                            <p onClick={props.handleClick} className='dib'>Discover</p>
                        </div>
                        <div className='flex pointer base-color-text2'>
                            <img src={activity} alt='' className='mr3'/>
                            <p onClick={props.handleClick} className='dib'>Notification</p>
                        </div>
                        <div className='flex pointer base-color-text2'>
                            <img src={upload} alt='' className='mr3'/>
                            <p onClick={props.handleClick} className='dib'>Make a Post</p>
                        </div>
                        <div className='flex pointer base-color-text2'>
                            <img src={settings} alt='' className='mr3'/>
                            <p onClick={props.handleClick} className='dib'>Settings</p>
                        </div>
                        <div className='flex pointer base-color-text2'>
                            <img src={logout} alt='' className='mr3'/>
                            <p onClick={props.handleClick} className='dib'>LogOut</p>
                        </div>
                    </div>
                </div>
            </div>
        // </Menu>
    )
}