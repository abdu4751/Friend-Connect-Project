// First Card Box
let firstButton=document.querySelector("#addfriend-btn")
let secondButton=document.querySelector("#removefriend-btn")
let statusHeading=document.querySelector(".firstHeading")

firstButton.addEventListener("click",()=>{
    statusHeading.innerHTML="Friend"
    statusHeading.style.color="green"
})
secondButton.addEventListener("click",()=>{
    statusHeading.innerHTML="Stranger"
       statusHeading.style.color="red"
})

// Second Card Box

let thirdButton=document.querySelector(".second-card-btn")
let secondHeadingStatus=document.querySelector(".secondHeading")

let valuecheck=0;

thirdButton.addEventListener("click",()=>{
    if(valuecheck==0){
        secondHeadingStatus.innerHTML="Friend"
        thirdButton.innerHTML="Remove Friend";
        thirdButton.style.backgroundColor="red"
        secondHeadingStatus.style.color="green"
        valuecheck=1;
    }else{
        secondHeadingStatus.innerHTML="Stranger"
        thirdButton.innerHTML="Add Friend"
        thirdButton.style.backgroundColor="green"
          secondHeadingStatus.style.color="red"
        valuecheck=0;
    }
})