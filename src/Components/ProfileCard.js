function ProfileCard(props){
    return(
        <div className="card flex items-center justify-center w-80 br3 base-color-bg ml3 ba1 b--black20 bg-yellow">
            <div className="ml2">
                <h2 className="head mt2">{`${props.username}`}</h2>
                <p>{`Reactions: ${props.reactions}`}</p>
                <p className="underline dib" >See Posts</p>
            </div>
            <div>
                <img src={props.pfp} alt='pfp'/>
            </div>
        </div>
    )
}
export default ProfileCard;