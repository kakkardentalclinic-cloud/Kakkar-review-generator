const reviewLink =
"https://g.page/r/CTxgU-TLpYwzEBE/review";
const doctorWords = [
  "Doctor bahut polite hain",
  "Doctor ne sab kuch patiently explain kiya",
  "Doctor ka behaviour bahut friendly raha",
  "Treatment ke dauran pura confidence diya",
  "Bahut caring aur professional approach rahi"
];

const hygieneWords = [
  "Clinic ki hygiene excellent hai",
  "Sterilization standards bahut achhe hain",
  "Clinic bahut clean aur well maintained hai",
  "Modern equipment aur neat environment hai",
  "Patient safety ka pura dhyan rakha gaya"
];

const endingWords = [
  "Highly recommended.",
  "Definitely recommend this clinic.",
  "Bahut accha experience raha.",
  "Family ke liye best dental clinic.",
  "Dobara zarurat padi to yahin aayenge."
];

function generateReviews(treatment, count = 100) {
  const reviews = [];

  while (reviews.length < count) {
    const review =
      `${treatment}. ${
        doctorWords[Math.floor(Math.random()*doctorWords.length)]
      }. ${
        hygieneWords[Math.floor(Math.random()*hygieneWords.length)]
      }. ${
        endingWords[Math.floor(Math.random()*endingWords.length)]
      }`;

    if (!reviews.includes(review)) {
      reviews.push(review);
    }
  }

  return reviews;
}

const reviews = {
  rct: generateReviews("Root canal treatment ke dauran", 100),
  extraction: generateReviews("Tooth extraction ke baad", 100),
  filling: generateReviews("Tooth filling treatment me", 100),
  denture: generateReviews("Denture treatment ke baad", 100),
  kids: generateReviews("Bachche ke treatment ke dauran", 100),
  implant: generateReviews("Dental implant treatment ke baad", 100)
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

