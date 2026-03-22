import React, { useEffect, useState } from 'react';

const Post = () => {
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div className=''>
            <ul>
                {
                    post.map(p => <li className='border m-5 p-5 border-success'>{p.title}</li>)
                }
            </ul>
        </div>
    );
};

export default Post;