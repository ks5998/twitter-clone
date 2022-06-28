import React, { useState } from 'react';
import './tweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';

function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e)=>{
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'Kundan Singh',
      userName: '@Skundan98',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://d33wubrfki0l68.cloudfront.net/b698947e7d2fd349294b7076e28cafed63fc18b6/6a89b/images/kundan-transparent-photo.png"
    });
    
    setTweetMessage("");
    setTweetImage("");
  };

  
  return (
    <div className='tweetBox'>
        <form>
            <div className="tweetBox__input">
                <Avatar src="https://d33wubrfki0l68.cloudfront.net/b698947e7d2fd349294b7076e28cafed63fc18b6/6a89b/images/kundan-transparent-photo.png"></Avatar>
                <input 
                value={tweetMessage} 
                type="text" 
                placeholder="What's happening?" 
                onChange={e => setTweetMessage(e.target.value)}/>
            </div>

            <input 
            value={tweetImage}
            type="text"
            placeholder='Optional: Enter image url'
            className='tweetBox__imageInput'
            onChange={e => setTweetImage(e.target.value)} />

            <Button 
            onClick={sendTweet}
            type="submit"
            className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox