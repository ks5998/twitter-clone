import React from 'react';
import './widgets.css';
import SearchIcon from '@mui/icons-material/Search';
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from 'react-twitter-embed';

function Widgets() {
  return (
    <div className='widgets'>
      <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon"/>
          <input type="text" placeholder='Search Twitter' />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1541629964218314752"}  />

        <TwitterTimelineEmbed 
         sourceType="profile"
         screenName="EconomicTimes"
         options={{height: 400}} />

        <TwitterShareButton 
         url={" "}
         options={{ text: "#reactjs is awsome"}}/>

      </div>
    </div>
  )
}

export default Widgets;