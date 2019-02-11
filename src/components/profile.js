import React, { Component } from 'react';
import MyProfilePic from './images/selfpic.jpg';

class profile extends Component {
  render() {
    return (
          <div class="sectionProfile">
            <img class="profilePic" src={MyProfilePic} alt="selfie" width="200" height="300" />
              <h1 class="Name">Luis Abad</h1>
              <div class="profileBtn">
              <button class="Timeline">Timeline</button>
              <button class="About">About</button>
              <button class="Friends">Friends</button>
              <button class="Photos">Photos</button>
              <button class="More">More</button>
              </div>
          </div>
    );
  }
}

export default profile;
