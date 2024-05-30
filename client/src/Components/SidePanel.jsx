import './styles.css'

export default function SidePanel(){
    return (
        <div className="pa2 pt3 pr3 mt3 mr3 mb4 w-30 side shadow-2 bl br4 base-color-bg h-fit">
            <div className="ml2 mb3">
                <h2 className="head tc mt2 mb2">Popular Posts</h2>
                <div className="flex items-center"><img src={`https://rob.org/1?set=set5&size=20x20`} alt='pfp' className='br-pill bg-dark-blue mh2'/><p >post</p></div>
                <div className="flex items-center"><img src={`https://rob.org/2?set=set5&size=20x20`} alt='pfp' className='br-pill bg-dark-blue mh2'/><p >post</p></div>
                <div className="flex items-center"><img src={`https://rob.org/3?set=set5&size=20x20`} alt='pfp' className='br-pill bg-dark-blue mh2'/><p >post</p></div>
                <div className="flex items-center"><img src={`https://rob.org/4?set=set5&size=20x20`} alt='pfp' className='br-pill bg-dark-blue mh2'/><p >post</p></div>
            </div>
            <hr className="w-75" align="center"/>
            <div>
                <h2 className="tc head">Trending</h2>
                <div className="ml3">
                    <p style={{textDecoration: 'underline'}}>Tags</p>
                    <p className="pointer">#sunflowers</p>
                    <p className="pointer">#whitecats</p>
                    <p className="pointer">#deep</p>
                    <p className="pointer">#night</p>
                    <p className="pointer">#newuser</p>
                </div>
                {/* top users or smth */}
            </div>
        </div>
    )
}