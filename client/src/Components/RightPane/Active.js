export default function Trending(){
    return(
        <div className="ml2 mb3">
            <h2 className="head tc">Active Users</h2>
            <div className="flex items-center"><img src={`https://robohash.org/1?set=set5&size=20x20`} alt='pfp' className='br-pill bg-dark-blue mh2'/><p >Leanne Graham</p></div>
            <div className="flex items-center"><img src={`https://robohash.org/2?set=set5&size=20x20`} alt='pfp' className='br-pill bg-dark-blue mh2'/><p >Ervin Howell</p></div>
            <div className="flex items-center"><img src={`https://robohash.org/3?set=set5&size=20x20`} alt='pfp' className='br-pill bg-dark-blue mh2'/><p >Clementine Bauch</p></div>
            <div className="flex items-center"><img src={`https://robohash.org/4?set=set5&size=20x20`} alt='pfp' className='br-pill bg-dark-blue mh2'/><p >Patricia Lebsack</p></div>
        </div>
    )
}