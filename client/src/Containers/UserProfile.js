import { useEffect, useState} from 'react'
import Posts from './Posts'

export default function UserProfile(props){

    const [usermeta, setUsermeta] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch(`https://connect-app-backend-7hpt.onrender.com/userinfo/?email=${props.email}`)
        .then(resp=> resp.json())
        .then(user=> {
            setUsermeta({
                username: user.username,
                id: user._id,
                doj: user.join_date,
                friends: 0
            })
            setLoading(false);
        })
        .catch(err=>console.log("Caught error while fetching", err))
    }, [props.email])

    return(
        <div>
            <div className="flex justify-around items-center pr2">
                <img src={`https://robohash.org/ananya?set=set2&size=300x300`} 
                    alt='pfp' 
                    className='w-40' 
                    height={'auto'}
                />
                {loading? <h2 className='tc base-color-text1 ma3'>Loading...</h2>:
                <div className='mr0'>
                    <h1 className="f2 head tc mv4">{usermeta.username}</h1>
                    <p className='ma0 tc'>User #{`${usermeta.id}`}</p>
                    <p className="f4 tc">{`Friends - ${usermeta.friends}`}</p>
                    <p className='b'>{`Account Active Since: ${usermeta.doj.substring(0,10)}`}</p>
                </div>}
            </div>
            <h1 className='mt4 mb0 base-color-text1'>Posts and Activity</h1>
            <Posts entrypoint="postsbyuser" query = {`/?id=${usermeta.id}`} handleClick={()=>{}}/>
        </div>
    )
}