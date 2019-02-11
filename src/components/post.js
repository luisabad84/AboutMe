import React, { Component } from 'react';
import FirstImg from './images/firstPicPost.jpg';
import SecImg from './images/secPicPost.jpg';
import Thankspic from './images/thanksmeme.jpg';
import Mycat from './images/thirdPicPost.jpg';
import Selfpicture from './images/selfpic.jpg';
import Myvideo from './images/vidOffice.mp4';

class post extends Component {
  render() {
    return (

      <div class="postpostpost">
        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> shared a post</p>
        <p class="postdate">Feb 11 2019</p>
        <hr/>
        <h1> First day at digitalCraft <i class="hastags">#youngpadawan</i></h1>
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>

        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> shared a picture</p>
        <p class="postdate">Feb 9 2019</p>
        <hr/>
        <img class="picpic" src={FirstImg} alt="marvel" width="450" height="500" />
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>

        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> shared a post</p>
        <p class="postdate">Jan 30 2019</p>
        <hr/>
        <h1>Insert Jedi mind trick</h1>
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>

        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> shared a picture</p>
        <p class="postdate">Jan 7 2019</p>
        <hr/>
        <img class="picpic" src={SecImg} alt="Jim" width="445" height="500" />
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>

        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> shared a post</p>
        <p class="postdate">Dec 31 2018</p>
        <hr/>
        <h1>Happy New Year!!</h1>
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>

        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> shared a post</p>
        <p class="postdate">Dec 24 2018</p>
        <hr/>
        <h1>Happy Holidays :) </h1>
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>

        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> shared a picture</p>
        <p class="postdate">Nov 24 2018</p>
        <hr/>
        <p>Everyone on Thanksgiving haha </p>
        <img class="picpic"src={Thankspic} alt="Dory" width="445" height="500" />
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>

        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> shared a post</p>
        <p class="postdate">Nov 5 2018</p>
        <hr/>
        <h1 class="hastags">#javascript #python</h1>
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>

        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> shared a picture</p>
        <p class="postdate">Sep 20 2018</p>
        <hr/>
        <img class="picpic" src={Mycat} alt="Catmeme" width="430" height="500" />
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>

        <div class="postpost">
        <p class="postheader"><i class="postname">Luis Abad</i> updated his profile picture</p>
        <p class="postdate">Sep 8 2018</p>
        <hr/>
        <img class="picpicpic" src={Selfpicture} alt="selfie" width="340" height="500" />
        <hr/>
        <button class="postlike">Like</button>
        <button class="postcomment">Comment</button>
        <button class="postshare">Share</button>
        <button class="postreport">Report</button>
        <textarea class="commentbox" name="comment" cols="60" rows="2" placeholder="Write a comment..." ></textarea>
        </div>


      </div>
    );
  }
}

export default post;
