const reels = [
  {
    username: "shivam_rai",
    likeCount: 1240,
    isLiked: false,
    commentCount: 132,
    caption: "Late night coding, clean logic.",
  video: "./reel/1.mp4",
    userProfile: "https://example.com/profiles/shivam.jpg",
    shareCount: 48,
    isFollowed: true
  },
  {
    username: "tech_piyush",
    likeCount: 980,
    isLiked: true,
    commentCount: 76,
    caption: "Frontend animations done right.",
    video: "./reel/2.mp4",
    userProfile: "https://example.com/profiles/piyush.jpg",
    shareCount: 31,
    isFollowed: false
  },
  {
    username: "codewith_aarav",
    likeCount: 2150,
    isLiked: false,
    commentCount: 204,
    caption: "React hooks simplified.",
    video: "./reel/3.mp4",
    userProfile: "https://example.com/profiles/aarav.jpg",
    shareCount: 89,
    isFollowed: true
  },
  {
    username: "uiux_sara",
    likeCount: 1675,
    isLiked: true,
    commentCount: 158,
    caption: "Minimal UI beats clutter.",
    video: "./reel/4.mp4",
    userProfile: "https://example.com/profiles/sara.jpg",
    shareCount: 54,
    isFollowed: true
  },
  {
    username: "dev_rohit",
    likeCount: 640,
    isLiked: false,
    commentCount: 42,
    caption: "Daily GitHub streak maintained.",
    video: "./reel/5.mp4",
    userProfile: "https://example.com/profiles/rohit.jpg",
    shareCount: 19,
    isFollowed: false
  }
];

var sum = '';
reels.forEach(function(elem){ 
    sum= sum+`<div class="reel">
                <Video autoplay loop muted src="${elem.video}"></Video>
                
                <div class="bottom">
                    <div class="user">
                                        <img src="${elem.userProfile}" alt="">    
                       <h4>${elem.username}</h4>   
                       <button>${elem.isFollowed?'unfollwed':'follow'}</button> 
                    </div>
                    <h3>${elem.caption} </h3>
                </div>

                <div class="right">
                    <div class="like">
                        <h4 class="like-icon icon">${elem.isLiked?'<i class="love ri-heart-fill"></i>':'<i class="ri-heart-3-line"></i>'} </h4>
                        <h6>${elem.likeCount}</h6>
                    </div>

                    <div class="comment">
                        <h4 class="comment-icon  icon"><i class="ri-chat-ai-3-line"></i> </h4>
                        <h6>${elem.commentCount}</h6>
                    </div>

                    <div class="share">
                        <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></h4>
                        <h6>${elem.shareCount}</h6>
                        
                        <div class="menu">
                        <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                </div>
             </div>
         </div>
    </div>`
                
        
        
});
var allreels = document.querySelector('.all-reels')

allreels.innerHTML = sum;