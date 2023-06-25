import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Axios from 'axios';
import { StyledCreatePost } from './CreatePost.styled';

const CreatePost = function () {
    const [userName, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const submitPost = function () {
        Axios.post('http://localhost:3001/api/create', {
            userName: userName,
            title: title,
            text: text,
            date: new Date().toISOString(),
        });

        console.log('teste');
    };

    return (
        <React.Fragment>
            <Header />
            <StyledCreatePost>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        onChange={e => {
                            setUserName(e.target.value);
                        }}
                    />
                    <label htmlFor="title">Title</label>
                    <input
                        id="title"
                        type="text"
                        onChange={e => {
                            setTitle(e.target.value);
                        }}
                    />
                    <label htmlFor="post-text">Post text</label>
                    <textarea
                        id="post-text"
                        onChange={e => {
                            setText(e.target.value);
                        }}
                    ></textarea>

                    <button onClick={submitPost}>submit</button>
                </div>
            </StyledCreatePost>
        </React.Fragment>
    );
};

export default CreatePost;
