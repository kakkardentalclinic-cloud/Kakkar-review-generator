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
const painWords = [
"Bilkul pain feel nahi hua",
"Expected se kaafi comfortable experience raha",
"Treatment surprisingly painless tha",
"Procedure ke baad bhi dard bahut kam raha",
"Recovery bahut smooth rahi"
];

const staffWords = [
"Staff bahut cooperative tha",
"Entire team bahut professional thi",
"Reception staff bahut polite tha",
"Clinic team ne bahut support kiya",
"Appointment process bahut smooth raha"
];

const outcomeWords = [
"Result se bahut khush hu",
"Meri smile pehle se kaafi better lag rahi hai",
"Treatment ke baad confidence badh gaya",
"Expected se better result mila",
"Overall experience outstanding raha"
];

function generateReviews(treatment, count = 100) {
  const reviews = [];

  while (reviews.length < count) {
    const review =
`${treatment}. ${
doctorWords[Math.floor(Math.random()*doctorWords.length)]
}. ${
painWords[Math.floor(Math.random()*painWords.length)]
}. ${
hygieneWords[Math.floor(Math.random()*hygieneWords.length)]
}. ${
staffWords[Math.floor(Math.random()*staffWords.length)]
}. ${
outcomeWords[Math.floor(Math.random()*outcomeWords.length)]
}. ${
endingWords[Math.floor(Math.random()*endingWords.length)]
}`;
      }`;

    if (!reviews.includes(review)) {
      reviews.push(review);
    }
  }

  return reviews;
}

const reviews = {
  rct: generateReviews("Root canal treatment ke dauran", 500),
  extraction: generateReviews("Tooth extraction ke baad", 500),
  filling: generateReviews("Tooth filling treatment me", 500),
  denture: generateReviews("Denture treatment ke baad", 500),
  kids: generateReviews("Bachche ke treatment ke dauran", 500),
  implant: generateReviews("Dental implant treatment ke baad", 500)
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

