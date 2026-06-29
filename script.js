const reviewLink =
"https://g.page/r/CTxgU-TLpYwzEBE/review";

const reviews = {

rct:[
"Root canal treatment bilkul painless raha.",
"Doctor ne har step explain kiya aur treatment comfortable tha.",
"RCT ka experience expected se bahut better tha."
],

extraction:[
"Akkal daant bina dard ke nikal gaya.",
"Tooth extraction bahut smoothly hui.",
"Stitches ke baad bhi recovery fast rahi."
],

filling:[
"Tooth filling ka result natural lag raha hai.",
"Broken tooth perfectly restore ho gaya.",
"Filling treatment bahut smooth tha."
],

denture:[
"Mere father ka denture perfectly fit hua.",
"Denture comfortable hai aur chewing bahut better ho gayi.",
"Excellent denture treatment."
],

kids:[
"Mere bachche ka treatment bahut patiently kiya gaya.",
"Kid-friendly environment and caring doctor.",
"My child was very comfortable."
]

};

let currentReview="";

function getReviews(){

let category =
document.getElementById("category").value;

if(category==="all"){
return Object.values(reviews).flat();
}

return reviews[category];
}

function newReview(){

let list = getReviews();

currentReview =
list[Math.floor(Math.random()*list.length)];

document.getElementById("reviewBox")
.innerText = currentReview;
}

function copyReview(){

navigator.clipboard.writeText(currentReview);

window.open(
reviewLink,
"_blank"
);
}

newReview();

