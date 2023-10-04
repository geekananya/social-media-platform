import Posts from './Posts'

export default function UserProfile(props){
    console.log(props.user.pfp_url);
    return(
        <div>
            <div className="flex justify-around items-center pr2">
                <img src={`${props.user.pfp_url}`} alt='pfp' className='w-40' height={'auto'}/>
                <div className='mr0'>
                    <h1 className="f2 head tc mv5">{props.user.username}</h1>
                    <p className="f4 tc">{`Friends - ${props.user.friends}`}</p>
                    <p className="f4 tc">{`Total Reactions - ${props.user.reactions}`}</p>
                    <p>{`Account Active Since: ${props.age}`}</p>
                </div>
            </div>
            <h2>Posts and Activity</h2>
            <Posts url={props.url} />
        </div>
    )
}