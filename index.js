/*** Dark Mode ***
  
  Purpose:
  - Use this starter code to add a dark mode feature to your website.

  When To Modify:
  - [ ] Project 5 (REQUIRED FEATURE) 
  - [ ] Any time after
***/

// Step 1: Select the theme button
let themeButton = document.getElementById("theme-button");
// Step 2: Write the callback function
const toggleLightMode = () => {
    document.body.classList.toggle("light-mode");
}

// Step 3: Register a 'click' event listener for the theme button,
//             and tell it to use toggleDarkMode as its callback function
themeButton.addEventListener("click", toggleLightMode);

/*** Form Handling ***
  
  Purpose:
  - When the user submits the RSVP form, the name and state they 
    entered should be added to the list of participants.

  When To Modify:
  - [ ] Project 6 (REQUIRED FEATURE)
  - [ ] Project 6 (STRETCH FEATURE) 
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: Add your query for the submit RSVP button here

const rsvpButton = document.getElementById("rsvp-button");

const addParticipant = (event, person) => {
  const newParticipant = document.createElement("p");
  newParticipant.textContent = `🎟️ ${person.name} from ${person.hometown} has RSVP'd.`;

  const participantsDiv = document.querySelector(".rsvp-participants");
  participantsDiv.appendChild(newParticipant);
};


// Other code below if any...


// Step 3: Add a click event listener to the submit RSVP button here
/*** Form Validation ***
  
  Purpose:
  - Prevents invalid form submissions from being added to the list of participants.

  When To Modify:
  - [ ] Project 7 (REQUIRED FEATURE)
  - [ ] Project 7 (STRETCH FEATURE)
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Any time between / after
***/

// Step 1: We actually don't need to select the form button again -- we already did it in the RSVP code above.

// Step 2: Write the callback function
const validateForm = (event) => {
  event.preventDefault(); // ⛔ Prevent the browser's popup validation

  let containsErrors = false;
  const rsvpInputs = document.getElementById("rsvp-form").elements;

  for (let i = 0; i < rsvpInputs.length; i++) {
    const input = rsvpInputs[i];
    const value = input.value.trim();

    if (input.tagName === "INPUT") {
      // Check if it's the email field and if it's valid
      if (
        (input.type !== "email" && value.length < 2) ||
        (input.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      ) {
        containsErrors = true;
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    }
  }

  if (!containsErrors) {
  const person = {
  name: document.getElementById("name").value.trim(),
  hometown: document.getElementById("state").value.trim()
};

  addParticipant(event, person);
  toggleModal(person);

    // Clear all inputs
    for (let i = 0; i < rsvpInputs.length; i++) {
      if (rsvpInputs[i].tagName === "INPUT") {
        rsvpInputs[i].value = "";
      }
    }
  }
};

// Step 3: Replace the form button's event listener with a new one that calls validateForm()
rsvpButton.addEventListener("click", validateForm);
/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
/*** Modal ***
  
  Purpose:
  - Use this starter code to add a pop-up modal to your website.

  When To Modify:
  - [ ] Project 9 (REQUIRED FEATURE)
  - [ ] Project 9 (STRETCH FEATURE)
  - [ ] Any time after
***/

const toggleModal = (person) => {
  let modal = document.getElementById("success-modal");
  let modalContent = document.getElementById("modal-text");

  modal.style.display = "flex";
  modalContent.textContent = `Thanks for RSVPing, ${person.name}! We can't wait to see you at the event!`;

  let intervalId = setInterval(animateImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
    modalImage.style.transform = 'rotate(0deg)';
    rotateFactor = 0;
  }, 5000);
};


let rotateFactor = 0;
const modalImage = document.querySelector("#success-modal img");

function animateImage() {
  if (rotateFactor === 0) {
    rotateFactor = -10;
  } else {
    rotateFactor = 0;
  }
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}
