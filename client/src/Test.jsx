// import { useRef } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { login } from '../../app/reducers/authReducer';
// import { setPosts } from '../app/reducers/contentReducer';
// import close from '../assets/icons/close.svg'
// // import './Test.css'

const Test = () =>{

    // const tags = useRef(null);
    // const text = useRef(null);
    // const img = useRef(null);
    // const userEmail = useSelector(state => state.auth.userEmail);
    // const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formdata = new FormData(event.target)
        for (let value of formdata.values()){
            console.log(value)
        }
        fetch("/api/uploadtest", {
            method: 'POST',
            body: formdata
        })
        .then(resp=>{
            if(resp.ok)
                alert("Post Created successfully")
            // else    throw new Error(resp.json());
        })
        .catch(err=>console.log("Post could not be made", err))
        // dispatch(setPosts());
    };

    return (
        <form onSubmit={handleSubmit} className='pa2'>
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
    );
}

export default Test;
