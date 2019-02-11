import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <div class="Topheader">
      <h1 class="Facebook">Facebook 2.0</h1><input class="searchbox"type="text" name="search" size="60" maxlength="60"/>
      <button class="Search">Search</button>
      <button class="Profile">Profile</button>
      <button class="Home">Home</button>
      <button class="Messages">Messages</button>
      <button class="Notification">Notification</button>
      <button class="Settings">Settings</button>
      </div>
    );
  }
}

export default header;
