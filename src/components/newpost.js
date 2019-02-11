import React, { Component } from 'react';

class newpost extends Component {
  render() {
    return (
      <div>
      <div class="postbtn">
        <button class="Createbtn">Create Post</button>
        <button class="Photobtn">Photo/Video</button>
        <button class="Livebtn">Live Video</button>
        <button class="Eventsbtn">Live Events</button>
      </div>
        <textarea class="textpost" name="newpost" cols="85" rows="9" placeholder="What are you thinking...?"></textarea>
      </div>
    );
  }
}

export default newpost;
