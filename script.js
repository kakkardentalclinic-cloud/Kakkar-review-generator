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
general: generateReviews("General Dental Treatment",500),
consultation: generateReviews("Dental Consultation",500),
scaling: generateReviews("Scaling Treatment",500),
scaling_polishing: generateReviews("Scaling and Polishing",500),
whitening: generateReviews("Tooth Whitening Treatment",500),
filling: generateReviews("Dental Filling Treatment",500),
composite: generateReviews("Composite Restoration",500),
laser_filling: generateReviews("Laser Filling Treatment",500),
rct: generateReviews("Root Canal Treatment",500),
capping: generateReviews("Dental Crown Treatment",500),
extraction: generateReviews("Tooth Extraction",500),
wisdom: generateReviews("Wisdom Tooth Extraction",500),
pulpectomy: generateReviews("Pulpectomy Treatment",500),
kids_rct: generateReviews("Kids Root Canal Treatment",500),
braces: generateReviews("Orthodontic Braces Treatment",500),
aligners: generateReviews("Clear Aligners Treatment",500),
smile: generateReviews("Smile Designing Treatment",500),
fullmouth: generateReviews("Full Mouth Rehabilitation",500),
denture: generateReviews("Denture Treatment",500),
implant: generateReviews("Dental Implant Treatment",500),
gums: generateReviews("Gum Treatment",500),
ulcers: generateReviews("Mouth Ulcer Treatment",500),
lip: generateReviews("Lip Correction Treatment",500),
fracture: generateReviews("Jaw Fracture Management",500),
trauma: generateReviews("Dental Trauma Treatment",500),
swelling: generateReviews("Facial Swelling Treatment",500),
spaceinfection: generateReviews("Space Infection Treatment",500),
pus: generateReviews("Pus Drainage Treatment",500),
cyst: generateReviews("Cyst Removal Treatment",500),
veneers: generateReviews("Dental Veneers Treatment",500),
bridge: generateReviews("Dental Bridge Treatment",500),
complete_denture: generateReviews("Complete Denture Treatment",500),
partial_denture: generateReviews("Partial Denture Treatment",500),
fmr: generateReviews("Full Mouth Reconstruction",500),
fluoride: generateReviews("Fluoride Treatment",500),
sealants: generateReviews("Pit and Fissure Sealants",500),
brushing: generateReviews("Tooth Brushing Guidance",500),
xray: generateReviews("Digital X-Ray",500),
emergency: generateReviews("Emergency Dental Treatment",500),
tmj: generateReviews("TMJ Treatment",500),
oral_surgery: generateReviews("Oral Surgery",500),
biopsy: generateReviews("Biopsy Procedure",500),
frenectomy: generateReviews("Frenectomy Treatment",500),
gingivectomy: generateReviews("Gingivectomy Treatment",500),
crown_lengthening: generateReviews("Crown Lengthening Procedure",500),
bone_grafting: generateReviews("Bone Grafting Procedure",500),
sinus_lift: generateReviews("Sinus Lift Procedure",500),
sensitivity: generateReviews("Tooth Sensitivity Treatment",500),
bad_breath: generateReviews("Bad Breath Treatment",500),
oral_screening: generateReviews("Oral Cancer Screening",500)
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

