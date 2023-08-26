import {posts} from "./data.js"





function getFeedHtml(){
    let feedHtml =''
    posts.forEach((post)=>{
        feedHtml+=`
        <div class = "user-profile">
         <img class="user-img" src="${post.avatar}">
        <div class="user-info">
        <h3>${post.name}</h3>
        <p>${post.location} </p> 
 </div>
        
        </div>
        <div class= "user-post">
        <img  class ="post-img" src="${post.post}"
        </div>
        <div class="icons">
        <span class="details">
        <i class="fa fa-regular fa-heart"></i>
        </span>
        <span class="details">
        <i class=" fa fa-regular fa-comment"></i>
        
        </span>
        <span class="details">
        <i class=" fa fa-thin fa-share"></i>
        </span>

        
        
        </div>
        <div class="likes">${post.likes} likes</div>
        <div class="user-comment">${post.username}: ${post.comment}</div>
        <hr>
        
        `
    })
    return feedHtml
}

function render(){
    document.getElementById("main-page").innerHTML = getFeedHtml()
}
render()