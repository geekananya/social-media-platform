import { useSelector, useDispatch } from 'react-redux';
import Posts from "./Posts";
import Profile from "../Components/UserProfile";
import CreatePost from "../Components/CreatePost";

export default function Timeline(){

    const current = useSelector(state => state.content.current);

   const getContent = () =>{
        switch(current){
            case 'posts': return <Posts/>;
            case 'profile': return <Profile/>;
            case 'createPost': return <CreatePost/>;
            // case 'posts': return <Posts/>;
            default: return <h2>Nothing to show!</h2>;
        }
    }

    return (
        <div className="pa2 pt3 pr3 mb4 w-100 flex justify-center">
            {getContent()}
        </div>
    )
}