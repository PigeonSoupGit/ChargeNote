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
    <p>
        First Name: <span class="inserted-text">${userSubmission.Fname}</span>
        <br>
        Last Name: <span class="inserted-text">${userSubmission.Lname}</span>
        <br>
        Phone Number: <span class="inserted-text">${userSubmission.PH}</span>
        <br>
        Email: <span class="inserted-text">${userSubmission.Email}</span>
        <br>
        Station Number / Port: <span class="inserted-text">${userSubmission.Station}</span>
        <br>
        Car Make: <span class="inserted-text">${userSubmission.Cmake}</span>
        <br>
        Car Model: <span class="inserted-text">${userSubmission.Cmod}</span>
        <br>
        Resolution: <span class="inserted-text">${userSubmission.Res}</span>
        </p>`;

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

    // Handle the button click to show the card/modal
nameButton.addEventListener('click', () => {
    nameCard.style.display = 'block';
  });
  
  // Handle the "Save" button click to save the user's name
  saveNameButton.addEventListener('click', () => {
    const userName = nameInput.value.trim(); // Get the input value and remove leading/trailing whitespaces  
  
     // Check if the user has entered a name
  if (userName !== '') {
    // Save the name to local storage
    localStorage.setItem('userName', userName);
    nameCard.style.display = 'none'; // Hide the card/modal after saving the name
    // Update the date and time with the username
    updateDateTimeWithUserName(userName);
  } else {
    alert('Please enter your name.'); // Show an error message if the name field is empty
  }
  // Check if the user's name is already stored in local storage
const savedName = localStorage.getItem('userName');
if (savedName) {
  // Update the date and time with the saved username
  updateDateTimeWithUserName(savedName);
}
});

// Function to update the date with the username
function updateDateWithUserName(userName) {
    var date = new Date();
    var current_date = "<!-- " + `${userName} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}` + "  ";
    return current_date;
  }
  
  // Function to update the time
  function updateTime() {
    var date = new Date();
    var current_time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    var timeElement = document.getElementById("time");
    timeElement.textContent = current_time;
  }
  
  // Function to update date, time, and username
  function updateDateTimeWithUserName(userName) {
    var dateElement = document.getElementById("date");
    dateElement.textContent = updateDateWithUserName(userName);
    updateTime(); // Call updateTime to set the initial time
  
    // Update the time every minute using setInterval
    setInterval(updateTime, 60000); // 60000 milliseconds = 1 minute
  }

  // Check for the username on page load and update date and time
window.addEventListener('load', () => {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      updateDateTimeWithUserName(savedName);
    }
  });

  // Handle the "Cancel" button click to close the name prompt
document.getElementById('cancelNameButton').addEventListener('click', () => {
    nameCard.style.display = 'none';
  });
  
///////////// Clipboard /////////
function copyToClipboard() {
    // Get the generated note text
    const noteText = storySection.textContent;
  
    // Create a temporary textarea element to copy the text to the clipboard
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = noteText;
    document.body.appendChild(tempTextArea);
  
    // Select and copy the text from the textarea
    tempTextArea.select();
    document.execCommand('copy');
  
    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
  
    // Show a confirmation or feedback to the user (optional)
    alert('Note copied to clipboard!');
  }
