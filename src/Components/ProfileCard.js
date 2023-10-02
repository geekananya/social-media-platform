

function ProfileCard(props){
    return(
        <div className="card flex items-center justify-center w-80 br3 base-color-bg ml3 ba1 b--black20 bg-yellow">
            <div className="ml2">
                <h2 className="head mt2">{`${props.username}`}</h2>
                <p>{`Reactions: ${props.reactions}`}</p>
                <a href='' >See Posts</a>
            </div>
            <div>
                <img src={props.pfp} alt='profile image' />
            </div>
        </div>
    )
}
export default ProfileCard;