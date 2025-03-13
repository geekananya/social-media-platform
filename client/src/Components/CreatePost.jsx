import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { login } from '../../app/reducers/authReducer';
import { setPosts } from '../app/reducers/contentReducer';
import close from '../assets/icons/close.svg'
// import './CreatePost.css'

const CreatePost = () =>{

    const tags = useRef(null);
    // const text = useRef(null);
    // const img = useRef(null);
    const userEmail = useSelector(state => state.auth.userEmail);
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formdata = new FormData(event.target)
        formdata.append("email", userEmail);

        for (let value of formdata.values()){
            console.log(value)
        }

        fetch(`${import.meta.env.VITE_proxy}/createpost`, {
            method: 'POST',
            body: formdata
        })
        .then(resp=>{
            if(resp.ok)
            alert("Post Created successfully")
            else    throw new Error(resp);
        })
        .catch(err=>console.log("Post could not be made", err))
        dispatch(setPosts());
    };

    return (
        <div className="newpost-wrap flex justify-center items-center vh-100"
            // onClick={()=> dispatch(setPosts())}
        >
            <div className="
                absolute z-5
                newpost-ns
                pa4 bg-white br3 ba b--black-10 w-40-ns w-100 base-color-text1 base-colour-bg"
                onClick={(event)=>event.stopPropagation()}
            >
                <div className='flex justify-end align-start'>
                    <h1 className="f3 mb3 mt3 ml-auto mr-auto tc">Create a New Post</h1>
                    <img src={close} alt='close' 
                        width={40} height={40} 
                        className='o-30 pointer'
                        onClick={()=> dispatch(setPosts())}>
                    </img>
                </div>
                <form onSubmit={handleSubmit} className='pa2'>
                    <textarea
                        name="description"
                        placeholder="Write something..."
                        className="pa2 ma2 w-80"
                        required
                    />
                    <input
                        type="text"
                        ref={tags}
                        name="tags"
                        placeholder="Tags (space-separated)"
                        // value={state.tags}
                        className="pa2 ma2 mt0 db w-60"
                    />
                    <div>
                        <div className='tc mt4 mb3'>
                            <label htmlFor="image" className='db f4 mb3'>Add an image if you like</label>
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                className='ml4'
                                // onChange={handleInputChange}
                                // placeholder="https://example.com"
                            />
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="button ma2 mt3 f4 ba br-pill ph3 pv2 dib border"
                        >
                            Create Post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreatePost;
