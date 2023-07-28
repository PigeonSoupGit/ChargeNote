const chargenoteForm = document.getElementById('chargenote-form');
const storySection = document.getElementById('completed-chargenote');
const nameButton = document.getElementById('nameButton');
const nameCard = document.getElementById('nameCard');
const nameInput = document.getElementById('nameInput');
const saveNameButton = document.getElementById('saveNameButton');

const submitchargenote = (event) => {
    //required to prevent the form from reloading on submit
    event.preventDefault();
    chargenoteForm.classList.add('hide');

    const form = new FormData(event.target);
    const userSubmission = Object.fromEntries(form);

    const story = `
        <h3>Your completed Note:</h3>
        <p>First Name: <span class="inserted-text">${userSubmission.Fname}</span> <br>
        Last Name: <span class="inserted-text">${userSubmission.Lname}</span> <br>
        Phone Number: <span class="inserted-text">${userSubmission.PN}</span> <br>
        Email: <span class="inserted-text">${userSubmission.Email}</span> <br>
        Station Number / Port: <span class="inserted-text">${userSubmission.Station}</span> <br> Car Make: <span class="inserted-text">${userSubmission.Cmake}</span> <br> Car Model: <span class="inserted-text">${userSubmission.Cmod}</span> 
<br> 	Resolution: <span class="inserted-text">${userSubmission.Res}</span>

</p>
    `;

    storySection.innerHTML += story;
    storySection.classList.remove('hide');

    let resetButton = `
        <button id="chargenote-reset" onclick="resetchargenote()">Try Again</button>
    `;
    storySection.innerHTML += resetButton;
}

const resetchargenote = () => {
    storySection.classList.add('hide');
    storySection.innerHTML = '';
    chargenoteForm.reset();
    chargenoteForm.classList.remove('hide');
}

	var date = new Date();
	var current_date = "&lt;!-- Mitchell - " + date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
	var current_time = date.getHours()+":"+date.getMinutes();
	var date_time = current_date+" "+current_time;	
	document.getElementById("p1").innerHTML = date_time;

    // Handle the button click to show the card/modal
nameButton.addEventListener('click', () => {
    nameCard.style.display = 'block';
  });
  
  // Handle the "Save" button click to save the user's name
  saveNameButton.addEventListener('click', () => {
    const userName = nameInput.value.trim(); // Get the input value and remove leading/trailing whitespaces
  
    // Check if the user has entered a name
    if (userName !== '') {
      // Save the name as a variable or do whatever you want with it
      alert(`Hello, ${userName}!`); // For example, show a welcome message with the user's name
      nameCard.style.display = 'none'; // Hide the card/modal after saving the name
    } else {
      alert('Please enter your name.'); // Show an error message if the name field is empty
    }
  });