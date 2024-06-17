import { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../app/reducers/authReducer';
import Posts from '../Containers/Posts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import './styles.css'

export default function UserProfile(){

    const [user, setUser] = useState({});
    const userEmail = useSelector(state => state.auth.userEmail);
    const dispatch = useDispatch();

    useEffect(() =>{
        fetch(`https://connect-app-backend-7hpt.onrender.com/users/${userEmail}`)
        .then(resp=> resp.json())
        .then(user=> {
            console.log(user[0])
            setUser({
                name: user[0].name,
                avatar: user[0].picturePath,
                bio: user[0].bio,
                email: userEmail,
                location: user[0].location,
                doj: user[0].createdAt,
                // friends: 0
            })
        })
        .catch(err=>console.log("Caught error while fetching", err))
    }, [])

    return(
        <div className='shadow-base pa2 pt3 pr3 mt2 mr2 ml2 mb4 side bl br4 base-color-bg w-90'>
            <div className="flex justify-around items-center pr2">
                <img src={user.avatar || `https://robohash.org/ananya?set=set2&size=200x200`} 
                    alt='pfp'
                    height={'auto'}
                    className='w-40'
                />
                {(user.name===undefined)? <h2 className='tc base-color-text1 ma3'>Loading...</h2>:
                <div className='mr0'>
                    <h1 className="f2 head tc mv4">{user.name}</h1>
                    <p className='ma0 tc'>{`${user.bio}`}  <FontAwesomeIcon icon={faEdit} color='grey' className='pointer'/></p>
                    <p className='ma0 tc'>{`${user.email}`}</p>
                    <p className='ma0 tc'>{`${user.location}`}</p>
                    {/* <p className="f4 tc">{`Friends - ${user.friends}`}</p> */}
                    <p className='b'>{`Account Active Since: ${user.doj.substring(0,10)}`}</p>
                </div>}
            </div>
            <h1 className='mt4 mb0 ml3 base-color-text1'>Posts and Activity</h1>
            <Posts entrypoint="postsbyuser" query = {`/?id=${user.id}`} handleClick={()=>{}}/>
        </div>
    )
}