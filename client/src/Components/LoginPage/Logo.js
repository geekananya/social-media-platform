import logo from '../../assets/logo.jpg'

const Logo = (props) =>{
    return(
        <div className={`pa4 ${(props.isMobile? '': 'w-40')}`}>
            <img src={logo} alt="Logo" className="w-100" />
        </div>
    )
}

export default Logo;