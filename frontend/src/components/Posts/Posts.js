import React, { useEffect } from 'react';
import ShowPost from '../ShowPost/ShowPost'
import axios from 'axios';

const shortText = true;

const Posts = () => {

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token);
        axios
            .get('http://localhost:5000/posts', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
            }, [])

        return (
            <div clasName="Posts">
                {/* {fakeDB.map(post => {
                return <ShowPost
                    adress={post.adress}
                    imgSource={post.imgSource}
                    title={post.title}
                    description={`${post.description.substring(0, 100)}...`} //shorten description to 100 characters
                    shortText={shortText} />
            })} */}

            </div>
        )
    }

export default Posts
