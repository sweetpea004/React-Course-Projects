import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import Modal from "./Modal";
import classes from './PostList.module.css'

function PostList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((exisiting) => [postData, ...exisiting]);
    }

    return (
        <>
            {isPosting ? 
                <Modal onClose={onStopPosting}>
                    <NewPost 
                        onCancel={onStopPosting}
                        onAddPost={addPostHandler}
                    />
                </Modal> : false
            }
            
            <ul className={classes.posts}>
                
            </ul>
        </>
    );
}

export default PostList;