import React, { Component } from 'react';

class footer extends Component {
  render() {
    return (
      <div class="footer">
          <div class="footerbtn">
              <button class="fBtn1">About Facebook</button>
              <button class="fBtn2">Contact Facebook Support</button>
              <button class="fBtn3">Jobs at Facebook</button>
              <button class="fBtn4">Terms and Conditions</button>
          </div>

          <hr/>

          <div class="copyright">
              <p>&copy; insert copyright</p>
          </div>
      </div>
    );
  }
}

export default footer;
