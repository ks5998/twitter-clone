import React, { useEffect, useState } from 'react'
import './feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import FlipMove from 'react-flip-move'; 

import db from './firebase';

function Feed() {

  const [posts, setPosts] = useState([]);

  //in this line we are getting access to all of our data from the firebase cloud server.
  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  }, []);

  return (
    <div className='feed'>

        <div className='feed__header'>
        <h2>Home</h2>
        </div>

        <TweetBox />

      <FlipMove>  
        {
        posts.map(post => (
        <Post
        key={post.text} 
        displayName={post.displayName}
        username={post.username}
        verified={post.verified}
        text={post.text}
        avatar={post.avatar}
        image={post.image}
        />
        ))
        }
      </FlipMove>  

    </div>
  )
}

export default Feed