const chargenoteForm = document.getElementById('chargenote-form');
const storySection = document.getElementById('completed-chargenote');

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