export default function Trending(){
    return(
        <div>
            <h2 className="tc head">Trending</h2>
            <div className="ml3">
                <p style={{textDecoration: 'underline'}}>Tags</p>
                <p className="pointer">#sunflowers</p>
                <p className="pointer">#nailart</p>
                <p className="pointer">#g20summit</p>
                <p className="pointer">#night</p>
                <p className="pointer">#newuser</p>
            </div>
            <hr className="w-75" align="left"/>
            <div className="ml3">
                <p style={{textDecoration: 'underline'}}>Users</p>
                <p className="db">Narendra Modi</p>
                <p className="db">Lionel Messi</p>
                <p className="db">R. Praggnanandhaa</p>
            </div>
        </div>
    )
}